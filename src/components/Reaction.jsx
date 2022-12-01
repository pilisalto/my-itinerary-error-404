import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import reactionAction from '../redux/actions/reactionAction'
import { useState } from 'react'


export default function Reaction(props) {
    let { token } = useSelector(store => store.signInReducer)
    let { _id } = props
    let dispatch = useDispatch()
    let [reactions, setReactions] = useState([])
    const Swal = require('sweetalert2')
    
    useEffect(() => {
        dispatch(reactionAction.getReaction(_id))
        .then(reaciones => setReactions(reaciones.payload.response))
    }, []);
   
    
    function reactionPost(e) {
        let emog = ""
        if (e.target.name === "https://img.icons8.com/material-outlined/2x/facebook-like--v2.png") {
            emog = "like"
        }
        else if (e.target.name === "https://img.icons8.com/material-outlined/2x/thumbs-down.png") {
            emog = "not-like"
        }
        else if (e.target.name === "https://img.icons8.com/material-outlined/512/hearts.png") {
            emog = "love"
        }
        else if (e.target.name === "https://img.icons8.com/material-outlined/2x/surprised.png") {
            emog = "surprise"
        }


        dispatch(reactionAction.postearReaction({ name: emog, itineraryId: _id, token: token }))
        .then(res =>{
            if(res.payload.success){
                setReactions(reactions.map(e => e._id === res.payload.response._id ? (res.payload.response):(e)) )
            }
            else{
                Swal.fire({
                    title: 'Error!',
                    text: "you need log in",
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }
        } )
        dispatch(reactionAction.getReaction(_id))
        .then(reaciones => setReactions(reaciones.payload.response))
    }
    //console.log(response)
    return (
        <>
            <div>
                {reactions?.map(e => <>{e.userId.length === 0 ? (<img onClick={reactionPost} name={e.icon} src={e.icon} alt="icon" className='iconReaction' />) : ( <><img onClick={reactionPost} name={e.icon} src={e.iconBack} alt="icon" className='iconReaction' /> {e.userId.length} </>)}</>)}
            </div>
        </>
    )
}
