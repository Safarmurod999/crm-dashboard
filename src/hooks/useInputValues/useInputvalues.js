import React from "react"

export  const useInputValue = (sxema) => {

    const [ value, setValue ]  = React.useState(sxema)

 
    return {
      value,
      change: (e) => setValue({...value, [e.target.name]: e.target.value})
    }


}