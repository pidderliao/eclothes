import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { addToCart, updateItemUnits } from '../action/cartActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddCartItem from "./addCartItem";



class AddCart extends Component {
    state = { visible: false };


    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleDelUnit(id) {
        let units = -1;
        this.props.updateItemUnits({ id, units })
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({ id, units })
    }

    dispatchAddToCart(cart) {
        this.props.addToCart(cart);
    }

    addCartList() {
        return (
            this.props.cart.map(addCart => {
                return (
                    <AddCartItem key={addCart.id}
                        addCart={addCart}
                        onAddUnit={this.handleAddUnit.bind(this, addCart.id)}
                        onDelUnit={this.handleDelUnit.bind(this, addCart.id)}
                        handleOnAdd={this.dispatchAddToCart.bind(this)}
                    />

                );
            })
        );
    }
    render() {
        return (
            <div>
                <span onClick={this.showModal}>
                    加入購物車
                </span>
                <Modal
                    // title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    {this.addCartList()}
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        addToCart,
        updateItemUnits,
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(AddCart);