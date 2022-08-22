import { SEARCH_PRODUCT } from "../../actionTypes"

export default function SearchProduct(name) {
  return {
    type: SEARCH_PRODUCT,
    payload: name
  }
}

