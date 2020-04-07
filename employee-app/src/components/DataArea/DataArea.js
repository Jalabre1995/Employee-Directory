///To make sure the DataArea is rendering, we are taking imporing th eNavbar, API, and the Datatable from the components folder///
import React, { Component } from 'react';
import DataTable from "../DataTable";
import NavBar from "../Navbar";
import API from "../utils/API";
import "../DataArea/style.css";
////Extending the DataArea as a clas from the component folder////
export default class DataArea extends Component{
 ////Created a constructor to specify for the class for the state what we want to retireve. In this case its the image, name, email, phone, DOB////
    constructor() {
        super();
        this.state = {
            users: [{}],
            order: "descend",
            filteredUsers:[{}],
            heading: [
                {name: "Image", width: "20%"},
                {name: "Name", width: "20%"},
                {name: "Phone", width: "20%"},
                {name: "Email", width: "20%"},
                {name: "DOB", width: "20%"},
            ],
            handleSort: heading => {
                if( this.state.order === 'descend') {
                    this.setState({
                        order: "ascend"
                    })
                } else {
                    this.setState({
                        order: "descend"
                    })
                }
                ////If there is information missign from the account  we are going to use
                /// an conditiional to the heading as 1 oe -1 if there is an undefined////

                const compareValues = (a,b) => {
                    if (this.state.order === "ascend"){
                    ///Keep track of the files that are missing////
                    if (a[heading] === undefined) {
                        return 1;
                    }else if(b[heading] === undefined) {
                        return -1;
                    }else if (heading === "name") {
                    return a[heading].first.localCompare(b[heading].first);
                    }else {
                        return a[heading] -  b[heading];
                    }
                    }else {
                        if (a[heading]=== undefined) {
                            return 1;
                        }else if (b[heading] === undefined){
                            return -1;
                        }
                        else if (heading === "name") {
                            return b[heading].first.localCompare(a[heading].first);
                        }else { 
                            return b[heading] -a[heading];
                        }
                        }
                    }
                    ///Filtering the users in the database////
                    const sortedUsers = this.state.filteredUsers.sort(compareValues);
                    this.setState({filteredUsers:sortedUsers});
                },
                ////Create a handleSearchChange Event to handle the filtr a list that was sorted or not sorted///
                handleSearchChange: event => {
                    console.log(event.target.value);
                    const filter = event.target.value;
                    const filteredList = this.state.users.filter(item => {
                        ////Merge the value and the object together////
                        let values = Object.values(item)
                        .join('')
                        .toLowerCase();
                        return values.indexOf(filter.toLowerCase()) !== -1;
                    });
                    this.state({filteredUsers: filteredList});

                }

            };
        }
        ////Calling Axios to retireve the data/////
        componentDidMount() {
            API.getUsers().then(results => {
                this.setState({
                    users:results.data.results,
                    filteredUsers:results.data.results
                });
            });
        }
        render() {
            return (
                <>
                <NavBar handleSearchChange={this.state.handleSearchChange} />
                <div className="data-area">
                    <DataTable
                    headings={this.state.headings}
                    users={this.state.filteredUsers}
                    handleSort={this.state.handleSort}
                    />
                </div>
                </>
            );
        }
        
    }
