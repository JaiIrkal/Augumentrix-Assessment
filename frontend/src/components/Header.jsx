import React from 'react'
import { NavLink } from 'react-router-dom'

function Header({prompt}) {
    return (
        <div>
            <header className="App-header">
                <div>
                    <h1 className="title">BLOGGIT</h1>
                </div>
                {
                    prompt === "create" ?
                        <div className="button-div">
                            <NavLink to='/addpost'>Create Post</NavLink>
                        </div>
                    : <div className="button-div">
                    <NavLink to='/'>Home</NavLink>
                </div>
        }
            </header>
        </div>
    )
}

export default Header
