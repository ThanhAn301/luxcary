<div id="qlTaiKhoan" class="">
    <h3 style="text-align:center">QUẢN LÝ TÀI KHOẢN</h3>
    <hr>
    </hr>
    <?php
    $a = 1;
    if (isset($_GET["a"]))
        $a = $_GET["a"];

    switch ($a) {
        case 1:
            include "pages/qlTaiKhoan/DanhSach.php";
            break;
        case 2:
            include "pages/qlTaiKhoan/ThemMoi.php";
            include "pages/qlTaiKhoan/DanhSach.php";
            break;
        case 3:
            include "pages/qlTaiKhoan/CapNhat.php";
            include "pages/qlTaiKhoan/DanhSach.php";
            break;

        default:
            include "pages/Error.php";
            break;
    }
    ?>

</div>