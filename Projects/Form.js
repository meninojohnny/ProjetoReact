import * as React from 'react';
import './Form.css'

function Form() {
  return(
    <form className='form'>
      <div>
        <label htmlFor="NameProject">Nome do projeto:</label>
        <input id='NameProject' type='text' placeholder='Insira nome do projeto' />
      </div>
      <div>
        <label htmlFor="Orcamento">Orçamento do projeto:</label>
        <input id='Orcamento' type="number" placeholder='Insira o orçamento total'/>
      </div>
      <div>
        <label htmlFor="categoria">Selecione a categoria:</label>
        <select id='categoria'>
          <option disabled selected>Selecione a categoria</option>
          <option>Categoria 1</option>
          <option>Categoria 2</option>
        </select>
      </div>
      <div>
        <input className='botao' type='submit' value='Criar projeto'/>
      </div>
    </form>
  )
}

export default Form