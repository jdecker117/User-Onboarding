import React from 'react'

export default function User({deets}){
        if (!deets) {
          return <h3>Fetching User deets...</h3>
        }
      
        return (
          <div className='friend container'>
            <h2>{deets.first_name} {deets.last_name}</h2>
            <p>Email: {deets.email}</p>      
          </div>
        )
      }
