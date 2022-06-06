
class Book {
constructor(Name, Employee, contact) {
this.Name = Name;
this.Employee = Employee;
this.contact = contact;

}

}

class UI {

addBookToList(book) {

        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        
        <td>${book.Name}</td>
        <td>${book.Employee}</td>
        <td>${book.contact}</td>
        <td><a href="" class="delete">X</a></td>

        `;
list.appendChild(row);

    
}

showAlert(message, className){

            const div = document.createElement('div');

            //Add className

            div.className = `alert ${className}`;
            
            div.appendChild(document.createTextNode(message));
            
            const container = document.querySelector('.container');
            
            //Get Form
            
            const form = document.querySelector('#book-form');
            
            //Insert alert
            
            container.insertBefore(div, form);
            
            // Timeout after 3 sec
        
            setTimeout(function(){
            
                document.querySelector('.alert').remove();
            }, 3000);
            

}
deleteBook(target) {

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

    }
}

clearFields(){

    document.getElementById('Name').value = '';
    document.getElementById('Employee').value = '';
    document.getElementById('contact').value = '';

}

}

//Event Listening

document.getElementById('book-form').addEventListener('submit',function(e){
    
    //Get form values
    
    const title = document.getElementById('Name').value;
    const author = document.getElementById('Employee').value;
    const isbn = document.getElementById('contact').value;
    
    //Instantiate book
    const book = new Book(Name, Employee, contact);

    //Instantiate UI
    const ui = new UI();
    
    //Validate
    if(Name === '' || Employee === '' || contact === '') {
    
        //Error alert
    
        ui.showAlert('please fill in all fields', 'error');
    }
    else{
    
    //Add Book to list
    
    ui.addBookToList(book);
    
    //show success
    
    ui.showAlert('Name Added', 'success');
    
    // Clear Fields
    
    ui.clearFields();
       
    }
    
    e.preventDefault();
    })
    
    //Event listening for delete 
    document.getElementById('book-list').addEventListener('click', function(e){

    //Instantiate UL
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);
    
    //Show Message
    
    ui.showAlert('Name Removed!', 'success');
    
    
    e.preventDefault();
    });