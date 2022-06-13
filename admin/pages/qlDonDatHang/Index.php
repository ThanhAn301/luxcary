<div id="qlDonDatHang" class="containz">
    <?php
    if (!isset($_GET["a"])) {
    ?>
        <h3 style="text-align:center">QUẢN LÝ ĐƠN ĐẶT HÀNG</h3>
        <hr>
        </hr>
        <?php
    } else {
        if ($_GET["a"] == 1 || $_GET["a"] == 0) {
        ?>
            <h3 style="text-align:center">QUẢN LÝ ĐƠN ĐẶT HÀNG</h3>
            <hr>
            </hr>
    <?php
        }
    }
    ?>
    <?php
    $a = 0;

    if (isset($_GET["a"])) {
        $a = $_GET["a"];
    }
    switch ($a) {
        case 1:
            include "pages/qlDonDatHang/ThemMoi.php";
            include "pages/qlDonDatHang/DanhSach.php";
            break;
        case 2:
            include "pages/qlDonDatHang/ChiTietDonDatHang.php";
            break;
        case 3:
            include "pages/qlDonDatHang/ThemMoiCTHD.php";
            include "pages/qlDonDatHang/ChiTietDonDatHang.php";
            break;
        case 4:
            include "pages/qlDonDatHang/CapNhat.php";
            include "pages/qlDonDatHang/ChiTietDonDatHang.php";
            break;
        case 0:
            include "pages/qlDonDatHang/DanhSach.php";
            break;
        default:
            include "pages/Error.php";
            break;
    }

    ?>

</div>