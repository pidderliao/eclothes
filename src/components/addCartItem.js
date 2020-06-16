import React from 'react';
import './addCartItem.scss';
import { Link } from 'react-router-dom'
class AddCartItem extends React.Component {

    renderProductSize() {
        return (
            this.props.addCart.productSize.map((i) => {
                return (
                    <li><button>{this.props.addCart.productSize.Array[i]}</button></li>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <div className="addCartHeader">
                    <div className="leftContainer">
                        <img src={this.props.addCart.productImg} alt="" />
                    </div>
                    <div className="rightContainer">
                        <p>$ {this.props.addCart.productPrice}</p>
                        <p> {this.props.addCart.productName}</p>
                    </div>
                </div>
                <div className="addCartContent">
                    <div className="colorSelectorContainer">
                        <li>
                            <button><img src="https://efshop3-wabow.cdn.hinet.net/files/1/products/79482_color_E6B7BAE7B289.jpg" alt="" /></button>
                            <button><img src="https://efshop3-wabow.cdn.hinet.net/files/1/products/79482_color_E6B7BAE7B289.jpg" alt="" /></button>
                            <button><img src="https://efshop3-wabow.cdn.hinet.net/files/1/products/79482_color_E6B7BAE7B289.jpg" alt="" /></button>
                            <button><img src="https://efshop3-wabow.cdn.hinet.net/files/1/products/79482_color_E6B7BAE7B289.jpg" alt="" /></button>
                        </li>
                    </div>
                    <div className="sizeSelectorContainer">
                        {this.renderProductSize()}
                        {/* <li>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </li> */}
                    </div>
                    <div className="amountSelectorContainer">
                        <span className="amountSelectorLeft">購買數量</span>
                        <button className="amountSelectorRight" onClick={() => this.props.onAddUnit()}>+</button>
                        <span className="amountSelectorRight">{this.props.addCart.units}</span>
                        <button className="amountSelectorRight" onClick={() => this.props.onDelUnit()}>-</button>

                    </div>
                </div>
                <div className="addCartFooter">
                    <Link onClick={() => this.props.handleOnAdd(this.props.addCart)} to="/checkOut">
                        <button>確認</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AddCartItem;