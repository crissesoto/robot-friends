import React, {Fragment} from 'react';
import { MDBContainer, MDBRow} from 'mdbreact';
import Card from './Card';


const CardList = ({cats}) =>{
    const CardArray = cats.map((user, i) =>{
        return (
            < Card 
            key={cats[i].id} 
            id= {cats[i].id} 
            name={cats[i].name} 
            username={cats[i].username} 
            email={cats[0].email} 
            />
        );
    })
    return(
        <Fragment>
            <MDBContainer>
                <MDBRow>
                    {CardArray}
                </MDBRow>
            </MDBContainer>
        </Fragment>
    )
}

export default CardList;