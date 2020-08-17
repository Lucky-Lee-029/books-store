-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 17, 2020 at 04:22 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `address_id` int(10) NOT NULL,
  `address_user` int(10) NOT NULL,
  `address_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`address_id`, `address_user`, `address_name`) VALUES
(1, 1, 'youraddress;big city;big city boy;old landmark;Vietnam;6500'),
(2, 2, 'Quang Ngai'),
(3, 3, 'Nha Trang;TP HCM;8;sadasds;ádasđá;6565'),
(6, 9, ';;;;;');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `admin_id` int(10) NOT NULL,
  `admin_logname` varchar(50) NOT NULL,
  `admin_password` varchar(50) NOT NULL,
  `admin_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admin_id`, `admin_logname`, `admin_password`, `admin_name`) VALUES
(1, 'hoangtruong', '123456', 'Hoang'),
(2, 'haile', '123456', 'Hai');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` int(10) NOT NULL,
  `book_name` varchar(50) NOT NULL,
  `book_cat` int(10) NOT NULL,
  `book_author` varchar(50) NOT NULL,
  `book_price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `book_name`, `book_cat`, `book_author`, `book_price`) VALUES
(1, '', 2, 'Hải', 40000),
(2, 'Cuốn theo chiều gió', 1, 'Margaret Mitchell', 120000),
(3, 'Saw', 3, 'Stephen', 30000),
(4, 'One Piece', 2, 'Oda', 30),
(5, 'Two Piece', 2, 'Oda', 30),
(6, 'Show me the money', 1, 'Stephen Hai', 50);

-- --------------------------------------------------------

--
-- Table structure for table `book_cart`
--

CREATE TABLE `book_cart` (
  `book_cart_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `order_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_cart`
--



-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(10) NOT NULL,
  `cart_bid` int(10) NOT NULL,
  `cart_coupon` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `cart_bid`, `cart_coupon`) VALUES
(1, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cat_id` int(10) NOT NULL,
  `cat_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cat_id`, `cat_name`) VALUES
(1, 'Ngôn tình'),
(2, 'Trinh thám'),
(3, 'Kinh dị');

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE `coupon` (
  `coupon_id` int(10) NOT NULL,
  `coupon_name` varchar(50) NOT NULL,
  `coupon_content` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `coupon`
--

INSERT INTO `coupon` (`coupon_id`, `coupon_name`, `coupon_content`) VALUES
(1, 'Trung thu vui vẻ', 15),
(2, 'Đêm hội trăng rằm', 20);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(10) NOT NULL,
  `order_user` int(10) NOT NULL,
  `order_time` varchar(50) NOT NULL,
  `order_receive` varchar(50) NOT NULL,
  `order_price` int(10) NOT NULL,
  `order_address` int(10) NOT NULL,
  `order_status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user-id` int(10) NOT NULL,
  `user-username` varchar(50) DEFAULT NULL,
  `user-password` varchar(50) DEFAULT NULL,
  `user-name` varchar(50) NOT NULL,
  `user-phone` varchar(11) NOT NULL,
  `user-email` varchar(50) NOT NULL,
  `user-fb` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user-id`, `user-username`, `user-password`, `user-name`, `user-phone`, `user-email`, `user-fb`) VALUES
(1, 'hai', '12345216', 'hai le', '01293213', 'dssf', NULL),
(2, 'hoang', '123456', 'hoang truong', '01293123', 'hoang@gmail.com', NULL),
(3, 'chung', '1234567', 'chung tran', ' editlan2 ', ' edit tiep lan 3 ', NULL),

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `address_user` (`address_user`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `fk_foreign_book_cat` (`book_cat`);
ALTER TABLE `books` ADD FULLTEXT KEY `book_name` (`book_name`);

--
-- Indexes for table `book_cart`
--
ALTER TABLE `book_cart`
  ADD PRIMARY KEY (`book_cart_id`),
  ADD KEY `to_book` (`book_id`),
  ADD KEY `to_order` (`order_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `cart_bid` (`cart_bid`),
  ADD KEY `cart_coupon` (`cart_coupon`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`coupon_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `order_address` (`order_address`),
  ADD KEY `order_user` (`order_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user-id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `address_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `book_cart`
--
ALTER TABLE `book_cart`
  MODIFY `book_cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `cat_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `coupon`
--
ALTER TABLE `coupon`
  MODIFY `coupon_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user-id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_user` FOREIGN KEY (`address_user`) REFERENCES `users` (`user-id`);

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `fk_foreign_book_cat` FOREIGN KEY (`book_cat`) REFERENCES `categories` (`cat_id`);

--
-- Constraints for table `book_cart`
--
ALTER TABLE `book_cart`
  ADD CONSTRAINT `to_book` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`),
  ADD CONSTRAINT `to_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_bid` FOREIGN KEY (`cart_bid`) REFERENCES `users` (`user-id`),
  ADD CONSTRAINT `cart_coupon` FOREIGN KEY (`cart_coupon`) REFERENCES `coupon` (`coupon_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `order_address` FOREIGN KEY (`order_address`) REFERENCES `address` (`address_id`),
  ADD CONSTRAINT `order_user` FOREIGN KEY (`order_user`) REFERENCES `users` (`user-id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
