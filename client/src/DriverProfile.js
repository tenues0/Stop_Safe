import React, {useState} from 'react'
import Header from "./components/Header"
import LeftNavbar from "./components/LeftNavbar"
import Main from "./components/Main"
import Account from "./components/Account" 
import Contact from "./components/Contact"
import Update from "./components/Update"




export default function DriverProfile() {
  const [page, setPage] = useState(< Account />)
  return (
    <div>
      <Header/>
      <LeftNavbar setPage={setPage} Account={Account} Contact={Contact} Update={Update}/>
      <Main/>
      {page}
      {/* <Account/>
      <Contact/>
      <Update/> */}
    </div>
  )
}
