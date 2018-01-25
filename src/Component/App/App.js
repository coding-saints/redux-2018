import React from 'react'
import UserList from '../../Container/UserList/UserList'
import UserDetail from '../../Container/UserDetail/UserDetail'
const App = () => (
        <div>
            <h2>UserName List</h2>
            <UserList />
            <hr/>
            <h2>User Details</h2>
            <UserDetail />
        </div>
)
export default App
