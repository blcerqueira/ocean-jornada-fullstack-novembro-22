import "./Header.css"
import Brand from "../../assets/brand.png"
function Header(){
    return (
        <div className="Header">
        <a href="/">
        <img src={Brand} width={277} height={90} alt="AGMAN logo" />
        </a>
        <a href="/"> Listar </a>
        <a href="/adicionar"> Adicionar </a>

        </div>
    )
}

export default Header;