import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchProducts = () => async (dispatch) => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products/");
//     const products = await response.json();

//     dispatch(setProduct(products));
//   } catch (error) {
//     console.log("Error fetching products:", error);
//   }
// };

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/");
    const products = await response.json();
    return products;
  } catch (error) {
    console.log("Error fetching products:", error);
    throw error;
  }
});

const DataSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
    length: 0,
    loading: false,
    error: null,
  },
  reducers: {
    setProduct: (state, action) => {
      state.value = action.payload;
      state.length = action.payload.length;
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((product) => product.id !== id);
      state.length = state.value.length;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.value = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setProduct, deleteProduct } = DataSlice.actions;

export default DataSlice.reducer;
