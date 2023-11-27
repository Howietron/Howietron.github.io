(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{633:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"不同托管站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同托管站"}},[s._v("#")]),s._v(" 不同托管站")]),s._v(" "),t("p",[s._v("日常开发过程中，我们的git交互可能有公司内部的gitlab以及公共的github，这个时候两边推送使用的用户以及邮箱可能不一样，因此不能用同一份配置来推送，本文说一下解决方案。")]),s._v(" "),t("p",[s._v("解决方案网上有好几种，这里记录一种配置相对简单的方式，就是利用配置文件的"),t("code",[s._v("includeIf")]),s._v("参数。")]),s._v(" "),t("p",[s._v("添加如下配置到 "),t("code",[s._v("~/.gitconfig")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.gitconfig\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("includeIf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitdir:/Users/liqilong/eryajf/github/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ~/.gitconfig_github\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("includeIf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitdir:/Users/liqilong/eryajf/gitlab/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ~/.gitconfig_gitlab\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("includeIf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitdir:/Users/liqilong/eryajf/letsgo/project/src/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ~/.gitconfig_gitlab\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("注意路径结尾要以 "),t("code",[s._v("/")]),s._v("结尾，表示此目录下所有项目应用下边path指定的配置文件。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://t.eryajf.net/imgs/2022/02/6b7eea290b476d8e.jpeg",alt:""}})]),s._v(" "),t("p",[s._v("然后再定义两个path对应的配置文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.gitconfig_gitlab\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\tname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 李启龙\n\temail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" liql@eryajf.net\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filter "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lfs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\tsmudge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs smudge -- %f\n\tprocess "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs filter-process\n\trequired "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\tclean "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs clean -- %f\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("另外一个：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .gitconfig_github\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\tname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" eryajf\n\temail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Linuxlql@163.com\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filter "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lfs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\tsmudge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs smudge -- %f\n\tprocess "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs filter-process\n\trequired "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\tclean "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs clean -- %f\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("然后分别在两个目录中创建项目进行测试，发现推送的用户就变成对应定义的了。")]),s._v(" "),t("h2",{attrs:{id:"相同托管站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相同托管站"}},[s._v("#")]),s._v(" 相同托管站")]),s._v(" "),t("p",[s._v("上边举的例子是在不同代码托管站的多配置维护方案，还有一种情况是，如果我们在GitHub有多个账号，此时怎样维护才更加省心一些呢。")]),s._v(" "),t("p",[s._v("有的同学可能想到用户名和邮箱可以套上边的方式进行配置，的确可以，但是有一个问题绕不过去，那就是在GitHub中，"),t("code",[s._v("同一个秘钥不能添加到不同用户账号中，")]),s._v("鉴于这种情况，就必须要给不同账号配置不同的秘钥对了。")]),s._v(" "),t("p",[s._v("网上很多地方给的方案建议修改 "),t("code",[s._v("~/.ssh/config")]),s._v(" 来指定不同的秘钥，但交互的时候还需要手动修改一些内容，其实也麻烦，接下来这里介绍一种相对省心的方案。")]),s._v(" "),t("p",[s._v("假如我有两个GitHub账号：eryajf和lql95。")]),s._v(" "),t("p",[s._v("然后在本地电脑有两对秘钥：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n$ ssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github-liql"')]),s._v("\n$ ssh-keygen "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github-eryajf"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("把公钥添加到账号的setting中这个就不介绍了，主要说一下本地的配置信息。")]),s._v(" "),t("p",[s._v("定义如下内容在 "),t("code",[s._v("~/.gitconfig")]),s._v(" 文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.gitconfig\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("includeIf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitdir:/Users/liqilong/eryajf/github-lql95/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ~/.gitconfig_github_lql95\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("includeIf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gitdir:/Users/liqilong/eryajf/github-eryajf/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ~/.gitconfig_github_eryajf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("然后再定义两个path对应的配置文件：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.gitconfig_gitlab_lql95\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\tname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" lql95\n\temail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" eryajf@gmail.com\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filter "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lfs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\tsmudge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs smudge -- %f\n\tprocess "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs filter-process\n\trequired "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\tclean "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs clean -- %f\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("core"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  sshCommand "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssh -i ~/.ssh/github-liql"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("另外一个：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .gitconfig_github_eryajf\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\tname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" eryajf\n\temail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Linuxlql@163.com\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filter "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lfs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\tsmudge "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs smudge -- %f\n\tprocess "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs filter-process\n\trequired "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\tclean "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" git-lfs clean -- %f\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("core"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  sshCommand "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssh -i ~/.ssh/github-eryajf"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("就是通过添加 "),t("code",[s._v("sshCommand")]),s._v(" 实现不同配置中采用不同的秘钥，实测这种方案是最优雅好用的！")]),s._v(" "),t("ul",[t("li",[s._v("参考：\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://github-wiki-see.page/m/someoneHere/blog/wiki/git-config%E5%A4%9A%E7%94%A8%E6%88%B7%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("git config多用户配置"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://superuser.com/questions/232373/how-to-tell-git-which-private-key-to-use",target:"_blank",rel:"noopener noreferrer"}},[s._v("How to tell git which private key to use?"),t("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);