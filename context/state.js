import {createContext, useState, useContext} from 'react'

const AppContext = createContext()

export function AppWrapper({children}) {
	const [orders, setOrders] = useState([
		{
			title: 'serrvice One',
			price: '$199',
			id: 203,
		},
		{
			title: 'serrvice Two',
			price: '$199',
			id: 204,
		},
	])

	return (
		<AppContext.Provider value={[orders, setOrders]}>
			{children}
		</AppContext.Provider>
	)
}

export function useAppContext() {
	return useContext(AppContext)
}

// const OrderContext = createContext()

// export const OrderProvider = ({children}) => {
// 	const [orders, setOrders] = useState([
// 		{
// 			title: 'serrvice One',
// 			price: '$199',
// 			id: 203,
// 		},
// 		{
// 			title: 'serrvice Two',
// 			price: '$199',
// 			id: 203,
// 		},
// 	])

// 	return (
// 		<OrderContext.Provider value={[orders, setOrders]}>
// 			{children}
// 		</OrderContext.Provider>
// 	)
// }

// export function AppContext() {
// 	return useContext(OrderContext)
// }
