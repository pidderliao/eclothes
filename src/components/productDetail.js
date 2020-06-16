import React from 'react';
import DetailItem from './detailItem';
import { connect } from 'react-redux';
import "./detailItem.css";
class ProductDetail extends React.Component {

    renderDetailProduct() {
        return (
            this.props.cart.map(detailItem => {
                return (
                    <DetailItem key={detailItem.id}
                        detailItem={detailItem} />
                );
            })
        );
    }

    render() {

        return (

            <div>
                {this.renderDetailProduct()}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(ProductDetail);
