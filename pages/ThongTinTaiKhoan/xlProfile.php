<?php
session_start();
include "../../lib/DataProvider.php";

if (isset($_POST["us"])) {
    $us = $_POST["us"];
    $ps = $_POST["ps"];
    $name = $_POST["txtName"];
    $birth = $_POST["txtDate"];
    $add = $_POST["txtDiaChi"];

    $sql = 'UPDATE TaiKhoan SET MatKhau = "' . $ps . '", TenHienThi = "' . $name . '", DiaChi = "' . $add . '", NgaySinh = "' . $birth . '" WHERE TenDangNhap = "' . $us . '"';

    DataProvider::ExecuteQuery($sql);

    $sql = "SELECT MaTaiKhoan FROM TaiKhoan WHERE TenDangNhap='$us' AND MatKhau='$ps'";
    $result = DataProvider::ExecuteQuery($sql);
    $row = mysqli_fetch_array($result);

    $_SESSION["MaTaiKhoan"] = $row["MaTaiKhoan"];
    $_SESSION["MaLoaiTaiKhoan"] = 1;
    $_SESSION["TenHienThi"] = $name;

    DataProvider::ChangeURL("../../index.php");
} else {
    DataProvider::ChangeURL("../../index.php?a=404");
}
