'use client'

import { signOut } from "next-auth/react"

export function LogOutBtn(){
    return (
      <button className="auth-button" onClick={()=>{ signOut() }}>LogOut</button>
    )
  } 