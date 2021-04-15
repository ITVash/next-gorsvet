import React from "react"

import style from "./style.module.scss"

type TSections = {
	types?: "video" | "image"
	src?: string
	title?: string
}
const Sections: React.FC<TSections> = ({ children, types, src, title }) => {
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
						backgroundSize: "100% 100%",
					}}>
					<div className={style.wrap}>{children}</div>
				</section>
			)}
		</>
	)
}

export default Sections
