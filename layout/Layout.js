import React from 'react'
import NavBar from '../components/nav'

function Layout({children}) {
	return (
		<div className=''>
			<div className='navbar-wraper'>
				<NavBar />
			</div>
			{children}
			<h1>Foooter</h1>
		</div>
	)
}

export default Layout
