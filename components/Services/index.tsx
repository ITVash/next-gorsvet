import Sections from "components/Sections"
import ServiceBox from "components/ServiceBox"
import React from "react"

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
	return (
		<Sections
			types='image'
			src='/img/service.jpg'
			icon='/img/talc.svg'
			title='УСЛУГИ'>
			<div className='service_box'>
				{service &&
					service.map((item, idx) => (
						<ServiceBox key={idx} title={item.title} icon={item.icon} />
					))}
			</div>
			<p style={{ width: "100%", textAlign: "center" }}>
				По вопросам предоставления услуг обращайтесь в планово-экономический
				отдел по адресу: г. Донецк, ул. Горького, 50
			</p>
		</Sections>
	)
}

export default Services
