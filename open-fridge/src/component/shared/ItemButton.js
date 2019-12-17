import React from 'react'

export const ItemButton = ({ onClick, className, color, title, variant }) => (
	<button
		onClick={onClick}
		className={`button ${className} ${variant} ${color}`}>
		{title}
	</button>
)