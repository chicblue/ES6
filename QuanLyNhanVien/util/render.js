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
                <div class ="thong_bao text    text-danger"id="tbErrorMath"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorNumberMath"></div>	
                <span class="sp-thongbao" id="tbMath"></span>
            </div>
           
            <div class="form-group">
                <div class="input-group">
                
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-cogs" aria-hidden="true"></i></span>
                </div>
                    <input type="number"  id="physics" class="form-control input-sm" placeholder="Lý">
                </div>
                <div class ="thong_bao text    text-danger"id="tbErrorPhysic"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorNumberPhysic"></div>	
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
                <div class ="thong_bao text    text-danger"id="tbErrorChemistry"></div>	
                <div class ="thong_bao text    text-danger"id="tbErrorNumberChemistry"></div>	
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
                <div class ="thong_bao text    text-danger"id="tbErrorSalaryPDay"></div>	
                <div class ="thong_bao text    text-danger"id="tbErrorNumBerSalaryPDay"></div>
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
                <div class ="thong_bao text    text-danger"id="tbErrorWorkday"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorNumberWorkday"></div>
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
                <div class ="thong_bao text    text-danger"id="tbErrorCompany"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorLetterCompany"></div>
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
                <div class ="thong_bao text    text-danger"id="tbErrorbillValue"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorNumberBillvalue"></div>
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
                <div class ="thong_bao text    text-danger"id="tbErrorReview"></div>

                <span class="sp-thongbao" id="tbreview"></span>
            </div>
            `;
            break;
    }

    document.querySelector('#extendForm').innerHTML = stringHTML;
};

// rendermodal UpDate
export let renderModalUpdate = (person = 'student') => {
    let stringHTML;
    switch (person) {
        case 'student':
            stringHTML = `
            <select  id="Type" style="display:none" >
									<option value="student"></option>
            <select/>
            <div class="form-group">
            <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-calculator"
                        aria-hidden="true"></i></span>
            </div>
                    <input type="number" id="math" class="form-control input-sm"
                        placeholder="Toán">
                      
                </div>
                <div class ="thong_bao text    text-danger"id="tbErrorMath"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorNumberMath"></div>	
                <span class="sp-thongbao" id="tbMath"></span>
            </div>
           
            <div class="form-group">
                <div class="input-group">
                
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-cogs" aria-hidden="true"></i></span>
                </div>
                    <input type="number"  id="physics" class="form-control input-sm" placeholder="Lý">
                </div>
                <div class ="thong_bao text    text-danger"id="tbErrorPhysic"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorNumberPhysic"></div>	
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
                <div class ="thong_bao text    text-danger"id="tbErrorChemistry"></div>	
                <div class ="thong_bao text    text-danger"id="tbErrorNumberChemistry"></div>	
                <span class="sp-thongbao" id="tbChemistry"></span>
            </div>
            `;
            break;
        case 'employee':
            stringHTML = `
            <select  id="Type" style="display:none" >
									<option value="employee"></option>
            <select/>                        
            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-money" aria-hidden="true"></i></span>
                    </div>
                    <input type="number"  id="salaryPDay" class="form-control input-sm"
                        placeholder="Lương theo ngày">
                        <input type="text" id="type" value="employee" style="display:none">
                  
                </div>
                <div class ="thong_bao text    text-danger"id="tbErrorSalaryPDay"></div>	
                <div class ="thong_bao text    text-danger"id="tbErrorNumBerSalaryPDay"></div>
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
                <div class ="thong_bao text    text-danger"id="tbErrorWorkday"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorNumberWorkday"></div>
                <span class="sp-thongbao" id="tbworkday"></span>
            </div>
            `;
            break;
        case 'customer':
            stringHTML = `
            <select  id="Type" style="display:none" >
									<option value="customer"></option>
            <select/>
            
            <div class="form-group">
                <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-building"></i></span>
            </div>
                    <input type="text"  id="company" class="form-control input-sm"
                        placeholder="Tên Công ty">
                </div>
                <div class ="thong_bao text    text-danger"id="tbErrorCompany"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorLetterCompany"></div>
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
                <div class ="thong_bao text    text-danger"id="tbErrorBillValue"></div>
                <div class ="thong_bao text    text-danger"id="tbErrorNumberBillValue"></div>
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
                <div class ="thong_bao text    text-danger"id="tbErrorReview"></div>

                <span class="sp-thongbao" id="tbreview"></span>
            </div>
            `;
            break;
    }

    document.querySelector('#extendForm').innerHTML = stringHTML;
};