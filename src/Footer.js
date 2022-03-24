import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    const myStyle = {
        width: "100%",
        marginRight: 'auto',
        marginLeft: 'auto',
        position: 'fixed',
        bottom: '20px',
        borderTop: '0'
    };
    return (
        <>
        <footer b-617jbvk8u3="" class="border-top footer text-muted">
        <div class="container" style={myStyle}>
            © 2022 - FizzBuzzWeb - <a href="/Home/Privacy">Privacy</a>
        </div>
    </footer>
        </>
    );
}
export default Footer;