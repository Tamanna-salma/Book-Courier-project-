import React from 'react'
import UseAuth from '../components/Hooks/UseAuth'
import Loading from '../Pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
  const {user,loading}=UseAuth();
   const location=useLocation()
  if(loading){
    return <Loading></Loading>

  }
  if(user && user ?.email){
    return children;
 }
    return (
    <Navigate state={location.pathname} to="/auth/register"></Navigate>
  )
}

export default PrivateRoute