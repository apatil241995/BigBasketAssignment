import { FILTER_PRODUCT } from "../../actionTypes"

function FilterProduct(category) {
  return {
    type: FILTER_PRODUCT,
    payload: category
  }
}

export default FilterProduct