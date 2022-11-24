export const Api = {
    baseUrl: "http://localhost:3000/",
    //baseUrl: "https://ocean-jornada-fullstack-novembro-22.onrender.com/",

        itens: {
            endpoint: function () {
                return Api.baseUrl + "itens";
            },
            readAll: function () {
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
        
};