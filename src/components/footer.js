import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
	<Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
		<p className="m-auto footerText">Copyright &copy; 2019</p>
	</Navbar>
  );
}

export default Footer;
