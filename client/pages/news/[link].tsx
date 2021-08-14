import classNames from "classnames"
import { GetServerSideProps } from "next"
import Head from "next/head"
import React from "react"
import Slider from "react-slick"
import LightBox from "react-image-lightbox"
import { newsApi, settingsApi } from "stores/api"
import { useRootState } from "stores/ProviderStore"
import { INews, ISettings } from "types"

import style from "../../styles/News.module.scss"
import Link from "next/link"
interface IButtonProps {
	className?: any
	style?: any
	onClick?: any
}
const NextArrow: React.FC<IButtonProps> = ({ className, style, onClick }) => {
	return (
		<button
			className={classNames(className, "nextarr")}
			style={{ ...style, right: "40%", top: "-20px" }}
			onClick={onClick}
		/>
	)
}
const PrevArrow: React.FC<IButtonProps> = ({ className, style, onClick }) => {
	return (
		<button
			className={classNames(className, "prevarr")}
			style={{ ...style, left: "40%", top: "-20px" }}
			onClick={onClick}
		/>
	)
}
const NewsCurrent: React.FC = () => {
	const store = useRootState()
	const [photo, setPhoto] = React.useState<number>(0)
	const [open, setOpen] = React.useState<boolean>(false)
	const settings: ISettings = store.settingsStores.items
	const news: INews = store.newsStores.items[0]
	const settingsS = {
		dots: true,
		dotsClass: "slick-dots news-dots",
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
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
				<section className={style.images}>
					<Slider {...settingsS}>
						{news &&
							news.images.map((item, idx) => (
								<img
									src={`${process.env.API_URL}news/news-photo/${item}`}
									alt='img'
									key={idx + Date.now()}
									onClick={() => {
										setPhoto(idx)
										setOpen(true)
									}}
								/>
							))}
					</Slider>
				</section>
				<footer className={classNames(style.footer)}>
					<div className={classNames(style.col1)}></div>
					<div className={classNames(style.col2)}>
						<span>
							<Link href='/'>
								<a>На главную</a>
							</Link>
						</span>
					</div>
				</footer>
			</div>
			{open && (
				<LightBox
					mainSrc={
						news &&
						`${process.env.API_URL}news/news-photo/${news.images[photo]}`
					}
					nextSrc={news && news.images[(photo + 1) % news.images.length]}
					prevSrc={
						news &&
						news.images[(photo + news.images.length - 1) % news.images.length]
					}
					onCloseRequest={() => setOpen(false)}
					onMovePrevRequest={() =>
						setPhoto(
							(prev) => (prev + news.images.length - 1) % news.images.length,
						)
					}
					onMoveNextRequest={() =>
						setPhoto((prev) => (prev + 1) % news.images.length)
					}
				/>
			)}
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
