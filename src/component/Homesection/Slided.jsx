import React,{useState} from 'react'

const Slided = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
   
    const [subject, setSubject] = useState('')
    const [child, setChild] = useState('')
    const [room, setRoom] = useState('')

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) =>{
       e.preventDefault()
        const newValue ={ fname, lname, phone, subject, child, room}
        setAllValue([...allValue, newValue])

        setFname("")
        setLname("")
        setPhone("")
       
        setSubject("")
        setChild("")
        setRoom("")
    }
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
            <div className='container ct'>
               
                <h2>Enjoy Your Holiday</h2>
              <span>Search and Book Hotel</span>
                <form onSubmit={formSubmit}>
                    <input type='text'  placeholder='Search City' name='fname' value={fname} onChange={(e) => setFname(e.target.value) } />
                       
                        <div className='flex-space boxs'>
                           
                            <input type='date'  placeholder='Check-In' name='lname' value={lname} onChange={(e) => setLname(e.target.value) } />

                            <input  placeholder='Check-Out' type='date'  name='lname' value={phone} onChange={(e) => setPhone(e.target.value) } />
                        </div>
                        <div className='flex-space boxs'>
                            <input type='number'  placeholder='Adult(s)(+18)' name='subject' value={subject} onChange={(e) => setSubject(e.target.value) } />
                            <input type='number' placeholder='Children(0 - 17)' name='child' value={child} onChange={(e) => setChild(e.target.value) } />
                        </div>
                 
                  <input type='number' placeholder='Rooms'  name='room' value={room} onChange={(e) => setRoom(e.target.value) } />
                  <input type='submit' value='Search' className='submit' /> 
                 
                </form>
            </div>
            
        <div className='show-data'>
        {allValue.map((currentValue) =>{
             const {fname, lname, phone, subject, child, room} = currentValue
             return(

          
         <div className='side-content'>
            <h1>Successfully</h1>
            <h3> City : <p>{fname}</p></h3>
            <h3> Check-In : <p>{lname}</p></h3>
            <h3> Check-Out : <p>{phone}</p></h3>
           
            <h3> Adult's(18+) : <p>{subject}</p></h3>
            <h3>Childrens: <p>{child}</p></h3>
            <h3> Total Rooms : <p>{room}</p></h3>
         </div>
            )
        })}
        </div>
        </div>
      </section>
    </>
  )
}

export default Slided
/*


       <section className='slide-form'>
           <div className='container'>
              <h2>Enjoy Your Holiday</h2>
              <span>Search and Book Hotel</span>
              <form action=''>
                <input type='text' placeholder='Search City' name='' id=''/>
                <div className='flex-space boxs'>
                <input type='date' placeholder='Check In' /> 
                <input type='date' placeholder='Check Out' /> 
                </div>
                <div className='flex-space boxs'>
                <input type='number' placeholder='Adult(s)(+18)' /> 
                <input type='number' placeholder='Children(0 - 17)' /> 
                </div>
                <input type='number' placeholder='Rooms' /> 
                <input type='submit' value='Search' className='submit' /> 
              </form>
            </div> 
        </section> 
*/