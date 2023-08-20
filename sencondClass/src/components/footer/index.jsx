
/* eslint-disable react/prop-types */
import './style.css'

function Footer({page , updateStateOfPage}) {
  return (
    <div className="nes-container with-title is-centered">
        <p className="title">Footer</p>
        <ul className="footer">
        <li
          onClick={() => updateStateOfPage("Home")}
          className={page === "Home" ? "nes-btn is-success" : ""}
        >
          Home
        </li>
        <li
          onClick={() => updateStateOfPage("Quem somos")}
          className={page === "Quem somos" ? "nes-btn is-success" : ""}
        >
          Quem somos
        </li>
        <li
          onClick={() => updateStateOfPage("Contatos")}
          className={page === "Contatos" ? "nes-btn is-success": ""}
        >
          Contatos
        </li>
      </ul>
      <div>Contatos</div>
      <p>fredd@email.com</p>

      <p>
        <a href="http://whatsapp.com">Whatsapp</a>
      </p>
    </div>
  );
}

export default Footer;