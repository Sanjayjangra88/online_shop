export const depositMoney =(amount)=>{
  
 return(dispatch)=>{
     dispatch({
         type :"deposite",
         payload:amount
     })
 }

}

 export const widrowMoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type :"widrow",
            payload:amount
        })
    }
    
}