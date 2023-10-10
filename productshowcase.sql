-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 03, 2023 at 04:50 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `productshowcase`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2023_07_28_023230_create_m_categories_table', 1),
(7, '2023_07_28_023305_create_m_sub_categories_table', 1),
(8, '2023_07_28_052916_create_sessions_table', 1),
(9, '2023_07_29_023157_create_m_products_table', 1),
(10, '2023_07_29_023338_create_m_gallaries_table', 1),
(11, '2023_07_29_023400_create_m_contacts_table', 1),
(12, '2023_07_29_023513_create_m_subscribers_table', 1),
(13, '2023_07_29_023534_create_m_mail_marketings_table', 1),
(14, '2023_07_29_023548_create_m_articles_table', 1),
(15, '2023_07_29_023602_create_m_faqs_table', 1),
(16, '2023_07_29_023615_create_m_appsettings_table', 1),
(17, '2023_07_29_023628_create_m_emailsettings_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `m_appsettings`
--

CREATE TABLE `m_appsettings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `photo_limit` int(11) NOT NULL DEFAULT 1,
  `logo_path` varchar(128) DEFAULT NULL,
  `shop_name` varchar(128) DEFAULT NULL,
  `address` varchar(128) NOT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `map_link` varchar(256) DEFAULT NULL,
  `facebook_plugin` varchar(128) DEFAULT NULL,
  `banner_1` varchar(256) NOT NULL,
  `banner_2` varchar(256) DEFAULT NULL,
  `banner_3` varchar(256) DEFAULT NULL,
  `banner_4` varchar(256) DEFAULT NULL,
  `banner_5` varchar(256) DEFAULT NULL,
  `banner_6` varchar(256) DEFAULT NULL,
  `about_path` varchar(256) DEFAULT NULL,
  `about` varchar(10240) DEFAULT NULL,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `m_appsettings`
--

INSERT INTO `m_appsettings` (`id`, `photo_limit`, `logo_path`, `shop_name`, `address`, `phone`, `map_link`, `facebook_plugin`, `banner_1`, `banner_2`, `banner_3`, `banner_4`, `banner_5`, `banner_6`, `about_path`, `about`, `del_flg`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 'X Store', 'No 1,200 6B Yadanar Street Thingangyun', '+9509421010735', 'https://www.google.com/maps/place/Ex;braiN+Office/@16.8430957,96.1949609,17z/data=!3m1!4b1!4m6!3m5!1s0x30c193f51faa68ff:0x72868c60b69532c4!8m2!3d16.8430906!4d96.1975358!16s%2Fg%2F11scs4qwp8?entry=ttu', NULL, 'no image', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_articles`
--

CREATE TABLE `m_articles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `a_photo` varchar(256) NOT NULL,
  `a_title` varchar(128) NOT NULL,
  `description` varchar(2048) NOT NULL,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `m_articles`
--

INSERT INTO `m_articles` (`id`, `a_photo`, `a_title`, `description`, `del_flg`, `created_at`, `updated_at`) VALUES
(7, 'https://exbrain1130.sgp1.digitaloceanspaces.com/xstore/articles/soNBDeu8HOmxgTmwxefbECQ4YSLjQwzgHGhTt8pj.jpg', 'hello', '<p>new </p>', 0, '2023-08-22 03:03:28', '2023-08-22 03:04:21');

-- --------------------------------------------------------

--
-- Table structure for table `m_categories`
--

CREATE TABLE `m_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `c_name` varchar(128) NOT NULL,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `m_categories`
--

INSERT INTO `m_categories` (`id`, `c_name`, `del_flg`, `created_at`, `updated_at`) VALUES
(42, 'iphone', 0, '2023-08-05 22:55:50', '2023-08-05 22:55:50'),
(43, 'iMac', 0, '2023-08-05 23:06:11', '2023-08-05 23:06:11'),
(44, 'ipad', 0, '2023-08-06 00:05:20', '2023-08-06 00:05:20');

-- --------------------------------------------------------

--
-- Table structure for table `m_contacts`
--

CREATE TABLE `m_contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullname` varchar(256) NOT NULL,
  `email` varchar(128) NOT NULL,
  `description` varchar(1024) NOT NULL,
  `subscribed` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `m_contacts`
--

INSERT INTO `m_contacts` (`id`, `fullname`, `email`, `description`, `subscribed`, `status`, `del_flg`, `created_at`, `updated_at`) VALUES
(1, 'Linn Ko Ko', 'linnkoko1130@gmail.com', 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem lovelovelovelovelovelovelovelovelovelovelovelove', 1, 0, 0, NULL, NULL),
(2, 'Linn Ko Ko', 'linnkoko1130@gmail.com', 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem lovelovelovelovelovelovelovelovelovelovelovelove', 1, 0, 0, NULL, NULL),
(3, 'Linn Ko Ko', 'linnkoko1130@gmail.com', 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem loveloveloveloveloveloveloveloveloveloveloveloveLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem lovelovelovelovelovelovelovelovelovelovelovelove', 1, 0, 0, NULL, NULL),
(4, 'Linn Ko', 'linnkoko1130@gmail.com', 'Need to take a meeting', 1, 0, 0, '2023-08-19 21:04:05', '2023-08-19 21:04:05'),
(5, 'Linn Ko', 'linnkoko1130@gmail.com', 'Need to take a meeting', 1, 0, 0, '2023-08-19 21:04:42', '2023-08-19 21:04:42'),
(6, 'Linn Ko', 'linnkoko1130@gmail.com', 'Need to take a meeting', 1, 0, 0, '2023-08-19 21:05:12', '2023-08-19 21:05:12'),
(7, 'Linn Ko', 'linnkoko1130@gmail.com', 'Need to take a meeting', 1, 0, 0, '2023-08-19 21:05:24', '2023-08-19 21:05:24'),
(8, 'Testing', 'linnkokoo1130@gmail.com', 'testing', 0, 0, 0, '2023-08-19 21:07:27', '2023-08-19 21:07:27'),
(9, 'sdsad', 'linn@gmail.com', 'dsasdasd', 1, 0, 0, '2023-08-19 21:07:51', '2023-08-19 21:07:51');

-- --------------------------------------------------------

--
-- Table structure for table `m_emailsettings`
--

CREATE TABLE `m_emailsettings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(32) NOT NULL,
  `fromname` varchar(128) NOT NULL,
  `frommail` varchar(128) NOT NULL,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `m_emailsettings`
--

INSERT INTO `m_emailsettings` (`id`, `username`, `password`, `fromname`, `frommail`, `del_flg`, `created_at`, `updated_at`) VALUES
(1, 'linnkoko1130@gmail.com', 'ase21fgmde', 'XStore', 'linnkoko1130@gmail.com', 0, '2023-08-07 22:53:56', '2023-08-07 22:53:56');

-- --------------------------------------------------------

--
-- Table structure for table `m_faqs`
--

CREATE TABLE `m_faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question` varchar(128) NOT NULL,
  `answer` varchar(1024) NOT NULL,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `m_faqs`
--

INSERT INTO `m_faqs` (`id`, `question`, `answer`, `del_flg`, `created_at`, `updated_at`) VALUES
(1, 'How to buy iPhone?', 'You can buy here XStore', 0, NULL, NULL),
(2, 'How to buy iPhone?', 'You can buy here XStore', 0, NULL, NULL),
(3, 'How to buy iPhone?', 'You can buy here XStore', 0, NULL, NULL),
(4, 'How to buy iPhone?', 'You can buy here XStore', 0, NULL, NULL),
(5, 'How to buy iPhone?', 'You can buy here XStore', 0, NULL, NULL),
(6, 'How to buy iPhone?', 'You can buy here XStore', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_gallaries`
--

CREATE TABLE `m_gallaries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `p_id` bigint(20) UNSIGNED NOT NULL,
  `path` varchar(256) NOT NULL,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `m_gallaries`
--

INSERT INTO `m_gallaries` (`id`, `p_id`, `path`, `del_flg`, `created_at`, `updated_at`) VALUES
(37, 7, 'https://exbrain1130.sgp1.digitaloceanspaces.com/xstore/products/agGZDodzvJ8LB4ELdCs6IFLcn8Bmsaqh4KwjzYMh.jpg', 0, '2023-08-22 02:51:22', '2023-08-22 02:53:25'),
(38, 7, 'https://exbrain1130.sgp1.digitaloceanspaces.com/xstore/products/QP4ja0xxzq3OXUTx4rjwX2a8GXZuFIoNXtV87gMY.jpg', 0, '2023-08-22 02:51:22', '2023-09-27 00:33:11'),
(39, 7, 'https://exbrain1130.sgp1.digitaloceanspaces.com/xstore/products/bPQlvswmgdpQW5Ab6cwgbR6xCnsqSPCtciSsDvGo.jpg', 0, '2023-08-22 02:51:22', '2023-09-27 00:33:58'),
(40, 7, 'https://exbrain1130.sgp1.digitaloceanspaces.com/xstore/products/X1z3fPmzBKLHFVYmE8UO7TPP47vjOjghvnCvuAMF.jpg', 0, '2023-08-22 02:51:22', '2023-08-22 02:51:22'),
(41, 7, 'https://exbrain1130.sgp1.digitaloceanspaces.com/xstore/products/QLqXGwZb21Xwu0ef77rrFGnSHWLuv0RuTSKm50T3.jpg', 0, '2023-08-22 02:51:22', '2023-08-22 02:51:22'),
(42, 7, 'https://exbrain1130.sgp1.digitaloceanspaces.com/xstore/products/v2vfVo4SHUyNFy35FWJmYF06QjUdhunaMsRTEnbX.jpg', 0, '2023-08-22 02:51:22', '2023-09-27 00:50:42');

-- --------------------------------------------------------

--
-- Table structure for table `m_mail_marketings`
--

CREATE TABLE `m_mail_marketings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `to` longtext NOT NULL,
  `subject` varchar(256) NOT NULL,
  `mail_body` longtext NOT NULL,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `m_products`
--

CREATE TABLE `m_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `subcategory_id` bigint(20) UNSIGNED NOT NULL,
  `p_name` varchar(128) NOT NULL,
  `p_des` varchar(10240) NOT NULL,
  `p_buy_price` int(11) DEFAULT NULL,
  `p_selling_price` int(11) NOT NULL,
  `p_stock` int(11) NOT NULL DEFAULT 0,
  `p_keyword` varchar(1024) DEFAULT NULL,
  `view_count` int(11) NOT NULL DEFAULT 0,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `m_products`
--

INSERT INTO `m_products` (`id`, `category_id`, `subcategory_id`, `p_name`, `p_des`, `p_buy_price`, `p_selling_price`, `p_stock`, `p_keyword`, `view_count`, `del_flg`, `created_at`, `updated_at`) VALUES
(7, 43, 30, 'This is a new ipad ai', '<p>New ipad air is released</p>', 10000, 10000, 8, 'New, Product, iPad', 0, 0, '2023-08-22 02:51:21', '2023-08-24 01:37:11');

-- --------------------------------------------------------

--
-- Table structure for table `m_subscribers`
--

CREATE TABLE `m_subscribers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subscriber_mail` varchar(256) NOT NULL,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `m_subscribers`
--

INSERT INTO `m_subscribers` (`id`, `subscriber_mail`, `del_flg`, `created_at`, `updated_at`) VALUES
(1, 'linnkoko1130@gmail.com', 0, NULL, NULL),
(2, 'exbraineducation1130@gmail.com', 0, NULL, NULL),
(3, 'jwo1homework@gmail.com', 0, NULL, NULL),
(4, 'jwo2homework@gmail.com', 0, NULL, NULL),
(5, 'jwo3homework@gmail.com', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `m_sub_categories`
--

CREATE TABLE `m_sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `c_id` bigint(20) UNSIGNED NOT NULL,
  `sub_name` varchar(128) NOT NULL,
  `description` varchar(128) DEFAULT NULL,
  `del_flg` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `m_sub_categories`
--

INSERT INTO `m_sub_categories` (`id`, `c_id`, `sub_name`, `description`, `del_flg`, `created_at`, `updated_at`) VALUES
(28, 42, 'iphone 14 max', 'max version', 0, '2023-08-05 22:55:59', '2023-08-05 22:55:59'),
(29, 42, 'iphone 14 pro max', 'pro versionis not good', 0, '2023-08-05 22:56:11', '2023-08-05 23:44:20'),
(30, 43, 'imac 24.5', 'bigger', 0, '2023-08-05 23:06:29', '2023-08-05 23:43:45'),
(31, 44, 'ipad air', 'air version', 0, '2023-08-06 00:05:34', '2023-08-06 00:05:34');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('8ZEdAsaTxy1aUel8B69o21IDEVbPPVuGBDs2Fp8u', 1, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiOHdQOEVwZVFsR3g5cG9VT1lzUXpnbHd5ZTFDZ2x6bFlKUEZkNE10bCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjMwOiJodHRwOi8vMTI3LjAuMC4xOjgwMDEvcHJvZHVjdC9leUpwZGlJNklrRllSSGROVFZCTk0xUmpRMkZtY2xSUGJEaG5XVkU5UFNJc0luWmhiSFZsSWpvaVRGbEhUVVV6YWpSS2NEUmhPV2RpYVhsS2ExWjJaejA5SWl3aWJXRmpJam9pTW1ZNE5qVmlNek5tTkdReU5UZ3lNbUUyTldJd09XVXdaRGd3TkRSaVkyWXlZV0UzTWpKak1qTXpabUV6T1RoaU1qQXlOalZpTXpjNU5qTTFNRGt6TVNJc0luUmhaeUk2SWlKOSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoyMToicGFzc3dvcmRfaGFzaF9zYW5jdHVtIjtzOjYwOiIkMnkkMTAkOTJJWFVOcGtqTzByT1E1YnlNaS5ZZTRvS29FYTNSbzlsbEMvLm9nL2F0Mi51aGVXRy9pZ2kiO30=', 1692864657),
('gfdVWKt8LWh65uv66urVuHI9GYXn92y8yOpiIbAi', 1, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiQW9aWktxSnJXMDZIejVOQnB4MTR1VDdaWFVOT3kyZ0JSZzBnSXpWWSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MjE6InBhc3N3b3JkX2hhc2hfc2FuY3R1bSI7czo2MDoiJDJ5JDEwJDkySVhVTnBrak8wck9RNWJ5TWkuWWU0b0tvRWEzUm85bGxDLy5vZy9hdDIudWhlV0cvaWdpIjt9', 1695799246),
('kLPgY7NOOBE4miqIAsK0guRDqgcv3lMkXHJZ4j6K', 1, '127.0.0.1', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoic25uampsS0tmTnhwTVJZZVRKR2VKQ294VEdGWUFrb1hHTmNCN3pNdCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9sb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoyMToicGFzc3dvcmRfaGFzaF9zYW5jdHVtIjtzOjYwOiIkMnkkMTAkOTJJWFVOcGtqTzByT1E1YnlNaS5ZZTRvS29FYTNSbzlsbEMvLm9nL2F0Mi51aGVXRy9pZ2kiO30=', 1696301342);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(1, 'Linn Ko', 'linnkoko1130@gmail.com', '2023-07-28 20:48:57', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, NULL, NULL, 'kC7pzXEzsQwGUwN14lYaDsvsYQWG09nEPWIQggC2BskpkkinZ0oQnXuFYGAY', NULL, NULL, '2023-07-28 20:48:57', '2023-07-28 20:48:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `m_appsettings`
--
ALTER TABLE `m_appsettings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `m_articles`
--
ALTER TABLE `m_articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `m_categories`
--
ALTER TABLE `m_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `m_contacts`
--
ALTER TABLE `m_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `m_emailsettings`
--
ALTER TABLE `m_emailsettings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `m_faqs`
--
ALTER TABLE `m_faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `m_gallaries`
--
ALTER TABLE `m_gallaries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk from product` (`p_id`);

--
-- Indexes for table `m_mail_marketings`
--
ALTER TABLE `m_mail_marketings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `m_products`
--
ALTER TABLE `m_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `m_products_category_id_foreign` (`category_id`),
  ADD KEY `m_products_subcategory_id_foreign` (`subcategory_id`);

--
-- Indexes for table `m_subscribers`
--
ALTER TABLE `m_subscribers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `m_sub_categories`
--
ALTER TABLE `m_sub_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `m_sub_categories_c_id_foreign` (`c_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `m_appsettings`
--
ALTER TABLE `m_appsettings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `m_articles`
--
ALTER TABLE `m_articles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `m_categories`
--
ALTER TABLE `m_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `m_contacts`
--
ALTER TABLE `m_contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `m_emailsettings`
--
ALTER TABLE `m_emailsettings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `m_faqs`
--
ALTER TABLE `m_faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `m_gallaries`
--
ALTER TABLE `m_gallaries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `m_mail_marketings`
--
ALTER TABLE `m_mail_marketings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `m_products`
--
ALTER TABLE `m_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `m_subscribers`
--
ALTER TABLE `m_subscribers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `m_sub_categories`
--
ALTER TABLE `m_sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `m_gallaries`
--
ALTER TABLE `m_gallaries`
  ADD CONSTRAINT `fk from product` FOREIGN KEY (`p_id`) REFERENCES `m_products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `m_products`
--
ALTER TABLE `m_products`
  ADD CONSTRAINT `m_products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `m_categories` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `m_products_subcategory_id_foreign` FOREIGN KEY (`subcategory_id`) REFERENCES `m_sub_categories` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `m_sub_categories`
--
ALTER TABLE `m_sub_categories`
  ADD CONSTRAINT `m_sub_categories_c_id_foreign` FOREIGN KEY (`c_id`) REFERENCES `m_categories` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
