import { NextPage } from "next"
import { AppProps } from "next/app"
import { RootStores } from "stores"
import { StoreProvider } from "stores/ProviderStore"
import "styles/globals.css"
import "styles/vars.scss"

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
