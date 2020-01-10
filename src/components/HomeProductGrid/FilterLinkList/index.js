import React from "react"

import { FilterLinkListElement, FilterLinkButton } from "./styles"

const FilterLinkList = ({ filters, typeFilter, setTypeFilter }) => {
  if (filters.has("")) {
    filters.delete("")
    filters.add("")
  }
  return (
    <FilterLinkListElement>
      {["all", ...filters].map((filter, i) => (
        <li key={i}>
          <FilterLinkButton
            key={i}
            onClick={() => setTypeFilter(filter)}
            disabled={typeFilter === filter}
          >
            {filter === "" ? "other" : filter.toLowerCase()}
          </FilterLinkButton>
        </li>
      ))}
    </FilterLinkListElement>
  )
}

export default FilterLinkList
