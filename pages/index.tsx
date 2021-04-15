import Head from "next/head"
import Sections from "components/Sections"
import ReactPS from "react-page-scroller"
import React from "react"
import Header from "components/Header"
import Homes from "components/Home"

export default function Home() {
	const [currPage, setCurrPage] = React.useState<number>(0)
	const handlePageChange = (num: number) => {
		setCurrPage(num)
	}
	const nextPage = (): void => {
		setCurrPage((prev) => prev + 1)
	}
	return (
		<>
			<Head>
				<title>Донецкгорсвет</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<Header onClick={nextPage}>
				<ReactPS pageOnChange={handlePageChange} customPageNumber={currPage}>
					<Homes />
					<Sections types='image' src='/img/service.jpg'>
						Экран 2
					</Sections>
					<Sections types='image' src='/img/service_d.jpg'>
						Экран 3
					</Sections>
					<Sections types='image' src='/img/inform.jpg'>
						Экран 4
					</Sections>
					<Sections types='image' src='/img/vacancies.jpg'>
						Экран 5
					</Sections>
					<Sections types='image' src='/img/news.jpg'>
						Экран 6
					</Sections>
				</ReactPS>
			</Header>
		</>
	)
}
