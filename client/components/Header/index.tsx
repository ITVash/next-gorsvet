import { CaretDownOutlined } from "@ant-design/icons"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { NextPage } from "next"
import React from "react"
import { useRootState } from "stores/ProviderStore"

import { ISettings } from "types"
import style from "./style.module.scss"

interface THeader {
	onClick?: () => void
	service?: boolean
	pages?: number
}
const Header: NextPage<THeader> = observer(
	({ children, onClick, pages, service }) => {
		const store = useRootState()
		const settings: ISettings = store.settingsStores.items
		return (
			<>
				<header
					className={classNames(style.header, {
						display: service ? pages === 4 : pages === 3,
					})}>
					<div className={style.logo}>
						<img src='/img/logo.png' alt='Logo' />
					</div>
					<div className={style.info}>
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
							{settings && settings.phoneDis}
						</p>
						{/* <p style={{ color: "#FFB800" }}>ККП АГД "Донецкгорсвет"</p> */}
					</div>
				</header>
				{children}
				<footer
					className={classNames(style.footer, {
						display: service ? pages === 4 : pages === 3,
					})}>
					<div
						className={classNames(style.col1, {
							display: pages > 0,
						})}>
						<a
							href='http://gorod-donetsk.com/'
							target='_blank'
							rel='noreferrer'>
							<img src='/img/admins.svg' alt='admins' />
							Администрация города Донецка
						</a>
					</div>
					<div
						className={classNames({
							[style.col2]: service
								? pages === 0 || pages === 2
								: pages === 0 || pages === 1,
							[style.col2_b]: service
								? pages === 1 || pages === 3
								: pages === 2,
							[style.col2_n]: service ? pages === 4 : pages === 3,
						})}>
						<span>
							<CaretDownOutlined
								className={classNames({
									nextI: service
										? pages === 0 || pages === 2
										: pages === 0 || pages === 1,
									nextI_b: service ? pages === 1 || pages === 3 : pages === 2,
									display: service ? pages === 4 : pages === 3,
								})}
								onClick={onClick}
							/>
						</span>
					</div>
				</footer>
				{service && pages === 4 ? (
					<footer className={style.footCon}>
						<div className={classNames(style.col1)}>
							<a
								href='http://gorod-donetsk.com/'
								target='_blank'
								rel='noreferrer'>
								<img src='/img/admins.svg' alt='admins' />
								Администрация города Донецка
							</a>
						</div>
						<div className={classNames(style.col2)}>
							<p className='gold'>
								ККП Администрации г. Донецка «Донецкгорсвет»
								<span style={{ color: "#FFF" }}>
									<br /> ©2021
								</span>
							</p>
						</div>
						<div className={classNames(style.col3)}>
							<p className='gold'>
								Разработка сайта{" "}
								<span style={{ color: "#FFF" }}>
									<a href={settings.develop[0].path}>
										{settings.develop[0].name}
									</a>{" "}
									&{" "}
									<a href={settings.develop[1].path}>
										{settings.develop[1].name}
									</a>
								</span>
							</p>
							<p className='gold'>
								Видеоматериалы{" "}
								<span style={{ color: "#FFF" }}>
									<a href={settings.develop[2].path}>
										{settings.develop[2].name}
									</a>
								</span>
							</p>
						</div>
					</footer>
				) : (
					!service &&
					pages === 3 && (
						<footer className={style.footCon}>
							<div className={classNames(style.col1)}>
								<a
									href='http://gorod-donetsk.com/'
									target='_blank'
									rel='noreferrer'>
									<img src='/img/admins.svg' alt='admins' />
									Администрация города Донецка
								</a>
							</div>
							<div className={classNames(style.col2)}>
								<p className='gold'>
									ККП Администрации г. Донецка «Донецкгорсвет»
									<span style={{ color: "#FFF" }}>
										<br /> ©2021
									</span>
								</p>
							</div>
							<div className={classNames(style.col3)}>
								<p className='gold'>
									Разработка сайта{" "}
									<span style={{ color: "#FFF" }}>
										<a href={settings.develop[0].path}>
											{settings.develop[0].name}
										</a>{" "}
										&{" "}
										<a href={settings.develop[1].path}>
											{settings.develop[1].name}
										</a>
									</span>
								</p>
								<p className='gold'>
									Видеоматериалы{" "}
									<span style={{ color: "#FFF" }}>
										<a href={settings.develop[2].path}>
											{settings.develop[2].name}
										</a>
									</span>
								</p>
							</div>
						</footer>
					)
				)}
			</>
		)
	},
)

export default Header
