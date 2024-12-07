import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

// const dispatch = useDispatch()

const STATUS = Object.freeze(
  {
    SUCCESS: "success",
    ERROR: "error",
    PENDING: "pending",
  }

)
const initialState = {
  data: [],
  status: STATUS.SUCCESS,
  cart: []
}

const productApiSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct(state, action) {
      state.data = action.payload
    },
    setStatus(state, action) {
      state.status = action.payload
    }
  }
})


export const { setProduct, setStatus } = productApiSlice.actions
export default productApiSlice.reducer



export function fetchProducts() {
  return async function getProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.PENDING))
    try {
      const resp = await fetch("https://fakestoreapi.com/products")
      const data = await resp.json()
      dispatch(setProduct(data))
      dispatch(setStatus(STATUS.SUCCESS))
    }
    catch (err) {
      console.log(err);
      dispatch(setStatus(STATUS.dispatch))
    }
  }
}