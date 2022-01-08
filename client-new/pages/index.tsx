import { Container, Paper } from "@mui/material"
import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

let dark = createTheme({
	palette: {
		primary: {
			main: "#373737",
		},
	},
})
const useStyles = makeStyles((theme) => ({
	section: {
		height: "100vh",
		position: "relative",
	},
}))
dark = responsiveFontSizes(dark)

const Home: NextPage = () => {
	const styles = useStyles()
	return (
		<ThemeProvider theme={dark}>
			<Paper className={styles.section}>
				<video preload='auto' autoPlay loop muted>
					<source src='/video/1.webm' type='video/webm; codecs="vp8, vorbis"' />
				</video>
				<Container maxWidth='lg'></Container>
			</Paper>
		</ThemeProvider>
	)
}

export default Home
