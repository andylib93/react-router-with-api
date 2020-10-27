import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    useEffect(() => fetchData(), [])

    const [data, setData] = useState([])
    
    const fetchData = async () => {
        const data = await fetch('http://localhost:3333/url/').catch(err => console.log(err))
        const items = await data.json()
        setData(items)
    }

    return (
        <>
            <h1>Home</h1>
            {data.map(item => 
                <p key={item.id}>
                    <Link to={`/${item.name}`}>
                        {item.name}
                    </Link>
                </p>
            )}
        </>
    )
}

export default Home
