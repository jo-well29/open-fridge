import React from 'react'

export const FilterButton = ({ onClick, className, list, color, name, variant }) => (
	<button
		name={name}
		onClick={(e) => onClick(e, list)}
		className={`button ${className} ${variant} ${color}`}>
		{name}
	</button>
)

export default FilterButton;