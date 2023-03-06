function Card({product,addCart,cartItems}) {
    return <div className='col-lg-4 border p-2 mt-2'>
        <div className='row'>
            <div className='col-lg-12'>
                <img className='img-fluid' src='https://picsum.photos/500/300' />
            </div>

            <div className='col-lg-12'>
                <h3>{product.name}</h3>
                <h3>{product.price}</h3>
                <button disabled={cartItems.some(obj => obj.id === product.id)} onClick={()=>{addCart(product)}} className='btn btn-sm btn-primary'>Add to Cart</button>
            </div>
        </div>
    </div>
}

export default Card