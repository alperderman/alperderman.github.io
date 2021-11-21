function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
* Grayshift v1.0.2 (https://grayshift.io)
* Copyright 2019-2021 Grayshift
* Licensed under MIT (https://opensource.org/licenses/mit-license.php)
*/
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).grayshift = t();
}(this, function () {
  "use strict";

  var e = "data-gs-parent",
      t = "fade",
      s = "show",
      n = "active",
      i = function () {
    var e = '[data-gs-dismiss="alert"]',
        n = document.querySelectorAll(e);
    n.length > 0 && n.forEach(function (n) {
      n.addEventListener("click", function (i) {
        var o = n.closest(".alert"),
            a = n.matches(e);

        if (o && a) {
          if (o.classList.contains(t, s)) {
            o.classList.remove(s);

            var _e = function _e() {
              o.classList.remove(t), o.remove(), o.removeEventListener("transitionend", _e);
            };

            o.addEventListener("transitionend", _e);
          } else o.remove();
        }

        i.preventDefault();
      });
    });
  }(),
      o = function o(e) {
    var t = e.getAttribute("data-gs-target");
    return t || (t = e.getAttribute("href")), t;
  };

  return {
    Alert: i,
    Collapse: function () {
      var t = "collapse",
          n = "collapsing",
          i = '[data-gs-toggle="collapse"]',
          a = document.querySelectorAll(i);
      a.length > 0 && a.forEach(function (a) {
        a.addEventListener("click", function (r) {
          var c = document.querySelector(o(a));

          if (c) {
            var _o = c.getAttribute(e),
                _r = c.closest(_o),
                l = c.classList.contains(s),
                d = function d() {
              var t = document.querySelector(_o);
              t.querySelectorAll(".collapse").forEach(function (s) {
                if (s.previousElementSibling) {
                  var _n = s.previousElementSibling.closest(i) || s.previousElementSibling.querySelector(i),
                      _o2 = s.getAttribute(e);

                  s !== c && _o2 === "#".concat(t.id) && m(s, _n);
                }
              });
            },
                u = function u(e) {
              e.classList.remove(t), e.classList.add(n), e.style.height = function () {
                e.style.display = "block";
                var t = e.scrollHeight + "px";
                return e.style.display = "", t;
              }(), a.setAttribute("aria-expanded", !0);

              var i = function i() {
                e.classList.remove(n), e.classList.add(t, s), e.style.height = "", e.removeEventListener("transitionend", i);
              };

              e.addEventListener("transitionend", i);
            },
                m = function m(e) {
              var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
              e.style.height = e.scrollHeight + "px", e.classList.add(n), e.classList.remove(t, s), e.offsetHeight, e.style.height = "", i.setAttribute("aria-expanded", !1);

              var o = function o() {
                e.classList.remove(n), e.classList.add(t), e.removeEventListener("transitionend", o);
              };

              e.addEventListener("transitionend", o);
            };

            _r && d(), l ? m(c) : u(c);
          }

          r.preventDefault();
        });
      });
    }(),
    Dropdown: function () {
      var e = '[data-gs-toggle="dropdown"]',
          t = document.querySelectorAll(e);

      if (t.length > 0) {
        var _n2 = function _n2() {
          t.forEach(function (t) {
            var n = t.matches(e),
                i = t.nextElementSibling;
            n && i && (i.classList.remove(s), t.classList.remove(s), t.setAttribute("aria-expanded", !1));
          });
        };

        t.forEach(function (t) {
          t.addEventListener("click", function (i) {
            var o = t.matches(e),
                a = t.nextElementSibling;

            if (o && a) {
              var _e2 = a.classList.contains(s);

              _n2(), _e2 || (a.classList.add(s), t.classList.add(s), t.setAttribute("aria-expanded", !0)), i.stopPropagation();
            }

            i.preventDefault();
          });
        }), document.addEventListener("click", function () {
          return _n2();
        }), document.addEventListener("keyup", function (e) {
          "Escape" === e.key && _n2();
        });
      }
    }(),
    Modal: function () {
      var e = "modal-backdrop",
          n = document.querySelectorAll('[data-gs-toggle="modal"]');

      if (n.length > 0) {
        n.forEach(function (n) {
          n.addEventListener("click", function (i) {
            var a = document.querySelector(o(n));

            if (a) {
              var _n3 = a.classList.contains(t);

              document.activeElement.blur(), document.body.style.overflow = "hidden";

              var _i2 = document.createElement("div");

              _i2.className = e, document.body.appendChild(_i2), a.style.display = "block", a.removeAttribute("aria-hidden"), a.setAttribute("aria-modal", !0), a.setAttribute("role", "dialog"), _n3 && (_i2.classList.add(t), _i2.offsetHeight), _i2.classList.add(s);

              var _o3 = function _o3() {
                a.classList.add(s), _i2.removeEventListener("transitionend", _o3);
              };

              _i2.addEventListener("transitionend", _o3);
            }

            i.preventDefault();
          });
        });

        var _i = function _i() {
          n.forEach(function (e) {
            var n = document.querySelector(o(e)),
                i = document.querySelector(".modal-backdrop");

            if (n) {
              var _e3 = n.classList.contains(t);

              if (n.classList.remove(s), n.setAttribute("aria-hidden", !0), n.removeAttribute("aria-modal"), n.removeAttribute("role"), document.body.style.overflow = "", _e3) {
                var _e4 = function _e4() {
                  i.classList.remove(s), n.removeEventListener("transitionend", _e4);
                };

                n.addEventListener("transitionend", _e4);

                var _t = function _t() {
                  n.style.display = "none", i.remove(), i.removeEventListener("transitionend", _t);
                };

                i.addEventListener("transitionend", _t);
              } else n.style.display = "none", i.remove();
            }
          });
        };

        document.addEventListener("click", function (e) {
          n.forEach(function (t) {
            var s = document.querySelector(o(t));
            e.target === s && _i();
          }), e.target.closest('[data-gs-dismiss="modal"]') && _i();
        }), document.addEventListener("keyup", function (e) {
          "Escape" === e.key && _i();
        });
      }
    }(),
    Tab: function () {
      var e = ".nav",
          i = '[data-gs-toggle="tab"]',
          a = document.querySelectorAll(e);
      a.length > 0 && a.forEach(function (a) {
        var r = a.querySelectorAll(i);
        r.forEach(function (c) {
          c.addEventListener("click", function (l) {
            var d = document.querySelector(o(c));

            if (a.matches(e)) {
              if (function () {
                r.forEach(function (e) {
                  e !== c && (e.classList.remove(n), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1));
                });
              }(), c.classList.add(n), "tab" === c.getAttribute("role") && c.setAttribute("aria-selected", !0), d) {
                var _e5 = d.classList.contains(s),
                    _o4 = d.parentElement;

                if (c.matches(i) && _o4) {
                  var _i3 = Array.from(_o4.children),
                      _a = _o4.querySelector(":scope > .active");

                  if (function () {
                    _i3.forEach(function (e) {
                      if (e !== d) if (e.classList.remove(s), e.classList.contains(t) && _a) {
                        var _t2 = function _t2() {
                          e.classList.remove(n), _a.removeEventListener("transitionend", _t2);
                        };

                        _a.addEventListener("transitionend", _t2);
                      } else e.classList.remove(n);
                    });
                  }(), !_e5) if (d.classList.contains(t) && _a) {
                    var _e6 = function _e6() {
                      d.classList.add(n), d.offsetHeight, d.classList.add(s), _a.removeEventListener("transitionend", _e6);
                    };

                    _a.addEventListener("transitionend", _e6);
                  } else d.classList.add(n, s);
                }
              }
            }

            l.preventDefault();
          });
        });
      });
    }()
  };
});