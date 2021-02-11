class Form {
    constructor(firstname, lastname, email, phone, company) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.company = company;
    }
} 

class UI {
    registrationForm(form) {
        const list = document.getElementById('form-data');
        //Create tr element
        const row = document.createElement('tr');
        //Insert Columns
        row.innerHTML = `
        <td>${form.firstname}</td>
        <td>${form.lastname}</td>
        <td>${form.email}</td>
        <td>${form.phone}</td>
        <td>${form.company}</td>
        <td><a href="#" class="delete">X<a></td>
        `;
        list.appendChild(row);
    }

    showAlert(message, className) {
        //Create div
        const div = document.createElement('div');
        //Add class
        div.className = `alert ${className}`;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.container');
        //Get form
        const form1 = document.querySelector('#reg-form');
        //Insert alert
        container.insertBefore(div, form1);

        //Time limit
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteForm(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('company').value = '';
    }

}


//Event Listener
document.getElementById('reg-form').addEventListener('submit', function(e){
    const firstname = document.getElementById('firstname').value,
        lastname = document.getElementById('lastname').value,
        email = document.getElementById('email').value,
        phone = document.getElementById('phone').value,
        company = document.getElementById('company').value

    //Load Form
    const form = new Form(firstname, lastname, email, phone, company);

    //Load UI
    const ui = new UI();

    console.log(ui);

    //vaild form
    if(firstname === '' || lastname === '' || email === ''|| phone === ''|| company === '') {
        //Error alret
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        //Add form
        ui.registrationForm(form);

       
        //Show success
        ui.showAlert('Form Added!', 'success');

        //Clear Fields
        ui.clearFields();
    }
    e.preventDefault();
});

//Event Listener for delete
document.getElementById('form-data').addEventListener('click', function(e){
    const ui = new UI();
    //Delete form
    ui.deleteForm(e.target);
   
    //Show message
    ui.showAlert('Row Removed!', 'success');
    e.preventDefault();
});