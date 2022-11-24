import "./ItemCard.css"

function ItemCard(props) {
    const item = props.item;
    return (
    <div className="ItemCard">
        <h1> {item.nome} </h1>
        <img src={item.imagemUrl} alt={"Imagem do " + item.nome} width={200} />
    </div>
    )
}

export default ItemCard;