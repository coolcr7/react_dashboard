import React from 'react'
import { useEffect,useState } from 'react'
import ContactList from '../components/ContactList'
import { useAppSelector } from '../app/hooks/hooks'


export type DataProp=  {
  firstName: string;
  LastName: string;
  active: boolean;
  id:string
}[];

export default function Contact() {
    const data=useAppSelector(state=>state.reducer).value
    console.log(data)
    const [contactList, setContactList] = useState<typeof data>(data)
    const [filterQuery, setFilterQuery] = useState("")
  
    useEffect(() => {
      if (!filterQuery) {
        setContactList(data)
      } else {
        const queryString = filterQuery.toLowerCase()
        const filteredData = data?.filter(contact => {
          const fullName = `${contact.firstName} ${contact.LastName}`
  
          // if it's just one letter, return all names that start with it
          if (queryString.length === 1) {
            const firstLetter = fullName.charAt(0).toLowerCase()
            return firstLetter === queryString
          }
          else {
            return fullName.toLowerCase().includes(queryString)
          }
        })
        setContactList(filteredData)
      }
    }, [data, filterQuery])
  
    return (
      <div className={"bg-gray-100"}>
        <section>
          <form>
            <input
              type={"text"}
              placeholder={"type here to filter..."}
              onChange={event => setFilterQuery(event.target.value)}
              className={"ml-20 mt-6 rounded-md p-2"}
            />
          </form>
        </section>
        <section >
          {contactList?.length < 1 ? (
            filterQuery.length?<h1>No data matches your search</h1>:<h1>No Contacts Add New</h1>)
            :<></>}
        <ContactList contactList={contactList} />    
        </section>
      </div>
    )
}
