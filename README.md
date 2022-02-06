<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/BrunoCarvalhoFeitosa/BeTheHero">
    <img src="/public/amazon-icon-bigger.png" width="200" height="200" alt="Logo" />
  </a>

  <p align="center">
    Clone da loja Amazon, este clone possui funcionalidades de compra tendo a adição dos produtos ao checkout e o processamento de compras através do Stripe, um serviço muito efeciente que processa o pagamento de compras online e sob total segurança sobre os dados do usuário. O projeto foi feito com Next.js, Tailwind, Firebase e Stripe.
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#hospedagem">Hospedagem</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#license">Licenças</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#reconhecimentos">Reconhecimentos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto
Este app foi feito em Next.js, Tailwind CSS e Stripe, possuindo funcionalidades de login atráves do Next-Auth e funcionalidades de compra através de hooks e também do Stripe que possibilita o fechamento de compras utilizando um cartão de crédito, por exemplo.

### Home Page
A Home page possui um carossel interativo e os produtos são provenientes da fakestore.api. 
![AmazonHomePage](https://user-images.githubusercontent.com/46093815/152703799-a540a679-9f32-4f65-8bd3-fe5dfb4cb295.png)

### Checkout Page
Ao adicionar os produtos ao carrinho e clicar sobre o ícone, o usuário é redirecionado ao checkout onde os produtos escolhidos serão apresentados, juntamente com o subtotal de sua compra.
![AmazonCheckoutPage](https://user-images.githubusercontent.com/46093815/152703863-0960b0e4-3031-4c81-8572-2a4bfae10b9d.png)

### Stripe Page
Página para fechamento da compra, utilizando cartão de crédito como exemplo.
![AmazonStripePage](https://user-images.githubusercontent.com/46093815/152703991-a16de930-5388-49ec-ac9b-13ff642e83df.png)

### Pedido efetuado
Após preencher os dados no stripe e a comprar ser efetuada com sucesso, o usuário é redirecionado para a página de sucesso, notificando-o da transação bem sucedida.
![AmazonSuccessPage](https://user-images.githubusercontent.com/46093815/152704345-8e5f73b3-c3a7-4bb8-bc04-de3c706a9fae.png)

### Pedidos
Na página /orders, ao usuário estar autenticado serão exibidos todos os pedidos que foram efetuados com sucesso.
![AmazonOrdersPage](https://user-images.githubusercontent.com/46093815/152704387-9b2ee379-1302-4781-8f52-7ab07ef105ff.png)

### Feito com

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Firebase](https://firebase.google.com/)
* [Stripe](https://stripe.com/br)
* [Vercel](https://vercel.com/)

### Hospedagem

O app está em produção, contudo ocorreram alguns erros com o login que ainda serão sanados. Link do projeto: (https://amazon-clone-eta-two.vercel.app/).

<!-- GETTING STARTED -->
## Iniciando o projeto

Primeiramente será necessário clonar este projeto em (https://github.com/BrunoCarvalhoFeitosa/AmazonClone.git), após o download será necessário abrir este projeto no seu
editor e no terminal digitar npm install ou yarn, posteriormente é só rodar em seu terminal o comando yarn dev e também o comando stripe listen --forward-to localhost:3000/api/webhook. 

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/BrunoCarvalhoFeitosa/AmazonClone.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install ou yarn
   ```
   
3. Inicie o projeto
   ```sh
   npm run dev ou yarn dev
   ```   
4. Inicie o checkout
   ```sh
   stripe listen --forward-to localhost:3000/api/webhook
   ```

<!-- LICENSE -->
## License

Distribuído sob a licença MIT.

<!-- CONTACT -->
## Contato

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/)


<!-- ACKNOWLEDGEMENTS -->
## Reconhecimentos
* [Fake Store API](https://fakestoreapi.com/)
