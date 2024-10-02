import { useEffect, useState } from "react";
import ProductServicesFetch from "../Services/ProductServicesFetch";
const Products=()=>{

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const data = await ProductServicesFetch.getAllProducts();
                setProducts(data);
            } catch (err) {
                setError('Failed to fetch products');
            }
        };

        fetchProducts();
    },[]);

    if (error) return <p>{error}</p>;

    return(
        <>
             <h1>Todays Fresh Flowers</h1>
        <ul>
            {
                products.map(product => (
                <li key={product.id}>Title:-{product.title} , UnitPrice:-{product.unitprice} , Quantity:- {product.quantity} , Description:- {product.description} , Likes:- {product.likes}</li>
            ))}
        </ul>
        </>
    );
}

export default Products;
