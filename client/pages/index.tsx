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

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
	const [currPage, setCurrPage] = React.useState<number>(0)
	const [width, setWidth] = React.useState<number>(null)
	const [service, setService] = React.useState<boolean>(false)
	const widthRef = React.useRef<number>(null)

	React.useEffect(() => {
		setWidth(window.innerWidth)
	}, [])
	const handlePageChange = (num: number) => {
		setCurrPage(num)
	}
	const nextPage = (): void => {
		setCurrPage((prev) => prev + 1)
	}
	const onService = (): void => {
		setService((prev) => !prev)
		width >= 992 && setCurrPage((prev) => prev + 1)
	}

	return (
		<>
			<Head>
				<title>Донецкгорсвет</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			{width && width >= 992 ? (
				<Header onClick={nextPage} pages={currPage} service={service}>
					<ReactPS pageOnChange={handlePageChange} customPageNumber={currPage}>
						<Homes onClick={onService} />
						{service && <Services />}
						<Info />
						<News />
						<Contacts />
					</ReactPS>
				</Header>
			) : (
				width &&
				width < 991 && (
					<>
						<Header pages={currPage} service={service}>
							<Homes onClick={onService} />
						</Header>
						{service && (
							<Header pages={1} service={service}>
								<Services />
							</Header>
						)}
						<Header pages={service ? 2 : 1} service={service}>
							<Info />
						</Header>
						<Header pages={service ? 3 : 2} service={service}>
							<News />
						</Header>
						<Header pages={service ? 4 : 3} service={service}>
							<Contacts />
						</Header>
					</>
				)
			)}
		</>
	)
}
