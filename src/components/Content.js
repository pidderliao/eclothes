import React from 'react'
import SliderBanner from './Slider'
import { Link } from 'react-router-dom'
import ProductsList from "./ProductList"

export default function Content() {

    return (

        <div className="content">

            <div className="topCategory">
                <li className="topCategory_list">
                    <Link to="/">首頁</Link>
                </li>
                <li className="topCategory_list">
                    <Link to="/time_limit">期間限定</Link>
                </li>
                <li className="topCategory_list">
                    <Link to="/new_product">新品推薦</Link>
                </li>
                <li className="topCategory_list">
                    <Link to="/authorize_T">授權圖T</Link>
                </li>
                <li className="topCategory_list">
                    <Link to="/pants">褲&裙</Link>
                </li>
                <li className="topCategory_list">
                    <Link to="/sports">運動</Link>
                </li>
            </div>

            <div className="bannerContainer">
                <SliderBanner />
            </div>

            <div className="productContainer">
                <div className="productContainer">
                    <ProductsList />
                </div>
            </div>
        </div>
    );
}