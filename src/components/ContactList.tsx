import React, { useEffect, useState } from 'react'
import type { DataProp } from '../pages/Contact'
import Modal from './Modal'
import UpdateModal from './UpdateModal'

export default function ContactList({contactList}:{contactList:DataProp}) {
  const [modal,setModal]=useState<boolean>(false)
  const [updateModal,setUpdateModal]=useState<boolean>(false)
  const [updateProps,setProps]=useState<DataProp[0]|undefined>()
  const handleUpdate=(contact:DataProp[0])=>{
    console.log(contact,"updateHandler")
    setProps(contact)
    setUpdateModal(true)
  }


  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-20">
      <>
      
      {contactList?.map((contact) => (
        <button key={contact.id} onClick={()=>{handleUpdate(contact)}}>

        <figure className="bg-white text-white h-80 rounded-lg shadow-md" >
          <img alt="user" className="w-32 h-32 rounded-full mx-auto mt-7" src="./unknown.jpeg" />
          <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {contact.firstName} {contact.LastName}
            </p>
            {contact.active?<p className='bg-green-800'>Active</p>:
            <p className='bg-red-700'> Inactive</p>}
          </figcaption>
        </figure>
        </button>
      ))}

       {!modal? <button onClick={()=>setModal(true)}>

      <img src="./addcontact.jpeg" className='fixed bottom-[10vh] w-24 z-0 h-24 rounded-full left-[50%] right-[50%]'></img>
      </button>:<Modal values={{modal,setModal}}/>}
      {updateModal?<UpdateModal values={{updateModal,setUpdateModal,updateProps}}/> : <></>}
    </>
    </div>
  )
}
