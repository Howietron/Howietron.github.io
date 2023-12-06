(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{605:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"dml语句"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dml语句"}},[s._v("#")]),s._v(" DML语句")]),s._v(" "),n("p",[s._v("数据操纵语言DML（Data Manipulation Language），用户通过它可以实现对数据库的基本操作。就是我们最经常用到的UPDATE、INSERT、DELETE。 主要用来对数据库的数据进行一些操作。")]),s._v(" "),n("h2",{attrs:{id:"表记录操作-上"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表记录操作-上"}},[s._v("#")]),s._v(" 表记录操作-上")]),s._v(" "),n("h3",{attrs:{id:"dml概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dml概述"}},[s._v("#")]),s._v(" DML概述")]),s._v(" "),n("p",[s._v("DML 操作是指对数据库中表记录的操作，主要包括表记录的插入（insert）、更新（update）和删除（delete），是开发人员日常使用最频繁的操作。")]),s._v(" "),n("h3",{attrs:{id:"插入记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插入记录"}},[s._v("#")]),s._v(" 插入记录")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式：\ninsert into 数据库表名 [字段名列表] values(字段值列表)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("说明：")])]),s._v(" "),n("p",[s._v("**insert into 数据库表名：**指定增加记录的表")]),s._v(" "),n("p",[s._v("**[字段名列表]：**表示要给那些字段加入字段值，没有，就为所有字段")]),s._v(" "),n("p",[s._v("**values（字段值列表）：**表示为对应的字段加入对应的字段值")]),s._v(" "),n("p",[n("strong",[s._v("为所有字段插入值")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式：\ninsert into 数据库表名(字段名1,字段名2...,字段名n)values(字段值1,字段值2...,字段值n);\n或\ninsert into 数据库表名 values(字段值1,字段值2...,字段值n);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("案例：")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#指定所有字段插入记录\nmysql> insert into student(id,sname,birthday)values(1,"林志颖","1974-10-18");\nQuery OK, 1 rows affected (0.03 秒)\n#不指定字段，默认所有字段插入记录\nmysql> insert into student values(2,"郭德纲","1973-01-18");\nQuery OK, 1 rows affected (0.01 秒)\n#查看数据库表中所有记录\nmysql> select * from student;\n+------+-----------+------------+\n| id   | sname     | birthday   |\n+------+-----------+------------+\n| 1    | 林志颖 | 1974-10-18 |\n| 2    | 郭德纲 | 1973-01-18 |\n+------+-----------+------------+\n2 行于数据集 (0.01 秒)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[n("strong",[s._v("插入部分字段值")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式：\ninsert into 数据库表名(字段名1,字段名2...)values(字段值1,字段值2...);\n#注意：没有给定字段的值，为null;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("案例：")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#插入部分字段值\nmysql> insert into student(id,sname)values(3,"柳岩");\nQuery OK, 1 rows affected (0.01 秒)\n#查看数据库表中所有记录\nmysql> select * from student;\n+------+-----------+------------+\n| id   | sname     | birthday   |\n+------+-----------+------------+\n| 1    | 林志颖 | 1974-10-18 |\n| 2    | 郭德纲 | 1973-01-18 |\n| 3    | 柳岩    | NULL       |\n+------+-----------+------------+\n3 行于数据集 (0.01 秒)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("strong",[s._v("注意：")])]),s._v(" "),n("p",[s._v("只插入部份字段值时，前面必须带字段名字。")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('mysql> insert into student values(4,"王宝强");\nColumn count doesn\'t match value count at row 1#列计数与第1行的值计数不匹配\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"表记录操作-下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#表记录操作-下"}},[s._v("#")]),s._v(" 表记录操作-下")]),s._v(" "),n("h3",{attrs:{id:"更新记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更新记录"}},[s._v("#")]),s._v(" 更新记录")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式：\nupdate 数据库表名 set 字段名1=字段值1,字段名2=字段值2...,字段名n=字段值n [where 条件表达式];\n#注意：更新的数据可以是0-N条记录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("strong",[s._v("说明：")])]),s._v(" "),n("p",[s._v("**update 数据库表名：**指定需要更新的数据库表")]),s._v(" "),n("p",[s._v("**set 字段名=字段值：**修改指定的数据库表中字段的值")]),s._v(" "),n("p",[s._v("**[where 条件表达式]：**修改满足条件的记录的字段值，可省略")]),s._v(" "),n("p",[n("strong",[s._v("不带条件记录更新")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式：\nupdate 数据库表名 set 字段名1=字段值1,字段名2=字段值2...,字段名n=字段值n;  #表示修改表中所有记录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("案例：")])]),s._v(" "),n("p",[s._v("加入一个性别（sex varchar(2)）字段，将sex的值都改为“男”")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#在student表中增加字段sex\nmysql> alter table student add sex varchar(2);\nQuery OK, 0 rows affected (0.24 秒)\n#查看表结构\nmysql> desc student;\n+----------+-------------+------+-----+---------+-------+\n| Field    | Type        | Null | Key | Default | Extra |\n+----------+-------------+------+-----+---------+-------+\n| id       | int(11)     | YES  |     | NULL    |       |\n| sname    | varchar(20) | YES  |     | NULL    |       |\n| birthday | date        | YES  |     | NULL    |       |\n| sex      | varchar(2)  | YES  |     | NULL    |       |\n+----------+-------------+------+-----+---------+-------+\n4 行于数据集 (0.01 秒)\n#修改student表中sex字段的值为'男'\nmysql> update student set sex='男';\nQuery OK, 3 rows affected (0.09 秒)\n#查看表中所有记录\nmysql> select * from student;\n+------+-----------+------------+------+\n| id   | sname     | birthday   | sex  |\n+------+-----------+------------+------+\n| 1    | 林志颖 | 1974-10-18 | 男  |\n| 2    | 郭德纲 | 1973-01-18 | 男  |\n| 3    | 柳岩    | NULL       | 男  |\n+------+-----------+------------+------+\n3 行于数据集 (0.01 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[n("strong",[s._v("带条件记录更新")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式：\nupdate 数据库表名 set 字段名1=字段值1,字段名2=字段值2...,字段名n=字段值n [where 条件表达式];   #表示修改表中满足条件的记录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("案例：")])]),s._v(" "),n("p",[s._v("修改id=3的记录，将sex改为’女’")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#修改id为3记录中的sex改为'女'\nmysql> update student set sex='女' where id=3;\nQuery OK, 1 rows affected (0.01 秒)\n#查看表中所有记录\nmysql> select * from student;\n+------+-----------+------------+------+\n| id   | sname     | birthday   | sex  |\n+------+-----------+------------+------+\n| 1    | 林志颖 | 1974-10-18 | 男  |\n| 2    | 郭德纲 | 1973-01-18 | 男  |\n| 3    | 柳岩    | NULL       | 女  |\n+------+-----------+------------+------+\n3 行于数据集 (0.01 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("修改id=3的记录，将sex改为’女’，birthday改为1980-11-08")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#修改id为3记录中的sex改为'女',birthday改为1980-11-08\nmysql> update student set sex='女',birthday='1980-11-08' where id=3;\nQuery OK, 1 rows affected (0.11 秒)\n#查看表中所有记录\nmysql> select * from student;\n+------+-----------+------------+------+\n| id   | sname     | birthday   | sex  |\n+------+-----------+------------+------+\n| 1    | 林志颖 | 1974-10-18 | 男  |\n| 2    | 郭德纲 | 1973-01-18 | 男  |\n| 3    | 柳岩    | 1980-11-08 | 女  |\n+------+-----------+------------+------+\n3 行于数据集 (0.01 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"删除记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除记录"}},[s._v("#")]),s._v(" 删除记录")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式：\ndelete from 数据库表名 [where 条件表达式];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("说明：")])]),s._v(" "),n("p",[s._v("**delete from 数据库表名：**指定删除记录的表")]),s._v(" "),n("p",[s._v("**[where 条件表达式]：**删除满足条件的记录的字段值，可省略")]),s._v(" "),n("p",[n("strong",[s._v("带条件删除记录")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式：\ndelete from 数据库表名 [where 条件表达式]; #删除满足条件的记录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("案例：")])]),s._v(" "),n("p",[s._v("删除id为1的记录")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#删除id=1的记录\nmysql> delete from student where id=1;\nQuery OK, 1 rows affected (0.08 秒)\n#查看所有记录\nmysql> select * from student;\n+------+-----------+------------+------+\n| id   | sname     | birthday   | sex  |\n+------+-----------+------------+------+\n| 2    | 郭德纲 | 1973-01-18 | 男  |\n| 3    | 柳岩    | 1980-11-08 | 女  |\n+------+-----------+------------+------+\n2 行于数据集 (0.02 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("strong",[s._v("不带条件删除记录")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式：\ndelete from 数据库表名;    #删除表中所有的记录\n或\ntruncate table 数据库表名;   #删除表中所有的记录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("案例：")])]),s._v(" "),n("p",[s._v("删除表中所有记录")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#删除所有记录\nmysql> delete from student;\nQuery OK, 2 rows affected (0.08 秒)\n#查看所有记录\nmysql> select * from student;\n空的数据集 (0.01 秒)\n#删除所有记录\nmysql> truncate table student;\nQuery OK, 0 rows affected (0.08 秒)\n#查看所有记录\nmysql> select * from student;\n空的数据集 (0.01 秒)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("strong",[s._v("注意：")])]),s._v(" "),n("p",[s._v("truncate删除的是表的结构，再创建一张表；delete删除的是表的记录；")])])}),[],!1,null,null,null);n.default=t.exports}}]);