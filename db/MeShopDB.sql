SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `MeShop`
--
CREATE DATABASE `MeShop` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `MeShop`;

-- --------------------------------------------------------

--
-- Table structure for table `ChiTietDonDatHang`
--

CREATE TABLE IF NOT EXISTS `ChiTietDonDatHang` (
  `MaChiTietDonDatHang` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `SoLuong` int(11) DEFAULT NULL,
  `GiaBan` int(11) DEFAULT NULL,
  `MaDonDatHang` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `MaSanPham` int(11) NOT NULL,
  PRIMARY KEY (`MaChiTietDonDatHang`),
  KEY `fk_ChiTietDonDatHang_DonDatHang1_idx` (`MaDonDatHang`),
  KEY `fk_ChiTietDonDatHang_SanPham1_idx` (`MaSanPham`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `DonDatHang`
--

CREATE TABLE IF NOT EXISTS `DonDatHang` (
  `MaDonDatHang` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `NgayLap` datetime DEFAULT NULL,
  `TongThanhTien` int(11) DEFAULT NULL,
  `MaTaiKhoan` int(11) NOT NULL,
  `MaTinhTrang` int(11) NOT NULL,
  PRIMARY KEY (`MaDonDatHang`),
  KEY `fk_DonDatHang_TaiKhoan1_idx` (`MaTaiKhoan`),
  KEY `fk_DonDatHang_TinhTrang1_idx` (`MaTinhTrang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `HangSanXuat`
--

CREATE TABLE IF NOT EXISTS `HangSanXuat` (
  `MaHangSanXuat` int(11) NOT NULL AUTO_INCREMENT,
  `TenHangSanXuat` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `LogoURL` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `BiXoa` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`MaHangSanXuat`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `HangSanXuat`
--

INSERT INTO `HangSanXuat` (`MaHangSanXuat`, `TenHangSanXuat`, `BiXoa`) VALUES
(1, 'Revell', 0),
(2, 'Lego', 0),
(3, 'Lamaze', 0),
(4, 'vTech', 0),
(5, 'Rastar', 0),
(6, 'Syma', 0);

-- --------------------------------------------------------

--
-- Table structure for table `LoaiSanPham`
--

CREATE TABLE IF NOT EXISTS `LoaiSanPham` (
  `MaLoaiSanPham` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoaiSanPham` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `BiXoa` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`MaLoaiSanPham`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `LoaiSanPham`
--

INSERT INTO `LoaiSanPham` (`MaLoaiSanPham`, `TenLoaiSanPham`, `BiXoa`) VALUES
(1, 'Thú nhồi bông', 0),
(2, 'Đồ chơi nhựa', 0),
(3, 'Đồ chơi điện tử', 0),
(4, 'Điều khiển từ xa', 0),
(5, 'Đồ chơi trí tuệ', 0);

-- --------------------------------------------------------

--
-- Table structure for table `LoaiTaiKhoan`
--

CREATE TABLE IF NOT EXISTS `LoaiTaiKhoan` (
  `MaLoaiTaiKhoan` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoaiTaiKhoan` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaLoaiTaiKhoan`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `LoaiTaiKhoan`
--

INSERT INTO `LoaiTaiKhoan` (`MaLoaiTaiKhoan`, `TenLoaiTaiKhoan`) VALUES
(1, 'User'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `SanPham`
--

CREATE TABLE IF NOT EXISTS `SanPham` (
  `MaSanPham` int(11) NOT NULL AUTO_INCREMENT,
  `TenSanPham` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HinhURL` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `GiaSanPham` int(11) DEFAULT NULL,
  `NgayNhap` datetime DEFAULT NULL,
  `SoLuongNhap` int(11) DEFAULT NULL,
  `SoLuongTon` int(11) DEFAULT NULL,
  `SoLuongBan` int(11) DEFAULT NULL,
  `SoLuotXem` int(11) DEFAULT NULL,
  `XuatXu` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MoTa` text COLLATE utf8_unicode_ci,
  `BiXoa` tinyint(1) DEFAULT '0',
  `MaLoaiSanPham` int(11) NOT NULL,
  `MaHangSanXuat` int(11) NOT NULL,
  PRIMARY KEY (`MaSanPham`),
  KEY `fk_SanPham_LoaiSanPham1_idx` (`MaLoaiSanPham`),
  KEY `fk_SanPham_HangSanXuat1_idx` (`MaHangSanXuat`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=34 ;

--
-- Dumping data for table `SanPham`
--

INSERT INTO `SanPham` (`MaSanPham`, `TenSanPham`, `HinhURL`, `GiaSanPham`, `NgayNhap`, `SoLuongTon`, `SoLuongBan`, `SoLuotXem`, `MoTa`, `BiXoa`, `MaLoaiSanPham`, `MaHangSanXuat`) VALUES
(4, 'Bill D. Beaver', '8568c7f31076735d806a9efcd8615e3f.jfif', 160000, '2022-05-25 00:00:00', 14, 9, 25, 'Hải lý bằng bông mịn, đẹp, dễ thương', 0, 1, 3),
(5, 'Captain Calamari', '8568c7f31076735d806a9efcd8615e3f.jfif', 180000, '2022-05-01 00:00:00', 14, 6, 4, 'Bạch tuộc biển', 0, 1, 3),
(7, 'Elephantunes', '8568c7f31076735d806a9efcd8615e3f.jfif', 480000, '2022-05-12 00:00:00', 25, 2, 9, 'Voi bằng bông, hồng xì tin...', 0, 1, 3),
(8, 'Freddie the Firefly', '8568c7f31076735d806a9efcd8615e3f.jfif', 300000, '2022-05-03 00:00:00', 30, 0, 8, 'Bướm nhồi bông', 0, 1, 3),
(9, 'Supper Mario', '8568c7f31076735d806a9efcd8615e3f.jfif', 380000, '2022-01-01 00:00:00', 24, 6, 14, 'Bộ lấp áp Lego trò chơi Mario', 0, 5, 2),
(10, 'Nasa Academy Space', '8568c7f31076735d806a9efcd8615e3f.jfif', 220000, '2022-05-15 00:00:00', 28, 7, 8, 'Tàu con thoi của Nasa', 0, 3, 1),
(11, 'Lamborghini Revention', '8568c7f31076735d806a9efcd8615e3f.jfif', 260000, '2022-05-01 00:00:00', 38, 3, 38, 'Siêu xe Lamborghini Revention', 0, 3, 1),
(12, 'Camaro SS', '8568c7f31076735d806a9efcd8615e3f.jfif', 260000, '2022-05-02 00:00:00', 20, 0, 0, 'Xe đua Camaro SS', 0, 3, 1),
(13, 'Pond Motion Gym', '8568c7f31076735d806a9efcd8615e3f.jfif', 920000, '2022-05-04 00:00:00', 10, 2, 14, 'Niệm lót cho trẻ em', 0, 1, 3),
(14, 'Stacking Rings', '8568c7f31076735d806a9efcd8615e3f.jfif', 240000, '2022-05-25 00:00:00', 5, 5, 1, 'Vòng xoay kỳ thú, kích thích sự tò mò của trẻ', 0, 1, 3),
(15, 'Octivity Time', '8568c7f31076735d806a9efcd8615e3f.jfif', 270000, '2022-05-27 00:00:00', 19, 3, 3, 'Bé mặt trời xanh', 0, 1, 3),
(16, 'Mittens the Kitten', '8568c7f31076735d806a9efcd8615e3f.jfif', 190000, '2022-05-13 00:00:00', 50, 3, 5, 'Chú mèo ngộ nghĩnh', 0, 1, 3),
(17, 'Feel Me Fish', '8568c7f31076735d806a9efcd8615e3f.jfif', 180000, '2022-05-15 00:00:00', 60, 3, 2, 'Chú cá vàng đa sắc', 0, 1, 3),
(18, 'Huey the Hedgehog', '8568c7f31076735d806a9efcd8615e3f.jfif', 200000, '2022-05-14 00:00:00', 30, 30, 22, 'Nhiếm bảy màu, mang đến sự may mắn cho bé', 0, 1, 3),
(19, 'Neat-Oh!', '8568c7f31076735d806a9efcd8615e3f.jfif', 110000, '2022-05-12 00:00:00', 19, 13, 24, 'Túi đồ chơi xây dựng công viên của Lego', 0, 5, 2),
(20, 'Ninjago 2172', '8568c7f31076735d806a9efcd8615e3f.jfif', 160000, '2022-05-12 00:00:00', 20, 12, 13, 'Bộ xếp hình Lego thời Ai Cập cổ đại', 0, 5, 2),
(21, 'Mexican', '8568c7f31076735d806a9efcd8615e3f.jfif', 140000, '2022-05-17 00:00:00', 35, 12, 12, 'Bộ xếp hình Lego nhạc công Mehico', 0, 5, 2),
(22, 'Star Wars', '8568c7f31076735d806a9efcd8615e3f.jfif', 500000, '2022-05-05 00:00:00', 24, 28, 30, 'Bộ xếp hình Lego phi thuyền trong cuộc chiến tranh giữa các vì sao', 0, 5, 2),
(23, 'City Park Cafe 3061', '8568c7f31076735d806a9efcd8615e3f.jfif', 950000, '2022-05-07 00:00:00', 30, 2, 24, 'Bộ xếp hình xây dựng shop cafe trong thành phố ', 0, 5, 2),
(24, 'Bright Lights Ball', '8568c7f31076735d806a9efcd8615e3f.jfif', 150000, '2022-05-08 00:00:00', 39, 2, 6, 'Quả cầu thông minh', 0, 2, 4),
(25, 'Baby''s Laptop', '8568c7f31076735d806a9efcd8615e3f.jfif', 240000, '2022-05-07 00:00:00', 38, 2, 4, 'Laptop thông tin của trẻ em, giúp trẻ phát triển tư duy trí tuệ', 0, 2, 4),
(26, 'Toot Driver Garage', '8568c7f31076735d806a9efcd8615e3f.jfif', 620000, '2022-05-07 00:00:00', 20, 12, 30, 'Bãi đỗ xe trong thành phố, sẽ giúp bé tự điều hành việc hoạt động của một bãi đỗ xe hiện đại trong thành phố', 0, 2, 4),
(27, 'Emergency Vehicles (3-Pack)', '8568c7f31076735d806a9efcd8615e3f.jfif', 223000, '2022-05-02 00:00:00', 20, 12, 3, 'Bộ sản phẩm 3 xe đồ chơi, đẹp, dễ thương và an toàn với trẻ', 0, 2, 4),
(28, 'Lamborghini Murcielago', '8568c7f31076735d806a9efcd8615e3f.jfif', 300000, '2022-05-01 00:00:00', 10, 1, 2, 'Xe điều khiển từ xa Lamborghini', 0, 4, 5),
(29, 'Rover Sport HSE', '8568c7f31076735d806a9efcd8615e3f.jfif', 320000, '2022-05-30 00:00:00', 10, 3, 2, 'Xe điều khiển Rover, vượt mọi địa hình, sức mạnh của trâu', 0, 4, 5),
(30, 'Apache Helicopter', '8568c7f31076735d806a9efcd8615e3f.jfif', 625000, '2022-05-01 00:00:00', 4, 2, 1, 'Máy bay chiến đâu siêu đa năng Apache', 0, 4, 6),
(31, 'Micro Helicopter', '8568c7f31076735d806a9efcd8615e3f.jfif', 560000, '2022-05-05 00:00:00', 2, 6, 5, 'Máy bay lên thẳng đa dụng', 0, 4, 6),
(32, 'Micro Chinook', '8568c7f31076735d806a9efcd8615e3f.jfif', 410000, '2022-05-06 00:00:00', 3, 0, 0, 'Máy bay trực thăng vận tải, đa dụng, có thể vận chuyển được xe tăng', 0, 4, 6),
(33, 'X1 - 01', '8568c7f31076735d806a9efcd8615e3f.jfif', 600000, '2022-05-06 00:00:00', 4, 0, 15, 'Máy bay lên thẳng 4 cánh quạt, đa dụng và dễ dàng điều khiển vượt qua mọi địa hình', 0, 4, 6);

-- --------------------------------------------------------

--
-- Table structure for table `TaiKhoan`
--

CREATE TABLE IF NOT EXISTS `TaiKhoan` (
  `MaTaiKhoan` int(11) NOT NULL AUTO_INCREMENT,
  `TenDangNhap` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MatKhau` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TenHienThi` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DiaChi` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DienThoai` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `Email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `BiXoa` tinyint(1) DEFAULT '0',
  `MaLoaiTaiKhoan` int(11) NOT NULL,
  PRIMARY KEY (`MaTaiKhoan`),
  KEY `fk_TaiKhoan_LoaiTaiKhoan_idx` (`MaLoaiTaiKhoan`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `TaiKhoan`
--

INSERT INTO `TaiKhoan` (`MaTaiKhoan`, `TenDangNhap`, `MatKhau`, `TenHienThi`, `DiaChi`, `DienThoai`, `Email`, `BiXoa`, `MaLoaiTaiKhoan`) VALUES
(1, 'admin', 'admin', 'Admin website', 'Me Shop', '0909123456', 'admin@meshop.vn', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `TinhTrang`
--

CREATE TABLE IF NOT EXISTS `TinhTrang` (
  `MaTinhTrang` int(11) NOT NULL AUTO_INCREMENT,
  `TenTinhTrang` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaTinhTrang`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `TinhTrang`
--

INSERT INTO `TinhTrang` (`MaTinhTrang`, `TenTinhTrang`) VALUES
(1, 'Đặt hàng'),
(2, 'Đang giao hàng'),
(3, 'Thanh toán'),
(4, 'Hủy');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ChiTietDonDatHang`
--
ALTER TABLE `ChiTietDonDatHang`
  ADD CONSTRAINT `fk_ChiTietDonDatHang_DonDatHang1` FOREIGN KEY (`MaDonDatHang`) REFERENCES `DonDatHang` (`MaDonDatHang`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ChiTietDonDatHang_SanPham1` FOREIGN KEY (`MaSanPham`) REFERENCES `SanPham` (`MaSanPham`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `DonDatHang`
--
ALTER TABLE `DonDatHang`
  ADD CONSTRAINT `fk_DonDatHang_TaiKhoan1` FOREIGN KEY (`MaTaiKhoan`) REFERENCES `TaiKhoan` (`MaTaiKhoan`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_DonDatHang_TinhTrang1` FOREIGN KEY (`MaTinhTrang`) REFERENCES `TinhTrang` (`MaTinhTrang`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `SanPham`
--
ALTER TABLE `SanPham`
  ADD CONSTRAINT `fk_SanPham_HangSanXuat1` FOREIGN KEY (`MaHangSanXuat`) REFERENCES `HangSanXuat` (`MaHangSanXuat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_SanPham_LoaiSanPham1` FOREIGN KEY (`MaLoaiSanPham`) REFERENCES `LoaiSanPham` (`MaLoaiSanPham`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `TaiKhoan`
--
ALTER TABLE `TaiKhoan`
  ADD CONSTRAINT `fk_TaiKhoan_LoaiTaiKhoan` FOREIGN KEY (`MaLoaiTaiKhoan`) REFERENCES `LoaiTaiKhoan` (`MaLoaiTaiKhoan`) ON DELETE NO ACTION ON UPDATE NO ACTION;
