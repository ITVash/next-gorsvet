import Head from "next/head"
import Sections from "components/Sections"
import ReactPS from "react-page-scroller"
import React from "react"
import Header from "components/Header"
import Homes from "components/Home"
import Services from "components/Services"
import Info from "components/Info"
import News from "components/News"
import Contacts from "components/Contacts"

export default function Home() {
	const [currPage, setCurrPage] = React.useState<number>(0)
	const [service, setService] = React.useState<boolean>(false)
	const handlePageChange = (num: number) => {
		setCurrPage(num)
	}
	const nextPage = (): void => {
		setCurrPage((prev) => prev + 1)
	}
	const onService = (): void => {
		setService((prev) => !prev)
		setCurrPage((prev) => prev + 1)
	}
	return (
		<>
			<Head>
				<title>Донецкгорсвет</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<Header onClick={nextPage} pages={currPage} service={service}>
				<ReactPS pageOnChange={handlePageChange} customPageNumber={currPage}>
					<Homes onClick={onService} />
					{service && <Services />}
					<Info />
					<News />
					<Contacts />
				</ReactPS>
			</Header>
		</>
	)
}
