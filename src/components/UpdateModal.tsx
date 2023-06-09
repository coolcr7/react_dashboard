import React, { Dispatch, SetStateAction, useState } from 'react'
import type { DataProp } from '../pages/Contact'
import { GoX } from "react-icons/go";
import { useAppDispatch } from '../app/hooks/hooks';
import { update, deleteUpdate } from '../utils /dataSlice';
import generateUUID from '../utils /idGenrator';

export default function UpdateModal(props: { values: { updateModal: true, setUpdateModal: Dispatch<SetStateAction<boolean>>, updateProps: DataProp[0] | undefined } }) {
    const { updateModal, setUpdateModal, updateProps } = props.values
    const [firstName, setFirstName] = useState<string>(updateProps?.firstName ?? "")
    const [lastName, setLastName] = useState<string>(updateProps?.LastName ?? "")
    const [isActive, setIsActive] = useState<boolean>(updateProps?.active ?? false)
    const dispatch = useAppDispatch()
    const handleAddContact = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const action = {
            firstName: firstName,
            LastName: lastName,
            active: isActive,
            id: updateProps?.id ?? generateUUID()
        }
        dispatch(update(action))
        setUpdateModal(false)
    }
    const handleDelete = () => {
        dispatch(deleteUpdate({ id: updateProps?.id ?? "" }))
        setUpdateModal(false)

    }
    return (
        <div>
            <div onClick={() => setUpdateModal(false)} className={`fixed inset-0 flex justify-center items-center transition-colors
         ${updateModal ? "visible bg-black/20" : "invisible"}`}>
                <div onClick={(e) => { e.stopPropagation() }}
                    className={`bg-white roundex-d-xl shadow p-6 transition-all ${updateModal ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                         h-[60vh] w-[40vw]`}>
                    <div className='w-[100%]'>
                        <GoX onClick={() => { setUpdateModal(false) }} className='absolute right-4'></GoX>
                    </div>
                    {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" /> */}
                    <div className="mb-4 mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="FirstName">
                            First Name
                        </label>
                        <input value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-lg focus:shadow-slate-900" id="username" type="text" placeholder="FirstName" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="LastName">
                            LastName
                        </label>
                        <input value={lastName} onChange={(e) => { setLastName(e.target.value) }} className="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight  focus:shadow-lg focus:shadow-slate-900" id="LastName" type="text" placeholder="LastName" />

                    </div>
                    <div className="mb-8 block min-h-[1.5rem] pl-[1.5rem] mt-8">
                        <label className='p-1 m-1' >
                            <input
                                className='mr-4'
                                type="checkbox"
                                checked={isActive}
                                onChange={() => (setIsActive(!isActive))}
                            />
                            Active
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={handleAddContact} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Update Contact
                        </button>
                        <button onClick={handleDelete}>
                            <img src='./delete.png' className='h-11'></img>
                        </button>


                    </div>
                </div>
            </div>

        </div>
    )
}
