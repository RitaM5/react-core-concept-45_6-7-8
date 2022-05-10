import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  
//load dynamic data,API call useEffect itegrate state(45-8 module):
  return (
    <div className="App">
       <ExternalUsers></ExternalUsers> 
    </div>
    )
  }
    
    function ExternalUsers(){
      const [users, setUsers] = useState([]);
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))//akhane stUsers() namok state ar sathe data connect krce.
      }, []);

      return(
        <div>
          <h2>External Users</h2>
          <p>{users.length}</p>
          {
            users.map(user => <User name={user.name} email={user.email}></User>)
          }
        </div>
      )
   }  

  function User(props){
    return(
      <div style={{border:'2px solid red',margin:'20px'}}>
        <h3>Name:{props.name}</h3>
        <p>Email:{props.email}</p>
      </div>
    )
  }

// state system a component__45-7 module
/*  return (
<div className="App">
   <Counter></Counter> 
</div>
)
}
function Counter(){
  const [count, setCount] = useState(0);

  const IncreaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

return(
<div>
    <h1>count:{count}</h1>
    <button onClick={IncreaseCount}>Increase</button>
    <button onClick={decreaseCount}>Increase</button>
</div>
)
} */


//system number-2(45-6 module). abar dynamic vabe nature korar system:
/* 
   const products =[
     {name:'laptop', price:53000},
     {name:'phone', price:51000},
     {name:'watch', price:3000},
     {name:'tablet', price:300},
   ]

return (
  <div className="App">
     {
       products.map(product => <Product name={product.name} price={product.price}></Product>)
     }
  </div>
)
}
function Product(props){
return(
  <div className="product">
    <h3>Name:{props.name}</h3>
    <p>Price:{props.price}</p>
  </div>
)
} */

//system number-1(45-6 module). ata simple vabe component make kore,jeta dynamic vabe nature korena.
/*   return (
    <div className="App">
       <Product name="laptop" price="47000"></Product>
       <Product name="phone" price="75000"></Product>
    </div>
  )
}
function Product(props){
  return(
    <div className="product">
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
} */

export default App
 /*  const IncreaseCount = () =>{
    const newCount = count + 1;
    setCount(newCount);
  } */