/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { makeStyles } from "@material-ui/styles"
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core"
import Link from "next/link"
import Image from "next/image"
import { useGlobal } from "../pages/_app"

interface ILayoutProps {
	title: string
	desc: string
}

const useStyles = makeStyles((theme) => ({
	section: {
		height: "100vh",
		position: "relative",
		backgroundColor: "#FFF",
	},
	appbar: {
		boxShadow: "none",
		color: "#FFF",
	},
	listMenu: {
		listStyle: "none",
		display: "flex",
		paddingLeft: "0",
		justifyContent: "space-between",
	},
	listMenuItem: {
		margin: "0 10px",
		display: "block",
		height: "35px",
		"&:hover": {
			borderBottom: "2px solid #FFB800",
		},
		"&:first-child": {
			marginLeft: "0",
		},
		"&:last-child": {
			marginRight: "0",
		},
	},
}))

const Layout: React.FC<ILayoutProps> = ({ title, desc, children }) => {
	const router = useRouter()
	const styles = useStyles()
	const globals = useGlobal()
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<title>{title} | Донецкгорсвет</title>
				<meta name='og:title' content={`${title}  | Донецкгорсвет`} />
				<meta name='description' content={desc} />
				<meta property='og:description' content={desc} />
				<meta property='og:site_name' content='Донецкгорсвет' />
				<link rel='canonical' href={router.pathname} />
				<meta property='og:url' content={router.pathname} />
			</Head>

			<AppBar position='sticky' className={styles.appbar} color='transparent'>
				<Container maxWidth={false} className={globals.container}>
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							<ul className={styles.listMenu}>
								<li className={styles.listMenuItem}>
									<Link href={"/"}>
										<a>Главная</a>
									</Link>
								</li>
								<li className={styles.listMenuItem}>
									<Link href={"/o-nas"}>
										<a>О Нас</a>
									</Link>
								</li>
								<li className={styles.listMenuItem}>
									<Link href={"/vakansii"}>
										<a>Вакансии</a>
									</Link>
								</li>
								<li className={styles.listMenuItem}>
									<Link href={"/uslugi"}>
										<a>Услуги</a>
									</Link>
								</li>
							</ul>
						</Box>
						<Typography variant='subtitle2' component='div'>
							<Image src='/img/phone.svg' width={32} height={18} />{" "}
							Диспетчерская:{" "}
							<Typography variant='subtitle1' component='span'>
								+380 (62) 338 07 50
							</Typography>
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
			<div>{children}</div>
		</>
	)
}

export default Layout
