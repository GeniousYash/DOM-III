// fill in javascript code here
let form = document.querySelector("form");
form.addEventListener("submit",formSubmit);


function formSubmit(event){
    event.preventDefault();
    let p_name = document.querySelector("#name").value;
    let p_employeeID = document.querySelector("#docID").value;
    let p_department = document.querySelector("#dept").value;
    let p_exp = document.querySelector("#exp").value;
    let p_email = document.getElementById("email").value;
    let p_mbl = document.querySelector("#mbl").value;

    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText = p_name;

    let employeeID = document.createElement("td");
    employeeID.innerText = p_employeeID;

    let department = document.createElement("td");
    department.innerText = p_department;

    let exp = document.createElement("td");
    exp.innerText = p_exp;

    let email = document.createElement("td");
    email.innerText = p_email;

    let mbl = document.createElement("td");
    mbl.innerText = p_mbl;

    let role = document.createElement("td");
    if(p_exp>5){
        role.innerText = "Senior";
    }else if(p_exp>=2){
        role.innerText = "Junior";
    }else{
        role.innerText = "Fresher";
    }

    let deleteElement = document.createElement("td");
    deleteElement.innerText = "Delete";
    deleteElement.style.backgroundColor="red"
    deleteElement.addEventListener("click",function(e){
        e.target.parentNode.remove();
    });
    
    tr.append(name,employeeID,department,exp,email,mbl,role,deleteElement);
    document.querySelector("tbody").append(tr);
}


