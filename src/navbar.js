import React from "react";

// Functional component Navbar
const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart-Icon" />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    );
}

// Styles object defining CSS styles
const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '2px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}

export default Navbar;
