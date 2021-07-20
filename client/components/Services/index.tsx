import Sections from "components/Sections"
import ServiceBox from "components/ServiceBox"
import React from "react"
import Slider from "react-slick"

interface IService {
	title?: string
	icon?: string
}

const Services: React.FC = () => {
	const service: IService[] = [
		{
			title: "Испытания и иследования",
			icon: "/img/icons1.svg",
		},
		{
			title: "Совместное использование Ж/Б опоры",
			icon: "/img/icons2.svg",
		},
		{
			title: "Аренда автотранспорта",
			icon: "/img/icons3.svg",
		},
	]
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
			src='/img/service.jpg'
			icon='/img/talc.svg'
			title='УСЛУГИ'>
			<div className='service_box'>
				<Slider {...settings}>
					{service &&
						service.map((item, idx) => (
							<ServiceBox
								key={idx + item.title}
								title={item.title}
								icon={item.icon}
							/>
						))}
				</Slider>
			</div>
			<p style={{ width: "100%", textAlign: "center", marginBottom: "50px" }}>
				По вопросам предоставления услуг обращайтесь в планово-экономический
				отдел по адресу: г. Донецк, ул. Горького, 50
			</p>
		</Sections>
	)
}

export default Services
