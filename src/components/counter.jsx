
import React,{ useState } from "react"
import styles from "./styles.module.css"

export const Counter =()=>{

    const [count ,setCount] = useState(0);

    
        const handleClick = (e) => {
            if (e.target.name ==="inc")
            {
                setCount(count + 1)
            }
            else {
                if(e.target.name ==="dob")
                {
                    setCount(count *2)
                }
                else{
                    if(count>0){
                        setCount(count- 1)
                    }
                }
            }
        }
    

return(
    <div>{count%2===0 ? <h1 style={{color:"red"}} >Counter App : = {count}</h1> : <h1 style={{color:"green"}} >Counter App : = {count}</h1> }
        <button name ="inc" onClick={handleClick}>Increment</button>
        <button name ="dec" onClick={handleClick}>decrement</button>
        <button name ="dob" onClick={handleClick}>Double</button>
    </div>
)
}

// className={count%2===0 ? styles.red1 : styles.green

