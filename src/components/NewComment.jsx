import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import commentAction from '../redux/actions/commentAction'
import signInAction from "../redux/actions/signInAction"

export default function NewComment({ photo, coments, name, user, id }) {
  let { logged, role, _id, token } = useSelector(store => store.signInReducer)
  let dispatch = useDispatch()
  let [eli , setEli] = useState(true)
  let [idr, setIdr] = useState(token)
  let [mod, setMod] = useState(true)
  let [form, setForm] = useState("")
  let [comment, setComment] = useState(coments)
  const Swal = require('sweetalert2')
  let color = ""
  if (logged && (user === _id)) {
    color = "color"
  }
  else {
    color = "container_comment"
  }
  const delet = async(e) => {
    if (token) {
      setIdr(token)
    }
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be continue!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(commentAction.deletComment({ id: e.target.name, token: idr }))
        .then(e => {
          if(e.payload.success){
            setEli(false)
          }
          else{
            Swal.fire({
              title: 'Error!',
              text: "Not Delete",
              icon: 'error',
              confirmButtonText: 'Cool'
            })
          }
        })
      }})
  }
  const modif = (e) => {
    setMod(!mod)
    console.log(e.target.name)
  }
  const inpt = (e) => {
    e.preventDefault()
    setForm(e.target.value)
  }
  const sendCommit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be continue!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
        dispatch(commentAction.putComment({ token: token, comment:form ,id:id }))
          .then(e => {
            if(e.payload.success){
              setComment(form)
              setMod(!mod)
            }
            else{
              Swal.fire({
                title: 'Error!',
                text: "unauthorized user",
                icon: 'error',
                confirmButtonText: 'Cool'
              })
              setMod(!mod)
            }
            
          })
          

      }
    }

    )

  }
  return (
    <>
      {eli ?
      (<div className={color}  >
        {mod ?
        (<div>
          <img src={photo} alt="" className='icons' />
          {comment}
        </div>):(<> <form action="">
            <input className='comment' onChange={inpt} type="text" name='text' />
            <input onClick={sendCommit} type="submit" className='boton a' value="Send Comment" />
          </form> </>)}
        <div className='end'>
          <img src="https://img.icons8.com/material-outlined/2x/pencil-tip.png" name={id} onClick={modif} alt="edit" className='icons' />
          <img src="https://img.icons8.com/material-outlined/2x/delete-forever.png" name={id} onClick={delet} alt="delete" className='icons' />
        </div>
      </div>):("")}

    </>
  )
}
