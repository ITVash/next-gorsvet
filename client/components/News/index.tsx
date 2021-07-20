import NewsBox from "components/NewsBox"
import Sections from "components/Sections"
import React from "react"
import Slider from "react-slick"

const News: React.FC = () => {
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
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
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
					<NewsBox
						data='25.12.2020'
						title='В ЦЕНТРЕ ДОНЕЦКА ЗАЖГЛИСЬ ОГНИ НА ГЛАВНОЙ ЁЛКУ РЕСПУБЛИКИ'
						text='Сегодня, 25 декабря, на площади Ленина состоялось торжественное 
          зажжение главной новогодней ёлки Донецк....'
						link='elka-strani'
						image='/img/111.png'
					/>
					<NewsBox
						data='25.12.2020'
						title='В ЦЕНТРЕ ДОНЕЦКА ЗАЖГЛИСЬ ОГНИ НА ГЛАВНОЙ ЁЛКУ РЕСПУБЛИКИ'
						text='Сегодня, 25 декабря, на площади Ленина состоялось торжественное 
          зажжение главной новогодней ёлки Донецк....'
						link='elka-strani'
						image='/img/111.png'
					/>
					<NewsBox
						data='25.12.2020'
						title='В ЦЕНТРЕ ДОНЕЦКА ЗАЖГЛИСЬ ОГНИ НА ГЛАВНОЙ ЁЛКУ РЕСПУБЛИКИ'
						text='Сегодня, 25 декабря, на площади Ленина состоялось торжественное 
          зажжение главной новогодней ёлки Донецк....'
						link='elka-strani'
						image='/img/111.png'
					/>
				</Slider>
			</div>
		</Sections>
	)
}

export default News
