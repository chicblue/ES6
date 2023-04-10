export let renderModal = (person = 'student') => {
    let stringHTML;
    switch (person) {
        case 'student':
            stringHTML = `
            <div class="form-group">
           
                    <input type="number" id="math" class="form-control input-sm"
                        placeholder="Toán">
                </div>
                <span class="sp-thongbao" id="tbMath"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                 
                    <input type="number"  id="physics" class="form-control input-sm" placeholder="Lý">
                </div>
                <span class="sp-thongbao" id="tbphysic"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                    <input type="number"  id="chemistry" class="form-control input-sm"
                        placeholder="Hóa">
                </div>
                <span class="sp-thongbao" id="tbChemistry"></span>
            </div>
            `;
            break;
        case 'employee':
            stringHTML = `
            <div class="form-group">
                <div class="input-group">
                    <input type="number"  id="salaryPDay" class="form-control input-sm"
                        placeholder="Lương theo ngày">
                </div>
                <span class="sp-thongbao" id="salaryPDay"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                    <input type="number"  id="workday" class="form-control input-sm"
                        placeholder="Số ngày làm việc">
                </div>
                <span class="sp-thongbao" id="tbworkday"></span>
            </div>
            `;
            break;
        case 'customer':
            stringHTML = `
            <div class="form-group">
                <div class="input-group">
                 
                    <input type="text"  id="company" class="form-control input-sm"
                        placeholder="Tên Công ty">
                </div>

                <span class="sp-thongbao" id="tbcompany"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                
                    <input type="number"  id="billValue" class="form-control input-sm"
                        placeholder="Trị giá hóa đơn">
                </div>

                <span class="sp-thongbao" id="tbbillValue"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                    
                    <input type="text"  id="review" class="form-control input-sm"
                        placeholder="Đánh giá">
                </div>

                <span class="sp-thongbao" id="tbreview"></span>
            </div>
            `;
            break;
    }

    document.querySelector('#extendForm').innerHTML = stringHTML;
};