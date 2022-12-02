import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function NewComment({photo,coments,name,user}) {
  let  {logged, role, _id} = useSelector(store => store.signInReducer)
  console.log(user , _id, logged)
  if(logged && (user === _id)){
  }
  return (
    <>
    <div className='container_comment'>
      <img src={photo} alt="" className='icons'/>
      {coments}
      <div className='end'>
        <img src="https://img.icons8.com/material-outlined/2x/pencil-tip.png" alt="edit" className='icons'/>
        <img src="https://img.icons8.com/material-outlined/2x/delete-forever.png" alt="delete" className='icons'/>
      </div>
    </div>
    </>
  )
}
