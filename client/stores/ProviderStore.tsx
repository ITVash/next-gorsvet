import React, { createContext, useContext } from "react"
import { enableStaticRendering } from "mobx-react-lite"
import { RootStores } from "stores"
import { IRootStoreProps } from "types"

enableStaticRendering(typeof window === "undefined")
let store = null
const StoreContext = createContext<RootStores>(undefined)
StoreContext.displayName = "StoreContext"

export const useRootState = () => {
	const context = useContext(StoreContext)
	if (context === undefined) {
		throw new Error(
			"useState можно использовать только внутри провайдера глобального хранилища!",
		)
	}
	return context
}
interface IStoreProviderProps {
	store?: RootStores
	storeInitial?: IRootStoreProps
}
export const StoreProvider: React.FC<IStoreProviderProps> = ({
	children,
	store,
	storeInitial,
}) => {
	const stores = initializeStore(storeInitial)
	return (
		<StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
	)
}

const initializeStore = (initialData: IRootStoreProps): RootStores => {
	let _store = store ?? new RootStores()
	if (initialData) {
		initialData.settingsStores &&
			_store.settingsStores.fetchData(initialData.settingsStores)
	}
	if (typeof window === "undefined") return _store

	if (!store) store = _store

	return _store
}
