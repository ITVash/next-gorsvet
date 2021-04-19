import Sections from "components/Sections"
import React from "react"

import style from "./style.module.scss"

const ServiceDetail: React.FC = () => {
	return (
		<Sections
			types='image'
			src='/img/service_d.jpg'
			icon='/img/icon4.svg'
			title='испытания и исследования'>
			<table className={style.table}>
				<thead>
					<th>Вид иследования</th>
					<th>Бюджетная сфера</th>
					<th>Небюджетная сфера</th>
				</thead>
				<tbody>
					<tr>
						<td>
							Диэлектрические средства защиты (диэлектрические перчатки, галоши)
							(на одну пару) повышенным напряжением
						</td>
						<td>140,60</td>
						<td>166,17</td>
					</tr>
					<tr>
						<td>Испытание монтерского пояса на прочность</td>
						<td>140,60</td>
						<td>166,17</td>
					</tr>
					<tr>
						<td>Испытание страховочного каната на прочность (до 10 м)</td>
						<td>140,60</td>
						<td>166,17</td>
					</tr>
					<tr>
						<td>
							Слесарно-монтажный инструмент с изолирующими рукоятками повышенным
							напряжением
						</td>
						<td>140,60</td>
						<td>166,17</td>
					</tr>
				</tbody>
			</table>
		</Sections>
	)
}

export default ServiceDetail
