import Sections from "components/Sections"
import React from "react"
import { useRootState } from "stores/ProviderStore"
import { ISettings } from "types"
import style from "./style.module.scss"

interface IHomeProps {
	onClick?: () => void
}

const Homes: React.FC<IHomeProps> = ({ onClick }) => {
	const settings: ISettings = useRootState().settingsStores.items
	return (
		<Sections types='video' src='/video/1.webm'>
			<div className={style.textHome}>
				<div>
					<h1>{settings.slogan}</h1>
					<button className='button' onClick={onClick}>
						услуги
					</button>
				</div>
			</div>
		</Sections>
	)
}

export default Homes
