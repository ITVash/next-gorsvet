import React from "react"
import Link from "next/link"
import style from "./style.module.scss"

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
	return (
		<div className={style.newsBlock}>
			<p className={style.newsBlock__data}>{data}</p>
			<img src={image} alt='news image' className={style.newsBlock__image} />
			<h4 className={style.newsBlock__title}>{title}</h4>
			<p
				className={style.newsBlock__text}
				dangerouslySetInnerHTML={{ __html: text }}
			/>
			<Link href={link}>
				<a>Перейти к новости</a>
			</Link>
		</div>
	)
}

export default NewsBox