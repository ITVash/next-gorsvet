import classNames from "classnames"
import { GetServerSideProps } from "next"
import Head from "next/head"
import React from "react"
import { newsApi, settingsApi } from "stores/api"
import { useRootState } from "stores/ProviderStore"
import { INews, ISettings } from "types"

import style from "../../styles/News.module.scss"

const NewsCurrent: React.FC = () => {
	const store = useRootState()
	const settings: ISettings = store.settingsStores.items
	const news: INews = store.newsStores.items[0]
	console.log(`news`, news && news.title)
	return (
		<>
			<Head>
				<title>{news && `${news.title} |`}Донецкгорсвет</title>
				<meta name='keywords' content='Донецкгорсвет,новости' />
				<meta
					name='description'
					content={`Донецкгорсвет информирует. ${news && news.title}`}
				/>
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<div className={style.news}>
				<header className={style.header}>
					<div className={style.logo}>
						<img src='/img/logo.png' alt='Logo' />
					</div>
					<div className={style.info}>
						<p className={classNames("black")}>
							<img src='/img/phone.svg' alt='' />
							<span className={classNames("black")}>Диспетчерская:</span>
							{settings && settings.phoneDis}
						</p>
					</div>
				</header>
				<section className={style.wrap}>
					<h1>{news && news.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: news && news.text }} />
				</section>
			</div>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { data } = await settingsApi.show()
	const { link } = params
	const news = await newsApi.showOne(String(link))
	return {
		props: {
			settingsData: data,
			store: {
				settingsStores: data,
				newsStores: news.data,
			},
		},
	}
}

export default NewsCurrent
