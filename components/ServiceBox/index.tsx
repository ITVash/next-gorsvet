import React from "react"

import style from "./style.module.scss"

type TServiceProps = {
	title?: string
	icon?: string
}

const ServiceBox: React.FC<TServiceProps> = ({ title, icon }) => {
	return (
		<div className={style.box}>
			<img src={icon} alt='icon' />
			<button className='button_s'>Скачать</button>
			<p>{title}</p>
		</div>
	)
}

export default ServiceBox
