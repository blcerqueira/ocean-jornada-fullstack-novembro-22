import { useEffect } from "react";
import { useState } from "react";
import { Api } from "../../api/api";
import ItemCard from "../ItemCard/ItemCard";
import "./ReadAll.css"

function ReadAll() {
    // const itens = [
    //     {
    //         _id: "1234",
    //         nome: "Item1",
    //         imagemUrl: "https://picsum.photos/200/201"
    //     }, 
    //     {
    //         _id: "9999",
    //         nome: "Item2",
    //         imagemUrl: "https://picsum.photos/200/200"
    //     }, 
    //     {
    //         _id: "4444",
    //         nome: "Item3",
    //         imagemUrl: "https://picsum.photos/200/202"
    //     }

    // ];
    const [itens, setItens] = useState();

    async function realizarRequisicao() {
    const ReadAllUrl = Api.itens.readAll();
    console.log(ReadAllUrl);
    const response = await Api.buidApiGetRequest(ReadAllUrl);
        
    const resultado = await response.json();
    console.log({resultado});
    
    setItens(resultado);

}

useEffect(function () {
    realizarRequisicao();
}, []);


if (itens === undefined) {
    return <div>Carregando ...</div>
}

     return (
    <div className="ReadAll">
        {itens.map(function (item, index) {
            return <ItemCard key={`item-card-${index}`} item={item} />
        })}
        </div>
    )
}

export default ReadAll;