Do not use this 
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




Instead Try this

import { useState } from "react";

// use This function for conditional Rendering
// you can also declare it in some other js file and import it
let RenderIf = ({ children, isTrue }) => {
  console.log(children);
  return isTrue ? children : null;
};

export default function App() {
  let [value, setValue] = useState(5);

  return (
    <div className="App">
      <h1>
        <RenderIf isTrue={value === 5}>
          <h2>Value is 5</h2>
          <button onClick={() => setValue(7)}>click to set 7</button>
        </RenderIf>
      </h1>
      <h1>
        <RenderIf isTrue={value === 7}>
          <h2>Value is 7</h2>
          <button onClick={() => setValue(8)}>click to set 8</button>
        </RenderIf>
      </h1>
      <h1>
        <RenderIf isTrue={![5, 7].includes(value)}>
          <h2>Value is not 5 not 7, value is {value}</h2>
          <button onClick={() => setValue(5)}>click to set 5</button>
        </RenderIf>
      </h1>
    </div>
  );
}
