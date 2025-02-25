import './App.css';
import NavBar from './components/navBar';
import Title from './components/Title';
import Button from './components/Button';
import Input from './components/Input';
import TodoList from './components/TodoList';
import { saveToLocalStorage,getFromLocalStorage } from './utils/storage';
import React,{useState,useEffect} from 'react';
function App() {
  //  state for input 
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
    
    <div className="App">
      <NavBar />
      <Title text='This is react to do app'/>
      <Input value={inputValue}  onChange={setInputValiue}/>
      <Button text='add to do' onClick={handelAdd} />
      <TodoList todos={todos}/>
      
    </div>
  );
}

export default App;
