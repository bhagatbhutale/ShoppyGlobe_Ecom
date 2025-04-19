import React, { useEffect, useState } from 'react'

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

    return { products, loading, error }

}

export default useFetchProducts
