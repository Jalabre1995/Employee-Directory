///Importing to let react work/////
import React from 'react'
import "../DataBody/style.css";

////Create a DataBody fucntion to see what we want specifcally in the data///
function DataBody({ users }) {
    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-")
        return formattedDate;
    }


    ///Retruning the table of employees being generated from the API into HTML format///
    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                ///using users.map to say these are the elements that are going to be returned when they login, the name,phone, email, and DOB////
                users.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image" className="align-middle">
                                <img
                                    src={picture.medium}
                                    alt={"profile image for " + name.first + " " + name.last}
                                    className="img-responsive"
                                />
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone" className="align-middle">
                                {phone}
                            </td>
                            <td data-th="Email" className="align-middle">
                                <a href={"mailto:" + email} target="__blank">
                                    {email}
                                </a>
                            </td>
                            <td data-th="DOB" className="align-middle">
                                {formatDate(dob.date)}
                            </td>
                        </tr>
                    );
                })
            ) : (
                    <></>

                )}
        </tbody>
    );

}
export default DataBody;

