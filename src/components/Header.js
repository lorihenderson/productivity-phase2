import React, { useState } from 'react';
import NavBar from './NavBar'

function Header() {

    const [hello, setHello] = useState("")

    function sayHello() {
        setHello=hello
    }
    console.log(sayHello)
    return (
        <><div>
        <button>Hello</button>
        <NavBar setHello={setHello}/>
        </div></>

    )


}

export default Header;