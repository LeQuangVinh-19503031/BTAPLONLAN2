$(document).ready(function(){
    $('#btn-show-modal').on('click', function(){
        $('#erroName').html('');
        $("#erroemptySDT").html("");
        $('#erroEmail').html('');
    });
// Kiểm tra họ
    function KT_Fname(){
        let fname = $("#Fname").val();
        let Checkfname = /^[A-Z][a-zA-Z]*$/;
        if (fname.trim()==""){
            $("#erroFname").html("Phần họ không được để trống");
            return false;
        }
        if(!Checkfname.test(fname)){
            $("#erroFname").html("Chữ cái đầu phải in hoa và không được có các kí tự số hay kí tự đặc biệt.");
            return false;
        }
        $("#erroFname").html("")
        return true;
    }
    $("#Fname").blur(KT_Fname);
// Kiểm tra tên đệm và tên.
    function KT_Lname(){
        let lname = $("#Lname").val();
        let Checklname = /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/;
        if(lname.trim()==""){
            $("#erroLname").html("Tên đệm và tên không được để trống.");
            return false;
        }
        if(!Checklname.test(lname)){
            $("#erroLname").html("Chữ cái đầu phải in hoa và không được có các kí tự số hay kí tự đặc biệt.");
            return false;
        }
        $("#erroLname").html("");
        return true;
    }
    $("#Lname").blur(KT_Lname);
// Kiểm tra tên đăng nhập
    function KT_Uname(){
        let tenDN = $("#Uname").val();
        let CheckUname = /^[a-z]{4,}$/i ;

        if(tenDN.trim()==""){
            $("#erroUname").html('Tên đăng nhập không được để trống');
            return false;
        }

        if(!CheckUname.test(tenDN)){
            $("#erroUname").html("Tên đăng nhập phải có ít nhất 4 kí tự");
            return false;
        }

        $("#erroUname").html("");
        return true;

    }
    $("#Uname").blur(KT_Uname);
// Kiểm tra mật khẩu
    function KT_Pass(){;
        let mk = $("#pass").val();
        if(mk.trim()==''){
            $("#erroPass").html("Mật khẩu không được để trống");
            return false;
        }
        $("#erroPass").html("");
        return true;
    }
    $("#pass").blur(KT_Pass);
// So khớp với mật khẩu đã nhập không
    function KT_RePass(){
        let mk = $("#pass").val();
        let nlmk = $("#repass").val();
        if(mk != nlmk){
            $("#erroRePass").html("Mật khẩu không khớp.");
            return false;
        }
        $("#erroRePass").html("");
        return true;
    }
    $("#repass").blur(KT_RePass);
// Kiểm tra Email
    function KT_Email(){
        let email = $("#mail").val();
        let Emailpattern=/[A-Za-z0-9]\@[a-zA-Z]{4,7}\.[a-zA-Z]{3}/;
        if(email.trim()==""){
            $("#erroEmail").html("Email không được để trống.");
            return false;
        }
        if(!Emailpattern.test(email))
        {
            $("#erroEmail").html("Không tồn tại địa chỉ email này.");
            return false;
        }
        $("#erroEmail").html("");
        return true;
    }
    $("#mail").blur(KT_Email);
// Kiểm tra số điện thoại (Ko được để trống)
    function KT_SDT_no_empty(){
        let sdt = $("#SDT").val();
        let CheckSDT=/[0-9]{9,11}/;
        if(sdt.trim()==""){
            $("#erroSDT").html("Số điện thoại không được để trống.");
            return false;
        }
        if(!CheckSDT.test(sdt)){
            $("#erroSDT").html("Số điện thoại không chứa các kí tự chữ cái hay các kí tự đặc biệt.");
            return false;
        }
        $("#erroSDT").html("");
        return true;
    }
    $("#SDT").blur(KT_SDT_no_empty);
// Kiểm tra toàn bộ khi nhấn submit
    function KT_Register(){
        if(KT_Fname() && KT_Lname() && KT_Uname() && KT_Pass() && KT_RePass() && KT_Email() && KT_SDT_no_empty())
            return true;
        else
            return false;
    }
    $("#DangKy").click(KT_Register);
// Kiểm tra họ và tên
    function KT_HT(){
        let name = $("#Name").val();
        let CheckName = /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/;
        if(name.trim()==""){
            $("#erroName").html("Họ và tên không được để trống.");
            return false;
        }
        if(!CheckName.test(name)){
            $("#erroLname").html("Chữ cái đầu phải in hoa và không được có các kí tự số hay kí tự đặc biệt.");
            return false;
        }
        $("#erroName").html("");
        return true;
    }
    $("#Name").blur(KT_HT);

    
// Kiểm tra số điện thoại (Được để trống)
    function KT_SDT_empty(){
        let sdt_empty = $("#emptySDT").val();
        let CheckSDTempty=/[0-9]{9,11}/;
        if(!CheckSDTempty.test(sdt_empty)){
            $("#erroemptySDT").html("Số điện thoại không chứa các kí tự chữ cái hay các kí tự đặc biệt.");
            return false;
        }
        $("#erroemptySDT").html("");
        return true;
    }
    $("#emptySDT").blur(KT_SDT_empty);

$("#btnSave").on('click', function(){
    if(!KT_HT() && !KT_SDT_empty() && !KT_Email())
        return false;
    let hoten = $("#Name").val();
    let ND = $("#customers_review").val();
    let persons = "<div class='item-comment'><div style='text-transform: uppercase;'>"+hoten+"</div></div><br><div class='detail_comment'>"+ND+"</div>";
    $(".persons_comment").append(persons);
    $("#exampleModalCenter").modal("hide");
});

$("#btnSuccess").on('click', function(){
    if(!KT_Uname() && !KT_Pass())
    return false;
});

});