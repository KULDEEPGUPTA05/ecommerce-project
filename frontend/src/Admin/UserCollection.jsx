import React from 'react'
import { Outlet } from 'react-router'

const UserCollection = () => {
  return (
    <div><h1>UserCollection</h1>

        <ul>
            <li>user1</li>
            <li>user2</li>
            <li>user3</li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default UserCollection