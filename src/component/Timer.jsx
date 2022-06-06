import React, { useEffect, useState } from "react";

export const Timer = ({ inital, end }) => {
  const [timer, setTimer] = useState(inital);

  useEffect(() => {
   

    
      let id = setInterval(() => {
        setTimer((prev) => {
          if(prev===end){
            return prev
          }else{

            return (prev + 1);
          }
        })
      }, 2000);
    
    return(()=>{
       clearInterval(id)
    })
  }, []);

  return <div>Timer:{timer}</div>;
};
