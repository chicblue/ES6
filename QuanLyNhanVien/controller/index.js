import { Employee, Student, Customer } from "../models/Person.js";
import { listPerson } from "../models/ListPerSon.js"
import { renderModal } from "../util/render.js"
import { Valadition } from "../models/Validation.js";

let list = new listPerson();
let val = new Valadition();
document.querySelector('#btnThem').onclick = () => {
    document.querySelector('#header-title').innerHTML='Thêm  Người Dùng'
    document.querySelectorAll('#mainForm input,#mainForm select').forEach((input) => {
        input.disabled = false;
    });
    document.querySelector('#btnThemNV').style.display = 'inline';
    document.querySelector('#btnCapNhat').style.display = 'none';
    renderModal();
}
document.querySelector('#btnDong,#myModal').onclick = () => {
    document.querySelector('#mainForm').reset();
}
document.querySelector('#userType').onchange = () => {
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
// ----------thêm người dùng--------------
document.querySelector('#btnThemNV').onclick = () => {
    let type = document.querySelector('#userType').value;
    switch (type) {
        case 'student': {
            let student = new Student();
            let arrinput = document.querySelectorAll('.modal-body input');
            for (let input of arrinput) {
                let { id, value } = input;
                student[id] = value;
            }
            
            let valid = true;

            valid = val.checkEmty(student.code,'tbErrorCode');
            if(!valid){
                return ;
            }
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
    

    
    document.querySelector('#mainForm').reset();
}
// ------------xóa người dùng-------------
window.deleteUser = (code) => {
    list.deleteUser(code);
    list.renderTableUser('#tableDanhSach');
    list.saveListUser();
}
// -------------sửa người dùng--------------
window.editUser = (code) => {
 
    let editUser = list.editUser(code);
    switch (editUser.class) {
        case 'student': renderModal(editUser.class);
            break;
        case 'employee': renderModal(editUser.class);
            break;
        default: renderModal(editUser.class);

    }
    if (editUser) {
        let arrinput = document.querySelectorAll('.modal-body input');
        for (let input of arrinput) {
            let { id } = input;
            input.value = editUser[id]
        }
    }
    document.querySelector('#header-title').innerHTML='Chỉnh Sửa  Người Dùng'
    document.querySelectorAll('#mainForm input,#mainForm select').forEach((input) => {
        input.disabled = false;
    });
    document.querySelector('#code').disabled = 'true';
    document.querySelector('#userType').disabled = 'true';

    document.querySelector('#btnThemNV').style.display = 'none';
    document.querySelector('#btnCapNhat').style.display = 'inline';
    
}

// ------------cập nhật người dùng-------------
document.querySelector('#btnCapNhat').onclick = () => {
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
        } break;
        case 'employee': {
            let newEmployee = new Employee();
            let arrinput = document.querySelectorAll('.modal-body input');
            for (let input of arrinput) {
                let { id, value } = input;
                newEmployee[id] = value;
            }
            list.updateUser(newEmployee);
            list.renderTableUser('#tableDanhSach');
            list.saveListUser();
        } break;
        case 'customer': {
            let newCustomer = new Customer();
            let arrinput = document.querySelectorAll('.modal-body input');
            for (let input of arrinput) {
                let { id, value } = input;
                newCustomer[id] = value;
            }
            list.updateUser(newCustomer);
            list.renderTableUser('#tableDanhSach');
            list.saveListUser();
        } break;
    }
    document.querySelector('#mainForm').reset();
}
// ------------ chi tiết người dùng-----------------
window.detailUser = (code) => {
   
    let editUser = list.editUser(code);
    switch (editUser.class) {
        case 'student': renderModal(editUser.class);
            break;
        case 'employee': renderModal(editUser.class);
            break;
        default: renderModal(editUser.class);

    }
    if (editUser) {
        let arrinput = document.querySelectorAll('.modal-body input');
        for (let input of arrinput) {
            let { id } = input;
            input.value = editUser[id]
        }
    }
    document.querySelector('#header-title').innerHTML='Chi Tiết Người Dùng'
    document.querySelectorAll('#mainForm input,#mainForm select').forEach((input) => {
        input.disabled = 'true';
    });
    document.querySelector('#btnThemNV').style.display = 'none';
    document.querySelector('#btnCapNhat').style.display = 'none';
}
document.querySelector('#sortIncrease').addEventListener('click', () => {

    list.sortUserName(list.listUser,1);
    list.renderTableUser('#tableDanhSach');
    list.saveListUser();
});
document.querySelector('#sortReduce').addEventListener('click', () => {

    list.sortUserName(list.listUser,-1);
    list.renderTableUser('#tableDanhSach');
    list.saveListUser();
});
document.querySelector('#findUser').addEventListener('change', (e) => {
    let user = e.target.value;
    let filterList =list.filterUser(user);
    list.renderTableUserFilter('#tableDanhSach',filterList);
});
