import { Component } from "react";
import './searchBar.css'

class SearchBar extends Component {
    render(){
        const {onSearchChange} = this.props;
        return(
            <input className={`search-box ${this.props.className}`} type='search' placeholder={this.props.placeholder} onChange={onSearchChange}/>
        )
    }
}

export default SearchBar;