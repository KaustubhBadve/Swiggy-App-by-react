import React from 'react'

const Filters = ({filter,updateFilter,currentFilterBy}) => {
  return (
    <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options">
            {Object.entries(filter).map(([key,value])=>{
                console.log(key,value)
                return(
                    <div key={value} onClick={()=>updateFilter(key)} className="restaurant-option"> {value}</div>
                    )   
                })}
                </div>
                </div>
  )
}

export default Filters