import { CaretDownOutlined } from "@ant-design/icons"
import classNames from "classnames"
import React from "react"

import style from "./style.module.scss"
type THeader = {
	onClick?: () => void
	service?: boolean
	pages?: number
}
const Header: React.FC<THeader> = ({ children, onClick, pages, service }) => {
	return (
		<>
			<header className={style.header}>
				<div className={style.logo}>
					<img src='/img/logo.png' alt='Logo' />
				</div>
				<div className={style.info}>
					{/* <p className={style.phone}>+380 (62) 338 07 50</p> */}
					<p
						className={classNames({
							black: service
								? pages >= 1 && pages <= 3
								: pages >= 1 && pages <= 2,
						})}>
						<img src='/img/phone.svg' alt='' />
						<span
							className={classNames({
								gold: service
									? pages === 0 || pages === 2 || pages === 4
									: pages === 0 || pages === 1 || pages === 3,
								gray: service ? pages === 3 : pages === 2,
							})}>
							Диспетчерская:
						</span>
						+380 (62) 338 07 50
					</p>
					{/* <p style={{ color: "#FFB800" }}>ККП АГД "Донецкгорсвет"</p> */}
				</div>
			</header>
			{children}
			<footer className={style.footer}>
				<div
					className={classNames(style.col1, {
						display: service ? pages > 0 && pages < 4 : pages > 0 && pages < 3,
					})}>
					<a href='http://gorod-donetsk.com/' target='_blank' rel='noreferrer'>
						<img src='/img/admins.svg' alt='admins' />
						Администрация города Донецка
					</a>
				</div>
				<div
					className={classNames({
						[style.col2]: pages === 0,
						[style.col2_b]: service
							? pages >= 1 && pages <= 3
							: pages >= 1 && pages <= 2,
						[style.col2_n]: service ? pages === 4 : pages === 3,
					})}>
					<span>
						<CaretDownOutlined
							className={classNames({
								nextI: pages === 0,
								nextI_b: pages >= 1,
							})}
							onClick={onClick}
						/>
					</span>
				</div>
				{/* <div className={style.col3}>Коммерческие услуги</div> */}
			</footer>
		</>
	)
}

export default Header
