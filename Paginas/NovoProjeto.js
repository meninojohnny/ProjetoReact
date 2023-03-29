import * as React from 'react';
import './NovoProjeto.css'
import Form from '.././Projects/Form'
function novoProjeto(){
  return(
    <div className='NovoProjeto'>
      <h1>Criar Projeto </h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <Form />
    </div>
  )
}

export default novoProjeto