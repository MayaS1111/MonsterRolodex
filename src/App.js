// FOR FUNCTINAL COMPONETS
import { useState, useEffect } from 'react';
// FOR CLASS COMPONENTS
//import { Component } from 'react';

import CardList from './components/card-list/card-list.components'
import SearchBox from './components/search-box/search-box.components'
import './App.css';

// FUNCTINAL COMPONETS
const App = ()=>{
  const [monsters,setMonsters] = useState([]);
  
  const [filteredMonsters,setFilteredMonsters] = useState(monsters);
  const [searchField,setSearchField] = useState('');
  
  console.log('render')

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[]);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
 
  },[monsters,searchField]);


  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className= "app-title">
        Monster Rolodex
      </h1>
      <SearchBox 
        className= 'monster-search-box'
        placeholder= 'search monsters'
        onChangeHandler= {onSearchChange}
      />
      <CardList 
        monsters={filteredMonsters}
      />
    </div>
  );  
}        


// CLASS COMPONENTS
// class App extends Component{
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField:'',
//     }
//     console.log('constructor')
//   }

//   componentDidMount(){
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           () => {
//             return {monsters:users}
//           },
//           () => {
//             console.log(this.state)   
//           }  
//         )
//       );
//   }

//   onSearchChange=(event)=>{
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(
//       () =>{
//         return {searchField}
//       }
//     )
//   }

//   render(){
//     console.log('render');

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
    
//     const filteredMonsters = monsters.filter((monster)=> {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">
//         <h1 className= "app-title">
//           Monster Rolodex
//         </h1>
//         <SearchBox 
//           className= 'monster-search-box'
//           placeholder= 'search monsters'
//           onChangeHandler= {onSearchChange}
//         />
//         <CardList 
//           monsters={filteredMonsters}
//         />
//       </div>
//     );  
//   }
// }

export default App;
