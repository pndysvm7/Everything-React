import { useState } from "react"; 
export default function App() { 

    let [value, setValue] = useState(5); 

    return ( 
        <div className="App"> 
            <h1> 
                {value === 5  
                ? <h2> Value is 5 </h2>  
                : <h2> Value is not 5 </h2> 
                }
            </h1> 
        </div> 
    ); 
} 