import React from 'react';
import "./cartItem.scss";
class CartItem extends React.Component {

    render() {

        return (

            <div className="cartList" key={this.props.cartItem.id}>
                <img className="cartListLeftContainer" src={this.props.cartItem.productImg} alt="" />
                <div className="cartListRightContainer">
                    <div className="textContainer">
                        <span className="textProductName"> {this.props.cartItem.productName}</span>
                        <span className="textProductPrice">$ {this.props.cartItem.productPrice}</span>
                    </div>
                    <div className="buttonContainer">
                        <button onClick={() => this.props.onAddUnit()}>+</button>
                        <span> {this.props.cartItem.units}</span>
                        <button onClick={() => this.props.onDelUnit()}>-</button>
                        <button onClick={() => this.props.handleDeleteFromCart()}>X</button>
                    </div>

                </div>
            </div>
        );
    }
}
export default CartItem;