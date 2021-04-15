import Sections from "components/Sections"
import React from "react"

const Homes: React.FC = () => {
	return (
		<Sections types='video' src='/video/1.webm'>
			<div
				className='ml-120'
				style={{
					color: "#FFF",
					height: "100%",
					display: "flex",
					alignItems: "center",
					marginTop: "-70px",
				}}>
				<div>
					<h2>
						Делаем жизнь в нашем
						<br />
						городе ярче!
					</h2>
					<button className='button'>услуги</button>
				</div>
			</div>
		</Sections>
	)
}

export default Homes
