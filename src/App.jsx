
import axios from 'axios';
import './App.css'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import AddProduct from './components/AddProduct';

const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);
  return response;
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { data: products, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: retrieveProducts
  })

  // console.log(products);

  if (isLoading) return <div>Fetching Products...</div>
  if (error) return <div>An error occured: {error.message}</div>

  return (
    <div className="flex m-2">
      <AddProduct />
      <ProductList products={products.data} onSelectProduct={setSelectedProduct} />
      {
        !selectedProduct ? "Product Not Selected" : <ProductDetails key={selectedProduct.id} id={selectedProduct.id} />
      }
    </div>
  )
}

export default App
