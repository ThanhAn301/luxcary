<div id="qlLoaiSanPham" class="containz">
    <h3 style="text-align:center">Quản lý Loại Sản Phẩm</h3>
    <?php
    $a = 1;
    if (isset($_GET["a"]))
        $a = $_GET["a"];

    switch ($a) {
        case 1:
            include "pages/qlLoaiSanPham/DanhSach.php";
            break;
        case 2:
            include "pages/qlLoaiSanPham/ThemMoi.php";
            include "pages/qlLoaiSanPham/DanhSach.php";
            break;
        case 3:
            include "pages/qlLoaiSanPham/CapNhat.php";
            include "pages/qlLoaiSanPham/DanhSach.php";
            break;
    
        default:
            include "pages/Error.php";
            break;
    }
    ?>

</div>