import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({Component}) => {
   
  return (
    <div>
        <Component/>
    </div>
  )
}

export default ProtectedRoute