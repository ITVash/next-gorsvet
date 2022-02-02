import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@material-ui/styles"
import {
	createTheme,
	makeStyles,
	responsiveFontSizes,
} from "@material-ui/core/styles"
let dark = createTheme({
	palette: {
		primary: {
			main: "#373737",
		},
	},
	typography: {
		subtitle2: {
			color: "#FFB800",
		},
		subtitle1: {
			color: "#FFF",
			fontSize: "0.875rem",
			fontWeight: 500,
			lineHeight: "1.57",
			letterSpacing: "0.00714em",
		},
	},
})
dark = responsiveFontSizes(dark)
export const useGlobal = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
		[theme.breakpoints.up("md")]: {
			width: "100%",
		},
		[theme.breakpoints.up("lg")]: {
			width: "1200px",
		},
		[theme.breakpoints.up("xl")]: {
			width: "1560px",
		},
	},
}))
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={dark}>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
