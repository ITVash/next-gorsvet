import Sections from "components/Sections"
import React from "react"

import style from "./style.module.scss"

const Info: React.FC = () => {
	return (
		<Sections
			types='image'
			src='/img/inform.jpg'
			title='ККП АДМИНИСТРАЦИИ Г. ДОНЕЦКА «<span class="gold">ДОНЕЦКГОРСВЕТ</span>»'>
			<div className={style.infoBox}>
				<div className={style.infoBox__item}>
					<img src='/img/info-icon.svg' alt='iconInfo' />
					<span>
						Многолетний опыт работы по оформлению и содержанию системы наружного
						освещения г. Донецка;
					</span>
				</div>
				<div className={style.infoBox__item}>
					<img src='/img/info-icon.svg' alt='iconInfo' />
					<span>
						Праздничное оформления площадей, скверов, парков, улиц с
						изготавлением и установкой иллюминации;
					</span>
				</div>
				<div className={style.infoBox__item}>
					<img src='/img/info-icon.svg' alt='iconInfo' />
					<span>
						Подсветка административных, общественных зданий, памятников
						культуры, искусства и архитектуры;
					</span>
				</div>
				<div className={style.infoBox__item}>
					<img src='/img/info-icon.svg' alt='iconInfo' />
					<span>
						Сотрудничество с ведущими производителями светотехнической
						продукции;
					</span>
				</div>
				<div className={style.infoBox__item}>
					<img src='/img/info-icon.svg' alt='iconInfo' />
					<span>Высококвалифицированые специалисты;</span>
				</div>
				<div className={style.infoBox__item}>
					<img src='/img/info-icon.svg' alt='iconInfo' />
					<span>Спецтехника для проведения работ;</span>
				</div>
				<div className={style.infoBox__item}>
					<img src='/img/info-icon.svg' alt='iconInfo' />
					<span>
						Автоматизированная система управления городским освещением;
					</span>
				</div>
				<div className={style.infoBox__item}>
					<img src='/img/info-icon.svg' alt='iconInfo' />
					<span>Качество выполняемых работ и доступность расценок на них;</span>
				</div>
			</div>
			<button
				className='button'
				style={{
					left: "50%",
					position: "absolute",
					bottom: "70px",
					transform: "translateX(-50%)",
				}}>
				<b>ВАКАНСИИ</b>
			</button>
		</Sections>
	)
}

export default Info
