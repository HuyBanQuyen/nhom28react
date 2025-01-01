-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 01, 2025 lúc 12:49 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `congthucnauan`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `anhminhhoa`
--

CREATE TABLE `anhminhhoa` (
  `MaAnh` int(11) NOT NULL,
  `MaHuongDan` int(11) NOT NULL,
  `DuongDanAnh` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `anhminhhoa`
--

INSERT INTO `anhminhhoa` (`MaAnh`, `MaHuongDan`, `DuongDanAnh`) VALUES
(5, 4, 'uploads\\baiviet\\b1-1.png'),
(6, 4, 'uploads\\baiviet\\b1-2.png'),
(7, 5, 'uploads\\baiviet\\b2-1.png'),
(8, 5, 'uploads\\baiviet\\b2-2.png'),
(9, 6, 'uploads\\baiviet\\b3-1.png'),
(177, 176, 'uploads/baiviet/buocImages_0_0-1735382354632-670336608.jpg'),
(178, 176, 'uploads/baiviet/buocImages_0_1-1735382354632-120814339.jpg'),
(179, 177, 'uploads/baiviet/buocImages_1_0-1735382354632-722698217.jpg'),
(180, 177, 'uploads/baiviet/buocImages_1_1-1735382354633-115045634.jpg'),
(181, 178, 'uploads/baiviet/buocImages_2_0-1735382354633-350373625.jpg'),
(182, 179, 'uploads/baiviet/buocImages_0_0-1735382817431-620803422.jpg'),
(183, 179, 'uploads/baiviet/buocImages_0_1-1735382817431-195684660.jpg'),
(184, 180, 'uploads/baiviet/buocImages_1_0-1735382817432-126151866.jpg'),
(185, 181, 'uploads/baiviet/buocImages_0_0-1735382980430-488032619.jpg'),
(186, 181, 'uploads/baiviet/buocImages_0_1-1735382980431-872084459.jpg'),
(187, 182, 'uploads/baiviet/buocImages_1_0-1735382980432-689059028.jpg'),
(188, 182, 'uploads/baiviet/buocImages_1_1-1735382980432-947430446.jpg'),
(189, 182, 'uploads/baiviet/buocImages_1_2-1735382980433-611737474.jpg'),
(190, 183, 'uploads/baiviet/buocImages_0_0-1735383185175-721157161.jpg'),
(191, 183, 'uploads/baiviet/buocImages_0_1-1735383185175-445266645.jpg'),
(192, 184, 'uploads/baiviet/buocImages_1_0-1735383185175-837095633.jpg'),
(193, 184, 'uploads/baiviet/buocImages_1_1-1735383185175-649326802.jpg'),
(194, 185, 'uploads/baiviet/buocImages_2_0-1735383185175-488047248.jpg'),
(195, 185, 'uploads/baiviet/buocImages_2_1-1735383185176-384227600.jpg'),
(196, 186, 'uploads/baiviet/buocImages_0_0-1735383435216-259812027.jpg'),
(197, 186, 'uploads/baiviet/buocImages_0_1-1735383435216-915956225.jpg'),
(198, 187, 'uploads/baiviet/buocImages_1_0-1735383435216-161951364.jpg'),
(199, 187, 'uploads/baiviet/buocImages_1_1-1735383435217-886986032.jpg'),
(200, 188, 'uploads/baiviet/buocImages_2_0-1735383435217-412156897.jpg'),
(201, 188, 'uploads/baiviet/buocImages_2_1-1735383435217-741617705.jpg'),
(202, 189, 'uploads/baiviet/buocImages_0_0-1735383633021-477658482.jpg'),
(203, 189, 'uploads/baiviet/buocImages_0_1-1735383633022-77421477.jpg'),
(204, 190, 'uploads/baiviet/buocImages_1_0-1735383633022-136496817.jpg'),
(205, 191, 'uploads/baiviet/buocImages_2_0-1735383633022-827873336.jpg'),
(206, 191, 'uploads/baiviet/buocImages_2_1-1735383633022-59836983.jpg'),
(207, 192, 'uploads/baiviet/buocImages_0_0-1735383830125-685841785.jpg'),
(208, 192, 'uploads/baiviet/buocImages_0_1-1735383830125-464793038.jpg'),
(209, 193, 'uploads/baiviet/buocImages_1_0-1735383830125-281754800.jpg'),
(210, 193, 'uploads/baiviet/buocImages_1_1-1735383830125-876786097.jpg'),
(211, 194, 'uploads/baiviet/buocImages_0_0-1735384163492-186487265.jpg'),
(212, 194, 'uploads/baiviet/buocImages_0_1-1735384163493-925418927.jpg'),
(213, 195, 'uploads/baiviet/buocImages_1_0-1735384163493-698284202.jpg'),
(214, 195, 'uploads/baiviet/buocImages_1_1-1735384163493-38466733.jpg'),
(215, 196, 'uploads/baiviet/buocImages_2_0-1735384163493-948194300.jpg'),
(216, 196, 'uploads/baiviet/buocImages_2_1-1735384163493-128243310.jpg'),
(217, 197, 'uploads/baiviet/buocImages_0_0-1735384606093-438843608.jpg'),
(218, 197, 'uploads/baiviet/buocImages_0_1-1735384606094-294025371.jpg'),
(219, 198, 'uploads/baiviet/buocImages_1_0-1735384606094-467243230.jpg'),
(220, 198, 'uploads/baiviet/buocImages_1_1-1735384606094-935005763.jpg'),
(221, 199, 'uploads/baiviet/buocImages_2_0-1735384606095-785313287.jpg'),
(222, 199, 'uploads/baiviet/buocImages_2_1-1735384606095-894507976.jpg'),
(223, 200, 'uploads/baiviet/buocImages_0_0-1735384819964-332847046.jpg'),
(224, 200, 'uploads/baiviet/buocImages_0_1-1735384819964-783242259.jpg'),
(225, 201, 'uploads/baiviet/buocImages_1_0-1735384819964-20746660.jpg'),
(226, 201, 'uploads/baiviet/buocImages_1_1-1735384819964-749055130.jpg'),
(227, 202, 'uploads/baiviet/buocImages_0_0-1735385058713-129201822.jpg'),
(228, 202, 'uploads/baiviet/buocImages_0_1-1735385058713-596856032.jpg'),
(229, 203, 'uploads/baiviet/buocImages_1_0-1735385058713-633126153.jpg'),
(230, 203, 'uploads/baiviet/buocImages_1_1-1735385058714-722272338.jpg'),
(231, 204, 'uploads/baiviet/buocImages_2_0-1735385058714-925321574.jpg'),
(232, 204, 'uploads/baiviet/buocImages_2_1-1735385058714-420691281.jpg'),
(233, 205, 'uploads/baiviet/buocImages_0_0-1735385624222-635139347.jpg'),
(234, 205, 'uploads/baiviet/buocImages_0_1-1735385624223-486960898.jpg'),
(235, 206, 'uploads/baiviet/buocImages_1_0-1735385624223-575702465.jpg'),
(236, 206, 'uploads/baiviet/buocImages_1_1-1735385624223-431787432.jpg'),
(237, 207, 'uploads/baiviet/buocImages_0_0-1735385824522-618219298.jpg'),
(238, 207, 'uploads/baiviet/buocImages_0_1-1735385824523-703369559.jpg'),
(239, 208, 'uploads/baiviet/buocImages_1_0-1735385824523-45120255.jpg'),
(240, 208, 'uploads/baiviet/buocImages_1_1-1735385824523-882100984.jpg'),
(241, 209, 'uploads/baiviet/buocImages_0_0-1735385999614-755456522.jpg'),
(242, 209, 'uploads/baiviet/buocImages_0_1-1735385999614-455788379.jpg'),
(243, 210, 'uploads/baiviet/buocImages_1_0-1735385999614-647806652.jpg'),
(244, 210, 'uploads/baiviet/buocImages_1_1-1735385999614-642731483.jpg'),
(245, 211, 'uploads/baiviet/buocImages_0_0-1735386204202-384596992.jpg'),
(246, 211, 'uploads/baiviet/buocImages_0_1-1735386204202-705631073.jpg'),
(247, 212, 'uploads/baiviet/buocImages_1_0-1735386204202-664713441.jpg'),
(248, 212, 'uploads/baiviet/buocImages_1_1-1735386204202-944879763.jpg'),
(249, 213, 'uploads/baiviet/buocImages_2_0-1735386204203-485101242.jpg'),
(250, 213, 'uploads/baiviet/buocImages_2_1-1735386204203-696561009.jpg'),
(251, 214, 'uploads/baiviet/buocImages_0_0-1735386350397-49929319.jpg'),
(252, 214, 'uploads/baiviet/buocImages_0_1-1735386350397-855620274.jpg'),
(253, 215, 'uploads/baiviet/buocImages_1_0-1735386350398-692503977.jpg'),
(254, 215, 'uploads/baiviet/buocImages_1_1-1735386350398-107381635.jpg'),
(255, 216, 'uploads/baiviet/buocImages_0_0-1735386512857-198444267.jpg'),
(256, 216, 'uploads/baiviet/buocImages_0_1-1735386512857-738339847.jpg'),
(257, 217, 'uploads/baiviet/buocImages_1_0-1735386512857-713942197.jpg'),
(258, 217, 'uploads/baiviet/buocImages_1_1-1735386512857-295399577.jpg'),
(259, 218, 'uploads/baiviet/buocImages_0_0-1735386633659-180207198.jpg'),
(260, 218, 'uploads/baiviet/buocImages_0_1-1735386633659-705677445.jpg'),
(261, 219, 'uploads/baiviet/buocImages_1_0-1735386633659-772685215.jpg'),
(262, 219, 'uploads/baiviet/buocImages_1_1-1735386633659-515650029.jpg'),
(263, 220, 'uploads/baiviet/buocImages_0_0-1735386808191-445926257.jpg'),
(264, 220, 'uploads/baiviet/buocImages_0_1-1735386808192-302107971.jpg'),
(265, 221, 'uploads/baiviet/buocImages_1_0-1735386808192-984984370.jpg'),
(266, 221, 'uploads/baiviet/buocImages_1_1-1735386808192-854291370.jpg'),
(267, 222, 'uploads/baiviet/buocImages_0_0-1735387506529-35958678.jpg'),
(268, 222, 'uploads/baiviet/buocImages_0_1-1735387506529-428740498.jpg'),
(269, 223, 'uploads/baiviet/buocImages_1_0-1735387506530-582975739.jpg'),
(270, 223, 'uploads/baiviet/buocImages_1_1-1735387506530-578263691.jpg'),
(271, 224, 'uploads/baiviet/buocImages_0_0-1735387709140-962402983.jpg'),
(272, 224, 'uploads/baiviet/buocImages_0_1-1735387709140-345710703.jpg'),
(273, 225, 'uploads/baiviet/buocImages_1_0-1735387709140-724384915.jpg'),
(274, 225, 'uploads/baiviet/buocImages_1_1-1735387709140-195043422.jpg'),
(275, 226, 'uploads/baiviet/buocImages_0_0-1735387889130-259460574.jpg'),
(276, 226, 'uploads/baiviet/buocImages_0_1-1735387889130-883912664.jpg'),
(277, 227, 'uploads/baiviet/buocImages_1_0-1735387889130-677152044.jpg'),
(278, 227, 'uploads/baiviet/buocImages_1_1-1735387889130-861046479.jpg'),
(279, 228, 'uploads/baiviet/buocImages_0_0-1735388112258-514805293.jpg'),
(280, 228, 'uploads/baiviet/buocImages_0_1-1735388112258-959566819.jpg'),
(281, 229, 'uploads/baiviet/buocImages_1_0-1735388112258-64041781.jpg'),
(282, 229, 'uploads/baiviet/buocImages_1_1-1735388112258-319615090.jpg'),
(283, 230, 'uploads/baiviet/buocImages_2_0-1735388112258-702422613.jpg'),
(284, 230, 'uploads/baiviet/buocImages_2_1-1735388112258-443169901.jpg'),
(285, 231, 'uploads/baiviet/buocImages_0_0-1735388279195-882986925.jpg'),
(286, 231, 'uploads/baiviet/buocImages_0_1-1735388279195-544146041.jpg'),
(287, 232, 'uploads/baiviet/buocImages_1_0-1735388279196-537296281.jpg'),
(288, 232, 'uploads/baiviet/buocImages_1_1-1735388279196-81396828.jpg'),
(289, 233, 'uploads/baiviet/buocImages_0_0-1735388381862-237406938.jpg'),
(290, 233, 'uploads/baiviet/buocImages_0_1-1735388381862-196794105.jpg'),
(291, 234, 'uploads/baiviet/buocImages_1_0-1735388381862-803068848.jpg'),
(292, 234, 'uploads/baiviet/buocImages_1_1-1735388381862-907934200.jpg'),
(293, 235, 'uploads/baiviet/buocImages_0_0-1735388772899-241612489.jpg'),
(294, 235, 'uploads/baiviet/buocImages_0_1-1735388772899-806219497.jpg'),
(295, 236, 'uploads/baiviet/buocImages_1_0-1735388772899-400425384.jpg'),
(296, 236, 'uploads/baiviet/buocImages_1_1-1735388772899-304608452.jpg'),
(297, 237, 'uploads/baiviet/buocImages_0_0-1735388964208-363885311.jpg'),
(298, 237, 'uploads/baiviet/buocImages_0_1-1735388964209-198618563.jpg'),
(299, 238, 'uploads/baiviet/buocImages_1_0-1735388964209-439524546.jpg'),
(300, 238, 'uploads/baiviet/buocImages_1_1-1735388964209-627656327.jpg'),
(301, 240, 'uploads/baiviet/buocImages_0_0-1735469137813-205917363.jpg'),
(302, 240, 'uploads/baiviet/buocImages_0_1-1735469137813-680126627.jpg'),
(303, 241, 'uploads/baiviet/buocImages_1_0-1735469137814-253707153.jpg'),
(304, 241, 'uploads/baiviet/buocImages_1_1-1735469137814-907002214.jpg'),
(305, 242, 'uploads/baiviet/buocImages_2_0-1735469137814-780026249.jpg'),
(306, 242, 'uploads/baiviet/buocImages_2_1-1735469137814-581150857.jpg'),
(307, 243, 'uploads/baiviet/buocImages_0_0-1735469721578-816450998.jpg'),
(308, 243, 'uploads/baiviet/buocImages_0_1-1735469721578-846064696.jpg'),
(309, 244, 'uploads/baiviet/buocImages_1_0-1735469721579-362623850.jpg'),
(310, 244, 'uploads/baiviet/buocImages_1_1-1735469721579-662657759.jpg'),
(311, 245, 'uploads/baiviet/buocImages_2_0-1735469721580-765905284.jpg'),
(312, 245, 'uploads/baiviet/buocImages_2_1-1735469721580-539817083.jpg'),
(313, 246, 'uploads/baiviet/buocImages_0_0-1735469921550-762949244.jpg'),
(314, 246, 'uploads/baiviet/buocImages_0_1-1735469921550-159772814.jpg'),
(315, 246, 'uploads/baiviet/buocImages_0_2-1735469921550-912990094.jpg'),
(316, 247, 'uploads/baiviet/buocImages_1_0-1735469921550-349225711.jpg'),
(317, 247, 'uploads/baiviet/buocImages_1_1-1735469921550-31388846.jpg'),
(318, 248, 'uploads/baiviet/buocImages_2_0-1735469921550-465355533.jpg'),
(319, 248, 'uploads/baiviet/buocImages_2_1-1735469921551-336821694.jpg'),
(320, 249, 'uploads/baiviet/buocImages_0_0-1735470105183-843442922.jpg'),
(321, 249, 'uploads/baiviet/buocImages_0_1-1735470105183-76176321.jpg'),
(322, 249, 'uploads/baiviet/buocImages_0_2-1735470105184-390954450.jpg'),
(323, 250, 'uploads/baiviet/buocImages_1_0-1735470105184-547436116.jpg'),
(324, 250, 'uploads/baiviet/buocImages_1_1-1735470105184-448774410.jpg'),
(325, 251, 'uploads/baiviet/buocImages_0_0-1735470322008-981836819.jpg'),
(326, 251, 'uploads/baiviet/buocImages_0_1-1735470322008-2447635.jpg'),
(327, 252, 'uploads/baiviet/buocImages_1_0-1735470322008-304187502.jpg'),
(328, 252, 'uploads/baiviet/buocImages_1_1-1735470322008-444895296.jpg'),
(329, 252, 'uploads/baiviet/buocImages_1_2-1735470322008-61863327.jpg'),
(330, 253, 'uploads/baiviet/buocImages_2_0-1735470322009-193337358.jpg'),
(331, 253, 'uploads/baiviet/buocImages_2_1-1735470322009-366855310.jpg'),
(332, 254, 'uploads/baiviet/buocImages_0_0-1735470494230-900011139.jpg'),
(333, 254, 'uploads/baiviet/buocImages_0_1-1735470494230-437787599.jpg'),
(334, 255, 'uploads/baiviet/buocImages_1_0-1735470494231-51613403.jpg'),
(335, 255, 'uploads/baiviet/buocImages_1_1-1735470494231-158525149.jpg'),
(336, 256, 'uploads/baiviet/buocImages_0_0-1735470708507-3695954.jpg'),
(337, 256, 'uploads/baiviet/buocImages_0_1-1735470708507-340607713.jpg'),
(338, 257, 'uploads/baiviet/buocImages_1_0-1735470708507-323094490.jpg'),
(339, 257, 'uploads/baiviet/buocImages_1_1-1735470708507-524575414.jpg'),
(340, 257, 'uploads/baiviet/buocImages_1_2-1735470708507-878847146.jpg'),
(341, 258, 'uploads/baiviet/buocImages_2_0-1735470708507-112298903.jpg'),
(342, 258, 'uploads/baiviet/buocImages_2_1-1735470708508-956509117.jpg'),
(343, 259, 'uploads/baiviet/buocImages_0_0-1735470890221-305013381.jpg'),
(344, 259, 'uploads/baiviet/buocImages_0_1-1735470890221-846922578.jpg'),
(345, 260, 'uploads/baiviet/buocImages_1_0-1735470890221-969386629.jpg'),
(346, 260, 'uploads/baiviet/buocImages_1_1-1735470890221-481177850.jpg'),
(347, 260, 'uploads/baiviet/buocImages_1_2-1735470890221-387585387.jpg'),
(348, 261, 'uploads/baiviet/buocImages_2_0-1735470890221-71518784.jpg'),
(349, 261, 'uploads/baiviet/buocImages_2_1-1735470890221-945728125.jpg'),
(350, 262, 'uploads/baiviet/buocImages_0_0-1735471120061-913384646.jpg'),
(351, 262, 'uploads/baiviet/buocImages_0_1-1735471120062-325450554.jpg'),
(352, 263, 'uploads/baiviet/buocImages_1_0-1735471120062-542063497.jpg'),
(353, 263, 'uploads/baiviet/buocImages_1_1-1735471120062-323577946.jpg'),
(354, 264, 'uploads/baiviet/buocImages_0_0-1735471253288-659200798.jpg'),
(355, 264, 'uploads/baiviet/buocImages_0_1-1735471253288-420164430.jpg'),
(356, 265, 'uploads/baiviet/buocImages_1_0-1735471253288-853434219.jpg'),
(357, 265, 'uploads/baiviet/buocImages_1_1-1735471253288-953210744.jpg'),
(358, 266, 'uploads/baiviet/buocImages_0_0-1735471422203-738853119.jpg'),
(359, 266, 'uploads/baiviet/buocImages_0_1-1735471422204-62390188.jpg'),
(360, 267, 'uploads/baiviet/buocImages_1_0-1735471422204-721159344.jpg'),
(361, 267, 'uploads/baiviet/buocImages_1_1-1735471422204-844669632.jpg'),
(362, 268, 'uploads/baiviet/buocImages_0_0-1735471567319-606965974.jpg'),
(363, 268, 'uploads/baiviet/buocImages_0_1-1735471567319-177793075.jpg'),
(364, 269, 'uploads/baiviet/buocImages_1_0-1735471567319-701351049.jpg'),
(365, 269, 'uploads/baiviet/buocImages_1_1-1735471567319-713274498.jpg'),
(366, 270, 'uploads/baiviet/buocImages_2_0-1735471567319-508005920.jpg'),
(367, 270, 'uploads/baiviet/buocImages_2_1-1735471567321-999416327.jpg'),
(368, 271, 'uploads/baiviet/buocImages_0_0-1735471714586-820673063.jpg'),
(369, 271, 'uploads/baiviet/buocImages_0_1-1735471714586-720359069.jpg'),
(370, 272, 'uploads/baiviet/buocImages_1_0-1735471714587-196845334.jpg'),
(371, 272, 'uploads/baiviet/buocImages_1_1-1735471714587-604323276.jpg'),
(372, 273, 'uploads/baiviet/buocImages_2_0-1735471714587-343694448.jpg'),
(373, 273, 'uploads/baiviet/buocImages_2_1-1735471714587-589442892.jpg'),
(375, 276, 'uploads/baiviet/buocImages_0_0-1735620405144-25081098.jpg'),
(376, 276, 'uploads/baiviet/buocImages_0_1-1735620405145-642264684.jpg'),
(377, 277, 'uploads/baiviet/buocImages_1_0-1735620405145-901187571.jpg'),
(378, 277, 'uploads/baiviet/buocImages_1_1-1735620405145-109754726.jpg'),
(379, 278, 'uploads/baiviet/buocImages_2_0-1735620405146-790123247.jpg'),
(380, 278, 'uploads/baiviet/buocImages_2_1-1735620405146-878545787.jpg'),
(381, 279, 'uploads/baiviet/buocImages_0_0-1735620619992-236633701.jpg'),
(382, 279, 'uploads/baiviet/buocImages_0_1-1735620619992-895636126.jpg'),
(383, 280, 'uploads/baiviet/buocImages_1_0-1735620619995-874032858.jpg'),
(384, 280, 'uploads/baiviet/buocImages_1_1-1735620619995-348732876.jpg'),
(385, 281, 'uploads/baiviet/buocImages_0_0-1735620780394-285714569.jpg'),
(386, 281, 'uploads/baiviet/buocImages_0_1-1735620780395-73503233.jpg'),
(387, 282, 'uploads/baiviet/buocImages_1_0-1735620780396-818714445.jpg'),
(388, 282, 'uploads/baiviet/buocImages_1_1-1735620780396-692963296.jpg'),
(389, 282, 'uploads/baiviet/buocImages_1_2-1735620780396-325867081.jpg'),
(390, 283, 'uploads/baiviet/buocImages_2_0-1735620780397-8317337.jpg'),
(391, 283, 'uploads/baiviet/buocImages_2_1-1735620780400-414063004.jpg'),
(392, 284, 'uploads/baiviet/buocImages_0_0-1735620923521-563846679.jpg'),
(393, 284, 'uploads/baiviet/buocImages_0_1-1735620923521-836217224.jpg'),
(394, 285, 'uploads/baiviet/buocImages_1_0-1735620923522-922352274.jpg'),
(395, 285, 'uploads/baiviet/buocImages_1_1-1735620923522-767371177.jpg'),
(396, 286, 'uploads/baiviet/buocImages_0_0-1735621074931-88339390.jpg'),
(397, 286, 'uploads/baiviet/buocImages_0_1-1735621074931-438619758.jpg'),
(398, 287, 'uploads/baiviet/buocImages_1_0-1735621074931-980506374.jpg'),
(399, 287, 'uploads/baiviet/buocImages_1_1-1735621074931-785099061.jpg'),
(400, 287, 'uploads/baiviet/buocImages_1_2-1735621074932-536196080.jpg'),
(401, 288, 'uploads/baiviet/buocImages_2_0-1735621074932-727094291.jpg'),
(402, 288, 'uploads/baiviet/buocImages_2_1-1735621074933-169127356.jpg'),
(403, 289, 'uploads/baiviet/buocImages_0_0-1735621212689-335868654.jpg'),
(404, 289, 'uploads/baiviet/buocImages_0_1-1735621212689-20230809.jpg'),
(405, 290, 'uploads/baiviet/buocImages_1_0-1735621212689-949504094.jpg'),
(406, 290, 'uploads/baiviet/buocImages_1_1-1735621212689-492298905.jpg'),
(407, 290, 'uploads/baiviet/buocImages_1_2-1735621212690-246959888.jpg'),
(408, 291, 'uploads/baiviet/buocImages_0_0-1735621318840-601890100.jpg'),
(409, 291, 'uploads/baiviet/buocImages_0_1-1735621318840-654354157.jpg'),
(410, 292, 'uploads/baiviet/buocImages_1_0-1735621318841-761684179.jpg'),
(411, 292, 'uploads/baiviet/buocImages_1_1-1735621318842-291770719.jpg'),
(412, 293, 'uploads/baiviet/buocImages_2_0-1735621318842-193952647.jpg'),
(413, 293, 'uploads/baiviet/buocImages_2_1-1735621318842-126766247.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `baocaobaiviet`
--

CREATE TABLE `baocaobaiviet` (
  `MaBaoCao` int(11) NOT NULL,
  `MaCongThuc` int(11) NOT NULL,
  `MaNguoiDung` int(11) NOT NULL,
  `LyDo` text NOT NULL,
  `NgayBaoCao` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `baocaobaiviet`
--

INSERT INTO `baocaobaiviet` (`MaBaoCao`, `MaCongThuc`, `MaNguoiDung`, `LyDo`, `NgayBaoCao`) VALUES
(2, 96, 9, 'dở ', '2024-12-30 22:29:43'),
(4, 2, 11, 'quá ít bò', '2024-12-31 12:05:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `binhluan`
--

CREATE TABLE `binhluan` (
  `MaBinhLuan` int(11) NOT NULL,
  `MaCongThuc` int(11) NOT NULL,
  `MaNguoiDung` int(11) NOT NULL,
  `NoiDung` text NOT NULL,
  `NgayBinhLuan` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `binhluan`
--

INSERT INTO `binhluan` (`MaBinhLuan`, `MaCongThuc`, `MaNguoiDung`, `NoiDung`, `NgayBinhLuan`) VALUES
(31, 96, 9, 'tuyêt', '2024-12-30 11:34:30'),
(32, 97, 8, 'ngonnnnnn', '2024-12-30 11:41:54'),
(33, 101, 9, 'ngonnn', '2024-12-30 13:21:36'),
(34, 100, 11, 'ngon lắm bạn ơi\n', '2024-12-31 12:11:10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietnguyenlieu`
--

CREATE TABLE `chitietnguyenlieu` (
  `MaCongThuc` int(11) NOT NULL,
  `MaNguyenLieu` int(11) NOT NULL,
  `SoLuong` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `chitietnguyenlieu`
--

INSERT INTO `chitietnguyenlieu` (`MaCongThuc`, `MaNguyenLieu`, `SoLuong`) VALUES
(2, 1, '1 bó'),
(2, 2, '1/2 củ'),
(2, 3, '100 g'),
(3, 4, '1 con'),
(3, 5, '200 gram'),
(3, 6, '1 muỗng canh'),
(3, 7, '1 lít'),
(95, 7, '1 muỗng canh'),
(95, 103, '4 cái'),
(95, 104, '1 muỗng canh'),
(95, 105, '1 muỗng cà phê'),
(95, 106, '1/2 muỗng cà phê'),
(96, 104, '1 muỗng canh'),
(96, 105, '1 muỗng cà phê'),
(96, 106, '1/2 muỗng cà phê'),
(96, 107, '200g'),
(96, 108, '1 muỗng canh'),
(97, 6, '1 muỗng cà phê'),
(97, 109, '1 trái'),
(97, 110, '50g'),
(98, 5, '20g'),
(98, 111, '1 túi'),
(98, 112, '1 lá'),
(99, 2, '2 củ'),
(99, 113, '200g'),
(99, 114, '2 củ'),
(99, 115, '1 hộp'),
(99, 116, '1 củ'),
(100, 117, '1 gói bột'),
(100, 118, '100g'),
(100, 119, '1 lít'),
(101, 118, '100g'),
(101, 119, '1 lít'),
(101, 120, '100g'),
(101, 121, '50g'),
(102, 105, '50g'),
(102, 122, '6 quả'),
(102, 123, '500ml'),
(103, 105, '150g'),
(103, 124, '500ml'),
(103, 125, '5g'),
(104, 126, '1 quả'),
(104, 127, '1/2 gói'),
(104, 128, '1 hộp'),
(104, 129, '10g'),
(105, 2, '1 củ'),
(105, 130, '500g'),
(105, 131, '400g'),
(105, 132, '1 cây'),
(106, 131, '50g'),
(106, 133, '200g'),
(106, 134, '10g'),
(107, 135, '200g'),
(107, 136, '1 muỗng cà phê'),
(107, 137, '1 muỗng canh'),
(108, 134, '100g'),
(108, 138, '200g'),
(109, 106, '1 muỗng cà phê'),
(109, 122, '4 quả'),
(109, 139, '50g'),
(109, 140, '1 muỗng cà phê'),
(110, 141, '1 bó'),
(110, 142, '100g'),
(110, 143, '1 muỗng canh'),
(111, 143, '1 muỗng canh'),
(111, 144, '100g'),
(111, 145, '1 trái'),
(112, 79, '300g'),
(112, 83, '5 trái'),
(112, 143, '1 muỗng canh'),
(113, 112, '1 hộp'),
(113, 116, '1 củ'),
(113, 143, '1 muỗng canh'),
(113, 146, '300g'),
(114, 112, '1 hộp'),
(114, 143, '1 muỗng canh'),
(114, 147, '3 miếng'),
(114, 148, '2 muỗng canh'),
(115, 105, '2 muỗng canh'),
(115, 149, '300g'),
(115, 150, '2-3 muỗng cà phê'),
(115, 151, '1 muỗng'),
(116, 7, '100ml'),
(116, 112, '2 miếng'),
(116, 152, '2 miếng'),
(117, 153, '100g'),
(117, 154, '40g'),
(117, 155, '100g'),
(118, 156, '1 củ'),
(118, 157, '200ml'),
(118, 158, '1 muỗng canh'),
(119, 159, '1kg'),
(119, 160, '2 cây'),
(120, 151, '500g'),
(120, 161, '1 muỗng canh'),
(121, 107, '1kg'),
(121, 162, '1 củ'),
(121, 163, '1 lon'),
(123, 116, '1 củ'),
(123, 165, '1 bịch'),
(123, 166, '1 bịch'),
(123, 167, '1 muỗng canh'),
(124, 104, '1 muỗng canh'),
(124, 160, '50g'),
(124, 168, '500g'),
(124, 169, '3 trái'),
(125, 104, '1 muỗng canh'),
(125, 132, '20g'),
(125, 168, '500g'),
(125, 170, '300g'),
(126, 104, '1 muỗng canh'),
(126, 107, '300g'),
(126, 168, '300g'),
(127, 6, '1 gói'),
(127, 171, '1kg'),
(127, 172, '1/2 con'),
(127, 173, '500g'),
(127, 174, '500g'),
(128, 104, '1 muỗng canh'),
(128, 172, '1 con'),
(128, 175, '1 muỗng canh'),
(129, 104, '1 muỗng canh'),
(129, 143, '1 muỗng canh'),
(129, 172, '1/2 con'),
(129, 176, '300g'),
(130, 80, '500g'),
(130, 104, '1 muỗng canh'),
(130, 132, '1 muỗng canh'),
(130, 172, '1/2 con'),
(131, 2, '3 củ'),
(131, 114, '500g'),
(131, 131, '1kg'),
(131, 177, '200ml'),
(132, 6, '1 muỗng canh'),
(132, 116, '1 muỗng canh'),
(132, 131, '200g'),
(133, 122, '1 quả'),
(133, 131, '100g'),
(133, 178, '1 muỗng canh'),
(133, 179, '1 gói'),
(134, 6, '1 muỗng canh'),
(134, 131, '500g'),
(134, 180, '30 lá'),
(135, 116, '1 củ'),
(135, 131, '500g'),
(135, 166, '1 muỗng canh'),
(135, 181, '500g'),
(138, 112, '3 lá '),
(138, 182, '1 chén'),
(138, 183, '200g'),
(138, 184, '50g'),
(139, 79, '100g'),
(139, 167, '50g'),
(139, 184, '1 muỗng canh'),
(139, 185, '200g'),
(140, 105, '2 muỗng canh'),
(140, 116, '1 củ'),
(140, 119, '1 chén'),
(140, 137, '1 chén'),
(140, 186, '400g'),
(141, 104, '3 muỗng canh'),
(141, 106, '1 muỗng cà phê '),
(141, 187, '1/2 con'),
(142, 83, '2 quả'),
(142, 116, '1 củ'),
(142, 175, '1 muỗng canh'),
(142, 184, '2 muỗng canh'),
(142, 188, '100g'),
(142, 189, '1 cây'),
(143, 5, '1/2  gói'),
(143, 106, '1/2 muỗng cà phê'),
(143, 190, '300g'),
(144, 2, '1 củ'),
(144, 116, '1 củ'),
(144, 183, '1 hộp'),
(144, 191, '1/2 bắp'),
(144, 192, '1 ít');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `congthuc`
--

CREATE TABLE `congthuc` (
  `MaCongThuc` int(11) NOT NULL,
  `TenMonAn` varchar(100) NOT NULL,
  `MoTa` text DEFAULT NULL,
  `HinhAnhChinh` text DEFAULT NULL,
  `MaNguoiDung` int(11) NOT NULL,
  `NgayDang` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `congthuc`
--

INSERT INTO `congthuc` (`MaCongThuc`, `TenMonAn`, `MoTa`, `HinhAnhChinh`, `MaNguoiDung`, `NgayDang`) VALUES
(2, 'Măng tây xào bò', 'Măng tây là nguyên liệu cho game tuần này của tôi', 'uploads\\baiviet\\mon1.png', 5, '2024-12-23 14:03:42'),
(3, 'Gà Chiên Giòn', 'Món gà chiên giòn r crispy, thơm ngon, thích hợp cho bữa tiệc.', 'path_to_image/ga_chien_gion.jpg', 4, '2024-12-23 14:22:00'),
(95, 'Cánh gà chiên mắm', 'Một món ăn phù hợp cho món chính.', 'uploads/baiviet/image-1735382354627-585494951.jpg', 7, '2024-12-28 17:39:14'),
(96, 'Tôm Rang Me', 'Một món ăn phù hợp cho món chính.', 'uploads/baiviet/image-1735382817429-290020830.jpg', 8, '2024-12-28 17:46:57'),
(97, 'Xoài Trộn Cá Khô', 'Một món ăn phù hợp cho món khai vị.', 'uploads/baiviet/image-1735382980428-36141051.jpg', 9, '2024-12-28 17:49:40'),
(98, 'Nấm Kim Châm Cuộn Rong Biển', 'Một món ăn phù hợp cho món khai vị.', 'uploads/baiviet/image-1735383185173-621371381.jpg', 10, '2024-12-28 17:53:05'),
(99, 'Sườn Cay Hàn Quốc', 'Một món ăn phù hợp cho món chính.', 'uploads/baiviet/image-1735383435214-118710041.jpg', 11, '2024-12-28 17:57:15'),
(100, 'Sương Sáo', 'Một món ăn đơn giản và dễ làm, phù hợp cho tráng miệng.', 'uploads/baiviet/image-1735383633021-19671299.jpg', 7, '2024-12-28 18:00:33'),
(101, 'Chè Mè', 'Một món ăn đơn giản và dễ làm, phù hợp cho tráng miệng.', 'uploads/baiviet/image-1735383830125-254281833.jpg', 8, '2024-12-28 18:03:50'),
(102, 'Crème Brûlée', 'Một món ăn đơn giản và dễ làm, phù hợp cho tráng miệng.', 'uploads/baiviet/image-1735384163491-373869177.jpg', 9, '2024-12-28 18:09:23'),
(103, 'Pudding Đậu Nành', 'Một món ăn đơn giản và dễ làm, phù hợp cho tráng miệng.', 'uploads/baiviet/image-1735384606093-685154139.jpg', 10, '2024-12-28 18:16:46'),
(104, 'Sữa Chua Granola Cam', 'Một món ăn đơn giản và dễ làm, phù hợp cho tráng miệng.', 'uploads/baiviet/image-1735384819962-832393047.jpg', 11, '2024-12-28 18:20:19'),
(105, 'Miến Xào Hàn Quốc', 'Một món ăn đơn giản và dễ làm, phù hợp cho xào.', 'uploads/baiviet/image-1735385058710-943318939.jpg', 11, '2024-12-28 18:24:18'),
(106, 'Giá Xào Thịt', 'Một món ăn đơn giản và dễ làm, phù hợp cho xào.', 'uploads/baiviet/image-1735385624220-781462706.jpg', 7, '2024-12-28 18:33:44'),
(107, 'Bông Bí Xào Tỏi', 'Một món ăn đơn giản và dễ làm, phù hợp cho xào.', 'uploads/baiviet/image-1735385824520-656662623.jpg', 8, '2024-12-28 18:37:04'),
(108, 'Hến Xào Hẹ', 'Một món ăn đơn giản và dễ làm, phù hợp cho xào.', 'uploads/baiviet/image-1735385999612-747969667.jpg', 9, '2024-12-28 18:39:59'),
(109, 'Nấm Mèo Xào Trứng', 'Một món ăn đơn giản và dễ làm, phù hợp cho xào.', 'uploads/baiviet/image-1735386204201-627377585.jpg', 10, '2024-12-28 18:43:24'),
(110, 'Canh Cải Ngọt Nấu Mọc', 'Một món ăn đơn giản và dễ làm, phù hợp cho canh.', 'uploads/baiviet/image-1735386350396-770138627.jpg', 11, '2024-12-28 18:45:50'),
(111, 'Canh Bí Nấu Chả Tôm', 'Một món ăn đơn giản và dễ làm, phù hợp cho canh.', 'uploads/baiviet/image-1735386512855-13404329.jpg', 11, '2024-12-28 18:48:32'),
(112, 'Canh Cà Chua Cá', 'Một món ăn đơn giản và dễ làm, phù hợp cho canh.', 'uploads/baiviet/image-1735386633657-936745771.jpg', 7, '2024-12-28 18:50:33'),
(113, 'Canh Rong Biển Xương Hầm', 'Một món ăn đơn giản và dễ làm, phù hợp cho canh.', 'uploads/baiviet/image-1735386808188-405932921.jpg', 8, '2024-12-28 18:53:28'),
(114, 'Canh Miso Đậu', 'Một món ăn đơn giản và dễ làm, phù hợp cho canh.', 'uploads/baiviet/image-1735387506528-575169767.jpg', 9, '2024-12-28 19:05:06'),
(115, 'Nộm Rau Muống', 'Một món ăn đơn giản và dễ làm, phù hợp cho chay.', 'uploads/baiviet/image-1735387709138-246898561.jpg', 10, '2024-12-28 19:08:29'),
(116, 'Da Cá Chay', 'Một món ăn đơn giản và dễ làm, phù hợp cho chay.', 'uploads/baiviet/image-1735387889128-468946211.jpg', 11, '2024-12-28 19:11:29'),
(117, 'Bánh Ngọt Chay', 'Một món ăn đơn giản và dễ làm, phù hợp cho chay.', 'uploads/baiviet/image-1735388112256-575271163.jpg', 7, '2024-12-28 19:15:12'),
(118, 'Sữa Dê Khoai Lang Tím', 'Một món ăn đơn giản và dễ làm, phù hợp cho chay.', 'uploads/baiviet/image-1735388279195-740018666.jpg', 8, '2024-12-28 19:17:59'),
(119, 'Nghêu Hấp Sả', 'Một món ăn đơn giản và dễ làm, phù hợp cho nhậu.', 'uploads/baiviet/image-1735388381861-581752186.jpg', 9, '2024-12-28 19:19:41'),
(120, 'Đậu Phộng Rang Muối', 'Một món ăn đơn giản và dễ làm, phù hợp cho nhậu.', 'uploads/baiviet/image-1735388772897-628259959.jpg', 10, '2024-12-28 19:26:12'),
(121, 'Tôm Hấp Bia', 'Một món ăn đơn giản và dễ làm, phù hợp cho nhậu.', 'uploads/baiviet/image-1735388964207-174837474.jpg', 11, '2024-12-28 19:29:24'),
(123, 'Thịt Heo Sốt Chua Ngọt', 'Một món ăn đơn giản và dễ làm, phù hợp cho nước uống', 'uploads/baiviet/image-1735469137811-199787906.jpg', 7, '2024-12-29 17:45:37'),
(124, 'Thịt Heo Rim Sả Ớt', 'Một món ăn đơn giản và dễ làm, phù hợp cho nước uống.', 'uploads/baiviet/image-1735469721575-105092202.jpg', 8, '2024-12-29 17:55:21'),
(125, 'Thịt Heo Xào Măng', 'Một món ăn đơn giản và dễ làm, phù hợp cho nước uống.', 'uploads/baiviet/image-1735469921548-418641465.jpg', 9, '2024-12-29 17:58:41'),
(126, 'Thịt Heo Rang Tôm', 'Một món ăn đơn giản và dễ làm, phù hợp cho nước uống.', 'uploads/baiviet/image-1735470105177-531921942.jpg', 10, '2024-12-29 18:01:45'),
(127, 'Phở Gà', 'Một món ăn đơn giản và dễ làm, phù hợp cho nước uống.', 'uploads/baiviet/image-1735470322007-732479843.jpg', 10, '2024-12-29 18:05:22'),
(128, 'Gà Nướng Mật Ong', 'Một món ăn đơn giản và dễ làm', 'uploads/baiviet/image-1735470494229-94714577.jpg', 11, '2024-12-29 18:08:14'),
(129, 'Thịt Gà Kho Bí Đỏ', 'Một món ăn đơn giản và dễ làm, phù hợp cho nước uống.', 'uploads/baiviet/image-1735470708505-757488119.jpg', 7, '2024-12-29 18:11:48'),
(130, 'Thịt Gà Dứa', 'Một món ăn đơn giản và dễ làm, phù hợp cho món cơm gia đình\r\n', 'uploads/baiviet/image-1735470890219-83865641.jpg', 8, '2024-12-29 18:14:50'),
(131, 'Bò Sốt Vang', 'Một món ăn nhà hàng ngon miệng', 'uploads/baiviet/image-1735471120061-645268711.jpg', 10, '2024-12-29 18:18:40'),
(132, 'Bò Xào Hành Tây', 'Một món ăn đơn giản và dễ làm', 'uploads/baiviet/image-1735471253287-922126317.jpg', 11, '2024-12-29 18:20:53'),
(133, 'Mì Bò Kim Chi', 'Một món ăn đơn giản và dễ làm, phù hợp cho nước uống', 'uploads/baiviet/image-1735471422202-404931222.jpg', 7, '2024-12-29 18:23:42'),
(134, 'Bò Lá Lốt', 'Một món ăn đơn giản và dễ làm, phù hợp cho món nướng', 'uploads/baiviet/image-1735471567318-862004129.jpg', 8, '2024-12-29 18:26:07'),
(135, 'Nui Bò Bằm', 'Một món ăn đơn giản và dễ làm', 'uploads/baiviet/image-1735471714585-701775647.jpg', 9, '2024-12-29 18:28:34'),
(138, 'Cơm Nắm Cá Ngừ Rong Biển ', 'Món ngon dễ làm phù hợp cho ăn nhẹ', 'uploads/baiviet/image-1735620405136-33581089.jpg', 7, '2024-12-31 11:46:45'),
(139, 'Salad Cá', 'Món ngon phù hợp cho người giảm cân', 'uploads/baiviet/image-1735620619989-525881371.jpg', 8, '2024-12-31 11:50:20'),
(140, 'Cá Hồi Ngâm Tương', 'Phù hợp cho món ngâm', 'uploads/baiviet/image-1735620780379-583432922.jpg', 9, '2024-12-31 11:53:00'),
(141, 'Cá Thu Kho', 'Phù hợp cho người thích kho', 'uploads/baiviet/image-1735620923521-221631803.jpg', 10, '2024-12-31 11:55:23'),
(142, 'Salad Cá Hồi ', 'Phù hợp cho ăn kiêng', 'uploads/baiviet/image-1735621074928-314457592.jpg', 11, '2024-12-31 11:57:54'),
(143, 'Cá Cơm Chiên', 'Phù hợp cho món nhậu', 'uploads/baiviet/image-1735621212687-19501398.jpg', 7, '2024-12-31 12:00:12'),
(144, 'Bắp Cải Xào Cá Ngừ', 'Phù hợp cho món xào', 'uploads/baiviet/image-1735621318840-742418885.jpg', 11, '2024-12-31 12:01:58');

--
-- Bẫy `congthuc`
--
DELIMITER $$
CREATE TRIGGER `AfterDeleteCongThuc` AFTER DELETE ON `congthuc` FOR EACH ROW BEGIN
    UPDATE NguoiDung
    SET TongBaiViet = TongBaiViet - 1
    WHERE MaNguoiDung = OLD.MaNguoiDung;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `AfterInsertCongThuc` AFTER INSERT ON `congthuc` FOR EACH ROW BEGIN
    UPDATE NguoiDung
    SET TongBaiViet = TongBaiViet + 1
    WHERE MaNguoiDung = NEW.MaNguoiDung;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `huongdan`
--

CREATE TABLE `huongdan` (
  `MaHuongDan` int(11) NOT NULL,
  `MaCongThuc` int(11) NOT NULL,
  `BuocSo` int(11) NOT NULL,
  `MoTaBuoc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `huongdan`
--

INSERT INTO `huongdan` (`MaHuongDan`, `MaCongThuc`, `BuocSo`, `MoTaBuoc`) VALUES
(4, 2, 1, 'Phi thơm tỏi băm, cho bò vào xào, thêm ít nước tương rồi trút ra dĩa. Phi tiếp tỏi băm, cho măng tây và cà rốt cắt khúc vào, thêm nước, nước mắm, hạt nêm vào'),
(5, 2, 2, 'Thêm nấm cắt lát vào, cuối cùng cho bò vào đảo đều, có thể thêm ít dầu mè cho thơm'),
(6, 2, 3, 'Món xào thơm ngon, thêm các loại rau củ giòn giòn rất lạ miệng, thêm ngò tây trang trí trên cùng'),
(7, 3, 1, 'Rửa sạch gà, ướp gia vị khoảng 30 phút.'),
(8, 3, 2, 'Lăn gà qua bột chiên giòn cho đều.'),
(9, 3, 3, 'Đun nóng dầu ăn, cho gà vào chiên cho đến khi vàng giòn.'),
(10, 3, 4, 'Vớt gà ra, để ráo dầu và thưởng thức.'),
(176, 95, 1, 'Cánh gà rửa sạch chặt miếng vừa ăn,thấm khô cánh gà, ướp gia vị.'),
(177, 95, 2, 'Cho cánh gà vào chiên ngập dầu đến khi vàng đều 2 mặt thì vớt ra để ráo dầu.'),
(178, 95, 3, 'Cho nước mắm,mì chính,hạt tiêu,tương ớt,đường,thêm xíu nước lọc vào chảo đun đến khi sốt hơi sệt lại thì cho cánh gà vào đảo đều cho ngấm gia vị,đun đến khi sốt cạn thì cho cánh gà ra đĩa.'),
(179, 96, 1, 'Phi thơm đầu hành, cho tôm vào đảo săn, tiếp đến cho tép vào rang cùng, thêm nước mắm, đường, cốt me, ít tiêu xay, ít nước đảo đều cho thấm gia vị.'),
(180, 96, 2, 'Múc ra dĩa, thêm tiêu xay.'),
(181, 97, 1, 'Cá khô nướng tỏi cho vàng giòn, bỏ nhỏ bỏ xương.'),
(182, 97, 2, 'Xoài gọt vỏ, cắt lát, trộn với mắm đường, lắc đều cho thấm và cho cá khô lên trên, thêm chút tỏi phi và hành lá.'),
(183, 98, 1, 'Nấm kim châm bỏ chân nấm, cắt thành từng lát mỏng, rửa sạch để ráo, sau đó dùng miếng rong biển cuộn ngang phần chân nấm.'),
(184, 98, 2, 'Sau đó nhúng qua trứng và áo đều với bột chiên giòn, chiên ngập dầu hai mặt.'),
(185, 98, 3, 'Để ráo dầu rồi gắp ra dĩa, chấm cùng tương ớt rất ngon.'),
(186, 99, 1, 'Ngâm sườn trong nước 2 tiếng, ninh sườn với một ít nước và tương ớt trong ít nhất 30 phút\''),
(187, 99, 2, 'Sườn gần mềm rồi cho khoai tây đun cho mềm.'),
(188, 99, 3, 'Gần chín thì cho thêm hành ba rô, hành tây thái miếng vừa ăn, thêm ớt nếu muốn cay thêm, nấm, dầu mè tuỳ khẩu vị.'),
(189, 100, 1, 'Cho bột sương sáo và đường vào tô trộn đều rồi cho vào nồi nước lọc khuấy hỗn hợp cho tan đều để bột nghỉ 30 phút.'),
(190, 100, 2, 'Cho nồi lên bếp nấu với mức lửa vừa, khuấy đều tay đến khi hỗn hợp sôi và bắt đầu sánh đặc.'),
(191, 100, 3, 'Khi sương sáo nguội thì cho vào tủ lạnh cho đông lại rồi lấy ra cắt miếng vừa ăn.'),
(192, 101, 1, 'Cho mè + yến mạch + 1 lít nước lọc vào máy xay sinh tố xay cho nhuyễn mịn.'),
(193, 101, 2, 'Để nước mè đen ra nồi cùng với đường rồi nấu cho đường tan, Nấu đến khi chè sánh sệt & mịn là được, tắt bếp'),
(194, 102, 1, 'Lòng đỏ trứng và đường đánh cho tan. Cream nấu sôi rồi chế từ từ vừa chế vừa quậy vào tô trứng'),
(195, 102, 2, 'Lọc hỗn hợp qua rây rồi chế vào các chén, đổ nước sôi vào khay cao tầm nửa chiều cao chén'),
(196, 102, 3, 'Nướng trong 30 phút tắt lò mang ra để nguôi cho vào ngăn mát 3-4 tiếng. Khi dùng mang ra rây đường nâu lên rồi khò lửa cho vàng thành caramel .'),
(197, 103, 1, 'Ngâm 5gr gelatin với 5 muỗng ăn cơm nước lọc cho nở.'),
(198, 103, 2, 'Cho sữa đậu nành, đường, đun nhỏ lửa. Hỗn hợp nóng lên thì tắt bếp cho gelatin đã ngâm nở vào khuấy tan.'),
(199, 103, 3, 'Cho hỗn hợp vào khuôn khi caramel đã đông, để nguội, cho vào tủ lạnh đến khi đông lại.'),
(200, 104, 1, 'Rau câu trộn với đường, đun sôi nước cam rồi cho phần rau câu trên vào, đổ vào khuôn tùy ý, để tủ mát nửa tiếng.'),
(201, 104, 2, 'Đổ sữa chua ra tô, thêm rau câu cam và ít hạt granola lên trên là xong.'),
(202, 105, 1, 'Cắt sợi cà rốt, thịt bò, hành. Ngâm miến trong 20p.'),
(203, 105, 2, 'Bắc chảo to, cho bò vào xào tái thì bỏ ra bát. Cho cà rốt, hành vào xào.'),
(204, 105, 3, 'Trộn nước sốt cho miến gồm: xì dầu, tỏi, đường, tương ớt, dầu olive, tiêu, nước, đổ vào chảo ngoáy 1 lúc rồi cho miến vào đảo đều cho ngấm.'),
(205, 106, 1, 'Phi thơm đầu hành, cho thịt vào xào săn, sau đó cho giá và cà chua vào đảo đều.'),
(206, 106, 2, 'Thêm 1/2 chén nước, 2mc nước mắm vào cho giá nhanh mềm, cuối cùng thêm hành lá vào đảo đều.'),
(207, 107, 1, 'Bông bí tước xơ từ dưới lên, bỏ tai, bỏ nhuỵ bên trong ngắt khúc vừa ăn.'),
(208, 107, 2, 'Phi tỏi thơm, thêm bông bí vào thêm nước tương, trút ra đĩa rắc tiêu.'),
(209, 108, 1, 'Hến rửa sạch, đảo trên chảo cho cạn nước. Hẹ rửa sạch thái đoạn 1-2 cm.'),
(210, 108, 2, 'Hến cạn nước, nêm ít mắm đảo hơi vàng cạnh bỏ hẹ vào đảo 3 phút.'),
(211, 109, 1, 'Ngâm nấm mèo, cắt nấm mèo thành miếng vừa ăn, trứng đập cho ra tô quậy đều.'),
(212, 109, 2, 'Bắc chảo cho chút dầu cho trứng vào. cho nấm mèo vào, rồi cho gia vị vào xào đều gia vị.'),
(213, 109, 3, 'Nhắc xuống cho ra dĩa rắc tiêu lên.'),
(214, 110, 1, 'Cho mọc vào nồi 1,5l, ít hạt nêm nấu sôi rồi cho rau cải ngọt cắt khúc vào.'),
(215, 110, 2, 'Đợi sôi lại thì tắt bếp. Múc ra tô, thêm ít tiêu xay.'),
(216, 111, 1, 'Bí gọt vỏ bào sợi. Chả tôm thịt nặn viên, cho vào nồi 1,5l nước.'),
(217, 111, 2, 'Múc canh ra tô, thêm hành ngò.'),
(218, 112, 1, 'Cá làm sạch cho vào chảo rán sơ qua cho bớt tanh sau đó cho cà chua bổ cau vào xào nhuyễn.'),
(219, 112, 2, 'Sau khi sôi nêm nếm gia vị ở trên cho vừa miệng rồi cho các loại rau thơm đã cắt vào.'),
(220, 113, 1, 'Xương trụng qua, ho vào nồi hầm cùng hành. Cuối cùng cho rong biển vào nồi canh và tắt bếp.'),
(221, 113, 2, 'Múc canh ra tô, thêm tiêu xay lên trên.'),
(222, 114, 1, 'Rong biển ngâm nước 15 phút cho nở, vớt ra rổ cắt nhỏ; đậu hũ cắt thành từng miếng nhỏ.'),
(223, 114, 2, 'Nấu khoảng 2 lít nước, cho tương miso vào rồi nêm thêm gia vị cho vừa khẩu vị. Thả rong biển và đậu vào nấu cùng, khoảng 10 phút thì tắt bếp.'),
(224, 115, 1, 'Rau muống nhặt bỏ bớt lá, luộc rau muống với nước có bỏ chút muối, vớt ra.'),
(225, 115, 2, 'Cho rau vào tô/thố lớn. Cho nước trộn, trộn đều, Khi ăn, bày ra đĩa, rắc thêm đậu phộng lên.'),
(226, 116, 1, 'Bánh tráng phết 1 ít nước cho mềm rồi cho rong biển dính vào lớp bánh tráng.'),
(227, 116, 2, 'Cho dầu ăn vào chảo để dầu sôi thả phần bánh vào chiên.'),
(228, 117, 1, 'Làm tan bơ và chocolate trong một âu cách thủy đến khi có hỗn hợp tan chảy đổng nhất.'),
(229, 117, 2, 'Trộn đều lên nhẹ tay đến khi các mảnh cornflakes được áo đều hỗn hợp.'),
(230, 117, 3, 'Cho vào từng cup giấy, cho vào tủ mát để trong 2 giờ.'),
(231, 118, 1, 'Khoai lang nấu chín với nước sâm sấp và một ít muối, đậy nắp hầm 10 phút lửa nhỏ cho khoai mềm.'),
(232, 118, 2, 'Cho 1 chén khoai, một ít nước nấu cùng đường, sữa vào cối xay, xay mịn.'),
(233, 119, 1, 'Ngâm nghêu với nước muối, rửa sạch thêm ớt xắt và sả đập dập.'),
(234, 119, 2, 'Đậy nắp nồi nấu sôi bùng nghêu vừa hé mở xóc đều là được.'),
(235, 120, 1, 'Cho dầu vào chảo, cho đậu phộng vào.'),
(236, 120, 2, 'Đảo đậu phộng mỗi 5 phút là đậu phộng chín.'),
(237, 121, 1, 'Đổ bia và tôm vào nồi hấp,  thêm gừng cắt lát lên trên cho thơm. Bật bếp và hấp đến khi tôm chín.'),
(238, 121, 2, 'Xếp tôm ra dĩa, trang trí thêm ít rau củ.'),
(240, 123, 1, 'Thịt nạc dăm cắt miếng mỏng. Cho bột, trứng gà vào trộn lên'),
(241, 123, 2, 'Cho dầu vào chảo, chiên cho vàng thịt.'),
(242, 123, 3, 'Pha sốt công thức 5:4:3:2 (nước - tương cà - đường - giấm). Bắt sốt lên chảo nấu cho kẹo lại. '),
(243, 124, 1, 'Thịt ba rọi rửa sạch cắt miếng vừa ăn. Sả ớt xay nhuyễn.'),
(244, 124, 2, 'Cho sả ớt lên đảo thơm.'),
(245, 124, 3, 'Pha 2 muỗng canh nước mắm + 2 muỗng canh tương ớt, 1 muỗng canh đường khuấy tan rồi đổ lên thịt và đảo cho thịt thấm.'),
(246, 125, 1, 'Măng rửa sạch, thịt cắt mỏng, hành lá rửa sạch, cắt khúc.'),
(247, 125, 2, 'Dầu nóng cho tỏi vô phi thơm rồi đổ thịt vô xào săn. Tiếp đó cho măng vô đảo đều.'),
(248, 125, 3, 'Nêm nếm vị vừa ăn cho hành vô đảo đều rồi tắt bếp.'),
(249, 126, 1, 'Tôm rửa sạch, cắt đầu đuôi. Thịt ba chỉ rửa sạch.'),
(250, 126, 2, 'Khi thịt ra bớt mỡ và săn lại, thấy cạn, nêm nếm gia vị cho vừa miệng.'),
(251, 127, 1, 'Xương gà chặt ra từng phần, Cho luôn phần thịt gà vào nồi rồi bắc lên bếp nấu.'),
(252, 127, 2, 'Nồi nước dùng ta tiếp tục nấu thêm 30 phút để lấy độ ngọt từ xương gà. '),
(253, 127, 3, 'Thịt gà ta xé nhỏ ra để chuẩn bị cho vô các tô phở, cho bánh phở ra tô rồi thịt gà xé lên trên, chan nước dùng nóng vào.'),
(254, 128, 1, 'Sơ chế da gà với rượu gừng khử mùi, để ngăn mát ướp ít nhất 3 tiếng.'),
(255, 128, 2, 'Làm nóng lò. Lật mặt thịt của con gà lên trên. Nướng 30 phút. Quét mật ong nướng thêm 5 ph nữa.'),
(256, 129, 1, 'Gà rửa sạch với nước muối loãng, để ráo, chặt miếng vừa ăn. Bí đỏ gọt vỏ, bỏ hạt.'),
(257, 129, 2, 'Cho dầu ăn + đường vô chảo, Tiếp đó đổ thịt gà vô đảo cho gà săn lại'),
(258, 129, 3, 'Kho cho đến khi nước sánh lại bí và thịt gà chín mềm, nêm nếm vị vừa ăn rồi tắt bếp.'),
(259, 130, 1, 'Thịt gà rửa sạch, chặt miếng vừa ăn. Thơm cắt rẻ quạt.'),
(260, 130, 2, 'Chuyển màu cánh gián thì cho hành băm phi thơm. Tiếp đó đổ thịt gà vô đảo cho gà săn lại.'),
(261, 130, 3, 'Cho vô khoảng 1/2 chén nước + 1MC nước mắm. Kho cho đến khi nước sền sệt lại là được.'),
(262, 131, 1, 'Bò cắt miếng. Thêm 1.5 tô nước hầm mềm.'),
(263, 131, 2, 'Thêm cà rốt khoai tây nấu mềm.'),
(264, 132, 1, 'Phi thơm tỏi băm, cho bò vào đảo sơ rồi cho hành tây cắt múi cau vào.'),
(265, 132, 2, 'Thêm ít hạt nêm, đảo đều và tắt bếp.'),
(266, 133, 1, 'Nấu mì 5 phút với 1 tô nước. Thêm gia vị vừa ăn.'),
(267, 133, 2, 'Thêm đậu hũ, kim chi, 1 quả trứng gà, bò xào lên mặt. Nấu sôi lại là được.'),
(268, 134, 1, 'Thịt bò băm ướp mỗi thứ gia vị 1 tbsp trộn đều.'),
(269, 134, 2, 'Lá lốt rửa sạch để khô. Kế trải miếng lá lốt cho thịt vào cuộn đè mí lá xuống cho khỏi bung.'),
(270, 134, 3, 'Cho chảo dầu sôi thả từng cuốn vào chảo, chiên đều 2 mặt với lửa vừa để thịt được chín đều.'),
(271, 135, 1, 'Cho nui vào nồi 1 lít nước.'),
(272, 135, 2, 'Phi tỏi thơm xào bò để riêng nêm ít muối.'),
(273, 135, 3, 'Cho hành tây vào xào thơm thêm cà xay nhỏ nấu 10 phút lửa nhỏ nêm muối tiêu .'),
(276, 138, 1, 'Cho cơm nóng ra bát, cá ngừ lọc bỏ dầu cho ra chén dùng muỗng dằm bát phần thịt cá.'),
(277, 138, 2, 'Sau khi dằm nát phần cá ngừ mình cho thêm vào trong chén 2 muỗng canh sốt mayonaise.'),
(278, 138, 3, 'Kế đến đeo găng tay nilong vào, lấy 1 ít cơm đã trộn rồi vo tròn, cho ra dĩa. Cuối cùng rắc 1 ít rong biển lên trên và thưởng thức.'),
(279, 139, 1, 'Cho rau cỏ và cá hồi lên dĩa, cắt lát kim quất và trang trí với hoa cúc tần.'),
(280, 139, 2, 'Phi hành vàng, làm sốt dầu dấm chan đều lên salad.'),
(281, 140, 1, 'Nấu nước ngâm cá sôi lên rồi hạ lửa nhỏ để lăn tăn 5 phút sau đó để nguội, mình dùng 1 chén nhỏ đong vì lượng cá ít.'),
(282, 140, 2, 'Ớt cắt lát, hành tây cắt múi cau không quá dày. Cắt lát 1/2 trái chanh, nửa trái còn lại vắt lấy nước để rửa cá.'),
(283, 140, 3, 'Sau 10 tiếng là có thể dùng được, để lâu thêm sẽ thấm tương mặn hơn một chút, bảo quản trong tủ lạnh được lên tới 3 ngày.'),
(284, 141, 1, 'Cá rửa sạch, chiên cá vàng 2 mặt. Cá chín vàng đổ bớt dầu ra bát.'),
(285, 141, 2, 'Cho tỏi ớt xay và cho 2m sốt muối ớt + 2m nước lọc kho cá cho keo lại. Múc cá ra dĩa và thưởng thức kèm cơm nóng.'),
(286, 142, 1, 'Rửa sạch cải xà lách, cà chua bi và hành tây. Chanh vắt lấy nước. Cá hồi lấy fillet. Cải xà lách xắt ngang thân thành sợi rộng cỡ 3cm cho vô tô trộn. Cà chua cắt nhỏ chẻ đôi. Hành tây xắt sợi. '),
(287, 142, 2, 'Làm sauce trộn salad: 4tbsp sốt mayonnaise + 1.5tbsp tương cà + 1tbsp tương ớt + 1tbsp mật ong + 1tbsp nước cốt chanh. Trộn thật đều tất cả.'),
(288, 142, 3, 'Cho cá hồi lên mặt dĩa salad. Sau đó, rưới sauce đã trộn lên trên rồi dọn ra thưởng thức.'),
(289, 143, 1, 'Cá cơm rửa sạch đem rút xương để ráo. Ướp cá với bột nêm,tiêu gốc hành để thấm.'),
(290, 143, 2, 'Bắc chảo dầu nóng lăn từng con cá cơm vào bột chiên giòn khô rồi thả vào chảo dầu.chiên vàng đến hết.'),
(291, 144, 1, 'Bắp cải cà rốt xắt dài.  Cá ngừ dằm ra thành miếng nhỏ.'),
(292, 144, 2, 'Khử hành thơm rồi xào bắp cải cà rốt trước, thêm tí nước và ít muối đậy nắp lại cho chín.'),
(293, 144, 3, 'Cải trong cho cá ngừ vào xào chung, nếm vừa ăn và thêm hành lá');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lienhe`
--

CREATE TABLE `lienhe` (
  `MaLienHe` int(11) NOT NULL,
  `MaNguoiDung` int(11) NOT NULL,
  `TenNguoiDung` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `NoiDung` text NOT NULL,
  `NgayLienHe` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `lienhe`
--

INSERT INTO `lienhe` (`MaLienHe`, `MaNguoiDung`, `TenNguoiDung`, `Email`, `NoiDung`, `NgayLienHe`) VALUES
(1, 8, 'Tran Thi B', 'tranthib@example.com', 'xin chào admin', '2024-12-30 20:01:33');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `MaNguoiDung` int(11) NOT NULL,
  `HoTen` varchar(50) NOT NULL,
  `TaiKhoan` varchar(50) DEFAULT NULL,
  `MatKhau` varchar(255) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `DiachiKH` varchar(200) DEFAULT NULL,
  `DienThoaiKH` varchar(50) DEFAULT NULL,
  `NgaySinh` datetime DEFAULT NULL,
  `Avatar` varchar(255) DEFAULT NULL,
  `MoTa` varchar(50) NOT NULL,
  `SoTheoDoi` int(11) DEFAULT 0,
  `SoDangTheoDoi` int(11) DEFAULT 0,
  `TongBaiViet` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`MaNguoiDung`, `HoTen`, `TaiKhoan`, `MatKhau`, `Email`, `DiachiKH`, `DienThoaiKH`, `NgaySinh`, `Avatar`, `MoTa`, `SoTheoDoi`, `SoDangTheoDoi`, `TongBaiViet`) VALUES
(4, 'Nguyễn Văn C', 'vanc.nguyen', '$2b$10$O633MNCAp0eAOzVRylbSQeSEKuXUfNOFWmbM7jRhykxreK4SXVkRa', 'vanc@gmail.com', NULL, '0999999999', NULL, 'uploads\\avatar-1734876079479-416879623.jpg', '', 1, 0, 1),
(5, 'Nguyễn Văn B', 'nguyen.vanb', '$2b$10$8WXAGVRoY.qscN0ar6XaIOGWG.hphUI1VDbEDR400ERorFbJhTu3i', 'vanb@gmail.com', 'Hồ Chí Minh', '6666666666666666666', NULL, 'uploads\\avatar-1734874287593-373447866.png', 'Một người yêu thích nấu ăn !!!!!!', 0, 0, 1),
(7, 'Nguyen Van A', 'nguyenvana', '$2b$10$dwq7EcACFS7UY7pn0aEefegmoKASi5p5MjhAlVkUp9E2E0g/MHhZ.', 'nguyenvana@example.com', 'Hà Nội', '0123456789', NULL, 'uploads\\avatar-1735381184684-452839880.jpg', 'Người dùng yêu công nghệ.', 1, 0, 10),
(8, 'Tran Thi B', 'tranthib', '$2b$10$evMryrWSvmvkxyroAE43ue22fLPUuWlk810bFQly1sbmhJfLSbNoy', 'tranthib@example.com', NULL, '0987654321', NULL, 'uploads\\avatar-1735381344634-37672977.jpg', 'Thích đọc sách và du lịch.', 0, 2, 9),
(9, 'Le Van C', 'levanc', '$2b$10$RJz7hqN8xL6BIKjJ3IG1JuFEG2prOMMZApcs9ZjV3dzqQdRTSyPMS', 'levanc@example.com', NULL, '0931122334', NULL, 'uploads\\avatar-1735381405855-670331814.jpg', 'Nhà phát triển phần mềm.', 1, 1, 8),
(10, 'Pham Thi D', 'phamthid', '$2b$10$pwoPjxHK7FEUr/akr8VPh.DXhUNgU5zupat.MmUjPIX/Bpt.prFZ2', 'phamthid@example.com', NULL, '0909876543', NULL, 'uploads\\avatar-1735381479237-10298685.jpg', 'Đam mê thể thao.', 0, 0, 9),
(11, 'Hoang Van E', 'hoangvane', '$2b$10$O.2Y0CCZ0FAsgjO6f0tgkeF/7J.IAZV//ZFlWbnUTStZmP.7DkQvS', 'hoangvane@example.com', NULL, '0912233445', NULL, 'uploads\\avatar-1735381541543-216586544.jpg', 'Nhiếp ảnh gia nghiệp dư.', 1, 1, 11);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguyenlieu`
--

CREATE TABLE `nguyenlieu` (
  `MaNguyenLieu` int(11) NOT NULL,
  `TenNguyenLieu` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nguyenlieu`
--

INSERT INTO `nguyenlieu` (`MaNguyenLieu`, `TenNguyenLieu`) VALUES
(1, 'măng tây'),
(2, 'cà rốt'),
(3, 'nấm đùi gà'),
(4, 'Gà nguyên con'),
(5, 'Bột chiên giòn'),
(6, 'Gia vị'),
(7, 'Dầu ăn'),
(74, 'bầu'),
(75, 'vịt'),
(76, 'ổi'),
(77, 'đà đieeur'),
(78, 'gà vịt'),
(79, 'cà '),
(80, 'dưa'),
(81, 'gà'),
(82, ''),
(83, 'cà chua'),
(92, 'nguyên liệu 1 '),
(93, 'test'),
(94, 'nguyên liệu 2'),
(95, 'b1'),
(96, 'b'),
(97, 'b2'),
(98, 'nl1'),
(99, 'nl'),
(100, 'ngon'),
(101, 'ba'),
(102, 'bí'),
(103, 'Cánh Gà'),
(104, 'Nước Mắm'),
(105, 'Đường'),
(106, 'Tiêu'),
(107, 'Tôm'),
(108, 'Cốt Me'),
(109, 'Xoài'),
(110, 'Cá Khô'),
(111, 'Nấm Kim Châm'),
(112, 'Rong Biển'),
(113, 'Sườn Heo'),
(114, 'Khoai Tây'),
(115, 'Tương Ớt Hàn Quốc'),
(116, 'Hành Tây'),
(117, 'Sương Sáo'),
(118, 'Nước Đường'),
(119, 'Nước Lọc'),
(120, 'Mè'),
(121, 'Yến Mạch'),
(122, 'Trứng'),
(123, 'Whipping Cream'),
(124, 'Sữa Đậu Nành'),
(125, 'Gelatin'),
(126, 'Cam'),
(127, 'Bột Rau Câu'),
(128, 'Sữa Chua'),
(129, 'Hạt Granola'),
(130, 'Miến'),
(131, 'Thịt Bò'),
(132, 'Hành'),
(133, 'Giá'),
(134, 'Hẹ'),
(135, 'Bông Bí'),
(136, 'Tỏi'),
(137, 'Nước Tương'),
(138, 'Hến'),
(139, 'Nấm Mèo'),
(140, 'Dầu Hào'),
(141, 'Cải Ngọt'),
(142, 'Mọc'),
(143, 'Hạt Nêm'),
(144, 'Chả Tôm'),
(145, 'Bí Xanh'),
(146, 'Xương Heo'),
(147, 'Đậu Hũ'),
(148, 'Tương Míso'),
(149, 'Rau Muống'),
(150, 'Chanh'),
(151, 'Đậu Phộng'),
(152, 'Bánh Tráng'),
(153, 'Chocolate'),
(154, 'Bơ'),
(155, 'Cornflakes'),
(156, 'Khoai Lang Tím'),
(157, 'Sữa Dê'),
(158, 'Đường Nâu'),
(159, 'Nghêu'),
(160, 'Sả'),
(161, 'Muối'),
(162, 'Gừng'),
(163, 'Bia'),
(164, '1'),
(165, 'Bột Chiên Giòn\'Thịt Heo'),
(166, 'Tương Cà'),
(167, 'Giấm'),
(168, 'Thịt Heo'),
(169, 'Ớt'),
(170, 'Măng'),
(171, 'Xương Gà'),
(172, 'Thịt Gà'),
(173, 'Phở'),
(174, 'Bột Nêm Phở'),
(175, 'Mật Ong'),
(176, 'Bí Đỏ'),
(177, 'Sốt Vang'),
(178, 'Kim Chi'),
(179, 'Mì Gói'),
(180, 'Lá Lốt'),
(181, 'Nui'),
(182, 'Cơm'),
(183, 'Cá Ngừ'),
(184, 'Sốt Mayonaise'),
(185, 'Rau'),
(186, 'Cá Hồi  '),
(187, 'Cá Thu '),
(188, 'Cá Hồi	'),
(189, 'Xà Lách '),
(190, 'Cá Cơm '),
(191, 'Bắp Cải Trắng	'),
(192, 'Hành Lá');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `quantrivien`
--

CREATE TABLE `quantrivien` (
  `TenDangNhap` varchar(30) NOT NULL,
  `MatKhau` varchar(255) NOT NULL,
  `HoTen` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `quantrivien`
--

INSERT INTO `quantrivien` (`TenDangNhap`, `MatKhau`, `HoTen`) VALUES
('admin', '123456', 'Qu?n tr? viên chính');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `theodoi`
--

CREATE TABLE `theodoi` (
  `NguoiTheoDoi` int(11) NOT NULL,
  `NguoiDuocTheoDoi` int(11) NOT NULL,
  `NgayTheoDoi` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `theodoi`
--

INSERT INTO `theodoi` (`NguoiTheoDoi`, `NguoiDuocTheoDoi`, `NgayTheoDoi`) VALUES
(8, 7, '2024-12-28 23:28:29'),
(8, 9, '2024-12-29 01:50:23'),
(9, 11, '2024-12-29 21:56:30'),
(11, 4, '2024-12-31 12:04:30');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `thongbao`
--

CREATE TABLE `thongbao` (
  `MaThongBao` int(11) NOT NULL,
  `MaNguoiDung` int(11) DEFAULT NULL,
  `MaCongThuc` int(11) DEFAULT NULL,
  `NoiDung` text DEFAULT NULL,
  `DaXem` bit(1) DEFAULT b'0',
  `ThoiGian` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `thongbao`
--

INSERT INTO `thongbao` (`MaThongBao`, `MaNguoiDung`, `MaCongThuc`, `NoiDung`, `DaXem`, `ThoiGian`) VALUES
(16, 8, 96, 'Le Van C đã bình luận bài viết của bạn.', b'0', '2024-12-30 11:34:30'),
(17, 9, 97, 'Tran Thi B đã bình luận bài viết của bạn.', b'0', '2024-12-30 11:41:54'),
(18, 8, 101, 'Le Van C đã bình luận bài viết của bạn.', b'0', '2024-12-30 13:21:36'),
(19, 7, 100, ' đã bình luận bài viết của bạn.', b'0', '2024-12-31 12:11:10');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `yeuthich`
--

CREATE TABLE `yeuthich` (
  `MaNguoiDung` int(11) NOT NULL,
  `MaCongThuc` int(11) NOT NULL,
  `NgayLuu` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `yeuthich`
--

INSERT INTO `yeuthich` (`MaNguoiDung`, `MaCongThuc`, `NgayLuu`) VALUES
(8, 2, '2025-01-01 17:12:15'),
(8, 102, '2025-01-01 17:11:50'),
(8, 127, '2025-01-01 17:12:20'),
(8, 131, '2025-01-01 17:12:32'),
(9, 105, '2024-12-29 21:49:51');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `anhminhhoa`
--
ALTER TABLE `anhminhhoa`
  ADD PRIMARY KEY (`MaAnh`),
  ADD KEY `MaHuongDan` (`MaHuongDan`);

--
-- Chỉ mục cho bảng `baocaobaiviet`
--
ALTER TABLE `baocaobaiviet`
  ADD PRIMARY KEY (`MaBaoCao`),
  ADD KEY `MaCongThuc` (`MaCongThuc`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`);

--
-- Chỉ mục cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD PRIMARY KEY (`MaBinhLuan`),
  ADD KEY `MaCongThuc` (`MaCongThuc`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`);

--
-- Chỉ mục cho bảng `chitietnguyenlieu`
--
ALTER TABLE `chitietnguyenlieu`
  ADD PRIMARY KEY (`MaCongThuc`,`MaNguyenLieu`),
  ADD KEY `MaNguyenLieu` (`MaNguyenLieu`);

--
-- Chỉ mục cho bảng `congthuc`
--
ALTER TABLE `congthuc`
  ADD PRIMARY KEY (`MaCongThuc`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`);

--
-- Chỉ mục cho bảng `huongdan`
--
ALTER TABLE `huongdan`
  ADD PRIMARY KEY (`MaHuongDan`),
  ADD KEY `MaCongThuc` (`MaCongThuc`);

--
-- Chỉ mục cho bảng `lienhe`
--
ALTER TABLE `lienhe`
  ADD PRIMARY KEY (`MaLienHe`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`);

--
-- Chỉ mục cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`MaNguoiDung`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `TaiKhoan` (`TaiKhoan`);

--
-- Chỉ mục cho bảng `nguyenlieu`
--
ALTER TABLE `nguyenlieu`
  ADD PRIMARY KEY (`MaNguyenLieu`);

--
-- Chỉ mục cho bảng `quantrivien`
--
ALTER TABLE `quantrivien`
  ADD PRIMARY KEY (`TenDangNhap`);

--
-- Chỉ mục cho bảng `theodoi`
--
ALTER TABLE `theodoi`
  ADD PRIMARY KEY (`NguoiTheoDoi`,`NguoiDuocTheoDoi`),
  ADD KEY `NguoiDuocTheoDoi` (`NguoiDuocTheoDoi`);

--
-- Chỉ mục cho bảng `thongbao`
--
ALTER TABLE `thongbao`
  ADD PRIMARY KEY (`MaThongBao`),
  ADD KEY `MaNguoiDung` (`MaNguoiDung`),
  ADD KEY `MaCongThuc` (`MaCongThuc`);

--
-- Chỉ mục cho bảng `yeuthich`
--
ALTER TABLE `yeuthich`
  ADD PRIMARY KEY (`MaNguoiDung`,`MaCongThuc`),
  ADD KEY `MaCongThuc` (`MaCongThuc`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `anhminhhoa`
--
ALTER TABLE `anhminhhoa`
  MODIFY `MaAnh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=414;

--
-- AUTO_INCREMENT cho bảng `baocaobaiviet`
--
ALTER TABLE `baocaobaiviet`
  MODIFY `MaBaoCao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  MODIFY `MaBinhLuan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `congthuc`
--
ALTER TABLE `congthuc`
  MODIFY `MaCongThuc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT cho bảng `huongdan`
--
ALTER TABLE `huongdan`
  MODIFY `MaHuongDan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=294;

--
-- AUTO_INCREMENT cho bảng `lienhe`
--
ALTER TABLE `lienhe`
  MODIFY `MaLienHe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `MaNguoiDung` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `nguyenlieu`
--
ALTER TABLE `nguyenlieu`
  MODIFY `MaNguyenLieu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT cho bảng `thongbao`
--
ALTER TABLE `thongbao`
  MODIFY `MaThongBao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `anhminhhoa`
--
ALTER TABLE `anhminhhoa`
  ADD CONSTRAINT `anhminhhoa_ibfk_1` FOREIGN KEY (`MaHuongDan`) REFERENCES `huongdan` (`MaHuongDan`);

--
-- Các ràng buộc cho bảng `baocaobaiviet`
--
ALTER TABLE `baocaobaiviet`
  ADD CONSTRAINT `baocaobaiviet_ibfk_1` FOREIGN KEY (`MaCongThuc`) REFERENCES `congthuc` (`MaCongThuc`),
  ADD CONSTRAINT `baocaobaiviet_ibfk_2` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`);

--
-- Các ràng buộc cho bảng `binhluan`
--
ALTER TABLE `binhluan`
  ADD CONSTRAINT `binhluan_ibfk_1` FOREIGN KEY (`MaCongThuc`) REFERENCES `congthuc` (`MaCongThuc`),
  ADD CONSTRAINT `binhluan_ibfk_2` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`);

--
-- Các ràng buộc cho bảng `chitietnguyenlieu`
--
ALTER TABLE `chitietnguyenlieu`
  ADD CONSTRAINT `chitietnguyenlieu_ibfk_1` FOREIGN KEY (`MaCongThuc`) REFERENCES `congthuc` (`MaCongThuc`),
  ADD CONSTRAINT `chitietnguyenlieu_ibfk_2` FOREIGN KEY (`MaNguyenLieu`) REFERENCES `nguyenlieu` (`MaNguyenLieu`);

--
-- Các ràng buộc cho bảng `congthuc`
--
ALTER TABLE `congthuc`
  ADD CONSTRAINT `congthuc_ibfk_1` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`);

--
-- Các ràng buộc cho bảng `huongdan`
--
ALTER TABLE `huongdan`
  ADD CONSTRAINT `huongdan_ibfk_1` FOREIGN KEY (`MaCongThuc`) REFERENCES `congthuc` (`MaCongThuc`);

--
-- Các ràng buộc cho bảng `lienhe`
--
ALTER TABLE `lienhe`
  ADD CONSTRAINT `lienhe_ibfk_1` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`);

--
-- Các ràng buộc cho bảng `theodoi`
--
ALTER TABLE `theodoi`
  ADD CONSTRAINT `theodoi_ibfk_1` FOREIGN KEY (`NguoiTheoDoi`) REFERENCES `nguoidung` (`MaNguoiDung`),
  ADD CONSTRAINT `theodoi_ibfk_2` FOREIGN KEY (`NguoiDuocTheoDoi`) REFERENCES `nguoidung` (`MaNguoiDung`);

--
-- Các ràng buộc cho bảng `thongbao`
--
ALTER TABLE `thongbao`
  ADD CONSTRAINT `thongbao_ibfk_1` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`),
  ADD CONSTRAINT `thongbao_ibfk_2` FOREIGN KEY (`MaCongThuc`) REFERENCES `congthuc` (`MaCongThuc`);

--
-- Các ràng buộc cho bảng `yeuthich`
--
ALTER TABLE `yeuthich`
  ADD CONSTRAINT `yeuthich_ibfk_1` FOREIGN KEY (`MaNguoiDung`) REFERENCES `nguoidung` (`MaNguoiDung`),
  ADD CONSTRAINT `yeuthich_ibfk_2` FOREIGN KEY (`MaCongThuc`) REFERENCES `congthuc` (`MaCongThuc`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
