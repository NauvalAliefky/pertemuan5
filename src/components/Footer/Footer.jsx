import React from 'react';
import './Footer.css';

 const Footer = ({name}) => {
    return(
      <footer>
        <h3>Copyright &copy;2024 Developed By {name}</h3>
        <span>Make With ❤️</span>
      </footer>
    );
  }

 export default Footer;