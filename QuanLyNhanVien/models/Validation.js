export class Valadition{
        checkEmty = (value,idError)=>{
        if(value.trim()===''){
            document.getElementById(idError).innerHTML=` Vui Lòng Nhập Nội Dung`;
            return false;
        }
        document.getElementById(idError).innerHTML='';
        return true;
        }  




}