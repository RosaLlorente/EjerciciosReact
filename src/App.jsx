import { useState } from 'react'
import {Ejercicio1} from './Componentes/Ejercicio1';
import {Ejercicio2} from './Componentes/Ejercicio2';
import './App.css'

function App() {

  return (
    <>
      <h1>RELACION DE EJERCICIOS DE REACT</h1>
      <h2>Ejercicio 1: ¡Hola mundo!</h2> 
      <p>Cada tutorial de inicio sobre un lenguaje de programación te enseña cómo emitir el mensaje "¡Hola, mundo!" usando el lenguaje.</p>
      <Ejercicio1></Ejercicio1>
      <br />
      <h2>Ejercicio 2: Captura de clics de usuarios</h2>
      <p>Este ejercicio le permitirá comenzar con el manejo de eventos, que es un concepto básico no solo en React sino también en JavaScript (que es otro requisito previo antes de aprender React) .</p>
    </>
  )
}

export default App
