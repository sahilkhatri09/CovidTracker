import React from 'react'
import './Country.css'
export default function Country(props) {
  return (
    <tr>
      <td>{props.country}</td>
      <td>{props.tests}</td>
      <td>{props.total}</td>
      <td>{props.recovered}</td>
      <td>{props.active}</td>
      <td>{props.death}</td>
    </tr>
  )
}
