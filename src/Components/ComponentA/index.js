import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Container from "./style"

export default function ComponentA() {

    const [data, setData] = useState(false)

    return (
        <Container>
            <button onClick={() => setData(!data)} >Change Data</button>
            <h1>You data: {data ? "true" : "false"}</h1>
            <Link to='/B'>Component B</Link>
        </Container>
    )
}