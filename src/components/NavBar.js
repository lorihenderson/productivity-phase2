import React from 'react';

function NavBar( { setHello }) {
    return (
        <>
        <div><button>Hello</button>
            {setHello}
        </div>
        </>
    )

}

export default NavBar;


