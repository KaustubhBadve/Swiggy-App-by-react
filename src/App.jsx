
import './App.css';
import Navbar from './components/Navbar.jsx'
import Offers from './components/Offers'
import Filters from './components/Filters'
import Restaurant from './components/Restaurant'
import navbarlocationinfo from './data/userInfo.json'
import offers from './data/offers.json'
import restaurant from './data/restaurant.json'
import React from 'react';

const filters={

  1:"Cost High to Low",
  2:"Cost Low to High",
  3:"Ratings",
  4:"Cash Only",
  5:"Card Only"

};

function App() {

let [filterBy,setFilterBy]=React.useState("")

let [data,setData]=React.useState(restaurant)

const [ratingflag, setratingflag] = React.useState(false)
const updateFilter=(newfilter)=>{
     switch(newfilter){
       case "1":{
         setFilterBy(1)
         data.sort((a,b) => b.costfortwo - a.costfortwo)
         setData([...data])

         break;
       }
       case "2":{
        setFilterBy(2)
        data.sort((a,b) => a.costfortwo - b.costfortwo)
        setData([...data])
        
        break;
      }
      case "3":{
        
        setFilterBy(3)
        
          {ratingflag ? data.sort((a,b) => a.rating - b.rating) : data.sort((a,b) => b.rating - a.rating) }
          setData([...data])
          setratingflag(!ratingflag)  
        break;
      }
      case "4":{
        
        setFilterBy(4)
        data.filter(data=>data.Cash_Payment!==true)
          setData([...data])
        break;
      }
       default:{
         setData(restaurant)
         break;
       }
     }
}

  return (
    <div>
     <Navbar {...navbarlocationinfo.location}/>
     <Offers offers={offers}/>
     <section className="near-you">
     <Filters filter={filters} currentFilterBy={filterBy} updateFilter={updateFilter}/>
     <Restaurant restaurant={data}/>
     </section>
    </div>
  );
}

export default App;
