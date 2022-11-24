export const Api = {
    // baseUrl: "http://localhost:3000/",
    baseUrl: "https://ocean-jornada-fullstack-novembro-22.onrender.com/",

        itens: {
            endpoint: function () {
                return Api.baseUrl + "itens";
            },
            readAll: function () {
                return this.endpoint() + "/";

            },
            create: function(){
                return this.endpoint() + "/";
            },
        },

        // Montar as requisições
        // GET
        buidApiGetRequest: function (url) {
            return fetch(url, {
                method: "GET",
            });
        },

        //Montar um POST
        buildApiPostRequest: function(url, body) {
            return fetch(url, {
                method: "POST",
                body: JSON.stringify(body),
                headers: new Headers({
                    "Content-type": "application/json",
                }),
            });
        },
        
};