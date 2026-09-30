import React from 'react'
import CompA from './CompA'
import { useState } from 'react'

const Parent = () => {
    const [name,setName]=useState("kuldeep");


  return (
    <div>

        <h1>Parent</h1>
        <CompA name={name}/>
    </div>
  )
}

export default Parent