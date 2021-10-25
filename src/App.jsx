import Header from './components/Header/Header'
import Product from './components/Product/Product'

import imgBatedeira from './assets/batedeira.jpg';
import imgGeladeira from './assets/geladeira.jpg';
import imgBlackLabel from './assets/black-label.jpg';
import fineArrowRight from './assets/arrow-right-fine.svg'
import logoBrastemp from './assets/logo-brastemp.png';
import logoCompraCerta from './assets/logo-compra-certa.png';
import logoConsul from './assets/logo-consul.png';
import logoTheBar from './assets/logo-thebar.png';
import imgSobre from './assets/sobrejussi.jpg';
import logoWppCompany from './assets/wppcompany.png'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import './App.css';
import { useState } from 'react';


function App() {
  const [email, setEmail] = useState('')
  
  return (
    <div className="App">
      <Header />
      
      <section className="hero">
        <div className="container">
          <div>
          <h1>Criamos lojas que vendem mais.</h1>
          <p>
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?
          </p>

          <a href="#" className="outline-button-black">Veja nossas soluções</a>
        </div>

        <div className="hero-products">
          <div className="hero-product">
            <img src={imgGeladeira} alt="Geladeira" />
            <a href="#">Mais Detalhes</a>
          </div>

          <div className="hero-product">
            <img src={imgBatedeira} alt="Batedeira" />
            <a href="#">Comprar em 12x</a>
          </div>

          <div className="hero-product">
            <img src={imgBlackLabel} alt="Whisky Black Label - Jhonnie Walker" />
            <a href="#">Adicionar à sacola</a>
          </div>
        </div>
        </div>
      </section>

      <div className="principais-lojas">
        <div className="container">
          <p>Nossas principais lojas VTEX</p>

          <img src={fineArrowRight} alt="" />

          <a href=""><img src={logoBrastemp} alt="Brastemp" /></a>

          <a href=""><img src={logoCompraCerta} alt="Compra Certa" /></a>

          <a href=""><img src={logoConsul} alt="Consul" /></a>

          <a href=""><img src={logoTheBar} alt="TheBar" /></a>
        </div>
      </div>

      <section className="solucoes">
        <div className="container">
          <h2><span>//</span> Nossas Soluções</h2>
          <div className="products-box">
            <Product productImg="P1" productName="Nome do Produto #1" productDescription="Descrição do produto #1" />

            <Product productImg="P2" productName="Nome do Produto #2" productDescription="Descrição do produto #2" />

            <Product productImg="P3" productName="Nome do Produto #3" productDescription="Descrição do produto #3" />

            <Product productImg="P4" productName="Nome do Produto #4" productDescription="Descrição do produto #4" />
          </div>
        </div>
      </section>

      <section className="sobre">
        <div className="container">
          <div>
            <h2>
              Olá, somos a Jüssi
            </h2>
            <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>

            <a href="#" className="outline-button-black">Conheça a Jüssi</a>
          </div>

          <img src={imgSobre} alt="Sobre a Jüssi" />
        </div>
      </section>

      <section className="contato">
       <div className="container">
          <h2>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. <br />
          Tenha a sua.</h2>

          <p>Entre em contato</p>
          <h2 style={{fontWeight: 500}}>comercial@jussi.com.br</h2>
       </div>
      </section>

      <section className="newsletter">
       <div className="container">
          <h2>Receba novidades da nossa área de <br />
        produtos digitais.</h2>

          <form action="/">
            <input type="text" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit">Cadastrar</button>
          </form>
       </div>
      </section>

      <footer>
        <div className="container">
          <a href="#"><img src={logoWppCompany} alt="Wpp Company" /></a>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
