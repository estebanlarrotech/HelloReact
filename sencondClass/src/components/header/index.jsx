
import "./style.css";

function Header({ page, updateStateOfPage }) {
  console.log("propriedade page ->" + page);
  return (
    <div className="nes-container with-title is-centered">
                <p className="title">Header</p>

      <ul>
        <li
          onClick={() => updateStateOfPage("Home")}
          className={page === "Home" ? "selectedMenuHeader" : ""}
        >
          Home
        </li>
        <li
          onClick={() => updateStateOfPage("Quem somos")}
          className={page === "Quem somos" ? "selectedMenuHeader" : ""}
        >
          Quem somos
        </li>
        <li
          onClick={() => updateStateOfPage("Contatos")}
          className={page === "Contatos" ? "selectedMenuHeader" : ""}
        >
          Contatos
        </li>
      </ul>
    </div>
  );
}

export default Header;