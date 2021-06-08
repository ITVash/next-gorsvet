import Sections from "components/Sections"
import React from "react"
interface IHomeProps {
	onClick?: () => void
}

const Homes: React.FC<IHomeProps> = ({ onClick }) => {
	return (
		<Sections types='video' src='/video/1.webm'>
			<div
				className='ml-120'
				style={{
					color: "#FFF",
					height: "100%",
					display: "flex",
					alignItems: "center",
					marginTop: "-40px",
				}}>
				<div>
					<h1
						style={{
							width: "564px",
							fontFamily: "Roboto Condensed",
							fontWeight: "bold",
							fontSize: "48px",
							lineHeight: "56px",
						}}>
						Делаем жизнь в нашем городе ярче!
					</h1>
					<button className='button' onClick={onClick}>
						услуги
					</button>
				</div>
			</div>
		</Sections>
	)
}

export default Homes
