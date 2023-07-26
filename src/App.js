import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CHeader from './components/CHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';

var name=<span>"this is variable"</span>

var test=function(){
  alert("hello junn in alert")
}

function test2(){
  alert("this is test 2")
}

class App extends React.Component{
  render(){
    const numbers = [9,8,7,6]
    return (
      <div className='App'>
        <Header n='anuj'> 
        <p>Anuj is a good boy</p>
        
        </Header>
        
      <CHeader name='junn' last='sheikh' numbers={numbers}/> 
      <Channel/> 
      <FunctionClick/>
      <CFunctionClick />
      </div> 
    )
    
    
  }
}


export default App;
