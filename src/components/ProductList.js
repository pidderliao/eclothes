import React from 'react';

import ProductItem from "./productItem";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { addToDetail } from '../action/cartActions'

class ProductsList extends React.Component {
    // dispatchAddToCart(product) {
    //     this.props.addToCart(product);
    // }

    dispatchAddToDetail(products) {
        this.props.addToDetail(products);
    }

    renderProducts() {

        return (
            this.props.products.map((p) => {
                return (
                    <div className="col2" key={p.id}>
                        {/* <ProductItem handleOnAdd={this.dispatchAddToCart.bind(this)} product={p} /> */}
                        <ProductItem addToDetail={this.dispatchAddToDetail.bind(this)} product={p} />
                    </div>
                );
            })
        );
    }

    render() {
        return (
            <div>

                {this.renderProducts()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        addToDetail
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(ProductsList);