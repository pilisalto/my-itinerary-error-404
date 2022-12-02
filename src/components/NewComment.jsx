import React from 'react'

export default function NewComment() {
  return (
    <>
    <div className={`flex  ${logged && id === user ?  'bg-user' : 'coment'}`}>
        <img className='img ' src={photo} alt='profile'  />
        <div className='w-100'>
            <article>
            <h4>{name}</h4>
            <p className='p-text'>{coments}</p>
            </article>
            {
                logged && id === user? 
                <>
                <button className='boton' value={_id}   onClick={()=>setPush(!push)} ref={editRef}>Edit</button>
                <button className='boton' value={_id} onClick={erase}>Delete</button>
                </> : ''
            }
        
        {push ? (<div className='flex j-evenly'>
        <input type='text' className='input-com' name='coment' onChange={coment} ref={inputRef} placeholder='your comment...' />
        <button className='boton-1'  onClick={edit}>Edit</button>
</div>):''}
    </div>
    </div>
  )
}
