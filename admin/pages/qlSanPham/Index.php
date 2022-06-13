<div id="qlSanPham" class="">
    <h3 style="text-align:center">QUẢN LÝ SẢN PHẨM</h3>
    <hr>
    </hr>
    <?php
    $a = 1;
    if (isset($_GET["a"]))
        $a = $_GET["a"];

    switch ($a) {
        case 1:
            include "pages/qlSanPham/DanhSach.php";
            break;
        case 2:
            include "pages/qlSanPham/ThemMoi.php";
            include "pages/qlSanPham/DanhSach.php";
            break;
        case 3:
            include "pages/qlSanPham/CapNhat.php";
            include "pages/qlSanPham/DanhSach.php";
            break;

        default:
            include "pages/Error.php";
            break;
    }
    ?>

</div>