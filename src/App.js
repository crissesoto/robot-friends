import React, {Fragment, Component} from 'react';
import CardList from './CardList';
import {cats} from './cats';
import SearchBox from './components/SearchBox';
import { MDBContainer } from 'mdbreact';


class App extends Component{
    constructor(){
        super();
        this.state = {
            cats: cats,
            searchField: '', 
        }
    };
    // create function to console the event of onChange()
    onSearchChange =  (event) =>{
        this.setState({searchField: event.target.value})
        //console.log(event.target.value);
        const filteredRobots = this.state.cats.filter((robot) =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log(filteredRobots);

    };

    render(){
    return(
        <Fragment>
            <MDBContainer className="text-center">
                <h1 className="tex-center m-4 green-text display-4"> Robots and Cats Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
            </MDBContainer>
            <CardList cats={this.state.cats} />
        </Fragment>
    )
}
}

export default App;