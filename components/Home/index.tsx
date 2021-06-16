import Sections from "components/Sections"
import React from "react"
import style from "./style.module.scss"

interface IHomeProps {
	onClick?: () => void
}

const Homes: React.FC<IHomeProps> = ({ onClick }) => {
	return (
		<Sections types='video' src='/video/1.webm'>
			<div className={style.textHome}>
				<div>
					<h1>Делаем жизнь в нашем городе ярче!</h1>
					<button className='button' onClick={onClick}>
						услуги
					</button>
				</div>
			</div>
		</Sections>
	)
}

export default Homes
