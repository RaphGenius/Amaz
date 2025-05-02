import React from 'react'
import { Link } from 'react-router'

function home() {
    return (
        <div>
            <Link to={"/products"} >Boutique</Link>
        </div>
    )
}

export default home