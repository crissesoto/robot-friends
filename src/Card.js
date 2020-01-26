import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';

const Card = () => {
    return (
    <MDBContainer>
        <MDBCol>
            <MDBCard style={{ width: "22rem" }} className="p-3 b-3 m-3">
                <MDBCardImage className="img-fluid" src="https://robohash.org/hha?set=set4" waves />
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBContainer>
  )
}


export default Card;