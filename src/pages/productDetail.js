import React from 'react'
import { Link } from 'react-router-dom'
import './productDetail.scss'
import AddCart from "../components/addCart"
import ProductDetail from "../components/productDetail";


const productDetail = () => (

    <div>
        <div className="productDetailContainer">

            <ProductDetail />

        </div>
        <div className="buttonContainer">
            <div className="row">
                <div className="col4">
                    <Link to="/">
                        <img className="button" src="https://m.efshop.com.tw/img/products_home_01.7a38dbe7.svg" alt="" />
                    </Link>
                </div>
                <div className="col4">
                    <img className="button" src="https://m.efshop.com.tw/img/products_cart_01.1c48697b.svg" alt="" />
                </div>
                <div className="col4">

                    <AddCart />

                </div >
                <div className="col4">
                    <Link to="/checkOut">
                        <span>結帳</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)


export { productDetail };