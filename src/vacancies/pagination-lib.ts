/*
 * pagination.js 2.6.0
 * A jQuery plugin to provide simple yet fully customisable pagination
 * https://github.com/superRaytin/paginationjs

 * Homepage: http://pagination.js.org
 *
 * Copyright 2014-2100, superRaytin
 * Released under the MIT license.
*/
!(function (n, u) {
  void 0 === u && l("Pagination requires jQuery.");
  var r = "pagination",
    s = "__pagination-",
    D =
      (u.fn.pagination &&
        l(
          'plugin conflicted, the name "pagination" has been taken by another jQuery plugin.'
        ),
      (u.fn[r] = function (a) {
        if (void 0 !== a) {
          var t,
            c = u(this),
            J = u.extend({}, u.fn[r].defaults, a),
            e = {
              initialize: function () {
                var e,
                  t = this;
                c.data("pagination") || c.data("pagination", {}),
                  !1 !== t.callHook("beforeInit") &&
                    (c.data("pagination").initialized &&
                      u(".paginationjs", c).remove(),
                    (t.disabled = !!J.disabled),
                    (e = t.model =
                      { pageRange: J.pageRange, pageSize: J.pageSize }),
                    t.parseDataSource(J.dataSource, function (a) {
                      (t.isAsync = D.isString(a)),
                        D.isArray(a) &&
                          (e.totalNumber = J.totalNumber = a.length),
                        (t.isDynamicTotalNumber =
                          t.isAsync && J.totalNumberLocator);
                      a = t.render(!0);
                      J.className && a.addClass(J.className),
                        (e.el = a),
                        c["bottom" === J.position ? "append" : "prepend"](a),
                        t.observer(),
                        (c.data("pagination").initialized = !0),
                        t.callHook("afterInit", a);
                    }));
              },
              render: function (a) {
                var e = this,
                  t = e.model,
                  o = t.el || u('<div class="paginationjs"></div>'),
                  a = !0 !== a,
                  t =
                    (e.callHook("beforeRender", a),
                    t.pageNumber || J.pageNumber),
                  i = J.pageRange || 0,
                  n = e.getTotalPage(),
                  r = t - i,
                  s = t + i;
                return (
                  (r = n < s ? ((r = (s = n) - 2 * i) < 1 ? 1 : r) : r) <= 1 &&
                    ((r = 1), (s = Math.min(2 * i + 1, n))),
                  o.html(
                    e.generateHTML({
                      currentPage: t,
                      pageRange: i,
                      rangeStart: r,
                      rangeEnd: s,
                    })
                  ),
                  J.hideOnlyOnePage && o[n <= 1 ? "hide" : "show"](),
                  e.callHook("afterRender", a),
                  o
                );
              },
              getPageLinkTag: function (a) {
                var e = J.pageLink;
                return e ? `<a href="${e}">${a}</a>` : `<a>${a}</a>`;
              },
              generatePageNumbersHTML: function (a) {
                var e,
                  t = a.currentPage,
                  o = this.getTotalPage(),
                  i = this.getPageLinkTag,
                  n = a.rangeStart,
                  r = a.rangeEnd,
                  s = "",
                  a = J.ellipsisText,
                  l = J.classPrefix,
                  c = J.pageClassName || "",
                  u = J.activeClassName || "",
                  g = J.disableClassName || "";
                if (null === J.pageRange)
                  for (e = 1; e <= o; e++)
                    s +=
                      e == t
                        ? `<li class="${l}-page J-paginationjs-page ${c} ${u}" data-num="${e}"><a>${e}</a></li>`
                        : `<li class="${l}-page J-paginationjs-page ${c}" data-num="${e}">${i(
                            e
                          )}</li>`;
                else {
                  if (n <= 3)
                    for (e = 1; e < n; e++)
                      s +=
                        e == t
                          ? `<li class="${l}-page J-paginationjs-page ${c} ${u}" data-num="${e}"><a>${e}</a></li>`
                          : `<li class="${l}-page J-paginationjs-page ${c}" data-num="${e}">${i(
                              e
                            )}</li>`;
                  else
                    J.hideFirstOnEllipsisShow ||
                      (s += `<li class="${l}-page ${l}-first J-paginationjs-page ${c}" data-num="1">${i(
                        1
                      )}</li>`),
                      (s += `<li class="${l}-ellipsis ${g}"><a>${a}</a></li>`);
                  for (e = n; e <= r; e++)
                    s +=
                      e == t
                        ? `<li class="${l}-page J-paginationjs-page ${c} ${u}" data-num="${e}"><a>${e}</a></li>`
                        : `<li class="${l}-page J-paginationjs-page ${c}" data-num="${e}">${i(
                            e
                          )}</li>`;
                  if (o - 2 <= r)
                    for (e = r + 1; e <= o; e++)
                      s += `<li class="${l}-page J-paginationjs-page ${c}" data-num="${e}">${i(
                        e
                      )}</li>`;
                  else
                    (s += `<li class="${l}-ellipsis ${g}"><a>${a}</a></li>`),
                      J.hideLastOnEllipsisShow ||
                        (s += `<li class="${l}-page ${l}-last J-paginationjs-page ${c}" data-num="${o}">${i(
                          o
                        )}</li>`);
                }
                return s;
              },
              generateHTML: function (a) {
                var e,
                  t = this,
                  o = a.currentPage,
                  i = t.getTotalPage(),
                  n = t.getPageLinkTag,
                  r = t.getTotalNumber(),
                  s = J.pageSize,
                  l = J.showPrevious,
                  c = J.showNext,
                  u = J.showPageNumbers,
                  g = J.showNavigator,
                  p = J.showSizeChanger,
                  f = J.sizeChangerOptions,
                  d = J.showGoInput,
                  m = J.showGoButton,
                  b = J.prevText,
                  h = J.nextText,
                  v = J.goButtonText,
                  y = J.classPrefix,
                  N = J.disableClassName || "",
                  $ = J.ulClassName || "",
                  k = J.prevClassName || "",
                  P = J.nextClassName || "",
                  x = "",
                  j = '<select class="J-paginationjs-size-select">',
                  S =
                    '<input type="text" class="J-paginationjs-go-pagenumber">',
                  v = `<input type="button" class="J-paginationjs-go-button" value="${v}">`,
                  T =
                    "function" == typeof J.formatSizeChanger
                      ? J.formatSizeChanger(o, i, r)
                      : J.formatSizeChanger,
                  C =
                    "function" == typeof J.formatNavigator
                      ? J.formatNavigator(o, i, r)
                      : J.formatNavigator,
                  H =
                    "function" == typeof J.formatGoInput
                      ? J.formatGoInput(S, o, i, r)
                      : J.formatGoInput,
                  w =
                    "function" == typeof J.formatGoButton
                      ? J.formatGoButton(v, o, i, r)
                      : J.formatGoButton,
                  O =
                    "function" == typeof J.autoHidePrevious
                      ? J.autoHidePrevious()
                      : J.autoHidePrevious,
                  z =
                    "function" == typeof J.autoHideNext
                      ? J.autoHideNext()
                      : J.autoHideNext,
                  L =
                    "function" == typeof J.header
                      ? J.header(o, i, r)
                      : J.header,
                  E =
                    "function" == typeof J.footer
                      ? J.footer(o, i, r)
                      : J.footer;
                if (
                  (L &&
                    (x += e =
                      t.replaceVariables(L, {
                        currentPage: o,
                        totalPage: i,
                        totalNumber: r,
                      })),
                  g &&
                    C &&
                    (x += `<div class="${y}-nav J-paginationjs-nav">${(e =
                      t.replaceVariables(C, {
                        currentPage: o,
                        totalPage: i,
                        totalNumber: r,
                        rangeStart: (o - 1) * s + 1,
                        rangeEnd: Math.min(o * s, r),
                      }))}</div>`),
                  (l || u || c) &&
                    ((x =
                      x +
                      '<div class="paginationjs-pages">' +
                      ($ ? `<ul class="${$}">` : "<ul>")),
                    l &&
                      (o <= 1
                        ? O ||
                          (x += `<li class="${y}-prev ${N} ${k}"><a>${b}</a></li>`)
                        : (x += `<li class="${y}-prev J-paginationjs-previous ${k}" data-num="${
                            o - 1
                          }" title="Previous page">${n(b)}</li>`)),
                    u && (x += t.generatePageNumbersHTML(a)),
                    c &&
                      (i <= o
                        ? z ||
                          (x += `<li class="${y}-next ${N} ${P}"><a>${h}</a></li>`)
                        : (x += `<li class="${y}-next J-paginationjs-next ${P}" data-num="${
                            o + 1
                          }" title="Next page">${n(h)}</li>`)),
                    (x += "</ul></div>")),
                  p && D.isArray(f))
                ) {
                  -1 === f.indexOf(s) &&
                    (f.unshift(s), f.sort((a, e) => a - e));
                  for (let a = 0; a < f.length; a++)
                    j += `<option value="${f[a]}"${
                      f[a] === s ? " selected" : ""
                    }>${f[a]} / page</option>`;
                  (e = j += "</select>"),
                    (x += `<div class="paginationjs-size-changer">${(e = T
                      ? t.replaceVariables(T, { length: j, total: r })
                      : e)}</div>`);
                }
                return (
                  d &&
                    H &&
                    (x += `<div class="${y}-go-input">${(e = t.replaceVariables(
                      H,
                      { currentPage: o, totalPage: i, totalNumber: r, input: S }
                    ))}</div>`),
                  m &&
                    w &&
                    (x += `<div class="${y}-go-button">${(e =
                      t.replaceVariables(w, {
                        currentPage: o,
                        totalPage: i,
                        totalNumber: r,
                        button: v,
                      }))}</div>`),
                  E &&
                    (x += e =
                      t.replaceVariables(E, {
                        currentPage: o,
                        totalPage: i,
                        totalNumber: r,
                      })),
                  x
                );
              },
              findTotalNumberFromRemoteResponse: function (a) {
                this.model.totalNumber = J.totalNumberLocator(a);
              },
              go: function (a, t) {
                var e,
                  o,
                  i,
                  n,
                  r = this,
                  s = r.model;
                function l(a) {
                  var e;
                  !1 !== r.callHook("beforePaging", n) &&
                    ((s.direction =
                      void 0 === s.pageNumber ? 0 : n > s.pageNumber ? 1 : -1),
                    (s.pageNumber = n),
                    r.render(),
                    r.disabled && r.isAsync && r.enable(),
                    (c.data("pagination").model = s),
                    J.formatResult &&
                      ((e = u.extend(!0, [], a)),
                      D.isArray((a = J.formatResult(e))) || (a = e)),
                    (c.data("pagination").currentPageData = a),
                    r.doCallback(a, t),
                    r.callHook("afterPaging", n),
                    1 == n
                      ? r.callHook("afterIsFirstPage")
                      : n == r.getTotalPage() && r.callHook("afterIsLastPage"));
                }
                r.disabled ||
                  ((n = a), !(n = parseInt(n))) ||
                  n < 1 ||
                  ((a = J.pageSize),
                  (o = r.getTotalNumber()),
                  (i = r.getTotalPage()),
                  0 < o && i < n) ||
                  (r.isAsync
                    ? ((i = (o = J.alias || {}).pageSize || "pageSize"),
                      (o = o.pageNumber || "pageNumber"),
                      ((e = {})[i] = a),
                      (e[o] = n),
                      (i = "function" == typeof J.ajax ? J.ajax() : J.ajax) &&
                        i.pageNumberStartWithZero &&
                        (e[o] = n - 1),
                      u.extend(
                        !0,
                        (a = {
                          type: "get",
                          cache: !1,
                          data: {},
                          contentType:
                            "application/x-www-form-urlencoded; charset=UTF-8",
                          dataType: "json",
                          async: !0,
                        }),
                        i
                      ),
                      u.extend(a.data, e),
                      (a.url = J.dataSource),
                      (a.success = function (a) {
                        try {
                          (r.model.originalResponse = a),
                            r.isDynamicTotalNumber
                              ? r.findTotalNumberFromRemoteResponse(a)
                              : (r.model.totalNumber = J.totalNumber),
                            l(r.filterDataWithLocator(a));
                        } catch (a) {
                          if ("function" != typeof J.onError) throw a;
                          J.onError(a, "ajaxSuccessHandlerError");
                        }
                      }),
                      (a.error = function (a, e, t) {
                        J.formatAjaxError && J.formatAjaxError(a, e, t),
                          r.enable();
                      }),
                      r.disable(),
                      J.ajaxFunction ? J.ajaxFunction(a) : u.ajax(a))
                    : l(r.getPagingData(n)));
              },
              doCallback: function (a, e) {
                var t = this.model;
                "function" == typeof e
                  ? e(a, t)
                  : "function" == typeof J.callback && J.callback(a, t);
              },
              destroy: function () {
                !1 !== this.callHook("beforeDestroy") &&
                  (this.model.el.remove(),
                  c.off(),
                  u("#paginationjs-style").remove(),
                  this.callHook("afterDestroy"));
              },
              previous: function (a) {
                this.go(this.model.pageNumber - 1, a);
              },
              next: function (a) {
                this.go(this.model.pageNumber + 1, a);
              },
              disable: function () {
                var a = this,
                  e = a.isAsync ? "async" : "sync";
                !1 !== a.callHook("beforeDisable", e) &&
                  ((a.disabled = !0),
                  (a.model.disabled = !0),
                  a.callHook("afterDisable", e));
              },
              enable: function () {
                var a = this,
                  e = a.isAsync ? "async" : "sync";
                !1 !== a.callHook("beforeEnable", e) &&
                  ((a.disabled = !1),
                  (a.model.disabled = !1),
                  a.callHook("afterEnable", e));
              },
              refresh: function (a) {
                this.go(this.model.pageNumber, a);
              },
              show: function () {
                this.model.el.is(":visible") || this.model.el.show();
              },
              hide: function () {
                this.model.el.is(":visible") && this.model.el.hide();
              },
              replaceVariables: function (a, e) {
                for (var t in e)
                  var o = e[t],
                    t = new RegExp("<%=\\s*" + t + "\\s*%>", "img"),
                    i = (i || a).replace(t, o);
                return i;
              },
              getPagingData: function (a) {
                var e = J.pageSize,
                  t = J.dataSource,
                  o = this.getTotalNumber(),
                  i = e * (a - 1) + 1,
                  a = Math.min(a * e, o);
                return t.slice(i - 1, a);
              },
              getTotalNumber: function () {
                return this.model.totalNumber || J.totalNumber || 0;
              },
              getTotalPage: function () {
                return Math.ceil(this.getTotalNumber() / J.pageSize);
              },
              getLocator: function (a) {
                var e;
                return (
                  "string" == typeof a
                    ? (e = a)
                    : "function" == typeof a
                    ? (e = a())
                    : l(
                        '"locator" is incorrect. Expect string or function type.'
                      ),
                  e
                );
              },
              filterDataWithLocator: function (t) {
                var o,
                  a = this.getLocator(J.locator);
                if (D.isObject(t)) {
                  try {
                    u.each(a.split("."), function (a, e) {
                      o = (o || t)[e];
                    });
                  } catch (a) {}
                  o
                    ? D.isArray(o) ||
                      l("dataSource." + a + " should be an Array.")
                    : l("dataSource." + a + " is undefined.");
                }
                return o || t;
              },
              parseDataSource: function (a, e) {
                var t = this;
                D.isObject(a)
                  ? e((J.dataSource = t.filterDataWithLocator(a)))
                  : D.isArray(a)
                  ? e((J.dataSource = a))
                  : "function" == typeof a
                  ? J.dataSource(function (a) {
                      D.isArray(a) ||
                        l(
                          'The parameter of "done" Function should be an Array.'
                        ),
                        t.parseDataSource.call(t, a, e);
                    })
                  : "string" == typeof a
                  ? (/^https?|file:/.test(a) && (J.ajaxDataType = "jsonp"),
                    e(a))
                  : l("Unexpected dataSource type");
              },
              callHook: function (a) {
                var t,
                  e = c.data("pagination") || {},
                  o = Array.prototype.slice.apply(arguments);
                return (
                  o.shift(),
                  J[a] &&
                    "function" == typeof J[a] &&
                    !1 === J[a].apply(n, o) &&
                    (t = !1),
                  e.hooks &&
                    e.hooks[a] &&
                    u.each(e.hooks[a], function (a, e) {
                      !1 === e.apply(n, o) && (t = !1);
                    }),
                  !1 !== t
                );
              },
              observer: function () {
                var o = this,
                  t = o.model.el,
                  a =
                    (c.on(s + "go", function (a, e, t) {
                      (e = "string" == typeof e ? parseInt(e.trim()) : e) &&
                        ("number" != typeof e &&
                          l('"pageNumber" is incorrect. (Number)'),
                        o.go(e, t));
                    }),
                    t.on("click", ".J-paginationjs-page", function (a) {
                      var e = u(a.currentTarget),
                        t = e.attr("data-num").trim();
                      if (
                        t &&
                        !e.hasClass(J.disableClassName) &&
                        !e.hasClass(J.activeClassName)
                      )
                        return (
                          !1 !== o.callHook("beforePageOnClick", a, t) &&
                          (o.go(t),
                          o.callHook("afterPageOnClick", a, t),
                          !!J.pageLink) &&
                          void 0
                        );
                    }),
                    t.on("click", ".J-paginationjs-previous", function (a) {
                      var e = u(a.currentTarget),
                        t = e.attr("data-num").trim();
                      if (t && !e.hasClass(J.disableClassName))
                        return (
                          !1 !== o.callHook("beforePreviousOnClick", a, t) &&
                          (o.go(t),
                          o.callHook("afterPreviousOnClick", a, t),
                          !!J.pageLink) &&
                          void 0
                        );
                    }),
                    t.on("click", ".J-paginationjs-next", function (a) {
                      var e = u(a.currentTarget),
                        t = e.attr("data-num").trim();
                      if (t && !e.hasClass(J.disableClassName))
                        return (
                          !1 !== o.callHook("beforeNextOnClick", a, t) &&
                          (o.go(t),
                          o.callHook("afterNextOnClick", a, t),
                          !!J.pageLink) &&
                          void 0
                        );
                    }),
                    t.on("click", ".J-paginationjs-go-button", function (a) {
                      var e = u(".J-paginationjs-go-pagenumber", t).val();
                      if (!1 === o.callHook("beforeGoButtonOnClick", a, e))
                        return !1;
                      c.trigger(s + "go", e),
                        o.callHook("afterGoButtonOnClick", a, e);
                    }),
                    t.on(
                      "keyup",
                      ".J-paginationjs-go-pagenumber",
                      function (a) {
                        if (13 === a.which) {
                          var e = u(a.currentTarget).val();
                          if (!1 === o.callHook("beforeGoInputOnEnter", a, e))
                            return !1;
                          c.trigger(s + "go", e),
                            u(".J-paginationjs-go-pagenumber", t).focus(),
                            o.callHook("afterGoInputOnEnter", a, e);
                        }
                      }
                    ),
                    t.on("change", ".J-paginationjs-size-select", function (a) {
                      var e = u(a.currentTarget),
                        e = parseInt(e.val()),
                        t = o.model.pageNumber || J.pageNumber;
                      if ("number" == typeof e)
                        return (
                          !1 !== o.callHook("beforeSizeSelectorChange", a, e) &&
                          ((J.pageSize = e),
                          (o.model.pageSize = e),
                          (o.model.totalPage = o.getTotalPage()),
                          t > o.model.totalPage && (t = o.model.totalPage),
                          o.go(t),
                          o.callHook("afterSizeSelectorChange", a, e),
                          !!J.pageLink) &&
                          void 0
                        );
                    }),
                    c.on(s + "previous", function (a, e) {
                      o.previous(e);
                    }),
                    c.on(s + "next", function (a, e) {
                      o.next(e);
                    }),
                    c.on(s + "disable", function () {
                      o.disable();
                    }),
                    c.on(s + "enable", function () {
                      o.enable();
                    }),
                    c.on(s + "refresh", function (a, e) {
                      o.refresh(e);
                    }),
                    c.on(s + "show", function () {
                      o.show();
                    }),
                    c.on(s + "hide", function () {
                      o.hide();
                    }),
                    c.on(s + "destroy", function () {
                      o.destroy();
                    }),
                    Math.max(o.getTotalPage(), 1)),
                  e = J.pageNumber;
                o.isDynamicTotalNumber && J.resetPageNumberOnInit && (e = 1),
                  J.triggerPagingOnInit && c.trigger(s + "go", Math.min(e, a));
              },
            };
          if (c.data("pagination") && !0 === c.data("pagination").initialized) {
            if (g(a))
              return c.trigger.call(this, s + "go", a, arguments[1]), this;
            if ("string" == typeof a) {
              var o = Array.prototype.slice.apply(arguments);
              switch (((o[0] = s + o[0]), a)) {
                case "previous":
                case "next":
                case "go":
                case "disable":
                case "enable":
                case "refresh":
                case "show":
                case "hide":
                case "destroy":
                  c.trigger.apply(this, o);
                  break;
                case "getSelectedPageNum":
                case "getCurrentPageNum":
                  return (
                    c.data("pagination").model
                      ? c.data("pagination").model
                      : c.data("pagination").attributes
                  ).pageNumber;
                case "getTotalPage":
                  return Math.ceil(
                    c.data("pagination").model.totalNumber /
                      c.data("pagination").model.pageSize
                  );
                case "getSelectedPageData":
                case "getCurrentPageData":
                  return c.data("pagination").currentPageData;
                case "isDisabled":
                  return !0 === c.data("pagination").model.disabled;
                default:
                  l("Unknown action: " + a);
              }
              return this;
            }
            (t = c),
              u.each(
                [
                  "go",
                  "previous",
                  "next",
                  "disable",
                  "enable",
                  "refresh",
                  "show",
                  "hide",
                  "destroy",
                ],
                function (a, e) {
                  t.off(s + e);
                }
              ),
              t.data("pagination", {}),
              u(".paginationjs", t).remove();
          } else D.isObject(a) || l("Illegal options");
          var i = J;
          i.dataSource || l('"dataSource" is required.'),
            "string" == typeof i.dataSource
              ? void 0 === i.totalNumberLocator
                ? void 0 === i.totalNumber
                  ? l('"totalNumber" is required.')
                  : g(i.totalNumber) ||
                    l('"totalNumber" is incorrect. Expect numberic type')
                : "function" != typeof i.totalNumberLocator &&
                  l('"totalNumberLocator" should be a Function.')
              : D.isObject(i.dataSource) &&
                (void 0 === i.locator
                  ? l('"dataSource" is an Object, please specify a "locator".')
                  : "string" != typeof i.locator &&
                    "function" != typeof i.locator &&
                    l(
                      i.locator +
                        " is incorrect. Expect string or function type"
                    )),
            void 0 !== i.formatResult &&
              "function" != typeof i.formatResult &&
              l('"formatResult" should be a Function.'),
            void 0 !== i.onError &&
              "function" != typeof i.onError &&
              l('"onError" should be a Function.'),
            e.initialize();
        }
        return this;
      }),
      (u.fn[r].defaults = {
        totalNumber: 0,
        pageNumber: 1,
        pageSize: 10,
        pageRange: 2,
        showPrevious: !0,
        showNext: !0,
        showPageNumbers: !0,
        showNavigator: !1,
        showGoInput: !1,
        showGoButton: !1,
        showSizeChanger: !1,
        sizeChangerOptions: [10, 20, 50, 100],
        pageLink: "",
        prevText: "&lsaquo;",
        nextText: "&rsaquo;",
        ellipsisText: "...",
        goButtonText: "Go",
        classPrefix: "paginationjs",
        activeClassName: "active",
        disableClassName: "disabled",
        formatNavigator: "Total <%= totalNumber %> items",
        formatGoInput: "<%= input %>",
        formatGoButton: "<%= button %>",
        position: "bottom",
        autoHidePrevious: !1,
        autoHideNext: !1,
        triggerPagingOnInit: !0,
        resetPageNumberOnInit: !0,
        hideOnlyOnePage: !1,
        hideFirstOnEllipsisShow: !1,
        hideLastOnEllipsisShow: !1,
        callback: function () {},
      }),
      (u.fn.addHook = function (a, e) {
        arguments.length < 2 && l("Expect 2 arguments at least."),
          "function" != typeof e && l("callback should be a function.");
        var t = u(this),
          o = t.data("pagination");
        o || (t.data("pagination", {}), (o = t.data("pagination"))),
          o.hooks || (o.hooks = {}),
          (o.hooks[a] = o.hooks[a] || []),
          o.hooks[a].push(e);
      }),
      (u[r] = function (a, e) {
        var t;
        if (
          (arguments.length < 2 && l("Requires two parameters."),
          (t = "string" != typeof a && a instanceof jQuery ? a : u(a)).length)
        )
          return t.pagination(e), t;
      }),
      {});
  function l(a) {
    throw new Error("Pagination: " + a);
  }
  function g(a) {
    return !isNaN(parseFloat(a)) && isFinite(a);
  }
  u.each(["Object", "Array", "String"], function (a, t) {
    D["is" + t] = function (a) {
      return (
        ("object" == (e = typeof (a = a))
          ? null == a
            ? "null"
            : Object.prototype.toString.call(a).slice(8, -1)
          : e
        ).toLowerCase() === t.toLowerCase()
      );
      var e;
    };
  }),
    "function" == typeof define &&
      define.amd &&
      define(function () {
        return u;
      });
})(this, window.jQuery);
