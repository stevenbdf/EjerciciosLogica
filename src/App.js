import React from 'react'
import './App.css'
import Main from './pages/main/Main'
import Ex1 from './pages/ejercicios/Ejercicio1'
import Ex2 from './pages/ejercicios/Ejercicio2'
import Ex3 from './pages/ejercicios/Ejercicio3'
import Ex4 from './pages/ejercicios/Ejercicio4'
import Ex5 from './pages/ejercicios/Ejercicio5'
import Ex6 from './pages/ejercicios/Ejercicio6'
import Ex7 from './pages/ejercicios/Ejercicio7'
import Ex8 from './pages/ejercicios/Ejercicio8'
import { Route, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/1' component={Ex1}/>
          <Route exact path='/2' component={Ex2}/>
          <Route exact path='/3' component={Ex3}/>
          <Route exact path='/4' component={Ex4}/>
          <Route exact path='/5' component={Ex5}/>
          <Route exact path='/6' component={Ex6}/>
          <Route exact path='/7' component={Ex7}/>
          <Route exact path='/8' component={Ex8}/>
        </Switch>
      </div>
    </HashRouter> 
  )
}

export default App;
