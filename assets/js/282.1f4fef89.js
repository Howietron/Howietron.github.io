(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{613:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"表与表之间关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表与表之间关系"}},[s._v("#")]),s._v(" 表与表之间关系")]),s._v(" "),n("p",[s._v("可以在数据库图表中的表之间创建关系，以显示一个表中的列与另一个表中的列是如何相链接的。")]),s._v(" "),n("p",[s._v("在一个关系型数据库中，利用关系可以避免多余的数据。")]),s._v(" "),n("h2",{attrs:{id:"表与表之间关系概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表与表之间关系概述"}},[s._v("#")]),s._v(" 表与表之间关系概述")]),s._v(" "),n("h3",{attrs:{id:"什么是表与表之间关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是表与表之间关系"}},[s._v("#")]),s._v(" 什么是表与表之间关系")]),s._v(" "),n("p",[s._v("在关系型数据库中，为了避免数据冗余，我们的一些表与表之间肯定是有一定的关系。")]),s._v(" "),n("p",[s._v("如：学生表与老师表，部门表与员工表，用户表与权限表等。")]),s._v(" "),n("p",[s._v("在表设计的时候，就应该体现出来表与表之间的这种关系。")]),s._v(" "),n("h3",{attrs:{id:"表与表之间关系分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表与表之间关系分类"}},[s._v("#")]),s._v(" 表与表之间关系分类")]),s._v(" "),n("h4",{attrs:{id:"一对多关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一对多关系"}},[s._v("#")]),s._v(" 一对多关系")]),s._v(" "),n("p",[s._v("一对多关系是最普通的一种关系。在这种关系中，A 表中的一行可以匹配 B 表中的多行，但是 B 表中的一行只能匹配 A 表中的一行。")]),s._v(" "),n("p",[s._v("只有当一个相关列是一个主键或具有唯一约束时，才能创建一对多关系。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.zutuanxue.com:8000/static/media/images/2020/10/21/1603241036981.png",alt:"image20200215112949021.png"}})]),s._v(" "),n("p",[n("strong",[s._v("注意：")])]),s._v(" "),n("p",[s._v("一对多的创建原则：")]),s._v(" "),n("p",[s._v("主外键关连")]),s._v(" "),n("h4",{attrs:{id:"一对一关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一对一关系"}},[s._v("#")]),s._v(" 一对一关系")]),s._v(" "),n("p",[s._v("在一对一关系中，A 表中的一行最多只能匹配于 B 表中的一行，反之亦然。如果相关列都是主键或都具有唯一约束，则可以创建一对一关系。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.zutuanxue.com:8000/static/media/images/2020/10/21/1603241052871.png",alt:"image20200215122050731.png"}})]),s._v(" "),n("p",[n("strong",[s._v("注意：")])]),s._v(" "),n("p",[s._v("一对一的创建原则：")]),s._v(" "),n("p",[s._v("外键唯一：主表的主键和从表的外键（唯一），形成主外键关系，外键唯一 UNIQUE")]),s._v(" "),n("p",[s._v("外键是主键：主表的主键和从表的主键，形成主外键关系")]),s._v(" "),n("h4",{attrs:{id:"多对多关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多对多关系"}},[s._v("#")]),s._v(" 多对多关系")]),s._v(" "),n("p",[s._v("在多对多关系中，A 表中的一行可以匹配 B 表中的多行，反之亦然。要创建这种关系，需要定义第三个表，称为结合表，它的主键由 A 表和 B 表的外部键组成。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.zutuanxue.com:8000/static/media/images/2020/10/21/1603241065129.png",alt:"image20200215121200999.png"}})]),s._v(" "),n("p",[n("strong",[s._v("注意：")])]),s._v(" "),n("p",[s._v("多对多的创建原则：")]),s._v(" "),n("p",[s._v("二个表与中间表创建1对多的关系。")]),s._v(" "),n("h2",{attrs:{id:"一对多应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一对多应用"}},[s._v("#")]),s._v(" 一对多应用")]),s._v(" "),n("p",[s._v("创建一对多关系：主外键关连")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.zutuanxue.com:8000/static/media/images/2020/10/21/1603241079269.png",alt:"image20200215123556759.png"}})]),s._v(" "),n("p",[s._v("新华出版社（Python爬虫、Linux）")]),s._v(" "),n("p",[s._v("海燕出版社（操作系统、数学）")]),s._v(" "),n("p",[s._v("摆渡出版社（英语、网页设计）")]),s._v(" "),n("p",[s._v("大众出版社（）")]),s._v(" "),n("p",[n("strong",[s._v("案例：")])]),s._v(" "),n("p",[s._v("这是一个书和出版社的一个例子，书要关联出版社（多个书可以是一个出版社，一个出版社也可以有好多书）。")]),s._v(" "),n("p",[s._v("表的创建")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#出版社表（被关联表）\ncreate table press(\nid int primary key auto_increment, \nname char(20)-- 出版社名字\n);\n\n#书表（关联表）\ncreate table book(\nbook_id int primary key auto_increment,\nbook_name varchar(20),\nbook_price int,\npress_id int,\nconstraint fk_pressid_id foreign key(press_id) references press(id)\non delete cascade\non update cascade\n);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("插入数据")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> insert into press(name) values('新华出版社'), ('海燕出版社'), ('摆渡出版社'), ('大众出版社');\nQuery OK, 4 rows affected (0.09 秒)\n\nmysql> insert into book(book_name,book_price,press_id) values('Python爬虫',100,1), ('Linux',80,1), ('操作系统',70,2), ('数学',50,2), ('英语',103,3), ('网页设计',22,3);\nQuery OK, 6 rows affected (0.07 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("查看数据")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from press;\n+----+-----------------+\n| id | name            |\n+----+-----------------+\n| 1  | 新华出版社 |\n| 2  | 海燕出版社 |\n| 3  | 摆渡出版社 |\n| 4  | 大众出版社 |\n+----+-----------------+\n4 行于数据集 (0.01 秒)\n\nmysql> select * from book;\n+---------+--------------+------------+----------+\n| book_id | book_name    | book_price | press_id |\n+---------+--------------+------------+----------+\n| 1       | Python爬虫 | 100        | 1        |\n| 2       | Linux        | 80         | 1        |\n| 3       | 操作系统 | 70         | 2        |\n| 4       | 数学       | 50         | 2        |\n| 5       | 英语       | 103        | 3        |\n| 6       | 网页设计 | 22         | 3        |\n+---------+--------------+------------+----------+\n6 行于数据集 (0.01 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"一对一应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一对一应用"}},[s._v("#")]),s._v(" 一对一应用")]),s._v(" "),n("p",[s._v("创建一对一：外键唯一，user_id唯一对应一个uid，user_id必须在uid里出现")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.zutuanxue.com:8000/static/media/images/2020/10/21/1603241161787.png",alt:"image20200215164955805.png"}})]),s._v(" "),n("p",[n("strong",[s._v("案例：")])]),s._v(" "),n("p",[s._v("用户和管理员（只有管理员才可以登录，一个管理员对应一个用户）")]),s._v(" "),n("p",[s._v("表创建")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#用户表（被关联表）\ncreate table user(\nid int primary key auto_increment, #主键自增\nname char(10)\n);\n\n#管理员表（关联表）\ncreate table manager(\nid int primary key auto_increment,\nuser_id int unique,\npassword varchar(16),\nforeign key(user_id) references user(id)\non delete cascade\non update cascade\n);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("插入数据")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> insert into user(name)values('susan1'),('susan2'),('susan3'),('susan4'),('susan5'),('susan6');\nQuery OK, 6 rows affected (0.02 秒)\n\nmysql> insert into manager(user_id,password) values(4,'sds156'),(2,'531561'),(6,'f3swe');\nQuery OK, 3 rows affected (0.03 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("查看数据")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from user;\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | susan1 |\n| 2  | susan2 |\n| 3  | susan3 |\n| 4  | susan4 |\n| 5  | susan5 |\n| 6  | susan6 |\n+----+--------+\n6 行于数据集 (0.01 秒)\n\nmysql> select * from manager;\n+----+---------+----------+\n| id | user_id | password |\n+----+---------+----------+\n| 1  | 4       | sds156   |\n| 2  | 2       | 531561   |\n| 3  | 6       | f3swe    |\n+----+---------+----------+\n3 行于数据集 (0.01 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h2",{attrs:{id:"多对多应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多对多应用"}},[s._v("#")]),s._v(" 多对多应用")]),s._v(" "),n("p",[s._v("创建多对多：要把book_id和author_id设置成联合唯一")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://www.zutuanxue.com:8000/static/media/images/2020/10/21/1603241222140.png",alt:"image20200215161523092.png"}})]),s._v(" "),n("p",[s._v("九阳神功（egon、e3）")]),s._v(" "),n("p",[s._v("葵花宝典（egon、e4）")]),s._v(" "),n("p",[s._v("辟邪剑谱（e1、e2、e3）")]),s._v(" "),n("p",[s._v("降龙十巴掌（e4）")]),s._v(" "),n("p",[n("strong",[s._v("或者")])]),s._v(" "),n("p",[s._v("egon（九阳神功、葵花宝典）")]),s._v(" "),n("p",[s._v("e1（辟邪剑谱）")]),s._v(" "),n("p",[s._v("e2（辟邪剑谱）")]),s._v(" "),n("p",[s._v("e3（九阳神功、辟邪剑谱）")]),s._v(" "),n("p",[s._v("e4（葵花宝典、降龙十巴掌）")]),s._v(" "),n("p",[n("strong",[s._v("案例：")])]),s._v(" "),n("p",[s._v("这是一个书和作者的一个例子，书要关联作者（一个作者可以写多个书，一本书也可以有多个作者，双向的一对多，即多对多）。")]),s._v(" "),n("p",[s._v("表创建")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#书表（被关联表）\ncreate table book1(\nid int primary key auto_increment,\nname varchar(10),\nprice float(3,2)\n);\n\n#作者表（被关联表）\ncreate table author(\nid int primary key auto_increment,\nname char(5)\n);\n\n#作者和书表（关联表）\ncreate table author2book(\nid int primary key auto_increment,\nbook_id int not null,\nauthor_id int not null,\nunique(book_id,author_id),\nforeign key(book_id) references book1(id)\non delete cascade\non update cascade,\nforeign key(author_id) references author(id)\non delete cascade\non update cascade\n);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[s._v("插入数据")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> insert into book1(name,price) values('九阳神功',9.9), ('葵花宝典',9.5), ('辟邪剑谱',5),  ('降龙十巴掌',7.3);\nQuery OK, 4 rows affected (0.09 秒)\n\nmysql> insert into author(name) values('egon'),('e1'),('e2'),('e3'),('e4');\nQuery OK, 5 rows affected (0.07 秒)\n\nmysql> insert into author2book(book_id,author_id) values(1,1),(1,4),(2,1),(2,5),(3,2),(3,3),(3,4),(4,5);\nQuery OK, 8 rows affected (0.03 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("查看数据")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> select * from book1;\n+----+-----------------+-------+\n| id | name            | price |\n+----+-----------------+-------+\n| 1  | 九阳神功    | 9.90  |\n| 2  | 葵花宝典    | 9.50  |\n| 3  | 辟邪剑谱    | 5.00  |\n| 4  | 降龙十巴掌 | 7.30  |\n+----+-----------------+-------+\n4 行于数据集 (0.02 秒)\n\nmysql> select * from author;\n+----+------+\n| id | name |\n+----+------+\n| 1  | egon |\n| 2  | e1   |\n| 3  | e2   |\n| 4  | e3   |\n| 5  | e4   |\n+----+------+\n5 行于数据集 (0.01 秒)\n\nmysql> select * from author2book;\n+----+---------+-----------+\n| id | book_id | author_id |\n+----+---------+-----------+\n| 1  | 1       | 1         |\n| 2  | 1       | 4         |\n| 3  | 2       | 1         |\n| 4  | 2       | 5         |\n| 5  | 3       | 2         |\n| 6  | 3       | 3         |\n| 7  | 3       | 4         |\n| 8  | 4       | 5         |\n+----+---------+-----------+\n8 行于数据集 (0.01 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);