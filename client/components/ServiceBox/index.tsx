import React from "react"
import Image from "next/image"
import style from "./style.module.scss"

type TServiceProps = {
	title?: string
	icon?: string
}

const ServiceBox: React.FC<TServiceProps> = ({ title, icon }) => {
	return (
		<div className={style.box}>
			<div className={style.boxImage}>
				<Image src={icon} alt='icon' width={218} height={218} />
			</div>
			{/* <img src={icon} alt='icon' /> */}
			<button className='button_s'>Скачать</button>
			<p>{title}</p>
		</div>
	)
}

export default ServiceBox
