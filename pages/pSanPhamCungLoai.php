<div class="same-product-container">
    <h2>Sản phẩm cùng loại</h2>
    <hr></hr>
    <div class="same-product-list">
        <div class="card-wrapper">
            <?php
            if (isset($_GET["id"]))
                $id = $_GET["id"];
            else
                DataProvider::ChangeURL("index.php?a=404");

            $sql = "SELECT * FROM SanPham WHERE BiXoa = 0 AND MaLoaiSanPham = $id ";
            $result = DataProvider::ExecuteQuery($sql);
            while ($row = mysqli_fetch_array($result)) {
            ?>
                <div class="card" onclick='location.href=" index.php?a=4&id=<?php echo $row["MaSanPham"]; ?>";'>
                    <img src="image/<?php echo $row["HinhURL"]; ?>">
                    <h6><?php echo $row["TenSanPham"]; ?></h6>
                    <p class="price"><?php echo number_format($row["GiaSanPham"]); ?>₫</p>
                </div>
            <?php
            }
            ?>

        </div>
    </div>
</div>