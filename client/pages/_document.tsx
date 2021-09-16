import classNames from "classnames"
import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document"

class MyDocument extends Document {
	/* static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	} */
	render() {
		return (
			<Html lang='ru'>
				<Head>
					<meta http-equiv='X-UA-Compatible' content='IE=edge' />
					<title>Донецкгорсвет</title>
					<link rel='icon' href='/favicon.ico' />
					<meta
						name='viewport'
						content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
					/>
					<meta name='application-name' content='Донецкгорсвет' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='default'
					/>
					<meta name='apple-mobile-web-app-title' content='Донецкгорсвет' />
					<meta name='description' content='Донецкгорсвет' />
					<meta name='format-detection' content='telephone=no' />
					<meta name='mobile-web-app-capable' content='yes' />

					<meta name='msapplication-TileColor' content='#f69435' />
					<meta name='msapplication-tap-highlight' content='no' />
					<meta name='theme-color' content='#f69435' />
					<link rel='manifest' href='/manifest.json' />
					<link rel='shortcut icon' href='/favicon.ico' />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
					/>
					<meta property='og:type' content='website' />
					<meta property='og:title' content='Донецкгорсвет' />
					<meta property='og:description' content='Донецкгорсвет' />
					<meta property='og:site_name' content='Донецкгорсвет' />
					<meta property='og:url' content='https://donetskgorsvet.tk' />
					<meta
						property='og:image'
						content='https://yourdomain.com/icons/apple-touch-icon.png'
					/>
				</Head>
				<body className={classNames("oh")}>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
