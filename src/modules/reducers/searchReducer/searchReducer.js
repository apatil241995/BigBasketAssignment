import * as actionTypes from '../../actionTypes'
const initialState = {
  productName: ''
}

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_PRODUCT: return {
      ...state.productName = '',
      productName: state.productName + action.payload
    }

    default: return state
  }

}

export default SearchReducer