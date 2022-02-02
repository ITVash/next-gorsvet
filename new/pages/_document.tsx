/* eslint-disable @next/next/google-font-display */
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
	render() {
		return (
			<Html lang='ru'>
				<Head>
					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
					<link rel='icon' href='/favicon.ico' />
					<link rel='shortcut icon' href='/favicon.ico' />
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
