import { Employee, Student, Customer } from "../models/Person.js";
import { listPerson } from "../models/ListPerSon.js"
import { renderModal } from "../util/render.js"
let list = new listPerson();

document.querySelector('#btnThem').onclick =  ()=> {
    renderModal();
}
document.querySelector('#userType').onchange =  ()=> {
    let change = document.querySelector('#userType').value;
    switch (change) {
        case 'student': renderModal(change);
            break;
        case 'employee': renderModal(change);
            break;
        default: renderModal(change);

    }
}
// tạo đối tượng mẫu
const student1 = new Student('0001', 'Nguyen Phuc A', 'HCM', 'nguyenphuc@gmail.com', '8', '7', '9.5');

list.addUser(student1);

list.getListUser();
list.renderTableUser('#tableDanhSach');
document.querySelector('#btnThemNV').onclick =  () =>{
    let type = document.querySelector('#userType').value;
    switch (type) {
        case 'student': {
            let student = new Student();
            let arrinput = document.querySelectorAll('.modal-body input');
            for (let input of arrinput) {
                let { id, value } = input;
                student[id] = value;
            }
            console.log('asdsd', student)
            list.addUser(student);
            list.renderTableUser('#tableDanhSach');
            list.saveListUser();

        }

            break;
        case 'employee': {
            let employee = new Employee();
            let arrinput = document.querySelectorAll('.modal-body input');
            for (let input of arrinput) {
                let { id, value } = input;
                employee[id] = value;
            }
            list.addUser(employee);
            list.renderTableUser('#tableDanhSach');
            list.saveListUser();


        }
            break;
        case 'customer': {
            let customer = new Customer();
            let arrinput = document.querySelectorAll('.modal-body input');
            for (let input of arrinput) {
                let { id, value } = input;
                customer[id] = value;
            }
            list.addUser(customer);
            list.renderTableUser('#tableDanhSach');
            list.saveListUser();


        }
    }
}
window.deleteUser = (code) => {
    list.deleteUser(code);
    list.renderTableUser('#tableDanhSach');
}
window.editUser = (code) => {
    document.querySelector('#btnThem').click();
    let editUser = list.editUser(code);
    if (editUser) {
        let arrinput = document.querySelectorAll('.modal-body input');
        for (let input of arrinput) {
            let {id} = input;
            input.value = editUser[id]
        }
    }
}


document.querySelector('#btnCapNhat').onclick =  () =>{
    let type = document.querySelector('#userType').value;
    switch (type) {
        case 'student': {
            let newStudent = new Student();
            let arrinput = document.querySelectorAll('.modal-body input');
            for (let input of arrinput) {
                let { id, value } = input;
                newStudent[id] = value;
            }
            list.updateUser(newStudent);
            list.renderTableUser('#tableDanhSach');
            list.saveListUser();
        }break;
    }
    



}