import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';


function Education(props) {
    return (
        <ol>
            {props.educationList.length > 0
                ? props
                    .educationList
                    .map(ed => {
                        return (
                            <li>
                                <Form.Group className="mb-3">
                                    <Form.Label>University</Form.Label>
                                    <Form.Control
                                        name='university'
                                        type="text"
                                        placeholder="Enter full name as per your passport"
                                        defaultValue={ed.university}
                                        disabled/>
                                    <br></br>
                                    <Form.Label>Degree</Form.Label>
                                    <Form.Control
                                        name='degree'
                                        type="text"
                                        placeholder="Enter full name as per your passport"
                                        defaultValue={ed.degree}
                                        disabled/>
                                    <br></br>
                                    <Form.Label>GPA</Form.Label>
                                    <Form.Control
                                        name='gpa'
                                        type="text"
                                        placeholder="Enter full name as per your passport"
                                        defaultValue={ed.gpa}
                                        disabled/>
                                    <br></br>
                                    <Form.Label>Specialization</Form.Label>
                                    <Form.Control
                                        name='specialization'
                                        type="text"
                                        placeholder="Enter full name as per your passport"
                                        defaultValue={ed.specialization}
                                        disabled/>
                                    <br></br>
                                </Form.Group>
                            </li>
                        )
                    })
                : null
}
        </ol>
    );
}

const mapStateToProps = state => {
    return {auth: state.authReducer}
}

export default connect(mapStateToProps, null)(Education);