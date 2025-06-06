import React, { useEffect, useState } from 'react'


// use useEffect to fetching data from api
const useFetchProducts = () => {
 
    const [products, setProducts] = useState([])
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState(null);

    // api fetching 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                if(!response.ok) {
                    throw new Error("Faild to Fetch Products...!")
                }

                const data = await response.json();
                setProducts(data.products);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchProducts()
    }, [])

    // Extracting the this value
    return { products, loading, error }

}

export default useFetchProducts
