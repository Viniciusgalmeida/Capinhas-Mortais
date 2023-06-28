import "./Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p className="footer-text">
        © {currentYear} Capinhas de Celular do Voldemort . All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
