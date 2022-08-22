import * as actionTypes from '../../actionTypes'
const initialState = {
  productCategory: 'all'
}

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_PRODUCT: return {
      ...state.productCategory = '',
      productCategory: state.productCategory + action.payload
    }

    default: return state
  }

}

export default FilterReducer