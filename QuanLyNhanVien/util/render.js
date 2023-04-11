export let renderModal = (person = 'student') => {
    let stringHTML;
    switch (person) {
        case 'student':
            stringHTML = `
            <div class="form-group">
            <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-calculator"
                        aria-hidden="true"></i></span>
            </div>
                    <input type="number" id="math" class="form-control input-sm"
                        placeholder="Toán">
                </div>
                <span class="sp-thongbao" id="tbMath"></span>
            </div>
           
            <div class="form-group">
                <div class="input-group">
                
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-cogs" aria-hidden="true"></i></span>
                </div>
                    <input type="number"  id="physics" class="form-control input-sm" placeholder="Lý">
                </div>
                <span class="sp-thongbao" id="tbphysic"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-flask" aria-hidden="true"></i></span>
                    </div>
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
                <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-money" aria-hidden="true"></i></span>
                    </div>
                    <input type="number"  id="salaryPDay" class="form-control input-sm"
                        placeholder="Lương theo ngày">
                </div>
                <span class="sp-thongbao" id="salaryPDay"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-calendar"
                        aria-hidden="true"></i></span>
            </div>
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
                <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-building"></i></span>
            </div>
                    <input type="text"  id="company" class="form-control input-sm"
                        placeholder="Tên Công ty">
                </div>

                <span class="sp-thongbao" id="tbcompany"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-money"></i></span>
                    </div>
                    <input type="number"  id="billValue" class="form-control input-sm"
                        placeholder="Trị giá hóa đơn">
                </div>

                <span class="sp-thongbao" id="tbbillValue"></span>
            </div>

            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-sticky-note"></i></span>
            </div>
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