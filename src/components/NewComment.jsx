import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function NewComment({photo,coments,name,user}) {
  let  {logged, role, _id} = useSelector(store => store.signInReducer)
  let color = ""
  console.log(user , _id, logged)
  if(logged && (user === _id)){
    color = "color"
  }
  return (
    <>
    <div className={color}>
      <img src="https://img.icons8.com/material-outlined/2x/pencil-tip.png" alt="edit" />
      <img src="https://img.icons8.com/material-outlined/2x/delete-forever.png" alt="delete" />
      <img src={photo} alt="" className='icons' />
      {coments}
    </div>
    </>
  )
}
