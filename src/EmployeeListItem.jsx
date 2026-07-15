import React from "react";
export default function EmployeeListItem({name, title}) {
    return (
        <div className="employee list item component">
            <div className="avatar place holder"></div>
            <div className="textdetails">
                <div className="name text">{name}</div>
                <div className="title text">{title}</div>
            </div>

        </div>
    );
}