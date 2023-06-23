(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{387:function(a,n,s){"use strict";s.r(n);var e=s(1),r=Object(e.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"maven的介绍与使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven的介绍与使用"}},[a._v("#")]),a._v(" "),n("strong",[a._v("maven的介绍与使用")])]),a._v(" "),n("p",[a._v("​")]),a._v(" "),n("p",[a._v("[TOC]")]),a._v(" "),n("h2",{attrs:{id:"maven的简单介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven的简单介绍"}},[a._v("#")]),a._v(" maven的简单介绍")]),a._v(" "),n("p",[a._v("​\t\tMaven是Apache下的项目管理工具，它由纯Java语言开发，可以帮助我们更方便的管理和构建Java项目。")]),a._v(" "),n("p",[a._v("​\t\tmaven的优点")]),a._v(" "),n("p",[a._v("​\t\t1、  jar包管理：")]),a._v(" "),n("p",[a._v("​\t\t\ta)   从Maven中央仓库获取标准的规范的jar包以及相关依赖的jar包，避免自己下载到错误的jar包；")]),a._v(" "),n("p",[a._v("​\t\t\tb)   本地仓库统一管理jar包，使jar包与项目分离，减轻项目体积。")]),a._v(" "),n("p",[a._v("​\t\t2、  maven是跨平台的可以在window、linux上使用。")]),a._v(" "),n("p",[a._v("​\t\t3、  清晰的项目结构；")]),a._v(" "),n("p",[a._v("​\t\t4、  多工程开发，将模块拆分成若干工程，利于团队协作开发。")]),a._v(" "),n("p",[a._v("​\t\t5、  一键构建项目：使用命令可以对项目进行一键构建。")]),a._v(" "),n("h2",{attrs:{id:"maven的安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven的安装"}},[a._v("#")]),a._v(" maven的安装")]),a._v(" "),n("p",[a._v("​\tmaven官网：https://maven.apache.org/")]),a._v(" "),n("p",[a._v("​\tmaven仓库：https://mvnrepository.com/")]),a._v(" "),n("p",[a._v("​\t"),n("strong",[a._v("安装步骤：")])]),a._v(" "),n("ol",[n("li",[a._v("安装jdk")]),a._v(" "),n("li",[a._v("从官网中下载对应的版本")]),a._v(" "),n("li",[a._v("解压安装，然后配置环境变量，需要配置MAVEN_HOME,并且将bin目录添加到path路径下'")]),a._v(" "),n("li",[a._v("在命令行中输入mvn -v,看到版本信息表示安装成功")])]),a._v(" "),n("h2",{attrs:{id:"maven的基本常识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven的基本常识"}},[a._v("#")]),a._v(" maven的基本常识")]),a._v(" "),n("h3",{attrs:{id:"maven如何获取jar包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven如何获取jar包"}},[a._v("#")]),a._v(" maven如何获取jar包")]),a._v(" "),n("p",[a._v("​\t\tmaven通过坐标的方式来获取 jar包，坐标组成为：公司/组织（groupId）+项目名（artifactId）+版本（version）组成，可以从互联网，本地等多种仓库源获取jar包")]),a._v(" "),n("h3",{attrs:{id:"maven仓库的分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven仓库的分类"}},[a._v("#")]),a._v(" maven仓库的分类")]),a._v(" "),n("p",[a._v("​\t\t本地仓库：本地仓库就是开发者本地已经下载下来的或者自己打包所有jar包的依赖仓库，本地仓库路径配置在maven对应的conf/settings.xml配置文件。")]),a._v(" "),n("h3",{attrs:{id:"设置本地仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置本地仓库"}},[a._v("#")]),a._v(" 设置本地仓库：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(" <localRepository>C:\\repmvn</localRepository>\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("​\t\t私有仓库：私有仓库可以理解为自己公司的仓库，也叫Nexus私服")]),a._v(" "),n("p",[a._v("​\t\t中央仓库：中央仓库即maven默认下载的仓库地址，是maven维护的")]),a._v(" "),n("h3",{attrs:{id:"maven的常用仓库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven的常用仓库"}},[a._v("#")]),a._v(" maven的常用仓库")]),a._v(" "),n("p",[a._v("​\t\t由于网络访问的原因，在国内如果需要下载国外jar包的时候会受限，因此一般在使用过程中需要修改maven的配置文件，将下载jar包的仓库地址修改为国内的源，常用的是阿里云的mvn仓库，修改配置如下：")]),a._v(" "),n("p",[a._v("maven目录/conf/setting.xml")]),a._v(" "),n("p",[n("strong",[a._v("设置镜像：")])]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("     <mirror>\n        <id>nexus-aliyun</id>\n        <name>Nexus aliyun</name>\n        <url>http://maven.aliyun.com/nexus/content/groups/public</url>\n        <mirrorOf>central</mirrorOf>\n    </mirror> \n    <mirror>\n        <id>central</id>\n        <name>Maven Repository Switchboard</name>\n        <url>http://repo.maven.org/maven2/</url>\n        <mirrorOf>central</mirrorOf>\n    </mirror>\n    <mirror>\n        <id>central</id>\n        <name>Maven Repository Switchboard</name>\n        <url>http://repo2.maven.org/maven2/</url>\n        <mirrorOf>central</mirrorOf>\n    </mirror>\n    \n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br")])]),n("p",[n("strong",[a._v("设置默认jdk版本：")])]),a._v(" "),n("p",[a._v("​                 "),a._v(" "),n("profile",[n("id",[a._v("jdk-1.8")]),a._v(" "),n("activation",[n("activeByDefault",[a._v("true")]),a._v(" "),n("jdk",[a._v("1.8")])],1),a._v(" "),n("properties",[a._v(" <maven.compiler.source>1.8</maven.compiler.source> <maven.compiler.target>1.8</maven.compiler.target> <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion> ")])],1)],1),a._v(" "),n("p",[n("strong",[a._v("4、maven常用命令")])]),a._v(" "),n("ul",[n("li",[a._v("clean：清理编译后的目录")]),a._v(" "),n("li",[a._v("compile：编译，只编译main目录，不编译test中的代码")]),a._v(" "),n("li",[a._v("test-compile：编译test目录下的代码")]),a._v(" "),n("li",[a._v("test：运行test中的代码")]),a._v(" "),n("li",[a._v("package：打包，将项目打包成jar包或者war包")]),a._v(" "),n("li",[a._v("install：发布项目到本地仓库，用在打jar包上，打成的jar包可以被其他项目使用")]),a._v(" "),n("li",[a._v("deploy：打包后将其安装到pom文件中配置的远程仓库")]),a._v(" "),n("li",[a._v("site：生成站点目录")])]),a._v(" "),n("p",[a._v("1.添加依赖")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("<dependencies>·\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-context</artifactId>\n        <version>5.2.6.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>junit</groupId>\n        <artifactId>junit</artifactId>\n        <version>4.12</version>\n        <scope>test</scope>\n    </dependency>\n\n</dependencies>\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])]),n("p",[a._v("2.配置xml")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">\n\n    <bean class="cn.tulingxueyuan.dao.UserOrcDao" id="userDao" ></bean>\n\n    <bean class="cn.tulingxueyuan.service.UserService" id="userService">\n        <property name="dao" ref="userDao"></property>\n    </bean>\n\n</beans>\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br")])]),n("p",[a._v("​")]),a._v(" "),n("p",[a._v("3.新建测试类")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('public class TestIoC {\n\n    @Test\n    public void test01(){\n        ApplicationContext ioc=new ClassPathXmlApplicationContext("spring.xml");\n\n        User bean = ioc.getBean(User.class);\n        System.out.println(bean);\n\n    }\n}\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br")])])])}),[],!1,null,null,null);n.default=r.exports}}]);