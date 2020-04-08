import React from 'react';
import DataBody from '../DataBody';
import '../DataTable/style.css';

////Creating a DataTable function to map out the headings ///

function DataTable({headings, users, handleSort}){
    ///Going to retun a table that is going to sort out the users name in alphebetical order///
    return(
        <div className="datatable">
            <table 
            id= 'table'
            className= 'headingTable'>
                <thread>
                    <tr>
                        {headings.map(({name, width})=> {
                            return (
                                <th
                                className='col'
                                key= {name}
                                style={{width}}
                                onClick={() =>{
                                    handleSort(name.toLowerCase());
                                }}
                                >
                                {name}
                                <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thread>
                <DataBody users={users}/>
            </table>
        </div>
    )
}

export default DataTable