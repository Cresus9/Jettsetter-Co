import React,{ useEffect,useState } from 'react'
import JetCard from './JetCard'
import './JetListings.css'

export default function JetListings({jets, bookme}) {
  const [listings, setListings]= useState([])

useEffect(()=>{
    fetch (`${process.env.REACT_APP_BACKEND_URL}/jets`)
    .then((res) => {
      if (res.ok) {
        res.json().then((listings) => {
          setListings(listings);
          jets([...listings])
        
        });
      } else {
        res.json().then((errors) => console.log(errors));
      }
    })
}, []);

const getList = listings.map((listing)=>
<JetCard key={listing.id} jet={listing} bookme={bookme}/>)
console.log(listings)
console.log(process.env.REACT_APP_BACKEND_URL);





  return (
    <>
    <div className='all'>
      <div className='jet-top'>

      </div>
      <div className='jet_div'>
        {getList}
      </div>
    </div>
    </>
  )
}
