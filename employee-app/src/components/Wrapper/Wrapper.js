import React from 'react';
import '../Wrapper/style.css';

function Wrapper({employees}){
return(
    <div className ="wrapper">
        {employees};
    </div>
)
}

export default Wrapper;