import { CaretDownOutlined } from "@ant-design/icons"
import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { GetServerSideProps } from "next"
import Head from "next/head"
import router from "next/router"
import React from "react"
import { settingsApi, vacanciesApi } from "stores/api"
import { useRootState } from "stores/ProviderStore"
import { ISettings, IVacancies } from "types"
import style from "./../styles/Vacancies.module.scss"

const Vacancies: React.FC = observer(() => {
	const store = useRootState()
	const settings: ISettings = store.settingsStores.items
	const vacancies: IVacancies[] = store.vacanciesStores.items
	React.useEffect(() => {
		document.body.classList.remove("oh")
		document.body.classList.add("oa")
		return () => {
			document.body.classList.remove("oa")
			document.body.classList.add("oh")
		}
	}, [])
	return (
		<>
			<Head>
				<title>Донецкгорсвет | Вакансии</title>
				<meta
					name='keywords'
					content='Донецкгорсвет,вакансии,работа,устроиться на работу'
				/>
				<meta
					name='description'
					content='Донецкгорсвет приглашает на работу.'
				/>
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<div className={style.wrap}>
				<header className={style.header}>
					<div className={style.logo}>
						<img src='/img/logo.png' alt='Logo' />
					</div>
					<div className={style.info}>
						<p className={classNames("black")}>
							<img src='/img/phone.svg' alt='' />
							<span className={classNames("gold")}>Диспетчерская:</span>
							{settings && settings.phoneDis}
						</p>
					</div>
				</header>
				<section className={style.cardBox}>
					<h1>
						<img src='/img/job.svg' alt='vacancies Icon' /> ВАКАНСИИ
					</h1>
					{vacancies &&
						vacancies.map((item, idx) => (
							<div className={style.cardBox__item} key={idx}>
								<p>
									<b>Вакансия - </b> {item.title}
								</p>
								{/* <p>
									<b>Требования к кандидатам:</b>
									<br />
									{item.req}
								</p>
								<p>
									<b>Примечание:</b>
									<br />
									{item.text}
								</p> */}
								<p>
									<b>Заработная плата:</b>
									<br />
									{item.salary} руб.
								</p>
							</div>
						))}
					<div className={style.home}>
						<button
							className='button_s'
							onClick={() => {
								router.push("/")
							}}>
							На главную
						</button>
					</div>
				</section>
				<footer className={classNames(style.footer)}>
					<div className={classNames(style.col1)}></div>
					<div className={classNames(style.col2_b)}>
						<span>
							<CaretDownOutlined className={classNames("nextI_b")} />
						</span>
					</div>
				</footer>
			</div>
		</>
	)
})

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await settingsApi.show()
	const vacancies = await vacanciesApi.show()
	return {
		props: {
			settingsData: data,
			store: { settingsStores: data, vacanciesStores: vacancies.data },
		},
	}
}
export default Vacancies
