const express = require('express');
const { MongoClient, ObjectId, Collection } = require("mongodb");
const cors = require("cors");


//const url = "mongodb://localhost:27017";
//const url = "mongodb://127.0.0.1:27017";
const url = "mongodb+srv://admin:GqB1qB34Drs9wrdt@cluster0.pdjfbuo.mongodb.net/";
const bancoDadosNome = "Ocean_Jornada_Fullstack_Novembro_2022";

//const url = "mongodb+srv://admin:LdQHrR3iAM9u4Mtw@cluster0.0tjjv1e.mongodb.net";
//const bancoDadosNome = "ocean_jornada_fullstack_novembro_22";


async function main() {
    console.log("COnectando ao banco de dados")
    const client = await MongoClient.connect(url);
    const bancoDados = client.db(bancoDadosNome)
    const collection = bancoDados.collection("itens");
    //So pra saber se esta conectado
    console.log("Conectado ao banco de dados")


const app = express();

// Configuração do CORS
app.use(cors());

// Sinalizamos que estamos usando o JSON no BODY

app.use(express.json());

// Endpoint prinicial
app.get("/", function (req, res) {
  res.send('Hello World, How Are You?')
})

// Endpoint /oi
app.get('/oi', function (req, res) {
    res.send('E ai mundo, Como Esta?')
  })

  //lista de informações
  const itens = ["Caminhão", "Carregadeira", "Escavadeira"];

  //Endpoint [GET] /itens READ ALL (ler todos os itens)
app.get("/itens", async function (req, res){
    //leio todos os documentos da collection
    const documentos = await collection.find().toArray();
    // res.send(itens);
    //Envio como resposta para o endpoint
    res.send(documentos);
});
  //Endpoint [POST] /itens CREATE (Criar um item)
app.post("/itens", async function (req, res){
    // console.log (req.body);

    //pegamos o objeto inteiro enviado no body
    const item = req.body;
    // Inserir o valor recebido na collection
    await collection.insertOne(item);
    res.send({ message: "Item criado com sucesso!" });
});

// Endpoint [GET] /itens/:id - READ BY ID (Ler pelo ID)
app.get("/itens/:id", async function (req, res) {

    //Pegamos o parâmetro de rota ID >
    const id = req.params.id;

    // Acessamos o item pelo índice >
    //Realizamos uma busca no banco de dados, FindOne, pois é ID é unico
    //e é um unico documento
    const item = await collection.findOne({
        _id: new ObjectId(id),
    });

    //Exibimos o item encontrado
    res.send(item);
});

//Endpoint [PUT] /itens/:id - UPDATE BY ID (Atualizar pelo ID)
app.put("/itens/:id", async function (req, res){
    //Pegamos o parametro de rota ID
    const id = req.params.id;
    //Pegamos o nome enviado no Body
    //const item = req.body.nome;

    //Pegamos o objeto enviado no Body
    const item = req.body;

    // atualizamos com o novo item, na posição ID da lista de itens
    //itens[id] = item;

    //Atualizamos o item no banco de dados
    await collection.updateOne({
        _id: new ObjectId(id)}, {$set: item}
    );
    res.send({ message: "Item atualizado com sucesso" });
});

// Endpoint [DELETE] /itens/:id - DELETE BY ID (Remover pelo ID)
app.delete("/itens/:id", async function (req, res){
    //Pegamos o parametro de rota ID
    const id = req.params.id;
    //Remove um item da lista
    //delete itens[id]
    await collection.deleteOne({
        _id: new ObjectId(id),
    });
    // Exibir a mensagem com sucesso
    res.send({ message: "Item apagado com sucesso" });
});

app.listen(process.env.PORT || 3000, function () {
    console.log("O servidor esta sendo lido em http://LocalHost:3000");
});
}
main();
