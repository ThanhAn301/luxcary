<form action="pages/ThongTinTaiKhoan/xlProfile.php" method="POST" onsubmit="return KiemTra();" enctype="multipart/form-data" style="background-color:white; margin-bottom: 30px; padding-left:20px; border-radius: 20px; box-shadow: gray 5px 10px;">
    <!-- Modal Header -->
    <div class="modal-header" style="border-bottom-width: 0px; ">
        <h4 class="modal-title">THÔNG TIN CÁ NHÂN</h4>
    </div>
    <hr style="margin: 0;">
    </hr>
    <!-- Modal body -->

    <div class="modal-body">
        <?php
        $maTK = $_SESSION["MaTaiKhoan"];
        $sql = "SELECT * FROM TaiKhoan WHERE MaTaiKhoan='$maTK'";
        $result = DataProvider::ExecuteQuery($sql);
        $row = mysqli_fetch_array($result);
        ?>

        <div class="row">
            <div class="col">
                <label>Tên đăng nhập</label>
                <input type="text" id="username" name="us" class="form-control" value="<?php echo $row["TenDangNhap"]; ?>">
                <div class="err" id="errUS"></div>
                <?php
                if (isset($_GET["err"])) {
                ?>
                    <div class="err">Tên đăng nhập đã tồn tại</div>
                <?php
                }
                ?>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label>Mật khẩu</label>
                <input type="password" id="password" name="ps" class="form-control" value="<?php echo $row["MatKhau"]; ?>">
                <div class="err" id="errPS"></div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label>Họ và tên</label>
                <input type="text" id="txtName" name="txtName" class="form-control" value="<?php echo $row['TenHienThi']; ?>">
                <div class="err" id="eNAME"></div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="city">Ngày sinh</label>
                <input type="text" name="txtDate" class="form-control" id="txtDate" value="<?php echo $row['NgaySinh']; ?>">
                <div class="err" id="eDATE"></div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="city">Sống tại</label>
                <input type="text" name="txtDiaChi" class="form-control" id="txtDiaChi" value="<?php echo $row['DiaChi']; ?>">
                <div class="err" id="eADD"></div>
            </div>
        </div>
    </div>

    <div class="modal-footer" style="border-bottom-width: 0px;border-top-width: 0px;">
        <input type="submit" class="btn btn-primary" value="Cập nhật">
    </div>
</form>

<script type="text/javascript">
    function KiemTra() {
        var co = true;

        var control = document.getElementById('username');
        var err = document.getElementById('errUS');

        if (control.value == '') {
            co = false;

            err.innerHTML = "Tên đăng nhập không được rỗng";
        } else {
            err.innerHTML = "";
        }

        control = document.getElementById('password');
        err = document.getElementById('errPS');
        if (control.value == "") {
            co = false;

            err.innerHTML = "Mật khẩu không được rỗng";
        } else {
            err.innerHTML = "";

        }

        control = document.getElementById('txtName');
        err = document.getElementById('eNAME');
        if (control.value == "") {
            co = false;

            err.innerHTML = "Họ tên không được rỗng";
        } else {
            err.innerHTML = "";

        }

        control = document.getElementById('txtDiaChi');
        err = document.getElementById('eDATE');
        if (control.value == "") {
            co = false;

            err.innerHTML = "Ngày sinh không được rỗng";
        } else {
            err.innerHTML = "";

        }
        control = document.getElementById('txtDiaChi');
        err = document.getElementById('eADD');
        if (control.value == "") {
            co = false;

            err.innerHTML = "Địa chỉ không được rỗng";
        } else {
            err.innerHTML = "";

        }

        return co;
    }
</script>

<script src="js/calender.js" type="text/javascript"></script>
<script type="text/javascript">
    dates('option');
    months('option');
    years('option', 1900, 2017);
</script>