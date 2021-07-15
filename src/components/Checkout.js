import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import Pizzaman from"../assets/PizzaMan.png";


export default function Checkout({ ingredients }) {   const history = useHistory();
      const [success, setSuccess] = useState(false);
    
     
      return (
            <div style={{padding:"50px" ,display:"flex"}}>
                  <div>
                        <div>
                              <h1 style={{fontFamily: "Quicksand"}}>Toppings</h1>
                              {Object.keys(ingredients).reduce((acc, ing) => {
                              return acc + ingredients[ing] ? 1 : 0;
                              }, 0) === 0 && <p style={{fontFamily:"Quicksand" , fontSize:"20px"}}>No ingredients Selected</p>}

                              {Object.keys(ingredients).map((ingredient)=>{
                                    return (
                                    ingredients[ingredient]&&(
                                    <p>
                                    {ingredient[0].toUpperCase()}
                                    {ingredient.substr(1)}
                                  </p>
                              )
                              );
                        })}

                        <button
                        className="proceedToCheckout"
                        onClick={() => history.push("/")}
                        >
                        Go Back
                        </button>
                        <button
                        onClick={() => setSuccess(true)}
                        className="proceedToCheckout"
                        style={{ marginLeft: 10 }}
                        >
                              Confirm
                        </button>
                              
                        </div>      
                  </div>

                  <div style={{flex:1}}>
                  {success && (
                  <div style={{ textAlign: "center" }}>
                  <img src={Pizzaman} alt="pizzaman" height="300px" />
                  <div style={{ fontFamily: "Quicksand", fontSize: 35 }}>
                  We have received your order, Thank you
                  </div>
                  <div style={{ fontFamily: "Quicksand" }}>
                  Order #{Math.round(Math.random() * 100000)}
                  </div>
                  <div style={{ fontFamily: "Quicksand", fontSize: 20 }}>
                  Will be ready in 20-30 min.
                  </div>
            </div>
            )}
                  </div>

            </div>
      );
}
 