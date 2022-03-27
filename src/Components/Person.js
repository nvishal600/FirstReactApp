import React, { Component } from "react";
import PropTypes from 'prop-types';


export class Person extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        // this.state = {
        //     name: "john",
        //     age: 34
        // };
    }
    // nameChangeHandler() {
    //     this.setState({name: "ajay", age: 50}, () => {
    //         alert("done");
    //     });
    // }
    render() {
        return(
            <div>
                <h3>Name : {this.props.name} age : {this.props.age}</h3>
                <br/>
                {/* <button onClick={this.nameChangeHandler.bind(this)}>click me</button> */}
            </div>
        );
    }
}
console.log(PropTypes);
Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired};

Person.defaultProps = {name: "abcsss",
                        age: 100};