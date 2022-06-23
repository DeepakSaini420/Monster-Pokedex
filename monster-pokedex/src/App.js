import {Component} from 'react'
import CardList from './components/card-list/cardList.component';
import './App.css';
import SearchBar from './components/search-bar/searchBar.component';

class App extends Component {
  constructor(){
    super();
    this.state= {
      monster:[],
      searchField:''
    }
  }
  componentDidMount(){
    (async()=>{
      const response = await fetch('http://jsonplaceholder.typicode.com/users')
      const responseData =await response.json();
      this.setState({monster:await responseData})
    })();
  }
  onSearchChange = (event)=>{
    const searchTerm = event.target.value.toLowerCase();
    this.setState({searchField:searchTerm})
  }
  render(){
    const {monster,searchField} = this.state;
    const {onSearchChange} = this;
    const filterdMonster=monster.filter((monster)=>monster.name.toLowerCase().includes(searchField))
    return (
      <div className="App">
        <h1 className='app-title'>Monster Roledex</h1>
        <SearchBar onSearchChange={onSearchChange} placeholder={'Monster Search Box'} />
        <CardList monsters={filterdMonster}/>
      </div>
    );
  }
}

export default App;
