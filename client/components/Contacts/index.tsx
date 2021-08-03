import classNames from "classnames"
import { observer } from "mobx-react-lite"
import React, { ChangeEvent } from "react"
import { useRootState } from "stores/ProviderStore"
import { ISettings } from "types"
import style from "./style.module.scss"
interface IForms {
	fio?: string
	phones?: string
	emails?: string
	message?: string
}
const Contacts: React.FC = observer(() => {
	const settings: ISettings = useRootState().settingsStores.items
	const [form, setForm] = React.useState<IForms>({})
	const [formError, setFormError] = React.useState<IForms>({})
	const handleChangeElement = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const field = e.target.id
		const val = e.target.value
		setForm((prev) => ({ ...prev, [field]: val }))
	}
	const checkPhone = (str: string) => {
		const testPhone = new RegExp(
			/^(\+38|38){0,1}[(]{0,1}[0-9]{3}[)]{0,1}[\s\-\.]{0,1}[0-9]{3}[\s\-\.]{0,1}[0-9]{2}[\s\-\.]{0,1}[0-9]{2}$/,
			"gm",
		)
		return testPhone.test(str)
	}
	const checkEmail = (str: string) => {
		const testEmail = new RegExp(
			/^([a-zA-Z0-9\_\.]{2,15}[\@][a-z]{2,10}[\.][a-z]{2,3})$/,
			"gm",
		)
		return testEmail.test(str)
	}
	const handleBlure = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const field = e.target.id
		const val = e.target.value
		if (field === "fio") {
			val.length < 5
				? setFormError((prev) => ({
						...prev,
						fio: "Укажите полное имя (ФИО)",
				  }))
				: setFormError((prev) => ({ ...prev, fio: "" }))
		} else if (field === "phones") {
			if (val.length >= 10 && checkPhone(val)) {
				setFormError((prev) => ({
					...prev,
					phones: ``,
				}))
				return
			}
			setFormError((prev) => ({
				...prev,
				phones: `Не верный формат номера! Длина номера не меньше 10 цифр!`,
			}))
		} else if (field === "emails") {
			if (val.length >= 8 && checkEmail(val)) {
				setFormError((prev) => ({
					...prev,
					emails: "",
				}))
				return
			}
			setFormError((prev) => ({
				...prev,
				emails: "Не верный формат почты!",
			}))
		} else if (field === "message") {
			val.length <= 10
				? setFormError((prev) => ({
						...prev,
						message: "Длина сообщения не может быть меньше 10 символов!",
				  }))
				: setFormError((prev) => ({
						...prev,
						message: "",
				  }))
		}
	}
	const handleSubmit = async (e: any): Promise<void> => {
		e.preventDefault()
		if (
			formError.fio.length > 0 ||
			formError.phones.length > 0 ||
			formError.emails.length > 0 ||
			formError.message.length > 0
		) {
			return alert("Проверьте правильность заполнения формы!")
		}
		const mess: string = `Отправитель: ${form.fio}%0AТелефон: ${form.phones}%0AПочта: ${form.emails}%0AСообщение: ${form.message}`
		await fetch(`${process.env.API_TEL}?chat_id=-558535981&text=${mess}`)
		setForm({
			fio: "",
			phones: "",
			emails: "",
			message: "",
		})
		return alert("Сообщение отправленно!")
	}
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
						<span>{settings.address}</span>
					</span>
				</div>
				<div className={style.email}>
					<img src='/img/email.svg' alt='email' />
					<span>
						ПОЧТА <br />
						<span>{settings.email}</span>
					</span>
				</div>
				<div className={style.phone}>
					<img src='/img/phone_c.svg' alt='phone' />
					<span>
						ДИСПЕТЧЕРСКАЯ <br />
						<span>{settings.phoneDis}</span>
					</span>
				</div>
			</div>
			<h2>НАПИСАТЬ НАМ</h2>
			<form className={style.form} onSubmit={handleSubmit}>
				<input
					type='text'
					id='fio'
					placeholder='ФИО'
					className={style.fio}
					value={form.fio}
					onChange={handleChangeElement}
					// onFocus={handleBlure}
					onBlur={handleBlure}
					required
				/>
				{formError && formError.fio && (
					<p className={style.fioE}>{formError.fio}</p>
				)}
				<input
					type='text'
					id='phones'
					placeholder='Телефон'
					className={style.phones}
					value={form.phones}
					onChange={handleChangeElement}
					onBlur={handleBlure}
					required
				/>
				{formError && formError.phones && (
					<p className={style.phonesE}>{formError.phones}</p>
				)}
				<input
					type='text'
					id='emails'
					placeholder='Email'
					className={style.emails}
					value={form.emails}
					onChange={handleChangeElement}
					onBlur={handleBlure}
					required
				/>
				{formError && formError.emails && (
					<p className={style.emailsE}>{formError.emails}</p>
				)}
				<textarea
					className={style.message}
					name=''
					id='message'
					cols={30}
					rows={10}
					placeholder='Ваше сообщение'
					value={form.message}
					onChange={handleChangeElement}
					onBlur={handleBlure}
					required
				/>
				{formError && formError.message && (
					<p className={style.messageE}>{formError.message}</p>
				)}
				<button className={classNames("button_s", style.sender)} type='submit'>
					Отправить
				</button>
				<input
					type='checkbox'
					id='check'
					className={classNames(style.checks, style.myCheck)}
				/>{" "}
				<label htmlFor='check' className={style.checks}>
					Нажимая кнопку отправить, Вы соглашаетесь на обработку Ваших
					персональных данных!
					{/* Я согласен(на) на обработку моих персональных данных */}
				</label>
			</form>
		</div>
	)
})

export default Contacts
