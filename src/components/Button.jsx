import React from 'react'

const Button = ({ styles }) => {
	return (
		<button
			type='button'
			className={`p-[2px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}
		>
			<div className='hover:bg-primary hover:text-cyan-200 py-4 px-6 rounded-[8px]'>Get Started</div>
		</button>
	)
}

export default Button
