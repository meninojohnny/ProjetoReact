import * as React from 'react';
import './Container.css'
import Home from '../Paginas/Home'
import Contatos from '../Paginas/Contatos'
import NovoProjeto from '../Paginas/NovoProjeto'
import Empresa from '../Paginas/Empresa'

function Container({valor, setValor}) {

    var tag = null

  switch (valor) {
    case 'Home':
      tag = <Home setValor={setValor} />
      break
    case 'Contatos':
      tag = <Contatos />
      break
    case 'Empresa':
      tag = <Empresa />
      break
    case 'Novo Projeto':
      tag = <NovoProjeto />
      break
  }

  return(
    <div className='container'>
      {tag}
    </div>
  )
}

export default Container 