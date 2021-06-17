import classNames from "classnames"
import React from "react"
import style from "./style.module.scss"
const Contacts: React.FC = () => {
	return (
		<div
			className={style.contact}
			style={{
				background: `url('/img/contacts.png') center center no-repeat`,
			}}>
			<h1>Контакты</h1>
			<div className={style.cont}>
				<div className={style.addr}>
					<img src='/img/addr.svg' alt='addr' />
					<span>
						АДРЕС <br />
						<span>г. Донецк, ул. Горького, 50</span>
					</span>
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
				<button className={classNames("button_s", style.sender)}>
					Отправить
				</button>
				<input
					type='checkbox'
					id='check'
					className={classNames(style.checks, style.myCheck)}
				/>{" "}
				<label htmlFor='check' className={style.checks}>
					Я согласен(на) на обработку моих персональных данных
				</label>
			</form>
		</div>
	)
}

export default Contacts
