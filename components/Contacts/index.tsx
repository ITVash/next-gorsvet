import React from "react"
import style from "./style.module.scss"
const Contacts: React.FC = () => {
	return (
		<div className={style.contact}>
			<h1>Контакты</h1>
			<div className={style.social}>
				<a href='/'>
					<img src='/img/fb.svg' alt='facebook' />
				</a>
			</div>
			<div className={style.map}></div>
			<div className={style.cont}>
				<div className={style.addr}>
					<span><img src='/img/addr.svg' alt='addr' />
					АДРЕС <br />
					<span>г. Донецк, ул. Горького, 50</span></span>
				</div>
				<div className={style.email}>
					<img src='/img/email.svg' alt='email' />
					<span>
						ПОЧТА <br />
						<span>gorsvet_pr@mail.ru</span>
					</span>
				</div>
				<div className={style.phone}>
					<img src='/img/phone_c.svg' alt='phone' />
					<span>
						ДИСПЕТЧЕРСКАЯ <br />
						<span>+380 (62) 338 07 50</span>
					</span>
				</div>
			</div>
			<h2>НАПИСАТЬ НАМ</h2>
			<form className={style.form}>
				<input type='text' placeholder='ФИО' className={style.fio} />
				<input type='text' placeholder='Телефон' className={style.phones} />
				<input type='text' placeholder='Email' className={style.emails} />
				<textarea
					className={style.message}
					name=''
					id=''
					cols={30}
					rows={10}
					placeholder='Ваше сообщение'
				/>
				<button className='button_s'>Отправить</button>
			</form>
		</div>
	)
}

export default Contacts
