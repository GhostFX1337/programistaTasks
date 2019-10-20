//Hide/Show Divs for each section
$(".revealForm").on("click", function(){
    $(".hiddenForm").toggle(1000);
});

$(".revealSubmissions").on("click", function(){
    $(".hiddenSubmissions").toggle(1000);
});

//create empty array
var data = [];

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
        //create object
        let newSubmission = {
        firstName: firstNameVal,
        surname: surnameVal,
        email: emailVal,
        age: ageVal,
        phoneNumber: gsmVal,
        choice: choiceVal,
        englishLevel: englishVal,
        startDate: dateVal,
        skillsandCourses: skillsVal,
        motivationalLetter: motivationVal,
        homeStudy: studyFromHome 
        }
        //push into array
        data.push(newSubmission);
        //add submission to browse section
        createTableRow();
    }
}); 

function createTableRow() {
    var table = document.getElementById('displayInfo');
    var row = table.insertRow();
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
    var cell14 = row.insertCell(13);
    cell1.innerHTML = data.length; 
    cell2.innerHTML = data[data.length -1].firstName;
    cell3.innerHTML = data[data.length -1].surname;
    cell4.innerHTML = data[data.length -1].email;
    cell5.innerHTML = data[data.length -1].age;
    cell6.innerHTML = data[data.length -1].phoneNumber;
    cell7.innerHTML = data[data.length -1].choice;
    cell8.innerHTML = data[data.length -1].englishLevel;
    cell9.innerHTML = data[data.length -1].startDate;
    cell10.innerHTML = data[data.length -1].skillsandCourses;
    cell11.innerHTML = data[data.length -1].motivationalLetter;
    cell12.innerHTML = data[data.length -1].homeStudy;
    cell13.innerHTML = '<button id="btnEdit" onclick="editSubmission(' + (data.length - 1) + ') " class="sbtButton">Edit</button> <button id="btnSave" onclick="saveEditedSubmission(' + (data.length - 1) + ')" id="btnSave" class="sbtButton" style="display:none;">Save</button> <button id="btnCancel" onclick="cancelAction()" id="btnCancel" class="sbtButton" style="display:none; margin-top:1em;">Cancel</button> ';
    cell14.innerHTML = '<button id="btnDelete" onclick="deleteSubmission(' + (data.length - 1) + ') " class="sbtButton">Delete</button>';  
};

function editSubmission() {
    var tableEdit = document.getElementById('displayInfo');
    tableEdit.rows[data.length].cells[1].innerHTML = '<input id="firstName" type="text" name="firstName" placeholder="Enter your name here:" required>';
    tableEdit.rows[data.length].cells[2].innerHTML = '<input id="surname" type="text" name="surname" placeholder="Enter your surname here:" required>';
    tableEdit.rows[data.length].cells[3].innerHTML = '<input id="email" name="email" type="text" placeholder="Enter your email address here:" required>';
    tableEdit.rows[data.length].cells[4].innerHTML = '<input id="age" type="number" name="age" min="18" max="99" placeholder="Your age:" required>';
    tableEdit.rows[data.length].cells[5].innerHTML = '<input id="gsm" type="text" name="phoneNumber" placeholder="Enter your phone number here:" required>';
    tableEdit.rows[data.length].cells[6].innerHTML = '<input id="choice" type="radio" name="communication" value="phone"><strong>via phone</strong> <br> <input id="choice" type="radio" name="communication" value="mail"><strong>via email</strong>';
    tableEdit.rows[data.length].cells[7].innerHTML = '<select id="englishLevel" class="selectLanguage" name="englishLevel" required> <option value="">Please choose</option> <option value="A1">A1</option> <option value="A2">A2</option> <option value="B1">B1</option> <option value="B2">B2</option> <option value="C1">C1</option> <option value="C2">C2</option>';
    tableEdit.rows[data.length].cells[8].innerHTML = '<input id="beginDate" type="date" name="startDate" required>';
    tableEdit.rows[data.length].cells[9].innerHTML = '<input id="skillsContent" class="textSkills" type="text" name="skillsCourses" minlength="10" maxlength="50" required>';
    tableEdit.rows[data.length].cells[10].innerHTML = '<input id="motivationLet" class="textMotivate" type="text" name="joinReason" minlength="10" maxlength="50" required>';
    tableEdit.rows[data.length].cells[11].innerHTML = '<input id="studyHome" class="homeStudyBox" type="checkbox" name="confirmStudyFromHome">';
    tableEdit.rows[data.length].cells[12].innerHTML = '<button id="btnEdit" onclick="editSubmission() " class="sbtButton" style="display:none;">Edit</button> <button id="btnSave" onclick="saveEditedSubmission(' + (data.length - 1) + ')" id="btnSave" class="sbtButton" style="display:inline;">Save</button> <button id="btnCancel" onclick="cancelAction()" id="btnCancel" class="sbtButton" style="display:inline;" margin-top:1em;">Cancel</button> '
    tableEdit.rows[data.length].cells[13].innerHTML = '<button id="btnDelete" onclick="deleteSubmission(' + (data.length - 1) + ') " class="sbtButton" style="display:none;">Delete</button>';
}

function cancelAction() {
    var tableEdit = document.getElementById('displayInfo');
    tableEdit.rows[data.length].cells[1].innerHTML = data[data.length -1].firstName;
    tableEdit.rows[data.length].cells[2].innerHTML = data[data.length -1].surname;
    tableEdit.rows[data.length].cells[3].innerHTML = data[data.length -1].email;
    tableEdit.rows[data.length].cells[4].innerHTML = data[data.length -1].age;
    tableEdit.rows[data.length].cells[5].innerHTML = data[data.length -1].phoneNumber;
    tableEdit.rows[data.length].cells[6].innerHTML = data[data.length -1].choice;
    tableEdit.rows[data.length].cells[7].innerHTML = data[data.length -1].englishLevel;
    tableEdit.rows[data.length].cells[8].innerHTML = data[data.length -1].startDate;
    tableEdit.rows[data.length].cells[9].innerHTML = data[data.length -1].skillsandCourses;
    tableEdit.rows[data.length].cells[10].innerHTML = data[data.length -1].motivationalLetter;
    tableEdit.rows[data.length].cells[11].innerHTML = data[data.length -1].homeStudy;
    tableEdit.rows[data.length].cells[12].innerHTML = '<button id="btnEdit" onclick="editSubmission(' + (data.length - 1) + ') " class="sbtButton" style="display:inline;">Edit</button> <button id="btnSave" onclick="saveEditedSubmission(' + (data.length - 1) + ')" id="btnSave" class="sbtButton" style="display:none;">Save</button> <button id="btnCancel" onclick="cancelAction()" id="btnCancel" class="sbtButton" style="display:none"; margin-top:1em;">Cancel</button> '
    tableEdit.rows[data.length].cells[13].innerHTML = '<button id="btnDelete" onclick="deleteSubmission(' + (data.length - 1) + ') " class="sbtButton" style="display:inline;">Delete</button>';
}

// function saveEditetSubmission (){

// }