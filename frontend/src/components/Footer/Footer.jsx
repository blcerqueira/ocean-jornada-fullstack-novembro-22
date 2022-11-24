import "./Footer.css"

function Footer(){
    const AnoAtual = new Date().getFullYear()
    return (
        <div className="Footer">
        <a href="/"> Todos os direitos reservados. ~{AnoAtual}   |  Por: Bruno Cerqueira </a> 
        </div>
    )
}

export default Footer;