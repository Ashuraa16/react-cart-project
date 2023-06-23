import React from "react";
import CartItem from "./Cartitem";

const Cart = (props) => {
    const {products}=props.products;

    return (
        <div className="cartdiv">
        
            {/* Render CartItem component for each product */}
            {products.map((product) => {
                return (
                    <CartItem
                        product={product}  // Pass the 'product' object as a prop to the CartItem component
                        key={product.id}   // Provide a unique 'key' prop for efficient rendering and reconciliation
                        increaseQuantity={props.increaseQuantity}  // Pass the increaseQuantity function as a prop
                        decreaseQuantity={props.decreaseQuantity}  // Pass the decreaseQuantity function as a prop
                        deleteProduct={props.deleteProduct}        // Pass the deleteProduct function as a prop
                    />
                );
            })}
        </div>
    );

}

export default Cart;
