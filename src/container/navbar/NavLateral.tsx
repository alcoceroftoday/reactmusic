import CSS from "csstype";
import React from 'react';
import {
    NavLink
  } from "react-router-dom";

let Linksa:string[]=["Browser","Artists","Albums","Songs"];
const contentLaterals: CSS.Properties = {
    width: '300px',
    height: '450px',
    float: 'left'
  };

  const NavLateral = () =>(
    <div style={contentLaterals}> 
        <div className="col s12">
            <div className="collection">
                    <AllLink Links={Linksa} />
            </div>
        </div>
    </div>     
)

const AllLink =(props:{Links:string[]}) =>{
    return (<>
    {props.Links.map(value => {
        return <NavLink key={value.toLowerCase()} className="collection-item" to={`/${value.toLowerCase()}`} >{value}</NavLink>
    })}
    </>)
}  

export default NavLateral;