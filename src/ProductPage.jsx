import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';

export default function ProductPage() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const response = await axios.get('products.json');
            setProducts(response.data);
        }
        loadData();
    }, [])

    return <div className="container mt-5">
        <h1>Our Products</h1>
        <div className="row">
            {
                products.map(p => (<div key={p.id} className="col-md-4 mb-4">
                    <ProductCard
                        imageUrl={p.imageUrl}
                        name={p.name}
                        price={p.price}
                    />
                </div>))
            }
        </div>
    </div>
}