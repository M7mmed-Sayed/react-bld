import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavScrollExample from './components/NavBar/NavScrollExample'
import { useState, useEffect, useRef } from 'react'

import HomePage from './pages/HomePage'
import useFetch from './Hooks/useFetch'
import CoursePage from './pages/CoursePage'

const CourseData =
    'https://my-json-server.typicode.com/M7mmed-Sayed/myjsondata/python-courses'
function App() {
    const [searchInput, setSearchInput] = useState('')
    const [filteredResults, setFilteredResults] = useState([])
    const { data, isLoading, hasError } = useFetch(CourseData)
    const inputEl = useRef('')
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchValue !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item.title)
                    .join('')
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(data)
        }
    }

    return (
        <div className="App">
            <NavScrollExample searchFunction={searchItems} />
            <CoursePage/>
        </div>
    )
}

export default App
