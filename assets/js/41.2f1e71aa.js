(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{557:function(t,e,a){"use strict";a.r(e);var s=a(5),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"为什么javascript是单线程？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么javascript是单线程？"}},[t._v("#")]),t._v(" 为什么JavaScript是单线程？")]),t._v(" "),a("p",[t._v("JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么JavaScript不能有多个线程呢？这样能提高效率啊。")]),t._v(" "),a("p",[t._v("JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？")]),t._v(" "),a("p",[t._v("所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。")]),t._v(" "),a("p",[t._v("为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。")]),t._v(" "),a("h3",{attrs:{id:"event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),a("p",[t._v("参考地址:"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/41543963",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event Loop 这个循环你晓得么？(附 GIF 详解)-饿了么前端"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"任务队列的本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务队列的本质"}},[t._v("#")]),t._v(" "),a("strong",[t._v("任务队列的本质")])]),t._v(" "),a("ul",[a("li",[t._v("所有同步任务都在主线程上执行，形成一个"),a("strong",[t._v("执行栈")]),t._v("（execution context stack）。")]),t._v(" "),a("li",[t._v("主线程之外，还存在一个”"),a("strong",[t._v("任务队列")]),t._v("”（task queue）。只要异步任务有了运行结果，就在”任务队列”之中放置一个事件。")]),t._v(" "),a("li",[t._v("一旦”执行栈”中的所有同步任务执行完毕，系统就会读取”任务队列”，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。")]),t._v(" "),a("li",[t._v("主线程不断重复上面的第三步。")])]),t._v(" "),a("h3",{attrs:{id:"异步任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步任务"}},[t._v("#")]),t._v(" 异步任务")]),t._v(" "),a("ul",[a("li",[t._v("setTimeOut、setInterval")]),t._v(" "),a("li",[t._v("DOM 事件")]),t._v(" "),a("li",[t._v("Promise")])]),t._v(" "),a("h3",{attrs:{id:"javascript-实现异步编程的方法？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-实现异步编程的方法？"}},[t._v("#")]),t._v(" JavaScript 实现异步编程的方法？")]),t._v(" "),a("ul",[a("li",[t._v("回调函数")]),t._v(" "),a("li",[t._v("事件监听")]),t._v(" "),a("li",[t._v("发布/订阅")]),t._v(" "),a("li",[t._v("Promises 对象")]),t._v(" "),a("li",[t._v("Async 函数[ES7]")])]),t._v(" "),a("h3",{attrs:{id:"关于-settimeout、setimmediate、process-nexttick-的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-settimeout、setimmediate、process-nexttick-的比较"}},[t._v("#")]),t._v(" 关于 setTimeOut、setImmediate、process.nextTick()的比较")]),t._v(" "),a("h4",{attrs:{id:"settimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout"}},[t._v("#")]),t._v(" setTimeout()")]),t._v(" "),a("p",[t._v("将事件插入到了事件队列，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。\n当主线程时间执行过长，无法保证回调会在事件指定的时间执行。\n浏览器端每次setTimeout会有4ms的延迟，当连续执行多个setTimeout，有可能会阻塞进程，造成性能问题。")]),t._v(" "),a("h4",{attrs:{id:"setimmediate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setimmediate"}},[t._v("#")]),t._v(" setImmediate()")]),t._v(" "),a("p",[t._v("事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行。和setTimeout(fn,0)的效果差不多。\n服务端node提供的方法。浏览器端最新的api也有类似实现:window.setImmediate,但支持的浏览器很少。")]),t._v(" "),a("h4",{attrs:{id:"process-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick"}},[t._v("#")]),t._v(" process.nextTick()")]),t._v(" "),a("p",[t._v("插入到事件队列尾部，但在下次事件队列之前会执行。也就是说，它指定的任务总是发生在所有异步任务之前，当前主线程的末尾。\n大致流程：当前”执行栈”的尾部–>下一次Event Loop（主线程读取”任务队列”）之前–>触发process指定的回调函数。\n服务器端node提供的办法。用此方法可以用于处于异步延迟的问题。\n可以理解为：此次不行，预约下次优先执行。")]),t._v(" "),a("h3",{attrs:{id:"浏览器的tasks、microtasks、-queues-和-schedules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的tasks、microtasks、-queues-和-schedules"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/sisterAn/blog/issues/21",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的Tasks、microtasks、 queues 和 schedules"),a("OutboundLink")],1)]),t._v(" "),a("h4",{attrs:{id:"promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),a("p",[t._v("Promise本身是同步的立即执行函数， 当在 executor 中执行 resolve 或者 reject 的时候, 此时是异步操作， 会先执行 then/catch 等，当主栈完成后，才会去调用 resolve/reject 中存放的方法执行，打印 p 的时候，是打印的返回结果，一个 Promise 实例。")]),t._v(" "),a("h4",{attrs:{id:"async-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[t._v("#")]),t._v(" async await")]),t._v(" "),a("p",[t._v("Async/Await就是一个自执行的generate函数。利用generate函数的特性把异步的代码写成“同步”的形式。")]),t._v(" "),a("p",[t._v("async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。")])])}),[],!1,null,null,null);e.default=r.exports}}]);