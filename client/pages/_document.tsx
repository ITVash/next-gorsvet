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
					<title>Донецкгорсвет</title>
					<link rel='icon' href='/favicon.ico' />
					<link rel='manifest' href='/manifest.json' />
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
