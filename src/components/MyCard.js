import React from "react";
import  Button  from "react-bootstrap/Button";
import Card  from 'react-bootstrap/Card';
// import {motion } from 'framer-motion'
// import {Link} from 'react-router-dom'


function MyCard({icon, title, description, buttonTitle}) {
  return (
    <Card 
  //   layout
  //   initial={{opacity: 0,  y: -500}}
  //   animate={{opacity: 0.8,  boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.1)",
  //   y: 0
  // }}
  //   transition={{ duration: 0.4 }}
  //   whileHover={{ scale: 1.1, opacity: 1 }}
    // whileTap={{ scale: 0.8 }}
    className="mt-5 ml-5 mr-5 pt-3 text-right card-choose d-flex flex-column" style={{ width: "18rem",
     borderColor: "#1D7B6B", borderWidth: "0.5px", borderStyle: 'solid' 
    }}>
      {icon}
      <Card.Body>
        <Card.Title className="font-title text-center">{title}</Card.Title>
        <Card.Text className="font-des">
          {description}
        </Card.Text>
        
        
        <a href="http://xn--lgbbh4al3hxbb.xn--mgbaj0a2hmz.com/">
        <Button   className="d-flex mr-auto ml-auto pl-5 pr-5 font-des" style={{backgroundColor: "#28BECD" , borderColor: "#28BECD"}}>
       {/* <Link to="" > */}
       {buttonTitle}
         {/* </Link>  */}
        </Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
