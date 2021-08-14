import { Button, Input } from "antd"
import Layout from "components/Layout"
import { observer } from "mobx-react-lite"
import React from "react"
import dynamic from "next/dynamic"
// import ReactQuill from "suneditor-react"
import { useRootState } from "stores/ProviderStore"
import { INews } from "types"

import style from "./style.module.scss"
import Upload from "components/Upload"
// const ReactQuill = dynamic(() => import("suneditor-react"), { ssr: false })
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
const News: React.FC = observer(() => {
	const [news, setNews] = React.useState<INews>({ text: "" })
	const [text, setText] = React.useState<string>("")
	const [image, setImage] = React.useState<any>([])
	const [edit, setEdit] = React.useState<boolean>(false)
	const store = useRootState()
	const newsBase: INews[] = store.newsStores.items
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		setNews((pre) => ({ ...pre, [e.target.id]: e.target.value }))
	}
	const addPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files[0]
		setImage((pre) => pre.concat(file))
	}
	const handleAddVacancies = (): void => {
		if (news.title !== "" && text !== "") {
			const attach = new FormData()
			if (!edit) {
				attach.append("title", news.title)
				attach.append("text", String(text))
				attach.append("link", Date.now().toString())
				image.length > 0 &&
					image.forEach((item) => {
						if (typeof item !== "string") {
							console.log(item, typeof item)
							attach.append("image", item)
							image.filter((img) => img !== item)
						}
					})
				attach.append("images", JSON.stringify(image))

				store.newsStores.create(attach)
				setNews({
					id: undefined,
					title: "",
					link: "",
					text: "",
					images: [],
				})
				setImage([])
				setText("")
				return
			}
			attach.append("title", news.title)
			attach.append("id", String(news.id))
			attach.append("text", String(text))
			attach.append("link", news.link)
			const old: string[] = []
			image.length > 0 &&
				image.forEach((item) => {
					if (typeof item !== "string") {
						console.log(item, typeof item)
						attach.append("image", item)
					} else {
						old.push(item)
					}
				})
			attach.append("images", JSON.stringify(old))

			store.newsStores.edit(attach)
			setNews({
				id: undefined,
				title: "",
				text: "",
				images: [],
			})
			setImage([])
			setText("")
			setEdit(false)
			return
		}
		alert("Не заполнены обязательные поля!")
	}
	const handleEdit = async (e: INews): Promise<void> => {
		setEdit(true)
		setNews({ ...e })
		setText(e.text)
		setImage(e.images)
	}
	const modules = {
		toolbar: [
			["bold", "italic", "underline", "strike", "blockquote"],
			[{ size: ["small", false, "large", "huge"] }, { color: [] }],
			[
				{ list: "ordered" },
				{ list: "bullet" },
				{ indent: "-1" },
				{ indent: "+1" },
				{ align: [] },
			],
			["link", "image", "video"],
			["clean"],
		],
	}

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"size",
		"color",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"video",
		"align",
	]
	React.useEffect(() => {
		store.newsStores.fetchData()
	}, [])

	return (
		<Layout title='Новости'>
			<h1>Новости</h1>
			<div className={style.vacancies}>
				<Input
					placeholder='Название новости'
					id='title'
					value={news.title}
					onChange={handleChange}
				/>
				<ReactQuill
					theme='snow'
					modules={modules}
					formats={formats}
					value={text}
					onChange={setText}
					/* value={news.text}
					onChange={(e) => setNews((pre) => ({ ...pre, text: e }))} */
				/>
				<Upload multiple listArr={image} onChange={setImage} />
				{/* <input type='file' onChange={addPhoto} /> */}
				<Button type='primary' onClick={handleAddVacancies}>
					Добавить новость
				</Button>
				<div className={style.vacanciesList}>
					{newsBase &&
						newsBase.map((item, idx) => (
							<div className={style.vacanciesList__item} key={idx + item.title}>
								<p className={style.item__id}>
									<b onClick={() => handleEdit(item)}>
										Порядковый номер #{item.id}{" "}
									</b>
									<span
										onClick={() => {
											if (window.confirm("Вы точно хотите удалить вакансию?")) {
												store.newsStores.delete(item.id)
											}
										}}>
										X
									</span>
								</p>
								<p className={style.item__title}>{item.title}</p>
								<p
									className={style.item__price}
									dangerouslySetInnerHTML={{ __html: item.text }}
								/>
							</div>
						))}
				</div>
			</div>
		</Layout>
	)
})

export default News
