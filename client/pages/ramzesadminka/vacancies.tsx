import { Button, Input } from "antd"
import Layout from "components/Layout"
import { observer } from "mobx-react-lite"
import React from "react"
import { useRootState } from "stores/ProviderStore"
import { IVacancies } from "types"

import style from "./style.module.scss"

const Vacancies: React.FC = observer(() => {
	const [vac, setVac] = React.useState<IVacancies>({})
	const [edit, setEdit] = React.useState<boolean>(false)
	const store = useRootState()
	React.useEffect(() => {
		store.vacanciesStores.fetchData()
	}, [])
	const vacancies: IVacancies[] = store.vacanciesStores.items
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setVac((pre) => ({ ...pre, [e.target.id]: e.target.value }))
	}
	const handleAddVacancies = (): void => {
		if (vac.title !== "" && vac.salary !== "") {
			if (!edit) {
				const obj: IVacancies = {
					title: vac.title,
					salary: vac.salary,
					text: "",
					req: "",
				}
				store.vacanciesStores.create(obj)
				setVac({
					id: undefined,
					req: "",
					text: "",
					salary: "",
					title: "",
				})
				return
			}
			store.vacanciesStores.edit(vac)
			setVac({
				id: undefined,
				req: "",
				text: "",
				salary: "",
				title: "",
			})
			setEdit(false)
			return
		}
		alert("Не заполнены обязательные поля!")
	}
	const handleEdit = async (e: IVacancies): Promise<void> => {
		setEdit(true)
		setVac({ ...e })
	}
	return (
		<Layout title='Вакансии'>
			<h1>Вакансии</h1>
			<div className={style.vacancies}>
				<Input
					placeholder='Вакансия'
					id='title'
					value={vac.title}
					onChange={handleChange}
				/>
				<Input
					placeholder='Заробатная плата'
					id='salary'
					value={vac.salary}
					onChange={handleChange}
				/>
				<Button type='primary' onClick={handleAddVacancies}>
					Добавить вакансию
				</Button>
				<div className={style.vacanciesList}>
					{vacancies &&
						vacancies.map((item, idx) => (
							<div className={style.vacanciesList__item} key={idx + item.title}>
								<p className={style.item__id}>
									<b onClick={() => handleEdit(item)}>
										Порядковый номер #{item.id}{" "}
									</b>
									<span
										onClick={() => {
											if (window.confirm("Вы точно хотите удалить вакансию?")) {
												store.vacanciesStores.delete(item.id)
											}
										}}>
										X
									</span>
								</p>
								<p className={style.item__title}>{item.title}</p>
								<p className={style.item__price}>{item.salary} рос. руб.</p>
							</div>
						))}
				</div>
			</div>
		</Layout>
	)
})

export default Vacancies
