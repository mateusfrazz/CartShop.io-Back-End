# CartShop.io-Back-End

**Back-End da aplicação CartShop feito em Node.js utilizando Json Server**

Este projeto disponibiliza uma API REST para gerenciar produtos, categorias, banners, imagens e outros recursos essenciais de um e-commerce. Ideal para testes, desenvolvimento front-end e prototipação rápida.

---

## 🚀 Principais Funcionalidades

- **API REST simulada**: Utiliza o [json-server](https://github.com/typicode/json-server) para operações completas de CRUD.
- **Banco de dados em arquivo**: Persistência dos dados em `db.json` para fácil manipulação e deploy.
- **Imagens públicas**: Pasta `Images` acessível via endpoints para consumo no front-end.
- **EndPoints organizados**: Rotas para produtos, categorias, subcategorias, banners e mais.
- **Pronto para deploy**: Opera localmente ou em plataformas como Render, Vercel, Netlify e Railway.

---

## 🗂 Estrutura dos Dados (`db.json`)

- **banners**: Array de banners com id e caminho da imagem.
- **categoriaData**: Lista de categorias principais (moda, casa, eletrodomésticos, brinquedos, etc).
- **products**: Produtos detalhados com id, nome, descrição, preço, categoria, subcategoria, imagem e tamanhos.
- **SubCategories**: Dicionário ligando subcategorias às categorias principais.

---

## 🛠 Como rodar localmente

- git clone https://github.com/mateusfrazz/CartShop.io-Back-End.git
- cd CartShop.io-Back-End
- npm install
- npm start
- Acesse: `http://localhost:3000`

## 🌎 Principais Endpoints

- `GET /products`, `POST /products`, `PUT /products/:id`, `DELETE /products/:id` — CRUD de produtos
- `GET /categoriaData` — categorias principais
- `GET /SubCategories` — subcategorias
- `GET /banners` — banners promocionais
- `GET /Images/*` — acesso às imagens

---

## 🛒 Exemplo de objeto produto

"pdId": 8565,
"pdName": "SAMSUNG Galaxy F04 (Opal Green, 64 GB)",
"pdDesc": "Discover flawless user experience ...",
"pdPrice": 11499,
"pdCategory": "appliances",
"pdSubCategory": "mobile",
"pdImg": "Images/productimg/samasungmobile.webp"
}

---

## ☁️ Deploy

Pode ser facilmente publicado em serviços como Render, Vercel, Netlify ou Railway. Basta configurar o comando `npm start` e definir o `server.js` como entry point.

## Front-End do projeto 🚀
[Cartshop-repositorio-front-end](https://github.com/mateusfrazz/cartshop.io/blob/master/README.md)
