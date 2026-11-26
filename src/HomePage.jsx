import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductCard from "./ProductCard";


export default function HomePage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const loadData = async () => {
      const response = await axios.get('featured.json');
      setProducts(response.data);
    }
    loadData();


  }, []);

  const renderProducts = () => {
    const jsx = [];
    for (let p of products) {
      const productCard = (<div className="col-md-3 mb-4" key={p.id}>
                  <ProductCard
                    imageUrl={p.imageUrl}
                    name={p.name}
                    price={p.price}
                  />
             </div>);
      jsx.push(productCard);
    }
    return jsx;
  }

  return <main className="container my-5">
    <h2 className="text-center mb-4">Featured Products</h2>
    <div className="row">
     { renderProducts()}
    </div>
  </main>
}