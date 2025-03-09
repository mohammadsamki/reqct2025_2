import './App.css';
import ButtonAppBar from './components/navBar';
import Title from './components/Title';
import Button from './components/Button';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { saveToLocalStorage,getFromLocalStorage } from './utils/storage';
import React,{useState,useEffect} from 'react';
import Info from './components/info';
import { useContext } from 'react';
import MyContext from './components/myContext';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ResponsiveGrid from './components/cards';

function App() {
  //  state for input 
  const {user,setUser} = useContext(MyContext)
  const [inputValue,setInputValiue]= useState('');

  const [todos,setTodos]=useState(getFromLocalStorage('todos')||[]);
  // useEffect(()=>{
  // do any thing
  // },[state])
  useEffect(()=>{
    saveToLocalStorage('todos',todos)
    console.log('todos',todos)
  },[todos])

  const handelAdd = ()=>{
    // setTodos(inputValue)
    setTodos([...todos,inputValue])
    // saveToLocalStorage('todos',todos)
    // console.log(todos)
  }
  return (
    
    <BrowserRouter>
      <ButtonAppBar/>
        <Routes>
          <Route path='/info' element={<Info/>}/>
          <Route path='/' element={<ResponsiveGrid/>}/>
          
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
