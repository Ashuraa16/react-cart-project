// import './App.css';
import React from 'react';
// import CartItem from './Cartitem';
import Cart from './cart';
import Navbar from './navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 1599,
          title: 'earbuds',
          qty: 8,
          img: 'https://images-cdn.ubuy.co.in/633b0f5fd18ee764d40f59d1-wireless-earbud-bluetooth-5-3-earbud.jpg',
          id: 1
        },
        {
          price: 1200,
          title: 'Digital Watch',
          qty: 2,
          img: 'https://m.media-amazon.com/images/I/51kgJvzJFXL._AC_UY1000_.jpg',
          id: 2
        },
        {
          price: 599,
          title: 'Remote',
          qty: 10,
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuon-N2000-Remote-Control.jpg/800px-Nuon-N2000-Remote-Control.jpg',
          id: 3
        }
      ]
    }
  }

  // Increase the quantity of a product
  increaseQuantity = (product) => {
    console.log('product', product); // Log the product object to the console
    const { products } = this.state; // Destructure the products array from the state
    const index = products.indexOf(product); // Get the index of the product in the array using indexOf method
    products[index].qty += 1; // Increment the quantity of the product by 1
    this.setState({
      products // Update the state with the modified products array
    });
  }

  // Decrease the quantity of a product
  decreaseQuantity = (product) => {
    console.log('product', product); // Log the product object to the console
    const { products } = this.state; // Destructure the products array from the state
    const index = products.indexOf(product); // Get the index of the product in the array using indexOf method
    if (products[index].qty === 0) return; // Check if the quantity is already 0
    products[index].qty -= 1; // Decrement the quantity of the product by 1
    this.setState({
      products // Update the state with the modified products array products:products
    });
  }

  // Delete a product from the cart
  deleteProduct = (id) => {
    console.log('delete', id); // Log the id of the product to be deleted
    const { products } = this.state; // Destructure the products array from the state
    const items = products.filter((item) => item.id !== id); // Create a new array with all products except the one with the specified id using filter method
    this.setState({
      products: items // Update the state with the new array of products
    }, () => {
      console.log(this.state); // Log the updated state to the console
    });
  }

  totalItemsNumbers=()=>{
    const {products} =this.state;
    let num=0;
    products.forEach((product)=>{
      num+=product.qty;
    })
    return num;
  }

  totalPrices=()=>{
    const {products} =this.state;
    let num=0;
    products.forEach((product)=>{
      num+=(product.qty*product.price);
    })
    return num;
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          count={this.totalItemsNumbers()}
        />
        <Cart
          products={this.state}
          increaseQuantity={this.increaseQuantity}  // Pass the increaseQuantity function as a prop
          decreaseQuantity={this.decreaseQuantity}  // Pass the decreaseQuantity function as a prop
          deleteProduct={this.deleteProduct}        // Pass the deleteProduct function as a prop
        />
        <div style={{fontSize:30,margin:10}}>Total Price: {this.totalPrices()}</div>
      </div>
    );
  }
}

export default App;
