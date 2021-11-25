DROP DATABASE IF EXISTS appedal_db; 

CREATE DATABASE appedal_db character set utf8;

USE appedal_db;

CREATE TABLE categoriausers (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    categoria VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=4;
    
LOCK TABLES categoriausers WRITE;

INSERT INTO categoriausers VALUES
(1,'comprador'),
(2,'vendedor'),
(3,'mecánico');

UNLOCK TABLES;

CREATE TABLE categoriaproducts (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    categoria VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=4;
    
LOCK TABLES categoriaproducts WRITE;

INSERT INTO categoriaproducts VALUES
(1,'repuesto'),
(2,'accesorio'),
(3,'indumentaria');

UNLOCK TABLES;

CREATE TABLE users (
    id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    birth_date DATETIME NULL,
    city VARCHAR(50) NOT NULL,
    adress VARCHAR(50) NOT NULL,
    phone INT(10) NOT NULL,
    avatar VARCHAR(100) DEFAULT "/imgUsuarios/defaultUser.png",
    pass VARCHAR(20) NOT NULL,
    categoriausers_id INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (categoriausers_id) REFERENCES categoriausers(id)
    ) ENGINE=InnoDB AUTO_INCREMENT=20;

LOCK TABLES users WRITE;

INSERT INTO users VALUES
 (1, 'kmccrann0', 'Kirsteni', 'McCrann', 'kmccrann0@odnoklassniki.ru', '1/29/1956', 'Haoguantun', '03 Superior Parkway', '+86 144 677 3932', 'defaultUser.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (2, 'femm1', 'Florian', 'Emm', 'femm1@blogs.com', '9/4/1962', 'San Narciso', '54601 Straubel Pass', '+63 833 636 5140', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (3, 'tschutte2', 'Tierney', 'Schutte', 'tschutte2@youtu.be', '2/18/2006', 'Laslovo', '90354 Shasta Parkway', '+385 796 257 6587', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (4, 'ldymoke3', 'Laurette', 'Dymoke', 'ldymoke3@goo.gl', '3/22/2020', 'Sedatigede', '97 Division Trail', '+62 748 871 1049', 'defaultUser.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (5, 'flanphere4', 'Fanchon', 'Lanphere', 'flanphere4@kickstarter.com', '9/13/1961', 'Salinungan Proper', '34 Heath Pass', '+63 921 966 0041', 'defaultUser.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 1),
 (6, 'okynge5', 'Oswell', 'Kynge', 'okynge5@whitehouse.gov', '6/15/2017', 'Shejiang', '8660 Clove Avenue', '+86 338 952 2971', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 1),
 (7, 'mknocker6', 'Marty', 'Knocker', 'mknocker6@microsoft.com', '3/11/1964', 'Gegu', '85967 Colorado Circle', '+86 452 476 4449', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 2),
 (8, 'scatto7', 'Sada', 'Catto', 'scatto7@howstuffworks.com', '9/27/2010', 'Nouakchott', '92 Walton Parkway', '+222 651 304 3220', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (9, 'alineham8', 'Anselm', 'Lineham', 'alineham8@cbc.ca', '10/28/1999', 'Dipayal', '483 Mandrake Street', '+977 796 614 5439', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (10, 'agierardi9', 'Agatha', 'Gierardi', 'agierardi9@hc360.com', '6/26/1954', 'Krajan Dua Patempuran', '74 Dennis Place', '+62 554 682 5253', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 1),
 (11, 'lrositaa', 'Lenore', 'Rosita', 'lrositaa@rakuten.co.jp', '5/7/1999', 'Vasyshcheve', '71481 Upham Park', '+380 698 370 9454', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (12, 'ifermerb', 'Isaac', 'Fermer', 'ifermerb@sina.com.cn', '5/27/2009', 'Lafayette', '8 Mosinee Street', '+1 337 437 6528', 'defaultUser.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 2),
 (13, 'jchiddyc', 'Jenica', 'Chiddy', 'jchiddyc@bigcartel.com', '1/25/2005', 'Sassandra', '4 Crownhardt Park', '+225 926 919 3716', 'defaultUser.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 1),
 (14, 'gcockramd', 'Gonzales', 'Cockram', 'gcockramd@newsvine.com', '3/6/1978', 'Masindi', '02 Dawn Alley', '+256 195 206 8072', 'defaultUser.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (15, 'scallistere', 'Siegfried', 'Callister', 'scallistere@cafepress.com', '5/30/1979', 'Barrie', '0463 Westend Place', '+1 155 514 1372', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (16, 'lharsf', 'Liz', 'Hars', 'lharsf@blinklist.com', '11/1/1965', 'Bakadagy', '41518 Trailsway Trail', '+220 625 192 2310', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 2),
 (17, 'rgutowskag', 'Rowney', 'Gutowska', 'rgutowskag@g.co', '3/12/1999', 'Sokolniki', '351 Corscot Lane', '+48 777 271 7833', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (18, 'gphillippsh', 'Gretna', 'Phillipps', 'gphillippsh@1688.com', '4/10/2017', 'Encañada', '68978 Sutherland Avenue', '+51 547 366 8601', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 1),
 (19, 'bscandricki', 'Boote', 'Scandrick', 'bscandricki@cisco.com', '3/23/1972', 'Västra Frölunda', '638 Packers Park', '+46 497 733 0043', 'defaultUser2.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 3),
 (20, 'ibraybrooksj', 'Illa', 'Braybrooks', 'ibraybrooksj@quantcast.com', '5/20/1991', 'Shangjiangxu', '146 Tony Center', '+86 268 862 0180', 'defaultUser.png', 'fc6bb3e779f0d306f300911217bd542e762cbcb0', 1);

UNLOCK TABLES;

CREATE TABLE products (
    id INT(10) NOT NULL AUTO_INCREMENT,
    user_id INT(10) UNSIGNED NOT NULL,
    producto VARCHAR(50) NOT NULL,
    proveedor VARCHAR(50) NOT NULL,
    vendido TINYINT NOT NULL,
    precio DECIMAL NOT NULL,
    imagen VARCHAR(100) DEFAULT "/imgProductos/defaultProduct.png",
    categoriaproducts_id INT(10) UNSIGNED NOT NULL,
    descripcion TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (categoriaproducts_id) REFERENCES categoriaproducts(id)
    ) ENGINE=InnoDB AUTO_INCREMENT=25;

LOCK TABLES products WRITE;

INSERT INTO products VALUES
 (1, 17, 'POLMYATE', 'Hayes Inc', 0, 1571,'defaultProduct.png', 3, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'),
 (2, 6, 'Colgate', 'Kautzer-Romaguera', 0, 1084,'defaultProduct.png', 3, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.'),
 (3, 14, 'Good Sense Cold', 'Schoen-Kshlerin', 1, 7193,'defaultProduct.png', 3, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.'),
 (4, 11, 'Levetietam', 'Roberts-Hayes', 1, 1150,'defaultProduct.png', 3, 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.'),
 (5, 5, 'Amitriride', 'Toy-Dibbert', 0, 2708,'defaultProduct.png', 3, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.'),
 (6, 19, 'Bayberry', 'Stamm, Jacobs and Zboncak', 1, 5094,'defaultProduct.png', 3, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.'),
 (7, 8, 'Eve Lom', 'Jenkins-Hand', 0, 9391,'defaultProduct.png', 1, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.'),
 (8, 7, 'ASPERGATUS', 'Cummerata LLC', 1, 5920,'defaultProduct.png', 3, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.'),
 (9, 13, 'Clopine', 'O''Kon-Blanda', 0, 8567,'defaultProduct.png', 2, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.'),
 (10, 9, 'PAXIL', 'Barton and Sons', 1, 5466,'defaultProduct.png', 2, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.'),
 (11, 6, 'Glipide', 'Hessel Group', 0, 3932,'defaultProduct.png', 3, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.'),
 (12, 5, 'LANOXIN', 'Barrows, Stoltenberg and Prosacco', 1, 9035,'defaultProduct.png', 3, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.'),
 (13, 12, 'FLORIDE', 'Bahringer, Hayes and Marvin', 0, 7534,'defaultProduct.png', 3, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.'),
 (14, 11, 'Loraze', 'Wolff, Hilpert and Wiza', 0, 1127,'defaultProduct.png', 3, 'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.'),
 (15, 9, 'PravaSo', 'Gutkowski, Durgan and Walker', 0, 723,'defaultProduct.png', 2, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'),
 (16, 18, 'Walgreens Suns', 'Stroman-Emard', 1, 307,'defaultProduct.png', 1, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'),
 (17, 13, 'Sluggish ', 'Herzog LLC', 0, 4944,'defaultProduct.png', 2, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.'),
 (18, 20, 'OXECTA', 'MacGyver-Hodkiewicz', 1, 348,'defaultProduct.png', 3, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
 (19, 12, 'Perindop ', 'Reichert and Sons', 0, 7416,'defaultProduct.png', 2, 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.'),
 (20, 16, 'My Litony ansing', 'Kuhlman Inc', 1, 2992,'defaultProduct.png', 3, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'),
 (21, 10, 'Sprayology Ease', 'Schuppe Inc', 1, 3146,'defaultProduct.png', 2, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.'),
 (22, 3, 'AHC Special  Solution', 'Hackett Lindgren and Feil', 1, 1086,'defaultProduct.png', 2, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.'),
 (23, 4, 'METHYLPRELONE', 'Tremblay, Reinger and Nikolaus', 0, 6143,'defaultProduct.png', 1, 'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.'),
 (24, 15, 'Micona 3Pack', 'Hand and Sons', 1, 658.67,'defaultProduct.png', 2, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.'),
 (25, 1, 'SIMBRINZA', 'Leuschke Group', 0, 5583.19,'defaultProduct.png', 1, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.');

UNLOCK TABLES;

