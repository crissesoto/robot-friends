import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';

const Card = (props) => {
    return (
            <MDBCard  className="p-3 b-3 m-3" style={{ width: "240px" }}>
                <MDBCardImage className="img-fluid" src={`https://robohash.org/${props.id}?set=set4`} waves style={{ width: "200px", height: "200px" }}/>
                <MDBCardBody className="text-center">
                    <MDBCardTitle>{props.name}</MDBCardTitle>
                    <MDBCardText>{props.username}</MDBCardText>
                    <MDBCardText>{props.email}</MDBCardText>
                </MDBCardBody>
            </MDBCard>
  )
}


export default Card;