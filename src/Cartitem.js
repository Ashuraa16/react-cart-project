import React from "react";
import add from "./add.png";
import minus from "./minus.png";
import nikal from "./nikal.png";

const CartItem = (props) => {
  // by using below code we can bind this with increasequantity
  // this.increaseQuantity = this.increaseQuantity.bind(this);
  // best way to bind this is to use ()=>{} beacuse it automatically bind this with the function
  // increaseQuantity=()=>{
  //     console.log(this.state,"this");
  //     // form 1 :- setstate is used with object
  //     // this.setState({
  //     //     qty:this.state.qty+1
  //     // });

  //     // this.setState in 2:- form as a function which returm object
  //     this.setState((prevState)=>{
  //         return {
  //               qty: prevState.qty + 1
  //         }
  //     })
  // }

  // decreaseQuantity=()=>{
  //     console.log(this.state,"this");
  //     if(this.state.qty==0) return;
  //     // form 1 :- setstate is used with object
  //     // this.setState({
  //     //     qty:this.state.qty+1
  //     // });

  //     // this.setState in 2:- form as a function which returm object
  //     this.setState((prevState)=>{
  //         return {
  //               qty: prevState.qty - 1
  //         }
  //     })
  // }

  // for below code the value of this will be undefined
  // increaseQuantity(){
  //     console.log("this",this);
  // }

  //object destructing on state object we can use them easily
  const { price, title, qty, url } = props.product;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={props.product.img} />
      </div>
      <div className="right-block">
        {/* adding css inside div or components  */}
        {/* using the state values here after destructing them  */}
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/* buttons added here */}
          <img
            alt="increase"
            className="action-icons"
            src={add}
            onClick={() => {
              props.increaseQuantity(props.product);
            }}
          />
          <img
            alt="decrease"
            className="action-icons"
            src={minus}
            onClick={() => {
              props.decreaseQuantity(props.product);
            }}
          />
          <img
            alt="delete"
            className="action-icons"
            src={nikal}
            onClick={() => {
              props.deleteProduct(props.product.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

// adding css in jsx using objects

const styles = {
  image: {
    height: 130,
    width: 130,
    borderRadius: 4,
    background: "#ccc"
  }
};

export default CartItem;
