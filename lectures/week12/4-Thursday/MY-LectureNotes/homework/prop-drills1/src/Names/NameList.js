import React from 'react'
import Name from './Name'

const NameList = () => {
    const addresses = [
        { first: 'Bruce', last: 'Banner' },
        { first: 'Carol', last: 'Danvers' },
        { first: 'Thor', last: 'Odinsson' },
        { first: 'Natasha', last: 'Romanov' },
        { first: 'Wanda', last: 'Maximoff' },
        { first: 'Tony', last: 'Stark' },
        { first: 'Sam', last: 'Wilson' },
      ];
  return (
    <>
      {addresses.map((address) => (
        <Name first={address.first} last={address.last} />
      ))}
    </>
  )
}

export default NameList