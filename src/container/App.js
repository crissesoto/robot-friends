import React, {Fragment, Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import { MDBContainer } from 'mdbreact';


class App extends Component{
    constructor(){
        super();
        this.state = {
            cats: [],
            searchField: '', 
            name: 'crisse',
        }
    };
    // create function to console the event of onChange()
    onSearchChange =  (event) =>{
        this.setState({searchField: event.target.value})
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json()
        }).then(users =>{
            this.setState({cats: users})
        });
    }


    render(){
    //console.log(event.target.value);
    const filteredRobots = this.state.cats.filter((robot) =>{
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return(
        <Fragment>
            <MDBContainer className="text-center">
                <h1 className="tex-center m-4 green-text display-4"> Robots and Cats Friends</h1>
                <SearchBox searchChange = {this.onSearchChange} name={this.state.name}/>
            </MDBContainer>
            <ErrorBoundry>
                <CardList cats={filteredRobots} />
            </ErrorBoundry>
        </Fragment>
    )
}
}

export default App;