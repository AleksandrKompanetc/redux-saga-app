import React from 'react'
import { incrementCreator, decrementCreator, asyncIncrementCreator, asyncDecrementCreator } from './store/countReducer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store/userReducer'

const App = () => {
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch()
  return (
    <div className='app'>
      <div className='count'>{count}</div>
      <div className='btns'>
        <button className='btn' onClick={() => dispatch(asyncIncrementCreator())}>Increment++</button>
        <button className='btn' onClick={() => dispatch(asyncDecrementCreator())}>Decrement--</button>
        <button className='btn' onClick={() => dispatch(fetchUsers())}>Get users</button>
      </div>
      <div className='users'>
        {users.map(user => 
          <div className='user'>
            {user.name}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
