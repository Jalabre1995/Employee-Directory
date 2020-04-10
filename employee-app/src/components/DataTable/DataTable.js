import React from 'react';
import '../DataTable/style.css';

////Creating a DataTable function to map out the headings ///

function DataTable(props){
    ///Going to retun a table that is going to sort out the users name in alphebetical order///
    return(
        <table className="dataTable">
            <thead>
                <tr>
                    <th></th>
                    <th onClick={props.sortByName}>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody className= "">
                {props.results.map(result => (
                    <tr className ="table" key = {result.login.uuid}>

                        <td>
                            <img className="" src={result.picture.medium} alt="" />
                        </td>
                        <td>{result.name.first + "" + result.name.last} </td>
                        <td> {result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a> </td>

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DataTable