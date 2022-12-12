import './App.css'
import React, { useEffect, useState } from 'react'
import UsersList from './components.jsx/UsersList'
import UserForm from './components.jsx/UserForm'
import useCrud from './hooks/useCrud'

function App() {

  const { users,
    getAllUsers,
    createNewUser,
    updateUserById,
    deleteUserById
  } = useCrud()

  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)


  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <h1 className='App__title'>User Form</h1>
      <button onClick={ ()=> setCloseForm(false)} className='App__btn'>Open Form</button>

      <div className={`form__container ${closeForm &&"close__form"}`}>
        <UserForm
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>

      <div className='users__container'>
        {
          users?.map(user => (
            <UsersList
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUpdateInfo={setUpdateInfo}
              deleteUserById={deleteUserById}

            />
          ))
        }
      </div>
    </div>
  )
}

export default App
