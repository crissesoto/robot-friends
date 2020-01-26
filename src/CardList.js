import React from 'react';
import { MDBContainer, MDBRow} from 'mdbreact';
import Card from './Card';


const CardList = ({cats}) =>{
    const CardArray = cats.map((user, i) =>{
        return < Card id= {cats[i].id} name={cats[i].name} username={cats[i].username} email={cats[0].email} />;
    })
    return(
        <frament>
            <MDBContainer>
                <MDBRow>
                    {CardArray}
                </MDBRow>
            </MDBContainer>
        </frament>
    )
}

export default CardList;