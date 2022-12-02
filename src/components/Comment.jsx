import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import commentAction from '../redux/actionscommentAction'

export default function Comment(props) {
    let dispatch = useDispatch()
    let [comment, setComment] = useState([])
    const Swal = require('sweetalert2')
    let { _id } = props

    useEffect(() => {
        dispatch(commentAction.getComment(_id))
        .then(comment => setComment(comment.payload.response))
    }, []);
    
  return (
    <>
    <div>
        {comment?.map(e => <>{e.userId.length === 0 ? (<img onClick={commentPost} name={e.icon} src={e.icon} alt="comment" className='' />) : ( <><img onClick={commentPost} name={e.icon} src={e.iconBack} alt="comment" className=''/> {e.userId.length} </>)}</>)}
    </div>
</>
  )
}



