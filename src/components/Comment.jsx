import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import commentAction from '../redux/actions/commentAction'
import NewComment from './NewComment'
import signInAction from "../redux/actions/signInAction"

export default function Comment(props) {
  let dispatch = useDispatch()
  let [comment, setComment] = useState([])
  const Swal = require('sweetalert2')
  let { _id } = props
  let [mostrar1, setMostrar1] = useState(false)
  let [toke, setToke] = useState("")
  let [form, setForm] = useState("")
  let [id, setId] = useState("")
  let mostrar = () => {
    setMostrar1(!mostrar1)
  }

  useEffect(() => {
    dispatch(commentAction.getComment(_id))
      .then(comment => setComment(comment.payload.response))
    let token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      setToke(token.token.user)
      dispatch(signInAction.reIngresar(token.token.user))
        .then(e => setId(e.payload.response.user.user._id))
    }
  }, []);
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
        dispatch(commentAction.postComment({ token: toke, data: { showId: _id, userId: id, comment: form, date: hoy } }))
          .then(e => {
            dispatch(commentAction.getComment(_id))
            .then(comment => setComment(comment.payload.response))
          })

      }
    }

    )

  }
  const inpt = (e) => {
    e.preventDefault()
    setForm(e.target.value)
  }
  return (
    <>

      <div> <button className='boton a' onClick={mostrar}>{mostrar1 ? ("Hide Comments") : ("Show Comments")}</button>
        {mostrar1 ? (<div>
          <form action="">
            <input className='comment' onChange={inpt} type="text" name='text' />
            <input onClick={sendCommit} type="submit" className='boton a' value="Send Comment" />
          </form>
        </div>) : ("")}
        {mostrar1 ? (comment.length > 0 ? (comment?.map(item => <> <NewComment className="container_comment" id={item._id} user={item.userId._id}  photo={item.userId.photo} coments={item.comment} name={item.userId.name} /></>)) : ("NOT COMMENT")) : ("")}

      </div>

    </>
  )
}



