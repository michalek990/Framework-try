import Product from './Product'

/*const Products = () => {
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
            "category": "fruit&vagetables",
            "quantity": 2
        }
    ])
    return (
        <div>
            {products.map((product) => <h3 key={product.id}>{product.name}</h3>)}
        </div>
    )
}
export default Products*/
const Products = ({ products, onDelete }) => {
    return (
        <div className='products'>
            {products.map((product) => (<Product key={product.id} product={product} onDelete={onDelete}/>))}
        </div>
    )
}
export default Products

