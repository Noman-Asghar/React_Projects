import React , {useContext} from 'react'
import userContext from '../context/userContext'

const Profile = () => {
    const {user} = useContext(userContext)

    if (!user) return <h2>Please Login</h2>
        
   
   return (
    <div>
        <h1 style={{background: 'green' , padding: '20px', fontSize: "60px" , borderRadius: "20px"}}>Welcome {user.username}</h1>
    </div>
  )
}

export default Profile
