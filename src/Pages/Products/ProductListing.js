import React from 'react'
import { Link } from 'react-router-dom'

const ProductListing = () => {
    return (
        <div>
            products
            <h4>TVOD</h4>
            <Link to='/payment/tvod'>Buy</Link>
            <hr />
            <h4>svod</h4>
            <Link to='/payment/svod'>Buy</Link>
            <hr />
        </div>
    )
}

export default ProductListing
