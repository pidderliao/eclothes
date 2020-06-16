import React from 'react';
import "./detailItem.css";
class DetailItem extends React.Component {

    render() {
        return (
            <div key={this.props.detailItem.id}>
                <img src={this.props.detailItem.productImg} alt="" />
                <div className="detailNameContainer">
                    <span className="detailItemLeft">{this.props.detailItem.productName}-{this.props.detailItem.colorName}</span>
                    <span className="detailItemRight">$ {this.props.detailItem.productPrice}</span>

                </div>
            </div>
        );
    }
}
export default DetailItem;