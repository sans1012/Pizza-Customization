import React from 'react';
import Base from "../assets/PizzaBase.png";
import Cheese from "../assets/BaseCheese.png"
import Olive from "../assets/Olive.png";
import Mushroom from "../assets/Mushroom.png";
import Tomato from "../assets/Tomato.png";
//import Capsicum from
import Basil from "../assets/Basil.png";
import Corns from "../assets/Corns.png";
import {motion} from "framer-motion";
import {useHistory} from "react-router-dom";
export default function Customize({ingredients,setIngredients}) {
      let history=useHistory();
      const onChange = (event, name) => {
            //localStorage.clear();
            console.log(localStorage);
            let newIngredients = JSON.parse(JSON.stringify(ingredients));
            newIngredients[name] = event;
            setIngredients(newIngredients);
            localStorage.setItem("ingredients", JSON.stringify(newIngredients));
          };

      return(
            <div style={{fontSize:"20px",display :"flex"}}>
                  <div style={{padding:40, flex:1}}>
                        <div style={{maxHeight:500, maxWidth: 500,position:"relative"
                        }}>
                        <motion.div
                              initial={{opacity:0}}
                              animate={{
                                    
                                    y:ingredients['cheese']?100:-100,
                                    opacity:ingredients['cheese']?1:0,
                              }}
                              transition={{duration:0.4}}
                              className="ingredients z1">            
                              <img src={Cheese} 
                              alt="Cheese" 
                              height="100%" 
                              width="100%" 
                              />
                        </motion.div>
                        

                        <motion.div
                              initial={{opacity:0}}
                              animate={{

                                    y:ingredients['olive']?100:-100,
                                    opacity:ingredients['olive']?1:0,
                              }}
                              transition={{duration:1}}
                              className="ingredients z3">
                              <img src={Olive} 
                              alt="Olive" 
                              height="100%" 
                              width="100%" 
                             />
                        </motion.div>                     

                        <motion.div
                              initial={{opacity:0}}
                              animate={{
                                   
                                    y:ingredients['Corns']?100:-100,
                                    opacity:ingredients['Corns']?1:0,
                              }}
                              transition={{duration:1}}
                              className="ingredients z3">
                              <img src={Corns}
                              alt="Corns" 
                              height="100%" 
                              width="100%" 
                              />
                        </motion.div>
                        

                        <motion.div
                              initial={{opacity:0}}
                              animate={{
                                    
                                    y:ingredients['mushroom']?100:-100,
                                    opacity:ingredients['mushroom']?1:0,
                              }}
                              transition={{duration:1}}
                              className="ingredients z4">
                              <img src={Mushroom} 
                              alt="Mushroom"
                              height="100%" 
                              width="100%" 
                              />
                        </motion.div>
                        
                        <motion.div
                              initial={{opacity:0}}
                              animate={{
                                    //if ingredient and basil are true y=100(top) else -100(bottom)
                                    y:ingredients['basil']?100:-100,
                                    opacity:ingredients['basil']?1:0,
                              }}
                              transition={{duration:1}}
                              className="ingredients z4"
                        >
                              <img src={Basil} 
                              alt="Basil" 
                              height="100%" 
                              width="100%" 
                              />
                        </motion.div>
                        
                        
                        <motion.div
                              initial={{opacity:0}}
                              animate={{
                                    
                                    y:ingredients['tomato']?100:-100,
                                    opacity:ingredients['tomato']?1:0,
                              }}
                              transition={{duration:1}}
                              className="ingredients z4">
                              <img src={Tomato} alt="Tomato" 
                              height="100%" 
                              width="100%" />
                        </motion.div>

                        <motion.div transition={{ duration: 1 }} className="">
                              <img src={Base} alt="Pizza Base" height="100%" width="100%" />
                        </motion.div>
                        
                        </div>
                  </div>



                  <div style={{ padding:"40px", flex:1}}>
                  <label className="container-checkbox"> Corns
                  <input
                        type="checkbox"
                        checked={ingredients["Corns"]}
                        onChange={(event) =>
                        onChange(event.currentTarget.checked, "Corns")
                        }
                  />
                  <span className="checkmark"></span>
                  </label>

                  <label className="container-checkbox">Basil
                  <input
                        type="checkbox"
                        checked={ingredients["basil"]}
                        onChange={(event) => onChange(event.currentTarget.checked, "basil")}
                  />
                  <span className="checkmark"></span>
                  </label>
                  
                  <label className="container-checkbox">Olive
                  <input
                        type="checkbox"
                        checked={ingredients["olive"]}
                        onChange={(event) => onChange(event.currentTarget.checked, "olive")}
                  />
                  <span className="checkmark"></span>
                  </label>
                  
                  <label className="container-checkbox">Tomato
                  <input
                        type="checkbox"
                        checked={ingredients["tomato"]}
                        onChange={(event) =>
                        onChange(event.currentTarget.checked, "tomato")
                        }
                  />
                  <span className="checkmark"></span>
                  </label>
                  
                  <label className="container-checkbox">Mushroom
                  <input
                        type="checkbox"
                        checked={ingredients["mushroom"]}
                        onChange={(event) =>
                        onChange(event.currentTarget.checked, "mushroom")
                        }
                  />
                  <span className="checkmark"></span>
                  </label>
                  
                  <label className="container-checkbox">Cheese
                  <input
                        type="checkbox"
                        checked={ingredients["cheese"]}
                        onChange={(event) =>
                        onChange(event.currentTarget.checked, "cheese")
                        }
                  />

                  <span className="checkmark"></span>
                  </label>

                  <button onClick={()=> history.push("/checkout")}
                  className="proceedToCheckout"
                  style={{ marginLeft: 10 }}
                  >Proceed to Checkout</button>
                  </div>
            </div>
      )
}
