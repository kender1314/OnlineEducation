/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost:3306
 Source Schema         : onlineeducation

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 19/06/2020 14:19:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for gp_admin
-- ----------------------------
DROP TABLE IF EXISTS `gp_admin`;
CREATE TABLE `gp_admin`  (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_authority` int(11) NOT NULL COMMENT '1：业务管理员，2：视频管理员，3：超级管理员',
  `admin_position` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_user_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_is_delete` int(11) NULL DEFAULT NULL COMMENT '0：未删除，1：删除',
  PRIMARY KEY (`admin_id`) USING BTREE,
  UNIQUE INDEX `admin_name`(`admin_name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_admin
-- ----------------------------
INSERT INTO `gp_admin` VALUES (1, 'admin', 'sM;T:k35.Naj5Any]M]T7cP=t0W:ZY\\2Rm', 3, '项目经理', 'hejiang', 0);
INSERT INTO `gp_admin` VALUES (2, 'videoadmin', 'sM;T:k35.Naj5Any]M]T7cP=t0W:ZY\\2Rm', 2, '经理', '何江', 0);
INSERT INTO `gp_admin` VALUES (3, 'businessadmin', 'sM;T:k35.Naj5Any]M]T7cP=t0W:ZY\\2Rm', 1, '项目经理', 'hejiang', 0);
INSERT INTO `gp_admin` VALUES (4, 'huahua', '_M\'TAkB5GN.jHAZy!MMT>c]=xjsiy\"B[@/', 2, '部门主管', 'hejiang', 0);
INSERT INTO `gp_admin` VALUES (5, 'uuuuuu', 'mYA3mNymPQfDyE`yJMHw$=0=m``FaRf]h#', 1, '总经理', 'hejiang', 0);
INSERT INTO `gp_admin` VALUES (7, 'zzzzz', '2MFTyk%50NWjpA$ygMkTHcE=eqrKeQen\'>', 1, '经理', '葫芦娃', 0);
INSERT INTO `gp_admin` VALUES (8, 'caicaizi', 'QMKTDk_5_N8jmA?ypMET4cp=^k\"oJ^Dwfr', 1, '部门主管', 'hejiang', 0);
INSERT INTO `gp_admin` VALUES (9, 'ccccc', 'CMYT6k95DNAj>Aoy0MtTHc==$@hoH!6W]y', 1, 'sss', 'sad', 1);
INSERT INTO `gp_admin` VALUES (11, 'cascc', '(MRT5kp5PNcj0Avy*MhT3cX=s($l,;J6S9', 1, '项目经理', 'asawx', 0);

-- ----------------------------
-- Table structure for gp_answer
-- ----------------------------
DROP TABLE IF EXISTS `gp_answer`;
CREATE TABLE `gp_answer`  (
  `answer_id` int(11) NOT NULL AUTO_INCREMENT,
  `question_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `answer_date` date NOT NULL,
  `answer_content` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `answer_like` int(11) NOT NULL,
  `answer_reply_id` int(11) NULL DEFAULT NULL,
  `answer_is_delete` int(11) NULL DEFAULT NULL COMMENT '0：未删除，1：删除',
  `answer_is_watch` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`answer_id`) USING BTREE,
  INDEX `FK_Reference_1`(`question_id`) USING BTREE,
  INDEX `FK_Reference_8`(`user_id`) USING BTREE,
  CONSTRAINT `FK_Reference_1` FOREIGN KEY (`question_id`) REFERENCES `gp_question` (`question_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_8` FOREIGN KEY (`user_id`) REFERENCES `gp_user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 66 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_answer
-- ----------------------------
INSERT INTO `gp_answer` VALUES (7, 14, 1, '2020-04-18', ' 谈谈你对 Layui 使用单页开发模式的看法！', 46, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (8, 14, 10, '2020-04-18', 'layuiadmin单页面实现用的核心方法也是在layui里面，layui实现单页面不需要借助vue，你认真看layui文档介绍的底层方法就明白了，用hash实现路由也就几行代码的事情', 4, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (14, 14, 1, '2020-04-18', '而且layui实现的单页面框架优秀的也很多，不用氪金也能实现，去搜搜npeadmin', 22, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (15, 14, 7, '2020-05-19', '单页面不是取决你喜不喜欢，而是取决你的架构，你如果做前后端分离，没有单页面你怎么实现？后端有模板引擎可以引入一个片段，可以使用模板布局，前后端分离你难道跳转页面整个刷新，每个页面都手写一份头部、侧边栏吗？', 1, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (16, 14, 37, '2020-05-30', 'Layui 的却提供了许多在单页面开发商有帮助的底层方法。em~~，不过我原本想讨论的不是技术上如何来实现这个功能，也不是想讨论根据需求来决定使用哪一种开发方式。\r\n\r\n而是想在脱离工作、脱离需求、填补空隙。以平时创新创作做东西的心态来讨论，Layui 在拥有了不错的底层方法后，粉丝们认为是否应推出一套具有 Layui 风格的统一的单页框架 解决方案，而不用粉丝们自己通过这些底层方法来实现一个单页开发框架。\r\n\r\nLayui 框架正如文档所说“拿来即用”。现在我想让 基于 Layui 的单页框架 也做到: “拿来即用”，而非再通过Layui提供的方法来完成自己的单页框架。\r\n\r\n因该说是关于此问题的必要与否的讨论，而不是关于此问题如何实现的讨论。', 13, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (17, 14, 7, '2020-05-30', '错误原因：query.uniqueResult只能返回一个对象，数据库中存在两个相同的对象导致了此异常 “query did not return a unique result: xxxx”后边xxx会报出数据库中有多少个相同的对象。', 13, 8, 0, 0);
INSERT INTO `gp_answer` VALUES (18, 14, 38, '2020-05-22', '你没有必要再做一个，有这点时间不如多写点组件用，layui现在很多种组件都没有，做再好的框架，再好的模板，基础组件欠缺怎么拿来即用，layuiadmin、npeadmin、layuimini这些框架都有单页版，已经有这么多人再重复造轮子，却没有多少人专心做扩展组件，目前只觉得xmselect这个扩展组件算是用心做的，做模板没啥技术含量，做组件才有技术含量', 17, 7, 1, 0);
INSERT INTO `gp_answer` VALUES (19, 14, 105, '2020-05-01', '如何评价LayUI和他的作者贤心？', 0, 7, 0, 1);
INSERT INTO `gp_answer` VALUES (20, 14, 1, '2020-05-13', 'org.springframework.dao.IncorrectResultSizeDataAccessException: query did not return a unique result: 2; nested exception is javax.persistence.NonUniqueResultException: query did not return a unique result: 2', 11, 7, 0, 1);
INSERT INTO `gp_answer` VALUES (21, 14, 1, '2020-05-09', 'layui怎么用', 1, 7, 0, 0);
INSERT INTO `gp_answer` VALUES (22, 14, 38, '2020-08-20', 'layui是什么', 12, 7, 0, 0);
INSERT INTO `gp_answer` VALUES (23, 14, 1, '2020-04-24', 'Thymeleaf 身为SpringBoot的正宫; 推荐模板竟然不被广大开发者热衷. 这就导致了一些听从Spring建议的程序猿遇到Thymeleaf问题无处可问. 我不幸的也中枪了!!!     ', 0, 7, 0, 0);
INSERT INTO `gp_answer` VALUES (24, 14, 38, '2020-04-24', '如何将thymeleaf作为参数传给js', 4, 8, 0, 0);
INSERT INTO `gp_answer` VALUES (25, 14, 37, '2020-04-24', 'layui上传文件，如果知道参数怎么设置就挺简单的，你看我问的问题里面有代码。后台的PHP通过FILE接受就可以，返回个JSON。', 0, 7, 0, 0);
INSERT INTO `gp_answer` VALUES (26, 14, 1, '2020-04-24', '或者，你可以使用 < 标志。它表明先前被格式化的参数要被再次使用。例如：', 0, 18, 0, 0);
INSERT INTO `gp_answer` VALUES (27, 14, 1, '2020-04-24', '湿哒哒所大所大所', 0, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (28, 14, 36, '2020-04-24', 'layui多图上传时如何实现删除功能？', 0, 7, 0, 1);
INSERT INTO `gp_answer` VALUES (29, 14, 1, '2020-04-24', '？', 0, 25, 0, 0);
INSERT INTO `gp_answer` VALUES (30, 14, 1, '2020-04-24', '？？？？', 0, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (31, 14, 1, '2020-04-24', '？？？', 0, 8, 0, 0);
INSERT INTO `gp_answer` VALUES (32, 14, 39, '2020-04-25', '在网上搜索解决办法时有的感觉太复杂有的不符合自己所需要的所以就自己动手', 0, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (33, 14, 1, '2020-04-25', 'layui上传文件的接口怎么写？', 0, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (34, 14, 1, '2020-04-25', 'layui上传文件的url接口怎么写？怎么把文件的相关信息传送到PHP后台？除了layui，我没有用任何框架，要是直接用表单，倒是简单，但是到layui，没有表单就不会了', 0, 18, 0, 0);
INSERT INTO `gp_answer` VALUES (35, 2, 1, '2020-04-28', '可能学习不是最厉害的，但是一定有自己的思考', 1, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (36, 7, 105, '2020-05-29', '145874', 0, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (37, 14, 105, '2020-05-29', '打撒无无无', 0, 7, 0, 0);
INSERT INTO `gp_answer` VALUES (38, 2, 105, '2020-05-29', '地对地导弹', 0, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (39, 2, 105, '2020-05-29', '我问问', 0, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (40, 2, 38, '2020-05-29', '你真的很强', 0, 35, 0, 0);
INSERT INTO `gp_answer` VALUES (41, 55, 2, '2020-05-30', '安师大', 1, NULL, 0, 1);
INSERT INTO `gp_answer` VALUES (42, 2, 1, '2020-06-09', '这个问题很好解决', 0, 40, 0, 0);
INSERT INTO `gp_answer` VALUES (43, 55, 4, '2020-06-09', '可以的', 0, 41, 0, 1);
INSERT INTO `gp_answer` VALUES (44, 59, 4, '2020-06-09', '可以使用WebMvcConfigurer配置今天资源地址', 1, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (45, 59, 2, '2020-06-09', '可以的', 2, 44, 0, 0);
INSERT INTO `gp_answer` VALUES (46, 59, 2, '2020-06-09', '女儿的儿子', 2, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (47, 59, 4, '2020-06-09', '七组', 0, NULL, 0, 1);
INSERT INTO `gp_answer` VALUES (48, 59, 4, '2020-06-09', '姐妹的儿子', 0, 46, 0, 1);
INSERT INTO `gp_answer` VALUES (49, 59, 4, '2020-06-09', '害人听闻', 1, 44, 0, 0);
INSERT INTO `gp_answer` VALUES (50, 59, 1, '2020-06-09', '中国历史', 0, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (51, 59, 1, '2020-06-09', '夏至全省', 0, 50, 0, 0);
INSERT INTO `gp_answer` VALUES (52, 58, 105, '2020-06-09', '这个，还真不知道', 0, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (53, 59, 105, '2020-06-09', '痛痒', 0, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (54, 59, 105, '2020-06-09', '遇见', 0, 45, 0, 0);
INSERT INTO `gp_answer` VALUES (55, 59, 105, '2020-06-09', '宇宙并进', 0, 50, 0, 0);
INSERT INTO `gp_answer` VALUES (56, 59, 2, '2020-06-09', '科研', 0, 44, 0, 0);
INSERT INTO `gp_answer` VALUES (57, 59, 2, '2020-06-09', '花呗', 0, 44, 0, 0);
INSERT INTO `gp_answer` VALUES (58, 59, 2, '2020-06-09', '了还', 0, 44, 0, 0);
INSERT INTO `gp_answer` VALUES (59, 59, 2, '2020-06-09', '需要帮忙吗', 0, 44, 0, 0);
INSERT INTO `gp_answer` VALUES (60, 59, 2, '2020-06-09', '早点结束', 0, 44, 0, 0);
INSERT INTO `gp_answer` VALUES (61, 59, 2, '2020-06-09', '清晰的很呢', 0, 44, 0, 0);
INSERT INTO `gp_answer` VALUES (62, 59, 2, '2020-06-09', 'shutdown', 0, 44, 0, 0);
INSERT INTO `gp_answer` VALUES (63, 58, 1, '2020-06-10', '可以试试多图片删除方法', 1, NULL, 0, 0);
INSERT INTO `gp_answer` VALUES (64, 59, 1, '2020-06-10', 'WebMvcConfigurer', 1, NULL, 0, 1);
INSERT INTO `gp_answer` VALUES (65, 63, 2, '2020-06-11', '这个，问值不值', 0, NULL, 0, 0);

-- ----------------------------
-- Table structure for gp_bookmark
-- ----------------------------
DROP TABLE IF EXISTS `gp_bookmark`;
CREATE TABLE `gp_bookmark`  (
  `bookmark_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `bookmark_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `series_id` int(11) NULL DEFAULT NULL,
  `video_id` int(11) NULL DEFAULT NULL,
  `question_id` int(11) NULL DEFAULT NULL,
  `bookmark_is_delete` int(11) NULL DEFAULT NULL COMMENT '0：未删除，1：删除',
  `bookmark_is_video` int(11) NULL DEFAULT NULL COMMENT '0：问题收藏夹，1：视频收藏夹',
  PRIMARY KEY (`bookmark_id`) USING BTREE,
  UNIQUE INDEX `user_id`(`user_id`, `bookmark_name`, `question_id`) USING BTREE,
  UNIQUE INDEX `user_id_2`(`user_id`, `bookmark_name`, `series_id`) USING BTREE,
  UNIQUE INDEX `user_id_3`(`user_id`, `bookmark_name`, `video_id`) USING BTREE,
  INDEX `FK_Reference_3`(`user_id`) USING BTREE,
  INDEX `FK_Reference_100`(`question_id`) USING BTREE,
  INDEX `FK_Reference_101`(`video_id`) USING BTREE,
  INDEX `FK_Reference_102`(`series_id`) USING BTREE,
  CONSTRAINT `FK_Reference_100` FOREIGN KEY (`question_id`) REFERENCES `gp_question` (`question_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_101` FOREIGN KEY (`video_id`) REFERENCES `gp_video` (`video_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_102` FOREIGN KEY (`series_id`) REFERENCES `gp_video_series` (`series_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_3` FOREIGN KEY (`user_id`) REFERENCES `gp_user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 111 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_bookmark
-- ----------------------------
INSERT INTO `gp_bookmark` VALUES (2, 1, 'JAVA', NULL, 13, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (10, 1, 'JAVA', NULL, 14, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (11, 1, 'JAVA', NULL, 15, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (12, 1, 'JAVA', NULL, 16, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (13, 1, 'JAVA', NULL, 17, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (14, 1, 'JAVA', NULL, 18, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (15, 1, 'JAVA', NULL, 19, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (16, 1, 'JAVA', NULL, 20, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (17, 1, 'JAVA', NULL, 21, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (18, 1, 'JAVA', NULL, 22, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (22, 1, '技术研发', NULL, 13, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (23, 1, 'Elasticsearch', NULL, 1, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (24, 1, 'thymeleaf', NULL, 12, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (25, 1, 'Spring Security', NULL, 46, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (26, 1, '正则表达式', NULL, 31, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (27, 1, 'linux命令', NULL, 46, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (28, 1, 'HashMap详解', NULL, 45, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (29, 1, 'RSA加密算法', NULL, 41, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (35, 1, 'Idea及SVN操作', NULL, NULL, NULL, 0, 0);
INSERT INTO `gp_bookmark` VALUES (38, 1, 'Springboot', NULL, NULL, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (39, 1, 'JAVA', NULL, 44, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (45, 1, 'Idea及SVN操作', NULL, 13, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (46, 1, 'Springboot', NULL, NULL, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (47, 1, 'Springboot', NULL, 14, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (48, 1, 'Spring Security', NULL, 44, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (49, 1, 'Springboot', NULL, 44, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (54, 1, 'Java文件上传', NULL, NULL, NULL, 0, 0);
INSERT INTO `gp_bookmark` VALUES (55, 1, 'Java文件上传', NULL, NULL, 14, 0, 1);
INSERT INTO `gp_bookmark` VALUES (56, 4, 'Maven', NULL, NULL, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (57, 4, 'Maven', NULL, 24, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (58, 4, 'Maven', NULL, 14, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (59, 4, '学习', NULL, NULL, NULL, 0, 0);
INSERT INTO `gp_bookmark` VALUES (60, 4, '学习', NULL, NULL, 2, 0, 1);
INSERT INTO `gp_bookmark` VALUES (62, 1, 'Java文件上传', NULL, NULL, 51, 0, 1);
INSERT INTO `gp_bookmark` VALUES (63, 1, 'Idea及SVN操作', NULL, NULL, 52, 0, 1);
INSERT INTO `gp_bookmark` VALUES (64, 1, 'JAVA', NULL, 23, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (65, 1, 'JAVA', NULL, 24, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (66, 2, 'IDEA学习', NULL, NULL, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (67, 2, 'IDEA学习', NULL, 13, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (68, 2, 'Python', NULL, NULL, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (69, 2, 'IDEA学习', NULL, 14, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (71, 2, 'IDEA学习', NULL, 15, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (72, 2, 'C语言基础', NULL, NULL, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (73, 2, 'Springboot', NULL, NULL, NULL, 0, 0);
INSERT INTO `gp_bookmark` VALUES (74, 2, 'C语言基础', NULL, NULL, 7, 0, 1);
INSERT INTO `gp_bookmark` VALUES (75, 2, 'C语言基础', NULL, NULL, 9, 0, 1);
INSERT INTO `gp_bookmark` VALUES (76, 2, 'Javascript学习', NULL, NULL, NULL, 0, 0);
INSERT INTO `gp_bookmark` VALUES (77, 2, 'Java基础', NULL, NULL, 7, 1, 1);
INSERT INTO `gp_bookmark` VALUES (78, 2, 'Java基础', NULL, NULL, 10, 1, 1);
INSERT INTO `gp_bookmark` VALUES (79, 2, 'Mysql学习', NULL, NULL, NULL, 0, 0);
INSERT INTO `gp_bookmark` VALUES (80, 2, 'Mysql学习', NULL, NULL, 12, 0, 0);
INSERT INTO `gp_bookmark` VALUES (81, 2, 'Mysql学习', NULL, NULL, 10, 0, 0);
INSERT INTO `gp_bookmark` VALUES (86, 2, 'SSM', NULL, NULL, NULL, 0, 0);
INSERT INTO `gp_bookmark` VALUES (93, 2, 'SSM', NULL, NULL, 9, 0, 0);
INSERT INTO `gp_bookmark` VALUES (94, 2, 'SSM', NULL, NULL, 13, 0, 0);
INSERT INTO `gp_bookmark` VALUES (95, 2, 'C语言基础', NULL, 23, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (96, 2, 'C语言基础', NULL, 15, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (98, 2, 'SSM', NULL, NULL, 59, 0, 0);
INSERT INTO `gp_bookmark` VALUES (99, 2, 'Springboot', NULL, NULL, 47, 0, 0);
INSERT INTO `gp_bookmark` VALUES (100, 2, 'IDEA学习', NULL, 27, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (101, 2, 'Maven', NULL, NULL, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (102, 2, 'Maven', NULL, 13, NULL, 1, 1);
INSERT INTO `gp_bookmark` VALUES (103, 2, 'Maven', NULL, 15, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (104, 2, 'Maven', NULL, 27, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (105, 2, 'Maven', NULL, 28, NULL, 1, 1);
INSERT INTO `gp_bookmark` VALUES (106, 2, 'Javascript学习', NULL, NULL, 47, 0, 0);
INSERT INTO `gp_bookmark` VALUES (109, 2, 'Python', NULL, 15, NULL, 0, 1);
INSERT INTO `gp_bookmark` VALUES (110, 2, 'Maven', NULL, 18, NULL, 0, 1);

-- ----------------------------
-- Table structure for gp_carousel
-- ----------------------------
DROP TABLE IF EXISTS `gp_carousel`;
CREATE TABLE `gp_carousel`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `video_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_carousel
-- ----------------------------
INSERT INTO `gp_carousel` VALUES (1, 22);
INSERT INTO `gp_carousel` VALUES (2, 19);
INSERT INTO `gp_carousel` VALUES (3, 20);
INSERT INTO `gp_carousel` VALUES (4, 21);
INSERT INTO `gp_carousel` VALUES (5, 18);

-- ----------------------------
-- Table structure for gp_collection_question
-- ----------------------------
DROP TABLE IF EXISTS `gp_collection_question`;
CREATE TABLE `gp_collection_question`  (
  `collection_question_id` int(11) NOT NULL AUTO_INCREMENT,
  `bookmark_id` int(11) NULL DEFAULT NULL,
  `question_id` int(11) NULL DEFAULT NULL,
  `collection_video_id` int(11) NOT NULL,
  PRIMARY KEY (`collection_question_id`) USING BTREE,
  INDEX `FK_Reference_18`(`bookmark_id`) USING BTREE,
  INDEX `FK_Reference_20`(`question_id`) USING BTREE,
  CONSTRAINT `FK_Reference_18` FOREIGN KEY (`bookmark_id`) REFERENCES `gp_bookmark` (`bookmark_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_20` FOREIGN KEY (`question_id`) REFERENCES `gp_question` (`question_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for gp_collection_video
-- ----------------------------
DROP TABLE IF EXISTS `gp_collection_video`;
CREATE TABLE `gp_collection_video`  (
  `collection_video_id` int(11) NOT NULL AUTO_INCREMENT,
  `bookmark_id` int(11) NULL DEFAULT NULL,
  `series_id` int(11) NULL DEFAULT NULL,
  `video_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`collection_video_id`) USING BTREE,
  INDEX `FK_Reference_11`(`series_id`) USING BTREE,
  INDEX `FK_Reference_12`(`video_id`) USING BTREE,
  INDEX `FK_Reference_4`(`bookmark_id`) USING BTREE,
  CONSTRAINT `FK_Reference_11` FOREIGN KEY (`series_id`) REFERENCES `gp_video_series` (`series_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_12` FOREIGN KEY (`video_id`) REFERENCES `gp_video` (`video_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_4` FOREIGN KEY (`bookmark_id`) REFERENCES `gp_bookmark` (`bookmark_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for gp_comment
-- ----------------------------
DROP TABLE IF EXISTS `gp_comment`;
CREATE TABLE `gp_comment`  (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `video_id` int(11) NULL DEFAULT NULL,
  `comment_date` date NOT NULL,
  `comment_content` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `comment_like` int(11) NOT NULL,
  `comment_reply_id` int(11) NULL DEFAULT NULL,
  `comment_is_delete` int(11) NULL DEFAULT NULL COMMENT '0：未删除，1：删除',
  `comment_is_watch` int(11) NULL DEFAULT NULL COMMENT '1：被观看，0：未被观看',
  PRIMARY KEY (`comment_id`) USING BTREE,
  INDEX `FK_Reference_15`(`video_id`) USING BTREE,
  INDEX `FK_Reference_2`(`user_id`) USING BTREE,
  CONSTRAINT `FK_Reference_15` FOREIGN KEY (`video_id`) REFERENCES `gp_video` (`video_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_2` FOREIGN KEY (`user_id`) REFERENCES `gp_user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 77 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_comment
-- ----------------------------
INSERT INTO `gp_comment` VALUES (1, 1, 1, '2020-04-16', '这个视频值得推荐', 12, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (2, 7, 2, '2020-04-30', '超级喜欢丸子老师，温柔幽默，不管问什么资料都会给我，哪怕没有时间也会跟我说一声，感谢丸子老师，感谢六星让我遇见丸子老师。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (3, 9, 2, '2020-04-30', '维子老师讲课思路清晰，幽默风趣!趣!', 22, 2, 0, 0);
INSERT INTO `gp_comment` VALUES (4, 1, 16, '2020-05-04', '课程很棒，老师下课也会去帮助同学辅导，会在上课的气氛很好，就是那个机器人很奇怪把我加禁言了，我认为这个机构值得信赖让学生学的很轻松还会有回放，这是其他机构没有的，在线下老师还会吧上课时的源代码给发给我们使用，这一点的确很棒，问老师只要老师还在有时间都会尽可能的给我们回复，不懂还课以在课上问实在不行找辅导老师也会帮你解答的。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (5, 38, 16, '2020-05-04', '谢谢老师，老师讲的非常棒，简单易懂，非常适合入门。', 1, 4, 0, 1);
INSERT INTO `gp_comment` VALUES (6, 1, 4, '2020-05-24', '这个课是纯面向小白的，老师非常的细心，有不懂的有问必答。每一节课都能带来一些收获，讲课的时候也会说一些小技巧。 老师的课生动有趣，上课上的很舒服，知识总能在不经意间学会。有不懂的在课后老师也有很好的服务，资料都是直接给你，态度非常好。 大家如果是0基础可以从第一节课1开始听，到后面很多时候都会有直播，将一些经典的题目……………… 我好像啰嗦了。。。反正就是挺好的', 9, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (7, 1, NULL, '2020-05-13', '你的视频“什么是Maven”审核通过。', 3, NULL, 0, 1);
INSERT INTO `gp_comment` VALUES (8, 1, NULL, '2020-04-24', '你的视频“Maven仓库”审核通过。', 3, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (9, 1, NULL, '2020-04-24', '你的视频“Maven仓库之本地仓库”审核通过。', 2, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (10, 36, 13, '2020-04-24', '学习springboot时写的一个工具,因为我做接口的经常写文档,改文档,前端每次从svn更新下来很不方便,所以写了一个本地md文档读取展示工具, 前端访问我的ip就能看到相应的文档了', 2, 6, 1, 1);
INSERT INTO `gp_comment` VALUES (11, 37, 13, '2020-04-24', '前端使用的是layui,相当不错,适合像我这样的对js和css不太熟,但又想做出漂亮页面的后端程序员,很容易上手,基本就是边看文档边开发,还能保证进度.', 2, 6, 0, 1);
INSERT INTO `gp_comment` VALUES (12, 39, 13, '2020-04-24', '项目使用了Spring boot和Thymeleaf.\n对于Thymeleaf用到也并不是很多,主要用到了返回Html片段这个特性,配合缓存的话很实用,但是现在前后端分离为主流开发方式下,该框架感觉用处也不是很大了.\n\n作者：此博废弃_更新在个人博客\n链接：https://www.jianshu.com/p/c6d9201fb1b6\n来源：简书\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。', 0, 10, 0, 0);
INSERT INTO `gp_comment` VALUES (13, 1, 13, '2020-04-24', 'markdown文件下载后,整个格式都乱在了一起,中间的空白以及换行都没了,这是由于字节转换器导致的,因此需要配置一下字节转换器,如下:', 1, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (14, 1, 13, '2020-04-24', '你好，我现在还是一个小白，问下是springBoot应用到实际项目中的具体作用，可以分享下代码吗，谢谢', 1, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (15, 1, NULL, '2020-04-24', '你的视频“仓库配置”审核未通过，请重新上传。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (16, 1, 13, '2020-04-24', '在你的Spring Boot学习记录（三）--整合Mybatis少了下面的代码，不然扫描不到mapper.xml文件', 2, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (17, 1, 13, '2020-04-24', '我这里并没写MyBatisMapperScannerConfig 这个类,而是使用注解@mapper标识,这样的话可以避免你说的这个问题了', 3, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (18, 1, NULL, '2020-04-24', '你的视频“JDK的配置”审核未通过，请重新上传。', 0, NULL, 0, 1);
INSERT INTO `gp_comment` VALUES (19, 1, 13, '2020-04-24', '这个的话我现在工作经验不多，不好回答，个人感觉写起来很爽', 2, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (20, 39, 13, '2020-04-25', '一个pojo（JavaBean）中不能有两个属性同时映射到一个数据库字段上　', 1, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (21, 4, 13, '2020-04-25', '【org.hibernate.MappingException: Repeated column in mapping for entity】http://blog.csdn.net/rchm8519/article/details/30284515', 0, 6, 0, 0);
INSERT INTO `gp_comment` VALUES (22, 7, 13, '2020-04-25', '超50万行VC++源码: 大型组态工控、电力仿真CAD与GIS源码库', 0, 6, 0, 1);
INSERT INTO `gp_comment` VALUES (23, 1, 13, '2020-05-25', '你的视频“kend”审核未通过，请修改后重新上传', 1, NULL, 0, 1);
INSERT INTO `gp_comment` VALUES (24, 1, NULL, '2020-05-06', '这周的成就已达成，快进来瞅瞅吧', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (25, 4, 16, '2020-04-25', '不错，通熟易懂。基本上能跟上。', 0, 5, 0, 0);
INSERT INTO `gp_comment` VALUES (26, 4, 13, '2020-04-25', '如果你是人就好了 我们结伴喝酒吃肉 仗剑江湖', 0, 6, 0, 0);
INSERT INTO `gp_comment` VALUES (27, 4, 13, '2020-04-25', 'th:οnclick=\"\'javascript:searchHot(\\\'\'+${hot.name}+\'\\\',\\\'\'+${hot.hotType}+\'\\\')\'\"', 0, 6, 0, 1);
INSERT INTO `gp_comment` VALUES (28, 4, 13, '2020-04-25', '不科学，1.百度了一下，没找到全国有机大米促进会，2.据研究，没有表明研究出处， 3.被长期赞美大米比普通大米更有益健康，违反常识，没有科学依据，4.95％未标明', 0, 6, 0, 0);
INSERT INTO `gp_comment` VALUES (29, 4, 13, '2020-04-25', '使用RN + TS开发听书App，从需求分析，到功能实现，一步步带领大家完成功能，学会如何解决实际开发问题，是一个完整的项目开发实例。通过导航器、dva状态管理、图标生成组件、自定义导航器、动画效果、音视频的播放、动态导航和动态model、本地数据持久化等一系列的功能，帮助大家具备独立开发完整的RN应用的能力', 0, 6, 0, 0);
INSERT INTO `gp_comment` VALUES (30, 4, 13, '2020-04-25', 'thymeleaf 使用onclick传递参数问题 10-', 0, 6, 0, 0);
INSERT INTO `gp_comment` VALUES (31, 1, 13, '2020-04-25', 'thymeleaf th:onclick=传递多个参数 03-', 1, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (32, 1, NULL, '2020-04-25', '你的视频“Maven工程关系_依赖的传递性”审核通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (33, 1, NULL, '2020-04-25', '你的视频“常见插件_编译器插件”审核通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (34, 38, 13, '2020-04-25', 'thymeleaf使用onclick传递参数 06-10 2万+\nthymeleaf使用onclick事件传递多个参数', 0, 6, 0, 1);
INSERT INTO `gp_comment` VALUES (41, 1, 19, '2020-05-28', '撒大声地', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (42, 1, 19, '2020-05-28', '大萨达', 0, 41, 0, 0);
INSERT INTO `gp_comment` VALUES (43, 1, 13, '2020-05-29', '休闲时间', 1, 23, 0, 0);
INSERT INTO `gp_comment` VALUES (44, 1, 13, '2020-05-29', '休闲四万', 1, 31, 0, 0);
INSERT INTO `gp_comment` VALUES (45, 1, 13, '2020-05-29', '2222', 0, 20, 0, 0);
INSERT INTO `gp_comment` VALUES (46, 1, 13, '2020-05-29', '可以', 0, 23, 0, 0);
INSERT INTO `gp_comment` VALUES (47, 2, 14, '2020-05-29', '你是出色的人才', 2, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (48, 2, 14, '2020-05-29', '有不少媒体', 0, 47, 0, 1);
INSERT INTO `gp_comment` VALUES (49, 2, NULL, '2020-06-03', '您的视频“从Java后端到Web全栈”审核已通过。', 0, NULL, 0, 1);
INSERT INTO `gp_comment` VALUES (50, 2, 18, '2020-06-03', '很好看哇', 1, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (51, 2, NULL, '2020-06-03', '您的视频“实战企业级项目 践行App重构之路”审核已通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (52, 2, NULL, '2020-06-03', '您的视频“Typescript + React 高仿 Antd 从零到一打造自己的组件库”审核已通过。', 0, NULL, 0, 1);
INSERT INTO `gp_comment` VALUES (53, 1, NULL, '2020-06-05', '您的视频“移动APP开发”审核已通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (54, 1, NULL, '2020-06-09', '您的视频“剑指Java面试-Offer直通车”审核已通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (55, 2, NULL, '2020-06-09', '您的视频“玩转Java并发工具，精通JUC，成为并发多面手”审核已通过。', 0, NULL, 0, 1);
INSERT INTO `gp_comment` VALUES (56, 2, NULL, '2020-06-09', '您的视频“通过js判断上传文件类型”审核已通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (57, 2, 68, '2020-06-09', '很好看', 1, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (58, 2, 68, '2020-06-09', '老师讲的很好', 0, 57, 0, 0);
INSERT INTO `gp_comment` VALUES (59, 4, 68, '2020-06-09', '提高了我的学习效率', 0, NULL, 0, 1);
INSERT INTO `gp_comment` VALUES (60, 4, 68, '2020-06-09', '我有了灵感', 0, 59, 0, 0);
INSERT INTO `gp_comment` VALUES (61, 4, 68, '2020-06-09', 'jdk1.8', 0, 57, 0, 0);
INSERT INTO `gp_comment` VALUES (62, 37, NULL, '2020-06-10', '您的视频“面试跳槽提升必备 全面解析iOS中的Runtime机制”审核已通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (63, 37, NULL, '2020-06-10', '您的视频“iApp裕语言零基础之评分,拖动条,进度条,日期时间选择”审核未通过，请修改后重新上传。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (64, 37, NULL, '2020-06-10', '您的视频“iApp裕语言零基础之评分,拖动条,进度条,日期时间选择”审核已通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (65, 1, NULL, '2020-06-10', '您的视频“#是标签内置的一个方法，代表top的作用”审核已通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (66, 1, NULL, '2020-06-10', '您的视频“玩转Java并发工具，精通JUC，成为并发多面手”审核已通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (67, 2, 13, '2020-06-10', '很不错的一个视频', 1, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (68, 2, 15, '2020-06-10', '非常好', 1, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (69, 2, 16, '2020-06-10', '老师讲的非常精髓', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (70, 1, 13, '2020-06-10', '一个数据库字段', 0, 67, 0, 0);
INSERT INTO `gp_comment` VALUES (71, 2, NULL, '2020-06-11', '您的视频“从开发到服务编排，带你整体把握容器化的微服务”审核已通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (72, 2, 15, '2020-06-11', '流行', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (73, 2, 13, '2020-06-11', '快上线啊', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (74, 2, NULL, '2020-06-11', '您的视频“React16+React-Router4 从零打造企业级电商后台管理系统”审核已通过。', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (75, 2, 13, '2020-06-12', '很有意思的视频', 0, NULL, 0, 0);
INSERT INTO `gp_comment` VALUES (76, 2, NULL, '2020-06-12', '您的视频“Java零基础入门实战课java开发全栈技能就业课”审核已通过。', 0, NULL, 0, 0);

-- ----------------------------
-- Table structure for gp_comment_like
-- ----------------------------
DROP TABLE IF EXISTS `gp_comment_like`;
CREATE TABLE `gp_comment_like`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `comment_id` int(11) NULL DEFAULT NULL,
  `question_id` int(11) NULL DEFAULT NULL,
  `like_date` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `user_id`(`user_id`, `comment_id`) USING BTREE,
  UNIQUE INDEX `user_id_2`(`user_id`, `question_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 69 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_comment_like
-- ----------------------------
INSERT INTO `gp_comment_like` VALUES (1, 1, 1, NULL, '2020-05-22');
INSERT INTO `gp_comment_like` VALUES (7, 10, 2, NULL, '2020-05-06');
INSERT INTO `gp_comment_like` VALUES (10, 1, 7, NULL, '2020-05-20');
INSERT INTO `gp_comment_like` VALUES (12, 10, NULL, 7, '2020-05-23');
INSERT INTO `gp_comment_like` VALUES (15, 1, NULL, 8, '2020-05-15');
INSERT INTO `gp_comment_like` VALUES (18, 10, 9, NULL, '2020-05-25');
INSERT INTO `gp_comment_like` VALUES (19, 1, 13, NULL, '2020-05-25');
INSERT INTO `gp_comment_like` VALUES (25, 38, 11, NULL, '2020-05-25');
INSERT INTO `gp_comment_like` VALUES (42, 105, 23, NULL, '2020-05-29');
INSERT INTO `gp_comment_like` VALUES (43, 105, 31, NULL, '2020-05-29');
INSERT INTO `gp_comment_like` VALUES (44, 105, 14, NULL, '2020-05-29');
INSERT INTO `gp_comment_like` VALUES (46, 105, 16, NULL, '2020-05-29');
INSERT INTO `gp_comment_like` VALUES (47, 105, 17, NULL, '2020-05-29');
INSERT INTO `gp_comment_like` VALUES (48, 105, 19, NULL, '2020-05-29');
INSERT INTO `gp_comment_like` VALUES (49, 105, 43, NULL, '2020-05-29');
INSERT INTO `gp_comment_like` VALUES (50, 105, 44, NULL, '2020-05-29');
INSERT INTO `gp_comment_like` VALUES (51, 105, NULL, 35, '2020-05-29');
INSERT INTO `gp_comment_like` VALUES (52, 2, 50, NULL, '2020-06-03');
INSERT INTO `gp_comment_like` VALUES (53, 105, NULL, 44, '2020-06-09');
INSERT INTO `gp_comment_like` VALUES (55, 105, NULL, 49, '2020-06-09');
INSERT INTO `gp_comment_like` VALUES (56, 105, NULL, 45, '2020-06-09');
INSERT INTO `gp_comment_like` VALUES (57, 105, NULL, 46, '2020-06-09');
INSERT INTO `gp_comment_like` VALUES (58, 1, NULL, 41, '2020-06-10');
INSERT INTO `gp_comment_like` VALUES (59, 1, NULL, 46, '2020-06-10');
INSERT INTO `gp_comment_like` VALUES (60, 1, NULL, 45, '2020-06-10');
INSERT INTO `gp_comment_like` VALUES (61, 1, NULL, 64, '2020-06-10');
INSERT INTO `gp_comment_like` VALUES (62, 1, NULL, 63, '2020-06-10');
INSERT INTO `gp_comment_like` VALUES (63, 1, 57, NULL, '2020-06-10');
INSERT INTO `gp_comment_like` VALUES (65, 1, 67, NULL, '2020-06-10');
INSERT INTO `gp_comment_like` VALUES (66, 1, 47, NULL, '2020-06-10');
INSERT INTO `gp_comment_like` VALUES (67, 1, 68, NULL, '2020-06-10');
INSERT INTO `gp_comment_like` VALUES (68, 2, 47, NULL, '2020-06-10');

-- ----------------------------
-- Table structure for gp_follow
-- ----------------------------
DROP TABLE IF EXISTS `gp_follow`;
CREATE TABLE `gp_follow`  (
  `follow_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户编号',
  `gp_user_id` int(11) NULL DEFAULT NULL COMMENT '被关注用户编号',
  `follow_is_delete` int(11) NULL DEFAULT NULL COMMENT '0：未删除，1：删除',
  PRIMARY KEY (`follow_id`) USING BTREE,
  INDEX `FK_Reference_13`(`user_id`) USING BTREE,
  INDEX `FK_Reference_19`(`gp_user_id`) USING BTREE,
  CONSTRAINT `FK_Reference_13` FOREIGN KEY (`user_id`) REFERENCES `gp_user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_19` FOREIGN KEY (`gp_user_id`) REFERENCES `gp_user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_follow
-- ----------------------------
INSERT INTO `gp_follow` VALUES (1, 1, 7, NULL);
INSERT INTO `gp_follow` VALUES (2, 1, 36, NULL);
INSERT INTO `gp_follow` VALUES (3, 9, 10, NULL);
INSERT INTO `gp_follow` VALUES (4, 9, 36, NULL);
INSERT INTO `gp_follow` VALUES (5, 9, 105, NULL);
INSERT INTO `gp_follow` VALUES (6, 105, 102, NULL);

-- ----------------------------
-- Table structure for gp_order
-- ----------------------------
DROP TABLE IF EXISTS `gp_order`;
CREATE TABLE `gp_order`  (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `series_id` int(11) NULL DEFAULT NULL,
  `video_id` int(11) NULL DEFAULT NULL,
  `order_date` date NOT NULL,
  `order_status` int(11) NOT NULL COMMENT '1.未支付，2.已完成支付，3.已失效',
  `order_number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `order_is_delete` int(11) NULL DEFAULT NULL COMMENT '0：未删除，1：删除',
  `order_is_video` int(11) NULL DEFAULT NULL COMMENT '0：系列，1：视频',
  PRIMARY KEY (`order_id`) USING BTREE,
  UNIQUE INDEX `order_number`(`order_number`) USING BTREE,
  UNIQUE INDEX `UKld01tmf0xg5o0364v5furr991`(`order_number`) USING BTREE,
  INDEX `FK_Reference_14`(`series_id`) USING BTREE,
  INDEX `FK_Reference_17`(`video_id`) USING BTREE,
  INDEX `FK_Reference_5`(`user_id`) USING BTREE,
  CONSTRAINT `FK_Reference_14` FOREIGN KEY (`series_id`) REFERENCES `gp_video_series` (`series_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_17` FOREIGN KEY (`video_id`) REFERENCES `gp_video` (`video_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_5` FOREIGN KEY (`user_id`) REFERENCES `gp_user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 69 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_order
-- ----------------------------
INSERT INTO `gp_order` VALUES (3, 4, 1, NULL, '2020-02-13', 2, 'QL1590576976112', 0, 0);
INSERT INTO `gp_order` VALUES (4, 4, 2, NULL, '2020-02-14', 1, 'QL1590576976113', 0, 0);
INSERT INTO `gp_order` VALUES (5, 4, 4, NULL, '2020-02-07', 2, 'QL1590576976114', 0, 0);
INSERT INTO `gp_order` VALUES (7, 4, 5, NULL, '2020-03-06', 3, 'QL1590576973150', 0, 0);
INSERT INTO `gp_order` VALUES (8, 4, NULL, 41, '2020-02-29', 2, 'QL1590576976105', 0, 1);
INSERT INTO `gp_order` VALUES (9, 4, NULL, 40, '2020-03-08', 2, 'QL1590576976006', 0, 1);
INSERT INTO `gp_order` VALUES (11, 4, NULL, 39, '2020-01-27', 1, 'QL1590576976009', 0, 1);
INSERT INTO `gp_order` VALUES (13, 4, NULL, 37, '2020-03-02', 1, 'QL1590576976019', 0, 1);
INSERT INTO `gp_order` VALUES (15, 4, NULL, 33, '2020-02-11', 1, 'QL1590576976025', 0, 1);
INSERT INTO `gp_order` VALUES (16, 4, NULL, 22, '2020-02-11', 2, 'QL1590576976026', 0, 1);
INSERT INTO `gp_order` VALUES (17, 4, NULL, 17, '2020-02-11', 2, 'QL1590576976331', 0, 1);
INSERT INTO `gp_order` VALUES (19, 4, NULL, 14, '2020-05-22', 3, 'QL1590576976562', 0, 1);
INSERT INTO `gp_order` VALUES (23, 4, NULL, 35, '2020-04-27', 2, 'QL1590576976193', 0, 1);
INSERT INTO `gp_order` VALUES (26, 105, NULL, 17, '2020-04-28', 2, 'QL1590629085178', 0, 1);
INSERT INTO `gp_order` VALUES (29, 105, NULL, 14, '2020-04-28', 2, 'QL1590629919051', 0, 1);
INSERT INTO `gp_order` VALUES (34, 105, 1, NULL, '2020-04-28', 2, 'QL1590631289579', 0, 0);
INSERT INTO `gp_order` VALUES (35, 105, 12, NULL, '2020-04-28', 2, 'QL1590632449513', 0, 0);
INSERT INTO `gp_order` VALUES (37, 1, NULL, 15, '2020-05-28', 2, 'QL1590647217124', 0, 1);
INSERT INTO `gp_order` VALUES (38, 1, NULL, 14, '2020-05-28', 2, 'QL1590654026463', 0, 1);
INSERT INTO `gp_order` VALUES (47, 2, NULL, 20, '2020-05-31', 2, 'QL1590908636155', 0, 1);
INSERT INTO `gp_order` VALUES (48, 2, NULL, 15, '2020-05-31', 2, 'QL1590908685750', 0, 1);
INSERT INTO `gp_order` VALUES (49, 2, NULL, 17, '2020-05-31', 2, 'QL1590908753883', 0, 1);
INSERT INTO `gp_order` VALUES (50, 2, NULL, 13, '2020-05-31', 2, 'QL1590908760976', 0, 1);
INSERT INTO `gp_order` VALUES (51, 2, NULL, 23, '2020-05-31', 3, 'QL1590908819914', 0, 1);
INSERT INTO `gp_order` VALUES (52, 2, 7, NULL, '2020-05-31', 2, 'QL1590923562974', 0, 0);
INSERT INTO `gp_order` VALUES (53, 2, 2, NULL, '2020-05-31', 2, 'QL1590934006622', 0, 0);
INSERT INTO `gp_order` VALUES (54, 2, 1, NULL, '2020-06-01', 2, 'QL1591004047019', 0, 0);
INSERT INTO `gp_order` VALUES (61, 1, NULL, 94, '2020-06-10', 2, 'QL1591772965431', 0, 1);
INSERT INTO `gp_order` VALUES (62, 1, NULL, 13, '2020-06-10', 2, 'QL1591780313481', 0, 1);
INSERT INTO `gp_order` VALUES (63, 2, NULL, 43, '2020-06-11', 3, 'QL1591864243677', 0, 1);
INSERT INTO `gp_order` VALUES (64, 2, NULL, 14, '2020-06-11', 2, 'QL1591864328957', 0, 1);
INSERT INTO `gp_order` VALUES (65, 2, NULL, 24, '2020-06-11', 3, 'QL1591864390907', 1, 1);
INSERT INTO `gp_order` VALUES (67, 2, NULL, 53, '2020-06-11', 1, 'QL1591864682573', 0, 1);
INSERT INTO `gp_order` VALUES (68, 2, NULL, 18, '2020-06-12', 2, 'QL1591928899029', 0, 1);

-- ----------------------------
-- Table structure for gp_question
-- ----------------------------
DROP TABLE IF EXISTS `gp_question`;
CREATE TABLE `gp_question`  (
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `question_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `question_content` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'markdown编译之前的内容',
  `question_date` date NOT NULL,
  `question_integral` int(11) NOT NULL,
  `question_classification` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '编程语言，云计算大数据，计算机基础，移动开发，前沿技术',
  `question_view_number` int(11) NULL DEFAULT NULL,
  `question_is_solve` int(11) NOT NULL COMMENT '0：未解决， 1：已解决',
  `question_is_delete` int(11) NULL DEFAULT NULL COMMENT '0：未删除，1：删除',
  `question_text` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'markdown编译之后的内容',
  PRIMARY KEY (`question_id`) USING BTREE,
  INDEX `FK_Reference_7`(`user_id`) USING BTREE,
  CONSTRAINT `FK_Reference_7` FOREIGN KEY (`user_id`) REFERENCES `gp_user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 66 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_question
-- ----------------------------
INSERT INTO `gp_question` VALUES (2, 4, '科学家的问题，科学家学习都很厉害么', '科学家的问题，科学家学习都很厉害么', '2020-04-13', 1, '前沿技术', 4, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (3, 4, '牛顿为什么会发现万有引力？', '牛顿为什么会发现万有引力？', '2020-04-11', 1, '云计算大数据', 1, 1, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (7, 1, '科学的分析', '1', '2020-04-26', 1, '云计算大数据', 2, 1, 0, '<p>1</p>\n');
INSERT INTO `gp_question` VALUES (9, 1, '如何在MySQL中插入用户名？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '云计算大数据', 1, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (10, 1, '王企鹅', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '云计算大数据', 1, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (11, 1, '播放', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '云计算大数据', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (12, 1, '厄尔', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '云计算大数据', 1, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (13, 1, '文案无', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '计算机基础', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (14, 10, 'Springboot文件上传报错：failed to convert java.lang.String to org.springframework.util.unit.DataSize', 'springboot2.1.2版本文件上传报错，我上传的是一个18M的音频，默认的配置应该是超过10M的文件就会报错2019-01-20 01:43:31.982 ERROR 14632 — [ main] o.s.b.d.LoggingFailureAnalysisReporter :\n***************************\nAPPLICATION FAILED TO START\n***************************\nDescription:\nFailed to bind properties under ‘spring.servlet.multipart.max-file-size’ to org.springframework.util.unit.DataSize:\nProperty: spring.servlet.multipart.max-file-size\nValue: 100M\nOrigin: class path resource [application.yml]:13:22\nReason: failed to convert java.lang.String to org.springframework.util.unit.DataSize\r\n————————————————\r\n版权声明：本文为CSDN博主「xqnode」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\r\n原文链接：https://blog.csdn.net/xqnode/article/details/86558874', '2020-02-10', 10, '计算机基础', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (15, 1, '地方', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '计算机基础', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (16, 1, '我问问', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '编程语言', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (17, 1, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '编程语言', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (18, 1, '达大厦', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-21', 10, '编程语言', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (19, 1, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '编程语言', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (20, 1, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '编程语言', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (21, 38, '嘤嘤嘤', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '编程语言', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (22, 1, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '编程语言', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (23, 9, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '计算机基础', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (24, 1, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '移动开发', 0, 1, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (25, 37, '别别别', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '移动开发', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (26, 1, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '移动开发', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (27, 1, '额滴神', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '移动开发', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (28, 37, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '移动开发', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (29, 1, '发发发', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '移动开发', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (30, 39, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '移动开发', 200, 1, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (31, 1, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)\n伴随你好吗', '2020-02-10', 10, '移动开发', 1, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)<br>伴随你好吗</p>\n');
INSERT INTO `gp_question` VALUES (32, 39, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '云计算大数据', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (33, 36, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '云计算大数据', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (34, 1, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '云计算大数据', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (35, 38, '插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '云计算大数据', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (36, 39, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '云计算大数据', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (37, 1, '时间插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '云计算大数据', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (38, 36, '如何在MySQL中插入日期？', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '计算机基础', 200, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (39, 1, '喂啊喂', 'MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)', '2020-02-10', 10, '计算机基础', 0, 0, 0, '<p>MySQL中怎么插入DateTime型的数据或如何insert时间值进去(还有 注意：Oracle的时间格式)</p>\n');
INSERT INTO `gp_question` VALUES (40, 1, 'java面试题，来一套', 'java面试题，来一套', '2020-04-23', 20, '计算机基础', 0, 0, 0, '<p>java面试题，来一套</p>\n');
INSERT INTO `gp_question` VALUES (43, 1, '为什么mysql无法正确启动', '重装mysql之后，无法正常启动', '2020-04-23', 20, '计算机基础', 1, 0, 0, '<p>重装mysql之后，无法正常启动</p>\n');
INSERT INTO `gp_question` VALUES (44, 105, '解决JPA Native 查询不能使用投影(Projection)的问题 org.springframework.core.convert.ConverterNotFoundException:', '本文章向大家介绍解决JPA Native 查询不能使用投影(Projection)的问题 org.springframework.core.convert.ConverterNotFoundException:，主要包括解决JPA Native 查询不能使用投影(Projection)的问题 org.springframework.core.convert.ConverterNotFoundException:使用实例、应用技巧、基本知识点总结和需要注意事项，具有一定的参考价值，需要的朋友可以参考一下。\n报错原因是没有目标转换器\n转换器使用的是 Spring-core 包中的DefaultConversionService JPA相关代码构建代码位于ResultProcess类中和内部类ProjectingConverter', '2020-04-28', 0, '编程语言', 0, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (45, 105, 'php 报错Empty row packet body', 'php 报错Empty row packet body 我已经修改了always_populate_raw_post_data 这个参数为-1 还是会报错 这是为什么', '2020-04-28', 0, '编程语言', 0, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (46, 105, '设计了两种不同算法求最短路程，如何改进以下函数，求出算法中的最优解？', ' public static ArrayList<City> improveRoutine(ArrayList<City> routine) {\n\n// Can you improve this simple algorithm a bit?\n    swapFirstImprove(routine);\n\n    moveFirstImprove(routine);\n    return routine;\n}', '2020-04-28', 0, '编程语言', 0, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (47, 105, 'Js获取当前日期时间及其它操作', 'var mytime=myDate.toLocaleTimeString();     //获取当前时间\nmyDate.toLocaleString( );        //获取日期与时间', '2020-05-28', 0, '编程语言', 4, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (49, 1, '啊啊啊啊啊', '啊啊啊啊啊', '2020-05-28', 0, '前沿技术', 0, 0, 0, '<p>啊啊啊啊啊</p>\n');
INSERT INTO `gp_question` VALUES (50, 1, 'java', 'java', '2020-05-28', 0, '前沿技术', 0, 0, 0, '<p>java</p>\n');
INSERT INTO `gp_question` VALUES (51, 1, 'xzvzvxzvzxsda', 'xzvzvxzvzxsda', '2020-05-28', 0, '前沿技术', 0, 0, 0, '<p>xzvzvxzvzxsda</p>\n');
INSERT INTO `gp_question` VALUES (52, 1, '问题啊啊啊', '问题', '2020-05-28', 0, '前沿技术', 0, 0, 0, '<p>问题</p>\n');
INSERT INTO `gp_question` VALUES (54, 1, '阿迪达斯', '阿迪达斯', '2020-05-28', 0, '前沿技术', 0, 0, 0, '<p>阿迪达斯</p>\n');
INSERT INTO `gp_question` VALUES (55, 2, 'SpringBoot系列教程JPA之update使用姿势', '上面两篇博文拉开了jpa使用姿势的面纱一角，接下来我们继续往下扯，数据插入db之后，并不是说就一层不变了，就好比我在银行开了户，当然是准备往里面存钱了，有存就有取（特别是当下银行利率这么低还不如买比特币屯着，截止19年6月22日，btc已经突破1.1w$，可惜没钱买）这就是我们今天的主题，数据更新--update的使用姿势', '2020-05-30', 0, '前沿技术', 4, 0, 0, '<p>上面两篇博文拉开了jpa使用姿势的面纱一角，接下来我们继续往下扯，数据插入db之后，并不是说就一层不变了，就好比我在银行开了户，当然是准备往里面存钱了，有存就有取（特别是当下银行利率这么低还不如买比特币屯着，截止19年6月22日，btc已经突破1.1w$，可惜没钱买）这就是我们今天的主题，数据更新—update的使用姿势</p>\n');
INSERT INTO `gp_question` VALUES (57, 2, '在js中判断文件上传类型', '在js中判断文件上传类型', '2020-06-01', 0, '前沿技术', 0, 0, 1, '<p>在js中判断文件上传类型</p>\n');
INSERT INTO `gp_question` VALUES (58, 2, '我想知道，我上传一多张图片后，但是我不点提交，那么这些图片怎么删除', '我想知道，我上传一多张图片后，但是我不点提交，那么这些图片怎么删除.\n博主你好我遇到一个你说的springboot上传图片路径的问题，图片上传到本地盘符下在页面上显示不出来，该怎么解决.\n你好，我在使用edit.md中的图片本地上传时出现了这种跨域的错误:Uncaught DOMException: Blocked a frame with origin \"http://localhost:8080\" from accessing a cross-origin frame.请问你有遇到过么？是如何解决的呢？', '2020-06-06', 0, '前沿技术', 7, 0, 0, '<p>我想知道，我上传一多张图片后，但是我不点提交，那么这些图片怎么删除.<br>博主你好我遇到一个你说的springboot上传图片路径的问题，图片上传到本地盘符下在页面上显示不出来，该怎么解决.<br>你好，我在使用edit.md中的图片本地上传时出现了这种跨域的错误:Uncaught DOMException: Blocked a frame with origin “<a href=\"http://localhost:8080\">http://localhost:8080</a>“ from accessing a cross-origin frame.请问你有遇到过么？是如何解决的呢？</p>\n');
INSERT INTO `gp_question` VALUES (59, 2, 'springboot中如何播放本地视频？', '最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。\n\n已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。\n\n我想请问大家有什么方法能够读取本地视频在网页中播放？', '2020-06-08', 0, '编程语言', 60, 0, 0, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (60, 2, 'IDEA 将项目打包war包', '大萨达所\n\n## 割发代首分公司', '2020-06-08', 0, '移动开发', 0, 0, 1, '<p>最近项目中需要使用springboot读取本地磁盘中的视频，并且在网页中进行播放。</p>\n<p>已经尝试过使用httpservelet方法，但是这种方法读取视频速度慢，而且容易报内存溢出的错误。</p>\n<p>我想请问大家有什么方法能够读取本地视频在网页中播放？</p>\n');
INSERT INTO `gp_question` VALUES (62, 2, '为什么程序员做外包会被瞧不起？', '    @RequestMapping(value = \"uploadVidoe\", method = RequestMethod.POST)\n        @ResponseBody\n        public Map<String,String> savaVideo(@RequestParam(\"file\") MultipartFile file)\n                throws IllegalStateException {\n            Map<String,String> resultMap = new HashMap<>();\n            try{\n                //获取文件后缀\n                String fileExt = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(\".\") + 1)\n                        .toLowerCase();\n                // 重构文件名称\n                String pikId = UUID.randomUUID().toString().replaceAll(\"-\", \"\");\n                String newVidoeName = pikId + \".\" + fileExt;\n                //保存视频\n                File fileSave = new File(savePaths, newVidoeName);\n                file.transferTo(fileSave);\n                resultMap.put(\"resCode\",\"1\");\n                resultMap.put(\"webShowPath\",webPaths + newVidoeName);\n    \n                return  resultMap;\n    \n            }catch (Exception e){\n                e.printStackTrace();\n                resultMap.put(\"resCode\",\"0\");\n                return  resultMap ;\n    \n            }\n        }\n    \n	\n	\n如何解决这个问题呢？', '2020-06-08', 0, 'undefined', 6, 0, 0, '<pre><code>@RequestMapping(value = &quot;uploadVidoe&quot;, method = RequestMethod.POST)\n    @ResponseBody\n    public Map&lt;String,String&gt; savaVideo(@RequestParam(&quot;file&quot;) MultipartFile file)\n            throws IllegalStateException {\n        Map&lt;String,String&gt; resultMap = new HashMap&lt;&gt;();\n        try{\n            //获取文件后缀\n            String fileExt = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(&quot;.&quot;) + 1)\n                    .toLowerCase();\n            // 重构文件名称\n            String pikId = UUID.randomUUID().toString().replaceAll(&quot;-&quot;, &quot;&quot;);\n            String newVidoeName = pikId + &quot;.&quot; + fileExt;\n            //保存视频\n            File fileSave = new File(savePaths, newVidoeName);\n            file.transferTo(fileSave);\n            resultMap.put(&quot;resCode&quot;,&quot;1&quot;);\n            resultMap.put(&quot;webShowPath&quot;,webPaths + newVidoeName);\n\n            return  resultMap;\n\n        }catch (Exception e){\n            e.printStackTrace();\n            resultMap.put(&quot;resCode&quot;,&quot;0&quot;);\n            return  resultMap ;\n\n        }\n    }\n</code></pre><p>如何解决这个问题呢？</p>\n');
INSERT INTO `gp_question` VALUES (63, 2, '检查有没有自带java和mysql', '由于需要部署web项目的运行环境，所以需要先检查本linux服务器下有没有自带着其他环境。\n命令：\n\nrpm -qa|grep java\nrpm -qa|grep mysql\n1\n2\n图：\n\n\n结果显示如果有环境，那你可以删除或者是你觉得适用本项目，那么留着也行。如图，我当时是卸载了mysql的。\n\n卸载jdk和mysql命令：\n\nyum remove *openjdk...*\nyum remove *mysql....*\n1\n反正最后确保了linux服务器上没有web项目所依赖的环境以后，我们开始安装环境。\n', '2020-06-11', 0, '移动开发', 9, 0, 0, '<p>由于需要部署web项目的运行环境，所以需要先检查本linux服务器下有没有自带着其他环境。<br>命令：</p>\n<p>rpm -qa|grep java<br>rpm -qa|grep mysql<br>1<br>2<br>图：</p>\n<p>结果显示如果有环境，那你可以删除或者是你觉得适用本项目，那么留着也行。如图，我当时是卸载了mysql的。</p>\n<p>卸载jdk和mysql命令：</p>\n<p>yum remove <em>openjdk…</em><br>yum remove <em>mysql….</em><br>1<br>反正最后确保了linux服务器上没有web项目所依赖的环境以后，我们开始安装环境。</p>\n');
INSERT INTO `gp_question` VALUES (64, 2, 'springboot结合开源editor.md集成markdonw编辑器', '     <dependencies>\n            <!--thymeleaf-->\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-thymeleaf</artifactId>\n            </dependency>\n     \n            <!-- web-->\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-web</artifactId>\n            </dependency>\n     \n            <!-- mybatis-->\n            <dependency>\n                <groupId>org.mybatis.spring.boot</groupId>\n                <artifactId>mybatis-spring-boot-starter</artifactId>\n                <version>1.3.2</version>\n            </dependency>\n     \n            <!--数据库相关-->\n            <!-- mysql-->\n            <dependency>\n                <groupId>mysql</groupId>\n                <artifactId>mysql-connector-java</artifactId>\n                <scope>runtime</scope>\n            </dependency>\n     \n            <!--Druid数据库连接池-->\n             <dependency>\n                <groupId>com.alibaba</groupId>\n                <artifactId>druid</artifactId>\n                <version>1.1.10</version>\n            </dependency>\n     \n            <!--自动get/set-->\n            <dependency>\n                <groupId>org.projectlombok</groupId>\n                <artifactId>lombok</artifactId>\n                <optional>true</optional>\n            </dependency>\n     \n            <!--测试-->\n            <dependency>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-starter-test</artifactId>\n                <scope>test</scope>\n            </dependency>', '2020-06-11', 0, '编程语言', 1, 0, 0, '<pre><code> &lt;dependencies&gt;\n        &lt;!--thymeleaf--&gt;\n        &lt;dependency&gt;\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n            &lt;artifactId&gt;spring-boot-starter-thymeleaf&lt;/artifactId&gt;\n        &lt;/dependency&gt;\n\n        &lt;!-- web--&gt;\n        &lt;dependency&gt;\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;\n        &lt;/dependency&gt;\n\n        &lt;!-- mybatis--&gt;\n        &lt;dependency&gt;\n            &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;\n            &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;\n            &lt;version&gt;1.3.2&lt;/version&gt;\n        &lt;/dependency&gt;\n\n        &lt;!--数据库相关--&gt;\n        &lt;!-- mysql--&gt;\n        &lt;dependency&gt;\n            &lt;groupId&gt;mysql&lt;/groupId&gt;\n            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;\n            &lt;scope&gt;runtime&lt;/scope&gt;\n        &lt;/dependency&gt;\n\n        &lt;!--Druid数据库连接池--&gt;\n         &lt;dependency&gt;\n            &lt;groupId&gt;com.alibaba&lt;/groupId&gt;\n            &lt;artifactId&gt;druid&lt;/artifactId&gt;\n            &lt;version&gt;1.1.10&lt;/version&gt;\n        &lt;/dependency&gt;\n\n        &lt;!--自动get/set--&gt;\n        &lt;dependency&gt;\n            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;\n            &lt;artifactId&gt;lombok&lt;/artifactId&gt;\n            &lt;optional&gt;true&lt;/optional&gt;\n        &lt;/dependency&gt;\n\n        &lt;!--测试--&gt;\n        &lt;dependency&gt;\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;\n            &lt;scope&gt;test&lt;/scope&gt;\n        &lt;/dependency&gt;\n</code></pre>');
INSERT INTO `gp_question` VALUES (65, 2, 'aaaa', 'aaaa', '2020-06-12', 0, '编程语言', 0, 0, 0, '<p>aaaa</p>\n');

-- ----------------------------
-- Table structure for gp_user
-- ----------------------------
DROP TABLE IF EXISTS `gp_user`;
CREATE TABLE `gp_user`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_phone_number` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_mail` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_integral` int(11) NOT NULL,
  `user_brief_introduction` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_major` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_birth` date NULL DEFAULT NULL,
  `user_education` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_mail_active_status` int(11) NULL DEFAULT NULL COMMENT '激活状态 0 未激活 1 已激活',
  `user_mail_active_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '激活码',
  `user_is_delete` int(11) NULL DEFAULT NULL COMMENT '0：未删除，1：删除',
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `user_name`(`user_name`) USING BTREE,
  UNIQUE INDEX `user_mail`(`user_mail`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 106 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_user
-- ----------------------------
INSERT INTO `gp_user` VALUES (1, '启路视频官方', '13408465148', '18715770813@163.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 100000163, '中美竞争要理解议会民主制的运作方式协同作战，参与亚裔和民权团体的活动，多交朋友，捐款支持对手的竞争者。周恩来当年对付日本反华议员的办法，就是反华没有订单，亲华有订单。对台独和反华国家，只有利益损益才有回应效果。海外华裔组织民间组织，国内企业参与出口国和投资国的院外游说。学美国经济交易和政治捐款挂钩。小额捐款都有效果，因为议员要统计基础票源和捐款源来决定具体议案的态度是还是否。华裔与犹太人潜力可以相比，只差觉悟共识加民间组织。', '云计算大数据', '启路集团总部', '2020-03-01', '专科', 1, '', 0);
INSERT INTO `gp_user` VALUES (2, 'kender', '18715770814', '18715770899@163.com', 'hMyTMkM5ONEj!A/ynM@T\'c&=%ebdSi\"%Wn', 9980, '配置信息，与之前有一点点区别，我们新增了更详细的日志打印；本篇主要目标集中在添加记录的使用姿势，对于配置说明，后面单独进行说明', '计算机基础', '四川省合江县甘雨镇', '2020-05-29', '本科', 1, '', 0);
INSERT INTO `gp_user` VALUES (4, 'huaxia', '13458723301', '1421894128@163.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 153, '本人是老番茄和大祥哥的粉丝，经常鬼畜那二位，嘻嘻', '1', '1', '2020-04-10', 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (7, '夏淮竹赏', '13458723302', '18715774862@163.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 1, '灰狐----狐妖之中有异类，始于亶爰，眼眸如灰雾，故称灰狐。天生黑白两色，生时无雌雄之分，成年后可凭自身意愿，或成雄，或成雌。灰狐之尾尤珍贵，取之则化光，以光喂入，再辅以另一人之姓名八字之咒念，则食光之人对此人必心生喜爱，纵有杀父之仇，亦可放之不计。\r\n裟椤双树：女，射手座，自由撰稿人，中国妖怪写作第一人。现居成都，喜好美食与时尚，善于在旅途中捕捉细节并记录幻想，作品既有旖旎浪漫的古风，又有潮流的现代视觉系味道。文笔华丽老练，动漫风十足。代表作《浮生物语》系列,《与魅共舞》等。（这次名字没错了，哈哈哈）', '1', '四川省合江县甘雨镇瑞丰村八社4号', NULL, 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (9, '雨眠清羽', '18715774874', '15706748951@qq.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 17, '本人是老番茄和大祥哥的粉丝，经常鬼畜那二位，嘻嘻', 'java开发', '四川省合江县甘雨镇', '2020-03-06', 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (10, '绘梨衣不喜欢吃鸭子', '18715774875', '15706748952@qq.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 8, '这个番茄他又长又宽就像这个碗又大又圆', 'java开发', '四川省合江县甘雨镇', '2020-03-06', 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (36, '浮港与海', '18715774876', '15706748953@qq.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 61, '潜心学习中......这段时间就不更新啦！毕竟我还想考复旦呢。。。不过，虽然更新停了，但三连不要停啊啊啊！！', 'java开发', '四川省合江县甘雨镇', '2020-03-06', 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (37, '皮筋小人', '18715774855', '15706748954@qq.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 35, '一提pv我就想说，究极pv里有一个鞠躬很违和。绘梦经常出现那种日式突然猛鞠躬。中国传统鞠躬都是柔和的，幅度也不大，多为学生对老师。绘梦这种鞠躬不是一次两次了，放到现代照样违和。也许是因为外包很多国家做的，但绘梦要注意了。', 'java开发', '四川省合江县甘雨镇', '2020-03-06', 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (38, '夏末初秋Kzyp', '18715774458', '15706748955@qq.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 45, 'bilibili UP主认证: bilibili游戏知名up主 2019年度水视频总冠军', 'java开发', '四川省合江县甘雨镇', '2020-03-06', 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (39, '大家的音乐姬', '18715774254', '1570674895@qq.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 45, '等了一年了，百妖谱终于开播了。桃夭的形象真的很符合，书中的桃夭只能说是俊俏，还不能算上绝世美人。漫画脸的太幼了，这个刚好符合。磨牙就不多说了，很满意。柳公子应该要等一阵子才能出场，目前的情况来看我非常期待。剧情和书中有点不同，比如本来是桃夭的话，改为人形滚滚先说了，提前了出场并且树立了桃夭能言善辩的形象，效果还可以。接下来说说缺点，铁头那部分的打戏差了点，不知道是不是经费不够了。不过后面感情渲染补救回来了，这波不亏。还有就是少年的脸，明显刻画的没有桃夭细致啊，喝酒时的侧脸都崩了，制作组偏心？\r\n先说这么多吧，总体来讲是不错的，如果要问我等了一年值不值还要看后面的表现再作定夺。我个人很期待腾根那章。另外等不及小伙伴们可以买书来看哦', 'java开发', '四川省合江县甘雨镇', '2020-03-06', 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (92, '普通的你特别好', '18714218942', '18715770824@163.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 0, '这次我作为新笑傲萌系体验官，与@新笑傲江湖手游 一起合作的《CPDD，一起团战！》上线啦！完整版也可以在游戏听到~\r\n大家喜欢吗？喜欢就来游戏里和我一起CPDD团战吧', NULL, NULL, NULL, 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (100, '废柴名叫懒猫', '18715774869', '18715770332@163.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 0, '只要这些豪宅让我们眼里还带着光，还愿意有继续拼下去的希望，就不是一件很差的事。', NULL, NULL, NULL, 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (101, '佐梨有酒', '18715774862', '18715774855@163.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 0, '我的牌子它最近到不了了，大家就将就看看Q&A吧！不过讲道理，真的，为什么我都找不到几个问题，哭泣~最后附上很小一部分我的喜欢的小吊带（拍了几个我累了，对不起我太懒了）~', NULL, NULL, NULL, 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (102, '秋時今天咕了么', '18715774339', '18715774339@163.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 0, '抗体检测阳性不代表一定得过新冠病毒，抗体检测的结果主要分两种lgM和lgG，如果你感染过新冠病毒类似的病毒的话，甚至保护类风湿关节炎病毒，也可能出现弱阳性感染早期的情况。我不是专业的，但是现在医院要都要给病人作抗体检测，我们这里清零很久了，但还是陆续会有抗体阳性的病人出现。', NULL, NULL, NULL, 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (103, '橙子里的鹿', '18715774338', '18715774338@163.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 0, '加拿大欺软怕硬。中国必须果断在经济上打击加拿大，逼加拿大政府出手。相信英美法制只是给他们面子，结果成为自欺欺人。现在反击还来得及。美国经济每况愈下。加拿大押宝特朗普连任风险越来越大。估计加拿大政府会拖到10月才会决定。现在大家都是拖和瞧。 ', NULL, NULL, NULL, 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (104, '永远解不开的魔法', '18715774825', '18715774825@163.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 0, '加拿大欺软怕硬。中国必须果断在经济上打击加拿大，逼加拿大政府出手。相信英美法制只是给他们面子，结果成为自欺欺人。现在反击还来得及。美国经济每况愈下。加拿大押宝特朗普连任风险越来越大。估计加拿大政府会拖到10月才会决定。现在大家都是拖和瞧。 ', NULL, NULL, NULL, 'education', 1, '', 0);
INSERT INTO `gp_user` VALUES (105, '明月照我心', '18715774844', '18715774844@163.com', '3M#T&k85RN6j*A!y)M:T`cX=otiQ*8SwU=', 845, '加拿大欺软怕硬。中国必须果断在经济上打击加拿大，逼加拿大政府出手。相信英美法制只是给他们面子，结果成为自欺欺人。现在反击还来得及。美国经济每况愈下。加拿大押宝特朗普连任风险越来越大。估计加拿大政府会拖到10月才会决定。现在大家都是拖和瞧。 ', NULL, NULL, NULL, 'education', 1, '', 0);

-- ----------------------------
-- Table structure for gp_video
-- ----------------------------
DROP TABLE IF EXISTS `gp_video`;
CREATE TABLE `gp_video`  (
  `video_id` int(11) NOT NULL AUTO_INCREMENT,
  `series_id` int(11) NULL DEFAULT NULL,
  `user_id` int(11) NULL DEFAULT NULL,
  `video_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `video_date` date NOT NULL,
  `video_status` int(11) NOT NULL COMMENT '0：待审核，1：通过，2：不通过，3：禁用',
  `video_classification` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '编程语言，云计算大数据，计算机基础，移动开发，前沿技术',
  `video_integral` int(11) NULL DEFAULT NULL,
  `video_introduce` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `video_playback_volume` int(11) NOT NULL,
  `video_cover_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `video_classification_little` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '二级分类',
  `video_number` int(11) NULL DEFAULT NULL COMMENT '属于系列的多少集，不属于系列则默认为第0集',
  `video_image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '封面名',
  `video_image_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '封面地址',
  `video_is_delete` int(11) NULL DEFAULT NULL COMMENT '0：未删除，1：删除',
  PRIMARY KEY (`video_id`) USING BTREE,
  INDEX `FK_Reference_10`(`series_id`) USING BTREE,
  INDEX `FK_Reference_16`(`user_id`) USING BTREE,
  CONSTRAINT `FK_Reference_10` FOREIGN KEY (`series_id`) REFERENCES `gp_video_series` (`series_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Reference_16` FOREIGN KEY (`user_id`) REFERENCES `gp_user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 112 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_video
-- ----------------------------
INSERT INTO `gp_video` VALUES (1, 1, 1, 'IDE的概念', '2020-02-28', 1, '编程语言', NULL, '齐论视觉学院考虑到未来的设计职业发展空间，超前性和预测性，根据不同阶段学员对接对应需求订单，提升实战技能并获取报酬，搭建设计师与企业人才就业的桥梁，丰富优秀设计师更多的就业选择。', 2236, 'http://localhost:8080/files/58.058Java零基础控制语句if.mp4', 'Java', 2, '封面', 'http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLATBTMemo7mW3liaHG6GO3ojhibPG3oicYcnc2QcMku9NeN3WpoBDNiaqPLXmLeZicOdzNQ/', 0);
INSERT INTO `gp_video` VALUES (2, 1, 1, 'JetBrains公司介绍', '2020-04-11', 1, '编程语言', NULL, '2', 3, 'http://localhost:8080/files/59.059Java零基础回顾.mp4', 'Java', 3, '封面', 'http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLATBTMemo7mW3liaHG6GO3ojhibPG3oicYcnc2QcMku9NeN3WpoBDNiaqPLXmLeZicOdzNQ/', 0);
INSERT INTO `gp_video` VALUES (4, 2, 4, 'IntelliJ IDEA介绍', '2020-04-22', 1, '云计算大数据', NULL, '1', 48, 'http://localhost:8080/files/60.060Java零基础控制语句switch.mp4', 'Docker', 1, '封面', 'http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLATBTMemo7mW3liaHG6GO3ojhibPG3oicYcnc2QcMku9NeN3WpoBDNiaqPLXmLeZicOdzNQ/', 0);
INSERT INTO `gp_video` VALUES (5, 2, 4, 'IDEA的下载_安装前的准备工作', '2020-04-18', 1, '编程语言', NULL, '2', 6, 'http://localhost:8080/files/1.001Java零基础安装EditPlus.mp4', 'Java', 2, '封面', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDUMfKwEzK6SEkBbkcuX6NVvvDphZ4eER4icQWuhZvdtJPTiamMic450LXKNqvZOiaqK6A/356', 0);
INSERT INTO `gp_video` VALUES (8, 4, 9, 'IDEA的卸载', '2020-02-10', 1, '编程语言', NULL, '樱花非常好看', 11, 'http://localhost:8080/files/61.061Java零基础控制语句switch.mp4', 'Java', 1, '封面', 'http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLATBTMemo7mW3liaHG6GO3ojhibPG3oicYcnc2QcMku9NeN3WpoBDNiaqPLXmLeZicOdzNQ/', 0);
INSERT INTO `gp_video` VALUES (12, 5, 37, 'IDEA的安装和破解', '2020-02-21', 1, '编程语言', NULL, '', 13, 'http://localhost:8080/files/57.057Java零基础控制语句if.mp4', 'Java', 1, '封面', 'http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLATBTMemo7mW3liaHG6GO3ojhibPG3oicYcnc2QcMku9NeN3WpoBDNiaqPLXmLeZicOdzNQ/', 0);
INSERT INTO `gp_video` VALUES (13, NULL, 4, 'IDEA页面展示', '2020-02-07', 1, '编程语言', 2, '01.基础部分：3Dmax基础内容、VR渲染器基础、效果图ps后期基础、建筑漫游动画基础。\n\n02.建筑效果图部分：全模渲染、ps后期、美术理论、制作规范、项目分析、项目报价、相机构图、室外灯光、全套材质、全模布景、写实效果图、商业效果图、规划鸟瞰、共建、住宅、别墅、园林景观、古建、商业街、日景、黄昏、夜景、灯光亮化、桥梁、实景合成、总平图、360全景图、春夏秋冬等\n\n03.建筑动画（漫游）部分：动画制作流程、渲染参数、脚本、预演、720动画、灯光动画、商业动画、施工动画、桥梁动画、建筑生长、室内淘宝动画、产品动画、粒子动画、项目报价、创业、带项目等。', 223, 'http://localhost:8080/files/1.001Java零基础安装EditPlus.mp4', 'Python', 0, '15911798665965e26a9f909ef95b512000676-360-202.png', 'http://localhost:8080/files/15911798665965e26a9f909ef95b512000676-360-202.png', 0);
INSERT INTO `gp_video` VALUES (14, NULL, 4, 'Module的概念和使用', '2020-02-11', 1, '编程语言', 10, '如图所示', 38, 'http://localhost:8080/files/7.007Java零基础Java语言发展史.mp4', 'Java', 0, '1590241469157345647.jpg', 'http://localhost:8080/files/1590241469157345647.jpg', 0);
INSERT INTO `gp_video` VALUES (15, NULL, 4, 'IDEA的常用设置1', '2020-02-11', 1, '编程语言', 10, '开课之前：\n发放多线程预习资料，包括：\n1、什么是线程\n2、线程常用方法\n3、启动线程的五种方式\n4、线程同步的基本概念', 83, 'http://localhost:8080/files/26.026Java零基础字面值.mp4', 'php', 0, '15911799102465e98339809ac343012000676-360-202.png', 'http://localhost:8080/files/15911799102465e98339809ac343012000676-360-202.png', 0);
INSERT INTO `gp_video` VALUES (16, NULL, 4, '什么是Maven', '2020-01-30', 1, '编程语言', 0, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 20, 'http://localhost:8080/files/29.029Java零基础变量.mp4', 'php', 0, '15913626693285e966fa0083a5b1e12000676-360-202.jpg', 'http://localhost:8080/files/15913626693285e966fa0083a5b1e12000676-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (17, NULL, 36, 'Maven的下载_目录结构_IDEA整合Maven', '2020-02-11', 1, '编程语言', 17, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 16, 'http://localhost:8080/files/31.031Java零基础变量.mp4', 'Java', 0, '15910619917725.jpg', 'http://localhost:8080/files/15910619917725.jpg', 0);
INSERT INTO `gp_video` VALUES (18, NULL, 4, 'Maven仓库', '2020-02-11', 1, '编程语言', 20, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 18, 'http://localhost:8080/files/32.032Java零基础数据类型.mp4', 'C', 0, '15910619096961.jpg', 'http://localhost:8080/files/15910619096961.jpg', 0);
INSERT INTO `gp_video` VALUES (19, NULL, 4, 'Maven仓库之远程仓库', '2020-02-11', 1, '编程语言', 0, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 20, 'http://localhost:8080/files/34.034Java零基础回顾.mp4', 'php', 0, '15910619242202.jpg', 'http://localhost:8080/files/15910619242202.jpg', 0);
INSERT INTO `gp_video` VALUES (20, NULL, 4, 'JAVA手法高明', '2020-05-14', 1, '云计算大数据', 2, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 8, 'http://localhost:8080/files/35.035Java零基础字符编码.mp4', 'Spark', 0, '15910615864260.jpg', 'http://localhost:8080/files/15910615864260.jpg', 0);
INSERT INTO `gp_video` VALUES (21, NULL, 9, 'Java高薪就业', '2020-05-16', 1, '云计算大数据', 2, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 1, 'http://localhost:8080/files/36.036Java零基础数据类型.mp4', 'Hbase', 0, '15910619414453.jpg', 'http://localhost:8080/files/15910619414453.jpg', 0);
INSERT INTO `gp_video` VALUES (22, NULL, 9, 'Java 编程高薪就业班（就业班）', '2020-05-14', 1, '前沿技术', 2, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 2, 'http://localhost:8080/files/45.045Java零基础运算符算术运算符.mp4', '计算机视觉', 0, '15910619683074.jpg', 'http://localhost:8080/files/15910619683074.jpg', 0);
INSERT INTO `gp_video` VALUES (23, NULL, 9, '仓库配置', '2020-02-10', 1, '前沿技术', 2, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 8, 'http://localhost:8080/files/46.046Java零基础运算符关系运算符.mp4', '微服务', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (24, NULL, 36, '仓库优先级问题', '2020-02-10', 1, '编程语言', 2, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 13, 'http://localhost:8080/files/47.047Java零基础运算符逻辑运算符.mp4', 'Java', 0, '1591179770736574669dc0001993606000338-360-202.jpg', 'http://localhost:8080/files/1591179770736574669dc0001993606000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (25, 12, 1, 'JDK的配置', '2020-02-10', 1, '编程语言', NULL, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 8, 'http://localhost:8080/files/48.048Java零基础回顾.mp4', 'Java', 1, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (26, NULL, 1, 'Maven工程类型', '2020-02-10', 1, '计算机基础', 0, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 4, 'http://localhost:8080/files/49.049Java零基础运算符赋值类运算符.mp4', '计算机网络', 0, '1590649360477fc87ed745340a9211f15bc2f98d6fa1f_356.jpg', 'http://localhost:8080/files/1590649360477fc87ed745340a9211f15bc2f98d6fa1f_356.jpg', 0);
INSERT INTO `gp_video` VALUES (27, NULL, 37, '在IDEA中创建Maven工程', '2020-02-10', 1, '编程语言', 0, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 32, 'http://localhost:8080/files/50.050Java零基础运算符字符串连接运算符.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (28, NULL, 9, 'Maven目录结构', '2020-02-10', 1, '编程语言', 5, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 9, 'http://localhost:8080/files/51.051Java零基础运算符三元运算符.mp4', 'php', 0, '15911798054415d1032ab08719e0906000338-360-202.jpg', 'http://localhost:8080/files/15911798054415d1032ab08719e0906000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (29, NULL, 9, 'Maven工程关系_依赖关系', '2020-02-10', 1, '编程语言', 5, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 0, 'http://localhost:8080/files/52.052Java零基础控制语句if.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (30, NULL, 9, 'Maven工程关系_依赖的传递性', '2020-02-10', 1, '编程语言', 5, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 0, 'http://localhost:8080/files/53.053Java零基础控制语句if.mp4', 'php', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (31, NULL, 39, 'Maven工程关系_依赖的两个原则', '2020-02-10', 1, '编程语言', 5, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 52, 'http://localhost:8080/files/54.054Java零基础控制语句if.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (32, NULL, 1, 'Maven的依赖范围', '2020-02-10', 1, '计算机基础', 5, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 13, 'http://localhost:8080/files/55.055Java零基础接收用户键盘输入.mp4', '计算机网络', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (33, NULL, 9, 'Maven工程关系_继承关系', '2020-02-10', 1, '编程语言', 5, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 12, 'http://localhost:8080/files/56.056Java零基础控制语句if.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (34, NULL, 38, '常见插件_编译器插件', '2020-02-10', 1, '编程语言', 5, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 12, 'http://localhost:8080/files/62.062Java零基础控制语句switch.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (35, NULL, 38, '常见插件_资源拷贝插件', '2020-02-10', 1, '编程语言', 10, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 14, 'http://localhost:8080/files/63.063Java零基础控制语句switch.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (36, NULL, 36, '常见插件_Tomcat插件', '2020-02-10', 1, '编程语言', 10, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 0, 'http://localhost:8080/files/64.064Java零基础控制语句switch.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (37, NULL, 39, 'Maven常见命令', '2020-02-10', 1, '编程语言', 10, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 45, 'http://localhost:8080/files/65.065Java零基础控制语句switch.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBcDc0egdg33X22OjWqVV90z0iaOaTn3ibGVFH308o1WicYWNsHwbqu6u4yOQebS1Vs6Q/356', 0);
INSERT INTO `gp_video` VALUES (38, NULL, 1, '断点调试_常用断点调试快捷键a', '2020-02-10', 1, '编程语言', 10, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 13, 'http://localhost:8080/files/66.066Java零基础控制语句switch.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCb4TfF5b6dPUVwMpM9iaLZuc7cCQzY05crGDE4AOCJAFg6Bbv9cI0HXWCKmHJHp43w/356', 0);
INSERT INTO `gp_video` VALUES (39, NULL, 38, '常见命令_reset的hard,mixed,soft参数', '2020-02-10', 1, '编程语言', 10, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 14, 'http://localhost:8080/files/67.067Java零基础控制语句for.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCb4TfF5b6dPUVwMpM9iaLZuc7cCQzY05crGDE4AOCJAFg6Bbv9cI0HXWCKmHJHp43w/356', 0);
INSERT INTO `gp_video` VALUES (40, NULL, 37, '常见命令_删除文件_找回本地库删除的文件', '2020-02-10', 1, '编程语言', 10, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 15, 'http://localhost:8080/files/68.068Java零基础控制语句for.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCb4TfF5b6dPUVwMpM9iaLZuc7cCQzY05crGDE4AOCJAFg6Bbv9cI0HXWCKmHJHp43w/356', 0);
INSERT INTO `gp_video` VALUES (41, NULL, 36, 'Java系统架构师/JavaSE 零基础快速掌握Java开发', '2020-02-10', 1, '编程语言', 10, '灵医桃夭，善恶如谜。金铃过处，片甲不留。讲百种妖怪，述世间沧桑。她是所有妖怪的救星，也是所有妖怪的噩梦。她带着磨牙小和尚行走江湖，也是灵医桃夭。桃都灵医桃夭只治妖怪不治人，她带着小和尚磨牙一起云游四方，顺道给各路妖怪治病。磨牙的跟班狐狸滚滚，加上她们的老邻居蛇妖柳公子，也先后加入结伴而行，在这妖怪横行、惊险重重，却又让人眷念的人间大显神通，为周围的妖怪治疗各种疑难杂症，也为这些妖怪周围的人类排忧解难。桃夭、磨牙和柳公子之间的关系不显山不露水，更多稀奇古怪的问题等着这个小团队一起去探索解决。冰山的一角可以窥探整个故事的磅礴精致，这是一场华丽未知的探险。同主角们一起，把一个个寓言般的小故事串联成一个精彩纷呈的大千世界……', 3, 'http://localhost:8080/files/69.069Java零基础控制语句for.mp4', 'Java', 0, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCb4TfF5b6dPUVwMpM9iaLZuc7cCQzY05crGDE4AOCJAFg6Bbv9cI0HXWCKmHJHp43w/356', 0);
INSERT INTO `gp_video` VALUES (42, NULL, 4, '人人都会微信小程序', '2020-04-24', 1, '编程语言', 10, '本课程是NEXT学院\"人人都会编程\"系列的首门课程，从0带你完成一个实用的\"名片\"小程序。', 0, 'http://localhost:8080/files/70.070Java零基础控制语句for.mp4', 'Python', 0, '15902731176719ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 'http://localhost:8080/files/15902731176719ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 0);
INSERT INTO `gp_video` VALUES (43, NULL, 4, '学koa准备工作 es6的常见语法', '2020-04-24', 1, '编程语言', 20, 'IMWeb前端团队。 web前端专家团。 专注web前端开发7年，团队有丰富的web实战经验。', 0, 'http://localhost:8080/files/71.071Java零基础控制语句for.mp4', 'Java', 0, '159027445884550f3319274ca0ae76121e0c29061d4e4_356_tp=webp.jpg', 'http://localhost:8080/files/159027445884550f3319274ca0ae76121e0c29061d4e4_356_tp=webp.jpg', 0);
INSERT INTO `gp_video` VALUES (44, 1, 1, '音量调整', '2020-04-24', 1, '编程语言', NULL, '在音量调整后_mongodb可视化工具的使用', 17, 'http://localhost:8080/files/72.072Java零基础控制语句for.mp4', 'Java', 14, '测试', 'http://localhost:8080/files/15904809567449ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 0);
INSERT INTO `gp_video` VALUES (45, 1, 1, 'koa-static静态资源', '2020-04-24', 1, '编程语言', NULL, 'koa-static静态资源', 3, 'http://localhost:8080/files/73.073Java零基础控制语句for.mp4', 'Java', 4, '测试', 'http://localhost:8080/files/15904809567449ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 0);
INSERT INTO `gp_video` VALUES (46, 1, 1, '在IDEA中配置Maven', '2020-04-26', 1, '编程语言', NULL, '爱你不是两三天', 62, 'http://localhost:8080/files/74.074Java零基础控制语句for.mp4', 'Java', 5, '15904809567449ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 'http://localhost:8080/files/15904809567449ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 0);
INSERT INTO `gp_video` VALUES (47, 7, 1, '电商和微信背后的服务器推送技术', '2020-04-28', 1, '编程语言', NULL, '	服务器推送技术干嘛用？就是让用户在使用网络应用的时候，不需要一遍又一遍的去手动刷新就可以及时获得更新的信息。无论电商付款，登录还是微信，或者是在线文档都用到了服务器推送，今天老师带大家来看看如何实现自己的服务器推送，这些方式的背后原理和各自的适用场景', 11, 'http://localhost:8080/files/75.075Java零基础控制语句while.mp4', 'Java', 1, '15906344740065fbaf0c88429d17f9160d1465cec3ee2_356.webp', 'http://localhost:8080/files/15906344740065fbaf0c88429d17f9160d1465cec3ee2_356.webp', 0);
INSERT INTO `gp_video` VALUES (48, NULL, 1, 'JAVA开发', '2020-05-28', 1, '编程语言', 0, 'aaaa', 0, 'http://localhost:8080/files/76.076Java零基础控制语句while.mp4', 'Java', 0, '1590649461556c90294e87937ea99c2180d28b5d610fa_356.jpg', 'http://localhost:8080/files/1590649461556c90294e87937ea99c2180d28b5d610fa_356.jpg', 0);
INSERT INTO `gp_video` VALUES (49, 1, 1, 'a', '2020-05-28', 1, '编程语言', NULL, 'aaaaaaa', 1, 'http://localhost:8080/files/77.077Java零基础控制语句dowhile.mp4', 'Java', 6, '15906513224339c4f9a41b2a947c33fbabfff80426483_356.jpg', 'http://localhost:8080/files/15906513224339c4f9a41b2a947c33fbabfff80426483_356.jpg', 0);
INSERT INTO `gp_video` VALUES (50, NULL, 1, 'Java开发a', '2020-05-28', 1, '编程语言', 10, 'Java开发', 2, 'http://localhost:8080/files/78.078Java零基础控制语句break.mp4', 'Java', 0, '15906527088429ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 'http://localhost:8080/files/15906527088429ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 0);
INSERT INTO `gp_video` VALUES (51, NULL, 1, 'C语言基础', '2020-05-28', 1, '编程语言', 0, '本课程适合初学者', 3, 'http://localhost:8080/files/79.079Java零基础控制语句continue.mp4', 'Java', 0, '159065280102409d65ce4cb28071fa04b5d59e0b337d9_356.jpg', 'http://localhost:8080/files/159065280102409d65ce4cb28071fa04b5d59e0b337d9_356.jpg', 0);
INSERT INTO `gp_video` VALUES (53, NULL, 1, 'C++基础', '2020-05-28', 1, '编程语言', 1, '花下', 1, 'http://localhost:8080/files/80.080Java零基础方法.mp4', 'Java', 0, '15906532221684ab096c03704e5fb4193f926abbb12cd_356.jpg', 'http://localhost:8080/files/15906532221684ab096c03704e5fb4193f926abbb12cd_356.jpg', 0);
INSERT INTO `gp_video` VALUES (54, 1, 1, 'aa', '2020-05-28', 1, '编程语言', NULL, 'daad', 3, 'http://localhost:8080/files/81.081Java零基础方法.mp4', 'Java', 13, '15906533960424cecfaa730a963dc268d8055acfa6822_356.jpg', 'http://localhost:8080/files/15906533960424cecfaa730a963dc268d8055acfa6822_356.jpg', 0);
INSERT INTO `gp_video` VALUES (55, 1, 1, 'zooker', '2020-05-28', 1, '编程语言', NULL, '22222222', 1, 'http://localhost:8080/files/82.082Java零基础方法.mp4', 'Java', 7, '测试', 'http://localhost:8080/files/15906536572019ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 0);
INSERT INTO `gp_video` VALUES (56, NULL, 1, 'Java研发', '2020-05-28', 1, '编程语言', 0, 'Java研发', 0, 'http://localhost:8080/files/83.083Java零基础方法.mp4', 'Java', 0, '15906536572019ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 'http://localhost:8080/files/15906536572019ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 0);
INSERT INTO `gp_video` VALUES (58, 1, 1, 'aaaa', '2020-05-28', 1, '编程语言', NULL, 'asdas', 0, 'http://localhost:8080/files/84.084Java零基础方法.mp4', 'Java', 8, '15906701755610f7d105b5d79d3413d2d1285dec0ce02_356.jpg', 'http://localhost:8080/files/15906701755610f7d105b5d79d3413d2d1285dec0ce02_356.jpg', 0);
INSERT INTO `gp_video` VALUES (59, NULL, 1, '制作视频', '2020-05-28', 1, '编程语言', 0, '如何制作视频', 1, 'http://localhost:8080/files/85.085Java零基础方法.mp4', 'Java', 0, '15906727869984cecfaa730a963dc268d8055acfa6822_356.jpg', 'http://localhost:8080/files/15906727869984cecfaa730a963dc268d8055acfa6822_356.jpg', 0);
INSERT INTO `gp_video` VALUES (60, 1, 1, '啊啊啊', '2020-05-28', 1, '编程语言', NULL, 'wewqe', 1, 'http://localhost:8080/files/86.086Java零基础方法.mp4', 'Java', 10, '15906736695489ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 'http://localhost:8080/files/15906736695489ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 0);
INSERT INTO `gp_video` VALUES (61, NULL, 1, '阿发', '2020-05-28', 1, '编程语言', 10, '安达市多', 0, 'http://localhost:8080/files/97.097Java零基础方法执行内存分析.mp4', 'Java', 0, '15906738430389ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 'http://localhost:8080/files/15906738430389ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 0);
INSERT INTO `gp_video` VALUES (63, NULL, 1, '大王不高兴', '2020-05-29', 1, '编程语言', 0, '看到大家很热烈的反馈，很感动，也有些事情想说明一下：1、改名的事情，真的是不可抗力，在制作过程中制作组跟我沟通过很多次，也想尽量维持原来的感觉，但最后还是以能上线为目标，做了很多调整：2、时长问题，预算有限，所以前半部分相对比较轻的内容就用了泡面番的形式做了第一季，同时制作的第二季是15分钟一集，有大量预算燃烧的战斗镜头。当然整体还是控制着的，因为游戏并没有上线。希望9号游戏上了以后大家多多支持，这样之后我们才有预算做更多更好的动画[笑哭] 3、因为是泡面番的形式，所以希望能做的轻一些，于是OP和ED都是走的沙雕画风，后面会有所变化的', 0, 'http://localhost:8080/files/98.098Java零基础方法重载.mp4', 'Java', 0, '15907480854419ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 'http://localhost:8080/files/15907480854419ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 0);
INSERT INTO `gp_video` VALUES (65, 1, 1, '三生三世', '2020-05-30', 1, '编程语言', NULL, '三生三世', 10, 'http://localhost:8080/files/99.099Java零基础方法重载.mp4', 'Java', 1, '15908336196219c4f9a41b2a947c33fbabfff80426483_356.jpg', 'http://localhost:8080/files/15908336196219c4f9a41b2a947c33fbabfff80426483_356.jpg', 0);
INSERT INTO `gp_video` VALUES (66, 1, 1, 'Idea学习', '2020-05-30', 1, '编程语言', NULL, '大尺寸', 2, 'http://localhost:8080/files/100.100Java零基础方法重载.mp4', 'Java', 9, '15908341931204ab096c03704e5fb4193f926abbb12cd_356.jpg', 'http://localhost:8080/files/15908341931204ab096c03704e5fb4193f926abbb12cd_356.jpg', 0);
INSERT INTO `gp_video` VALUES (68, NULL, 2, 'JAVA架构师严选课 互联网架构/分布式/高并发/微服务', '2020-05-31', 1, '计算机基础', 0, '	全新打造60W年薪架构师课程，4年磨一剑，10次课程升级改版\n课程内容涉及Java互联网一线大厂技术、源码框架\n性能调优 （Tomcat Nginx JVM） \n分布式框架（并发编程 Zookeeper Netty dubbo Redis）\n微服务框架（ Spring Cloud Docker虚拟化 微服务架构 ）等知识点\n讲师团队均来自于一线互联网公司，一直被模仿，从未被超越！', 16, 'http://localhost:8080/files/101.101Java零基础方法重载.mp4', '算法与数据结构', 0, '159093524507550f3319274ca0ae76121e0c29061d4e4_356_tp=webp.jpg', 'http://localhost:8080/files/159093524507550f3319274ca0ae76121e0c29061d4e4_356_tp=webp.jpg', 0);
INSERT INTO `gp_video` VALUES (69, NULL, 2, '再学Zookeeper版本语法大全', '2020-05-31', 1, '编程语言', 5, 'JS是前端立身之本，不管框架多花哨，不会JS也是白扯。这门课可以帮助你夯实前端基础，掌握最新的ES6到11语法，稳步提升编程能力。课程带你熟练掌握语法，很多依赖第三方库才能做到的事用原生JS寥寥几行代码就可迎刃而解。', 1, 'http://localhost:8080/files/102.102Java零基础方法递归.mp4', 'php', 0, '159093579005742ad9ff239492e6a75d67827d2f9eec1_356.jpg', 'http://localhost:8080/files/159093579005742ad9ff239492e6a75d67827d2f9eec1_356.jpg', 0);
INSERT INTO `gp_video` VALUES (70, NULL, 2, 'Vue2.5->2.6->3.0 开发去哪儿网App 从零基础入门到实战项目开发', '2020-05-31', 1, '编程语言', 0, '从Vue基础语法入手，逐层递进，实战项目贴近企业流程，完全按照企业级别代码质量和工程开发流程进行授课，让你理解这套技术在企业中被使用的真实流程。更好的掌握Vue各个基础知识点。', 0, 'http://localhost:8080/files/103.103Java零基础方法递归.mp4', 'Java', 0, '15909358621739c4f9a41b2a947c33fbabfff80426483_356.jpg', 'http://localhost:8080/files/15909358621739c4f9a41b2a947c33fbabfff80426483_356.jpg', 0);
INSERT INTO `gp_video` VALUES (71, NULL, 1, 'Spring Cloud + Vue 前后端分离 开发企业级在线视频课程系统', '2020-05-31', 1, '编程语言', 10, '在线学习一夕之间席卷南北，互联网教育的未来潜力已毋庸置疑。视频作为在线教育的核心载体，其相关系统开发也是各大在线教育企业的重中之重。本课程用当下热门的微服务架构Spring Cloud和前端架构Vue，带领你一起开发企业级的在线视频课程系统，了解视频学习系统的核心业务特色，用一门课程掌握前后端技术，并拥有专属于自己的高质量线上作品。', 0, 'http://localhost:8080/files/104.104Java零基础方法递归.mp4', 'php', 0, '15909360088270f7d105b5d79d3413d2d1285dec0ce02_356.jpg', 'http://localhost:8080/files/15909360088270f7d105b5d79d3413d2d1285dec0ce02_356.jpg', 0);
INSERT INTO `gp_video` VALUES (72, NULL, 1, '利用Go优越的性能 设计与实现高性能企业级微服务网关', '2020-05-31', 1, '编程语言', 0, '不管是基于Java、Python、PHP，还是基于Go的网站，网站流量越高，对网关性能要求越高，尤其是亿级流量网站中，网关更是核心，它作为接入层承载了流量转发、负载均衡、服务限流、熔断降级等功能。作为后端开发者，掌握网关技术，是后端架构能力的分水岭，懂得设计网关才能知道架构精妙所在，本课程带你手把手设计并实现一个通用型前端+后端一体的微服务网关项目，同时利用Go语言本身的性能优势，打造网关的优越性能，提升自身硬实力，还能收获微服务网关项目作品，丰富个人简历。', 2, 'http://localhost:8080/files/105.105Java零基础方法递归.mp4', 'Java', 0, '159093605373950f3319274ca0ae76121e0c29061d4e4_356_tp=webp.jpg', 'http://localhost:8080/files/159093605373950f3319274ca0ae76121e0c29061d4e4_356_tp=webp.jpg', 0);
INSERT INTO `gp_video` VALUES (73, NULL, 1, 'uni-app 快速入门 从零开始实现新闻资讯类跨端应用', '2020-05-31', 1, '编程语言', 0, '跨端框架uni-app作为新起之秀，在不到两年的时间内，迅速被广大开发者青睐和推崇，得益于它颠覆性的优势，——“快”，快到可以节省7套代码。本课程由uni-app开发者团队成员亲授，带领大家无障碍快速掌握完整的uni-app跨端应用流程。并且搭配最佳的生态工具，HBuilderX和uniCloud，体验高效全栈开发。并且，讲师全程传授当下主流的开发概念——敏捷开发思路与技巧，带你时刻走在技术前沿。', 0, 'http://localhost:8080/files/106.106Java零基础方法递归.mp4', 'php', 0, '15909360964527fd3a27ab4d08ac11e935104f2cfbceb_356.jpg', 'http://localhost:8080/files/15909360964527fd3a27ab4d08ac11e935104f2cfbceb_356.jpg', 0);
INSERT INTO `gp_video` VALUES (74, NULL, 1, '移动端Python爬虫实战-2020版', '2020-05-31', 1, '编程语言', 0, '爬虫分为几大方向，WEB网页数据抓取、App数据抓取、软件系统数据抓取。本课程主要为同学讲解如何用Python实现App数据抓取，课程从开发环境搭建，App爬虫必备利器详解，项目实战，到最后的多App端数据抓取项目集成，到实现数据实时展示，让你掌握App数据抓取的技能，向更优秀的Python爬虫工程师迈进！', 0, 'http://localhost:8080/files/107.107Java零基础总结.mp4', 'Java', 0, '15909361537355ec33dc209743edc12000676-360-202.png', 'http://localhost:8080/files/15909361537355ec33dc209743edc12000676-360-202.png', 0);
INSERT INTO `gp_video` VALUES (75, NULL, 4, '计算机基础——更适合程序员的编程必备基础知识', '2020-05-31', 1, '编程语言', 0, '计算机基础方面的知识。对于一些非科班出身的同学来讲，一直是他们心中的痛，而对于科班出身的同学，很多同学在工作之后，也意识到自身所学知识的不足与欠缺，想回头补补基础知识。关于计算机基础的课程很多，内容繁杂，但无论是相关书籍还是大学课程，都有点脱离工作，有鉴于此，讲师结合自己多年工作经验，总结出了这套更适合程序员的计算机基础知识课程，带你更快的补足编程必备基础知识', 0, 'http://localhost:8080/files/108.108Java零基础面向对象和面向过程的区别.mp4', 'php', 0, '15909383005195d1032ab08719e0906000338-360-202.jpg', 'http://localhost:8080/files/15909383005195d1032ab08719e0906000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (76, NULL, 4, 'Vue全家桶实战 从零独立开发企业级电商系统', '2020-05-31', 1, '编程语言', 10, '现阶段，电商系统随处可见，具有很大市场潜力；同时因为商城系统复杂，涉及到丰富的知识点，如果能进行电商系统的开发，其它各类型的前端系统也能掌握。本课程以Vue全家桶作为主要的技术体系，模拟小米商城，带大家从0开始开发网页和交互功能。你能进行完整的项目架构、体会页面开发的全流程、学习丰富的技术栈和各类组件知识，还能了解Git、动画、开发调试等方面的知识。同时项目本身具有很强的实用性，稍作修改，便能“为我所用”。相信此课程能助你快速进击中级工程师。', 0, 'http://localhost:8080/files/109.109Java零基础类和对象概念.mp4', 'Python', 0, '15909393288095de8adb00809bd4406000338-360-202.jpg', 'http://localhost:8080/files/15909393288095de8adb00809bd4406000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (77, NULL, 4, '初识Python', '2020-05-31', 1, '编程语言', 10, 'Python教程基础分《Python入门》和《Python进阶》两门课程，本视频教程是Python第一门课程，是Python开发的入门教程，将介绍Python语言的特点和适用范围，Python基本的数据类型，条件判断和循环，函数，以及Python特有的切片和列表生成式。希望本python教程能够让您快速入门并编写简单的Python程序。', 0, 'http://localhost:8080/files/115.115Java零基础对象的创建和使用内存分析.mp4', 'Python', 0, '1590939447255540e57300001d6d906000338-360-202.jpg', 'http://localhost:8080/files/1590939447255540e57300001d6d906000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (78, NULL, 4, 'Java入门第一季', '2020-05-31', 1, '编程语言', 2, '本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s go!', 0, 'http://localhost:8080/files/116.116Java零基础对象的创建和使用内存分析.mp4', 'Python', 0, '1590939493620540e57300001d6d906000338-360-202.jpg', 'http://localhost:8080/files/1590939493620540e57300001d6d906000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (79, NULL, 4, '手把手从0打造电商网页开发', '2020-05-31', 1, '编程语言', 7, '本课程主要介绍电商网站基本制作流程，通过电商网站分步的教学让大家了解和掌握电商网站制作的流程和注意事项。并且运用网站内学习过的知识点，更加快速的掌握整站的开发过程，增加开发经验。', 0, 'http://localhost:8080/files/117.117Java零基础对象的创建和使用空指针异常.mp4', 'C', 0, '15909395970515e966fa0083a5b1e12000676-360-202.jpg', 'http://localhost:8080/files/15909395970515e966fa0083a5b1e12000676-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (80, NULL, 4, 'C语言入门', '2020-05-31', 1, '编程语言', 2, '本C语言教程从以下几个模块来贯穿主要知识点：初始C程序、数据类型、运算符、语句结构、函数和数组。每个阶段都配有练习题同时提供在线编程任务。希望通过本教程帮助C语言入门学习者迅速掌握程序逻辑并开始C语言编程。', 0, 'http://localhost:8080/files/118.118Java零基础对象的创建和使用内存分析.mp4', 'C', 0, '1590939768576574669dc0001993606000338-360-202.jpg', 'http://localhost:8080/files/1590939768576574669dc0001993606000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (81, NULL, 4, 'JavaScript入门篇', '2020-05-31', 1, '编程语言', 3, '本教程让您快速认识JavaScript，熟悉JavaScript基本语法、窗口交互方法和通过DOM进行网页元素的操作，学会如何编写JS代码，如何运用JavaScript去操作HTML元素和CSS样式，本JavaScript教程分为四个章节，能够让您快速入门，为JavaScript深入学习打下基础。', 0, 'http://localhost:8080/files/119.119Java零基础对象的创建和使用内存分析.mp4', 'C', 0, '159093982168953e1d0470001ad1e06000338-360-202.jpg', 'http://localhost:8080/files/159093982168953e1d0470001ad1e06000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (82, NULL, 4, 'PS入门教程——新手过招', '2020-05-31', 1, '编程语言', 0, '慕课网推出的PS入门教程，PS入门学习必备课程，本课程将带你从PS的基本界面开始熟悉，ps入门课程主要分为三个章节，ps基本工具，ps选择与变形，ps色彩调整，通过小案例来学习简单的工具，终极目标就是先揭开PS的面纱，让你掌握PS的基本用法。', 0, 'http://localhost:8080/files/120.120Java零基础对象的创建和使用内存分析.mp4', 'C', 0, '159093989127553a28e960001311b06000338-360-202.jpg', 'http://localhost:8080/files/159093989127553a28e960001311b06000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (83, NULL, 2, '互联网Java架构师高薪成长之路', '2020-06-01', 1, '编程语言', 0, '互联网Java架构师高薪成长之路', 0, 'http://localhost:8080/files/121.121Java零基础对象的创建和使用内存分析.mp4', 'C', 0, '159098081957853e1d0470001ad1e06000338-360-202.jpg', 'http://localhost:8080/files/159098081957853e1d0470001ad1e06000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (84, NULL, 2, '判断input[type=file]上传文件格式', '2020-06-01', 1, '编程语言', 0, '判断input[type=file]上传文件格式', 0, 'http://localhost:8080/files/122.122Java零基础对象的创建和使用内存分析.mp4', 'Java', 0, '1590980862538574669dc0001993606000338-360-202.jpg', 'http://localhost:8080/files/1590980862538574669dc0001993606000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (85, 26, 2, '通过js判断上传文件类型', '2020-06-01', 1, '编程语言', NULL, '通过js判断上传文件类型c', 18, 'http://localhost:8080/files/87.087Java零基础方法.mp4', 'Java', 1, '15909906804185fbaf0c88429d17f9160d1465cec3ee2_356.jpg', 'http://localhost:8080/files/15909906804185fbaf0c88429d17f9160d1465cec3ee2_356.jpg', 0);
INSERT INTO `gp_video` VALUES (86, NULL, 1, 'Python 源码深度剖析', '2020-06-01', 1, '编程语言', 4, '了解Python运行机制和设计思想；\n熟悉背后的数据结构和算法原理；\n结合工程实际，掌握高效程序设计之道；\n高级面试知识点，求职更自信；\n大量图表辅助学习，难点知识轻松拿下', 3, 'http://localhost:8080/files/88.088Java零基础方法.mp4', 'Python', 0, '15909997192545de8adb00809bd4406000338-360-202.jpg', 'http://localhost:8080/files/15909997192545de8adb00809bd4406000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (87, 1, 1, 'Java架构师体系课：跟随千万级项目从0到100全过程高效成长', '2020-06-01', 1, '编程语言', NULL, 'PyTorch是目前深度学习的主流框架之一，它有着成熟的生态、大量开源的源码以及最新的模型，无论学术研究还是工程落地，PyTorch都是主流选择。同时，PyTorch比其他深度学习框架更易学，也是新手入门的好选择。本课程将算法、模型和基础理论知识进行有机结合，结合多个不同的CV与NLP实战项目，帮助大家掌握PyTorch框架的基础知识和使用方法，并学会利用PyTorch框架解决实际问题。通过本课程，可以较平稳地快速入门深度学习领域，初步掌握解决深度学习基础问题的关键性技能。', 0, 'http://localhost:8080/files/89.089Java零基础方法.mp4', 'Java', 12, '15910042099085dba8cee0969880506000338.png', 'http://localhost:8080/files/15910042099085dba8cee0969880506000338.png', 0);
INSERT INTO `gp_video` VALUES (88, 1, 1, '亲历千万级项目从0到100的成长全过程', '2020-06-01', 1, '编程语言', NULL, '这是一个围绕真实电商项目成长的课程，手把手带你编写代码，从解决初期单体问题开始，\n随着项目不断演变，到最终解决“高可用、高并发、高性能”的技术需求，带你成长为优秀的架构师\n由6位资深架构师协力完成5万+行高质量代码，仅代码商业价值超学费数倍。', 4, 'http://localhost:8080/files/90.090Java零基础方法.mp4', 'Java', 11, '15910042440827fd3a27ab4d08ac11e935104f2cfbceb_356.jpg', 'http://localhost:8080/files/15910042440827fd3a27ab4d08ac11e935104f2cfbceb_356.jpg', 0);
INSERT INTO `gp_video` VALUES (89, 37, 1, 'Java支付全家桶：企业级各类支付手段一站式解决方案', '2020-06-01', 1, '编程语言', NULL, '支付是企业实现生产价值最关键的一环，从事支付一定是企业核心业务。而无论何种销售形式，都离不开最关键的 “支付”环节。本课程带你实战实战移动端、PC端、H5等多终端的支付系统，本系统可对接各类真实业务系统，如外卖、电商、订票等各行业的业务系统，，为系统对接上支持微信、支付宝、银联、融合支付、混合支付等多种企业级支付模式，让你的系统一键支持【支付】功能。无论你是前端还是后端，只要你自认为是力争上游的后浪一员，都应该尽早攻克支付技术。', 0, 'http://localhost:8080/files/91.091Java零基础方法.mp4', 'Java', 1, '15910087363485ecc7cb709a1053112000676-360-202.png', 'http://localhost:8080/files/15910087363485ecc7cb709a1053112000676-360-202.png', 0);
INSERT INTO `gp_video` VALUES (90, NULL, 2, '移动开发“两极分化”，只有平庸和抢手之分，没有差不多的“中间层”', '2020-06-03', 1, '云计算大数据', 5, '从业经验： 深耕移动端9年+，负责过Android、iOS、小程序、Java等多\n平台项目的研发，有多款Android、Flutter、RN App上线及管理经验。\n\n技术栈： 对Android、iOS、Flutter、React Native以及小程序项目架构\n设计及开发有深刻理解， 涉猎技术领域非常宽广。', 2, 'http://localhost:8080/files/92.092Java零基础方法.mp4', 'Hadoop', 0, '15911763597985ecb294109cd2c8606000338.png', 'http://localhost:8080/files/15911763597985ecb294109cd2c8606000338.png', 0);
INSERT INTO `gp_video` VALUES (91, NULL, 2, '从Java后端到Web全栈', '2020-06-03', 1, '云计算大数据', 0, '从后端到全栈CTO，我花了10年，这10年浓缩成了120多个小时，我的10年，你或许只需要半年，我希望\n你比我幸运，少一些投石问路式的摸索，以更快的速度成为能胜任更高职位，更受市场青睐的全栈工程师', 2, 'http://localhost:8080/files/93.093Java零基础回顾.mp4', 'Hadoop', 0, '15911768282065ddba58609d9d01c06000338.png', 'http://localhost:8080/files/15911768282065ddba58609d9d01c06000338.png', 0);
INSERT INTO `gp_video` VALUES (94, NULL, 2, '实战企业级项目 践行App重构之路', '2020-06-03', 1, '移动开发', 3, '随着企业级App功能不断累加强大，App代码质量下降、设计缺陷、难以维护、迭代困难等问题越来越突出，App的重构迭代已经成为Android工程师急需解决的核心工作内容。本课程还原一线互联网公司App所经历的重构过程，基于模块化，以组件化重构和插件化重构为核心，让大家掌握一线互联网公司App的最新架构和技术，并且能够解决重构过程中碰到的所有难题，更有助于拿到大厂offer。', 1, 'http://localhost:8080/files/94.094Java零基础方法执行内存分析.mp4', 'Android', 0, '15911840906935e4f4f66098b14c512000676-360-202.png', 'http://localhost:8080/files/15911840906935e4f4f66098b14c512000676-360-202.png', 0);
INSERT INTO `gp_video` VALUES (96, NULL, 2, 'Typescript + React 高仿 Antd 从零到一打造自己的组件库', '2020-06-03', 1, '移动开发', 4, '同学们在学习了一门技术的基础知识后，怎样持续提升这门技术达到更高水平？怎样写出高质量符合大厂要求的代码？写什么样的项目才能提高实力和扩大影响力？本课程给出了答案：真实模拟大厂开发大型开源项目的流程，从零到一高仿 AntD 使用 Typescript 和 React 开发自己的组件库，在这其中穿插了一系列的知识点： 大型项目的样式组织，react 组件测试，react 动画实现。开发完毕还实现了模块化打包，代码发布再到 CI/CD 的全流程', 1, 'http://localhost:8080/files/95.095Java零基础方法执行内存分析.mp4', 'React native', 0, '15911847741475e6b4ede09bc3b4412000676-360-202.png', 'http://localhost:8080/files/15911847741475e6b4ede09bc3b4412000676-360-202.png', 0);
INSERT INTO `gp_video` VALUES (97, 42, 1, '移动APP开发', '2020-06-05', 1, '移动开发', NULL, '你电脑打开', 0, 'http://localhost:8080/files/96.096Java零基础方法执行内存分析.mp4', 'iOS', 1, '15913590041045ddba58609d9d01c06000338.png', 'http://localhost:8080/files/15913590041045ddba58609d9d01c06000338.png', 0);
INSERT INTO `gp_video` VALUES (98, NULL, 1, '剑指Java面试-Offer直通车', '2020-06-09', 1, '计算机基础', 0, '互联网寒冬来袭，如何在面试之前更高效的做好面试准备，是程序员们共同关注的问题。本课程中，百度资深面试官带你剖析Java面试流程，遍历Java面试知识技能，让你更高效更全面的进行面试准备。课程内容包含Java面试必考点、高频点、加薪点。课程是一线互联网大厂面试题库的精华总结，是经典的重现，助力你编程能力的提升。课程不变的初心是为了帮你省时省力准备面试，让你面试如虎添翼，让高薪工作纷至沓来。', 1, 'http://localhost:8080/files/159166879444120200528_220112.mp4', '计算机网络', 0, '15916688206315c18d2d8000141c506000338-360-202.jpg', 'http://localhost:8080/files/15916688206315c18d2d8000141c506000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (99, NULL, 2, '玩转Java并发工具，精通JUC，成为并发多面手', '2020-06-09', 1, '编程语言', 3, '在处理Java并发问题时，需要使用各种工具。但市面上缺少对并发工具成体系的讲解。本课程深度解密JUC库，对Java并发常见的工具类进行从使用到原理的详解，包括CAS+AQS+ThreadLocal+ConcurrentHashMap+线程池+各种锁+并发综合实战项目等。在掌握工具的同时，建立起整个并发工具类的知识体系，并上手一个高性能缓存的实战项目。课程对于面试和实际工作都非常有帮助，还能通过实战项目，把学到的知识真正内化，助你用最快的速度，得到最大的提升。', 0, 'http://localhost:8080/files/159167259973520200528_220112.mp4', 'Python', 0, '15916725997425e0030e6091d0fc712000676-360-202.png', 'http://localhost:8080/files/15916725997425e0030e6091d0fc712000676-360-202.png', 0);
INSERT INTO `gp_video` VALUES (100, 5, 37, '面试跳槽提升必备 全面解析iOS中的Runtime机制', '2020-06-10', 1, '编程语言', NULL, 'Runtime课程从基础、进阶到运用三大部分进行讲解。从基础的C语言开始，循循渐进的讲解两大核心功能与常用API，并在实战案例场景中应用Runtime核心重难点，提升攻城狮的开发技能，开发出高性能的APP。并在最后讲解了iOS面试中必考的10道面试题，助同学们在求职面试中，高人一等，获得自己满意的offer。', 1, 'http://localhost:8080/files/159176535564920200528_220112.mp4', 'Java', 2, '15917653556555c0731ab0001872306000338-360-202.jpg', 'http://localhost:8080/files/15917653556555c0731ab0001872306000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (101, 5, 37, 'iApp裕语言零基础之评分,拖动条,进度条,日期时间选择', '2020-06-10', 1, '编程语言', NULL, 'Runtime课程从基础、进阶到运用三大部分进行讲解。从基础的C语言开始，循循渐进的讲解两大核心功能与常用API，并在实战案例场景中应用Runtime核心重难点，提升攻城狮的开发技能，开发出高性能的APP。并在最后讲解了iOS面试中必考的10道面试题，助同学们在求职面试中，高人一等，获得自己满意的offer。', 1, 'http://localhost:8080/files/1591767054125023.iApp裕语言零基础之评分,拖动条,进度条,日期时间选择.mp4', 'Java', 3, '15917670541625c0731ab0001872306000338-360-202.jpg', 'http://localhost:8080/files/15917670541625c0731ab0001872306000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (102, 5, 37, 'iApp裕语言零基础之评分,拖动条,进度条,日期时间选择', '2020-06-10', 2, '编程语言', NULL, 'Runtime课程从基础、进阶到运用三大部分进行讲解。从基础的C语言开始，循循渐进的讲解两大核心功能与常用API，并在实战案例场景中应用Runtime核心重难点，提升攻城狮的开发技能，开发出高性能的APP。并在最后讲解了iOS面试中必考的10道面试题，助同学们在求职面试中，高人一等，获得自己满意的offer。', 0, 'http://localhost:8080/files/1591767055951023.iApp裕语言零基础之评分,拖动条,进度条,日期时间选择.mp4', 'Java', 3, '15917670559805c0731ab0001872306000338-360-202.jpg', 'http://localhost:8080/files/15917670559805c0731ab0001872306000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (103, 8, 1, '#是标签内置的一个方法，代表top的作用', '2020-06-10', 1, '计算机基础', NULL, '这种方法也是网上很常见的代码，#是标签内置的一个方法，代表top的作用。所以用这种方法点击后网页后返回到页面的最顶端。', 0, 'http://localhost:8080/files/159177080156420200528_220112.mp4', '计算机网络', 1, '15917708015695c0731ab0001872306000338-360-202.jpg', 'http://localhost:8080/files/15917708015695c0731ab0001872306000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (104, 10, 1, '玩转Java并发工具，精通JUC，成为并发多面手', '2020-06-10', 1, '前沿技术', NULL, '在处理Java并发问题时，需要使用各种工具。但市面上缺少对并发工具成体系的讲解。本课程深度解密JUC库，对Java并发常见的工具类进行从使用到原理的详解，包括CAS+AQS+ThreadLocal+ConcurrentHashMap+线程池+各种锁+并发综合实战项目等。在掌握工具的同时，建立起整个并发工具类的知识体系，并上手一个高性能缓存的实战项目。课程对于面试和实际工作都非常有帮助，还能通过实战项目，把学到的知识真正内化，助你用最快的速度，得到最大的提升。', 1, 'http://localhost:8080/files/159177089071620200528_220112.mp4', '微服务', 1, '15917708907215e4f4f66098b14c512000676-360-202.png', 'http://localhost:8080/files/15917708907215e4f4f66098b14c512000676-360-202.png', 0);
INSERT INTO `gp_video` VALUES (105, 11, 1, '实战企业级项目 践行App重构之路', '2020-06-10', 0, '移动开发', NULL, '随着企业级App功能不断累加强大，App代码质量下降、设计缺陷、难以维护、迭代困难等问题越来越突出，App的重构迭代已经成为Android工程师急需解决的核心工作内容。本课程还原一线互联网公司App所经历的重构过程，基于模块化，以组件化重构和插件化重构为核心，让大家掌握一线互联网公司App的最新架构和技术，并且能够解决重构过程中碰到的所有难题，更有助于拿到大厂offer。', 0, 'http://localhost:8080/files/159177123803720200528_214512.mp4', 'Android', 1, '15917712380405e4f4f66098b14c512000676-360-202.png', 'http://localhost:8080/files/15917712380405e4f4f66098b14c512000676-360-202.png', 0);
INSERT INTO `gp_video` VALUES (106, 11, 1, '聚焦企业级App重构的稀缺课程', '2020-06-10', 0, '移动开发', NULL, '从用人需求出发，带你一课掌握大厂要求的App重构核心技能', 0, 'http://localhost:8080/files/159177132384720200528_214512.mp4', 'Android', 2, '15917713238505ddba58609d9d01c06000338.png', 'http://localhost:8080/files/15917713238505ddba58609d9d01c06000338.png', 0);
INSERT INTO `gp_video` VALUES (107, 43, 2, 'Spring Framework', '2020-06-10', 0, '移动开发', NULL, 'Spring Framework', 1, 'http://localhost:8080/files/1591780502141026.iApp裕语言零基础之相对布局.mp4', 'Android', 1, '15917805022885c0731ab0001872306000338-360-202.jpg', 'http://localhost:8080/files/15917805022885c0731ab0001872306000338-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (108, NULL, 2, 'Java工程师', '2020-06-11', 0, '计算机基础', 4, '严格的代码规范和设计，注重接口定\n义，业务组件，插件拆分的合理性', 1, 'http://localhost:8080/files/159186329893620200528_214512.mp4', '算法与数据结构', 0, '15918632989405ecb294109cd2c8606000338.png', 'http://localhost:8080/files/15918632989405ecb294109cd2c8606000338.png', 0);
INSERT INTO `gp_video` VALUES (109, 26, 2, '从开发到服务编排，带你整体把握容器化的微服务', '2020-06-11', 1, '前沿技术', NULL, '聚焦Kubernetes和Docker，精讲服务编排\n以循序渐进带入的方式，解决kubernetes“入门门槛高、学习曲线陡”的难题', 1, 'http://localhost:8080/files/159186349663320200528_214127.mp4', '微服务', 2, '15918634966365ddba58609d9d01c06000338.png', 'http://localhost:8080/files/15918634966365ddba58609d9d01c06000338.png', 0);
INSERT INTO `gp_video` VALUES (110, NULL, 2, 'React16+React-Router4 从零打造企业级电商后台管理系统', '2020-06-11', 1, '移动开发', 7, '课程针对有一些前端基础，但对前端框架还不够了解，不能灵活使用的同学，手把手带你用React＋React－Router从技术选型开始，直至部署上线，开发一个后台管理系统，让你在实际开发中，打开前端框架的大门，告别小白时代！', 0, 'http://localhost:8080/files/159188319119820200528_215241.mp4', 'React native', 0, '15918831912105a6e7fdf0001e7bb05400300-360-202.jpg', 'http://localhost:8080/files/15918831912105a6e7fdf0001e7bb05400300-360-202.jpg', 0);
INSERT INTO `gp_video` VALUES (111, NULL, 2, 'Java零基础入门实战课java开发全栈技能就业课', '2020-06-12', 1, '移动开发', 10, '从基础到实战，大型互联网公司资深架构手把手教学，通过面向企业级开发培养良好的编程习惯；通过项目实战训练，学员拥有众多领域的项目开发经验，实现全面掌握企业级应用、互联网应用开发技能，成为基础知识扎实、项目经验丰富的JAVA高级工程师，同时具备架构师知识，能够独立搭建“高可用、高并发”架构的技术人员。', 0, 'http://localhost:8080/files/159192875425720200528_220112.mp4', 'iOS', 0, '1591928754267600.jpg', 'http://localhost:8080/files/1591928754267600.jpg', 0);

-- ----------------------------
-- Table structure for gp_video_series
-- ----------------------------
DROP TABLE IF EXISTS `gp_video_series`;
CREATE TABLE `gp_video_series`  (
  `series_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `series_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `series_number` int(11) NOT NULL,
  `series_brief_introduction` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `series_integral` int(11) NOT NULL,
  `series_image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '封面名',
  `series_image_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '封面地址',
  `series_date` date NULL DEFAULT NULL,
  `series_classification` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '编程语言，云计算大数据，计算机基础，移动开发，前沿技术',
  `series_classification_little` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '二级分类',
  `series_is_delete` int(11) NULL DEFAULT NULL COMMENT '0：未删除，1：删除',
  PRIMARY KEY (`series_id`) USING BTREE,
  INDEX `FK_Reference_9`(`user_id`) USING BTREE,
  CONSTRAINT `FK_Reference_9` FOREIGN KEY (`user_id`) REFERENCES `gp_user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 47 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gp_video_series
-- ----------------------------
INSERT INTO `gp_video_series` VALUES (1, 1, '架构师必备技能docker入门到专精', 30, '使用RN + TS开发听书App，从需求分析，到功能实现，一步步带领大家完成功能，学会如何解决实际开发问题，是一个完整的项目开发实例。通过导航器、dva状态管理、图标生成组件、自定义导航器、动画效果、音视频的播放、动态导航和动态model、本地数据持久化等一系列的功能，帮助大家具备独立开发完整的RN应用的能力\n                        使用RN + TS开发听书App，从需求分析，到功能实现，一步步带领大家完成功能，学会如何解决实际开发问题，是一个完整的项目开发实例。通过导航器、dva状态管理、图标生成组件、自定义导航器、动画效果、音视频的播放、动态导航和动态model、本地数据持久化等一系列的功能，帮助大家具备独立开发完整的RN应用的能力', 55, '测试', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCKr3peY93HCS5gUibJZZDym6WlguYr1wU8wSRISiasjjbBLZTuHeGAXp6v780JgV9p0/600', '2020-05-30', '计算机基础', '算法与数据结构', 0);
INSERT INTO `gp_video_series` VALUES (2, 1, '多线程与高并发', 4, '	课程分为微服务架构专题、分布式架构专题、大数据架构、框架源码剖析、性能调优、工程化，适合从事JAVA开发2年以上的开发者进阶学习，旨在培养JAVA架构师人才。', 50, '多线程与高并发_吊打面试官的硬核技能', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCKr3peY93HCS5gUibJZZDym6WlguYr1wU8wSRISiasjjbBLZTuHeGAXp6v780JgV9p0/600', '2020-05-13', '编程语言', 'C', 0);
INSERT INTO `gp_video_series` VALUES (4, 10, 'C/C++ 零基到大神精讲(C++17最新标准/游戏编程/项目实战)', 5, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 0, '多线程与高并发_吊打面试官的硬核技能', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCKr3peY93HCS5gUibJZZDym6WlguYr1wU8wSRISiasjjbBLZTuHeGAXp6v780JgV9p0/600', '2020-05-23', '前沿技术', '深度学习', 0);
INSERT INTO `gp_video_series` VALUES (5, 37, '【淘宝美工】免费/ps教程/平面设计/抠图/排版/主图/详情页/电商', 23, '让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。', 0, '产生', 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBibg80zjdA7HM2Wsm2tg4ek9QCpr1vobwOicXvYQhNa2ytybwO9UZlK2WKXpuicmLvGE/356', '2020-05-07', '编程语言', 'Java', 0);
INSERT INTO `gp_video_series` VALUES (6, 1, 'PHP高级开发—大神开发专题课程【六星教育】', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 10, '1590244983627ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (7, 1, 'Java日志框架-SLF4J入门', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 10, '1590244986065ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '云计算大数据', 'Hadoop', 0);
INSERT INTO `gp_video_series` VALUES (8, 1, 'Springmvc框架实战大揭秘', 20, '软谋教育，成立于2014年7月，总部位于武汉市洪山区108号，专注IT/互联网在线教育。目前开设有java培训，.net培训，web全栈培训，小程序培训，python培训，2014年8月入驻腾讯课堂，2015年7月获得腾讯课堂首批机构认证，2017年1月获腾讯课堂年度最受欢迎奖，目前各类学员累计达40W，付费学员达4000余人，公司口号是：因为专注，所以精彩。', 10, '1590244986663ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '计算机基础', '计算机网络', 0);
INSERT INTO `gp_video_series` VALUES (9, 1, 'JDK8新特性-stream api', 20, 'Redis是一个开源的使用ANSIC语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。', 10, '1590244986856ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (10, 1, 'Mysql底层原理与性能调优【图灵学院】', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 0, '1590244998144ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '前沿技术', '微服务', 0);
INSERT INTO `gp_video_series` VALUES (11, 1, 'JAVA高级架构师（TCA）', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 0, '1590245002790ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '移动开发', 'Android', 0);
INSERT INTO `gp_video_series` VALUES (12, 1, 'Zookeeper集群原理【图灵学院】', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 100, '1590245002910ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (13, 1, '性能调优专题-MySQL索引优化与底层数据结构深入剖析【图灵学院】', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 100, '1590245003218ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (14, 1, '搞定AOP面试从Spring热插件', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 100, '1590245003360ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (15, 1, '分布式架构-Redis高并发分布式锁【图灵学院】', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 100, '1590245003488ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (16, 1, '金三银四BAT面试突击与简历优化指导【图灵学院】\r\n', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 100, '1590245003827ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (17, 1, '线程池设计思想 线程池的设计原理 Java高级开发架构师进阶-咕泡', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 100, '1590245003961ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (18, 1, '深入浅出Git', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 100, '1590245004130ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (19, 1, '分布式专题-亿级流量商品详情静态化与多级缓存实战【图灵学院】', 20, '如果你平时只有CRUD的经验，从来不会了解多线程与高并发，相信你一定一头雾水。\n\n如果是这样，你一定要拿出4个小时的时间，参加一次马士兵老师的《多线程与高并发》训练营。\n\n让骨灰级扫地神僧马士兵老师带你将多线程的知识系统化，帮助你理解多线程在CPU层级的实现，以及这些实现如何一层一层的映射到那些上亿用户，千万QPS，百万TPS的系统。\n\n横扫一切关于多线程的问题，吊打所有敢于提问并发问题的面试官。\n\n从此不再心虚，不再胆怯，开启涨薪升级之旅。', 100, '1590245004289ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 0);
INSERT INTO `gp_video_series` VALUES (20, 1, '3DMAX建模效果图 CAD VRAY PS cr室内设计家装工装', 20, '欢迎加入艾巴优教育！专注设计制作，编程开发在线培训。全面系统化的教学模式，独家N对1辅导学员加速提升模式，课程全程接轨社会工作需求，上课=上班=工作。', 100, '1590245583778ff625711fbe48c8e91119d82e408bdcc_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (21, 1, 'JAVA架构师黄埔班', 20, '齐论视觉学院考虑到未来的设计职业发展空间，超前性和预测性，根据不同阶段学员对接对应需求订单，提升实战技能并获取报酬，搭建设计师与企业人才就业的桥梁，丰富优秀设计师更多的就业选择。', 20, '15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', 'http://localhost:8080/files/15902458532669ddf6bd7f45f73708bd2cc317162a0d6_356.jpg', '2020-04-23', '计算机基础', '计算机网络', 0);
INSERT INTO `gp_video_series` VALUES (24, 4, '编程必备基础 计算机组成原理+操作系统+计算机网络', 20, '计算机基础方面的知识。对于一些非科班出身的同学来讲，一直是他们心中的痛，而对于科班出身的同学，很多同学在工作之后，也意识到自身所学知识的不足与欠缺，想回头补补基础知识。关于计算机基础的课程很多，内容繁杂，但无论是相关书籍还是大学课程，都有点脱离工作，有鉴于此，讲师结合自己多年工作经验，总结出了这套更适合程序员的计算机基础知识课程，带你更快的补足编程必备基础知识', 10, '1590640026631bcc1a2bb49cc23d82fbb8ba76ceb2787_356.jpg', 'http://localhost:8080/files/1590640026631bcc1a2bb49cc23d82fbb8ba76ceb2787_356.jpg', '2020-05-28', '计算机基础', '计算机网络', 0);
INSERT INTO `gp_video_series` VALUES (25, 1, '鬼灭之刃', 0, '很高兴小阎王动画化，但是动画做的感觉上非常奇怪，给我的感觉和原作有很大出入，我甚至感觉小阎王不是胆小而是从各方面的弱小，几乎一直在怂，然后突然霸气几秒钟，非常尴尬。前两集看下来不如有声漫舒服。\n其实只要出动画就很高兴了，但是还是希望可以做的更好。', 0, '15907484645854cecfaa730a963dc268d8055acfa6822_356.jpg', 'http://localhost:8080/files/15907484645854cecfaa730a963dc268d8055acfa6822_356.jpg', '2020-05-29', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (26, 2, 'Java高级进阶', 27, '进程调度呢，可以控制进程执行顺序，并发呢，会使进程顺序随意？假如又有调度，还有并发，那进程执行是有顺序，还是无序呢。', 0, '15907583436024ab096c03704e5fb4193f926abbb12cd_356.jpg', 'http://localhost:8080/files/15907583436024ab096c03704e5fb4193f926abbb12cd_356.jpg', '2020-05-29', '前沿技术', '微服务', 0);
INSERT INTO `gp_video_series` VALUES (28, 1, 'C语言进阶', 20, 'C语言进阶', 0, '15908326621650f7d105b5d79d3413d2d1285dec0ce02_356.jpg', 'http://localhost:8080/files/15908326621650f7d105b5d79d3413d2d1285dec0ce02_356.jpg', '2020-05-12', '移动开发', 'Android', 0);
INSERT INTO `gp_video_series` VALUES (29, 2, 'Spring Boot源码解读【马士兵教育】', 1, '马士兵教育创立于2016年，致力于专业JAVA培训，首创JAVA技术栈延伸课，提倡“复杂问题简单说”！', 0, '1590935193441ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', 'http://localhost:8080/files/1590935193441ba4d7979bdb0e6fd389adf4607350c9b_356.jpg', '2020-05-31', '编程语言', 'Java', 0);
INSERT INTO `gp_video_series` VALUES (30, 4, '前端JavaScript面试——精准匹配大厂面试要求', 4, 'BAT资深面试官针对时下面试高频考点，帮你解决面试问题。课程不局限于简单地讲解每一个知识点，而是以面试官的角度出发，带你了解前端面试中每个“门道”与“套路”。手把手带你分析考点及解答策略，梳理JS考试体系，帮助前端新人快速通过JS面试部分。', 10, '15909384098065dbffa9109ef425a12000676-360-202.png', 'http://localhost:8080/files/15909384098065dbffa9109ef425a12000676-360-202.png', '2020-05-31', '编程语言', 'php', 0);
INSERT INTO `gp_video_series` VALUES (31, 4, '前端框架及项目面试 聚焦Vue/React/Webpack', 1, '前端面试时，除了考察原生基础之外，还必考Vue、React 和 Webpack框架内容，对于求职者 是刚需。在这三者的基础之上，还会考察能力方面，即项目设计和项目经验，最终才能通过。这就是这门课要解决的问题，具体内容见下方，或直接观看导学视频', 20, '15909384576995e3cfea008e9a61b06000338-360-202.jpg', 'http://localhost:8080/files/15909384576995e3cfea008e9a61b06000338-360-202.jpg', '2020-05-31', '编程语言', 'php', 0);
INSERT INTO `gp_video_series` VALUES (32, 4, '全面系统Python3.8入门+进阶 (程序员必备第二语言)', 1, '无论是大数据、人工智能还是机器学习，Python都是最热门的首选语言 ，这次课程，就将带你从基础入门Python3，掌握Python3.x 版本语法，并结合讲师实际工作经验讲解Python使用技巧以及数据结构等相关知识，并为你精心配套了练习题目及实战案例。', 10, '159093850496759b8a486000107fb05400300-360-202.jpg', 'http://localhost:8080/files/159093850496759b8a486000107fb05400300-360-202.jpg', '2020-05-31', '编程语言', 'php', 0);
INSERT INTO `gp_video_series` VALUES (33, 4, '玩转算法系列--玩转数据结构 更适合0算法基础入门到进阶（java版）', 10, '从数据结构基础到二叉树、红黑树、哈希表，bobo老师精心设计本课程，详细生动的为你讲解数据结构。让你面对数据结构可以学的会、玩的溜。掌握数据结构，完成从“搬砖”到“盖楼”的蜕变，就在此课。各位小伙伴不要错过！', 0, '15909386449315ad05dc00001eae705400300-360-202.jpg', 'http://localhost:8080/files/15909386449315ad05dc00001eae705400300-360-202.jpg', '2020-05-31', '编程语言', 'php', 0);
INSERT INTO `gp_video_series` VALUES (34, 4, 'Vue Element+Node.js开发企业通用管理后台系统', 1, '综合应用 Vue 和 Node 技术，基于 Element-UI 组件库搭建“小慕读书“的管理后台，通过 Node 实现了电子书上传和解析功能以及权限管理。课程对 Vue 和 Node 有较为深入的应用，不仅会教大家如何实现功能，更会讲解技术背后的原理，帮助大家做到举一反三。课程面向中高级开发者，提供完整的开发文档和API支持，让大家可以快速上手实战', 10, '15909386956645dc9047a09bae31e12000676-360-202.png', 'http://localhost:8080/files/15909386956645dc9047a09bae31e12000676-360-202.png', '2020-05-31', '编程语言', 'php', 0);
INSERT INTO `gp_video_series` VALUES (35, 4, 'python进阶', 1, 'Python基础分《Python入门》和《Python进阶》两门课程，《Python进阶》是第二门课程，学习该课程前，请先学习《Python入门》,效果会更好。《Python进阶》课程详细介绍Python强大的函数式编程和面向对象编程，掌握Python高级程序设计的方法。', 2, '15909399900175705b7350001d59b06000338-360-202.jpg', 'http://localhost:8080/files/15909399900175705b7350001d59b06000338-360-202.jpg', '2020-05-31', '编程语言', 'Python', 0);
INSERT INTO `gp_video_series` VALUES (36, 2, 'aaaa', 1, '', 0, '1590979495382540e57300001d6d906000338-360-202.jpg', 'http://localhost:8080/files/1590979495382540e57300001d6d906000338-360-202.jpg', '2020-06-01', '编程语言', 'Java', 1);
INSERT INTO `gp_video_series` VALUES (37, 2, 'input type=\"file\" 在js中判断文件上传类型 ', 1, 'input type=\"file\" 在js中判断文件上传类型 ', 0, '15909796502107fa123900feae9f14f36c057678196fb_356.jpg', 'http://localhost:8080/files/15909796502107fa123900feae9f14f36c057678196fb_356.jpg', '2020-06-01', '编程语言', 'Java', 0);
INSERT INTO `gp_video_series` VALUES (38, 2, 'Vue全家桶实战 从零独立开发企业级电商系统(免费升级Vue3.0)', 20, '现阶段，电商系统随处可见，具有很大市场潜力；同时因为商城系统复杂，涉及到丰富的知识点，如果能进行电商系统的开发，其它各类型的前端系统也能掌握。本课程以Vue全家桶作为主要的技术体系，模拟小米商城，带大家从0开始开发网页和交互功能。你能进行完整的项目架构、体会页面开发的全流程、学习丰富的技术栈和各类组件知识，还能了解Git、动画、开发调试等方面的知识。同时项目本身具有很强的实用性，稍作修改，便能“为我所用”。相信此课程能助你快速进击中级工程师。', 2, '15909912912675de8adb00809bd4406000338-360-202 (1).jpg', 'http://localhost:8080/files/15909796502107fa123900feae9f14f36c057678196fb_356.jpg', '2020-06-01', '云计算大数据', 'Hadoop', 0);
INSERT INTO `gp_video_series` VALUES (39, 1, 'C语言职场进阶', 10, 'C语言职场进阶', 3, '15910069604595de8adb00809bd4406000338-360-202.jpg', 'http://localhost:8080/files/15910069604595de8adb00809bd4406000338-360-202.jpg', '2020-06-01', '编程语言', 'C', 0);
INSERT INTO `gp_video_series` VALUES (40, 1, 'flash插件', 5, 'flash插件是一个非常好用的插件', 0, '159100735045790d19cd0ebbc9aecaa8ac36ebb79f79b_356.jpg', 'http://localhost:8080/files/159100735045790d19cd0ebbc9aecaa8ac36ebb79f79b_356.jpg', '2020-06-01', '云计算大数据', 'Hadoop', 0);
INSERT INTO `gp_video_series` VALUES (41, 1, 'html5', 10, '上传的文件转换为file对象倒是可以', 0, '15910074300129c4f9a41b2a947c33fbabfff80426483_356.jpg', 'http://localhost:8080/files/15910074300129c4f9a41b2a947c33fbabfff80426483_356.jpg', '2020-06-01', '云计算大数据', 'Spark', 0);
INSERT INTO `gp_video_series` VALUES (42, 2, '应用自动更新组件开发', 9, '1.应用自动更新及其意义 2.自动更新原理及所需知识 3.开发一个自动更新组件 4.测试我们的自动更新组件 5.组件化开发思想介绍 慕课网Android讨论群② 170368200', 2, '15911842062485acf37460001aa3405400300-360-202.jpg', 'http://localhost:8080/files/15911842062485acf37460001aa3405400300-360-202.jpg', '2020-06-03', '移动开发', 'iOS', 0);
INSERT INTO `gp_video_series` VALUES (43, 2, 'uni-app入门到实战 以项目为导向 掌握完整开发流程', 10, '跨端框架uni-app作为新起之秀，在不到两年的时间内，迅速被广大开发者青睐和推崇，得益于它颠覆性的优势，——“快”，快到可以节省7套代码。本课程由uni-app开发者团队成员亲授，带领大家无障碍快速掌握完整的uni-app跨端应用流程。并且搭配最佳的生态工具，HBuilderX和uniCloud，体验高效全栈开发。并且，讲师全程传授当下主流的开发概念——敏捷开发思路与技巧，带你时刻走在技术前沿。', 6, '15916697556835e98339809ac343012000676-360-202 (1).png', 'http://localhost:8080/files/15916697556835e98339809ac343012000676-360-202 (1).png', '2020-06-09', '移动开发', 'Android', 0);
INSERT INTO `gp_video_series` VALUES (44, 2, 'uni-app入门到实战 以项目为导向 掌握完整开发流程', 6, '跨端框架uni-app作为新起之秀，在不到两年的时间内，迅速被广大开发者青睐和推崇，得益于它颠覆性的优势，——“快”，快到可以节省7套代码。本课程由uni-app开发者团队成员亲授，带领大家无障碍快速掌握完整的uni-app跨端应用流程。并且搭配最佳的生态工具，HBuilderX和uniCloud，体验高效全栈开发。并且，讲师全程传授当下主流的开发概念——敏捷开发思路与技巧，带你时刻走在技术前沿。', 0, '15916697556835e98339809ac343012000676-360-202 (1).png', 'http://localhost:8080/files/15916697556835e98339809ac343012000676-360-202 (1).png', '2020-06-09', '移动开发', 'Android', 1);
INSERT INTO `gp_video_series` VALUES (45, 2, 'uni-app入门到实战 以项目为导向 掌握完整开发流程', 6, '跨端框架uni-app作为新起之秀，在不到两年的时间内，迅速被广大开发者青睐和推崇，得益于它颠覆性的优势，——“快”，快到可以节省7套代码。本课程由uni-app开发者团队成员亲授，带领大家无障碍快速掌握完整的uni-app跨端应用流程。并且搭配最佳的生态工具，HBuilderX和uniCloud，体验高效全栈开发。并且，讲师全程传授当下主流的开发概念——敏捷开发思路与技巧，带你时刻走在技术前沿。', 0, '15916697228335e98339809ac343012000676-360-202 (1).png', 'http://localhost:8080/files/15916697228335e98339809ac343012000676-360-202 (1).png', '2020-06-09', '移动开发', 'Android', 1);
INSERT INTO `gp_video_series` VALUES (46, 2, 'Docker+Kubernetes(k8s)微服务容器化实践', 10, '从整体上把握微服务，体会服务Docker化，理解服务编排，以及主流的服务编排框架——Kubernetes，了解它的架构，知道它的运作原理，知道如何安装、使用及如何部署微服务', 10, '15918633804615ab3a1240001e67910800600-360-202.jpg', 'http://localhost:8080/files/15918633804615ab3a1240001e67910800600-360-202.jpg', '2020-06-11', '前沿技术', '机器学习', 0);

SET FOREIGN_KEY_CHECKS = 1;
