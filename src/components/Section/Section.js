import React, { useState, useEffect } from 'react'
import { Container, Row, Col, ListGroup, InputGroup, Form, Button } from 'react-bootstrap';
import { Cart } from '../Cart/Cart'
import { Meal } from '../Meal/Meal';

import './Section.css'

export const Section = () => {

    const [meals, setMeals] = useState([])
    const [carts, setCarts] = useState([])
    const [search, setSearch] = useState('b')


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data?.meals))

    }, [search])

    const addHandel = item => {

        let newCart = [...carts, item]
        setCarts(newCart)

        console.log(carts)


    }

    return (
        <Container>
            <Row>
                <Col>
                    <InputGroup className="my-3">
                        <Form.Control
                            placeholder="search"
                            aria-label="search"
                            aria-describedby="search"
                            onChange={(e)=> setSearch(e.target.value)}
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row className='mt-3'>
                        {
                            meals.map((meal, index) =>
                                <Col key={index} md={4}>
                                    <Meal meal={meal} addHandel={addHandel} />
                                </Col>
                            )
                        }
                    </Row>

                </Col>
                <Col md={3}>

                    <ListGroup className='my-3 added-list'>
                        {
                            carts.map((cart, index) =>

                                <Cart key={index} cart={cart} />
                            )
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}
