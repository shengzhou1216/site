(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{584:function(e,t,s){"use strict";s.r(t);var n=s(20),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"promise对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise对象"}},[e._v("#")]),e._v(" Promise对象")]),e._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),s("p",[e._v("Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。")]),e._v(" "),s("p",[e._v("注意，本章只是 Promise 对象的简单介绍。为了避免与后续教程的重复，更完整的介绍请看"),s("a",{attrs:{href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("《ES6 标准入门》"),s("OutboundLink")],1),e._v("的"),s("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/promise",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Promise 对象》"),s("OutboundLink")],1),e._v("一章。")]),e._v(" "),s("p",[e._v("首先，Promise 是一个对象，也是一个构造函数。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function f1(resolve, reject) {\n  // 异步代码...\n}\n\nvar p1 = new Promise(f1);\n")])])]),s("p",[e._v("上面代码中，"),s("code",[e._v("Promise")]),e._v("构造函数接受一个回调函数"),s("code",[e._v("f1")]),e._v("作为参数，"),s("code",[e._v("f1")]),e._v("里面是异步操作的代码。然后，返回的"),s("code",[e._v("p1")]),e._v("就是一个 Promise 实例。")]),e._v(" "),s("p",[e._v("Promise 的设计思想是，所有异步任务都返回一个 Promise 实例。Promise 实例有一个"),s("code",[e._v("then")]),e._v("方法，用来指定下一步的回调函数。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var p1 = new Promise(f1);\np1.then(f2);\n")])])]),s("p",[e._v("上面代码中，"),s("code",[e._v("f1")]),e._v("的异步操作执行完成，就会执行"),s("code",[e._v("f2")]),e._v("。")]),e._v(" "),s("p",[e._v("传统的写法可能需要把"),s("code",[e._v("f2")]),e._v("作为回调函数传入"),s("code",[e._v("f1")]),e._v("，比如写成"),s("code",[e._v("f1(f2)")]),e._v("，异步操作完成后，在"),s("code",[e._v("f1")]),e._v("内部调用"),s("code",[e._v("f2")]),e._v("。Promise 使得"),s("code",[e._v("f1")]),e._v("和"),s("code",[e._v("f2")]),e._v("变成了链式写法。不仅改善了可读性，而且对于多层嵌套的回调函数尤其方便。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 传统写法\nstep1(function (value1) {\n  step2(value1, function(value2) {\n    step3(value2, function(value3) {\n      step4(value3, function(value4) {\n        // ...\n      });\n    });\n  });\n});\n\n// Promise 的写法\n(new Promise(step1))\n  .then(step2)\n  .then(step3)\n  .then(step4);\n")])])]),s("p",[e._v("从上面代码可以看到，采用 Promises 以后，程序流程变得非常清楚，十分易读。注意，为了便于理解，上面代码的"),s("code",[e._v("Promise")]),e._v("实例的生成格式，做了简化，真正的语法请参照下文。")]),e._v(" "),s("p",[e._v("总的来说，传统的回调函数写法使得代码混成一团，变得横向发展而不是向下发展。Promise 就是解决这个问题，使得异步流程可以写成同步流程。")]),e._v(" "),s("p",[e._v("Promise 原本只是社区提出的一个构想，一些函数库率先实现了这个功能。ECMAScript 6 将其写入语言标准，目前 JavaScript 原生支持 Promise 对象。")]),e._v(" "),s("h2",{attrs:{id:"promise-对象的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-对象的状态"}},[e._v("#")]),e._v(" Promise 对象的状态")]),e._v(" "),s("p",[e._v("Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。")]),e._v(" "),s("ul",[s("li",[e._v("异步操作未完成（pending）")]),e._v(" "),s("li",[e._v("异步操作成功（fulfilled）")]),e._v(" "),s("li",[e._v("异步操作失败（rejected）")])]),e._v(" "),s("p",[e._v("上面三种状态里面，"),s("code",[e._v("fulfilled")]),e._v("和"),s("code",[e._v("rejected")]),e._v("合在一起称为"),s("code",[e._v("resolved")]),e._v("（已定型）。")]),e._v(" "),s("p",[e._v("这三种的状态的变化途径只有两种。")]),e._v(" "),s("ul",[s("li",[e._v("从“未完成”到“成功”")]),e._v(" "),s("li",[e._v("从“未完成”到“失败”")])]),e._v(" "),s("p",[e._v("一旦状态发生变化，就凝固了，不会再有新的状态变化。这也是 Promise 这个名字的由来，它的英语意思是“承诺”，一旦承诺成效，就不得再改变了。这也意味着，Promise 实例的状态变化只可能发生一次。")]),e._v(" "),s("p",[e._v("因此，Promise 的最终结果只有两种。")]),e._v(" "),s("ul",[s("li",[e._v("异步操作成功，Promise 实例传回一个值（value），状态变为"),s("code",[e._v("fulfilled")]),e._v("。")]),e._v(" "),s("li",[e._v("异步操作失败，Promise 实例抛出一个错误（error），状态变为"),s("code",[e._v("rejected")]),e._v("。")])]),e._v(" "),s("h2",{attrs:{id:"promise-构造函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-构造函数"}},[e._v("#")]),e._v(" Promise 构造函数")]),e._v(" "),s("p",[e._v("JavaScript 提供原生的"),s("code",[e._v("Promise")]),e._v("构造函数，用来生成 Promise 实例。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var promise = new Promise(function (resolve, reject) {\n  // ...\n\n  if (/* 异步操作成功 */){\n    resolve(value);\n  } else { /* 异步操作失败 */\n    reject(new Error());\n  }\n});\n")])])]),s("p",[e._v("上面代码中，"),s("code",[e._v("Promise")]),e._v("构造函数接受一个函数作为参数，该函数的两个参数分别是"),s("code",[e._v("resolve")]),e._v("和"),s("code",[e._v("reject")]),e._v("。它们是两个函数，由 JavaScript 引擎提供，不用自己实现。")]),e._v(" "),s("p",[s("code",[e._v("resolve")]),e._v("函数的作用是，将"),s("code",[e._v("Promise")]),e._v("实例的状态从“未完成”变为“成功”（即从"),s("code",[e._v("pending")]),e._v("变为"),s("code",[e._v("fulfilled")]),e._v("），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。"),s("code",[e._v("reject")]),e._v("函数的作用是，将"),s("code",[e._v("Promise")]),e._v("实例的状态从“未完成”变为“失败”（即从"),s("code",[e._v("pending")]),e._v("变为"),s("code",[e._v("rejected")]),e._v("），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。")]),e._v(" "),s("p",[e._v("下面是一个例子。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function timeout(ms) {\n  return new Promise((resolve, reject) => {\n    setTimeout(resolve, ms, 'done');\n  });\n}\n\ntimeout(100)\n")])])]),s("p",[e._v("上面代码中，"),s("code",[e._v("timeout(100)")]),e._v("返回一个 Promise 实例。100毫秒以后，该实例的状态会变为"),s("code",[e._v("fulfilled")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"promise-prototype-then"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-prototype-then"}},[e._v("#")]),e._v(" Promise.prototype.then()")]),e._v(" "),s("p",[e._v("Promise 实例的"),s("code",[e._v("then")]),e._v("方法，用来添加回调函数。")]),e._v(" "),s("p",[s("code",[e._v("then")]),e._v("方法可以接受两个回调函数，第一个是异步操作成功时（变为"),s("code",[e._v("fulfilled")]),e._v("状态）的回调函数，第二个是异步操作失败（变为"),s("code",[e._v("rejected")]),e._v("）时的回调函数（该参数可以省略）。一旦状态改变，就调用相应的回调函数。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var p1 = new Promise(function (resolve, reject) {\n  resolve('成功');\n});\np1.then(console.log, console.error);\n// \"成功\"\n\nvar p2 = new Promise(function (resolve, reject) {\n  reject(new Error('失败'));\n});\np2.then(console.log, console.error);\n// Error: 失败\n")])])]),s("p",[e._v("上面代码中，"),s("code",[e._v("p1")]),e._v("和"),s("code",[e._v("p2")]),e._v("都是Promise 实例，它们的"),s("code",[e._v("then")]),e._v("方法绑定两个回调函数：成功时的回调函数"),s("code",[e._v("console.log")]),e._v("，失败时的回调函数"),s("code",[e._v("console.error")]),e._v("（可以省略）。"),s("code",[e._v("p1")]),e._v("的状态变为成功，"),s("code",[e._v("p2")]),e._v("的状态变为失败，对应的回调函数会收到异步操作传回的值，然后在控制台输出。")]),e._v(" "),s("p",[s("code",[e._v("then")]),e._v("方法可以链式使用。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("p1\n  .then(step1)\n  .then(step2)\n  .then(step3)\n  .then(\n    console.log,\n    console.error\n  );\n")])])]),s("p",[e._v("上面代码中，"),s("code",[e._v("p1")]),e._v("后面有四个"),s("code",[e._v("then")]),e._v("，意味依次有四个回调函数。只要前一步的状态变为"),s("code",[e._v("fulfilled")]),e._v("，就会依次执行紧跟在后面的回调函数。")]),e._v(" "),s("p",[e._v("最后一个"),s("code",[e._v("then")]),e._v("方法，回调函数是"),s("code",[e._v("console.log")]),e._v("和"),s("code",[e._v("console.error")]),e._v("，用法上有一点重要的区别。"),s("code",[e._v("console.log")]),e._v("只显示"),s("code",[e._v("step3")]),e._v("的返回值，而"),s("code",[e._v("console.error")]),e._v("可以显示"),s("code",[e._v("p1")]),e._v("、"),s("code",[e._v("step1")]),e._v("、"),s("code",[e._v("step2")]),e._v("、"),s("code",[e._v("step3")]),e._v("之中任意一个发生的错误。举例来说，如果"),s("code",[e._v("step1")]),e._v("的状态变为"),s("code",[e._v("rejected")]),e._v("，那么"),s("code",[e._v("step2")]),e._v("和"),s("code",[e._v("step3")]),e._v("都不会执行了（因为它们是"),s("code",[e._v("resolved")]),e._v("的回调函数）。Promise 开始寻找，接下来第一个为"),s("code",[e._v("rejected")]),e._v("的回调函数，在上面代码中是"),s("code",[e._v("console.error")]),e._v("。这就是说，Promise 对象的报错具有传递性。")]),e._v(" "),s("h2",{attrs:{id:"then-用法辨析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#then-用法辨析"}},[e._v("#")]),e._v(" then() 用法辨析")]),e._v(" "),s("p",[e._v("Promise 的用法，简单说就是一句话：使用"),s("code",[e._v("then")]),e._v("方法添加回调函数。但是，不同的写法有一些细微的差别，请看下面四种写法，它们的差别在哪里？")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 写法一")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("f1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("f2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 写法二")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("f1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("f2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 写法三")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("f1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("f2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 写法四")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("f1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("f2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("为了便于讲解，下面这四种写法都再用"),s("code",[e._v("then")]),e._v("方法接一个回调函数"),s("code",[e._v("f3")]),e._v("。写法一的"),s("code",[e._v("f3")]),e._v("回调函数的参数，是"),s("code",[e._v("f2")]),e._v("函数的运行结果。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("f1().then(function () {\n  return f2();\n}).then(f3);\n")])])]),s("p",[e._v("写法二的"),s("code",[e._v("f3")]),e._v("回调函数的参数是"),s("code",[e._v("undefined")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("f1().then(function () {\n  f2();\n  return;\n}).then(f3);\n")])])]),s("p",[e._v("写法三的"),s("code",[e._v("f3")]),e._v("回调函数的参数，是"),s("code",[e._v("f2")]),e._v("函数返回的函数的运行结果。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("f1().then(f2())\n  .then(f3);\n")])])]),s("p",[e._v("写法四与写法一只有一个差别，那就是"),s("code",[e._v("f2")]),e._v("会接收到"),s("code",[e._v("f1()")]),e._v("返回的结果。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("f1().then(f2)\n  .then(f3);\n")])])]),s("h2",{attrs:{id:"实例-图片加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例-图片加载"}},[e._v("#")]),e._v(" 实例：图片加载")]),e._v(" "),s("p",[e._v("下面是使用 Promise 完成图片的加载。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("var preloadImage = function (path) {\n  return new Promise(function (resolve, reject) {\n    var image = new Image();\n    image.onload  = resolve;\n    image.onerror = reject;\n    image.src = path;\n  });\n};\n")])])]),s("p",[e._v("上面代码中，"),s("code",[e._v("image")]),e._v("是一个图片对象的实例。它有两个事件监听属性，"),s("code",[e._v("onload")]),e._v("属性在图片加载成功后调用，"),s("code",[e._v("onerror")]),e._v("属性在加载失败调用。")]),e._v(" "),s("p",[e._v("上面的"),s("code",[e._v("preloadImage()")]),e._v("函数用法如下。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("preloadImage('https://example.com/my.jpg')\n  .then(function (e) { document.body.append(e.target) })\n  .then(function () { console.log('加载成功') })\n")])])]),s("p",[e._v("上面代码中，图片加载成功以后，"),s("code",[e._v("onload")]),e._v("属性会返回一个事件对象，因此第一个"),s("code",[e._v("then()")]),e._v("方法的回调函数，会接收到这个事件对象。该对象的"),s("code",[e._v("target")]),e._v("属性就是图片加载后生成的 DOM 节点。")]),e._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),s("p",[e._v("Promise 的优点在于，让回调函数变成了规范的链式写法，程序流程可以看得很清楚。它有一整套接口，可以实现许多强大的功能，比如同时执行多个异步操作，等到它们的状态都改变以后，再执行一个回调函数；再比如，为多个回调函数中抛出的错误，统一指定处理方法等等。")]),e._v(" "),s("p",[e._v("而且，Promise 还有一个传统写法没有的好处：它的状态一旦改变，无论何时查询，都能得到这个状态。这意味着，无论何时为 Promise 实例添加回调函数，该函数都能正确执行。所以，你不用担心是否错过了某个事件或信号。如果是传统写法，通过监听事件来执行回调函数，一旦错过了事件，再添加回调函数是不会执行的。")]),e._v(" "),s("p",[e._v("Promise 的缺点是，编写的难度比传统写法高，而且阅读代码也不是一眼可以看懂。你只会看到一堆"),s("code",[e._v("then")]),e._v("，必须自己在"),s("code",[e._v("then")]),e._v("的回调函数里面理清逻辑。")]),e._v(" "),s("h2",{attrs:{id:"微任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微任务"}},[e._v("#")]),e._v(" 微任务")]),e._v(" "),s("p",[e._v("Promise 的回调函数属于异步任务，会在同步任务之后执行。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("new Promise(function (resolve, reject) {\n  resolve(1);\n}).then(console.log);\n\nconsole.log(2);\n// 2\n// 1\n")])])]),s("p",[e._v("上面代码会先输出2，再输出1。因为"),s("code",[e._v("console.log(2)")]),e._v("是同步任务，而"),s("code",[e._v("then")]),e._v("的回调函数属于异步任务，一定晚于同步任务执行。")]),e._v(" "),s("p",[e._v("但是，Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。它们的区别在于，正常任务追加到下一轮事件循环，微任务追加到本轮事件循环。这意味着，微任务的执行时间一定早于正常任务。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("setTimeout(function() {\n  console.log(1);\n}, 0);\n\nnew Promise(function (resolve, reject) {\n  resolve(2);\n}).then(console.log);\n\nconsole.log(3);\n// 3\n// 2\n// 1\n")])])]),s("p",[e._v("上面代码的输出结果是"),s("code",[e._v("321")]),e._v("。这说明"),s("code",[e._v("then")]),e._v("的回调函数的执行时间，早于"),s("code",[e._v("setTimeout(fn, 0)")]),e._v("。因为"),s("code",[e._v("then")]),e._v("是本轮事件循环执行，"),s("code",[e._v("setTimeout(fn, 0)")]),e._v("在下一轮事件循环开始时执行。")]),e._v(" "),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[e._v("#")]),e._v(" 参考链接")]),e._v(" "),s("ul",[s("li",[e._v("Sebastian Porto, "),s("a",{attrs:{href:"https://sporto.github.com/blog/2012/12/09/callbacks-listeners-promises/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Asynchronous JS: Callbacks, Listeners, Control Flow Libs and Promises"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Rhys Brett-Bowen, "),s("a",{attrs:{href:"https://modernjavascript.blogspot.com/2013/08/promisesa-understanding-by-doing.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Promises/A+ - understanding the spec through implementation"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Matt Podwysocki, Amanda Silver, "),s("a",{attrs:{href:"https://blogs.msdn.com/b/ie/archive/2011/09/11/asynchronous-programming-in-javascript-with-promises.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Asynchronous Programming in JavaScript with “Promises”"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Marc Harter, "),s("a",{attrs:{href:"https://gist.github.com//wavded/5692344",target:"_blank",rel:"noopener noreferrer"}},[e._v("Promise A+ Implementation"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Bryan Klimt, "),s("a",{attrs:{href:"http://blog.parse.com/2013/01/29/whats-so-great-about-javascript-promises/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What’s so great about JavaScript Promises?"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Jake Archibald, "),s("a",{attrs:{href:"https://www.html5rocks.com/en/tutorials/es6/promises/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript Promises There and back again"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Mikito Takada, "),s("a",{attrs:{href:"http://book.mixu.net/node/ch7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("7. Control flow, Mixu's Node book"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);