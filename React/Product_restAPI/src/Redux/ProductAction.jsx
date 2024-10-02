import { ProductServicesFetch } from "../Services/ProductServicesFetch";

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const DELETE_PRODUCTS = 'DELETE_PRODUCTS';

export const setProducts = () => {
    return (dispatch) => {
        const products = ProductServicesFetch.getAllProducts();
        dispatch({ type: SET_PRODUCTS, payload: products });
    };
};

export const addProduct = (product) => {
    return (dispatch) => {
        ProductServicesFetch.addProduct(product);
        dispatch({ type: ADD_PRODUCTS, payload: product });
    };
};
  
export const updateProduct = (product) => {
    return (dispatch) => {
        ProductServicesFetch.updateProduct(product);
        dispatch({ type: UPDATE_PRODUCTS, payload: product });
    };
};
  
export const deleteProduct = (id) => {
    return (dispatch) => {
        ProductServicesFetch.deleteProduct(id);
        dispatch({ type: DELETE_PRODUCTS, payload: id });
    };
};