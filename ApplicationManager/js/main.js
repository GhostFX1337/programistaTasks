//Hide/Show Divs for each section
$(".revealForm").on("click", function(){
    $(".hiddenForm").toggle(1000);
});

$(".revealSubmissions").on("click", function(){
    $(".hiddenSubmissions").toggle(1000);
});

//create empty array
var data = [];
var uniqueId = 1000;
//create variable and get value for each input 
document.getElementById("btnInsert").addEventListener("click", function() { 
    var firstNameVal = document.getElementById('firstName').value; 
    var surnameVal = document.getElementById('surname').value;
    var emailVal = document.getElementById('email').value;
    var ageVal = document.getElementById('age').value;
    var gsmVal = document.getElementById('gsm').value;
    var choiceVal = document.getElementById('choice').value;
    var englishVal = document.getElementById('englishLevel').value;
    var dateVal = document.getElementById('beginDate').value;
    var skillsVal = document.getElementById('skillsContent').value;
    var motivationVal = document.getElementById('motivationLet').value;
    var studyFromHome = '';
    if(document.getElementById('studyHome').checked){
        studyFromHome = 'Yes'
    } else {
        studyFromHome = 'No'
    }
    
    if(firstNameVal && surnameVal && emailVal && ageVal && gsmVal && choiceVal && englishVal && dateVal && skillsVal && motivationVal){ 
        //push into object
        var newSubmission = {   
            firstName: firstNameVal.toString(''),
            surname: surnameVal,
            email: emailVal,
            age: ageVal,
            phoneNumber: gsmVal,
            choice: choiceVal,
            englishLevel: englishVal,
            startDate: dateVal,
            skillsandCourses: skillsVal,
            motivationalLetter: motivationVal,
            homeStudy: studyFromHome,
            id: uniqueId
        }
        //push into array
        uniqueId++
        data.push(newSubmission);
        //add submission to browse section
        createTableRow();
    }
}); 

function createTableRow() {
    var table = document.getElementById('displayInfo');
    var row = table.insertRow();
    row.id= "rowN" + data[data.length -1].id;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    var cell12 = row.insertCell(11);
    var cell13 = row.insertCell(12);
    cell1.innerHTML = data[data.length -1].firstName;
    cell2.innerHTML = data[data.length -1].surname;
    cell3.innerHTML = data[data.length -1].email;
    cell4.innerHTML = data[data.length -1].age;
    cell5.innerHTML = data[data.length -1].phoneNumber;
    cell6.innerHTML = data[data.length -1].choice;
    cell7.innerHTML = data[data.length -1].englishLevel;
    cell8.innerHTML = data[data.length -1].startDate;
    cell9.innerHTML = data[data.length -1].skillsandCourses;
    cell10.innerHTML = data[data.length -1].motivationalLetter;
    cell11.innerHTML = data[data.length -1].homeStudy;
    cell12.innerHTML = '<button id="btnEdit" onclick="editSubmission(' + data[data.length -1].id  + ') " class="sbtButton">Edit</button> <button id="btnSave" onclick="saveEditedSubmission(' + data[data.length -1].id + ')" id="btnSave" class="sbtButton" style="display:none;">Save</button> <button id="btnCancel" onclick="cancelAction()" id="btnCancel" class="sbtButton" style="display:none; margin-top:1em;">Cancel</button> ';
    cell13.innerHTML = '<button id="btnDelete" onclick="deleteSubmission(' + data[data.length -1].id  + ') " class="sbtButton">Delete</button>';  
};

function editSubmission(id) {  
    var rowEdit = document.getElementById('rowN' + id);
    rowEdit.cells[0].innerHTML = '<input id="firstName' + id + '" type="text" name="firstName" placeholder="Enter your name here:" required>';
    rowEdit.cells[1].innerHTML = '<input id="surname' + id + '" type="text" name="surname" placeholder="Enter your surname here:" required>';
    rowEdit.cells[2].innerHTML = '<input id="email' + id + '" name="email" type="text" placeholder="Enter your email address here:" required>';
    rowEdit.cells[3].innerHTML = '<input id="age' + id + '" type="number" name="age" min="18" max="99" placeholder="Your age:" required>';
    rowEdit.cells[4].innerHTML = '<input id="gsm' + id + '" type="text" name="phoneNumber" placeholder="Enter your phone number here:" required>';
    rowEdit.cells[5].innerHTML = '<input id="choice' + id + '" type="radio" name="communication" value="phone"><strong>via phone</strong> <br> <input id="choice" type="radio" name="communication" value="mail"><strong>via email</strong>';
    rowEdit.cells[6].innerHTML = '<select id="englishLevel' + id + '" class="selectLanguage" name="englishLevel" required> <option value="">Please choose</option> <option value="A1">A1</option> <option value="A2">A2</option> <option value="B1">B1</option> <option value="B2">B2</option> <option value="C1">C1</option> <option value="C2">C2</option>';
    rowEdit.cells[7].innerHTML = '<input id="beginDate' + id + '" type="date" name="startDate" required>';
    rowEdit.cells[8].innerHTML = '<input id="skillsContent' + id + '" class="textSkills" type="text" name="skillsCourses" minlength="10" maxlength="50" required>';
    rowEdit.cells[9].innerHTML = '<input id="motivationLet' + id + '" class="textMotivate" type="text" name="joinReason" minlength="10" maxlength="50" required>';
    rowEdit.cells[10].innerHTML = '<input id="studyHome' + id + '" class="homeStudyBox" type="checkbox" name="confirmStudyFromHome">';
    rowEdit.cells[11].innerHTML = '<button id="btnEdit' + id + '" onclick="editSubmission() " class="sbtButton" style="display:none;">Edit</button> <button id="btnSave" onclick="saveEditedSubmission(' + id + ')" id="btnSave" class="sbtButton" style="display:inline;">Save</button> <button id="btnCancel" onclick="cancelAction(' + id + ')" id="btnCancel" class="sbtButton" style="display:inline;" margin-top:2em;">Cancel</button> '
    rowEdit.cells[12].innerHTML = '<button id="btnDelete' + id + '" onclick="deleteSubmission(' + id + ') " class="sbtButton" style="display:none;">Delete</button>';
}

