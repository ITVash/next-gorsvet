import { Container, makeStyles, Paper, Theme } from "@material-ui/core"
import type { NextPage } from "next"
import Layout from "../layout"

const useStyle = makeStyles((theme: Theme) => ({
	section: {
		height: "100vh",
		position: "relative",
		backgroundColor: "transparent",
		overflow: "hidden",
	},
	homebox: {
		height: "100%",
		color: "#FFF",
		position: "absolute",
		paddingTop: "70px",
		backgroundColor: "transparent",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
		[theme.breakpoints.up("md")]: {
			width: "100%",
		},
		[theme.breakpoints.up("lg")]: {
			width: "100%",
		},
		[theme.breakpoints.up("xl")]: {
			width: "100%",
		},
	},
	videoHome: {
		height: "auto",
		width: "100%",
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		overflow: "hidden",
		zIndex: -1,
		[theme.breakpoints.down("sm")]: {
			width: "auto",
			height: "100%",
		},
		[theme.breakpoints.up("md")]: {
			height: "auto",
			width: "100%",
		},
	},
}))
const Home: NextPage = () => {
	const styles = useStyle()
	return (
		<Layout title='Главная' desc='Главная'>
			<Paper className={styles.section} square elevation={0}>
				<video className={styles.videoHome} preload='auto' autoPlay loop muted>
					<source src='/video/1.webm' type='video/webm; codecs="vp8, vorbis"' />
				</video>
				<Container maxWidth={false} className={styles.homebox}>
					Какой то текст
				</Container>
			</Paper>
		</Layout>
	)
}

export default Home
