import React from 'react'
import Footer from '../../Footer/Footer'
import HeadTitle from '../../HeadTitle/HeadTitle'
import axios from 'axios';
const SignUp = () => {
  const submitHandler =(event) => {
    event.peventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    const age = event.target.age.value;
    const height = event.target.height.value;
    const weight = event.target.weight.value;
    const gender = event.target.gender.value;
    const type = event.target.type.value;
    axios
    .post("https://fitozo.co.in/public/api/register")
    .then((response) =>{
      console.log(response)
       event.target.reset();
    }) 
    .catch((error) =>{
      console.log(error)
    })
  };
  return (
    <div>
      <HeadTitle/>

      <div>
  <form id='form' onSubmit={submitHandler} > 
<div className='frm fm1'>
<label   >Name:</label>
<input type='text' id='name'  required></input>
</div>
<div className='frm fm2'>
<label>Password:</label>
<input type='password' id='password'  required></input>

</div>
<br></br>

<div className='frm fm3'>
<label  >Age:</label>
<input type='text' id='age'  required></input>

</div>

<div className='frm fm4'>
<label >Height:</label>
<input type='text' id='height' required></input>

</div>
<br></br>
<div className='frm fm5'>
<label>Weight:</label>
<input type='text' id='weight'  required></input>

</div>
<div className='frm fm6'>
<label>Gender:</label>
<input type='text' id='gender' required></input>
</div>
<br></br>
<div className='frm fm7'>
<label>Type:</label>
<input type='text' id='type'  required></input>
</div>
<br></br>
<br></br>
<button >Submit</button>
</form>
</div>


      
      <Footer/>
    </div>
  )
}
export default SignUp