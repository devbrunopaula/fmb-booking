import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {useEffect, useState} from 'react'
import {FiAlignJustify, FiX} from 'react-icons/fi'
import {scroll} from '../../utils/utils'

const navigation = [
	{name: 'SERVICES', href: '#'},
	{name: 'LOCATIONS', href: '#'},
	{name: 'FRANCHISE', href: '#'},
	{name: 'ABOUT', href: '#'},
]

function NavBar() {
	useEffect(() => {
		window.addEventListener('scroll', scroll)
	}, [])

	return (
		<div>
			<div className='  absolute w-full pt-6 pb-16 sm:pb-24'>
				<Popover>
					<div className='max-w-7xl mx-auto px-4 sm:px-6'>
						<nav
							className='relative flex items-center justify-between sm:h-10 md:justify-center'
							aria-label='Global'
						>
							<div className=' items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
								<div className='flex items-center justify-between w-full md:w-auto'>
									<a href='#'>
										<span className='sr-only'>
											Fix My Boat Logo
										</span>
										<img
											className='h-16'
											src='https://fixmyboatusa.com/wp-content/uploads/2021/11/FMB-fullcolor-1.png'
											alt=''
										/>
									</a>
									<div className='-mr-2 flex items-center md:hidden'>
										<Popover.Button className='bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
											<span className='sr-only'>
												Open main menu
											</span>
											<FiAlignJustify
												className='h-6 w-6'
												aria-hidden='true'
											/>
										</Popover.Button>
									</div>
								</div>
							</div>
							<div className='hidden md:flex md:space-x-10'>
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										className='font-medium text-white hover:text-gray-900'
									>
										{item.name}
									</a>
								))}
							</div>
							<div className='hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0'>
								<span className='inline-flex rounded-md shadow'>
									<a
										href='#'
										className=' inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-plat bg-volt hover:bg-gray-50 hover:text-gray-900'
									>
										Book Online
									</a>
								</span>
							</div>
						</nav>
					</div>

					<Transition
						as={Fragment}
						enter='duration-150 ease-out'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='duration-100 ease-in'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<Popover.Panel
							focus
							className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
						>
							<div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
								<div className='px-5 pt-4 flex items-center justify-between'>
									<div>
										<p>LOGO</p>
									</div>
									<div className='-mr-2'>
										<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
											<span className='sr-only'>
												Close menu
											</span>
											<FiX
												className='h-6 w-6'
												aria-hidden='true'
											/>
										</Popover.Button>
									</div>
								</div>
								<div className='px-2 pt-2 pb-3'>
									{navigation.map(item => (
										<a
											key={item.name}
											href={item.href}
											className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
										>
											{item.name}
										</a>
									))}
								</div>
								<a
									href='#'
									className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
								>
									Log in
								</a>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>
			</div>
		</div>
	)
}

export default NavBar
