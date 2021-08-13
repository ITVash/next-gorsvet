import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"
import { Button, Input } from "antd"
import Head from "next/head"
import React from "react"
import { axios } from "../../core"
import * as crypto from "crypto"
import jwt from "jwt-decode"
import cooc from "js-cookie"

import style from "./style.module.scss"
import Link from "next/link"
import { useRouter } from "next/router"
import classNames from "classnames"

interface IForm {
	login?: string
	password?: string
}
interface ILayoutProps {
	title?: string
}
const Layout: React.FC<ILayoutProps> = ({ title, children }) => {
	const [token, setToken] = React.useState<string>("")
	const [page, setPage] = React.useState<string>("")
	const [form, setForm] = React.useState<IForm>({})
	const history = useRouter()
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }))
	}
	const handleAuth = async (): Promise<void> => {
		try {
			if (form.login !== "" && form.password !== "") {
				const { data } = await axios.post("/auth/login", {
					...form,
					password: crypto
						.createHash("md5")
						.update(form.password + process.env.PRIVATE_KEY)
						.digest("hex"),
				})
				localStorage.setItem("token", data.token)
				cooc.set("token", data.token)
				setToken(data.token)
			}
		} catch (error) {
			console.error(error)
		}
	}
	React.useEffect(() => {
		document.body.classList.remove("oh")
		document.body.classList.add("oa")
		return () => {
			document.body.classList.remove("oa")
			document.body.classList.add("oh")
		}
	}, [])
	React.useEffect(() => {
		if (localStorage.getItem("token")) {
			const dec: any = jwt(localStorage.getItem("token"))
			if (dec.exp * 1000 < Date.now()) {
				localStorage.removeItem("token")
				cooc.remove("token")
				return
			}
			setToken(localStorage.getItem("token"))
		}
	}, [])
	React.useEffect(() => {
		setPage(history.pathname.split("/").pop())
	}, [])
	if (token.length <= 0) {
		return (
			<>
				<Head>
					<title>Авторизация | Донецкгорсвет</title>
					<link rel='icon' href='/favicon.ico' />
					<link rel='manifest' href='/manifest.json' />
				</Head>
				<section className='auth'>
					<h1>Авторизация</h1>
					<Input
						placeholder='Login'
						type='text'
						value={form.login}
						name='login'
						onChange={handleChange}
					/>
					<Input.Password
						placeholder='Password'
						value={form.password}
						name='password'
						onChange={handleChange}
						iconRender={(visible) =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
					/>
					<Button onClick={handleAuth}>Войти</Button>
				</section>
			</>
		)
	}
	return (
		<>
			<Head>
				<title>Админка | {title ? title : "Донецкгорсвет"}</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<div className={style.wrapAdmin}>
				<header className={style.header}>
					<div className={style.logo}>Донецкгорсвет</div>
					<nav className={style.nav}>
						<ul>
							<li>
								<Link href='/ramzesadminka'>
									<a
										className={classNames({
											active: page === "ramzesadminka",
										})}>
										Главная
									</a>
								</Link>
							</li>
							<li>
								<Link href='/ramzesadminka/vacancies'>
									<a className={classNames({ active: page === "vacancies" })}>
										Вакансии
									</a>
								</Link>
							</li>
							<li>
								<Link href='/ramzesadminka/news'>
									<a className={classNames({ active: page === "news" })}>
										Новости
									</a>
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				<section className={style.content}>{children}</section>
			</div>
		</>
	)
}
export default Layout
