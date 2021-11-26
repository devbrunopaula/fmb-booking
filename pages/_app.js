import {useEffect, useState} from 'react'
// import {OrderProvider} from '../context/state'
import {AppWrapper} from '../context/state'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import PreLoader from '../layout/'
import '../styles/globals.scss'

export default function MyApp({Component, pageProps}) {
	const [preloader, setPreloader] = useState(true)
	useEffect(() => {
		setPreloader(false)
		if (typeof window !== 'undefined') {
			window.WOW = require('wowjs')
		}
		new WOW.WOW().init()
	}, [])
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout || (page => page)
	{
		preloader && <PreLoader />
	}
	return getLayout(
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	)
}
