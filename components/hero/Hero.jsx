import React from 'react'
import styles from './hero.module.scss'

export default function Hero() {
	return (
		<div className={`h-screen ${styles.hero}`}>
			<div
				className={`h-screen flex justify-center items-start pt-36 lg:items-center lg:pt-0 `}
			>
				<div className={`flex flex-col items-center `}>
					{/* <img
						className={`${styles.logo}`}
						src='https://fixmyboatusa.com/wp-content/uploads/2021/11/FMB-fullcolor-1.png'
						alt=''
					/> */}
					<h1 className='text-5xl py-5 md:text-8xl font-bold text-gray-700 text-center wow fadeInLeft'>
						On-Demand Mobile
					</h1>
					<h3 className='text-7xl  wow fadeInRight font-light text-gray-600 italic'>
						BOAT REPAIR
					</h3>
					<div className='text-center text-lg pt-2 text-white'>
						No more hassle. We come directly to you.
					</div>
					<div className={`relative hover:border-gray-500 pt-8 `}>
						<button
							type='button'
							className={`${styles.booknowBtn} bg-transparent shadow-2xl border-2 bg-volt text-gray-900 hover:bg-gray-700 hover:text-volt font-bold text-2xl   py-2 px-4 border-blue hover:border-plat hover:transition ease-in-out duration-700 rounded`}
						>
							Book Now
						</button>
					</div>
				</div>
			</div>
			<div className={`${styles.footer}  h-52 lg:h-20`}>
				<div
					className={`container  flex flex-col justify-center mx-auto px-4 items-center h-full lg:flex-row  `}
				>
					<div className='lg:flex-1'>
						<p
							className={`hidden  text-2xl p-2 text-white font-bold lg:flex lg:justify-center`}
						>
							FIX MY BOAT
						</p>
					</div>
					<div
						className={`flex flex-col justify-center items-center w-full h-full lg:flex-row lg:flex-1`}
					>
						<p
							className={`text-lg p-1 text-gray-300 lg:text-sm lg:w-40`}
						>
							Find nearest location
						</p>
						<form
							className={`flex flex-col w-5/6  lg:flex-row lg:items-center lg:justify-start`}
						>
							<input
								className={`text-xl p-2 w-full placeholder-gray-500 placeholder-opacity-50  lg:w-52 lg:h-12`}
								type='text'
								placeholder='Enter a zipcode'
							/>
							<button
								className={` text-2xl my-2 h-12 rounded  bg-volt shadow-2xl text-plat hover:text-gray-900 hover:transition ease-in-out duration-700 lg:m-2 lg:px-4 lg:text-xl`}
							>
								SUBMIT
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
