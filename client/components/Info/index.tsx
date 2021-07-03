import Sections from "components/Sections"
import { observer } from "mobx-react-lite"
import Link from "next/link"
import React from "react"
import { useRootState } from "stores/ProviderStore"
import { ISettings } from "types"

import style from "./style.module.scss"

const Info: React.FC = observer(() => {
	const widthRef = React.useRef<number>(null)
	const settings: ISettings = useRootState().settingsStores.items
	React.useEffect(() => {
		widthRef.current = window.innerWidth
	}, [])
	return (
		<Sections
			types='image'
			src='/img/inform.jpg'
			title='ККП АДМИНИСТРАЦИИ Г. ДОНЕЦКА «<span class="gold">ДОНЕЦКГОРСВЕТ</span>»'>
			<div className={style.infoBox}>
				{settings &&
					settings.shel.map((shel, idx) => (
						<div className={style.infoBox__item} key={idx}>
							<img src='/img/info-icon.svg' alt='iconInfo' />
							<span>{shel}</span>
						</div>
					))}
			</div>
			<Link href='vacancies'>
				<button
					className='button_s'
					style={{
						marginBottom: "50px",
					}}>
					<b>ВАКАНСИИ</b>
				</button>
			</Link>
		</Sections>
	)
})

export default Info
