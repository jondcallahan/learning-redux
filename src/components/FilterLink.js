import React, { PropTypes } from 'react'

const FilterLink = ({ filter, children, currentFilter, onClick }) => {
  if (filter === currentFilter) {
    return(
      <span>{children}</span>
    )
  }
  return (
    <a href="#"
        onClick={e => {
          e.preventDefault()
          onClick(filter)
        }}
      >
      {children}
    </a>
  )
}

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default FilterLink
