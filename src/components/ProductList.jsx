

const ProductList = ({ products = [], onSelectProduct }) => {

    if (!products.length) {
        return <p className="text-gray-500">No products found</p>;
    }

    

    return (
        <div className="flex flex-col justify-center items-center w-3/5">
            <h2 className="text-3xl my-2">Product List</h2>
            <ul className="flex flex-wrap justify-center items-center" >
                {products && products.map(product => (
                    <li
                        key={product.id}
                        onClick={() => onSelectProduct(product)}
                        className="flex flex-col items-center m-2 border rounded-sm"
                    >
                        <img
                            className="object-cover h-64 w-96 rounded-sm"
                            src={product.thumbnail}
                            alt={product.title} />
                        <p className="text-xl my-3">{product.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;