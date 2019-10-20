//saving data locally 



var data = [];

document.getElementById("btnInsert").addEventListener("click", function() { 
    var firstNameVal = document.getElementById('firstName').value; 
    var surnameVal = document.getElementById('surname').value;
    if(firstNameVal && surname){ 
        let newSubmission = {
            firstName: firstNameVal,
            surname: surnameVal
        }
        data.push(newSubmission);
        createTableRoll();  
    }
}); 

function createTableRoll () {
   
       
    var table = document.getElementById('displayInfo');
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    
    cell1.innerHTML = data.length; 
    cell2.innerHTML = data[data.length - 1].firstName;
    cell3.innerHTML = data[data.length -1].surname;
    cell4.innerHTML = '<button id="btnEdit" onclick="editSubmission(' + (data.length -1) + ') " class="wefw">Edit</button>';
    cell5.innerHTML = '<button id="btnDelete" onclick="deleteSubmission(' + (data.length - 1) + ') " class="weregegfw">Delete</button>'; 
    cell6.innerHTML = '<button id="btnSave" style="display:none;">Save</button> <button onclick="cancelAction()" id="btnCancel" style="display:none;">Cancel</button>';
    }


//   function deleteSubmission (index){
//     data.splice[index, 1];
//     document.getElementById("displayInfo").innerHTML = ;
//  }

function editSubmission() {
    var tableEdit = document.getElementById('displayInfo');
    tableEdit.rows[data.length].cells[1].innerHTML = '<input id="firstName" type="text" name="firstName" placeholder="Enter your name here:">';
    tableEdit.rows[data.length].cells[2].innerHTML = '<input id="surname" type="text" name="surname" placeholder="Enter your surname here:">'
    document.getElementById('btnEdit').style.display = "hidden";
    document.getElementById('btnDelete').style.display = "hidden";
    document.getElementById('btnSave').style.display = "inline";
    document.getElementById('btnCancel').style.display = "inline";
    
}

function saveUpdatedData() {

}

function cancelAction() {
    var tableEdit = document.getElementById('displayInfo');
    tableEdit.rows[data.length].cells[1].innerHTML = data[data.length - 1].firstName;
    tableEdit.rows[data.length].cells[2].innerHTML = data[data.length -1].surname;
    document.getElementById('btnEdit').style.display = "inline";
    document.getElementById('btnDelete').style.display = "inline";
    document.getElementById('btnSave').style.display = "none";
    document.getElementById('btnCancel').style.display = "none";
}