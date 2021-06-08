import NewsBox from "components/NewsBox"
import Sections from "components/Sections"
import React from "react"

const News: React.FC = () => {
	return (
		<Sections
			types='image'
			src='/img/news.jpg'
			icon='/img/news.svg'
			title='НОВОСТИ'>
			<div className='news-block'>
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
			</div>
		</Sections>
	)
}

export default News
