// fill in javascript code here

document.querySelector("form").addEventListener("submit",formSubmit);

function formSubmit(event){
    event.preventDefault();
    let p_Name = document.querySelector("#name").value;
    let p_Id = document.querySelector("#employeeID").value;
    let p_Department = document.querySelector("#department").value;
    let p_Exp = document.querySelector("#exp").value;
    let p_Email = document.querySelector("#email").value;
    let p_Number = document.querySelector("#mbl").value;

    let tRow = document.createElement("tr");
    // 1st col
    let td1 = document.createElement("td");
    td1.innerText=p_Name;

    // 2nd col
    let td2 = document.createElement("td");
    td2.innerText=p_Id;

    // 3rd col
    let td3 = document.createElement("td");
    td3.innerText=p_Department;

    // 4th col
    let td4 = document.createElement("td");
    td4.innerText=p_Exp;

    // 5th col
    let td5 = document.createElement("td");
    td5.innerText=p_Email;

    // 6th col
    let td6 = document.createElement("td");
    td6.innerText=p_Number;

    // 7th col
    let td7 = document.createElement("td");
    if(Number(p_Exp)>5){
        td7.innerText="Senior"
    }else if(Number(p_Exp)>=2 && Number(p_Exp)<=5){
        td7.innerText="Junior"
    }else if(Number(p_Exp)<2){
        td7.innerText="Fresher"
    }

    // 8th col
    let td8 = document.createElement("td");
    td8.innerText="Delete";
    td8.style.backgroundColor="red";
    td8.addEventListener("click",deleteTodo);

    tRow.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tRow);

}

function deleteTodo(event){
    console.log(event.target.parentNode);
    event.target.parentNode.remove()
}