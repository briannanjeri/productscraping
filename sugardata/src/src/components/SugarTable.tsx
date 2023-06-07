import React from 'react'
import { Sugar } from '../actions/type'

interface SugarTableProps{
  sugars:Sugar[]
}

const SugarTable = ({sugars}:SugarTableProps) => {
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Country</th>
        </thead>

        <tbody>
        {sugars.map((sugar,index)=>(
          <tr key={index}>
            <td>{sugar.name}</td>
            <td>{sugar.price}</td>
            <td>{sugar.qty}</td>
            <td>{sugar.country}</td>

          </tr>
        ))}
        </tbody>


      </table>
    </div>
  )
}

export default SugarTable