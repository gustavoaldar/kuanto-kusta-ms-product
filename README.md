# ms-product

### Funcionamento

1. Baixar o repositório:

~~~
git clone https://github.com/gustavoaldar/kuanto-kusta-ms-product.git
~~~

2. Instalar as dependências do projeto:

~~~
yarn
~~~

3. Criar um arquivo .env com as variáveis de ambiente:

~~~
MONGO_DB="<<URL_MONGO_DB>>"
~~~

4. Executar o projeto

~~~
yarn start:dev
~~~

### Rotas

**BASE_URL** = http://localhost:3002

- Cadastrar Produto

~~~
POST <<BASE_URL>>/product
~~~

- Data

~~~
{
	"name": string,
	"price": number
}
~~~

- Retornno

~~~
{
  "_id": "60a2b6203a9f23001fd698a3",
  "name": "Product 1",
  "price": 10,
  "createdAt": "2021-05-17T18:29:53.018Z",
  "updatedAt": "2021-05-17T18:29:53.018Z",
  "__v": 0
}
~~~
