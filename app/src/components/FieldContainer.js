import React from 'react'
import './FieldContainer.css'
import Card from './Card'

function Cards(props) {
    const genrateCoursesCard = () => {
        /*copy the courses form props.data
        map to courses an set id of course as key 
        then call each item from courses to create small card
        */
        let courses = props.data
        let view = courses.map((course) => {
            return <Card data={course} key={course.id}></Card>
        })
        return view
    }
    // assign header data to FieldContainer then call genrateCoursesCard
    return (
        <div className="filed-box">
            <div className="course-header">
                <div className="title">
                    <h3>{props.header.title}</h3>
                </div>
                <div className="description">
                    <p>{props.header.description}</p>
                </div>
                <button className="explore-btn"> Explor Python</button>
            </div>
            <div className="cards-parent">{genrateCoursesCard()}</div>
        </div>
    )
}

export default Cards
