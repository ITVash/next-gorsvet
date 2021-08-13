import { NextPage } from "next"
import { RootStores } from "stores"
import { StoreProvider } from "stores/ProviderStore"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "suneditor/dist/css/suneditor.min.css"
import "react-quill/dist/quill.snow.css"
import "antd/dist/antd.css"
import "styles/vars.scss"
import "styles/globals.css"
import "styles/upload.css"

const store = new RootStores()
function App({
	Component,
	pageProps,
}: {
	Component: NextPage
	pageProps: any
}) {
	return (
		<StoreProvider storeInitial={pageProps.store} store={store}>
			<Component {...pageProps} />
		</StoreProvider>
	)
}
export default App
