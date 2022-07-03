import './App.css';
import { useState } from 'react';
import Header from './komponenty/Header';
import Products from './komponenty/Products';
import AddProduct from './komponenty/AddProduct';
import Product from './komponenty/Product';
function App() {
  const [products, setProducts] = useState([
    {
    "id": 1,
    "name": "mleko",
    "category": "diary",
    "quantity": 1
    },
    {
    "id": 2,
    "name": "chleb",
    "category": "bread",
    "quantity": 1
    },
    {
    "id": 3,
    "name": "jabłka",
    "category": "fruit&vegetables",
    "quantity": 2
    }
   ])
   const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
   }
   const addProduct = (product) => {
    const id = products.length + 1
    const newProduct = { id, ...product }
    setProducts([...products, newProduct])
    }
  return (
    <div className="App">
    <Header title='Lista zakupów'/>
    <AddProduct onAdd={addProduct}/>
    {products.length > 0 ? <Products products={products} onDelete={deleteProduct}/>:<p>Brak
produktów</p>}
    
    </div>
    )
}

export default App;