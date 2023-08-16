import React from 'react'
import './SearchStyles.css'
// import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'
// import '../Traintable'

function Search() {
    let navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate('/traintable');
    }
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>BOOK YOUR TICKET HERE!</h2>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <h3>Click there!👇</h3>
                                <p>Search and Availability!!!</p>
                                <button onClick={handleSubmit}>Show</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
