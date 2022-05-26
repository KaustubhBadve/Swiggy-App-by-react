import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = (props) => {

const navbaroptions=[{
    iconname:"person_outline",
    label:"Sign In"
},
{
    iconname:"shopping_bag",
    label:"Cart"
},
{
    iconname:"support",
    label:"Help"
},
{
    iconname:"search",
    label:"Search"
},
]

  return (
    <section className="navbar">
        <div className="container">
            <img className="logo" src={logo} />
            <div className="location">
                <span className="city">{props.city}</span>
                <span className="state">{props.state} {props.country}</span>
            </div>
            <div className="navbar-options">
                {
                    navbaroptions.map((navbaroption)=>(
                        <div  className="navbar-option">
                        <span className="material-icons"> {navbaroption.iconname}</span>{navbaroption.label}
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Navbar