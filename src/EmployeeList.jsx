import React from "react";
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList() {
    const sampleEmployees = [
        {name: 'James King', title: 'President and CEO'},
        {name: 'Julie Taylor', title: 'VP of Marketing'},
        {name: 'Eugene Lee', title: 'CFO'},
        {name: 'John Williams', title:'VP of Engineering'},
        {name: 'Ray Moore', title: 'VP of Sales'},
        {name: 'paul Jones', title: 'QA Manager'}
    ];

    return (
        <div className="employee list component">
          {sampleEmployees.map((employee, idx) => (
            <EmployeeListItem 
            key={idx}
            name={employee.name}
            title={employee.title}
            />
          ))} 
        </div>
    );
}