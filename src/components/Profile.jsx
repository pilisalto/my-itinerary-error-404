import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import signInAction from "../redux/actions/signInAction"
import { BASE_URL } from '../api/url'
import { useEffect, useState } from 'react'
import reactionAction from '../redux/actions/reactionAction'
import myTinerariesAction from '../redux/actions/myTinerariesAction'
import axios from 'axios'

export default function Profile() {
    const { user, _id, token } = useSelector(store => store.signInReducer)
    let [stat, setStat] = useState(user)
    let [mostrar1, setMostrar1] = useState(false)
    let [reactions, setReactions] = useState([])
    let [iti, setIti] = useState([])
    const dispatch = useDispatch()
    const Swal = require('sweetalert2')

    const [addPro, setAddPro] = useState({
        "name": '',
        "lastName": '',
        "photo": '',
        "age": ''
    })
    const readInput = (e) => {
        const value = e.target.value
        const prop = e.target.name
        setAddPro({
            ...addPro,
            [prop]: value
        })
    }
    let mostrar = () => {
        setMostrar1(!mostrar1)
    }
    let eliminar = (e) => {
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
                dispatch(reactionAction.eliminarReaction({ _id: e.target.value, token: token }))
                    .then(res => {
                        dispatch(reactionAction.getReactionUser(_id))
                            .then(reaciones => { setReactions(reaciones.payload.response) })
                    })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: "Reaction delete",
                    showConfirmButton: false,
                    timer: 2000
                })

            }
        })
    }

    useEffect(() => {
        dispatch(signInAction.getUser(_id))
            .then(e => setStat(e.payload.response))
        dispatch(reactionAction.getReactionUser(_id))
            .then(reaciones => { setReactions(reaciones.payload.response) })

    }, [])

    const ValidateInfo = async (e) => {
        e.preventDefault()
        await axios.patch(`${BASE_URL}/api/auth/me/${_id} `, addPro)
            .then(function (response) {
                setStat(addPro)
                if (response.data.success) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Profil Edit',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: response.data.message.join("- - - - -"),
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            .catch(function (error) {

                Swal.fire({
                    title: 'Error!',
                    text: 'profil was not edit',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    }
    console.log(reactions, iti.itineraryId)
    return (
        <div className='image_back2'>
            <div className='container'>
                <div>
                    <div>
                        <img className='img_user' src={stat.photo} />
                        <h4 className='h4_2 row'><p>Name: </p> {stat.name}</h4>
                        <h4 className='h4_2 row'><p>Last Name: </p> {stat.lastName}</h4>
                        <h4 className='h4_2 row'><p>Age: </p> {stat.age}</h4>
                    </div>
                    <div className='container1'>
                        <h1 className='h1_2'>My Profile</h1>
                        <form action="">
                            <label className='label '>Name: </label>
                            <input className='input' onChange={readInput} name="name" type="text" place="Name" />
                            <label className='label'>Last Name: </label>
                            <input className='input' onChange={readInput} name="lastName" type="text" place='Last Name' />
                            <label className='label'>Photo: </label>
                            <input className='input' onChange={readInput} name="photo" type="text" place='Photo' />
                            <label className='label'>Age: </label>
                            <input className='input' onChange={readInput} name="age" type="number" place="Age" />
                            <div>
                                <button className='boton a send1' onClick={(e) => ValidateInfo(e)}>Edit Profil</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={mostrar}>Reactions</button>
                {mostrar1 ? reactions.map((e) => <> (
                    <>
                        <div className='container_comments'>
                            {e.itineraryId.name} <img src={e.itineraryId.photo[0]} className="icons" alt="" /> {e.name} <img src={e.iconBack} alt="" className='icons' /><button value={e._id} onClick={eliminar}>X</button>
                        </div>
                    </>)
                </>) : (
                    <div className='divReaction'>
                        "NO FOUND REACTIONS"
                    </div>
                )}
            </div>
        </div >
    )
}
