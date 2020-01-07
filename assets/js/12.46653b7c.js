(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{222:function(t,r,v){"use strict";v.r(r);var _=v(0),e=Object(_.a)({},(function(){var t=this,r=t.$createElement,v=t._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("blockquote",[v("p",[t._v("专栏原创出处："),v("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/algorithm/computer-theory",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),v("OutboundLink")],1),t._v(" ，"),v("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-computer-theory",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),v("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),v("p",[t._v("计算机理论专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),v("a",{attrs:{href:"https://review-notes.top/algorithm/computer-theory",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机理论 "),v("OutboundLink")],1)]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#二进制数"}},[t._v("二进制数")]),v("ul",[v("li",[v("a",{attrs:{href:"#什么是二进制数"}},[t._v("什么是二进制数")])]),v("li",[v("a",{attrs:{href:"#位权与基数解释"}},[t._v("位权与基数解释")])])])]),v("li",[v("a",{attrs:{href:"#为什么用二进制表示计算机信息"}},[t._v("为什么用二进制表示计算机信息")])]),v("li",[v("a",{attrs:{href:"#二进制小数怎么表示"}},[t._v("二进制小数怎么表示")])]),v("li",[v("a",{attrs:{href:"#总结"}},[t._v("总结")])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"二进制数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二进制数"}},[t._v("#")]),t._v(" 二进制数")]),t._v(" "),v("p",[t._v("二进制是计算技术中广泛采用的一种数制。")]),t._v(" "),v("h3",{attrs:{id:"什么是二进制数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是二进制数"}},[t._v("#")]),t._v(" 什么是二进制数")]),t._v(" "),v("p",[t._v("二进制数据是用 0 和 1 两个数码来表示的数。它的基数为 2，进位规则是“逢二进一”，借位规则是“借一当二”。")]),t._v(" "),v("h3",{attrs:{id:"位权与基数解释"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#位权与基数解释"}},[t._v("#")]),t._v(" 位权与基数解释")]),t._v(" "),v("p",[t._v("以十进制数 39 为例： $39=3"),v("em",[t._v("10+9")]),t._v("1$ ，这里的 10 和 1 就是"),v("strong",[t._v("位权")]),t._v("。"),v("br"),t._v("\n数字的位数不同位权也不同，以十进制数为例，从最右边开始：")]),t._v(" "),v("ul",[v("li",[t._v("第一位是 $10^0$")]),t._v(" "),v("li",[t._v("第二位是 $10^1$")]),t._v(" "),v("li",[t._v("第三位是 $10^2$")]),t._v(" "),v("li",[t._v("第三位是 $10^3$")]),t._v(" "),v("li",[t._v("...")])]),t._v(" "),v("p",[t._v("可以看到，每次都是在前一个位权数据的基础上乘以 10 ，这里 10 就是"),v("strong",[t._v("基数")]),t._v("。")]),t._v(" "),v("p",[t._v("求和的计算过程为：$39=3"),v("em",[t._v("10^1+9")]),t._v("10^0$"),v("br"),t._v("\n抽象的描述为：进制数结果 = 构成数值的各数位的数值 * 位权后，再相加的结果")]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("以二进制角度来看："),v("br"),t._v("\n$00100111=0"),v("em",[t._v("2^7+0")]),t._v("2^6+1"),v("em",[t._v("2^5+0")]),t._v("2^4+0"),v("em",[t._v("2^3+1")]),t._v("2^2+1"),v("em",[t._v("2^1+1")]),t._v("2^0 = 39$"),v("br"),t._v("\n所以二进制的基数为 2 ，位权为 $2^N$(N=位数-1)")]),t._v(" "),v("h2",{attrs:{id:"为什么用二进制表示计算机信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么用二进制表示计算机信息"}},[t._v("#")]),t._v(" 为什么用二进制表示计算机信息")]),t._v(" "),v("p",[t._v("计算机内部使用 IC（集成电路） 电子部件构成，引脚在 IC 内部并排排列，一个引脚只能表示两个状态（电压），因此决定了计算机的信息数据只能用二进制来处理。\n由于 1 位（1 个引脚）只能表示两个状态，所以计算机处理信息的最小单位就是位，相当于二进制中的一位。")]),t._v(" "),v("p",[t._v("二进制的位数一般是 8、16、32...也就是 8 的位数，因为计算机所处理的信息的基本单位是 8 位二进制数，1 字节=8 位二进制数。\n用字节处理数据时，如果数字小于存储的字节数（二进制位数），高位补 0.")]),t._v(" "),v("h2",{attrs:{id:"二进制小数怎么表示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二进制小数怎么表示"}},[t._v("#")]),t._v(" 二进制小数怎么表示")]),t._v(" "),v("p",[t._v("TODO 待整理")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("ul",[v("li",[t._v("字节是最基本的信息计量单位")]),t._v(" "),v("li",[t._v("位是最小单位")]),t._v(" "),v("li",[t._v("1 字节=8 位二进制数")]),t._v(" "),v("li",[t._v("数字小于字节数，高位补 0")])])])}),[],!1,null,null,null);r.default=e.exports}}]);