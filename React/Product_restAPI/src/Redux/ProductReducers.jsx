import { SET_PRODUCTS,ADD_PRODUCTS,UPDATE_PRODUCTS,DELETE_PRODUCTS } from "./ProductAction";

const initialState = {
    products: [],
};

const ProductReducers = (state = initialState,action) => {
    switch(action.type){

        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        
        case ADD_PRODUCTS:
            return { ...state, products: [...state.products, action.payload] };

        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: state.products.map((product) =>
                product.id === action.payload.id ? action.payload : product
                ),
            };

        case DELETE_PRODUCTS:
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload),
            };

        default:
            return state;
    }
};
export default ProductReducers;