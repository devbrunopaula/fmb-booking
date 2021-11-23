import React from 'react'
import NavBar from './NavBar'

function Layout({children}) {
	return (
		<div>
			<NavBar />
			{children}
			<h1>Foooter</h1>
		</div>
	)
}

export default Layout
