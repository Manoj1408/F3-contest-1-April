let form = document.getElementById('employee-form');
let nameInput = document.getElementById('name');
let professionInput = document.getElementById("profession");
let ageInput = document.getElementById("age");
let myDiv = document.querySelector(".allEmployees");
let statusDiv = document.querySelector(".status");

let employees = [];
if (employees.length === 0) {
  myDiv.innerHTML += `<div><p>You have 0 Employees</p></div>`;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log("submit");
    
    if((nameInput.value == '') || (professionInput.value == '') || (ageInput.value == '' )){
        statusDiv.innerHTML = `<div>
                <p style="color: red;">Error:Please Make sure All the fields are filled before adding in an employee</p>
            </div>`;
        setTimeout(() => {
               statusDiv.innerHTML = "";
             }, 2000);
    }
    else{
        statusDiv.innerHTML = `<div>
                <p style="color: green;">Success:Employee Added</p>
            </div>`;
            setTimeout((() => {
                statusDiv.innerHTML='';
            }),2000)
            saveData();
    }
    
});

function saveData() {
    let employee = {
        Id : employees.length+1,
        Name : nameInput.value,
        profession : professionInput.value,
        age : ageInput.value
    }
    // console.log(employee);
    employees.push(employee);
    showData();
    form.reset();
};

function showData(){
    console.log(employees);
    // let myDiv = document.getElementByClassName("allEmployees");
    
    myDiv.innerHTML = '';
    if (employees.length === 0) {
      myDiv.innerHTML += `<div><p>You have 0 Employees</p></div>`;
    }
    employees.map((employe,index) => {
        myDiv.innerHTML += `<div style="display: flex;flex-direction: row; margin: 5px 0px;">
                    <div class="eeach">
                        <p>${index + 1}</p>
                        <p>Name: ${employe.Name}</p>
                        <p>Profession : ${employe.profession}</p>
                        <p>Age : ${employe.age}</p>
                    </div>
                    <button class="delete-btn" onclick="deleteuser(${employe.Id})">Delete User</button>
                </div>`;
    })
}

function deleteuser(id) {
    console.log("first")
    console.log(id)
    employees.forEach((employe,index) => {
        if(employe.Id === id){
            employees.splice(index, 1);
        }
    });
    showData();
}