function cancelAction(id) {
    var rowEdit = document.getElementById('rowN' + id);
    rowEdit.cells[0].innerHTML = data[data.length -1].firstName;
    rowEdit.cells[1].innerHTML = data[data.length -1].surname;
    rowEdit.cells[2].innerHTML = data[data.length -1].email;
    rowEdit.cells[3].innerHTML = data[data.length -1].age;
    rowEdit.cells[4].innerHTML = data[data.length -1].phoneNumber;
    rowEdit.cells[5].innerHTML = data[data.length -1].choice;
    rowEdit.cells[6].innerHTML = data[data.length -1].englishLevel;
    rowEdit.cells[7].innerHTML = data[data.length -1].startDate;
    rowEdit.cells[8].innerHTML = data[data.length -1].skillsandCourses;
    rowEdit.cells[9].innerHTML = data[data.length -1].motivationalLetter;
    rowEdit.cells[10].innerHTML = data[data.length -1].homeStudy;
    rowEdit.cells[11].innerHTML = '<button id="btnEdit" onclick="editSubmission(' + id + ') " class="sbtButton" style="display:inline;">Edit</button> <button id="btnSave" onclick="saveEditedSubmission(' + id + ')" id="btnSave" class="sbtButton" style="display:none;">Save</button> <button id="btnCancel" onclick="cancelAction()" id="btnCancel" class="sbtButton" style="display:none"; margin-top:1em;">Cancel</button> '
    rowEdit.cells[12].innerHTML = '<button id="btnDelete" onclick="deleteSubmission(' + id + ') " class="sbtButton" style="display:inline;">Delete</button>';
}

function saveEditedSubmission (id){
    var firstNameVal = document.getElementById('firstName' + id).value; 
    var surnameVal = document.getElementById('surname' + id).value;
    var emailVal = document.getElementById('email' + id).value;
    var ageVal = document.getElementById('age' + id).value;
    var gsmVal = document.getElementById('gsm' + id).value;
    var choiceVal = document.getElementById('choice' + id).value;
    var englishVal = document.getElementById('englishLevel' + id).value;
    var dateVal = document.getElementById('beginDate' + id).value;
    var skillsVal = document.getElementById('skillsContent' + id).value;
    var motivationVal = document.getElementById('motivationLet' + id).value;
    var studyFromHome = '';
    if(document.getElementById('studyHome' + id).checked){
        studyFromHome = 'Yes'
    } else {
        studyFromHome = 'No'
    }
    if(firstNameVal && surnameVal && emailVal && ageVal && gsmVal && choiceVal && englishVal && dateVal && skillsVal && motivationVal){ 
        //push into object
        var newSubmission = {   
            firstName: firstNameVal.toString(''),
            surname: surnameVal,
            email: emailVal,
            age: ageVal,
            phoneNumber: gsmVal,
            choice: choiceVal,
            englishLevel: englishVal,
            startDate: dateVal,
            skillsandCourses: skillsVal,
            motivationalLetter: motivationVal,
            homeStudy: studyFromHome,
            id: id
        }
        //splice existing object from array
        //splice udpated object in previous object place
        for (let i = 0; i <data.length; i++){
            if(data[i].id == id) {
                data[i] = newSubmission;  
                break;    
            }
        }
        //add submission to browse section
        var rowEdit = document.getElementById('rowN' + id);
        rowEdit.cells[0].innerHTML = newSubmission.firstName;
        rowEdit.cells[1].innerHTML = newSubmission.surname;
        rowEdit.cells[2].innerHTML = newSubmission.email;
        rowEdit.cells[3].innerHTML = newSubmission.age;
        rowEdit.cells[4].innerHTML = newSubmission.phoneNumber;
        rowEdit.cells[5].innerHTML = newSubmission.choice;
        rowEdit.cells[6].innerHTML = newSubmission.englishLevel;
        rowEdit.cells[7].innerHTML = newSubmission.startDate;
        rowEdit.cells[8].innerHTML = newSubmission.skillsandCourses;
        rowEdit.cells[9].innerHTML = newSubmission.motivationalLetter;
        rowEdit.cells[10].innerHTML = newSubmission.homeStudy;
        rowEdit.cells[11].innerHTML = '<button id="btnEdit" onclick="editSubmission(' + id + ') " class="sbtButton" style="display:inline;">Edit</button> <button id="btnSave" onclick="saveEditedSubmission(' + id + ')" id="btnSave" class="sbtButton" style="display:none;">Save</button> <button id="btnCancel" onclick="cancelAction()" id="btnCancel" class="sbtButton" style="display:none"; margin-top:1em;">Cancel</button> '
        rowEdit.cells[12].innerHTML = '<button id="btnDelete" onclick="deleteSubmission(' + id + ') " class="sbtButton" style="display:inline;">Delete</button>';
    }
}; 



function deleteSubmission(id) {
    var row = document.getElementById('rowN' + id);
    row.parentNode.removeChild(row);
    for (let i = 0; i <data.length; i++){
        if(data[i].id == id) {
            data.splice(i, 1)  
            break;    
        }
    }
}