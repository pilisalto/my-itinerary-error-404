import React from 'react'
import GoogleLogin from 'react-google-login'

export default function ButtonGoogle() {
    
  return (
    <>
    <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} 
                        buttonText="Log in with Google" 
                        cookiePolicy={"single_host_origin"}>
                            
    </GoogleLogin>
    </>
  )
}
