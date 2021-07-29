(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{564:function(a,t,e){"use strict";e.r(t);var n=e(20),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"编程风格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编程风格"}},[a._v("#")]),a._v(" 编程风格")]),a._v(" "),e("p",[a._v("“编程风格”（programming style）指的是编写代码的样式规则。不同的程序员，往往有不同的编程风格。")]),a._v(" "),e("p",[a._v("有人说，编译器的规范叫做“语法规则”（grammar），这是程序员必须遵守的；而编译器忽略的部分，就叫“编程风格”（programming style），这是程序员可以自由选择的。这种说法不完全正确，程序员固然可以自由选择编程风格，但是好的编程风格有助于写出质量更高、错误更少、更易于维护的程序。")]),a._v(" "),e("p",[a._v("所以，编程风格的选择不应该基于个人爱好、熟悉程度、打字量等因素，而要考虑如何尽量使代码清晰易读、减少出错。你选择的，不是你喜欢的风格，而是一种能够清晰表达你的意图的风格。这一点，对于 JavaScript 这种语法自由度很高的语言尤其重要。")]),a._v(" "),e("p",[a._v("必须牢记的一点是，如果你选定了一种“编程风格”，就应该坚持遵守，切忌多种风格混用。如果你加入他人的项目，就应该遵守现有的风格。")]),a._v(" "),e("h2",{attrs:{id:"缩进"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缩进"}},[a._v("#")]),a._v(" 缩进")]),a._v(" "),e("p",[a._v("行首的空格和 Tab 键，都可以产生代码缩进效果（indent）。")]),a._v(" "),e("p",[a._v("Tab 键可以节省击键次数，但不同的文本编辑器对 Tab 的显示不尽相同，有的显示四个空格，有的显示两个空格，所以有人觉得，空格键可以使得显示效果更统一。")]),a._v(" "),e("p",[a._v("无论你选择哪一种方法，都是可以接受的，要做的就是始终坚持这一种选择。不要一会使用 Tab 键，一会使用空格键。")]),a._v(" "),e("h2",{attrs:{id:"区块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区块"}},[a._v("#")]),a._v(" 区块")]),a._v(" "),e("p",[a._v("如果循环和判断的代码体只有一行，JavaScript 允许该区块（block）省略大括号。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if (a)\n  b();\n  c();\n")])])]),e("p",[a._v("上面代码的原意可能是下面这样。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if (a) {\n  b();\n  c();\n}\n")])])]),e("p",[a._v("但是，实际效果却是下面这样。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if (a) {\n  b();\n}\n  c();\n")])])]),e("p",[a._v("因此，建议总是使用大括号表示区块。")]),a._v(" "),e("p",[a._v("另外，区块起首的大括号的位置，有许多不同的写法。最流行的有两种，一种是起首的大括号另起一行。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("block\n{\n  // ...\n}\n")])])]),e("p",[a._v("另一种是起首的大括号跟在关键字的后面。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("block {\n  // ...\n}\n")])])]),e("p",[a._v("一般来说，这两种写法都可以接受。但是，JavaScript 要使用后一种，因为 JavaScript 会自动添加句末的分号，导致一些难以察觉的错误。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("return\n{\n  key: value\n};\n\n// 相当于\nreturn;\n{\n  key: value\n};\n")])])]),e("p",[a._v("上面的代码的原意，是要返回一个对象，但实际上返回的是"),e("code",[a._v("undefined")]),a._v("，因为 JavaScript 自动在"),e("code",[a._v("return")]),a._v("语句后面添加了分号。为了避免这一类错误，需要写成下面这样。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("return {\n  key : value\n};\n")])])]),e("p",[a._v("因此，表示区块起首的大括号，不要另起一行。")]),a._v(" "),e("h2",{attrs:{id:"圆括号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#圆括号"}},[a._v("#")]),a._v(" 圆括号")]),a._v(" "),e("p",[a._v("圆括号（parentheses）在 JavaScript 中有两种作用，一种表示函数的调用，另一种表示表达式的组合（grouping）。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 圆括号表示函数的调用\nconsole.log('abc');\n\n// 圆括号表示表达式的组合\n(1 + 2) * 3\n")])])]),e("p",[a._v("建议可以用空格，区分这两种不同的括号。")]),a._v(" "),e("blockquote",[e("ol",[e("li",[a._v("表示函数调用时，函数名与左括号之间没有空格。")]),a._v(" "),e("li",[a._v("表示函数定义时，函数名与左括号之间没有空格。")]),a._v(" "),e("li",[a._v("其他情况时，前面位置的语法元素与左括号之间，都有一个空格。")])])]),a._v(" "),e("p",[a._v("按照上面的规则，下面的写法都是不规范的。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("foo (bar)\nreturn(a+b);\nif(a === 0) {...}\nfunction foo (b) {...}\nfunction(x) {...}\n")])])]),e("p",[a._v("上面代码的最后一行是一个匿名函数，"),e("code",[a._v("function")]),a._v("是语法关键字，不是函数名，所以与左括号之间应该要有一个空格。")]),a._v(" "),e("h2",{attrs:{id:"行尾的分号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#行尾的分号"}},[a._v("#")]),a._v(" 行尾的分号")]),a._v(" "),e("p",[a._v("分号表示一条语句的结束。JavaScript 允许省略行尾的分号。事实上，确实有一些开发者行尾从来不写分号。但是，由于下面要讨论的原因，建议还是不要省略这个分号。")]),a._v(" "),e("h3",{attrs:{id:"不使用分号的情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不使用分号的情况"}},[a._v("#")]),a._v(" 不使用分号的情况")]),a._v(" "),e("p",[a._v("首先，以下三种情况，语法规定本来就不需要在结尾添加分号。")]),a._v(" "),e("p",[e("strong",[a._v("（1）for 和 while 循环")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("for ( ; ; ) {\n} // 没有分号\n\nwhile (true) {\n} // 没有分号\n")])])]),e("p",[a._v("注意，"),e("code",[a._v("do...while")]),a._v("循环是有分号的。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("do {\n  a--;\n} while(a > 0); // 分号不能省略\n")])])]),e("p",[e("strong",[a._v("（2）分支语句：if，switch，try")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if (true) {\n} // 没有分号\n\nswitch () {\n} // 没有分号\n\ntry {\n} catch {\n} // 没有分号\n")])])]),e("p",[e("strong",[a._v("（3）函数的声明语句")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function f() {\n} // 没有分号\n")])])]),e("p",[a._v("注意，函数表达式仍然要使用分号。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var f = function f() {\n};\n")])])]),e("p",[a._v("以上三种情况，如果使用了分号，并不会出错。因为，解释引擎会把这个分号解释为空语句。")]),a._v(" "),e("h3",{attrs:{id:"分号的自动添加"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分号的自动添加"}},[a._v("#")]),a._v(" 分号的自动添加")]),a._v(" "),e("p",[a._v("除了上一节的三种情况，所有语句都应该使用分号。但是，如果没有使用分号，大多数情况下，JavaScript 会自动添加。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("var a = 1\n// 等同于\nvar a = 1;\n")])])]),e("p",[a._v("这种语法特性被称为“分号的自动添加”（Automatic Semicolon Insertion，简称 ASI）。")]),a._v(" "),e("p",[a._v("因此，有人提倡省略句尾的分号。麻烦的是，如果下一行的开始可以与本行的结尾连在一起解释，JavaScript 就不会自动添加分号。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 等同于 var a = 3\nvar\na\n=\n3\n\n// 等同于 'abc'.length\n'abc'\n.length\n\n// 等同于 return a + b;\nreturn a +\nb;\n\n// 等同于 obj.foo(arg1, arg2);\nobj.foo(arg1,\narg2);\n\n// 等同于 3 * 2 + 10 * (27 / 6)\n3 * 2\n+\n10 * (27 / 6)\n")])])]),e("p",[a._v("上面代码都会多行放在一起解释，不会每一行自动添加分号。这些例子还是比较容易看出来的，但是下面这个例子就不那么容易看出来了。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("x = y\n(function () {\n  // ...\n})();\n\n// 等同于\nx = y(function () {...})();\n")])])]),e("p",[a._v("下面是更多不会自动添加分号的例子。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// 引擎解释为 c(d+e)\nvar a = b + c\n(d+e).toString();\n\n// 引擎解释为 a = b/hi/g.exec(c).map(d)\n// 正则表达式的斜杠，会当作除法运算符\na = b\n/hi/g.exec(c).map(d);\n\n// 解释为'b'['red', 'green']，\n// 即把字符串当作一个数组，按索引取值\nvar a = 'b'\n['red', 'green'].forEach(function (c) {\n  console.log(c);\n})\n\n// 解释为 function (x) { return x }(a++)\n// 即调用匿名函数，结果f等于0\nvar a = 0;\nvar f = function (x) { return x }\n(a++)\n")])])]),e("p",[a._v("只有下一行的开始与本行的结尾，无法放在一起解释，JavaScript 引擎才会自动添加分号。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if (a < 0) a = 0\nconsole.log(a)\n\n// 等同于下面的代码，\n// 因为 0console 没有意义\nif (a < 0) a = 0;\nconsole.log(a)\n")])])]),e("p",[a._v("另外，如果一行的起首是“自增”（"),e("code",[a._v("++")]),a._v("）或“自减”（"),e("code",[a._v("--")]),a._v("）运算符，则它们的前面会自动添加分号。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("a = b = c = 1\n\na\n++\nb\n--\nc\n\nconsole.log(a, b, c)\n// 1 2 0\n")])])]),e("p",[a._v("上面代码之所以会得到"),e("code",[a._v("1 2 0")]),a._v("的结果，原因是自增和自减运算符前，自动加上了分号。上面的代码实际上等同于下面的形式。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("a = b = c = 1;\na;\n++b;\n--c;\n")])])]),e("p",[a._v("如果"),e("code",[a._v("continue")]),a._v("、"),e("code",[a._v("break")]),a._v("、"),e("code",[a._v("return")]),a._v("和"),e("code",[a._v("throw")]),a._v("这四个语句后面，直接跟换行符，则会自动添加分号。这意味着，如果"),e("code",[a._v("return")]),a._v("语句返回的是一个对象的字面量，起首的大括号一定要写在同一行，否则得不到预期结果。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("return\n{ first: 'Jane' };\n\n// 解释成\nreturn;\n{ first: 'Jane' };\n")])])]),e("p",[a._v("由于解释引擎自动添加分号的行为难以预测，因此编写代码的时候不应该省略行尾的分号。")]),a._v(" "),e("p",[a._v("不应该省略结尾的分号，还有一个原因。有些 JavaScript 代码压缩器（uglifier）不会自动添加分号，因此遇到没有分号的结尾，就会让代码保持原状，而不是压缩成一行，使得压缩无法得到最优的结果。")]),a._v(" "),e("p",[a._v("另外，不写结尾的分号，可能会导致脚本合并出错。所以，有的代码库在第一行语句开始前，会加上一个分号。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(";var a = 1;\n// ...\n")])])]),e("p",[a._v("上面这种写法就可以避免与其他脚本合并时，排在前面的脚本最后一行语句没有分号，导致运行出错的问题。")]),a._v(" "),e("h2",{attrs:{id:"全局变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局变量"}},[a._v("#")]),a._v(" 全局变量")]),a._v(" "),e("p",[a._v("JavaScript 最大的语法缺点，可能就是全局变量对于任何一个代码块，都是可读可写。这对代码的模块化和重复使用，非常不利。")]),a._v(" "),e("p",[a._v("因此，建议避免使用全局变量。如果不得不使用，可以考虑用大写字母表示变量名，这样更容易看出这是全局变量，比如"),e("code",[a._v("UPPER_CASE")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"变量声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量声明"}},[a._v("#")]),a._v(" 变量声明")]),a._v(" "),e("p",[a._v("JavaScript 会自动将变量声明“提升”（hoist）到代码块（block）的头部。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if (!x) {\n  var x = {};\n}\n\n// 等同于\nvar x;\nif (!x) {\n  x = {};\n}\n")])])]),e("p",[a._v("这意味着，变量"),e("code",[a._v("x")]),a._v("是"),e("code",[a._v("if")]),a._v("代码块之前就存在了。为了避免可能出现的问题，最好把变量声明都放在代码块的头部。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("for (var i = 0; i < 10; i++) {\n  // ...\n}\n\n// 写成\nvar i;\nfor (i = 0; i < 10; i++) {\n  // ...\n}\n")])])]),e("p",[a._v("上面这样的写法，就容易看出存在一个全局的循环变量"),e("code",[a._v("i")]),a._v("。")]),a._v(" "),e("p",[a._v("另外，所有函数都应该在使用之前定义。函数内部的变量声明，都应该放在函数的头部。")]),a._v(" "),e("h2",{attrs:{id:"with-语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#with-语句"}},[a._v("#")]),a._v(" with 语句")]),a._v(" "),e("p",[e("code",[a._v("with")]),a._v("可以减少代码的书写，但是会造成混淆。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("with (o) {\n　foo = bar;\n}\n")])])]),e("p",[a._v("上面的代码，可以有四种运行结果：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("o.foo = bar;\no.foo = o.bar;\nfoo = bar;\nfoo = o.bar;\n")])])]),e("p",[a._v("这四种结果都可能发生，取决于不同的变量是否有定义。因此，不要使用"),e("code",[a._v("with")]),a._v("语句。")]),a._v(" "),e("h2",{attrs:{id:"相等和严格相等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相等和严格相等"}},[a._v("#")]),a._v(" 相等和严格相等")]),a._v(" "),e("p",[a._v("JavaScript 有两个表示相等的运算符：“相等”（"),e("code",[a._v("==")]),a._v("）和“严格相等”（"),e("code",[a._v("===")]),a._v("）。")]),a._v(" "),e("p",[a._v("相等运算符会自动转换变量类型，造成很多意想不到的情况。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("0 == ''// true\n1 == true // true\n2 == true // false\n0 == '0' // true\nfalse == 'false' // false\nfalse == '0' // true\n' \\t\\r\\n ' == 0 // true\n")])])]),e("p",[a._v("因此，建议不要使用相等运算符（"),e("code",[a._v("==")]),a._v("），只使用严格相等运算符（"),e("code",[a._v("===")]),a._v("）。")]),a._v(" "),e("h2",{attrs:{id:"语句的合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语句的合并"}},[a._v("#")]),a._v(" 语句的合并")]),a._v(" "),e("p",[a._v("有些程序员追求简洁，喜欢合并不同目的的语句。比如，原来的语句是")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("a = b;\nif (a) {\n  // ...\n}\n")])])]),e("p",[a._v("他喜欢写成下面这样。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if (a = b) {\n  // ...\n}\n")])])]),e("p",[a._v("虽然语句少了一行，但是可读性大打折扣，而且会造成误读，让别人误解这行代码的意思是下面这样。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("if （a === b）{\n  // ...\n}\n")])])]),e("p",[a._v("建议不要将不同目的的语句，合并成一行。")]),a._v(" "),e("h2",{attrs:{id:"自增和自减运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自增和自减运算符"}},[a._v("#")]),a._v(" 自增和自减运算符")]),a._v(" "),e("p",[a._v("自增（"),e("code",[a._v("++")]),a._v("）和自减（"),e("code",[a._v("--")]),a._v("）运算符，放在变量的前面或后面，返回的值不一样，很容易发生错误。事实上，所有的"),e("code",[a._v("++")]),a._v("运算符都可以用"),e("code",[a._v("+= 1")]),a._v("代替。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("++x\n// 等同于\nx += 1;\n")])])]),e("p",[a._v("改用"),e("code",[a._v("+= 1")]),a._v("，代码变得更清晰了。")]),a._v(" "),e("p",[a._v("建议自增（"),e("code",[a._v("++")]),a._v("）和自减（"),e("code",[a._v("--")]),a._v("）运算符尽量使用"),e("code",[a._v("+=")]),a._v("和"),e("code",[a._v("-=")]),a._v("代替。")]),a._v(" "),e("h2",{attrs:{id:"switch-case-结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch-case-结构"}},[a._v("#")]),a._v(" switch...case 结构")]),a._v(" "),e("p",[e("code",[a._v("switch...case")]),a._v("结构要求，在每一个"),e("code",[a._v("case")]),a._v("的最后一行必须是"),e("code",[a._v("break")]),a._v("语句，否则会接着运行下一个"),e("code",[a._v("case")]),a._v("。这样不仅容易忘记，还会造成代码的冗长。")]),a._v(" "),e("p",[a._v("而且，"),e("code",[a._v("switch...case")]),a._v("不使用大括号，不利于代码形式的统一。此外，这种结构类似于"),e("code",[a._v("goto")]),a._v("语句，容易造成程序流程的混乱，使得代码结构混乱不堪，不符合面向对象编程的原则。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function doAction(action) {\n  switch (action) {\n    case 'hack':\n      return 'hack';\n    case 'slash':\n      return 'slash';\n    case 'run':\n      return 'run';\n    default:\n      throw new Error('Invalid action.');\n  }\n}\n")])])]),e("p",[a._v("上面的代码建议改写成对象结构。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("function doAction(action) {\n  var actions = {\n    'hack': function () {\n      return 'hack';\n    },\n    'slash': function () {\n      return 'slash';\n    },\n    'run': function () {\n      return 'run';\n    }\n  };\n\n  if (typeof actions[action] !== 'function') {\n    throw new Error('Invalid action.');\n  }\n\n  return actions[action]();\n}\n")])])]),e("p",[a._v("因此，建议"),e("code",[a._v("switch...case")]),a._v("结构可以用对象结构代替。")]),a._v(" "),e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),e("ul",[e("li",[a._v("Eric Elliott, Programming JavaScript Applications, "),e("a",{attrs:{href:"http://chimera.labs.oreilly.com/books/1234000000262/ch02.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Chapter 2. JavaScript Style Guide"),e("OutboundLink")],1),a._v(", O'Reilly, 2013")]),a._v(" "),e("li",[a._v("Axel Rauschmayer, "),e("a",{attrs:{href:"http://www.2ality.com/2013/07/meta-style-guide.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("A meta style guide for JavaScript"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("Axel Rauschmayer, "),e("a",{attrs:{href:"http://www.2ality.com/2011/05/semicolon-insertion.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Automatic semicolon insertion in JavaScript"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("Rod Vagg, "),e("a",{attrs:{href:"http://dailyjs.com/2012/04/19/semicolons/",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript and Semicolons"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);