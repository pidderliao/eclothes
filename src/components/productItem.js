import React from 'react'

import { Link } from 'react-router-dom'


class ProductItem extends React.Component {

    render() {

        return (

            <div className="productList">
                <Link onClick={() => this.props.addToDetail(this.props.product)} to="/productDetail">
                    <img src={this.props.product.productImg} alt="" />
                </Link>
                <span className="productName">{this.props.product.productName}</span>
                <span className="productPrice">$ {this.props.product.productPrice}</span>
                {/* <button onClick={() => this.props.handleOnAdd(this.props.product)} bsStyle='primary'>ADD</button> */}
            </div>

        );
    }
}
export default ProductItem;