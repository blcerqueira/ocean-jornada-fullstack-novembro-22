import "./ItemCard.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { Api } from "../../api/api";
import { useNavigate } from "react-router-dom";

function ItemCard(props) {
    const item = props.item;

    const navigate = useNavigate();

async function excluirItem() {
    if (!confirm("Tem certeza que deseja exluir esse equipamento?")) {
        // colocar um retorn vazio encerra a funcao
        return;
        }

    const deleteUrl = Api.itens.delete(item._id);
    const response = await Api.buildApiDeleteRequest(deleteUrl);
    const body = await response.json();

    if (response.status === 200) {
        alert(body.message);
        navigate(0);
    } else {
        alert("Algum erro ocorreu, tente novamente");
    }
}

    return (
    <div className="ItemCard">
        <FontAwesomeIcon onClick={excluirItem} className="icon-delete" icon={faTrashCan} />
        <h2>{item.nome}</h2>
        <img src={item.imagemUrl} alt={"Imagem do " + item.nome} width={200} />
    </div>
    )
}

export default ItemCard;