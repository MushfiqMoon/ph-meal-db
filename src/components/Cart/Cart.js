import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export const Cart = ({ cart }) => {

  const { strMeal, strCategory } = cart

  return (

      <ListGroup.Item>
        <h4>{strMeal}</h4>
        <p>{strCategory}</p>
      </ListGroup.Item>

  )
}
