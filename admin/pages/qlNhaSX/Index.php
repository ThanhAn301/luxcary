<div id="qlNhaSX" class="containz">
    <h3 style="text-align:center">Quản lý hãng sản xuất</h3>
    <?php
    $a = 1;
    if (isset($_GET["a"]))
        $a = $_GET["a"];

    switch ($a) {
        case 1:
            include "pages/qlNhaSX/DanhSach.php";
            break;
        case 2:
            include "pages/qlNhaSX/ThemMoi.php";
            include "pages/qlNhaSX/DanhSach.php";
            break;
        case 3:
            include "pages/qlNhaSX/CapNhat.php";
            include "pages/qlNhaSX/DanhSach.php";
            break;
    
        default:
            include "pages/Error.php";
            break;
    }
    ?>

</div>