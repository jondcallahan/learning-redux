import React, { PropTypes } from 'react'
import FilterLink from './FilterLink'

const Footer = ({ visibilityFilter, onFilterClick }) => {
  return (
    <p>
      Show:
      {'  '}
      <FilterLink
        filter="SHOW_ALL"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
        >
        All
      </FilterLink>
      {'  '}
      <FilterLink
        filter="SHOW_ACTIVE"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
        >
        Active
      </FilterLink>
      {'  '}
      <FilterLink
        filter="SHOW_COMPLETED"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
        >
        Completed
      </FilterLink>
    </p>
  )
}

Footer.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
}

export default Footer
