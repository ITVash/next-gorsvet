import style from "./style.module.scss"
import { CaretDownOutlined } from "@ant-design/icons"
const Headers = () => {
	return (
		<header className={style.header}>
			<div className={style.logo}>
				<img src='/img/logo.png' alt='ДОНЕЦКГОРСВЕТ' />
			</div>
			<div className={style.info}>
				<p className={style.phone}>+380 (62) 338 07 50</p>
				<p>Диспетчерская</p>
				<p style={{ color: "#FFB800" }}>ККП АГД "Донецкгорсвет"</p>
			</div>
			<div className={style.container}></div>
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
		</header>
	)
}

export default Headers
