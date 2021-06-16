import React from "react"

import style from "./style.module.scss"

type TSections = {
	types?: "video" | "image"
	src?: string
	title?: string
	icon?: string
}
const Sections: React.FC<TSections> = ({
	children,
	types,
	src,
	title,
	icon,
}) => {
	return (
		<>
			{types === "video" && (
				<section className={style.container_b}>
					<video preload='auto' width='100%' height='auto' autoPlay loop muted>
						<source src={src} type='video/webm; codecs="vp8, vorbis"' />
					</video>
					<div className={style.wrap}>{children}</div>
				</section>
			)}
			{types === "image" && (
				<section
					className={style.container}
					style={{
						background: `url(${src}) top center no-repeat`,
					}}>
					<div className={style.wrap}>
						{title && title.length > 1 && (
							<h1 className={style.titles}>
								{icon && <img src={icon} alt='icon' />}
								<span dangerouslySetInnerHTML={{ __html: title }} />
								{/* title */}
							</h1>
						)}
						{children}
					</div>
				</section>
			)}
		</>
	)
}

export default Sections
