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
					marginTop: "-40px",
				}}>
				<div>
					<h1 style={{ fontSize: "48px", fontWeight: 700 }}>
						Делаем жизнь в нашем
						<br />
						городе ярче!
					</h1>
					<button className='button'>услуги</button>
				</div>
			</div>
		</Sections>
	)
}

export default Homes
