import React from 'react'
import { UseForm } from 'react-hook-form'



const UsersForm = () => {
  return (
    <form>
        <h2>Create Form</h2>
        <div>
            <label htmlFor=""></label>
            <input type="email" id="email" />
        </div>
        <div>
            <label htmlFor=""></label>
            <input type="password" id="password" />
        </div>
        <div>
            <label htmlFor=""></label>
            <input type="first_name" id="first_name" />
        </div><div>
            <label htmlFor=""></label>
            <input type="last_name" id="last_name" />
        </div><div>
            <label htmlFor=""></label>
            <input type="birthday" id="birthday" />
        </div>

    </form>
  )
}

export default UsersForm