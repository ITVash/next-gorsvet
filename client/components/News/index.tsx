import NewsBox from "components/NewsBox"
import Sections from "components/Sections"
import { observer } from "mobx-react-lite"
import React from "react"
import Slider from "react-slick"
import { useRootState } from "stores/ProviderStore"
import { INews } from "types"

const News: React.FC = observer(() => {
	const news: INews[] = useRootState().newsStores.items
	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
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
	return (
		<Sections
			types='image'
			src='/img/news.jpg'
			icon='/img/news.svg'
			title='НОВОСТИ'>
			<div className='news-block'>
				<Slider {...settings}>
					{news &&
						news.map((item, idx) => (
							<NewsBox
								data={item.updatedAt}
								title={item.title}
								text={item.text}
								link={item.link}
								image={item.images[0]}
								key={idx + item.title}
							/>
						))}
				</Slider>
			</div>
		</Sections>
	)
})

export default News
