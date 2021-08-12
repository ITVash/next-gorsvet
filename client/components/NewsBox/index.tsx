import React from "react"
import Link from "next/link"
import style from "./style.module.scss"
import Images from "next/image"

type NewsBoxProps = {
	data?: string
	image?: string
	title?: string
	text?: string
	link?: string
}
const NewsBox: React.FC<NewsBoxProps> = ({
	data,
	text,
	title,
	image,
	link,
}) => {
	const dataFormat = (data: string): string => {
		const datas = new Date(data).getUTCDate()
		const month = new Date(data).getUTCMonth()
		const year = new Date(data).getFullYear()
		return String(datas) + "." + String(month + 1) + "." + String(year)
	}
	return (
		<div className={style.newsBlock}>
			<p className={style.newsBlock__data}>{dataFormat(data)}</p>
			<Images
				src={`${process.env.API_URL}news/news-photo/${image}`}
				alt='news image'
				width={454}
				height={415}
				quality={50}
			/>
			{/* <img src={image} alt='news image' className={style.newsBlock__image} /> */}
			<h4 className={style.newsBlock__title}>{title}</h4>
			<p
				className={style.newsBlock__text}
				dangerouslySetInnerHTML={{ __html: text }}
			/>
			<Link href={`news/${link}`}>
				<a>Перейти к новости</a>
			</Link>
		</div>
	)
}

export default NewsBox
