'use client'

import {signIn} from 'next-auth/react'

export default function LoginBtn(){
    return(
        <button className='auth-button' onClick={()=>{signIn()}}>LogIn</button>
    )
}