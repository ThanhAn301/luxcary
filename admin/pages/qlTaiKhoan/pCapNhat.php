<?php

$id = $_GET["id"];
$sql = "SELECT * FROM TaiKhoan WHERE MaTaiKhoan = $id";
$result = DataProvider::ExecuteQuery($sql);
$row = mysqli_fetch_array($result);
$TenDangNhap = $row["TenDangNhap"];
$MaLoaiTaiKhoan = $row["MaLoaiTaiKhoan"];

?>
<div class="modal fade" id="myModal">
    <div class="modal-dialog ">
        <div class="modal-content">
            <form action="pages/qlTaiKhoan/xlCapNhat.php" method="POST" onsubmit="return KiemTra();">
                <!-- Modal Header -->
                <div class="modal-header" style="border-bottom-width: 0px;">
                    <h4 class="modal-title">Thông tin tài khoản</h4>
                    <button type="button" class="close" data-dismiss="modal">
                        &times;
                    </button>
                </div>

                <!-- Modal body -->

                <div class="modal-body">

                    <div class="form-group">
                        <label for="txtUS">Tên đăng nhập</label>
                        <input type="text" name="txtUS" class="form-control" id="txtUS" value="<?php echo $TenDangNhap; ?>">
                        <div class="err" id="errUS"></div>
                        <input type="hidden" name="id" class="form-control" id="txtID" value="<?php echo $id ?>">
                    </div>
                    <div class="form-group">
                        <label for="txtPS">Mật Khẩu</label>
                        <input type="text" name="txtPS" class="form-control" id="txtPS" value="<?php echo $row["MatKhau"]; ?>">
                        <div class="err" id="errPS"></div>
                    </div>
                    <div class="form-group">
                        <label for="cmbLoaiTK">Loại tài khoản</label>
                        <select name="cmbLoaiTK" class="form-control" id="cmbLoaiTK">
                            <?php
                            $sql = "SELECT * FROM LoaiTaiKhoan";
                            $result = DataProvider::ExecuteQuery($sql);
                            while ($row1 = mysqli_fetch_array($result)) {
                                if ($row1["MaLoaiTaiKhoan"] == $MaLoaiTaiKhoan)
                                    echo "<option value='" . $row1["MaLoaiTaiKhoan"] . "' selected>" . $row1["TenLoaiTaiKhoan"] . "</option>";
                                else
                                    echo "<option value='" . $row1["MaLoaiTaiKhoan"] . "'>" . $row1["TenLoaiTaiKhoan"] . "</option>";
                            }
                            ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="txtName">Tên Hiển Thị</label>
                        <input type="text" name="txtName" class="form-control" id="txtName" value="<?php echo $row["TenHienThi"]; ?>">
                        <div class="err" id="errName"></div>
                    </div>
                    <div class="form-group">
                        <label for="txtADD">Địa Chỉ</label>
                        <input type="text" name="txtADD" class="form-control" id="txtADD" value="<?php echo $row["DiaChi"]; ?>">
                        <div class="err" id="errADD"></div>
                    </div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer" style="border-bottom-width: 0px;border-top-width: 0px;">
                    <input type="submit" class="btn btn-primary" value="Cập nhật">
                    <button type="button" class="btn btn-danger" id="btnHuy" data-dismiss="modal">
                        Hủy thao tác
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    function KiemTra() {


        var ten = document.getElementById("txtUS");
        var err = document.getElementById("errUS");

        if (ten.value == "") {
            err.value = "Tên Đăng nhập Không được bỏ trống";
            ten.focus();
            return false;
        } else
            err.innerHTML = "";

        ten = document.getElementById("txtPS");
        err = document.getElementById("errPS");

        if (ten.value == "") {
            err.value = "Mật Khẩu Không được bỏ trống";
            ten.focus();
            return false;
        } else
            err.innerHTML = "";
            
        ten = document.getElementById("txtName");
        err = document.getElementById("errName");

        if (ten.value == "") {
            err.value = "Tên hiển thị Không được bỏ trống";
            ten.focus();
            return false;
        } else
            err.innerHTML = "";

        ten = document.getElementById("txtADD");
        err = document.getElementById("errADD");

        if (ten.value == "") {
            err.value = "Địa Chỉ Không được bỏ trống";
            ten.focus();
            return false;
        } else
            err.innerHTML = "";

        return true;
    }
</script>
<script type="text/javascript">
    $(window).on('load', function() {
        $('#myModal').modal('show');
    });
</script>