import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Container from "./style"

export default function ComponentB() {

    const [data, setData] = useState(false)

    return (
        <Container>
            <button onClick={() => setData(!data)} >Change Data</button>
            <h1>You data: {data ? "true" : "false"}</h1>
            <Link to='/C'>Component C</Link>
        </Container>
    )
}