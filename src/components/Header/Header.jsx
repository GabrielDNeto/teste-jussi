import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import logoJussi from '../../assets/logoJussiVectorGreen.svg'
import searchIcon from '../../assets/search.svg'
import { BiSearch, BiCart } from "react-icons/bi";
import cartIcon from '../../assets/shopping-cart.svg'

import './styles.css'

function Header() {
  const [book, setBook] = useState("")
  const [result, setResult] = useState([])

  const fetchData = async () => {
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&ey=AIzaSyByEp3OZyNMrEzRX9XGgpT4EEYflltBvx0&maxResults=40`);

    const { items } = await data;

    setResult(items)
  }

  async function handleSubmit(event){
    event.preventDefault();
    fetchData();
  }

  return (
    <header>
      <div className="left_header">
         <a href="#"><img src={logoJussi} alt="Jussi - The business agency" /></a>
          <nav>
            <ul>
              <li>
                <a href="#">Nossas soluções</a>
              </li>

              <li>
                <a href="#">Conheça a Jüssi</a>
              </li>
            </ul>
          </nav>
      </div>

      <div className="right_header">
        <form action="" className="header_search" onSubmit={handleSubmit}>
          <input type="text" name="headerSearch" id="headerSearch" placeholder="Buscar livro" onChange={(e) => setBook(e.target.value)} />
          <button type="submit"><BiSearch /></button>
        </form>

        <ul className="resultados-pesquisa">
          {result.map((book, index) => (
            <li key={index}>
                <a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">
                <h4>{book.volumeInfo.title}</h4>
                </a>
            </li>
          ))}
        </ul>

        <a href="#" className="login-button">Login</a>

        <a href="#" className="cartIcon">
          <BiCart />
        </a>
      </div>
    </header>
  )
}

export default Header
