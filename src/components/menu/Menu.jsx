import "./Menu.css";
import menu from "/menuicon.svg"

function Menu() {
  return <div className="menu-container">
    <h1 className="menu-title">Capinhas Mortais</h1>
    <div className="menu-options">
        <p className="menu-button">Sobre</p>
        <p className="menu-button">Contato</p>
        <button className="menu-button-white">Cadastro</button>
    </div>
    <img className="menu-icon" src={menu}></img>
  </div>;
}

export default Menu;
