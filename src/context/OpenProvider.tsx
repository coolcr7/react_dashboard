import React,{useContext, useState,ReactNode} from 'react'


export interface OpenProps {
    open: boolean,
    openSidebar:()=>void
}  
const ContactContext=React.createContext<OpenProps|null>(null);

export function useContact():OpenProps|null{
    return useContext(ContactContext)
}
export function ContactProvider(props:{children:ReactNode}) {
    const [open, setOpen] = useState(true);
    const openSidebar = () => {
        setOpen(open => !open)
      }
  const Myprops:OpenProps={
    open:open,
    openSidebar:openSidebar
  }
  
  return (
    <div>
        <ContactContext.Provider value={Myprops} >
            {props.children}
        </ContactContext.Provider>
      
    </div>
  )
}