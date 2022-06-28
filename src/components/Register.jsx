import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'

function Register() {
  const [reg, setReg] = useState({
    name:'',
    pass:'',
  })

  const handleChangeName = ( async (e)=>{
    setReg({
      ...reg,
      name: e.target.value
    })
  })
  
  const handleChangePass = ( async (e) => {
    setReg({
      ...reg,
      pass: e.target.value
    })
  })

  const addUser = async ()=>{
    try{
      const user = await createUserWithEmailAndPassword(
        auth, 
        reg.name, 
        reg.pass
      )
      console.log(user);
    } catch(err){
      console.log("err");
    }
  }

  return (
    <div>
      <input type="text" placeholder="kullanıcı adi" onChange={handleChangeName}/>
      <input type="text" placeholder="sifre" onChange={handleChangePass} />
      <button onClick={addUser}>Kayıt ol</button>
    </div>
  )
}

export default Register