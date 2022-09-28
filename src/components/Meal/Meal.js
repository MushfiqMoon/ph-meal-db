import React from 'react'

import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const Meal = ({ meal, addHandel }) => {

    // console.log(meal)

    const { strMealThumb, strMeal } = meal
    return (
        <Card className="mb-4">
            <LazyLoadImage
                alt={strMeal}
                src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button onClick={() => addHandel(meal)} variant="dark text-white"><FontAwesomeIcon icon={faSquarePlus} /> Add Item</Button>
            </Card.Body>
        </Card>
    )
}
