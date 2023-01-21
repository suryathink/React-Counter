import { useState } from "react";


let mainDiv={
  width: "65%",
  margin: "auto",
  padding: "20px",
  textAlign:"center",
 backgroundColor: "crimson",
 color:"black"
}

// console.log(test_prime(37));




























function App() {
  
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    // if (count==0){
    //   return 
    // } else{
      setCount(count - 1);
    // } 
  };

  const reset = () => {
    
    setCount(0);
  }


  
function test_prime(n)
{
  if (n===1 || n==0 )
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}


  return (
    <div style={mainDiv}>
     <h1>Welcome to Counter 2.0</h1>
      <div style={{ gap:"200px"}} >
        <button  disabled = {count<=0} data-testid="minusonebtn" onClick={decrement}  >-1</button>
        <button  data-testid="plusonebtn" onClick={increment} >+1</button>
      <div>
        <button data-testid="resetbtn" onClick={reset} >Reset Count</button>
      </div>
      </div>
      <span data-testid="counter">Count:{count}</span>
      <div style={{display:"block"}}>
        <span data-testid="odd-or-even"  >This Number is:{count%2==0 ? "Even" : "Odd"}</span>
        <br/>
        <span data-testid="is-prime">Prime Number:{test_prime(count) ? "true" : "false"}</span>
      </div>
    </div>
  );

}


export default App;

