
import React from 'react';
import Card from './Card';
import { MDBContainer } from 'mdbreact';

const CardList = ({ cats }) => {
  return (
    <MDBContainer fluid className="d-flex row">
      {
        cats.map((user, i) => {
          return (
            
            <Card
              key={i}
              id={cats[i].id}
              name={cats[i].name}
              email={cats[i].email}
              />
          );
        })
      }
    </MDBContainer>
  );
}

export default CardList;