import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
             <h3>Todays Fresh Flowers</h3>
             <Link to="/insert">Insert New Product</Link>
        <ul>
            {
                products.map(product => (
                <li key={product.id}>Title:-{product.title} , UnitPrice:-{product.unitprice} , Quantity:- {product.quantity} , Description:- {product.description} , Likes:- {product.likes}
                <Link to={`/details/${product.id}`}> Details</Link> | |
                <Link to={`/delete/${product.id}`}> Delete</Link> | |
                <Link to={`/update/${product.id}`}> Update</Link> 
                </li>
            ))}
        </ul>
        </>
    );
}

export default Products;
