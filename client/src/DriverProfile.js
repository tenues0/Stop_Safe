import React, {useState} from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import LeftNavbar from "./components/LeftNavbar"
import Account from "./components/Account" 
import Contact from "./components/Contact"
import Update from "./components/Update"
import "./index.css";





export default function DriverProfile() {
  const [page, setPage] = useState(< Account />)
  return (
    <div>
      <Header/>
      <div className="Content-Container">
      <LeftNavbar setPage={setPage} Account={Account} Contact={Contact} Update={Update}/>
      {page}
      </div>
      <Footer/>
      {/* <Account/>
      <Contact/>
      <Update/> */}
    </div>
  )
}
