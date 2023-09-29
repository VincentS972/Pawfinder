import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Pet() {
  
  const [pets, setPets] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
      const URL = `${process.env.REACT_APP_BACKEND_URI}/pets`
      const response = await fetch(URL)
      const data = await response.json()
      setPets(data)
    };

    fetchData();
  }, []);

  const display = pets.map(pet => {
    return(
      <div className="wrapper">
        <div style={{ textAlign:"center", display:"flex" }}>
          <Card style={{ 
            width: '18rem',
            display: 'inline-block',
            margin: '5px',
          }} key={pet._id}>
            <Card.Img variant="top" src={pet.profilePicture} />
            <Card.Body>
              <Card.Title>
                <Link to={`/pets/${pet._id}`} style={{color:'blue'}}>
                  <h5 style={{textAlign:'center', marginTop: '8px', color:'blue'}}>{pet.petName}</h5>
                </Link>
              </Card.Title>
              <Card.Text>
                <Link to={`/foster`} style={{color:'blue'}}>
                  <h5 style={{textAlign:'center', marginTop: '8px', color:'blue'}}>Foster Parent: {pet.fosterName}</h5>
                </Link>
              </Card.Text>
              <Card.Text>
                Bio: {pet.petBio}
              </Card.Text>
              <Button>
                <Link to={`/`} style={{color:'blue'}}>
                  <h5 style={{textAlign:'center', margin: '5px', marginTop: '8px', color:'blue'}}>Adopt</h5>
                </Link>
              </Button>
              <Button>
                <Link to={`/pet/update/${pet._id}`} style={{color:'blue'}}>
                  <h5 style={{textAlign:'center', margin: '5px', marginTop: '8px', color:'blue'}}>Edit Profile</h5>
                </Link>
              </Button>
              <Button>
                <Link to={`/new`} style={{color:'blue'}}>
                  <h5 style={{textAlign:'center', margin: '5px', marginTop: '8px', color:'blue'}}>New Profile</h5>
                </Link>
              </Button>
              {/* <Button variant="primary">Adopt Me</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  });

  return (
    <div style={{display: "flex"}}>
      {display}
    </div>
  );
}

export default Pet;
  