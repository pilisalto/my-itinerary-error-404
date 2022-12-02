import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({isAllowed, redirect, children}) => {
  if(!isAllowed){
    return <Navigate to={redirect} />
  }
  return <Outlet/>
}
 export default ProtectedRoute