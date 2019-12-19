import React from 'react'
import '../styles/FilterButton.css'

export const FilterButton = ({ onClick, className, list, color, name, variant }) => (
	<button
		id={name}
		onClick={(e) => onClick(e, list)}
		className={`filterButton ${className} ${variant} ${color}`}>
		{name}
	</button>
)

export default FilterButton;