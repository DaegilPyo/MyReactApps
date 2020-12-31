import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }
    // clickCourse = (id, title) => {
    //     this.props.history.push(this.props.match.url + '/' + id + '/' + title);
    // }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <Link to={{
                                pathname: this.props.match.url + '/course/' + course.id,
                                search: '?title=' + course.title,
                            }} key={course.id} >
                                <article
                                    //  onClick={() => this.clickCourse(course.id, course.title)
                                    // }
                                    className="Course">{course.title}</article></Link>;
                        })
                    }
                </section>
                <Route path={"/courses/course/:id"} component={Course} ></Route>

            </div>
        );
    }
}

export default Courses;