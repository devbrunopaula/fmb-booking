import React, {useEffect} from 'react'
import NavBar from '../components/nav'
import ScrollTop from './ScrollTop'
import {aTagClick} from '../utils/utils'

function Layout({children}) {
	useEffect(() => {
		aTagClick()
	}, [])
	return (
		<div className=''>
			<div className='navbar-wraper'>
				<NavBar />
			</div>
			{children}
			<h1>Foooter</h1>
			<ScrollTop />
		</div>
	)
}

export default Layout
