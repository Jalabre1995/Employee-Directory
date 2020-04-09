import React, {Component}from 'React'
import DataArea from "../DataArea";

///// extend the main class and render the Data from the DataArea folder////

export default class Main extends Component {
    render() {
        return (
            <>
            <DataArea />
            </>
        )
    }
}