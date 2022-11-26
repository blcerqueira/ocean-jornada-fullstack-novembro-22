import { useNavigate } from "react-router-dom";
import { Api } from "../../api/api";
import "./Create.css"

function Create() {
    const navigate = useNavigate();

    async function processarSubmit(event) {
        event.preventDefault();

        const nome = event.target.nome.value;
        const imagemUrl = event.target.imagemUrl.value;
        console.log(nome, imagemUrl);
        
        const payload = {
            nome,
            imagemUrl
        };
        console.log(payload);

        const createUrl = Api.itens.create();
        const response = await Api.buildApiPostRequest(createUrl, payload);
        const body = await response.json();
        if (response.status === 200) {
            alert(body.message);
            navigate("/");
        } else {
            alert("Algum erro ocorreu, tente novamente.");
        }
    }

    return (
    <div className="Create">
            <form onSubmit={processarSubmit}>
                <div className="label_div">
                    <label htmlFor="nome">Nome:</label>
                </div>
                    <div>
                    <input type="text" id="nome" />
                    </div>
                
                <div className="label_div">
                <label htmlFor="imagemUrl">URL da Imagem:</label>
                </div>

                    <div>
                    <input type="text" id="imagemUrl" />
                    </div>

                <div className="botao">
                <input className="botao_dentro" type="submit" value="Adicionar" />
                </div>
            </form>
            <div>
            <ul>
                <li>TRATOR</li>
                <b>https://www.deere.com.br/assets/images/region-3/products/tractors/large/7j-series/trator_7j_large_f688f995385ce4bcabbc91c88164c9c45195d8d3.png</b>
                <li>MOTOCANA</li>
                <b>http://sc04.alicdn.com/kf/HTB1H6JSbeuSBuNjSszi762q8pXaE.png</b>
                <li>CAMINHÃO</li>
                <b>https://www.savana.com.br/img/caminhoes/axor.png</b>
            </ul>
            </div>
    </div>
)
    }

export default Create;

