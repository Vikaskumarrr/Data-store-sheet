// /**
//  *           employee ={ 
// *           name ,
//             role,
//             salary
//             phoneNumber,
//             email,
//             comany name
// *            }
//  */



const employees = [ 
    { 
        name: "Vikas",
        role: "SDE",
        salary: 100,
        phoneNumber: "3789645231",
        email: "vikas@gmail.com",
        companyName: "Meta"

    },
{ 
        name: "Rahul",
        role: "QA",
        salary: 90,
        phoneNumber: "748232164",
        email: "Rahul@gmail.com",
        companyName: "Google"
         
}
]

const tbody = document.getElementById("tbody");

let employeeId = 1000;

function addEmployee(employeeObj){ 
    // add a new employee into the table

    const tr = document.createElement("tr");
    // <tr></tr>
    const employeeIdCell = document.createElement("td");
    employeeIdCell.innerText = employeeId++;
    // <td>1001</tb>
    tr.appendChild(employeeIdCell);

    for(let key in employeeObj){ 
        const cell = document.createElement("td");
        cell.innerText = employeeObj[key];  
        // key  = " companyName"
        // employeeObj ["companyName"]
        tr.appendChild(cell);
    }

    const actionsCell = document.createElement("td");
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    
    const editButton = document.createElement("button")
    editButton.innerText = "Edit";
    
    deleteButton.addEventListener("click", deleteRecord)
    editButton.addEventListener("click", editRecord)

    actionsCell.append(deleteButton, editButton);

    tr.appendChild(actionsCell);

    tbody.appendChild(tr);

}

employees.forEach((emp)=>{ 
    addEmployee(emp)
})

// Handling popup
const popup = document.querySelector(".popup");

function togglePopup(){ 
    if (popup.style.display === "none"){
        popup.style.display = "flex";
    }
    else { 
        popup.style.display = "none";
    }
}


// Handling Form submission

const form = document.getElementById("form");

form.addEventListener("submit", (e)=>{ 
    e.preventDefault();
    // const data= new FormData(e.target);
    // const newData = data.get("Salary")
    // console.log("data", newData)
        let employee = { 
            name: form.name.value,
            role: form.role.value,
            salary: form.Salary.value,
            phoneNumber: form.phoneNumber.value,
            email: form.email.value,
            companyName: form.CompanyName.value

        }
        console.log(employee);
        addEmployee(employee);
        form.reset();
        togglePopup();
})


function deleteRecord (e){ 
        // event listener callback for the delete button
      let tr =   e.target.parentNode.parentNode;
        tr.remove();

    }

function editRecord(e){ 
    const row = e.target.parentNode.parentNode;
    employees.values();
}


