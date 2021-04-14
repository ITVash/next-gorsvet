import { CaretDownOutlined } from "@ant-design/icons"
import React from "react"

import style from "./style.module.scss"

const Header: React.FC = ({ children }) => {
	return (
		<>
			<header className={style.header}>
				<div className={style.logo}>
					<img src='/img/logo.png' alt='Logo' />
				</div>
				<div className={style.info}>
					{/* <p className={style.phone}>+380 (62) 338 07 50</p> */}
					<p>
						<img src='/img/phone.svg' alt='' />
						<span style={{ color: "#FFB800" }}>Диспетчерская:</span>+380 (62)
						338 07 50
					</p>
					{/* <p style={{ color: "#FFB800" }}>ККП АГД "Донецкгорсвет"</p> */}
				</div>
			</header>
			{children}
			<footer className={style.footer}>
				<div className={style.col1}>
					<a href='http://gorod-donetsk.com/' target='_blank' rel='noreferrer'>
						<img src='/img/admins.svg' alt='admins' />
						Администрация города Донецка
					</a>
				</div>
				<div className={style.col2}>
					<span>
						<CaretDownOutlined style={{ color: "#FFB800", fontSize: 24 }} />
					</span>
				</div>
				<div className={style.col3}>Коммерческие услуги</div>
			</footer>
		</>
	)
}

export default Header
