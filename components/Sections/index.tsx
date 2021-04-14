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
				<section className={style.container}>
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
						backgroundSize: "100% 100%",
						background: `url(${src}) top center no-repeat`,
					}}>
					<div className={style.wrap}>{children}</div>
				</section>
			)}
		</>
	)
}

export default Sections
