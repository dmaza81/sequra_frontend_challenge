import Rg from "react";
import Cb from "react-dom";
function XS(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
var kp = { exports: {} }, Fm = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ab;
function jS() {
  if (Ab) return Fm;
  Ab = 1;
  var L = Symbol.for("react.transitional.element"), vt = Symbol.for("react.fragment");
  function Pe(G, xe, st) {
    var kt = null;
    if (st !== void 0 && (kt = "" + st), xe.key !== void 0 && (kt = "" + xe.key), "key" in xe) {
      st = {};
      for (var vl in xe)
        vl !== "key" && (st[vl] = xe[vl]);
    } else st = xe;
    return xe = st.ref, {
      $$typeof: L,
      type: G,
      key: kt,
      ref: xe !== void 0 ? xe : null,
      props: st
    };
  }
  return Fm.Fragment = vt, Fm.jsx = Pe, Fm.jsxs = Pe, Fm;
}
var Im = {}, Rb;
function QS() {
  if (Rb) return Im;
  Rb = 1;
  var L = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return L.NODE_ENV !== "production" && function() {
    function vt(Y) {
      if (Y == null) return null;
      if (typeof Y == "function")
        return Y.$$typeof === rt ? null : Y.displayName || Y.name || null;
      if (typeof Y == "string") return Y;
      switch (Y) {
        case ua:
          return "Fragment";
        case Je:
          return "Profiler";
        case zt:
          return "StrictMode";
        case il:
          return "Suspense";
        case Ut:
          return "SuspenseList";
        case ae:
          return "Activity";
      }
      if (typeof Y == "object")
        switch (typeof Y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), Y.$$typeof) {
          case _t:
            return "Portal";
          case ul:
            return (Y.displayName || "Context") + ".Provider";
          case Gt:
            return (Y._context.displayName || "Context") + ".Consumer";
          case Ol:
            var $ = Y.render;
            return Y = Y.displayName, Y || (Y = $.displayName || $.name || "", Y = Y !== "" ? "ForwardRef(" + Y + ")" : "ForwardRef"), Y;
          case Me:
            return $ = Y.displayName || null, $ !== null ? $ : vt(Y.type) || "Memo";
          case ia:
            $ = Y._payload, Y = Y._init;
            try {
              return vt(Y($));
            } catch {
            }
        }
      return null;
    }
    function Pe(Y) {
      return "" + Y;
    }
    function G(Y) {
      try {
        Pe(Y);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var w = $.error, ye = typeof Symbol == "function" && Symbol.toStringTag && Y[Symbol.toStringTag] || Y.constructor.name || "Object";
        return w.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ye
        ), Pe(Y);
      }
    }
    function xe(Y) {
      if (Y === ua) return "<>";
      if (typeof Y == "object" && Y !== null && Y.$$typeof === ia)
        return "<...>";
      try {
        var $ = vt(Y);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function st() {
      var Y = Ae.A;
      return Y === null ? null : Y.getOwner();
    }
    function kt() {
      return Error("react-stack-top-frame");
    }
    function vl(Y) {
      if (Ue.call(Y, "key")) {
        var $ = Object.getOwnPropertyDescriptor(Y, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return Y.key !== void 0;
    }
    function $t(Y, $) {
      function w() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(Y, "key", {
        get: w,
        configurable: !0
      });
    }
    function k() {
      var Y = vt(this.type);
      return x[Y] || (x[Y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), Y = this.props.ref, Y !== void 0 ? Y : null;
    }
    function De(Y, $, w, ye, je, dt, _e, xu) {
      return w = dt.ref, Y = {
        $$typeof: at,
        type: Y,
        key: $,
        props: dt,
        _owner: je
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(Y, "ref", {
        enumerable: !1,
        get: k
      }) : Object.defineProperty(Y, "ref", { enumerable: !1, value: null }), Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(Y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(Y, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _e
      }), Object.defineProperty(Y, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xu
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    }
    function Yt(Y, $, w, ye, je, dt, _e, xu) {
      var ht = $.children;
      if (ht !== void 0)
        if (ye)
          if (Vt(ht)) {
            for (ye = 0; ye < ht.length; ye++)
              Ce(ht[ye]);
            Object.freeze && Object.freeze(ht);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Ce(ht);
      if (Ue.call($, "key")) {
        ht = vt(Y);
        var Yl = Object.keys($).filter(function(bc) {
          return bc !== "key";
        });
        ye = 0 < Yl.length ? "{key: someKey, " + Yl.join(": ..., ") + ": ...}" : "{key: someKey}", ne[ht + ye] || (Yl = 0 < Yl.length ? "{" + Yl.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ye,
          ht,
          Yl,
          ht
        ), ne[ht + ye] = !0);
      }
      if (ht = null, w !== void 0 && (G(w), ht = "" + w), vl($) && (G($.key), ht = "" + $.key), "key" in $) {
        w = {};
        for (var ca in $)
          ca !== "key" && (w[ca] = $[ca]);
      } else w = $;
      return ht && $t(
        w,
        typeof Y == "function" ? Y.displayName || Y.name || "Unknown" : Y
      ), De(
        Y,
        ht,
        dt,
        je,
        st(),
        w,
        _e,
        xu
      );
    }
    function Ce(Y) {
      typeof Y == "object" && Y !== null && Y.$$typeof === at && Y._store && (Y._store.validated = 1);
    }
    var we = Rg, at = Symbol.for("react.transitional.element"), _t = Symbol.for("react.portal"), ua = Symbol.for("react.fragment"), zt = Symbol.for("react.strict_mode"), Je = Symbol.for("react.profiler"), Gt = Symbol.for("react.consumer"), ul = Symbol.for("react.context"), Ol = Symbol.for("react.forward_ref"), il = Symbol.for("react.suspense"), Ut = Symbol.for("react.suspense_list"), Me = Symbol.for("react.memo"), ia = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), rt = Symbol.for("react.client.reference"), Ae = we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ue = Object.prototype.hasOwnProperty, Vt = Array.isArray, Xt = console.createTask ? console.createTask : function() {
      return null;
    };
    we = {
      "react-stack-bottom-frame": function(Y) {
        return Y();
      }
    };
    var _, x = {}, Z = we["react-stack-bottom-frame"].bind(
      we,
      kt
    )(), W = Xt(xe(kt)), ne = {};
    Im.Fragment = ua, Im.jsx = function(Y, $, w, ye, je) {
      var dt = 1e4 > Ae.recentlyCreatedOwnerStacks++;
      return Yt(
        Y,
        $,
        w,
        !1,
        ye,
        je,
        dt ? Error("react-stack-top-frame") : Z,
        dt ? Xt(xe(Y)) : W
      );
    }, Im.jsxs = function(Y, $, w, ye, je) {
      var dt = 1e4 > Ae.recentlyCreatedOwnerStacks++;
      return Yt(
        Y,
        $,
        w,
        !0,
        ye,
        je,
        dt ? Error("react-stack-top-frame") : Z,
        dt ? Xt(xe(Y)) : W
      );
    };
  }(), Im;
}
var zb;
function ZS() {
  if (zb) return kp.exports;
  zb = 1;
  var L = {};
  return L.NODE_ENV === "production" ? kp.exports = jS() : kp.exports = QS(), kp.exports;
}
var Ag = ZS(), $p = { exports: {} }, Pm = {}, Wp = { exports: {} }, Tg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Db;
function LS() {
  return Db || (Db = 1, function(L) {
    function vt(_, x) {
      var Z = _.length;
      _.push(x);
      e: for (; 0 < Z; ) {
        var W = Z - 1 >>> 1, ne = _[W];
        if (0 < xe(ne, x))
          _[W] = x, _[Z] = ne, Z = W;
        else break e;
      }
    }
    function Pe(_) {
      return _.length === 0 ? null : _[0];
    }
    function G(_) {
      if (_.length === 0) return null;
      var x = _[0], Z = _.pop();
      if (Z !== x) {
        _[0] = Z;
        e: for (var W = 0, ne = _.length, Y = ne >>> 1; W < Y; ) {
          var $ = 2 * (W + 1) - 1, w = _[$], ye = $ + 1, je = _[ye];
          if (0 > xe(w, Z))
            ye < ne && 0 > xe(je, w) ? (_[W] = je, _[ye] = Z, W = ye) : (_[W] = w, _[$] = Z, W = $);
          else if (ye < ne && 0 > xe(je, Z))
            _[W] = je, _[ye] = Z, W = ye;
          else break e;
        }
      }
      return x;
    }
    function xe(_, x) {
      var Z = _.sortIndex - x.sortIndex;
      return Z !== 0 ? Z : _.id - x.id;
    }
    if (L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var st = performance;
      L.unstable_now = function() {
        return st.now();
      };
    } else {
      var kt = Date, vl = kt.now();
      L.unstable_now = function() {
        return kt.now() - vl;
      };
    }
    var $t = [], k = [], De = 1, Yt = null, Ce = 3, we = !1, at = !1, _t = !1, ua = !1, zt = typeof setTimeout == "function" ? setTimeout : null, Je = typeof clearTimeout == "function" ? clearTimeout : null, Gt = typeof setImmediate < "u" ? setImmediate : null;
    function ul(_) {
      for (var x = Pe(k); x !== null; ) {
        if (x.callback === null) G(k);
        else if (x.startTime <= _)
          G(k), x.sortIndex = x.expirationTime, vt($t, x);
        else break;
        x = Pe(k);
      }
    }
    function Ol(_) {
      if (_t = !1, ul(_), !at)
        if (Pe($t) !== null)
          at = !0, il || (il = !0, Ae());
        else {
          var x = Pe(k);
          x !== null && Xt(Ol, x.startTime - _);
        }
    }
    var il = !1, Ut = -1, Me = 5, ia = -1;
    function ae() {
      return ua ? !0 : !(L.unstable_now() - ia < Me);
    }
    function rt() {
      if (ua = !1, il) {
        var _ = L.unstable_now();
        ia = _;
        var x = !0;
        try {
          e: {
            at = !1, _t && (_t = !1, Je(Ut), Ut = -1), we = !0;
            var Z = Ce;
            try {
              t: {
                for (ul(_), Yt = Pe($t); Yt !== null && !(Yt.expirationTime > _ && ae()); ) {
                  var W = Yt.callback;
                  if (typeof W == "function") {
                    Yt.callback = null, Ce = Yt.priorityLevel;
                    var ne = W(
                      Yt.expirationTime <= _
                    );
                    if (_ = L.unstable_now(), typeof ne == "function") {
                      Yt.callback = ne, ul(_), x = !0;
                      break t;
                    }
                    Yt === Pe($t) && G($t), ul(_);
                  } else G($t);
                  Yt = Pe($t);
                }
                if (Yt !== null) x = !0;
                else {
                  var Y = Pe(k);
                  Y !== null && Xt(
                    Ol,
                    Y.startTime - _
                  ), x = !1;
                }
              }
              break e;
            } finally {
              Yt = null, Ce = Z, we = !1;
            }
            x = void 0;
          }
        } finally {
          x ? Ae() : il = !1;
        }
      }
    }
    var Ae;
    if (typeof Gt == "function")
      Ae = function() {
        Gt(rt);
      };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), Vt = Ue.port2;
      Ue.port1.onmessage = rt, Ae = function() {
        Vt.postMessage(null);
      };
    } else
      Ae = function() {
        zt(rt, 0);
      };
    function Xt(_, x) {
      Ut = zt(function() {
        _(L.unstable_now());
      }, x);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, L.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Me = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return Ce;
    }, L.unstable_next = function(_) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var x = 3;
          break;
        default:
          x = Ce;
      }
      var Z = Ce;
      Ce = x;
      try {
        return _();
      } finally {
        Ce = Z;
      }
    }, L.unstable_requestPaint = function() {
      ua = !0;
    }, L.unstable_runWithPriority = function(_, x) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var Z = Ce;
      Ce = _;
      try {
        return x();
      } finally {
        Ce = Z;
      }
    }, L.unstable_scheduleCallback = function(_, x, Z) {
      var W = L.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? W + Z : W) : Z = W, _) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return ne = Z + ne, _ = {
        id: De++,
        callback: x,
        priorityLevel: _,
        startTime: Z,
        expirationTime: ne,
        sortIndex: -1
      }, Z > W ? (_.sortIndex = Z, vt(k, _), Pe($t) === null && _ === Pe(k) && (_t ? (Je(Ut), Ut = -1) : _t = !0, Xt(Ol, Z - W))) : (_.sortIndex = ne, vt($t, _), at || we || (at = !0, il || (il = !0, Ae()))), _;
    }, L.unstable_shouldYield = ae, L.unstable_wrapCallback = function(_) {
      var x = Ce;
      return function() {
        var Z = Ce;
        Ce = x;
        try {
          return _.apply(this, arguments);
        } finally {
          Ce = Z;
        }
      };
    };
  }(Tg)), Tg;
}
var Eg = {}, Ob;
function wS() {
  return Ob || (Ob = 1, function(L) {
    var vt = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    vt.NODE_ENV !== "production" && function() {
      function Pe() {
        if (il = !1, ae) {
          var x = L.unstable_now();
          Ue = x;
          var Z = !0;
          try {
            e: {
              ul = !1, Ol && (Ol = !1, Me(rt), rt = -1), Gt = !0;
              var W = Je;
              try {
                t: {
                  for (vl(x), zt = xe(at); zt !== null && !(zt.expirationTime > x && k()); ) {
                    var ne = zt.callback;
                    if (typeof ne == "function") {
                      zt.callback = null, Je = zt.priorityLevel;
                      var Y = ne(
                        zt.expirationTime <= x
                      );
                      if (x = L.unstable_now(), typeof Y == "function") {
                        zt.callback = Y, vl(x), Z = !0;
                        break t;
                      }
                      zt === xe(at) && st(at), vl(x);
                    } else st(at);
                    zt = xe(at);
                  }
                  if (zt !== null) Z = !0;
                  else {
                    var $ = xe(_t);
                    $ !== null && De(
                      $t,
                      $.startTime - x
                    ), Z = !1;
                  }
                }
                break e;
              } finally {
                zt = null, Je = W, Gt = !1;
              }
              Z = void 0;
            }
          } finally {
            Z ? Vt() : ae = !1;
          }
        }
      }
      function G(x, Z) {
        var W = x.length;
        x.push(Z);
        e: for (; 0 < W; ) {
          var ne = W - 1 >>> 1, Y = x[ne];
          if (0 < kt(Y, Z))
            x[ne] = Z, x[W] = Y, W = ne;
          else break e;
        }
      }
      function xe(x) {
        return x.length === 0 ? null : x[0];
      }
      function st(x) {
        if (x.length === 0) return null;
        var Z = x[0], W = x.pop();
        if (W !== Z) {
          x[0] = W;
          e: for (var ne = 0, Y = x.length, $ = Y >>> 1; ne < $; ) {
            var w = 2 * (ne + 1) - 1, ye = x[w], je = w + 1, dt = x[je];
            if (0 > kt(ye, W))
              je < Y && 0 > kt(dt, ye) ? (x[ne] = dt, x[je] = W, ne = je) : (x[ne] = ye, x[w] = W, ne = w);
            else if (je < Y && 0 > kt(dt, W))
              x[ne] = dt, x[je] = W, ne = je;
            else break e;
          }
        }
        return Z;
      }
      function kt(x, Z) {
        var W = x.sortIndex - Z.sortIndex;
        return W !== 0 ? W : x.id - Z.id;
      }
      function vl(x) {
        for (var Z = xe(_t); Z !== null; ) {
          if (Z.callback === null) st(_t);
          else if (Z.startTime <= x)
            st(_t), Z.sortIndex = Z.expirationTime, G(at, Z);
          else break;
          Z = xe(_t);
        }
      }
      function $t(x) {
        if (Ol = !1, vl(x), !ul)
          if (xe(at) !== null)
            ul = !0, ae || (ae = !0, Vt());
          else {
            var Z = xe(_t);
            Z !== null && De(
              $t,
              Z.startTime - x
            );
          }
      }
      function k() {
        return il ? !0 : !(L.unstable_now() - Ue < Ae);
      }
      function De(x, Z) {
        rt = Ut(function() {
          x(L.unstable_now());
        }, Z);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Yt = performance;
        L.unstable_now = function() {
          return Yt.now();
        };
      } else {
        var Ce = Date, we = Ce.now();
        L.unstable_now = function() {
          return Ce.now() - we;
        };
      }
      var at = [], _t = [], ua = 1, zt = null, Je = 3, Gt = !1, ul = !1, Ol = !1, il = !1, Ut = typeof setTimeout == "function" ? setTimeout : null, Me = typeof clearTimeout == "function" ? clearTimeout : null, ia = typeof setImmediate < "u" ? setImmediate : null, ae = !1, rt = -1, Ae = 5, Ue = -1;
      if (typeof ia == "function")
        var Vt = function() {
          ia(Pe);
        };
      else if (typeof MessageChannel < "u") {
        var Xt = new MessageChannel(), _ = Xt.port2;
        Xt.port1.onmessage = Pe, Vt = function() {
          _.postMessage(null);
        };
      } else
        Vt = function() {
          Ut(Pe, 0);
        };
      L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(x) {
        x.callback = null;
      }, L.unstable_forceFrameRate = function(x) {
        0 > x || 125 < x ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ae = 0 < x ? Math.floor(1e3 / x) : 5;
      }, L.unstable_getCurrentPriorityLevel = function() {
        return Je;
      }, L.unstable_next = function(x) {
        switch (Je) {
          case 1:
          case 2:
          case 3:
            var Z = 3;
            break;
          default:
            Z = Je;
        }
        var W = Je;
        Je = Z;
        try {
          return x();
        } finally {
          Je = W;
        }
      }, L.unstable_requestPaint = function() {
        il = !0;
      }, L.unstable_runWithPriority = function(x, Z) {
        switch (x) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            x = 3;
        }
        var W = Je;
        Je = x;
        try {
          return Z();
        } finally {
          Je = W;
        }
      }, L.unstable_scheduleCallback = function(x, Z, W) {
        var ne = L.unstable_now();
        switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? ne + W : ne) : W = ne, x) {
          case 1:
            var Y = -1;
            break;
          case 2:
            Y = 250;
            break;
          case 5:
            Y = 1073741823;
            break;
          case 4:
            Y = 1e4;
            break;
          default:
            Y = 5e3;
        }
        return Y = W + Y, x = {
          id: ua++,
          callback: Z,
          priorityLevel: x,
          startTime: W,
          expirationTime: Y,
          sortIndex: -1
        }, W > ne ? (x.sortIndex = W, G(_t, x), xe(at) === null && x === xe(_t) && (Ol ? (Me(rt), rt = -1) : Ol = !0, De($t, W - ne))) : (x.sortIndex = Y, G(at, x), ul || Gt || (ul = !0, ae || (ae = !0, Vt()))), x;
      }, L.unstable_shouldYield = k, L.unstable_wrapCallback = function(x) {
        var Z = Je;
        return function() {
          var W = Je;
          Je = Z;
          try {
            return x.apply(this, arguments);
          } finally {
            Je = W;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Eg)), Eg;
}
var Mb;
function Nb() {
  if (Mb) return Wp.exports;
  Mb = 1;
  var L = {};
  return L.NODE_ENV === "production" ? Wp.exports = LS() : Wp.exports = wS(), Wp.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ub;
function JS() {
  if (Ub) return Pm;
  Ub = 1;
  var L = Nb(), vt = Rg, Pe = Cb;
  function G(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function xe(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function st(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function kt(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function vl(l) {
    if (st(l) !== l)
      throw Error(G(188));
  }
  function $t(l) {
    var n = l.alternate;
    if (!n) {
      if (n = st(l), n === null) throw Error(G(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return vl(s), l;
          if (r === c) return vl(s), n;
          r = r.sibling;
        }
        throw Error(G(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var y = !1, m = s.child; m; ) {
          if (m === u) {
            y = !0, u = s, c = r;
            break;
          }
          if (m === c) {
            y = !0, c = s, u = r;
            break;
          }
          m = m.sibling;
        }
        if (!y) {
          for (m = r.child; m; ) {
            if (m === u) {
              y = !0, u = r, c = s;
              break;
            }
            if (m === c) {
              y = !0, c = r, u = s;
              break;
            }
            m = m.sibling;
          }
          if (!y) throw Error(G(189));
        }
      }
      if (u.alternate !== c) throw Error(G(190));
    }
    if (u.tag !== 3) throw Error(G(188));
    return u.stateNode.current === u ? l : n;
  }
  function k(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = k(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var De = Object.assign, Yt = Symbol.for("react.element"), Ce = Symbol.for("react.transitional.element"), we = Symbol.for("react.portal"), at = Symbol.for("react.fragment"), _t = Symbol.for("react.strict_mode"), ua = Symbol.for("react.profiler"), zt = Symbol.for("react.provider"), Je = Symbol.for("react.consumer"), Gt = Symbol.for("react.context"), ul = Symbol.for("react.forward_ref"), Ol = Symbol.for("react.suspense"), il = Symbol.for("react.suspense_list"), Ut = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), ia = Symbol.for("react.activity"), ae = Symbol.for("react.memo_cache_sentinel"), rt = Symbol.iterator;
  function Ae(l) {
    return l === null || typeof l != "object" ? null : (l = rt && l[rt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ue = Symbol.for("react.client.reference");
  function Vt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ue ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case at:
        return "Fragment";
      case ua:
        return "Profiler";
      case _t:
        return "StrictMode";
      case Ol:
        return "Suspense";
      case il:
        return "SuspenseList";
      case ia:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case we:
          return "Portal";
        case Gt:
          return (l.displayName || "Context") + ".Provider";
        case Je:
          return (l._context.displayName || "Context") + ".Consumer";
        case ul:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ut:
          return n = l.displayName || null, n !== null ? n : Vt(l.type) || "Memo";
        case Me:
          n = l._payload, l = l._init;
          try {
            return Vt(l(n));
          } catch {
          }
      }
    return null;
  }
  var Xt = Array.isArray, _ = vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, W = [], ne = -1;
  function Y(l) {
    return { current: l };
  }
  function $(l) {
    0 > ne || (l.current = W[ne], W[ne] = null, ne--);
  }
  function w(l, n) {
    ne++, W[ne] = l.current, l.current = n;
  }
  var ye = Y(null), je = Y(null), dt = Y(null), _e = Y(null);
  function xu(l, n) {
    switch (w(dt, n), w(je, l), w(ye, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Mn(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Mn(n), l = Su(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    $(ye), w(ye, l);
  }
  function ht() {
    $(ye), $(je), $(dt);
  }
  function Yl(l) {
    l.memoizedState !== null && w(_e, l);
    var n = ye.current, u = Su(n, l.type);
    n !== u && (w(je, l), w(ye, u));
  }
  function ca(l) {
    je.current === l && ($(ye), $(je)), _e.current === l && ($(_e), hl._currentValue = Z);
  }
  var bc = Object.prototype.hasOwnProperty, Ys = L.unstable_scheduleCallback, Ei = L.unstable_cancelCallback, Fp = L.unstable_shouldYield, Ip = L.unstable_requestPaint, gl = L.unstable_now, _s = L.unstable_getCurrentPriorityLevel, Sc = L.unstable_ImmediatePriority, t0 = L.unstable_UserBlockingPriority, $f = L.unstable_NormalPriority, l0 = L.unstable_LowPriority, Gs = L.unstable_IdlePriority, Wf = L.log, Pp = L.unstable_setDisableYieldValue, Tc = null, _l = null;
  function vn(l) {
    if (typeof Wf == "function" && Pp(l), _l && typeof _l.setStrictMode == "function")
      try {
        _l.setStrictMode(Tc, l);
      } catch {
      }
  }
  var Gl = Math.clz32 ? Math.clz32 : n0, a0 = Math.log, th = Math.LN2;
  function n0(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (a0(l) / th | 0) | 0;
  }
  var Vs = 256, Ec = 4194304;
  function Ra(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function gn(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var m = c & 134217727;
    return m !== 0 ? (c = m & ~r, c !== 0 ? s = Ra(c) : (y &= m, y !== 0 ? s = Ra(y) : u || (u = m & ~l, u !== 0 && (s = Ra(u))))) : (m = c & ~r, m !== 0 ? s = Ra(m) : y !== 0 ? s = Ra(y) : u || (u = c & ~l, u !== 0 && (s = Ra(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function Kn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Ac(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function jt() {
    var l = Vs;
    return Vs <<= 1, (Vs & 4194048) === 0 && (Vs = 256), l;
  }
  function Cu() {
    var l = Ec;
    return Ec <<= 1, (Ec & 62914560) === 0 && (Ec = 4194304), l;
  }
  function Nu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function bn(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function lh(l, n, u, c, s, r) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var m = l.entanglements, g = l.expirationTimes, R = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var V = 31 - Gl(u), j = 1 << V;
      m[V] = 0, g[V] = -1;
      var D = R[V];
      if (D !== null)
        for (R[V] = null, V = 0; V < D.length; V++) {
          var H = D[V];
          H !== null && (H.lane &= -536870913);
        }
      u &= ~j;
    }
    c !== 0 && ah(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(y & ~n));
  }
  function ah(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Gl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function Ff(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Gl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Rc(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ja(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function nh() {
    var l = x.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : sp(l.type));
  }
  function ev(l, n) {
    var u = x.p;
    try {
      return x.p = l, n();
    } finally {
      x.p = u;
    }
  }
  var Bu = Math.random().toString(36).slice(2), et = "__reactFiber$" + Bu, bl = "__reactProps$" + Bu, Ai = "__reactContainer$" + Bu, uh = "__reactEvents$" + Bu, u0 = "__reactListeners$" + Bu, i0 = "__reactHandles$" + Bu, If = "__reactResources$" + Bu, Pf = "__reactMarker$" + Bu;
  function ee(l) {
    delete l[et], delete l[bl], delete l[uh], delete l[u0], delete l[i0];
  }
  function qu(l) {
    var n = l[et];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Ai] || u[et]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = ic(l); l !== null; ) {
            if (u = l[et]) return u;
            l = ic(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function cl(l) {
    if (l = l[et] || l[Ai]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function zc(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(G(33));
  }
  function Dc(l) {
    var n = l[If];
    return n || (n = l[If] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Dt(l) {
    l[Pf] = !0;
  }
  var ih = /* @__PURE__ */ new Set(), eo = {};
  function Wt(l, n) {
    Ri(l, n), Ri(l + "Capture", n);
  }
  function Ri(l, n) {
    for (eo[l] = n, l = 0; l < n.length; l++)
      ih.add(n[l]);
  }
  var ch = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), fh = {}, Xs = {};
  function c0(l) {
    return bc.call(Xs, l) ? !0 : bc.call(fh, l) ? !1 : ch.test(l) ? Xs[l] = !0 : (fh[l] = !0, !1);
  }
  function to(l, n, u) {
    if (c0(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function kn(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Sn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var js, oh;
  function zi(l) {
    if (js === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        js = n && n[1] || "", oh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + js + l + oh;
  }
  var Qs = !1;
  function Ml(l, n) {
    if (!l || Qs) return "";
    Qs = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var j = function() {
                throw Error();
              };
              if (Object.defineProperty(j.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(j, []);
                } catch (H) {
                  var D = H;
                }
                Reflect.construct(l, [], j);
              } else {
                try {
                  j.call();
                } catch (H) {
                  D = H;
                }
                l.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                D = H;
              }
              (j = l()) && typeof j.catch == "function" && j.catch(function() {
              });
            }
          } catch (H) {
            if (H && D && typeof H.stack == "string")
              return [H.stack, D.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), y = r[0], m = r[1];
      if (y && m) {
        var g = y.split(`
`), R = m.split(`
`);
        for (s = c = 0; c < g.length && !g[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < R.length && !R[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === g.length || s === R.length)
          for (c = g.length - 1, s = R.length - 1; 1 <= c && 0 <= s && g[c] !== R[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (g[c] !== R[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || g[c] !== R[s]) {
                  var V = `
` + g[c].replace(" at new ", " at ");
                  return l.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", l.displayName)), V;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      Qs = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? zi(u) : "";
  }
  function Oc(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return zi(l.type);
      case 16:
        return zi("Lazy");
      case 13:
        return zi("Suspense");
      case 19:
        return zi("SuspenseList");
      case 0:
      case 15:
        return Ml(l.type, !1);
      case 11:
        return Ml(l.type.render, !1);
      case 1:
        return Ml(l.type, !0);
      case 31:
        return zi("Activity");
      default:
        return "";
    }
  }
  function Yu(l) {
    try {
      var n = "";
      do
        n += Oc(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function fa(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Mc(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Zs(l) {
    var n = Mc(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          c = "" + y, r.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function Uc(l) {
    l._valueTracker || (l._valueTracker = Zs(l));
  }
  function Hc(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = Mc(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function $n(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var sh = /[\n"\\]/g;
  function za(l) {
    return l.replace(
      sh,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function rh(l, n, u, c, s, r, y, m) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + fa(n)) : l.value !== "" + fa(n) && (l.value = "" + fa(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? lo(l, y, fa(n)) : u != null ? lo(l, y, fa(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.name = "" + fa(m) : l.removeAttribute("name");
  }
  function dh(l, n, u, c, s, r, y, m) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + fa(u) : "", n = n != null ? "" + fa(n) : u, m || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = m ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function lo(l, n, u) {
    n === "number" && $n(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function _u(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + fa(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function hh(l, n, u) {
    if (n != null && (n = "" + fa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + fa(u) : "";
  }
  function yh(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(G(92));
        if (Xt(c)) {
          if (1 < c.length) throw Error(G(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = fa(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Di(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var tv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function mh(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || tv.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Ls(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(G(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && mh(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && mh(l, r, n[r]);
  }
  function xc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ao = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), lv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function no(l) {
    return lv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var ws = null;
  function Oi(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Mi = null, Cc = null;
  function f0(l) {
    var n = cl(l);
    if (n && (l = n.stateNode)) {
      var u = l[bl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (rh(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + za(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[bl] || null;
                if (!s) throw Error(G(90));
                rh(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Hc(c);
          }
          break e;
        case "textarea":
          hh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && _u(l, !!u.multiple, n, !1);
      }
    }
  }
  var ph = !1;
  function o0(l, n, u) {
    if (ph) return l(n, u);
    ph = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (ph = !1, (Mi !== null || Cc !== null) && (Wo(), Mi && (n = Mi, l = Cc, Cc = Mi = null, f0(n), l)))
        for (n = 0; n < l.length; n++) f0(l[n]);
    }
  }
  function Wn(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[bl] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        G(231, n, typeof u)
      );
    return u;
  }
  var Qa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Js = !1;
  if (Qa)
    try {
      var Nc = {};
      Object.defineProperty(Nc, "passive", {
        get: function() {
          Js = !0;
        }
      }), window.addEventListener("test", Nc, Nc), window.removeEventListener("test", Nc, Nc);
    } catch {
      Js = !1;
    }
  var Da = null, Ks = null, Ui = null;
  function uo() {
    if (Ui) return Ui;
    var l, n = Ks, u = n.length, c, s = "value" in Da ? Da.value : Da.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === s[r - c]; c++) ;
    return Ui = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function io(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function fl() {
    return !0;
  }
  function s0() {
    return !1;
  }
  function Sl(l) {
    function n(u, c, s, r, y) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = y, this.currentTarget = null;
      for (var m in l)
        l.hasOwnProperty(m) && (u = l[m], this[m] = u ? u(r) : r[m]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? fl : s0, this.isPropagationStopped = s0, this;
    }
    return De(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = fl);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = fl);
      },
      persist: function() {
      },
      isPersistent: fl
    }), n;
  }
  var Gu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, co = Sl(Gu), fo = De({}, Gu, { view: 0, detail: 0 }), av = Sl(fo), ks, vh, Bc, $s = De({}, fo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ws,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Bc && (Bc && l.type === "mousemove" ? (ks = l.screenX - Bc.screenX, vh = l.screenY - Bc.screenY) : vh = ks = 0, Bc = l), ks);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : vh;
    }
  }), oo = Sl($s), r0 = De({}, $s, { dataTransfer: 0 }), d0 = Sl(r0), h0 = De({}, fo, { relatedTarget: 0 }), gh = Sl(h0), nv = De({}, Gu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), uv = Sl(nv), iv = De({}, Gu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), cv = Sl(iv), so = De({}, Gu, { data: 0 }), bh = Sl(so), y0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, m0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, p0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Sh(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = p0[l]) ? !!n[l] : !1;
  }
  function Ws() {
    return Sh;
  }
  var Hi = De({}, fo, {
    key: function(l) {
      if (l.key) {
        var n = y0[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = io(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? m0[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ws,
    charCode: function(l) {
      return l.type === "keypress" ? io(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? io(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), xi = Sl(Hi), Za = De({}, $s, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Vl = Sl(Za), Fs = De({}, fo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ws
  }), Is = Sl(Fs), Th = De({}, Gu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xl = Sl(Th), v0 = De({}, $s, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ps = Sl(v0), Ci = De({}, Gu, {
    newState: 0,
    oldState: 0
  }), Eh = Sl(Ci), g0 = [9, 13, 27, 32], er = Qa && "CompositionEvent" in window, Ni = null;
  Qa && "documentMode" in document && (Ni = document.documentMode);
  var fv = Qa && "TextEvent" in window && !Ni, tr = Qa && (!er || Ni && 8 < Ni && 11 >= Ni), Tn = " ", Ah = !1;
  function lr(l, n) {
    switch (l) {
      case "keyup":
        return g0.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ro(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Oa = !1;
  function Rh(l, n) {
    switch (l) {
      case "compositionend":
        return ro(n);
      case "keypress":
        return n.which !== 32 ? null : (Ah = !0, Tn);
      case "textInput":
        return l = n.data, l === Tn && Ah ? null : l;
      default:
        return null;
    }
  }
  function zh(l, n) {
    if (Oa)
      return l === "compositionend" || !er && lr(l, n) ? (l = uo(), Ui = Ks = Da = null, Oa = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return tr && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Bi = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Dh(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Bi[l.type] : n === "textarea";
  }
  function ar(l, n, u, c) {
    Mi ? Cc ? Cc.push(c) : Cc = [c] : Mi = c, n = di(n, "onChange"), 0 < n.length && (u = new co(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var qi = null, La = null;
  function Yi(l) {
    bu(l, 0);
  }
  function qc(l) {
    var n = zc(l);
    if (Hc(n)) return l;
  }
  function Vu(l, n) {
    if (l === "change") return n;
  }
  var Oh = !1;
  if (Qa) {
    var nr;
    if (Qa) {
      var _i = "oninput" in document;
      if (!_i) {
        var Yc = document.createElement("div");
        Yc.setAttribute("oninput", "return;"), _i = typeof Yc.oninput == "function";
      }
      nr = _i;
    } else nr = !1;
    Oh = nr && (!document.documentMode || 9 < document.documentMode);
  }
  function Mh() {
    qi && (qi.detachEvent("onpropertychange", _c), La = qi = null);
  }
  function _c(l) {
    if (l.propertyName === "value" && qc(La)) {
      var n = [];
      ar(
        n,
        La,
        l,
        Oi(l)
      ), o0(Yi, n);
    }
  }
  function b0(l, n, u) {
    l === "focusin" ? (Mh(), qi = n, La = u, qi.attachEvent("onpropertychange", _c)) : l === "focusout" && Mh();
  }
  function ur(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return qc(La);
  }
  function Xu(l, n) {
    if (l === "click") return qc(n);
  }
  function Fn(l, n) {
    if (l === "input" || l === "change")
      return qc(n);
  }
  function Uh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Ul = typeof Object.is == "function" ? Object.is : Uh;
  function In(l, n) {
    if (Ul(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!bc.call(n, s) || !Ul(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function ho(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ju(l, n) {
    var u = ho(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ho(u);
    }
  }
  function nt(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? nt(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function yo(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = $n(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = $n(l.document);
    }
    return n;
  }
  function ir(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Hh = Qa && "documentMode" in document && 11 >= document.documentMode, Ma = null, Gi = null, oa = null, Gc = !1;
  function Vc(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Gc || Ma == null || Ma !== $n(c) || (c = Ma, "selectionStart" in c && ir(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), oa && In(oa, c) || (oa = c, c = di(Gi, "onSelect"), 0 < c.length && (n = new co(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Ma)));
  }
  function Pn(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Qu = {
    animationend: Pn("Animation", "AnimationEnd"),
    animationiteration: Pn("Animation", "AnimationIteration"),
    animationstart: Pn("Animation", "AnimationStart"),
    transitionrun: Pn("Transition", "TransitionRun"),
    transitionstart: Pn("Transition", "TransitionStart"),
    transitioncancel: Pn("Transition", "TransitionCancel"),
    transitionend: Pn("Transition", "TransitionEnd")
  }, cr = {}, wa = {};
  Qa && (wa = document.createElement("div").style, "AnimationEvent" in window || (delete Qu.animationend.animation, delete Qu.animationiteration.animation, delete Qu.animationstart.animation), "TransitionEvent" in window || delete Qu.transitionend.transition);
  function Tl(l) {
    if (cr[l]) return cr[l];
    if (!Qu[l]) return l;
    var n = Qu[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in wa)
        return cr[l] = n[u];
    return l;
  }
  var mo = Tl("animationend"), S0 = Tl("animationiteration"), xh = Tl("animationstart"), ov = Tl("transitionrun"), Ch = Tl("transitionstart"), fr = Tl("transitioncancel"), Nh = Tl("transitionend"), Bh = /* @__PURE__ */ new Map(), or = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  or.push("scrollEnd");
  function jl(l, n) {
    Bh.set(l, n), Wt(n, [l]);
  }
  var qh = /* @__PURE__ */ new WeakMap();
  function sa(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = qh.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Yu(n)
      }, qh.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Yu(n)
    };
  }
  var ra = [], Zu = 0, po = 0;
  function Ja() {
    for (var l = Zu, n = po = Zu = 0; n < l; ) {
      var u = ra[n];
      ra[n++] = null;
      var c = ra[n];
      ra[n++] = null;
      var s = ra[n];
      ra[n++] = null;
      var r = ra[n];
      if (ra[n++] = null, c !== null && s !== null) {
        var y = c.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), c.pending = s;
      }
      r !== 0 && Xc(u, s, r);
    }
  }
  function Ka(l, n, u, c) {
    ra[Zu++] = l, ra[Zu++] = n, ra[Zu++] = u, ra[Zu++] = c, po |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Vi(l, n, u, c) {
    return Ka(l, n, u, c), Lu(l);
  }
  function eu(l, n) {
    return Ka(l, null, null, n), Lu(l);
  }
  function Xc(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Gl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Lu(l) {
    if (50 < Sf)
      throw Sf = 0, Wr = null, Error(G(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Xi = {};
  function sv(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ql(l, n, u, c) {
    return new sv(l, n, u, c);
  }
  function sr(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ka(l, n) {
    var u = l.alternate;
    return u === null ? (u = Ql(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function rr(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function me(l, n, u, c, s, r) {
    var y = 0;
    if (c = l, typeof l == "function") sr(l) && (y = 1);
    else if (typeof l == "string")
      y = ap(
        l,
        u,
        ye.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case ia:
          return l = Ql(31, u, n, s), l.elementType = ia, l.lanes = r, l;
        case at:
          return Q(u.children, s, r, n);
        case _t:
          y = 8, s |= 24;
          break;
        case ua:
          return l = Ql(12, u, n, s | 2), l.elementType = ua, l.lanes = r, l;
        case Ol:
          return l = Ql(13, u, n, s), l.elementType = Ol, l.lanes = r, l;
        case il:
          return l = Ql(19, u, n, s), l.elementType = il, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case zt:
              case Gt:
                y = 10;
                break e;
              case Je:
                y = 9;
                break e;
              case ul:
                y = 11;
                break e;
              case Ut:
                y = 14;
                break e;
              case Me:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            G(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Ql(y, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Q(l, n, u, c) {
    return l = Ql(7, l, c, n), l.lanes = u, l;
  }
  function wu(l, n, u) {
    return l = Ql(6, l, null, n), l.lanes = u, l;
  }
  function jc(l, n, u) {
    return n = Ql(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var tt = [], Ju = 0, Qc = null, vo = 0, Zl = [], Ua = 0, tu = null, $a = 1, Wa = "";
  function Ht(l, n) {
    tt[Ju++] = vo, tt[Ju++] = Qc, Qc = l, vo = n;
  }
  function Qe(l, n, u) {
    Zl[Ua++] = $a, Zl[Ua++] = Wa, Zl[Ua++] = tu, tu = l;
    var c = $a;
    l = Wa;
    var s = 32 - Gl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Gl(n) + s;
    if (30 < r) {
      var y = s - s % 5;
      r = (c & (1 << y) - 1).toString(32), c >>= y, s -= y, $a = 1 << 32 - Gl(n) + s | u << s | c, Wa = r + l;
    } else
      $a = 1 << r | u << s | c, Wa = l;
  }
  function go(l) {
    l.return !== null && (Ht(l, 1), Qe(l, 1, 0));
  }
  function ji(l) {
    for (; l === Qc; )
      Qc = tt[--Ju], tt[Ju] = null, vo = tt[--Ju], tt[Ju] = null;
    for (; l === tu; )
      tu = Zl[--Ua], Zl[Ua] = null, Wa = Zl[--Ua], Zl[Ua] = null, $a = Zl[--Ua], Zl[Ua] = null;
  }
  var St = null, Ke = null, pe = !1, lu = null, Hl = !1, bo = Error(G(519));
  function Fa(l) {
    var n = Error(G(418, ""));
    throw wc(sa(n, l)), bo;
  }
  function dr(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[et] = l, n[bl] = c, u) {
      case "dialog":
        re("cancel", n), re("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        re("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < fe.length; u++)
          re(fe[u], n);
        break;
      case "source":
        re("error", n);
        break;
      case "img":
      case "image":
      case "link":
        re("error", n), re("load", n);
        break;
      case "details":
        re("toggle", n);
        break;
      case "input":
        re("invalid", n), dh(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), Uc(n);
        break;
      case "select":
        re("invalid", n);
        break;
      case "textarea":
        re("invalid", n), yh(n, c.value, c.defaultValue, c.children), Uc(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || ep(n.textContent, u) ? (c.popover != null && (re("beforetoggle", n), re("toggle", n)), c.onScroll != null && re("scroll", n), c.onScrollEnd != null && re("scrollend", n), c.onClick != null && (n.onclick = ns), n = !0) : n = !1, n || Fa(l);
  }
  function So(l) {
    for (St = l.return; St; )
      switch (St.tag) {
        case 5:
        case 13:
          Hl = !1;
          return;
        case 27:
        case 3:
          Hl = !0;
          return;
        default:
          St = St.return;
      }
  }
  function Zc(l) {
    if (l !== St) return !1;
    if (!pe) return So(l), pe = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || uc(l.type, l.memoizedProps)), u = !u), u && Ke && Fa(l), So(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(G(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                Ke = rn(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        Ke = null;
      }
    } else
      n === 27 ? (n = Ke, rl(l.type) ? (l = tm, tm = null, Ke = l) : Ke = n) : Ke = St ? rn(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Lc() {
    Ke = St = null, pe = !1;
  }
  function Yh() {
    var l = lu;
    return l !== null && (Cl === null ? Cl = l : Cl.push.apply(
      Cl,
      l
    ), lu = null), l;
  }
  function wc(l) {
    lu === null ? lu = [l] : lu.push(l);
  }
  var hr = Y(null), au = null, Ia = null;
  function En(l, n, u) {
    w(hr, n._currentValue), n._currentValue = u;
  }
  function An(l) {
    l._currentValue = hr.current, $(hr);
  }
  function yr(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function mr(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var y = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var m = r;
          r = s;
          for (var g = 0; g < n.length; g++)
            if (m.context === n[g]) {
              r.lanes |= u, m = r.alternate, m !== null && (m.lanes |= u), yr(
                r.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          r = m.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(G(341));
        y.lanes |= u, r = y.alternate, r !== null && (r.lanes |= u), yr(y, u, l), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function To(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(G(387));
        if (y = y.memoizedProps, y !== null) {
          var m = s.type;
          Ul(s.pendingProps.value, y.value) || (l !== null ? l.push(m) : l = [m]);
        }
      } else if (s === _e.current) {
        if (y = s.alternate, y === null) throw Error(G(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(hl) : l = [hl]);
      }
      s = s.return;
    }
    l !== null && mr(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Eo(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Ul(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ku(l) {
    au = l, Ia = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function ol(l) {
    return _h(au, l);
  }
  function Jc(l, n) {
    return au === null && Ku(l), _h(l, n);
  }
  function _h(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Ia === null) {
      if (l === null) throw Error(G(308));
      Ia = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Ia = Ia.next = n;
    return u;
  }
  var T0 = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Kc = L.unstable_scheduleCallback, pr = L.unstable_NormalPriority, xt = {
    $$typeof: Gt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Gh() {
    return {
      controller: new T0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ku(l) {
    l.refCount--, l.refCount === 0 && Kc(pr, function() {
      l.controller.abort();
    });
  }
  var Rn = null, kc = 0, $u = 0, Ha = null;
  function Ll(l, n) {
    if (Rn === null) {
      var u = Rn = [];
      kc = 0, $u = id(), Ha = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return kc++, n.then(Ao, Ao), n;
  }
  function Ao() {
    if (--kc === 0 && Rn !== null) {
      Ha !== null && (Ha.status = "fulfilled");
      var l = Rn;
      Rn = null, $u = 0, Ha = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Vh(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var Xh = _.S;
  _.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Ll(l, n), Xh !== null && Xh(l, n);
  };
  var nu = Y(null);
  function $c() {
    var l = nu.current;
    return l !== null ? l : $e.pooledCache;
  }
  function Wc(l, n) {
    n === null ? w(nu, nu.current) : w(nu, n.pool);
  }
  function Ro() {
    var l = $c();
    return l === null ? null : { parent: xt._currentValue, pool: l };
  }
  var Qi = Error(G(460)), zo = Error(G(474)), Fc = Error(G(542)), vr = { then: function() {
  } };
  function jh(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ic() {
  }
  function Qh(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Ic, Ic), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Zh(l), l;
      default:
        if (typeof n.status == "string") n.then(Ic, Ic);
        else {
          if (l = $e, l !== null && 100 < l.shellSuspendCounter)
            throw Error(G(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Zh(l), l;
        }
        throw Pc = n, Qi;
    }
  }
  var Pc = null;
  function gr() {
    if (Pc === null) throw Error(G(459));
    var l = Pc;
    return Pc = null, l;
  }
  function Zh(l) {
    if (l === Qi || l === Fc)
      throw Error(G(483));
  }
  var uu = !1;
  function Do(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function br(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function iu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function wl(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (Ze & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Lu(l), Xc(l, null, u), n;
    }
    return Ka(l, c, n, u), Lu(l);
  }
  function Zi(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Ff(l, u);
    }
  }
  function Oo(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = y : r = r.next = y, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var Lh = !1;
  function Mo() {
    if (Lh) {
      var l = Ha;
      if (l !== null) throw l;
    }
  }
  function ef(l, n, u, c) {
    Lh = !1;
    var s = l.updateQueue;
    uu = !1;
    var r = s.firstBaseUpdate, y = s.lastBaseUpdate, m = s.shared.pending;
    if (m !== null) {
      s.shared.pending = null;
      var g = m, R = g.next;
      g.next = null, y === null ? r = R : y.next = R, y = g;
      var V = l.alternate;
      V !== null && (V = V.updateQueue, m = V.lastBaseUpdate, m !== y && (m === null ? V.firstBaseUpdate = R : m.next = R, V.lastBaseUpdate = g));
    }
    if (r !== null) {
      var j = s.baseState;
      y = 0, V = R = g = null, m = r;
      do {
        var D = m.lane & -536870913, H = D !== m.lane;
        if (H ? (He & D) === D : (c & D) === D) {
          D !== 0 && D === $u && (Lh = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var ue = l, le = m;
            D = n;
            var Xe = u;
            switch (le.tag) {
              case 1:
                if (ue = le.payload, typeof ue == "function") {
                  j = ue.call(Xe, j, D);
                  break e;
                }
                j = ue;
                break e;
              case 3:
                ue.flags = ue.flags & -65537 | 128;
              case 0:
                if (ue = le.payload, D = typeof ue == "function" ? ue.call(Xe, j, D) : ue, D == null) break e;
                j = De({}, j, D);
                break e;
              case 2:
                uu = !0;
            }
          }
          D = m.callback, D !== null && (l.flags |= 64, H && (l.flags |= 8192), H = s.callbacks, H === null ? s.callbacks = [D] : H.push(D));
        } else
          H = {
            lane: D,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, V === null ? (R = V = H, g = j) : V = V.next = H, y |= D;
        if (m = m.next, m === null) {
          if (m = s.shared.pending, m === null)
            break;
          H = m, m = H.next, H.next = null, s.lastBaseUpdate = H, s.shared.pending = null;
        }
      } while (!0);
      V === null && (g = j), s.baseState = g, s.firstBaseUpdate = R, s.lastBaseUpdate = V, r === null && (s.shared.lanes = 0), ui |= y, l.lanes = y, l.memoizedState = j;
    }
  }
  function tf(l, n) {
    if (typeof l != "function")
      throw Error(G(191, l));
    l.call(n);
  }
  function Sr(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        tf(u[l], n);
  }
  var cu = Y(null), Uo = Y(0);
  function wh(l, n) {
    l = pu, w(Uo, l), w(cu, n), pu = l | n.baseLanes;
  }
  function Qt() {
    w(Uo, pu), w(cu, cu.current);
  }
  function lf() {
    pu = Uo.current, $(cu), $(Uo);
  }
  var Pa = 0, se = null, Ge = null, gt = null, Li = !1, wi = !1, Jl = !1, Ho = 0, xa = 0, Kl = null, Tr = 0;
  function bt() {
    throw Error(G(321));
  }
  function xo(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Ul(l[u], n[u])) return !1;
    return !0;
  }
  function Er(l, n, u, c, s, r) {
    return Pa = r, se = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, _.H = l === null || l.memoizedState === null ? U0 : sy, Jl = !1, r = u(c, s), Jl = !1, wi && (r = Wu(
      n,
      u,
      c,
      s
    )), Jh(l), r;
  }
  function Jh(l) {
    _.H = jo;
    var n = Ge !== null && Ge.next !== null;
    if (Pa = 0, gt = Ge = se = null, Li = !1, xa = 0, Kl = null, n) throw Error(G(300));
    l === null || Se || (l = l.dependencies, l !== null && Eo(l) && (Se = !0));
  }
  function Wu(l, n, u, c) {
    se = l;
    var s = 0;
    do {
      if (wi && (Kl = null), xa = 0, wi = !1, 25 <= s) throw Error(G(301));
      if (s += 1, gt = Ge = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      _.H = H0, r = n(u, c);
    } while (wi);
    return r;
  }
  function E0() {
    var l = _.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Ji(n) : n, l = l.useState()[0], (Ge !== null ? Ge.memoizedState : null) !== l && (se.flags |= 1024), n;
  }
  function Ar() {
    var l = Ho !== 0;
    return Ho = 0, l;
  }
  function Rr(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function af(l) {
    if (Li) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Li = !1;
    }
    Pa = 0, gt = Ge = se = null, wi = !1, xa = Ho = 0, Kl = null;
  }
  function xl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return gt === null ? se.memoizedState = gt = l : gt = gt.next = l, gt;
  }
  function Tt() {
    if (Ge === null) {
      var l = se.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Ge.next;
    var n = gt === null ? se.memoizedState : gt.next;
    if (n !== null)
      gt = n, Ge = l;
    else {
      if (l === null)
        throw se.alternate === null ? Error(G(467)) : Error(G(310));
      Ge = l, l = {
        memoizedState: Ge.memoizedState,
        baseState: Ge.baseState,
        baseQueue: Ge.baseQueue,
        queue: Ge.queue,
        next: null
      }, gt === null ? se.memoizedState = gt = l : gt = gt.next = l;
    }
    return gt;
  }
  function Co() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ji(l) {
    var n = xa;
    return xa += 1, Kl === null && (Kl = []), l = Qh(Kl, l, n), n = se, (gt === null ? n.memoizedState : gt.next) === null && (n = n.alternate, _.H = n === null || n.memoizedState === null ? U0 : sy), l;
  }
  function zr(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ji(l);
      if (l.$$typeof === Gt) return ol(l);
    }
    throw Error(G(438, String(l)));
  }
  function Zt(l) {
    var n = null, u = se.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = se.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Co(), se.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = ae;
    return n.index++, u;
  }
  function zn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function No(l) {
    var n = Tt();
    return Dr(n, Ge, l);
  }
  function Dr(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(G(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = r.next, r.next = y;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var m = y = null, g = null, R = n, V = !1;
      do {
        var j = R.lane & -536870913;
        if (j !== R.lane ? (He & j) === j : (Pa & j) === j) {
          var D = R.revertLane;
          if (D === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), j === $u && (V = !0);
          else if ((Pa & D) === D) {
            R = R.next, D === $u && (V = !0);
            continue;
          } else
            j = {
              lane: 0,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, g === null ? (m = g = j, y = r) : g = g.next = j, se.lanes |= D, ui |= D;
          j = R.action, Jl && u(r, j), r = R.hasEagerState ? R.eagerState : u(r, j);
        } else
          D = {
            lane: j,
            revertLane: R.revertLane,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, g === null ? (m = g = D, y = r) : g = g.next = D, se.lanes |= j, ui |= j;
        R = R.next;
      } while (R !== null && R !== n);
      if (g === null ? y = r : g.next = m, !Ul(r, l.memoizedState) && (Se = !0, V && (u = Ha, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = y, l.baseQueue = g, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Or(l) {
    var n = Tt(), u = n.queue;
    if (u === null) throw Error(G(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var y = s = s.next;
      do
        r = l(r, y.action), y = y.next;
      while (y !== s);
      Ul(r, n.memoizedState) || (Se = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function Kh(l, n, u) {
    var c = se, s = Tt(), r = pe;
    if (r) {
      if (u === void 0) throw Error(G(407));
      u = u();
    } else u = n();
    var y = !Ul(
      (Ge || s).memoizedState,
      u
    );
    y && (s.memoizedState = u, Se = !0), s = s.queue;
    var m = kh.bind(null, c, s, l);
    if (fu(2048, 8, m, [l]), s.getSnapshot !== n || y || gt !== null && gt.memoizedState.tag & 1) {
      if (c.flags |= 2048, Fu(
        9,
        Ca(),
        Mr.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), $e === null) throw Error(G(349));
      r || (Pa & 124) !== 0 || Bo(c, n, u);
    }
    return u;
  }
  function Bo(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = se.updateQueue, n === null ? (n = Co(), se.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Mr(l, n, u, c) {
    n.value = u, n.getSnapshot = c, $h(n) && Wh(l);
  }
  function kh(l, n, u) {
    return u(function() {
      $h(n) && Wh(l);
    });
  }
  function $h(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Ul(l, u);
    } catch {
      return !0;
    }
  }
  function Wh(l) {
    var n = eu(l, 2);
    n !== null && ta(n, l, 2);
  }
  function qo(l) {
    var n = xl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Jl) {
        vn(!0);
        try {
          u();
        } finally {
          vn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zn,
      lastRenderedState: l
    }, n;
  }
  function Ur(l, n, u, c) {
    return l.baseState = u, Dr(
      l,
      Ge,
      typeof c == "function" ? c : zn
    );
  }
  function Fh(l, n, u, c, s) {
    if (cf(l)) throw Error(G(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          r.listeners.push(y);
        }
      };
      _.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Ih(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Ih(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = _.T, y = {};
      _.T = y;
      try {
        var m = u(s, c), g = _.S;
        g !== null && g(y, m), Hr(l, n, m);
      } catch (R) {
        _o(l, n, R);
      } finally {
        _.T = r;
      }
    } else
      try {
        r = u(s, c), Hr(l, n, r);
      } catch (R) {
        _o(l, n, R);
      }
  }
  function Hr(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Yo(l, n, c);
      },
      function(c) {
        return _o(l, n, c);
      }
    ) : Yo(l, n, u);
  }
  function Yo(l, n, u) {
    n.status = "fulfilled", n.value = u, Ph(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Ih(l, u)));
  }
  function _o(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, Ph(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function Ph(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function ey(l, n) {
    return n;
  }
  function xr(l, n) {
    if (pe) {
      var u = $e.formState;
      if (u !== null) {
        e: {
          var c = se;
          if (pe) {
            if (Ke) {
              t: {
                for (var s = Ke, r = Hl; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = rn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Ke = rn(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            Fa(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = xl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ey,
      lastRenderedState: n
    }, u.queue = c, u = Br.bind(
      null,
      se,
      c
    ), c.dispatch = u, c = qo(!1), r = Vo.bind(
      null,
      se,
      !1,
      c.queue
    ), c = xl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Fh.bind(
      null,
      se,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function ty(l) {
    var n = Tt();
    return Dn(n, Ge, l);
  }
  function Dn(l, n, u) {
    if (n = Dr(
      l,
      n,
      ey
    )[0], l = No(zn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Ji(n);
      } catch (y) {
        throw y === Qi ? Fc : y;
      }
    else c = n;
    n = Tt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (se.flags |= 2048, Fu(
      9,
      Ca(),
      ly.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function ly(l, n) {
    l.action = n;
  }
  function A0(l) {
    var n = Tt(), u = Ge;
    if (u !== null)
      return Dn(n, u, l);
    Tt(), n = n.memoizedState, u = Tt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Fu(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = se.updateQueue, n === null && (n = Co(), se.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Ca() {
    return { destroy: void 0, resource: void 0 };
  }
  function ay() {
    return Tt().memoizedState;
  }
  function Ki(l, n, u, c) {
    var s = xl();
    c = c === void 0 ? null : c, se.flags |= l, s.memoizedState = Fu(
      1 | n,
      Ca(),
      u,
      c
    );
  }
  function fu(l, n, u, c) {
    var s = Tt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Ge !== null && c !== null && xo(c, Ge.memoizedState.deps) ? s.memoizedState = Fu(n, r, u, c) : (se.flags |= l, s.memoizedState = Fu(
      1 | n,
      r,
      u,
      c
    ));
  }
  function ut(l, n) {
    Ki(8390656, 8, l, n);
  }
  function R0(l, n) {
    fu(2048, 8, l, n);
  }
  function z0(l, n) {
    return fu(4, 2, l, n);
  }
  function ny(l, n) {
    return fu(4, 4, l, n);
  }
  function en(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function uy(l, n, u) {
    u = u != null ? u.concat([l]) : null, fu(4, 4, en.bind(null, n, l), u);
  }
  function Go() {
  }
  function nf(l, n) {
    var u = Tt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && xo(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function ki(l, n) {
    var u = Tt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && xo(n, c[1]))
      return c[0];
    if (c = l(), Jl) {
      vn(!0);
      try {
        l();
      } finally {
        vn(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Cr(l, n, u) {
    return u === void 0 || (Pa & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = Q0(), se.lanes |= l, ui |= l, u);
  }
  function Nr(l, n, u, c) {
    return Ul(u, n) ? u : cu.current !== null ? (l = Cr(l, u, c), Ul(l, n) || (Se = !0), l) : (Pa & 42) === 0 ? (Se = !0, l.memoizedState = u) : (l = Q0(), se.lanes |= l, ui |= l, n);
  }
  function iy(l, n, u, c, s) {
    var r = x.p;
    x.p = r !== 0 && 8 > r ? r : 8;
    var y = _.T, m = {};
    _.T = m, Vo(l, !1, n, u);
    try {
      var g = s(), R = _.S;
      if (R !== null && R(m, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var V = Vh(
          g,
          c
        );
        uf(
          l,
          n,
          V,
          pa(l)
        );
      } else
        uf(
          l,
          n,
          c,
          pa(l)
        );
    } catch (j) {
      uf(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: j },
        pa()
      );
    } finally {
      x.p = r, _.T = y;
    }
  }
  function rv() {
  }
  function cy(l, n, u, c) {
    if (l.tag !== 5) throw Error(G(476));
    var s = fy(l).queue;
    iy(
      l,
      s,
      n,
      Z,
      u === null ? rv : function() {
        return D0(l), u(c);
      }
    );
  }
  function fy(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zn,
        lastRenderedState: Z
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function D0(l) {
    var n = fy(l).next.queue;
    uf(l, n, {}, pa());
  }
  function $i() {
    return ol(hl);
  }
  function tn() {
    return Tt().memoizedState;
  }
  function oy() {
    return Tt().memoizedState;
  }
  function dv(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = pa();
          l = iu(u);
          var c = wl(n, l, u);
          c !== null && (ta(c, n, u), Zi(c, n, u)), n = { cache: Gh() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function O0(l, n, u) {
    var c = pa();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cf(l) ? Xo(n, u) : (u = Vi(l, n, u, c), u !== null && (ta(u, l, c), M0(u, n, c)));
  }
  function Br(l, n, u) {
    var c = pa();
    uf(l, n, u, c);
  }
  function uf(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (cf(l)) Xo(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var y = n.lastRenderedState, m = r(y, u);
          if (s.hasEagerState = !0, s.eagerState = m, Ul(m, y))
            return Ka(l, n, s, 0), $e === null && Ja(), !1;
        } catch {
        } finally {
        }
      if (u = Vi(l, n, s, c), u !== null)
        return ta(u, l, c), M0(u, n, c), !0;
    }
    return !1;
  }
  function Vo(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: id(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cf(l)) {
      if (n) throw Error(G(479));
    } else
      n = Vi(
        l,
        u,
        c,
        2
      ), n !== null && ta(n, l, 2);
  }
  function cf(l) {
    var n = l.alternate;
    return l === se || n !== null && n === se;
  }
  function Xo(l, n) {
    wi = Li = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function M0(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Ff(l, u);
    }
  }
  var jo = {
    readContext: ol,
    use: zr,
    useCallback: bt,
    useContext: bt,
    useEffect: bt,
    useImperativeHandle: bt,
    useLayoutEffect: bt,
    useInsertionEffect: bt,
    useMemo: bt,
    useReducer: bt,
    useRef: bt,
    useState: bt,
    useDebugValue: bt,
    useDeferredValue: bt,
    useTransition: bt,
    useSyncExternalStore: bt,
    useId: bt,
    useHostTransitionStatus: bt,
    useFormState: bt,
    useActionState: bt,
    useOptimistic: bt,
    useMemoCache: bt,
    useCacheRefresh: bt
  }, U0 = {
    readContext: ol,
    use: zr,
    useCallback: function(l, n) {
      return xl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: ol,
    useEffect: ut,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Ki(
        4194308,
        4,
        en.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Ki(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Ki(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = xl();
      n = n === void 0 ? null : n;
      var c = l();
      if (Jl) {
        vn(!0);
        try {
          l();
        } finally {
          vn(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = xl();
      if (u !== void 0) {
        var s = u(n);
        if (Jl) {
          vn(!0);
          try {
            u(n);
          } finally {
            vn(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = O0.bind(
        null,
        se,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = xl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = qo(l);
      var n = l.queue, u = Br.bind(null, se, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Go,
    useDeferredValue: function(l, n) {
      var u = xl();
      return Cr(u, l, n);
    },
    useTransition: function() {
      var l = qo(!1);
      return l = iy.bind(
        null,
        se,
        l.queue,
        !0,
        !1
      ), xl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = se, s = xl();
      if (pe) {
        if (u === void 0)
          throw Error(G(407));
        u = u();
      } else {
        if (u = n(), $e === null)
          throw Error(G(349));
        (He & 124) !== 0 || Bo(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, ut(kh.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Fu(
        9,
        Ca(),
        Mr.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = xl(), n = $e.identifierPrefix;
      if (pe) {
        var u = Wa, c = $a;
        u = (c & ~(1 << 32 - Gl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = Ho++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = Tr++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: $i,
    useFormState: xr,
    useActionState: xr,
    useOptimistic: function(l) {
      var n = xl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Vo.bind(
        null,
        se,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Zt,
    useCacheRefresh: function() {
      return xl().memoizedState = dv.bind(
        null,
        se
      );
    }
  }, sy = {
    readContext: ol,
    use: zr,
    useCallback: nf,
    useContext: ol,
    useEffect: R0,
    useImperativeHandle: uy,
    useInsertionEffect: z0,
    useLayoutEffect: ny,
    useMemo: ki,
    useReducer: No,
    useRef: ay,
    useState: function() {
      return No(zn);
    },
    useDebugValue: Go,
    useDeferredValue: function(l, n) {
      var u = Tt();
      return Nr(
        u,
        Ge.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = No(zn)[0], n = Tt().memoizedState;
      return [
        typeof l == "boolean" ? l : Ji(l),
        n
      ];
    },
    useSyncExternalStore: Kh,
    useId: tn,
    useHostTransitionStatus: $i,
    useFormState: ty,
    useActionState: ty,
    useOptimistic: function(l, n) {
      var u = Tt();
      return Ur(u, Ge, l, n);
    },
    useMemoCache: Zt,
    useCacheRefresh: oy
  }, H0 = {
    readContext: ol,
    use: zr,
    useCallback: nf,
    useContext: ol,
    useEffect: R0,
    useImperativeHandle: uy,
    useInsertionEffect: z0,
    useLayoutEffect: ny,
    useMemo: ki,
    useReducer: Or,
    useRef: ay,
    useState: function() {
      return Or(zn);
    },
    useDebugValue: Go,
    useDeferredValue: function(l, n) {
      var u = Tt();
      return Ge === null ? Cr(u, l, n) : Nr(
        u,
        Ge.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Or(zn)[0], n = Tt().memoizedState;
      return [
        typeof l == "boolean" ? l : Ji(l),
        n
      ];
    },
    useSyncExternalStore: Kh,
    useId: tn,
    useHostTransitionStatus: $i,
    useFormState: A0,
    useActionState: A0,
    useOptimistic: function(l, n) {
      var u = Tt();
      return Ge !== null ? Ur(u, Ge, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Zt,
    useCacheRefresh: oy
  }, kl = null, ff = 0;
  function Qo(l) {
    var n = ff;
    return ff += 1, kl === null && (kl = []), Qh(kl, l, n);
  }
  function Zo(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function of(l, n) {
    throw n.$$typeof === Yt ? Error(G(525)) : (l = Object.prototype.toString.call(n), Error(
      G(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function $l(l) {
    var n = l._init;
    return n(l._payload);
  }
  function ry(l) {
    function n(A, E) {
      if (l) {
        var z = A.deletions;
        z === null ? (A.deletions = [E], A.flags |= 16) : z.push(E);
      }
    }
    function u(A, E) {
      if (!l) return null;
      for (; E !== null; )
        n(A, E), E = E.sibling;
      return null;
    }
    function c(A) {
      for (var E = /* @__PURE__ */ new Map(); A !== null; )
        A.key !== null ? E.set(A.key, A) : E.set(A.index, A), A = A.sibling;
      return E;
    }
    function s(A, E) {
      return A = ka(A, E), A.index = 0, A.sibling = null, A;
    }
    function r(A, E, z) {
      return A.index = z, l ? (z = A.alternate, z !== null ? (z = z.index, z < E ? (A.flags |= 67108866, E) : z) : (A.flags |= 67108866, E)) : (A.flags |= 1048576, E);
    }
    function y(A) {
      return l && A.alternate === null && (A.flags |= 67108866), A;
    }
    function m(A, E, z, X) {
      return E === null || E.tag !== 6 ? (E = wu(z, A.mode, X), E.return = A, E) : (E = s(E, z), E.return = A, E);
    }
    function g(A, E, z, X) {
      var F = z.type;
      return F === at ? V(
        A,
        E,
        z.props.children,
        X,
        z.key
      ) : E !== null && (E.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Me && $l(F) === E.type) ? (E = s(E, z.props), Zo(E, z), E.return = A, E) : (E = me(
        z.type,
        z.key,
        z.props,
        null,
        A.mode,
        X
      ), Zo(E, z), E.return = A, E);
    }
    function R(A, E, z, X) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = jc(z, A.mode, X), E.return = A, E) : (E = s(E, z.children || []), E.return = A, E);
    }
    function V(A, E, z, X, F) {
      return E === null || E.tag !== 7 ? (E = Q(
        z,
        A.mode,
        X,
        F
      ), E.return = A, E) : (E = s(E, z), E.return = A, E);
    }
    function j(A, E, z) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = wu(
          "" + E,
          A.mode,
          z
        ), E.return = A, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Ce:
            return z = me(
              E.type,
              E.key,
              E.props,
              null,
              A.mode,
              z
            ), Zo(z, E), z.return = A, z;
          case we:
            return E = jc(
              E,
              A.mode,
              z
            ), E.return = A, E;
          case Me:
            var X = E._init;
            return E = X(E._payload), j(A, E, z);
        }
        if (Xt(E) || Ae(E))
          return E = Q(
            E,
            A.mode,
            z,
            null
          ), E.return = A, E;
        if (typeof E.then == "function")
          return j(A, Qo(E), z);
        if (E.$$typeof === Gt)
          return j(
            A,
            Jc(A, E),
            z
          );
        of(A, E);
      }
      return null;
    }
    function D(A, E, z, X) {
      var F = E !== null ? E.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return F !== null ? null : m(A, E, "" + z, X);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ce:
            return z.key === F ? g(A, E, z, X) : null;
          case we:
            return z.key === F ? R(A, E, z, X) : null;
          case Me:
            return F = z._init, z = F(z._payload), D(A, E, z, X);
        }
        if (Xt(z) || Ae(z))
          return F !== null ? null : V(A, E, z, X, null);
        if (typeof z.then == "function")
          return D(
            A,
            E,
            Qo(z),
            X
          );
        if (z.$$typeof === Gt)
          return D(
            A,
            E,
            Jc(A, z),
            X
          );
        of(A, z);
      }
      return null;
    }
    function H(A, E, z, X, F) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return A = A.get(z) || null, m(E, A, "" + X, F);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case Ce:
            return A = A.get(
              X.key === null ? z : X.key
            ) || null, g(E, A, X, F);
          case we:
            return A = A.get(
              X.key === null ? z : X.key
            ) || null, R(E, A, X, F);
          case Me:
            var ve = X._init;
            return X = ve(X._payload), H(
              A,
              E,
              z,
              X,
              F
            );
        }
        if (Xt(X) || Ae(X))
          return A = A.get(z) || null, V(E, A, X, F, null);
        if (typeof X.then == "function")
          return H(
            A,
            E,
            z,
            Qo(X),
            F
          );
        if (X.$$typeof === Gt)
          return H(
            A,
            E,
            z,
            Jc(E, X),
            F
          );
        of(E, X);
      }
      return null;
    }
    function ue(A, E, z, X) {
      for (var F = null, ve = null, te = E, ie = E = 0, ll = null; te !== null && ie < z.length; ie++) {
        te.index > ie ? (ll = te, te = null) : ll = te.sibling;
        var qe = D(
          A,
          te,
          z[ie],
          X
        );
        if (qe === null) {
          te === null && (te = ll);
          break;
        }
        l && te && qe.alternate === null && n(A, te), E = r(qe, E, ie), ve === null ? F = qe : ve.sibling = qe, ve = qe, te = ll;
      }
      if (ie === z.length)
        return u(A, te), pe && Ht(A, ie), F;
      if (te === null) {
        for (; ie < z.length; ie++)
          te = j(A, z[ie], X), te !== null && (E = r(
            te,
            E,
            ie
          ), ve === null ? F = te : ve.sibling = te, ve = te);
        return pe && Ht(A, ie), F;
      }
      for (te = c(te); ie < z.length; ie++)
        ll = H(
          te,
          A,
          ie,
          z[ie],
          X
        ), ll !== null && (l && ll.alternate !== null && te.delete(
          ll.key === null ? ie : ll.key
        ), E = r(
          ll,
          E,
          ie
        ), ve === null ? F = ll : ve.sibling = ll, ve = ll);
      return l && te.forEach(function(qn) {
        return n(A, qn);
      }), pe && Ht(A, ie), F;
    }
    function le(A, E, z, X) {
      if (z == null) throw Error(G(151));
      for (var F = null, ve = null, te = E, ie = E = 0, ll = null, qe = z.next(); te !== null && !qe.done; ie++, qe = z.next()) {
        te.index > ie ? (ll = te, te = null) : ll = te.sibling;
        var qn = D(A, te, qe.value, X);
        if (qn === null) {
          te === null && (te = ll);
          break;
        }
        l && te && qn.alternate === null && n(A, te), E = r(qn, E, ie), ve === null ? F = qn : ve.sibling = qn, ve = qn, te = ll;
      }
      if (qe.done)
        return u(A, te), pe && Ht(A, ie), F;
      if (te === null) {
        for (; !qe.done; ie++, qe = z.next())
          qe = j(A, qe.value, X), qe !== null && (E = r(qe, E, ie), ve === null ? F = qe : ve.sibling = qe, ve = qe);
        return pe && Ht(A, ie), F;
      }
      for (te = c(te); !qe.done; ie++, qe = z.next())
        qe = H(te, A, ie, qe.value, X), qe !== null && (l && qe.alternate !== null && te.delete(qe.key === null ? ie : qe.key), E = r(qe, E, ie), ve === null ? F = qe : ve.sibling = qe, ve = qe);
      return l && te.forEach(function(Ev) {
        return n(A, Ev);
      }), pe && Ht(A, ie), F;
    }
    function Xe(A, E, z, X) {
      if (typeof z == "object" && z !== null && z.type === at && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Ce:
            e: {
              for (var F = z.key; E !== null; ) {
                if (E.key === F) {
                  if (F = z.type, F === at) {
                    if (E.tag === 7) {
                      u(
                        A,
                        E.sibling
                      ), X = s(
                        E,
                        z.props.children
                      ), X.return = A, A = X;
                      break e;
                    }
                  } else if (E.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Me && $l(F) === E.type) {
                    u(
                      A,
                      E.sibling
                    ), X = s(E, z.props), Zo(X, z), X.return = A, A = X;
                    break e;
                  }
                  u(A, E);
                  break;
                } else n(A, E);
                E = E.sibling;
              }
              z.type === at ? (X = Q(
                z.props.children,
                A.mode,
                X,
                z.key
              ), X.return = A, A = X) : (X = me(
                z.type,
                z.key,
                z.props,
                null,
                A.mode,
                X
              ), Zo(X, z), X.return = A, A = X);
            }
            return y(A);
          case we:
            e: {
              for (F = z.key; E !== null; ) {
                if (E.key === F)
                  if (E.tag === 4 && E.stateNode.containerInfo === z.containerInfo && E.stateNode.implementation === z.implementation) {
                    u(
                      A,
                      E.sibling
                    ), X = s(E, z.children || []), X.return = A, A = X;
                    break e;
                  } else {
                    u(A, E);
                    break;
                  }
                else n(A, E);
                E = E.sibling;
              }
              X = jc(z, A.mode, X), X.return = A, A = X;
            }
            return y(A);
          case Me:
            return F = z._init, z = F(z._payload), Xe(
              A,
              E,
              z,
              X
            );
        }
        if (Xt(z))
          return ue(
            A,
            E,
            z,
            X
          );
        if (Ae(z)) {
          if (F = Ae(z), typeof F != "function") throw Error(G(150));
          return z = F.call(z), le(
            A,
            E,
            z,
            X
          );
        }
        if (typeof z.then == "function")
          return Xe(
            A,
            E,
            Qo(z),
            X
          );
        if (z.$$typeof === Gt)
          return Xe(
            A,
            E,
            Jc(A, z),
            X
          );
        of(A, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, E !== null && E.tag === 6 ? (u(A, E.sibling), X = s(E, z), X.return = A, A = X) : (u(A, E), X = wu(z, A.mode, X), X.return = A, A = X), y(A)) : u(A, E);
    }
    return function(A, E, z, X) {
      try {
        ff = 0;
        var F = Xe(
          A,
          E,
          z,
          X
        );
        return kl = null, F;
      } catch (te) {
        if (te === Qi || te === Fc) throw te;
        var ve = Ql(29, te, null, A.mode);
        return ve.lanes = X, ve.return = A, ve;
      } finally {
      }
    };
  }
  var Ft = ry(!0), dy = ry(!1), Ct = Y(null), ln = null;
  function Wl(l) {
    var n = l.alternate;
    w(Ot, Ot.current & 1), w(Ct, l), ln === null && (n === null || cu.current !== null || n.memoizedState !== null) && (ln = l);
  }
  function hy(l) {
    if (l.tag === 22) {
      if (w(Ot, Ot.current), w(Ct, l), ln === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (ln = l);
      }
    } else El();
  }
  function El() {
    w(Ot, Ot.current), w(Ct, Ct.current);
  }
  function an(l) {
    $(Ct), ln === l && (ln = null), $(Ot);
  }
  var Ot = Y(0);
  function da(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Py(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function qr(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : De({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Iu = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = pa(), s = iu(c);
      s.payload = n, u != null && (s.callback = u), n = wl(l, s, c), n !== null && (ta(n, l, c), Zi(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = pa(), s = iu(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = wl(l, s, c), n !== null && (ta(n, l, c), Zi(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = pa(), c = iu(u);
      c.tag = 2, n != null && (c.callback = n), n = wl(l, c, u), n !== null && (ta(n, l, u), Zi(n, l, u));
    }
  };
  function yy(l, n, u, c, s, r, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, y) : n.prototype && n.prototype.isPureReactComponent ? !In(u, c) || !In(s, r) : !0;
  }
  function sf(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Iu.enqueueReplaceState(n, n.state, null);
  }
  function Na(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = De({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var Lo = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function my(l) {
    Lo(l);
  }
  function rf(l) {
    console.error(l);
  }
  function py(l) {
    Lo(l);
  }
  function Wi(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function vy(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Yr(l, n, u) {
    return u = iu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Wi(l, n);
    }, u;
  }
  function x0(l) {
    return l = iu(l), l.tag = 3, l;
  }
  function gy(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        vy(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      vy(n, u, c), typeof s != "function" && (On === null ? On = /* @__PURE__ */ new Set([this]) : On.add(this));
      var m = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function ha(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && To(
        n,
        u,
        s,
        !0
      ), u = Ct.current, u !== null) {
        switch (u.tag) {
          case 13:
            return ln === null ? oi() : u.alternate === null && At === 0 && (At = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === vr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Io(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === vr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Io(l, c, s)), !1;
        }
        throw Error(G(435, u.tag));
      }
      return Io(l, c, s), oi(), !1;
    }
    if (pe)
      return n = Ct.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== bo && (l = Error(G(422), { cause: c }), wc(sa(l, u)))) : (c !== bo && (n = Error(G(423), {
        cause: c
      }), wc(
        sa(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = sa(c, u), s = Yr(
        l.stateNode,
        c,
        s
      ), Oo(l, s), At !== 4 && (At = 2)), !1;
    var r = Error(G(520), { cause: c });
    if (r = sa(r, u), $o === null ? $o = [r] : $o.push(r), At !== 4 && (At = 2), n === null) return !0;
    c = sa(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = Yr(u.stateNode, c, l), Oo(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (On === null || !On.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = x0(s), gy(
              s,
              l,
              u,
              c
            ), Oo(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var by = Error(G(461)), Se = !1;
  function It(l, n, u, c) {
    n.child = l === null ? dy(n, null, u, c) : Ft(
      n,
      l.child,
      u,
      c
    );
  }
  function Sy(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var m in c)
        m !== "ref" && (y[m] = c[m]);
    } else y = c;
    return Ku(n), c = Er(
      l,
      n,
      u,
      y,
      r,
      s
    ), m = Ar(), l !== null && !Se ? (Rr(l, n, s), nn(l, n, s)) : (pe && m && go(n), n.flags |= 1, It(l, n, c, s), n.child);
  }
  function C0(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !sr(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, ou(
        l,
        n,
        r,
        c,
        s
      )) : (l = me(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Qr(l, s)) {
      var y = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : In, u(y, c) && l.ref === n.ref)
        return nn(l, n, s);
    }
    return n.flags |= 1, l = ka(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function ou(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (In(r, c) && l.ref === n.ref)
        if (Se = !1, n.pendingProps = c = r, Qr(l, s))
          (l.flags & 131072) !== 0 && (Se = !0);
        else
          return n.lanes = l.lanes, nn(l, n, s);
    }
    return Gr(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Fi(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return _r(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Wc(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? wh(n, r) : Qt(), hy(n);
      else
        return n.lanes = n.childLanes = 536870912, _r(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (Wc(n, r.cachePool), wh(n, r), El(), n.memoizedState = null) : (l !== null && Wc(n, null), Qt(), El());
    return It(l, n, s, u), n.child;
  }
  function _r(l, n, u, c) {
    var s = $c();
    return s = s === null ? null : { parent: xt._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Wc(n, null), Qt(), hy(n), l !== null && To(l, n, c, !0), null;
  }
  function su(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(G(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Gr(l, n, u, c, s) {
    return Ku(n), u = Er(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Ar(), l !== null && !Se ? (Rr(l, n, s), nn(l, n, s)) : (pe && c && go(n), n.flags |= 1, It(l, n, u, s), n.child);
  }
  function Ty(l, n, u, c, s, r) {
    return Ku(n), n.updateQueue = null, u = Wu(
      n,
      c,
      u,
      s
    ), Jh(l), c = Ar(), l !== null && !Se ? (Rr(l, n, r), nn(l, n, r)) : (pe && c && go(n), n.flags |= 1, It(l, n, u, r), n.child);
  }
  function Ey(l, n, u, c, s) {
    if (Ku(n), n.stateNode === null) {
      var r = Xi, y = u.contextType;
      typeof y == "object" && y !== null && (r = ol(y)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Iu, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Do(n), y = u.contextType, r.context = typeof y == "object" && y !== null ? ol(y) : Xi, r.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (qr(
        n,
        u,
        y,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (y = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), y !== r.state && Iu.enqueueReplaceState(r, r.state, null), ef(n, c, r, s), Mo(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var m = n.memoizedProps, g = Na(u, m);
      r.props = g;
      var R = r.context, V = u.contextType;
      y = Xi, typeof V == "object" && V !== null && (y = ol(V));
      var j = u.getDerivedStateFromProps;
      V = typeof j == "function" || typeof r.getSnapshotBeforeUpdate == "function", m = n.pendingProps !== m, V || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m || R !== y) && sf(
        n,
        r,
        c,
        y
      ), uu = !1;
      var D = n.memoizedState;
      r.state = D, ef(n, c, r, s), Mo(), R = n.memoizedState, m || D !== R || uu ? (typeof j == "function" && (qr(
        n,
        u,
        j,
        c
      ), R = n.memoizedState), (g = uu || yy(
        n,
        u,
        g,
        c,
        D,
        R,
        y
      )) ? (V || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = R), r.props = c, r.state = R, r.context = y, c = g) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, br(l, n), y = n.memoizedProps, V = Na(u, y), r.props = V, j = n.pendingProps, D = r.context, R = u.contextType, g = Xi, typeof R == "object" && R !== null && (g = ol(R)), m = u.getDerivedStateFromProps, (R = typeof m == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y !== j || D !== g) && sf(
        n,
        r,
        c,
        g
      ), uu = !1, D = n.memoizedState, r.state = D, ef(n, c, r, s), Mo();
      var H = n.memoizedState;
      y !== j || D !== H || uu || l !== null && l.dependencies !== null && Eo(l.dependencies) ? (typeof m == "function" && (qr(
        n,
        u,
        m,
        c
      ), H = n.memoizedState), (V = uu || yy(
        n,
        u,
        V,
        c,
        D,
        H,
        g
      ) || l !== null && l.dependencies !== null && Eo(l.dependencies)) ? (R || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, H, g), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        H,
        g
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && D === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && D === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = H), r.props = c, r.state = H, r.context = g, c = V) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && D === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && D === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, su(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = Ft(
      n,
      l.child,
      null,
      s
    ), n.child = Ft(
      n,
      null,
      u,
      s
    )) : It(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = nn(
      l,
      n,
      s
    ), l;
  }
  function Vr(l, n, u, c) {
    return Lc(), n.flags |= 256, It(l, n, u, c), n.child;
  }
  var wo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Xr(l) {
    return { baseLanes: l, cachePool: Ro() };
  }
  function Ay(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Lt), l;
  }
  function N0(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, y;
    if ((y = r) || (y = l !== null && l.memoizedState === null ? !1 : (Ot.current & 2) !== 0), y && (s = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (pe) {
        if (s ? Wl(n) : El(), pe) {
          var m = Ke, g;
          if (g = m) {
            e: {
              for (g = m, m = Hl; g.nodeType !== 8; ) {
                if (!m) {
                  m = null;
                  break e;
                }
                if (g = rn(
                  g.nextSibling
                ), g === null) {
                  m = null;
                  break e;
                }
              }
              m = g;
            }
            m !== null ? (n.memoizedState = {
              dehydrated: m,
              treeContext: tu !== null ? { id: $a, overflow: Wa } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, g = Ql(
              18,
              null,
              null,
              0
            ), g.stateNode = m, g.return = n, n.child = g, St = n, Ke = null, g = !0) : g = !1;
          }
          g || Fa(n);
        }
        if (m = n.memoizedState, m !== null && (m = m.dehydrated, m !== null))
          return Py(m) ? n.lanes = 32 : n.lanes = 536870912, null;
        an(n);
      }
      return m = c.children, c = c.fallback, s ? (El(), s = n.mode, m = Jo(
        { mode: "hidden", children: m },
        s
      ), c = Q(
        c,
        s,
        u,
        null
      ), m.return = n, c.return = n, m.sibling = c, n.child = m, s = n.child, s.memoizedState = Xr(u), s.childLanes = Ay(
        l,
        y,
        u
      ), n.memoizedState = wo, c) : (Wl(n), jr(n, m));
    }
    if (g = l.memoizedState, g !== null && (m = g.dehydrated, m !== null)) {
      if (r)
        n.flags & 256 ? (Wl(n), n.flags &= -257, n = Ry(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (El(), n.child = l.child, n.flags |= 128, n = null) : (El(), s = c.fallback, m = n.mode, c = Jo(
          { mode: "visible", children: c.children },
          m
        ), s = Q(
          s,
          m,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, Ft(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Xr(u), c.childLanes = Ay(
          l,
          y,
          u
        ), n.memoizedState = wo, n = s);
      else if (Wl(n), Py(m)) {
        if (y = m.nextSibling && m.nextSibling.dataset, y) var R = y.dgst;
        y = R, c = Error(G(419)), c.stack = "", c.digest = y, wc({ value: c, source: null, stack: null }), n = Ry(
          l,
          n,
          u
        );
      } else if (Se || To(l, n, u, !1), y = (u & l.childLanes) !== 0, Se || y) {
        if (y = $e, y !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : Rc(c), c = (c & (y.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== g.retryLane))
          throw g.retryLane = c, eu(l, c), ta(y, l, c), by;
        m.data === "$?" || oi(), n = Ry(
          l,
          n,
          u
        );
      } else
        m.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = g.treeContext, Ke = rn(
          m.nextSibling
        ), St = n, pe = !0, lu = null, Hl = !1, l !== null && (Zl[Ua++] = $a, Zl[Ua++] = Wa, Zl[Ua++] = tu, $a = l.id, Wa = l.overflow, tu = n), n = jr(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (El(), s = c.fallback, m = n.mode, g = l.child, R = g.sibling, c = ka(g, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = g.subtreeFlags & 65011712, R !== null ? s = ka(R, s) : (s = Q(
      s,
      m,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, m = l.child.memoizedState, m === null ? m = Xr(u) : (g = m.cachePool, g !== null ? (R = xt._currentValue, g = g.parent !== R ? { parent: R, pool: R } : g) : g = Ro(), m = {
      baseLanes: m.baseLanes | u,
      cachePool: g
    }), s.memoizedState = m, s.childLanes = Ay(
      l,
      y,
      u
    ), n.memoizedState = wo, c) : (Wl(n), u = l.child, l = u.sibling, u = ka(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function jr(l, n) {
    return n = Jo(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Jo(l, n) {
    return l = Ql(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function Ry(l, n, u) {
    return Ft(n, l.child, null, u), l = jr(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Ii(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), yr(l.return, n, u);
  }
  function df(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function zy(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (It(l, n, c.children, u), c = Ot.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && Ii(l, u, n);
          else if (l.tag === 19)
            Ii(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (w(Ot, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && da(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), df(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && da(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        df(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        df(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function nn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), ui |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (To(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(G(153));
    if (n.child !== null) {
      for (l = n.child, u = ka(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ka(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Qr(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Eo(l)));
  }
  function B0(l, n, u) {
    switch (n.tag) {
      case 3:
        xu(n, n.stateNode.containerInfo), En(n, xt, l.memoizedState.cache), Lc();
        break;
      case 27:
      case 5:
        Yl(n);
        break;
      case 4:
        xu(n, n.stateNode.containerInfo);
        break;
      case 10:
        En(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Wl(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? N0(l, n, u) : (Wl(n), l = nn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Wl(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (To(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return zy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), w(Ot, Ot.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Fi(l, n, u);
      case 24:
        En(n, xt, l.memoizedState.cache);
    }
    return nn(l, n, u);
  }
  function Dy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Se = !0;
      else {
        if (!Qr(l, u) && (n.flags & 128) === 0)
          return Se = !1, B0(
            l,
            n,
            u
          );
        Se = (l.flags & 131072) !== 0;
      }
    else
      Se = !1, pe && (n.flags & 1048576) !== 0 && Qe(n, vo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            sr(c) ? (l = Na(c, l), n.tag = 1, n = Ey(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Gr(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === ul) {
                n.tag = 11, n = Sy(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Ut) {
                n.tag = 14, n = C0(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Vt(c) || c, Error(G(306, n, ""));
          }
        }
        return n;
      case 0:
        return Gr(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = Na(
          c,
          n.pendingProps
        ), Ey(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (xu(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(G(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, br(l, n), ef(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, En(n, xt, c), c !== r.cache && mr(
            n,
            [xt],
            u,
            !0
          ), Mo(), c = y.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Vr(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = sa(
                Error(G(424)),
                n
              ), wc(s), n = Vr(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Ke = rn(l.firstChild), St = n, pe = !0, lu = null, Hl = !0, u = dy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Lc(), c === s) {
              n = nn(
                l,
                n,
                u
              );
              break e;
            }
            It(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return su(l, n), l === null ? (u = pd(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : pe || (u = n.type, l = n.pendingProps, c = Of(
          dt.current
        ).createElement(u), c[et] = n, c[bl] = l, M(c, u, l), Dt(c), n.stateNode = c) : n.memoizedState = pd(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Yl(n), l === null && pe && (c = n.stateNode = dl(
          n.type,
          n.pendingProps,
          dt.current
        ), St = n, Hl = !0, s = Ke, rl(n.type) ? (tm = s, Ke = rn(
          c.firstChild
        )) : Ke = s), It(
          l,
          n,
          n.pendingProps.children,
          u
        ), su(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && pe && ((s = c = Ke) && (c = Iy(
          c,
          n.type,
          n.pendingProps,
          Hl
        ), c !== null ? (n.stateNode = c, St = n, Ke = rn(
          c.firstChild
        ), Hl = !1, s = !0) : s = !1), s || Fa(n)), Yl(n), s = n.type, r = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = r.children, uc(s, r) ? c = null : y !== null && uc(s, y) && (n.flags |= 32), n.memoizedState !== null && (s = Er(
          l,
          n,
          E0,
          null,
          null,
          u
        ), hl._currentValue = s), su(l, n), It(l, n, c, u), n.child;
      case 6:
        return l === null && pe && ((l = u = Ke) && (u = Mf(
          u,
          n.pendingProps,
          Hl
        ), u !== null ? (n.stateNode = u, St = n, Ke = null, l = !0) : l = !1), l || Fa(n)), null;
      case 13:
        return N0(l, n, u);
      case 4:
        return xu(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Ft(
          n,
          null,
          c,
          u
        ) : It(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return Sy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return It(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return It(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return It(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, En(n, n.type, c.value), It(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Ku(n), s = ol(s), c = c(s), n.flags |= 1, It(l, n, c, u), n.child;
      case 14:
        return C0(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return ou(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return zy(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = Jo(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = ka(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return Fi(l, n, u);
      case 24:
        return Ku(n), c = ol(xt), l === null ? (s = $c(), s === null && (s = $e, r = Gh(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, Do(n), En(n, xt, s)) : ((l.lanes & u) !== 0 && (br(l, n), ef(n, null, null, u), Mo()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), En(n, xt, c)) : (c = r.cache, En(n, xt, c), c !== s.cache && mr(
          n,
          [xt],
          u,
          !0
        ))), It(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(G(156, n.tag));
  }
  function ru(l) {
    l.flags |= 4;
  }
  function Oy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !um(n)) {
      if (n = Ct.current, n !== null && ((He & 4194048) === He ? ln !== null : (He & 62914560) !== He && (He & 536870912) === 0 || n !== ln))
        throw Pc = vr, zo;
      l.flags |= 8192;
    }
  }
  function Pu(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Cu() : 536870912, l.lanes |= n, gf |= n);
  }
  function hf(l, n) {
    if (!pe)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function yt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function ke(l, n, u) {
    var c = n.pendingProps;
    switch (ji(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yt(n), null;
      case 1:
        return yt(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), An(xt), ht(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Zc(n) ? ru(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Yh())), yt(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (ru(n), u !== null ? (yt(n), Oy(n, u)) : (yt(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (ru(n), yt(n), Oy(n, u)) : (yt(n), n.flags &= -16777217) : (l.memoizedProps !== c && ru(n), yt(n), n.flags &= -16777217), null;
      case 27:
        ca(n), u = dt.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && ru(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(G(166));
            return yt(n), null;
          }
          l = ye.current, Zc(n) ? dr(n) : (l = dl(s, c, u), n.stateNode = l, ru(n));
        }
        return yt(n), null;
      case 5:
        if (ca(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && ru(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(G(166));
            return yt(n), null;
          }
          if (l = ye.current, Zc(n))
            dr(n);
          else {
            switch (s = Of(
              dt.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[et] = n, l[bl] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (M(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && ru(n);
          }
        }
        return yt(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && ru(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(G(166));
          if (l = dt.current, Zc(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = St, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[et] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || ep(l.nodeValue, u)), l || Fa(n);
          } else
            l = Of(l).createTextNode(
              c
            ), l[et] = n, n.stateNode = l;
        }
        return yt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Zc(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(G(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(G(317));
              s[et] = n;
            } else
              Lc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            yt(n), s = !1;
          } else
            s = Yh(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (an(n), n) : (an(n), null);
        }
        if (an(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), Pu(n, n.updateQueue), yt(n), null;
      case 4:
        return ht(), l === null && ls(n.stateNode.containerInfo), yt(n), null;
      case 10:
        return An(n.type), yt(n), null;
      case 19:
        if ($(Ot), s = n.memoizedState, s === null) return yt(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) hf(s, !1);
          else {
            if (At !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = da(l), r !== null) {
                  for (n.flags |= 128, hf(s, !1), l = r.updateQueue, n.updateQueue = l, Pu(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    rr(u, l), u = u.sibling;
                  return w(
                    Ot,
                    Ot.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && gl() > Kr && (n.flags |= 128, c = !0, hf(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = da(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, Pu(n, l), hf(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !pe)
                return yt(n), null;
            } else
              2 * gl() - s.renderingStartTime > Kr && u !== 536870912 && (n.flags |= 128, c = !0, hf(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = gl(), n.sibling = null, l = Ot.current, w(Ot, c ? l & 1 | 2 : l & 1), n) : (yt(n), null);
      case 22:
      case 23:
        return an(n), lf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (yt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : yt(n), u = n.updateQueue, u !== null && Pu(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && $(nu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), An(xt), yt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(G(156, n.tag));
  }
  function My(l, n) {
    switch (ji(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return An(xt), ht(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ca(n), null;
      case 13:
        if (an(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(G(340));
          Lc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return $(Ot), null;
      case 4:
        return ht(), null;
      case 10:
        return An(n.type), null;
      case 22:
      case 23:
        return an(n), lf(), l !== null && $(nu), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return An(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function q0(l, n) {
    switch (ji(n), n.tag) {
      case 3:
        An(xt), ht();
        break;
      case 26:
      case 27:
      case 5:
        ca(n);
        break;
      case 4:
        ht();
        break;
      case 13:
        an(n);
        break;
      case 19:
        $(Ot);
        break;
      case 10:
        An(n.type);
        break;
      case 22:
      case 23:
        an(n), lf(), l !== null && $(nu);
        break;
      case 24:
        An(xt);
    }
  }
  function yf(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, y = u.inst;
            c = r(), y.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (m) {
      We(n, n.return, m);
    }
  }
  function ei(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, m = y.destroy;
            if (m !== void 0) {
              y.destroy = void 0, s = n;
              var g = u, R = m;
              try {
                R();
              } catch (V) {
                We(
                  s,
                  g,
                  V
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (V) {
      We(n, n.return, V);
    }
  }
  function Y0(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Sr(n, u);
      } catch (c) {
        We(l, l.return, c);
      }
    }
  }
  function Zr(l, n, u) {
    u.props = Na(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      We(l, n, c);
    }
  }
  function mf(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      We(l, n, s);
    }
  }
  function un(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          We(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          We(l, n, s);
        }
      else u.current = null;
  }
  function Uy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      We(l, l.return, s);
    }
  }
  function Pi(l, n, u) {
    try {
      var c = l.stateNode;
      Ve(c, l.type, u, n), c[bl] = n;
    } catch (s) {
      We(l, l.return, s);
    }
  }
  function _0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && rl(l.type) || l.tag === 4;
  }
  function Hy(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || _0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && rl(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ba(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = ns));
    else if (c !== 4 && (c === 27 && rl(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Ba(l, n, u), l = l.sibling; l !== null; )
        Ba(l, n, u), l = l.sibling;
  }
  function ti(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && rl(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (ti(l, n, u), l = l.sibling; l !== null; )
        ti(l, n, u), l = l.sibling;
  }
  function G0(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      M(n, c, u), n[et] = l, n[bl] = u;
    } catch (r) {
      We(l, l.return, r);
    }
  }
  var cn = !1, Et = !1, Lr = !1, xy = typeof WeakSet == "function" ? WeakSet : Set, Nt = null;
  function V0(l, n) {
    if (l = l.containerInfo, Wy = ds, l = yo(l), ir(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, m = -1, g = -1, R = 0, V = 0, j = l, D = null;
            t: for (; ; ) {
              for (var H; j !== u || s !== 0 && j.nodeType !== 3 || (m = y + s), j !== r || c !== 0 && j.nodeType !== 3 || (g = y + c), j.nodeType === 3 && (y += j.nodeValue.length), (H = j.firstChild) !== null; )
                D = j, j = H;
              for (; ; ) {
                if (j === l) break t;
                if (D === u && ++R === s && (m = y), D === r && ++V === c && (g = y), (H = j.nextSibling) !== null) break;
                j = D, D = j.parentNode;
              }
              j = H;
            }
            u = m === -1 || g === -1 ? null : { start: m, end: g };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (us = { focusedElem: l, selectionRange: u }, ds = !1, Nt = n; Nt !== null; )
      if (n = Nt, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, Nt = l;
      else
        for (; Nt !== null; ) {
          switch (n = Nt, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var ue = Na(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ue,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (le) {
                  We(
                    u,
                    u.return,
                    le
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  is(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      is(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(G(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Nt = l;
            break;
          }
          Nt = n.return;
        }
  }
  function wr(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        du(l, u), c & 4 && yf(5, u);
        break;
      case 1:
        if (du(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              We(u, u.return, y);
            }
          else {
            var s = Na(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              We(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && Y0(u), c & 512 && mf(u, u.return);
        break;
      case 3:
        if (du(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Sr(l, n);
          } catch (y) {
            We(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && G0(u);
      case 26:
      case 5:
        du(l, u), n === null && c & 4 && Uy(u), c & 512 && mf(u, u.return);
        break;
      case 12:
        du(l, u);
        break;
      case 13:
        du(l, u), c & 4 && Te(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = F0.bind(
          null,
          u
        ), em(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || cn, !c) {
          n = n !== null && n.memoizedState !== null || Et, s = cn;
          var r = Et;
          cn = c, (Et = n) && !r ? ct(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : du(l, u), cn = s, Et = r;
        }
        break;
      case 30:
        break;
      default:
        du(l, u);
    }
  }
  function Cy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Cy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && ee(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var it = null, Fl = !1;
  function qa(l, n, u) {
    for (u = u.child; u !== null; )
      Ny(l, n, u), u = u.sibling;
  }
  function Ny(l, n, u) {
    if (_l && typeof _l.onCommitFiberUnmount == "function")
      try {
        _l.onCommitFiberUnmount(Tc, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Et || un(u, n), qa(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Et || un(u, n);
        var c = it, s = Fl;
        rl(u.type) && (it = u.stateNode, Fl = !1), qa(
          l,
          n,
          u
        ), K(u.stateNode), it = c, Fl = s;
        break;
      case 5:
        Et || un(u, n);
      case 6:
        if (c = it, s = Fl, it = null, qa(
          l,
          n,
          u
        ), it = c, Fl = s, it !== null)
          if (Fl)
            try {
              (it.nodeType === 9 ? it.body : it.nodeName === "HTML" ? it.ownerDocument.body : it).removeChild(u.stateNode);
            } catch (r) {
              We(
                u,
                n,
                r
              );
            }
          else
            try {
              it.removeChild(u.stateNode);
            } catch (r) {
              We(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        it !== null && (Fl ? (l = it, lp(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Bf(l)) : lp(it, u.stateNode));
        break;
      case 4:
        c = it, s = Fl, it = u.stateNode.containerInfo, Fl = !0, qa(
          l,
          n,
          u
        ), it = c, Fl = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Et || ei(2, u, n), Et || ei(4, u, n), qa(
          l,
          n,
          u
        );
        break;
      case 1:
        Et || (un(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && Zr(
          u,
          n,
          c
        )), qa(
          l,
          n,
          u
        );
        break;
      case 21:
        qa(
          l,
          n,
          u
        );
        break;
      case 22:
        Et = (c = Et) || u.memoizedState !== null, qa(
          l,
          n,
          u
        ), Et = c;
        break;
      default:
        qa(
          l,
          n,
          u
        );
    }
  }
  function Te(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Bf(l);
      } catch (u) {
        We(n, n.return, u);
      }
  }
  function By(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new xy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new xy()), n;
      default:
        throw Error(G(435, l.tag));
    }
  }
  function Ko(l, n) {
    var u = By(l);
    n.forEach(function(c) {
      var s = hv.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function Il(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, y = n, m = y;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (rl(m.type)) {
                it = m.stateNode, Fl = !1;
                break e;
              }
              break;
            case 5:
              it = m.stateNode, Fl = !1;
              break e;
            case 3:
            case 4:
              it = m.stateNode.containerInfo, Fl = !0;
              break e;
          }
          m = m.return;
        }
        if (it === null) throw Error(G(160));
        Ny(r, y, s), it = null, Fl = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        pf(n, l), n = n.sibling;
  }
  var ya = null;
  function pf(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Il(n, l), Al(l), c & 4 && (ei(3, l, l.return), yf(3, l), ei(5, l, l.return));
        break;
      case 1:
        Il(n, l), Al(l), c & 512 && (Et || u === null || un(u, u.return)), c & 64 && cn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = ya;
        if (Il(n, l), Al(l), c & 512 && (Et || u === null || un(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Pf] || r[et] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), M(r, c, u), r[et] = l, Dt(r), c = r;
                      break e;
                    case "link":
                      var y = Hf(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), M(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (y = Hf(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), M(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(G(468, c));
                  }
                  r[et] = l, Dt(r), c = r;
                }
                l.stateNode = c;
              } else
                nm(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = vd(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? nm(
              s,
              l.type,
              l.stateNode
            ) : vd(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Pi(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Il(n, l), Al(l), c & 512 && (Et || u === null || un(u, u.return)), u !== null && c & 4 && Pi(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Il(n, l), Al(l), c & 512 && (Et || u === null || un(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Di(s, "");
          } catch (H) {
            We(l, l.return, H);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Pi(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (Lr = !0);
        break;
      case 6:
        if (Il(n, l), Al(l), c & 4) {
          if (l.stateNode === null)
            throw Error(G(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (H) {
            We(l, l.return, H);
          }
        }
        break;
      case 3:
        if (os = null, s = ya, ya = el(n.containerInfo), Il(n, l), ya = s, Al(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Bf(n.containerInfo);
          } catch (H) {
            We(l, l.return, H);
          }
        Lr && (Lr = !1, ec(l));
        break;
      case 4:
        c = ya, ya = el(
          l.stateNode.containerInfo
        ), Il(n, l), Al(l), ya = c;
        break;
      case 12:
        Il(n, l), Al(l);
        break;
      case 13:
        Il(n, l), Al(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Xy = gl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Ko(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var g = u !== null && u.memoizedState !== null, R = cn, V = Et;
        if (cn = R || s, Et = V || g, Il(n, l), Et = V, cn = R, Al(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || g || cn || Et || hu(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                g = u = n;
                try {
                  if (r = g.stateNode, s)
                    y = r.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    m = g.stateNode;
                    var j = g.memoizedProps.style, D = j != null && j.hasOwnProperty("display") ? j.display : null;
                    m.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (H) {
                  We(g, g.return, H);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                g = n;
                try {
                  g.stateNode.nodeValue = s ? "" : g.memoizedProps;
                } catch (H) {
                  We(g, g.return, H);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, Ko(l, u))));
        break;
      case 19:
        Il(n, l), Al(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, Ko(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Il(n, l), Al(l);
    }
  }
  function Al(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (_0(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(G(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Hy(l);
            ti(l, r, s);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Di(y, ""), u.flags &= -33);
            var m = Hy(l);
            ti(l, m, y);
            break;
          case 3:
          case 4:
            var g = u.stateNode.containerInfo, R = Hy(l);
            Ba(
              l,
              R,
              g
            );
            break;
          default:
            throw Error(G(161));
        }
      } catch (V) {
        We(l, l.return, V);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function ec(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        ec(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function du(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        wr(l, n.alternate, n), n = n.sibling;
  }
  function hu(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ei(4, n, n.return), hu(n);
          break;
        case 1:
          un(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Zr(
            n,
            n.return,
            u
          ), hu(n);
          break;
        case 27:
          K(n.stateNode);
        case 26:
        case 5:
          un(n, n.return), hu(n);
          break;
        case 22:
          n.memoizedState === null && hu(n);
          break;
        case 30:
          hu(n);
          break;
        default:
          hu(n);
      }
      l = l.sibling;
    }
  }
  function ct(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, y = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ct(
            s,
            r,
            u
          ), yf(4, r);
          break;
        case 1:
          if (ct(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (R) {
              We(c, c.return, R);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var m = c.stateNode;
            try {
              var g = s.shared.hiddenCallbacks;
              if (g !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < g.length; s++)
                  tf(g[s], m);
            } catch (R) {
              We(c, c.return, R);
            }
          }
          u && y & 64 && Y0(r), mf(r, r.return);
          break;
        case 27:
          G0(r);
        case 26:
        case 5:
          ct(
            s,
            r,
            u
          ), u && c === null && y & 4 && Uy(r), mf(r, r.return);
          break;
        case 12:
          ct(
            s,
            r,
            u
          );
          break;
        case 13:
          ct(
            s,
            r,
            u
          ), u && y & 4 && Te(s, r);
          break;
        case 22:
          r.memoizedState === null && ct(
            s,
            r,
            u
          ), mf(r, r.return);
          break;
        case 30:
          break;
        default:
          ct(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function qy(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && ku(u));
  }
  function Ya(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && ku(l));
  }
  function fn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        yu(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function yu(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        fn(
          l,
          n,
          u,
          c
        ), s & 2048 && yf(9, n);
        break;
      case 1:
        fn(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        fn(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && ku(l)));
        break;
      case 12:
        if (s & 2048) {
          fn(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, y = r.id, m = r.onPostCommit;
            typeof m == "function" && m(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (g) {
            We(n, n.return, g);
          }
        } else
          fn(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        fn(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, y = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? fn(
          l,
          n,
          u,
          c
        ) : li(l, n) : r._visibility & 2 ? fn(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, tc(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && qy(y, n);
        break;
      case 24:
        fn(
          l,
          n,
          u,
          c
        ), s & 2048 && Ya(n.alternate, n);
        break;
      default:
        fn(
          l,
          n,
          u,
          c
        );
    }
  }
  function tc(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, y = n, m = u, g = c, R = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          tc(
            r,
            y,
            m,
            g,
            s
          ), yf(8, y);
          break;
        case 23:
          break;
        case 22:
          var V = y.stateNode;
          y.memoizedState !== null ? V._visibility & 2 ? tc(
            r,
            y,
            m,
            g,
            s
          ) : li(
            r,
            y
          ) : (V._visibility |= 2, tc(
            r,
            y,
            m,
            g,
            s
          )), s && R & 2048 && qy(
            y.alternate,
            y
          );
          break;
        case 24:
          tc(
            r,
            y,
            m,
            g,
            s
          ), s && R & 2048 && Ya(y.alternate, y);
          break;
        default:
          tc(
            r,
            y,
            m,
            g,
            s
          );
      }
      n = n.sibling;
    }
  }
  function li(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            li(u, c), s & 2048 && qy(
              c.alternate,
              c
            );
            break;
          case 24:
            li(u, c), s & 2048 && Ya(c.alternate, c);
            break;
          default:
            li(u, c);
        }
        n = n.sibling;
      }
  }
  var Ne = 8192;
  function ai(l) {
    if (l.subtreeFlags & Ne)
      for (l = l.child; l !== null; )
        Pt(l), l = l.sibling;
  }
  function Pt(l) {
    switch (l.tag) {
      case 26:
        ai(l), l.flags & Ne && l.memoizedState !== null && up(
          ya,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ai(l);
        break;
      case 3:
      case 4:
        var n = ya;
        ya = el(l.stateNode.containerInfo), ai(l), ya = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = Ne, Ne = 16777216, ai(l), Ne = n) : ai(l));
        break;
      default:
        ai(l);
    }
  }
  function X0(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function vf(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Nt = c, ma(
            c,
            l
          );
        }
      X0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Jr(l), l = l.sibling;
  }
  function Jr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        vf(l), l.flags & 2048 && ei(9, l, l.return);
        break;
      case 3:
        vf(l);
        break;
      case 12:
        vf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, ko(l)) : vf(l);
        break;
      default:
        vf(l);
    }
  }
  function ko(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Nt = c, ma(
            c,
            l
          );
        }
      X0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          ei(8, n, n.return), ko(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, ko(n));
          break;
        default:
          ko(n);
      }
      l = l.sibling;
    }
  }
  function ma(l, n) {
    for (; Nt !== null; ) {
      var u = Nt;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ei(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          ku(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Nt = c;
      else
        e: for (u = l; Nt !== null; ) {
          c = Nt;
          var s = c.sibling, r = c.return;
          if (Cy(c), c === u) {
            Nt = null;
            break e;
          }
          if (s !== null) {
            s.return = r, Nt = s;
            break e;
          }
          Nt = r;
        }
    }
  }
  var j0 = {
    getCacheForType: function(l) {
      var n = ol(xt), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, Yy = typeof WeakMap == "function" ? WeakMap : Map, Ze = 0, $e = null, Ee = null, He = 0, Be = 0, Pl = null, mu = !1, ni = !1, _y = !1, pu = 0, At = 0, ui = 0, ii = 0, Gy = 0, Lt = 0, gf = 0, $o = null, Cl = null, Vy = !1, Xy = 0, Kr = 1 / 0, kr = null, On = null, sl = 0, ci = null, fi = null, bf = 0, ea = 0, $r = null, jy = null, Sf = 0, Wr = null;
  function pa() {
    if ((Ze & 2) !== 0 && He !== 0)
      return He & -He;
    if (_.T !== null) {
      var l = $u;
      return l !== 0 ? l : id();
    }
    return nh();
  }
  function Q0() {
    Lt === 0 && (Lt = (He & 536870912) === 0 || pe ? jt() : 536870912);
    var l = Ct.current;
    return l !== null && (l.flags |= 32), Lt;
  }
  function ta(l, n, u) {
    (l === $e && (Be === 2 || Be === 9) || l.cancelPendingCommit !== null) && (on(l, 0), vu(
      l,
      He,
      Lt,
      !1
    )), bn(l, u), ((Ze & 2) === 0 || l !== $e) && (l === $e && ((Ze & 2) === 0 && (ii |= u), At === 4 && vu(
      l,
      He,
      Lt,
      !1
    )), sn(l));
  }
  function Z0(l, n, u) {
    if ((Ze & 6) !== 0) throw Error(G(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || Kn(l, n), s = c ? Ir(l, n) : lc(l, n, !0), r = c;
    do {
      if (s === 0) {
        ni && !c && vu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !Fr(u)) {
          s = lc(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var m = l;
              s = $o;
              var g = m.current.memoizedState.isDehydrated;
              if (g && (on(m, y).flags |= 256), y = lc(
                m,
                y,
                !1
              ), y !== 2) {
                if (_y && !g) {
                  m.errorRecoveryDisabledLanes |= r, ii |= r, s = 4;
                  break e;
                }
                r = Cl, Cl = s, r !== null && (Cl === null ? Cl = r : Cl.push.apply(
                  Cl,
                  r
                ));
              }
              s = y;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          on(l, 0), vu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(G(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              vu(
                c,
                n,
                Lt,
                !mu
              );
              break e;
            case 2:
              Cl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(G(329));
          }
          if ((n & 62914560) === n && (s = Xy + 300 - gl(), 10 < s)) {
            if (vu(
              c,
              n,
              Lt,
              !mu
            ), gn(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Hn(
              Tf.bind(
                null,
                c,
                u,
                Cl,
                kr,
                Vy,
                n,
                Lt,
                ii,
                gf,
                mu,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          Tf(
            c,
            u,
            Cl,
            kr,
            Vy,
            n,
            Lt,
            ii,
            gf,
            mu,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    sn(l);
  }
  function Tf(l, n, u, c, s, r, y, m, g, R, V, j, D, H) {
    if (l.timeoutHandle = -1, j = n.subtreeFlags, (j & 8192 || (j & 16785408) === 16785408) && (xf = { stylesheets: null, count: 0, unsuspend: np }, Pt(n), j = ip(), j !== null)) {
      l.cancelPendingCommit = j(
        J0.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          y,
          m,
          g,
          V,
          1,
          D,
          H
        )
      ), vu(l, r, y, !R);
      return;
    }
    J0(
      l,
      n,
      r,
      u,
      c,
      s,
      y,
      m,
      g
    );
  }
  function Fr(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Ul(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function vu(l, n, u, c) {
    n &= ~Gy, n &= ~ii, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Gl(s), y = 1 << r;
      c[r] = -1, s &= ~y;
    }
    u !== 0 && ah(l, u, n);
  }
  function Wo() {
    return (Ze & 6) === 0 ? (gu(0), !1) : !0;
  }
  function Ef() {
    if (Ee !== null) {
      if (Be === 0)
        var l = Ee.return;
      else
        l = Ee, Ia = au = null, af(l), kl = null, ff = 0, l = Ee;
      for (; l !== null; )
        q0(l.alternate, l), l = l.return;
      Ee = null;
    }
  }
  function on(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Fy(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ef(), $e = l, Ee = u = ka(l.current, null), He = n, Be = 0, Pl = null, mu = !1, ni = Kn(l, n), _y = !1, gf = Lt = Gy = ii = ui = At = 0, Cl = $o = null, Vy = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Gl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return pu = n, Ja(), u;
  }
  function Af(l, n) {
    se = null, _.H = jo, n === Qi || n === Fc ? (n = gr(), Be = 3) : n === zo ? (n = gr(), Be = 4) : Be = n === by ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Pl = n, Ee === null && (At = 1, Wi(
      l,
      sa(n, l.current)
    ));
  }
  function Qy() {
    var l = _.H;
    return _.H = jo, l === null ? jo : l;
  }
  function L0() {
    var l = _.A;
    return _.A = j0, l;
  }
  function oi() {
    At = 4, mu || (He & 4194048) !== He && Ct.current !== null || (ni = !0), (ui & 134217727) === 0 && (ii & 134217727) === 0 || $e === null || vu(
      $e,
      He,
      Lt,
      !1
    );
  }
  function lc(l, n, u) {
    var c = Ze;
    Ze |= 2;
    var s = Qy(), r = L0();
    ($e !== l || He !== n) && (kr = null, on(l, n)), n = !1;
    var y = At;
    e: do
      try {
        if (Be !== 0 && Ee !== null) {
          var m = Ee, g = Pl;
          switch (Be) {
            case 8:
              Ef(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ct.current === null && (n = !0);
              var R = Be;
              if (Be = 0, Pl = null, ac(l, m, g, R), u && ni) {
                y = 0;
                break e;
              }
              break;
            default:
              R = Be, Be = 0, Pl = null, ac(l, m, g, R);
          }
        }
        w0(), y = At;
        break;
      } catch (V) {
        Af(l, V);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Ia = au = null, Ze = c, _.H = s, _.A = r, Ee === null && ($e = null, He = 0, Ja()), y;
  }
  function w0() {
    for (; Ee !== null; ) Pr(Ee);
  }
  function Ir(l, n) {
    var u = Ze;
    Ze |= 2;
    var c = Qy(), s = L0();
    $e !== l || He !== n ? (kr = null, Kr = gl() + 500, on(l, n)) : ni = Kn(
      l,
      n
    );
    e: do
      try {
        if (Be !== 0 && Ee !== null) {
          n = Ee;
          var r = Pl;
          t: switch (Be) {
            case 1:
              Be = 0, Pl = null, ac(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (jh(r)) {
                Be = 0, Pl = null, Ly(n);
                break;
              }
              n = function() {
                Be !== 2 && Be !== 9 || $e !== l || (Be = 7), sn(l);
              }, r.then(n, n);
              break e;
            case 3:
              Be = 7;
              break e;
            case 4:
              Be = 5;
              break e;
            case 7:
              jh(r) ? (Be = 0, Pl = null, Ly(n)) : (Be = 0, Pl = null, ac(l, n, r, 7));
              break;
            case 5:
              var y = null;
              switch (Ee.tag) {
                case 26:
                  y = Ee.memoizedState;
                case 5:
                case 27:
                  var m = Ee;
                  if (!y || um(y)) {
                    Be = 0, Pl = null;
                    var g = m.sibling;
                    if (g !== null) Ee = g;
                    else {
                      var R = m.return;
                      R !== null ? (Ee = R, ed(R)) : Ee = null;
                    }
                    break t;
                  }
              }
              Be = 0, Pl = null, ac(l, n, r, 5);
              break;
            case 6:
              Be = 0, Pl = null, ac(l, n, r, 6);
              break;
            case 8:
              Ef(), At = 6;
              break e;
            default:
              throw Error(G(462));
          }
        }
        Zy();
        break;
      } catch (V) {
        Af(l, V);
      }
    while (!0);
    return Ia = au = null, _.H = c, _.A = s, Ze = u, Ee !== null ? 0 : ($e = null, He = 0, Ja(), At);
  }
  function Zy() {
    for (; Ee !== null && !Fp(); )
      Pr(Ee);
  }
  function Pr(l) {
    var n = Dy(l.alternate, l, pu);
    l.memoizedProps = l.pendingProps, n === null ? ed(l) : Ee = n;
  }
  function Ly(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Ty(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          He
        );
        break;
      case 11:
        n = Ty(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          He
        );
        break;
      case 5:
        af(n);
      default:
        q0(u, n), n = Ee = rr(n, pu), n = Dy(u, n, pu);
    }
    l.memoizedProps = l.pendingProps, n === null ? ed(l) : Ee = n;
  }
  function ac(l, n, u, c) {
    Ia = au = null, af(n), kl = null, ff = 0;
    var s = n.return;
    try {
      if (ha(
        l,
        s,
        n,
        u,
        He
      )) {
        At = 1, Wi(
          l,
          sa(u, l.current)
        ), Ee = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Ee = s, r;
      At = 1, Wi(
        l,
        sa(u, l.current)
      ), Ee = null;
      return;
    }
    n.flags & 32768 ? (pe || c === 1 ? l = !0 : ni || (He & 536870912) !== 0 ? l = !1 : (mu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Ct.current, c !== null && c.tag === 13 && (c.flags |= 16384))), wy(n, l)) : ed(n);
  }
  function ed(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        wy(
          n,
          mu
        );
        return;
      }
      l = n.return;
      var u = ke(
        n.alternate,
        n,
        pu
      );
      if (u !== null) {
        Ee = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ee = n;
        return;
      }
      Ee = n = l;
    } while (n !== null);
    At === 0 && (At = 5);
  }
  function wy(l, n) {
    do {
      var u = My(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Ee = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Ee = l;
        return;
      }
      Ee = l = u;
    } while (l !== null);
    At = 6, Ee = null;
  }
  function J0(l, n, u, c, s, r, y, m, g) {
    l.cancelPendingCommit = null;
    do
      ld();
    while (sl !== 0);
    if ((Ze & 6) !== 0) throw Error(G(327));
    if (n !== null) {
      if (n === l.current) throw Error(G(177));
      if (r = n.lanes | n.childLanes, r |= po, lh(
        l,
        u,
        r,
        y,
        m,
        g
      ), l === $e && (Ee = $e = null, He = 0), fi = n, ci = l, bf = u, ea = r, $r = s, jy = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, yv($f, function() {
        return $0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = _.T, _.T = null, s = x.p, x.p = 2, y = Ze, Ze |= 4;
        try {
          V0(l, n, u);
        } finally {
          Ze = y, x.p = s, _.T = c;
        }
      }
      sl = 1, K0(), k0(), Fo();
    }
  }
  function K0() {
    if (sl === 1) {
      sl = 0;
      var l = ci, n = fi, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = _.T, _.T = null;
        var c = x.p;
        x.p = 2;
        var s = Ze;
        Ze |= 4;
        try {
          pf(n, l);
          var r = us, y = yo(l.containerInfo), m = r.focusedElem, g = r.selectionRange;
          if (y !== m && m && m.ownerDocument && nt(
            m.ownerDocument.documentElement,
            m
          )) {
            if (g !== null && ir(m)) {
              var R = g.start, V = g.end;
              if (V === void 0 && (V = R), "selectionStart" in m)
                m.selectionStart = R, m.selectionEnd = Math.min(
                  V,
                  m.value.length
                );
              else {
                var j = m.ownerDocument || document, D = j && j.defaultView || window;
                if (D.getSelection) {
                  var H = D.getSelection(), ue = m.textContent.length, le = Math.min(g.start, ue), Xe = g.end === void 0 ? le : Math.min(g.end, ue);
                  !H.extend && le > Xe && (y = Xe, Xe = le, le = y);
                  var A = ju(
                    m,
                    le
                  ), E = ju(
                    m,
                    Xe
                  );
                  if (A && E && (H.rangeCount !== 1 || H.anchorNode !== A.node || H.anchorOffset !== A.offset || H.focusNode !== E.node || H.focusOffset !== E.offset)) {
                    var z = j.createRange();
                    z.setStart(A.node, A.offset), H.removeAllRanges(), le > Xe ? (H.addRange(z), H.extend(E.node, E.offset)) : (z.setEnd(E.node, E.offset), H.addRange(z));
                  }
                }
              }
            }
            for (j = [], H = m; H = H.parentNode; )
              H.nodeType === 1 && j.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < j.length; m++) {
              var X = j[m];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
            }
          }
          ds = !!Wy, us = Wy = null;
        } finally {
          Ze = s, x.p = c, _.T = u;
        }
      }
      l.current = n, sl = 2;
    }
  }
  function k0() {
    if (sl === 2) {
      sl = 0;
      var l = ci, n = fi, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = _.T, _.T = null;
        var c = x.p;
        x.p = 2;
        var s = Ze;
        Ze |= 4;
        try {
          wr(l, n.alternate, n);
        } finally {
          Ze = s, x.p = c, _.T = u;
        }
      }
      sl = 3;
    }
  }
  function Fo() {
    if (sl === 4 || sl === 3) {
      sl = 0, Ip();
      var l = ci, n = fi, u = bf, c = jy;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? sl = 5 : (sl = 0, fi = ci = null, td(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (On = null), ja(u), n = n.stateNode, _l && typeof _l.onCommitFiberRoot == "function")
        try {
          _l.onCommitFiberRoot(
            Tc,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = _.T, s = x.p, x.p = 2, _.T = null;
        try {
          for (var r = l.onRecoverableError, y = 0; y < c.length; y++) {
            var m = c[y];
            r(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          _.T = n, x.p = s;
        }
      }
      (bf & 3) !== 0 && ld(), sn(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === Wr ? Sf++ : (Sf = 0, Wr = l) : Sf = 0, gu(0);
    }
  }
  function td(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, ku(n)));
  }
  function ld(l) {
    return K0(), k0(), Fo(), $0();
  }
  function $0() {
    if (sl !== 5) return !1;
    var l = ci, n = ea;
    ea = 0;
    var u = ja(bf), c = _.T, s = x.p;
    try {
      x.p = 32 > u ? 32 : u, _.T = null, u = $r, $r = null;
      var r = ci, y = bf;
      if (sl = 0, fi = ci = null, bf = 0, (Ze & 6) !== 0) throw Error(G(331));
      var m = Ze;
      if (Ze |= 4, Jr(r.current), yu(
        r,
        r.current,
        y,
        u
      ), Ze = m, gu(0, !1), _l && typeof _l.onPostCommitFiberRoot == "function")
        try {
          _l.onPostCommitFiberRoot(Tc, r);
        } catch {
        }
      return !0;
    } finally {
      x.p = s, _.T = c, td(l, n);
    }
  }
  function Jy(l, n, u) {
    n = sa(u, n), n = Yr(l.stateNode, n, 2), l = wl(l, n, 2), l !== null && (bn(l, 2), sn(l));
  }
  function We(l, n, u) {
    if (l.tag === 3)
      Jy(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Jy(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (On === null || !On.has(c))) {
            l = sa(u, l), u = x0(2), c = wl(n, u, 2), c !== null && (gy(
              u,
              c,
              n,
              l
            ), bn(c, 2), sn(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Io(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Yy();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (_y = !0, s.add(u), l = W0.bind(null, l, n, u), n.then(l, l));
  }
  function W0(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, $e === l && (He & u) === u && (At === 4 || At === 3 && (He & 62914560) === He && 300 > gl() - Xy ? (Ze & 2) === 0 && on(l, 0) : Gy |= u, gf === He && (gf = 0)), sn(l);
  }
  function ad(l, n) {
    n === 0 && (n = Cu()), l = eu(l, n), l !== null && (bn(l, n), sn(l));
  }
  function F0(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), ad(l, u);
  }
  function hv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(G(314));
    }
    c !== null && c.delete(n), ad(l, u);
  }
  function yv(l, n) {
    return Ys(l, n);
  }
  var nd = null, Rf = null, Po = !1, zf = !1, es = !1, si = 0;
  function sn(l) {
    l !== Rf && l.next === null && (Rf === null ? nd = Rf = l : Rf = Rf.next = l), zf = !0, Po || (Po = !0, ud());
  }
  function gu(l, n) {
    if (!es && zf) {
      es = !0;
      do
        for (var u = !1, c = nd; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var y = c.suspendedLanes, m = c.pingedLanes;
              r = (1 << 31 - Gl(42 | l) + 1) - 1, r &= s & ~(y & ~m), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, I0(c, r));
          } else
            r = He, r = gn(
              c,
              c === $e ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || Kn(c, r) || (u = !0, I0(c, r));
          c = c.next;
        }
      while (u);
      es = !1;
    }
  }
  function mv() {
    Ky();
  }
  function Ky() {
    zf = Po = !1;
    var l = 0;
    si !== 0 && (hd() && (l = si), si = 0);
    for (var n = gl(), u = null, c = nd; c !== null; ) {
      var s = c.next, r = ts(c, n);
      r === 0 ? (c.next = null, u === null ? nd = s : u.next = s, s === null && (Rf = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (zf = !0)), c = s;
    }
    gu(l);
  }
  function ts(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var y = 31 - Gl(r), m = 1 << y, g = s[y];
      g === -1 ? ((m & u) === 0 || (m & c) !== 0) && (s[y] = Ac(m, n)) : g <= n && (l.expiredLanes |= m), r &= ~m;
    }
    if (n = $e, u = He, u = gn(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Be === 2 || Be === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Ei(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Kn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Ei(c), ja(u)) {
        case 2:
        case 8:
          u = t0;
          break;
        case 32:
          u = $f;
          break;
        case 268435456:
          u = Gs;
          break;
        default:
          u = $f;
      }
      return c = ky.bind(null, l), u = Ys(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Ei(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function ky(l, n) {
    if (sl !== 0 && sl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (ld() && l.callbackNode !== u)
      return null;
    var c = He;
    return c = gn(
      l,
      l === $e ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (Z0(l, c, n), ts(l, gl()), l.callbackNode != null && l.callbackNode === u ? ky.bind(null, l) : null);
  }
  function I0(l, n) {
    if (ld()) return null;
    Z0(l, n, !0);
  }
  function ud() {
    gv(function() {
      (Ze & 6) !== 0 ? Ys(
        Sc,
        mv
      ) : Ky();
    });
  }
  function id() {
    return si === 0 && (si = jt()), si;
  }
  function Df(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : no("" + l);
  }
  function cd(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function fd(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Df(
        (s[bl] || null).action
      ), y = c.submitter;
      y && (n = (n = y[bl] || null) ? Df(n.formAction) : y.getAttribute("formAction"), n !== null && (r = n, y = null));
      var m = new co(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (si !== 0) {
                  var g = y ? cd(s, y) : new FormData(s);
                  cy(
                    u,
                    {
                      pending: !0,
                      data: g,
                      method: s.method,
                      action: r
                    },
                    null,
                    g
                  );
                }
              } else
                typeof r == "function" && (m.preventDefault(), g = y ? cd(s, y) : new FormData(s), cy(
                  u,
                  {
                    pending: !0,
                    data: g,
                    method: s.method,
                    action: r
                  },
                  r,
                  g
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var od = 0; od < or.length; od++) {
    var Rt = or[od], $y = Rt.toLowerCase(), pv = Rt[0].toUpperCase() + Rt.slice(1);
    jl(
      $y,
      "on" + pv
    );
  }
  jl(mo, "onAnimationEnd"), jl(S0, "onAnimationIteration"), jl(xh, "onAnimationStart"), jl("dblclick", "onDoubleClick"), jl("focusin", "onFocus"), jl("focusout", "onBlur"), jl(ov, "onTransitionRun"), jl(Ch, "onTransitionStart"), jl(fr, "onTransitionCancel"), jl(Nh, "onTransitionEnd"), Ri("onMouseEnter", ["mouseout", "mouseover"]), Ri("onMouseLeave", ["mouseout", "mouseover"]), Ri("onPointerEnter", ["pointerout", "pointerover"]), Ri("onPointerLeave", ["pointerout", "pointerover"]), Wt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Wt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Wt("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Wt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Wt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Wt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var fe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), vv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fe)
  );
  function bu(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var m = c[y], g = m.instance, R = m.currentTarget;
            if (m = m.listener, g !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = R;
            try {
              r(s);
            } catch (V) {
              Lo(V);
            }
            s.currentTarget = null, r = g;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (m = c[y], g = m.instance, R = m.currentTarget, m = m.listener, g !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = R;
            try {
              r(s);
            } catch (V) {
              Lo(V);
            }
            s.currentTarget = null, r = g;
          }
      }
    }
  }
  function re(l, n) {
    var u = n[uh];
    u === void 0 && (u = n[uh] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (P0(n, l, 2, !1), u.add(c));
  }
  function ri(l, n, u) {
    var c = 0;
    n && (c |= 4), P0(
      u,
      l,
      c,
      n
    );
  }
  var nc = "_reactListening" + Math.random().toString(36).slice(2);
  function ls(l) {
    if (!l[nc]) {
      l[nc] = !0, ih.forEach(function(u) {
        u !== "selectionchange" && (vv.has(u) || ri(u, !1, l), ri(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[nc] || (n[nc] = !0, ri("selectionchange", !1, n));
    }
  }
  function P0(l, n, u, c) {
    switch (sp(n)) {
      case 2:
        var s = fp;
        break;
      case 8:
        s = op;
        break;
      default:
        s = Td;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Js || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function as(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var m = c.stateNode.containerInfo;
          if (m === s) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var g = y.tag;
              if ((g === 3 || g === 4) && y.stateNode.containerInfo === s)
                return;
              y = y.return;
            }
          for (; m !== null; ) {
            if (y = qu(m), y === null) return;
            if (g = y.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              c = r = y;
              continue e;
            }
            m = m.parentNode;
          }
        }
        c = c.return;
      }
    o0(function() {
      var R = r, V = Oi(u), j = [];
      e: {
        var D = Bh.get(l);
        if (D !== void 0) {
          var H = co, ue = l;
          switch (l) {
            case "keypress":
              if (io(u) === 0) break e;
            case "keydown":
            case "keyup":
              H = xi;
              break;
            case "focusin":
              ue = "focus", H = gh;
              break;
            case "focusout":
              ue = "blur", H = gh;
              break;
            case "beforeblur":
            case "afterblur":
              H = gh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = oo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = d0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = Is;
              break;
            case mo:
            case S0:
            case xh:
              H = uv;
              break;
            case Nh:
              H = Xl;
              break;
            case "scroll":
            case "scrollend":
              H = av;
              break;
            case "wheel":
              H = Ps;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Vl;
              break;
            case "toggle":
            case "beforetoggle":
              H = Eh;
          }
          var le = (n & 4) !== 0, Xe = !le && (l === "scroll" || l === "scrollend"), A = le ? D !== null ? D + "Capture" : null : D;
          le = [];
          for (var E = R, z; E !== null; ) {
            var X = E;
            if (z = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || z === null || A === null || (X = Wn(E, A), X != null && le.push(
              la(E, X, z)
            )), Xe) break;
            E = E.return;
          }
          0 < le.length && (D = new H(
            D,
            ue,
            null,
            u,
            V
          ), j.push({ event: D, listeners: le }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (D = l === "mouseover" || l === "pointerover", H = l === "mouseout" || l === "pointerout", D && u !== ws && (ue = u.relatedTarget || u.fromElement) && (qu(ue) || ue[Ai]))
            break e;
          if ((H || D) && (D = V.window === V ? V : (D = V.ownerDocument) ? D.defaultView || D.parentWindow : window, H ? (ue = u.relatedTarget || u.toElement, H = R, ue = ue ? qu(ue) : null, ue !== null && (Xe = st(ue), le = ue.tag, ue !== Xe || le !== 5 && le !== 27 && le !== 6) && (ue = null)) : (H = null, ue = R), H !== ue)) {
            if (le = oo, X = "onMouseLeave", A = "onMouseEnter", E = "mouse", (l === "pointerout" || l === "pointerover") && (le = Vl, X = "onPointerLeave", A = "onPointerEnter", E = "pointer"), Xe = H == null ? D : zc(H), z = ue == null ? D : zc(ue), D = new le(
              X,
              E + "leave",
              H,
              u,
              V
            ), D.target = Xe, D.relatedTarget = z, X = null, qu(V) === R && (le = new le(
              A,
              E + "enter",
              ue,
              u,
              V
            ), le.target = z, le.relatedTarget = Xe, X = le), Xe = X, H && ue)
              t: {
                for (le = H, A = ue, E = 0, z = le; z; z = hi(z))
                  E++;
                for (z = 0, X = A; X; X = hi(X))
                  z++;
                for (; 0 < E - z; )
                  le = hi(le), E--;
                for (; 0 < z - E; )
                  A = hi(A), z--;
                for (; E--; ) {
                  if (le === A || A !== null && le === A.alternate)
                    break t;
                  le = hi(le), A = hi(A);
                }
                le = null;
              }
            else le = null;
            H !== null && sd(
              j,
              D,
              H,
              le,
              !1
            ), ue !== null && Xe !== null && sd(
              j,
              Xe,
              ue,
              le,
              !0
            );
          }
        }
        e: {
          if (D = R ? zc(R) : window, H = D.nodeName && D.nodeName.toLowerCase(), H === "select" || H === "input" && D.type === "file")
            var F = Vu;
          else if (Dh(D))
            if (Oh)
              F = Fn;
            else {
              F = ur;
              var ve = b0;
            }
          else
            H = D.nodeName, !H || H.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? R && xc(R.elementType) && (F = Vu) : F = Xu;
          if (F && (F = F(l, R))) {
            ar(
              j,
              F,
              u,
              V
            );
            break e;
          }
          ve && ve(l, D, R), l === "focusout" && R && D.type === "number" && R.memoizedProps.value != null && lo(D, "number", D.value);
        }
        switch (ve = R ? zc(R) : window, l) {
          case "focusin":
            (Dh(ve) || ve.contentEditable === "true") && (Ma = ve, Gi = R, oa = null);
            break;
          case "focusout":
            oa = Gi = Ma = null;
            break;
          case "mousedown":
            Gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gc = !1, Vc(j, u, V);
            break;
          case "selectionchange":
            if (Hh) break;
          case "keydown":
          case "keyup":
            Vc(j, u, V);
        }
        var te;
        if (er)
          e: {
            switch (l) {
              case "compositionstart":
                var ie = "onCompositionStart";
                break e;
              case "compositionend":
                ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ie = "onCompositionUpdate";
                break e;
            }
            ie = void 0;
          }
        else
          Oa ? lr(l, u) && (ie = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (ie = "onCompositionStart");
        ie && (tr && u.locale !== "ko" && (Oa || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Oa && (te = uo()) : (Da = V, Ks = "value" in Da ? Da.value : Da.textContent, Oa = !0)), ve = di(R, ie), 0 < ve.length && (ie = new bh(
          ie,
          l,
          null,
          u,
          V
        ), j.push({ event: ie, listeners: ve }), te ? ie.data = te : (te = ro(u), te !== null && (ie.data = te)))), (te = fv ? Rh(l, u) : zh(l, u)) && (ie = di(R, "onBeforeInput"), 0 < ie.length && (ve = new bh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          V
        ), j.push({
          event: ve,
          listeners: ie
        }), ve.data = te)), fd(
          j,
          l,
          R,
          u,
          V
        );
      }
      bu(j, n);
    });
  }
  function la(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function di(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Wn(l, u), s != null && c.unshift(
        la(l, s, r)
      ), s = Wn(l, n), s != null && c.push(
        la(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function hi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function sd(l, n, u, c, s) {
    for (var r = n._reactName, y = []; u !== null && u !== c; ) {
      var m = u, g = m.alternate, R = m.stateNode;
      if (m = m.tag, g !== null && g === c) break;
      m !== 5 && m !== 26 && m !== 27 || R === null || (g = R, s ? (R = Wn(u, r), R != null && y.unshift(
        la(u, R, g)
      )) : s || (R = Wn(u, r), R != null && y.push(
        la(u, R, g)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var rd = /\r\n?/g, va = /\u0000|\uFFFD/g;
  function dd(l) {
    return (typeof l == "string" ? l : "" + l).replace(rd, `
`).replace(va, "");
  }
  function ep(l, n) {
    return n = dd(n), dd(l) === n;
  }
  function ns() {
  }
  function Fe(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Di(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Di(l, "" + c);
        break;
      case "className":
        kn(l, "class", c);
        break;
      case "tabIndex":
        kn(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        kn(l, u, c);
        break;
      case "style":
        Ls(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          kn(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = no("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Fe(l, n, "name", s.name, s, null), Fe(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Fe(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Fe(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Fe(l, n, "encType", s.encType, s, null), Fe(l, n, "method", s.method, s, null), Fe(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = no("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = ns);
        break;
      case "onScroll":
        c != null && re("scroll", l);
        break;
      case "onScrollEnd":
        c != null && re("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(G(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(G(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = no("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        re("beforetoggle", l), re("toggle", l), to(l, "popover", c);
        break;
      case "xlinkActuate":
        Sn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Sn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Sn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Sn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Sn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Sn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Sn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Sn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Sn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        to(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = ao.get(u) || u, to(l, u, c));
    }
  }
  function wt(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        Ls(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(G(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(G(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Di(l, c) : (typeof c == "number" || typeof c == "bigint") && Di(l, "" + c);
        break;
      case "onScroll":
        c != null && re("scroll", l);
        break;
      case "onScrollEnd":
        c != null && re("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = ns);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!eo.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[bl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : to(l, u, c);
          }
    }
  }
  function M(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        re("error", l), re("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var y = u[r];
            if (y != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(G(137, n));
                default:
                  Fe(l, n, r, y, u, null);
              }
          }
        s && Fe(l, n, "srcSet", u.srcSet, u, null), c && Fe(l, n, "src", u.src, u, null);
        return;
      case "input":
        re("invalid", l);
        var m = r = y = s = null, g = null, R = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var V = u[c];
            if (V != null)
              switch (c) {
                case "name":
                  s = V;
                  break;
                case "type":
                  y = V;
                  break;
                case "checked":
                  g = V;
                  break;
                case "defaultChecked":
                  R = V;
                  break;
                case "value":
                  r = V;
                  break;
                case "defaultValue":
                  m = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(G(137, n));
                  break;
                default:
                  Fe(l, n, c, V, u, null);
              }
          }
        dh(
          l,
          r,
          m,
          g,
          R,
          y,
          s,
          !1
        ), Uc(l);
        return;
      case "select":
        re("invalid", l), c = y = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (m = u[s], m != null))
            switch (s) {
              case "value":
                r = m;
                break;
              case "defaultValue":
                y = m;
                break;
              case "multiple":
                c = m;
              default:
                Fe(l, n, s, m, u, null);
            }
        n = r, u = y, l.multiple = !!c, n != null ? _u(l, !!c, n, !1) : u != null && _u(l, !!c, u, !0);
        return;
      case "textarea":
        re("invalid", l), r = s = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (m = u[y], m != null))
            switch (y) {
              case "value":
                c = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "children":
                r = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(G(91));
                break;
              default:
                Fe(l, n, y, m, u, null);
            }
        yh(l, c, s, r), Uc(l);
        return;
      case "option":
        for (g in u)
          if (u.hasOwnProperty(g) && (c = u[g], c != null))
            switch (g) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Fe(l, n, g, c, u, null);
            }
        return;
      case "dialog":
        re("beforetoggle", l), re("toggle", l), re("cancel", l), re("close", l);
        break;
      case "iframe":
      case "object":
        re("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < fe.length; c++)
          re(fe[c], l);
        break;
      case "image":
        re("error", l), re("load", l);
        break;
      case "details":
        re("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        re("error", l), re("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in u)
          if (u.hasOwnProperty(R) && (c = u[R], c != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(G(137, n));
              default:
                Fe(l, n, R, c, u, null);
            }
        return;
      default:
        if (xc(n)) {
          for (V in u)
            u.hasOwnProperty(V) && (c = u[V], c !== void 0 && wt(
              l,
              n,
              V,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (m in u)
      u.hasOwnProperty(m) && (c = u[m], c != null && Fe(l, n, m, c, u, null));
  }
  function Ve(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, y = null, m = null, g = null, R = null, V = null;
        for (H in u) {
          var j = u[H];
          if (u.hasOwnProperty(H) && j != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = j;
              default:
                c.hasOwnProperty(H) || Fe(l, n, H, null, c, j);
            }
        }
        for (var D in c) {
          var H = c[D];
          if (j = u[D], c.hasOwnProperty(D) && (H != null || j != null))
            switch (D) {
              case "type":
                r = H;
                break;
              case "name":
                s = H;
                break;
              case "checked":
                R = H;
                break;
              case "defaultChecked":
                V = H;
                break;
              case "value":
                y = H;
                break;
              case "defaultValue":
                m = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(G(137, n));
                break;
              default:
                H !== j && Fe(
                  l,
                  n,
                  D,
                  H,
                  c,
                  j
                );
            }
        }
        rh(
          l,
          y,
          m,
          g,
          R,
          V,
          r,
          s
        );
        return;
      case "select":
        H = y = m = D = null;
        for (r in u)
          if (g = u[r], u.hasOwnProperty(r) && g != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                H = g;
              default:
                c.hasOwnProperty(r) || Fe(
                  l,
                  n,
                  r,
                  null,
                  c,
                  g
                );
            }
        for (s in c)
          if (r = c[s], g = u[s], c.hasOwnProperty(s) && (r != null || g != null))
            switch (s) {
              case "value":
                D = r;
                break;
              case "defaultValue":
                m = r;
                break;
              case "multiple":
                y = r;
              default:
                r !== g && Fe(
                  l,
                  n,
                  s,
                  r,
                  c,
                  g
                );
            }
        n = m, u = y, c = H, D != null ? _u(l, !!u, D, !1) : !!c != !!u && (n != null ? _u(l, !!u, n, !0) : _u(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        H = D = null;
        for (m in u)
          if (s = u[m], u.hasOwnProperty(m) && s != null && !c.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Fe(l, n, m, null, c, s);
            }
        for (y in c)
          if (s = c[y], r = u[y], c.hasOwnProperty(y) && (s != null || r != null))
            switch (y) {
              case "value":
                D = s;
                break;
              case "defaultValue":
                H = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(G(91));
                break;
              default:
                s !== r && Fe(l, n, y, s, c, r);
            }
        hh(l, D, H);
        return;
      case "option":
        for (var ue in u)
          if (D = u[ue], u.hasOwnProperty(ue) && D != null && !c.hasOwnProperty(ue))
            switch (ue) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Fe(
                  l,
                  n,
                  ue,
                  null,
                  c,
                  D
                );
            }
        for (g in c)
          if (D = c[g], H = u[g], c.hasOwnProperty(g) && D !== H && (D != null || H != null))
            switch (g) {
              case "selected":
                l.selected = D && typeof D != "function" && typeof D != "symbol";
                break;
              default:
                Fe(
                  l,
                  n,
                  g,
                  D,
                  c,
                  H
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var le in u)
          D = u[le], u.hasOwnProperty(le) && D != null && !c.hasOwnProperty(le) && Fe(l, n, le, null, c, D);
        for (R in c)
          if (D = c[R], H = u[R], c.hasOwnProperty(R) && D !== H && (D != null || H != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(G(137, n));
                break;
              default:
                Fe(
                  l,
                  n,
                  R,
                  D,
                  c,
                  H
                );
            }
        return;
      default:
        if (xc(n)) {
          for (var Xe in u)
            D = u[Xe], u.hasOwnProperty(Xe) && D !== void 0 && !c.hasOwnProperty(Xe) && wt(
              l,
              n,
              Xe,
              void 0,
              c,
              D
            );
          for (V in c)
            D = c[V], H = u[V], !c.hasOwnProperty(V) || D === H || D === void 0 && H === void 0 || wt(
              l,
              n,
              V,
              D,
              c,
              H
            );
          return;
        }
    }
    for (var A in u)
      D = u[A], u.hasOwnProperty(A) && D != null && !c.hasOwnProperty(A) && Fe(l, n, A, null, c, D);
    for (j in c)
      D = c[j], H = u[j], !c.hasOwnProperty(j) || D === H || D == null && H == null || Fe(l, n, j, D, c, H);
  }
  var Wy = null, us = null;
  function Of(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Mn(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Su(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function uc(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Un = null;
  function hd() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Un ? !1 : (Un = l, !0) : (Un = null, !1);
  }
  var Hn = typeof setTimeout == "function" ? setTimeout : void 0, Fy = typeof clearTimeout == "function" ? clearTimeout : void 0, tp = typeof Promise == "function" ? Promise : void 0, gv = typeof queueMicrotask == "function" ? queueMicrotask : typeof tp < "u" ? function(l) {
    return tp.resolve(null).then(l).catch(bv);
  } : Hn;
  function bv(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function rl(l) {
    return l === "head";
  }
  function lp(l, n) {
    var u = n, c = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && K(y.documentElement), u & 2 && K(y.body), u & 4)
              for (u = y.head, K(u), y = u.firstChild; y; ) {
                var m = y.nextSibling, g = y.nodeName;
                y[Pf] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = m;
              }
          }
          if (s === 0) {
            l.removeChild(r), Bf(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    Bf(n);
  }
  function is(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          is(u), ee(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Iy(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[Pf])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = rn(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Mf(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = rn(l.nextSibling), l === null)) return null;
    return l;
  }
  function Py(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function em(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function rn(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var tm = null;
  function ic(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function dl(l, n, u) {
    switch (n = Of(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(G(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(G(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(G(454));
        return l;
      default:
        throw Error(G(451));
    }
  }
  function K(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    ee(l);
  }
  var Mt = /* @__PURE__ */ new Map(), _a = /* @__PURE__ */ new Set();
  function el(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Tu = x.d;
  x.d = {
    f: Sv,
    r: yd,
    D: xn,
    C: Au,
    L: md,
    m: yi,
    X: aa,
    S: Rl,
    M: mi
  };
  function Sv() {
    var l = Tu.f(), n = Wo();
    return l || n;
  }
  function yd(l) {
    var n = cl(l);
    n !== null && n.tag === 5 && n.type === "form" ? D0(n) : Tu.r(l);
  }
  var Eu = typeof document > "u" ? null : document;
  function ga(l, n, u) {
    var c = Eu;
    if (c && typeof n == "string" && n) {
      var s = za(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), _a.has(s) || (_a.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), M(n, "link", l), Dt(n), c.head.appendChild(n)));
    }
  }
  function xn(l) {
    Tu.D(l), ga("dns-prefetch", l, null);
  }
  function Au(l, n) {
    Tu.C(l, n), ga("preconnect", l, n);
  }
  function md(l, n, u) {
    Tu.L(l, n, u);
    var c = Eu;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + za(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + za(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + za(
        u.imageSizes
      ) + '"]')) : s += '[href="' + za(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Uf(l);
          break;
        case "script":
          r = cc(l);
      }
      Mt.has(r) || (l = De(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Mt.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(cs(r)) || n === "script" && c.querySelector(dn(r)) || (n = c.createElement("link"), M(n, "link", l), Dt(n), c.head.appendChild(n)));
    }
  }
  function yi(l, n) {
    Tu.m(l, n);
    var u = Eu;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + za(c) + '"][href="' + za(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = cc(l);
      }
      if (!Mt.has(r) && (l = De({ rel: "modulepreload", href: l }, n), Mt.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(dn(r)))
              return;
        }
        c = u.createElement("link"), M(c, "link", l), Dt(c), u.head.appendChild(c);
      }
    }
  }
  function Rl(l, n, u) {
    Tu.S(l, n, u);
    var c = Eu;
    if (c && l) {
      var s = Dc(c).hoistableStyles, r = Uf(l);
      n = n || "default";
      var y = s.get(r);
      if (!y) {
        var m = { loading: 0, preload: null };
        if (y = c.querySelector(
          cs(r)
        ))
          m.loading = 5;
        else {
          l = De(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Mt.get(r)) && am(l, u);
          var g = y = c.createElement("link");
          Dt(g), M(g, "link", l), g._p = new Promise(function(R, V) {
            g.onload = R, g.onerror = V;
          }), g.addEventListener("load", function() {
            m.loading |= 1;
          }), g.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, gd(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: m
        }, s.set(r, y);
      }
    }
  }
  function aa(l, n) {
    Tu.X(l, n);
    var u = Eu;
    if (u && l) {
      var c = Dc(u).hoistableScripts, s = cc(l), r = c.get(s);
      r || (r = u.querySelector(dn(s)), r || (l = De({ src: l, async: !0 }, n), (n = Mt.get(s)) && bd(l, n), r = u.createElement("script"), Dt(r), M(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function mi(l, n) {
    Tu.M(l, n);
    var u = Eu;
    if (u && l) {
      var c = Dc(u).hoistableScripts, s = cc(l), r = c.get(s);
      r || (r = u.querySelector(dn(s)), r || (l = De({ src: l, async: !0, type: "module" }, n), (n = Mt.get(s)) && bd(l, n), r = u.createElement("script"), Dt(r), M(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function pd(l, n, u, c) {
    var s = (s = dt.current) ? el(s) : null;
    if (!s) throw Error(G(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Uf(u.href), u = Dc(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Uf(u.href);
          var r = Dc(
            s
          ).hoistableStyles, y = r.get(l);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, y), (r = s.querySelector(
            cs(l)
          )) && !r._p && (y.instance = r, y.state.loading = 5), Mt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Mt.set(l, u), r || fs(
            s,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(G(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(G(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = cc(u), u = Dc(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(G(444, l));
    }
  }
  function Uf(l) {
    return 'href="' + za(l) + '"';
  }
  function cs(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function lm(l) {
    return De({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function fs(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), M(n, "link", u), Dt(n), l.head.appendChild(n));
  }
  function cc(l) {
    return '[src="' + za(l) + '"]';
  }
  function dn(l) {
    return "script[async]" + l;
  }
  function vd(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + za(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Dt(c), c;
          var s = De({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Dt(c), M(c, "style", s), gd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Uf(u.href);
          var r = l.querySelector(
            cs(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Dt(r), r;
          c = lm(u), (s = Mt.get(s)) && am(c, s), r = (l.ownerDocument || l).createElement("link"), Dt(r);
          var y = r;
          return y._p = new Promise(function(m, g) {
            y.onload = m, y.onerror = g;
          }), M(r, "link", c), n.state.loading |= 4, gd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = cc(u.src), (s = l.querySelector(
            dn(r)
          )) ? (n.instance = s, Dt(s), s) : (c = u, (s = Mt.get(r)) && (c = De({}, u), bd(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Dt(s), M(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(G(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, gd(c, u.precedence, l));
    return n.instance;
  }
  function gd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, y = 0; y < c.length; y++) {
      var m = c[y];
      if (m.dataset.precedence === n) r = m;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function am(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function bd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var os = null;
  function Hf(l, n, u) {
    if (os === null) {
      var c = /* @__PURE__ */ new Map(), s = os = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = os, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Pf] || r[et] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = r.getAttribute(n) || "";
        y = l + y;
        var m = c.get(y);
        m ? m.push(r) : c.set(y, [r]);
      }
    }
    return c;
  }
  function nm(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function ap(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function um(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var xf = null;
  function np() {
  }
  function up(l, n, u) {
    if (xf === null) throw Error(G(475));
    var c = xf;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Uf(u.href), r = l.querySelector(
          cs(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Cf.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Dt(r);
          return;
        }
        r = l.ownerDocument || l, u = lm(u), (s = Mt.get(s)) && am(u, s), r = r.createElement("link"), Dt(r);
        var y = r;
        y._p = new Promise(function(m, g) {
          y.onload = m, y.onerror = g;
        }), M(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = Cf.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function ip() {
    if (xf === null) throw Error(G(475));
    var l = xf;
    return l.stylesheets && l.count === 0 && rs(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && rs(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Cf() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) rs(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var ss = null;
  function rs(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, ss = /* @__PURE__ */ new Map(), n.forEach(im, l), ss = null, Cf.call(l));
  }
  function im(l, n) {
    if (!(n.state.loading & 4)) {
      var u = ss.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), ss.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var y = s[r];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      s = n.instance, y = s.getAttribute("data-precedence"), r = u.get(y) || c, r === c && u.set(null, s), u.set(y, s), this.count++, c = Cf.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var hl = {
    $$typeof: Gt,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function Cn(l, n, u, c, s, r, y, m) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Nu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nu(0), this.hiddenUpdates = Nu(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function cp(l, n, u, c, s, r, y, m, g, R, V, j) {
    return l = new Cn(
      l,
      n,
      u,
      y,
      m,
      g,
      R,
      j
    ), n = 1, r === !0 && (n |= 24), r = Ql(3, null, null, n), l.current = r, r.stateNode = l, n = Gh(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Do(r), l;
  }
  function cm(l) {
    return l ? (l = Xi, l) : Xi;
  }
  function fm(l, n, u, c, s, r) {
    s = cm(s), c.context === null ? c.context = s : c.pendingContext = s, c = iu(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = wl(l, c, n), u !== null && (ta(u, l, n), Zi(u, l, n));
  }
  function om(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Sd(l, n) {
    om(l, n), (l = l.alternate) && om(l, n);
  }
  function sm(l) {
    if (l.tag === 13) {
      var n = eu(l, 67108864);
      n !== null && ta(n, l, 67108864), Sd(l, 67108864);
    }
  }
  var ds = !0;
  function fp(l, n, u, c) {
    var s = _.T;
    _.T = null;
    var r = x.p;
    try {
      x.p = 2, Td(l, n, u, c);
    } finally {
      x.p = r, _.T = s;
    }
  }
  function op(l, n, u, c) {
    var s = _.T;
    _.T = null;
    var r = x.p;
    try {
      x.p = 8, Td(l, n, u, c);
    } finally {
      x.p = r, _.T = s;
    }
  }
  function Td(l, n, u, c) {
    if (ds) {
      var s = rm(c);
      if (s === null)
        as(
          l,
          n,
          c,
          hs,
          u
        ), hm(l, c);
      else if (ym(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (hm(l, c), n & 4 && -1 < Tv.indexOf(l)) {
        for (; s !== null; ) {
          var r = cl(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var y = Ra(r.pendingLanes);
                  if (y !== 0) {
                    var m = r;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; y; ) {
                      var g = 1 << 31 - Gl(y);
                      m.entanglements[1] |= g, y &= ~g;
                    }
                    sn(r), (Ze & 6) === 0 && (Kr = gl() + 500, gu(0));
                  }
                }
                break;
              case 13:
                m = eu(r, 2), m !== null && ta(m, r, 2), Wo(), Sd(r, 2);
            }
          if (r = rm(c), r === null && as(
            l,
            n,
            c,
            hs,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        as(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function rm(l) {
    return l = Oi(l), dm(l);
  }
  var hs = null;
  function dm(l) {
    if (hs = null, l = qu(l), l !== null) {
      var n = st(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = kt(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return hs = l, null;
  }
  function sp(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_s()) {
          case Sc:
            return 2;
          case t0:
            return 8;
          case $f:
          case l0:
            return 32;
          case Gs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ed = !1, hn = null, Nn = null, Ru = null, Nf = /* @__PURE__ */ new Map(), ys = /* @__PURE__ */ new Map(), pi = [], Tv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function hm(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        hn = null;
        break;
      case "dragenter":
      case "dragleave":
        Nn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ru = null;
        break;
      case "pointerover":
      case "pointerout":
        Nf.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ys.delete(n.pointerId);
    }
  }
  function Bn(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = cl(n), n !== null && sm(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function ym(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return hn = Bn(
          hn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Nn = Bn(
          Nn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Ru = Bn(
          Ru,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return Nf.set(
          r,
          Bn(
            Nf.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, ys.set(
          r,
          Bn(
            ys.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function mm(l) {
    var n = qu(l.target);
    if (n !== null) {
      var u = st(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = kt(u), n !== null) {
            l.blockedOn = n, ev(l.priority, function() {
              if (u.tag === 13) {
                var c = pa();
                c = Rc(c);
                var s = eu(u, c);
                s !== null && ta(s, u, c), Sd(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function ms(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = rm(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        ws = c, u.target.dispatchEvent(c), ws = null;
      } else
        return n = cl(u), n !== null && sm(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function pm(l, n, u) {
    ms(l) && u.delete(n);
  }
  function Ad() {
    Ed = !1, hn !== null && ms(hn) && (hn = null), Nn !== null && ms(Nn) && (Nn = null), Ru !== null && ms(Ru) && (Ru = null), Nf.forEach(pm), ys.forEach(pm);
  }
  function zu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Ed || (Ed = !0, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      Ad
    )));
  }
  var Rd = null;
  function ps(l) {
    Rd !== l && (Rd = l, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      function() {
        Rd === l && (Rd = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (dm(c || u) === null)
              continue;
            break;
          }
          var r = cl(u);
          r !== null && (l.splice(n, 3), n -= 3, cy(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Bf(l) {
    function n(g) {
      return zu(g, l);
    }
    hn !== null && zu(hn, l), Nn !== null && zu(Nn, l), Ru !== null && zu(Ru, l), Nf.forEach(n), ys.forEach(n);
    for (var u = 0; u < pi.length; u++) {
      var c = pi[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < pi.length && (u = pi[0], u.blockedOn === null); )
      mm(u), u.blockedOn === null && pi.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], y = s[bl] || null;
        if (typeof r == "function")
          y || ps(u);
        else if (y) {
          var m = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, y = r[bl] || null)
              m = y.formAction;
            else if (dm(s) !== null) continue;
          } else m = y.action;
          typeof m == "function" ? u[c + 1] = m : (u.splice(c, 3), c -= 3), ps(u);
        }
      }
  }
  function vi(l) {
    this._internalRoot = l;
  }
  zd.prototype.render = vi.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(G(409));
    var u = n.current, c = pa();
    fm(u, c, l, n, null, null);
  }, zd.prototype.unmount = vi.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      fm(l.current, 2, null, l, null, null), Wo(), n[Ai] = null;
    }
  };
  function zd(l) {
    this._internalRoot = l;
  }
  zd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = nh();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < pi.length && n !== 0 && n < pi[u].priority; u++) ;
      pi.splice(u, 0, l), u === 0 && mm(l);
    }
  };
  var rp = vt.version;
  if (rp !== "19.1.0")
    throw Error(
      G(
        527,
        rp,
        "19.1.0"
      )
    );
  x.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(G(188)) : (l = Object.keys(l).join(","), Error(G(268, l)));
    return l = $t(n), l = l !== null ? k(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var dp = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tl.isDisabled && tl.supportsFiber)
      try {
        Tc = tl.inject(
          dp
        ), _l = tl;
      } catch {
      }
  }
  return Pm.createRoot = function(l, n) {
    if (!xe(l)) throw Error(G(299));
    var u = !1, c = "", s = my, r = rf, y = py, m = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (m = n.unstable_transitionCallbacks)), n = cp(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      y,
      m,
      null
    ), l[Ai] = n.current, ls(l), new vi(n);
  }, Pm.hydrateRoot = function(l, n, u) {
    if (!xe(l)) throw Error(G(299));
    var c = !1, s = "", r = my, y = rf, m = py, g = null, R = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (m = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (g = u.unstable_transitionCallbacks), u.formState !== void 0 && (R = u.formState)), n = cp(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      y,
      m,
      g,
      R
    ), n.context = cm(null), u = n.current, c = pa(), c = Rc(c), s = iu(c), s.callback = null, wl(u, s, c), u = c, n.current.lanes = u, bn(n, u), sn(n), l[Ai] = n.current, ls(l), new zd(n);
  }, Pm.version = "19.1.0", Pm;
}
var e0 = {}, Hb;
function KS() {
  if (Hb) return e0;
  Hb = 1;
  var L = {};
  /**
   * @license React
   * react-dom-client.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return L.NODE_ENV !== "production" && function() {
    function vt(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function Pe(e, t, a, i) {
      if (a >= t.length) return i;
      var f = t[a], o = wt(e) ? e.slice() : fe({}, e);
      return o[f] = Pe(e[f], t, a + 1, i), o;
    }
    function G(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return xe(e, t, a, 0);
      }
    }
    function xe(e, t, a, i) {
      var f = t[i], o = wt(e) ? e.slice() : fe({}, e);
      return i + 1 === t.length ? (o[a[i]] = o[f], wt(o) ? o.splice(f, 1) : delete o[f]) : o[f] = xe(
        e[f],
        t,
        a,
        i + 1
      ), o;
    }
    function st(e, t, a) {
      var i = t[a], f = wt(e) ? e.slice() : fe({}, e);
      return a + 1 === t.length ? (wt(f) ? f.splice(i, 1) : delete f[i], f) : (f[i] = st(e[i], t, a + 1), f);
    }
    function kt() {
      return !1;
    }
    function vl() {
      return null;
    }
    function $t() {
    }
    function k() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function De() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Yt() {
    }
    function Ce(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function we(e, t, a, i) {
      return new fv(e, t, a, i);
    }
    function at(e, t) {
      e.context === qf && (Io(e.current, 2, t, e, null, null), Fi());
    }
    function _t(e, t) {
      if (_n !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, Pu(), Ni(
          e.current,
          t,
          a
        ), Fi();
      }
    }
    function ua(e) {
      _n = e;
    }
    function zt(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Je(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Gt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function ul(e) {
      if (Je(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Ol(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Je(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var f = a.return;
        if (f === null) break;
        var o = f.alternate;
        if (o === null) {
          if (i = f.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (f.child === o.child) {
          for (o = f.child; o; ) {
            if (o === a) return ul(f), e;
            if (o === i) return ul(f), t;
            o = o.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = f, i = o;
        else {
          for (var d = !1, h = f.child; h; ) {
            if (h === a) {
              d = !0, a = f, i = o;
              break;
            }
            if (h === i) {
              d = !0, i = f, a = o;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = o.child; h; ) {
              if (h === a) {
                d = !0, a = o, i = f;
                break;
              }
              if (h === i) {
                d = !0, i = o, a = f;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function il(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = il(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Ut(e) {
      return e === null || typeof e != "object" ? null : (e = ns && e[ns] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Me(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Fe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case ri:
          return "Fragment";
        case ls:
          return "Profiler";
        case nc:
          return "StrictMode";
        case hi:
          return "Suspense";
        case sd:
          return "SuspenseList";
        case dd:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case re:
            return "Portal";
          case la:
            return (e.displayName || "Context") + ".Provider";
          case as:
            return (e._context.displayName || "Context") + ".Consumer";
          case di:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case rd:
            return t = e.displayName || null, t !== null ? t : Me(e.type) || "Memo";
          case va:
            t = e._payload, e = e._init;
            try {
              return Me(e(t));
            } catch {
            }
        }
      return null;
    }
    function ia(e) {
      return typeof e.tag == "number" ? ae(e) : typeof e.name == "string" ? e.name : null;
    }
    function ae(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Me(t);
        case 8:
          return t === nc ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return ae(e.return);
      }
      return null;
    }
    function rt(e) {
      return { current: e };
    }
    function Ae(e, t) {
      0 > Mn ? console.error("Unexpected pop.") : (t !== Of[Mn] && console.error("Unexpected Fiber popped."), e.current = us[Mn], us[Mn] = null, Of[Mn] = null, Mn--);
    }
    function Ue(e, t, a) {
      Mn++, us[Mn] = e.current, Of[Mn] = a, e.current = t;
    }
    function Vt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Xt(e, t) {
      Ue(Un, t, e), Ue(uc, e, e), Ue(Su, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Pl(t) : pc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = Pl(t), t = mu(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Pd;
                break;
              case "math":
                t = jp;
                break;
              default:
                t = pc;
            }
      }
      a = a.toLowerCase(), a = yh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Ae(Su, e), Ue(Su, a, e);
    }
    function _(e) {
      Ae(Su, e), Ae(uc, e), Ae(Un, e);
    }
    function x() {
      return Vt(Su.current);
    }
    function Z(e) {
      e.memoizedState !== null && Ue(hd, e, e);
      var t = Vt(Su.current), a = e.type, i = mu(t.context, a);
      a = yh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ue(uc, e, e), Ue(Su, i, e));
    }
    function W(e) {
      uc.current === e && (Ae(Su, e), Ae(uc, e)), hd.current === e && (Ae(hd, e), km._currentValue = qs);
    }
    function ne(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Y(e) {
      try {
        return $(e), !1;
      } catch {
        return !0;
      }
    }
    function $(e) {
      return "" + e;
    }
    function w(e, t) {
      if (Y(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ne(e)
        ), $(e);
    }
    function ye(e, t) {
      if (Y(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ne(e)
        ), $(e);
    }
    function je(e) {
      if (Y(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ne(e)
        ), $(e);
    }
    function dt(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        ic = t.inject(e), dl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function _e(e) {
      if (typeof rn == "function" && tm(e), dl && typeof dl.setStrictMode == "function")
        try {
          dl.setStrictMode(ic, e);
        } catch (t) {
          Mt || (Mt = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function xu(e) {
      K = e;
    }
    function ht() {
      K !== null && typeof K.markCommitStopped == "function" && K.markCommitStopped();
    }
    function Yl(e) {
      K !== null && typeof K.markComponentRenderStarted == "function" && K.markComponentRenderStarted(e);
    }
    function ca() {
      K !== null && typeof K.markComponentRenderStopped == "function" && K.markComponentRenderStopped();
    }
    function bc(e) {
      K !== null && typeof K.markRenderStarted == "function" && K.markRenderStarted(e);
    }
    function Ys() {
      K !== null && typeof K.markRenderStopped == "function" && K.markRenderStopped();
    }
    function Ei(e, t) {
      K !== null && typeof K.markStateUpdateScheduled == "function" && K.markStateUpdateScheduled(e, t);
    }
    function Fp(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Tu(e) / Sv | 0) | 0;
    }
    function Ip(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function gl(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function _s(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var f = 0, o = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~o, i !== 0 ? f = gl(i) : (d &= h, d !== 0 ? f = gl(d) : a || (a = h & ~e, a !== 0 && (f = gl(a))))) : (h = i & ~o, h !== 0 ? f = gl(h) : d !== 0 ? f = gl(d) : a || (a = i & ~e, a !== 0 && (f = gl(a)))), f === 0 ? 0 : t !== 0 && t !== f && (t & o) === 0 && (o = f & -f, a = t & -t, o >= a || o === 32 && (a & 4194048) !== 0) ? t : f;
    }
    function Sc(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function t0(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function $f() {
      var e = yd;
      return yd <<= 1, (yd & 4194048) === 0 && (yd = 256), e;
    }
    function l0() {
      var e = Eu;
      return Eu <<= 1, (Eu & 62914560) === 0 && (Eu = 4194304), e;
    }
    function Gs(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Wf(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Pp(e, t, a, i, f, o) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, p = e.expirationTimes, v = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var U = 31 - el(a), N = 1 << U;
        h[U] = 0, p[U] = -1;
        var O = v[U];
        if (O !== null)
          for (v[U] = null, U = 0; U < O.length; U++) {
            var B = O[U];
            B !== null && (B.lane &= -536870913);
          }
        a &= ~N;
      }
      i !== 0 && Tc(e, i, 0), o !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(d & ~t));
    }
    function Tc(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - el(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function _l(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - el(a), f = 1 << i;
        f & t | e[i] & t && (e[i] |= t), a &= ~f;
      }
    }
    function vn(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Gl(e, t, a) {
      if (_a)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - el(a), f = 1 << i;
          e[i].add(t), a &= ~f;
        }
    }
    function a0(e, t) {
      if (_a)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var f = 31 - el(t);
          e = 1 << f, f = a[f], 0 < f.size && (f.forEach(function(o) {
            var d = o.alternate;
            d !== null && i.has(d) || i.add(o);
          }), f.clear()), t &= ~e;
        }
    }
    function th(e) {
      return e &= -e, ga < e ? xn < e ? (e & 134217727) !== 0 ? Au : md : xn : ga;
    }
    function n0() {
      var e = Ve.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Au : si(e.type));
    }
    function Vs(e, t) {
      var a = Ve.p;
      try {
        return Ve.p = e, t();
      } finally {
        Ve.p = a;
      }
    }
    function Ec(e) {
      delete e[Rl], delete e[aa], delete e[pd], delete e[Uf], delete e[cs];
    }
    function Ra(e) {
      var t = e[Rl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[mi] || a[Rl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Wr(e); e !== null; ) {
              if (a = e[Rl])
                return a;
              e = Wr(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function gn(e) {
      if (e = e[Rl] || e[mi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Kn(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Ac(e) {
      var t = e[lm];
      return t || (t = e[lm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function jt(e) {
      e[fs] = !0;
    }
    function Cu(e, t) {
      Nu(e, t), Nu(e + "Capture", t);
    }
    function Nu(e, t) {
      dn[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), dn[e] = t;
      var a = e.toLowerCase();
      for (vd[a] = e, e === "onDoubleClick" && (vd.ondblclick = e), e = 0; e < t.length; e++)
        cc.add(t[e]);
    }
    function bn(e, t) {
      gd[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function lh(e) {
      return Hn.call(os, e) ? !0 : Hn.call(bd, e) ? !1 : am.test(e) ? os[e] = !0 : (bd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function ah(e, t, a) {
      if (lh(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (w(a, t), e === "" + a ? a : e);
      }
    }
    function Ff(e, t, a) {
      if (lh(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          w(a, t), e.setAttribute(t, "" + a);
        }
    }
    function Rc(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        w(a, t), e.setAttribute(t, "" + a);
      }
    }
    function ja(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        w(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function nh() {
    }
    function ev() {
      if (Hf === 0) {
        nm = console.log, ap = console.info, um = console.warn, xf = console.error, np = console.group, up = console.groupCollapsed, ip = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: nh,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Hf++;
    }
    function Bu() {
      if (Hf--, Hf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: fe({}, e, { value: nm }),
          info: fe({}, e, { value: ap }),
          warn: fe({}, e, { value: um }),
          error: fe({}, e, { value: xf }),
          group: fe({}, e, { value: np }),
          groupCollapsed: fe({}, e, { value: up }),
          groupEnd: fe({}, e, { value: ip })
        });
      }
      0 > Hf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function et(e) {
      if (Cf === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Cf = t && t[1] || "", ss = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Cf + e + ss;
    }
    function bl(e, t) {
      if (!e || rs) return "";
      var a = im.get(e);
      if (a !== void 0) return a;
      rs = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = M.H, M.H = null, ev();
      try {
        var f = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var O = function() {
                  throw Error();
                };
                if (Object.defineProperty(O.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(O, []);
                  } catch (I) {
                    var B = I;
                  }
                  Reflect.construct(e, [], O);
                } else {
                  try {
                    O.call();
                  } catch (I) {
                    B = I;
                  }
                  e.call(O.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (I) {
                  B = I;
                }
                (O = e()) && typeof O.catch == "function" && O.catch(function() {
                });
              }
            } catch (I) {
              if (I && B && typeof I.stack == "string")
                return [I.stack, B.stack];
            }
            return [null, null];
          }
        };
        f.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var o = Object.getOwnPropertyDescriptor(
          f.DetermineComponentFrameRoot,
          "name"
        );
        o && o.configurable && Object.defineProperty(
          f.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = f.DetermineComponentFrameRoot(), h = d[0], p = d[1];
        if (h && p) {
          var v = h.split(`
`), U = p.split(`
`);
          for (d = o = 0; o < v.length && !v[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          for (; d < U.length && !U[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (o === v.length || d === U.length)
            for (o = v.length - 1, d = U.length - 1; 1 <= o && 0 <= d && v[o] !== U[d]; )
              d--;
          for (; 1 <= o && 0 <= d; o--, d--)
            if (v[o] !== U[d]) {
              if (o !== 1 || d !== 1)
                do
                  if (o--, d--, 0 > d || v[o] !== U[d]) {
                    var N = `
` + v[o].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && im.set(e, N), N;
                  }
                while (1 <= o && 0 <= d);
              break;
            }
        }
      } finally {
        rs = !1, M.H = i, Bu(), Error.prepareStackTrace = a;
      }
      return v = (v = e ? e.displayName || e.name : "") ? et(v) : "", typeof e == "function" && im.set(e, v), v;
    }
    function Ai(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function uh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return et(e.type);
        case 16:
          return et("Lazy");
        case 13:
          return et("Suspense");
        case 19:
          return et("SuspenseList");
        case 0:
        case 15:
          return bl(e.type, !1);
        case 11:
          return bl(e.type.render, !1);
        case 1:
          return bl(e.type, !0);
        case 31:
          return et("Activity");
        default:
          return "";
      }
    }
    function u0(e) {
      try {
        var t = "";
        do {
          t += uh(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var f = a[i];
              if (typeof f.name == "string") {
                var o = t, d = f.env, h = et(
                  f.name + (d ? " [" + d + "]" : "")
                );
                t = o + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (p) {
        return `
Error generating stack: ` + p.message + `
` + p.stack;
      }
    }
    function i0(e) {
      return (e = e ? e.displayName || e.name : "") ? et(e) : "";
    }
    function If() {
      if (hl === null) return null;
      var e = hl._debugOwner;
      return e != null ? ia(e) : null;
    }
    function Pf() {
      if (hl === null) return "";
      var e = hl;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += et(e.type);
            break;
          case 13:
            t += et("Suspense");
            break;
          case 19:
            t += et("SuspenseList");
            break;
          case 31:
            t += et("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += i0(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += i0(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Ai(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + Ai(f));
          } else break;
        var o = t;
      } catch (d) {
        o = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return o;
    }
    function ee(e, t, a, i, f, o, d) {
      var h = hl;
      qu(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, f, o, d)
        ) : t(a, i, f, o, d);
      } finally {
        qu(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function qu(e) {
      M.getCurrentStack = e === null ? null : Pf, Cn = !1, hl = e;
    }
    function cl(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return je(e), e;
        default:
          return "";
      }
    }
    function zc(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Dc(e) {
      var t = zc(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      je(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var f = a.get, o = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return f.call(this);
          },
          set: function(d) {
            je(d), i = "" + d, o.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            je(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Dt(e) {
      e._valueTracker || (e._valueTracker = Dc(e));
    }
    function ih(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = zc(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function eo(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Wt(e) {
      return e.replace(
        cp,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Ri(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || fm || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        If() || "A component",
        t.type
      ), fm = !0), t.value === void 0 || t.defaultValue === void 0 || cm || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        If() || "A component",
        t.type
      ), cm = !0);
    }
    function ch(e, t, a, i, f, o, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (w(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + cl(t)) : e.value !== "" + cl(t) && (e.value = "" + cl(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Xs(e, d, cl(t)) : a != null ? Xs(e, d, cl(a)) : i != null && e.removeAttribute("value"), f == null && o != null && (e.defaultChecked = !!o), f != null && (e.checked = f && typeof f != "function" && typeof f != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (w(h, "name"), e.name = "" + cl(h)) : e.removeAttribute("name");
    }
    function fh(e, t, a, i, f, o, d, h) {
      if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (w(o, "type"), e.type = o), t != null || a != null) {
        if (!(o !== "submit" && o !== "reset" || t != null))
          return;
        a = a != null ? "" + cl(a) : "", t = t != null ? "" + cl(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? f, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (w(d, "name"), e.name = d);
    }
    function Xs(e, t, a) {
      t === "number" && eo(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function c0(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? $y.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || Sd || (Sd = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || sm || (sm = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || om || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), om = !0);
    }
    function to() {
      var e = If();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function kn(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var f = 0; f < a.length; f++)
          t["$" + a[f]] = !0;
        for (a = 0; a < e.length; a++)
          f = t.hasOwnProperty("$" + e[a].value), e[a].selected !== f && (e[a].selected = f), f && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + cl(a), t = null, f = 0; f < e.length; f++) {
          if (e[f].value === a) {
            e[f].selected = !0, i && (e[f].defaultSelected = !0);
            return;
          }
          t !== null || e[f].disabled || (t = e[f]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Sn(e, t) {
      for (e = 0; e < fp.length; e++) {
        var a = fp[e];
        if (t[a] != null) {
          var i = wt(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            to()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            to()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || ds || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), ds = !0);
    }
    function js(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || op || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        If() || "A component"
      ), op = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function oh(e, t, a) {
      if (t != null && (t = "" + cl(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + cl(a) : "";
    }
    function zi(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (wt(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = cl(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Qs(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Qs(e.children[0], t) : e;
    }
    function Ml(e) {
      return "  " + "  ".repeat(e);
    }
    function Oc(e) {
      return "+ " + "  ".repeat(e);
    }
    function Yu(e) {
      return "- " + "  ".repeat(e);
    }
    function fa(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Mc(e, t) {
      return Td.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function Zs(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Oc(a) + Mc(e, i) + `
`;
      if (typeof t == "string") {
        for (var f = 0; f < t.length && f < e.length && t.charCodeAt(f) === e.charCodeAt(f); f++) ;
        return f > i - 8 && 10 < f && (e = "..." + e.slice(f - 8), t = "..." + t.slice(f - 8)), Oc(a) + Mc(e, i) + `
` + Yu(a) + Mc(t, i) + `
`;
      }
      return Ml(a) + Mc(e, i) + `
`;
    }
    function Uc(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Hc(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (wt(e)) return "[...]";
          if (e.$$typeof === bu)
            return (t = Me(e.type)) ? "<" + t + ">" : "<...>";
          var a = Uc(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var f = JSON.stringify(i);
                if (f !== '"' + i + '"' && (i = f), t -= i.length - 2, f = Hc(
                  e[i],
                  15 > t ? t : 15
                ), t -= f.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + f;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function $n(e, t) {
      return typeof e != "string" || Td.test(e) ? "{" + Hc(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function sh(e, t, a) {
      var i = 120 - a.length - e.length, f = [], o;
      for (o in t)
        if (t.hasOwnProperty(o) && o !== "children") {
          var d = $n(
            t[o],
            120 - a.length - o.length - 1
          );
          i -= o.length + d.length + 2, f.push(o + "=" + d);
        }
      return f.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + f.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + f.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function za(e, t, a) {
      var i = "", f = fe({}, t), o;
      for (o in e)
        if (e.hasOwnProperty(o)) {
          delete f[o];
          var d = 120 - 2 * a - o.length - 2, h = Hc(e[o], d);
          t.hasOwnProperty(o) ? (d = Hc(t[o], d), i += Oc(a) + o + ": " + h + `
`, i += Yu(a) + o + ": " + d + `
`) : i += Oc(a) + o + ": " + h + `
`;
        }
      for (var p in f)
        f.hasOwnProperty(p) && (e = Hc(
          f[p],
          120 - 2 * a - p.length - 2
        ), i += Yu(a) + p + ": " + e + `
`);
      return i;
    }
    function rh(e, t, a, i) {
      var f = "", o = /* @__PURE__ */ new Map();
      for (v in a)
        a.hasOwnProperty(v) && o.set(
          v.toLowerCase(),
          v
        );
      if (o.size === 1 && o.has("children"))
        f += sh(
          e,
          t,
          Ml(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, p = o.get(d.toLowerCase());
            if (p !== void 0) {
              o.delete(d.toLowerCase());
              var v = t[d];
              p = a[p];
              var U = $n(
                v,
                h
              );
              h = $n(
                p,
                h
              ), typeof v == "object" && v !== null && typeof p == "object" && p !== null && Uc(v) === "Object" && Uc(p) === "Object" && (2 < Object.keys(v).length || 2 < Object.keys(p).length || -1 < U.indexOf("...") || -1 < h.indexOf("...")) ? f += Ml(i + 1) + d + `={{
` + za(
                v,
                p,
                i + 2
              ) + Ml(i + 1) + `}}
` : (f += Oc(i + 1) + d + "=" + U + `
`, f += Yu(i + 1) + d + "=" + h + `
`);
            } else
              f += Ml(i + 1) + d + "=" + $n(t[d], h) + `
`;
          }
        o.forEach(function(N) {
          if (N !== "children") {
            var O = 120 - 2 * (i + 1) - N.length - 1;
            f += Yu(i + 1) + N + "=" + $n(a[N], O) + `
`;
          }
        }), f = f === "" ? Ml(i) + "<" + e + `>
` : Ml(i) + "<" + e + `
` + f + Ml(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (o = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = "" + t), f += Zs(o, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = e == null ? f + Zs("" + t, null, i + 1) : f + Zs("" + t, void 0, i + 1)), f;
    }
    function dh(e, t) {
      var a = fa(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += dh(e, t), e = e.sibling;
        return a;
      }
      return Ml(t) + "<" + a + `>
`;
    }
    function lo(e, t) {
      var a = Qs(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ml(t) + `...
` + lo(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var f = 0; f < i.length; f++) {
          var o = i[f].name;
          typeof o == "string" && (a += Ml(t) + "<" + o + `>
`, t++);
        }
      if (i = "", f = e.fiber.pendingProps, e.fiber.tag === 6)
        i = Zs(f, e.serverProps, t), t++;
      else if (o = fa(e.fiber), o !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - o.length - 2, h = "";
          for (v in f)
            if (f.hasOwnProperty(v) && v !== "children") {
              var p = $n(f[v], 15);
              if (d -= v.length + p.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + v + "=" + p;
            }
          i = Ml(i) + "<" + o + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = sh(
            o,
            f,
            Oc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = rh(
            o,
            f,
            e.serverProps,
            t
          ), t++);
      var v = "";
      for (f = e.fiber.child, o = 0; f && o < e.children.length; )
        d = e.children[o], d.fiber === f ? (v += lo(d, t), o++) : v += dh(f, t), f = f.sibling;
      for (f && 0 < e.children.length && (v += Ml(t) + `...
`), f = e.serverTail, e.serverProps === null && t--, e = 0; e < f.length; e++)
        o = f[e], v = typeof o == "string" ? v + (Yu(t) + Mc(o, 120 - 2 * t) + `
`) : v + sh(
          o.type,
          o.props,
          Yu(t)
        );
      return a + i + v;
    }
    function _u(e) {
      try {
        return `

` + lo(e, 0);
      } catch {
        return "";
      }
    }
    function hh(e, t, a) {
      for (var i = t, f = null, o = 0; i; )
        i === e && (o = 0), f = {
          fiber: i,
          children: f !== null ? [f] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: o
        }, o++, i = i.return;
      return f !== null ? _u(f).replaceAll(/^[+-]/gm, ">") : "";
    }
    function yh(e, t) {
      var a = fe({}, e || Ed), i = { tag: t };
      return hs.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), dm.indexOf(t) !== -1 && (a.pTagInButtonScope = null), rm.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Di(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return sp.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function tv(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function mh(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function Ls(e, t) {
      t = t || Ed;
      var a = t.current;
      if (t = (a = Di(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : tv(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, hn[t]) return !1;
      hn[t] = !0;
      var f = (t = hl) ? mh(t.return, i) : null, o = t !== null && f !== null ? hh(f, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        o
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        o
      ), t && (e = t.return, f === null || e === null || f === e && e._debugOwner === t._debugOwner || ee(f, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function xc(e, t, a) {
      if (a || Di("#text", t, !1))
        return !0;
      if (a = "#text|" + t, hn[a]) return !1;
      hn[a] = !0;
      var i = (a = hl) ? mh(a, t) : null;
      return a = a !== null && i !== null ? hh(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function ao(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function lv(e) {
      return e.replace(Tv, function(t, a) {
        return a.toUpperCase();
      });
    }
    function no(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? Bn.hasOwnProperty(t) && Bn[t] || (Bn[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        lv(t.replace(pi, "ms-"))
      )) : ys.test(t) ? Bn.hasOwnProperty(t) && Bn[t] || (Bn[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !hm.test(a) || ym.hasOwnProperty(a) && ym[a] || (ym[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(hm, "")
      )), typeof a == "number" && (isNaN(a) ? mm || (mm = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || ms || (ms = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || pm.has(t) ? t === "float" ? e.cssFloat = a : (ye(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function ws(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var f in a)
              if (a.hasOwnProperty(f) && !t.hasOwnProperty(f))
                for (var o = Nn[f] || [f], d = 0; d < o.length; d++)
                  i[o[d]] = f;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (f = Nn[h] || [h], o = 0; o < f.length; o++)
                i[f[o]] = h;
          h = {};
          for (var p in t)
            for (f = Nn[p] || [p], o = 0; o < f.length; o++)
              h[f[o]] = p;
          p = {};
          for (var v in i)
            if (f = i[v], (o = h[v]) && f !== o && (d = f + "," + o, !p[d])) {
              p[d] = !0, d = console;
              var U = t[f];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                U == null || typeof U == "boolean" || U === "" ? "Removing" : "Updating",
                f,
                o
              );
            }
        }
        for (var N in a)
          !a.hasOwnProperty(N) || t != null && t.hasOwnProperty(N) || (N.indexOf("--") === 0 ? e.setProperty(N, "") : N === "float" ? e.cssFloat = "" : e[N] = "");
        for (var O in t)
          v = t[O], t.hasOwnProperty(O) && a[O] !== v && no(e, O, v);
      } else
        for (i in t)
          t.hasOwnProperty(i) && no(e, i, t[i]);
    }
    function Oi(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Mi(e) {
      return Rd.get(e) || e;
    }
    function Cc(e, t) {
      if (Hn.call(vi, t) && vi[t])
        return !0;
      if (rp.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Bf.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), vi[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), vi[t] = !0;
      }
      if (zd.test(t)) {
        if (e = t.toLowerCase(), e = Bf.hasOwnProperty(e) ? e : null, e == null) return vi[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), vi[t] = !0);
      }
      return !0;
    }
    function f0(e, t) {
      var a = [], i;
      for (i in t)
        Cc(e, i) || a.push(i);
      t = a.map(function(f) {
        return "`" + f + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function ph(e, t, a, i) {
      if (Hn.call(tl, t) && tl[t])
        return !0;
      var f = t.toLowerCase();
      if (f === "onfocusin" || f === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), tl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(f) ? e[f] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), tl[t] = !0;
        if (l.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), tl[t] = !0;
      } else if (l.test(t))
        return n.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), tl[t] = !0;
      if (u.test(t) || c.test(t)) return !0;
      if (f === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), tl[t] = !0;
      if (f === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), tl[t] = !0;
      if (f === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), tl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), tl[t] = !0;
      if (ps.hasOwnProperty(f)) {
        if (f = ps[f], f !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            f
          ), tl[t] = !0;
      } else if (t !== f)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          f
        ), tl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return f = t.toLowerCase().slice(0, 5), f === "data-" || f === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), tl[t] = !0);
          }
        case "function":
        case "symbol":
          return tl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), tl[t] = !0;
          }
      }
      return !0;
    }
    function o0(e, t, a) {
      var i = [], f;
      for (f in t)
        ph(e, f, t[f], a) || i.push(f);
      t = i.map(function(o) {
        return "`" + o + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Wn(e) {
      return s.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Qa(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function Js(e) {
      var t = gn(e);
      if (t && (e = t.stateNode)) {
        var a = e[aa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (ch(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (w(t, "name"), a = a.querySelectorAll(
                'input[name="' + Wt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var f = i[aa] || null;
                  if (!f)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  ch(
                    i,
                    f.value,
                    f.defaultValue,
                    f.defaultValue,
                    f.checked,
                    f.defaultChecked,
                    f.type,
                    f.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && ih(i);
            }
            break e;
          case "textarea":
            oh(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && kn(e, !!a.multiple, t, !1);
        }
      }
    }
    function Nc(e, t, a) {
      if (g) return e(t, a);
      g = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (g = !1, (y !== null || m !== null) && (Fi(), y && (t = y, e = m, m = y = null, Js(t), e)))
          for (t = 0; t < e.length; t++) Js(e[t]);
      }
    }
    function Da(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[aa] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Ks() {
      if (ue) return ue;
      var e, t = H, a = t.length, i, f = "value" in D ? D.value : D.textContent, o = f.length;
      for (e = 0; e < a && t[e] === f[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === f[o - i]; i++) ;
      return ue = f.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Ui(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function uo() {
      return !0;
    }
    function io() {
      return !1;
    }
    function fl(e) {
      function t(a, i, f, o, d) {
        this._reactName = a, this._targetInst = f, this.type = i, this.nativeEvent = o, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(o) : o[h]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? uo : io, this.isPropagationStopped = io, this;
      }
      return fe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = uo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = uo);
        },
        persist: function() {
        },
        isPersistent: uo
      }), t;
    }
    function s0(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = jb[e]) ? !!t[e] : !1;
    }
    function Sl() {
      return s0;
    }
    function Gu(e, t) {
      switch (e) {
        case "keyup":
          return Pb.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Og;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function co(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function fo(e, t) {
      switch (e) {
        case "compositionend":
          return co(t);
        case "keypress":
          return t.which !== Ug ? null : (xg = !0, Hg);
        case "textInput":
          return e = t.data, e === Hg && xg ? null : e;
        default:
          return null;
      }
    }
    function av(e, t) {
      if (Dd)
        return e === "compositionend" || !Av && Gu(e, t) ? (e = Ks(), ue = H = D = null, Dd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Mg && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function ks(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!tS[e.type] : t === "textarea";
    }
    function vh(e) {
      if (!R) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Bc(e, t, a, i) {
      y ? m ? m.push(i) : m = [i] : y = i, t = Al(t, "onChange"), 0 < t.length && (a = new Xe(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function $s(e) {
      Ny(e, 0);
    }
    function oo(e) {
      var t = Kn(e);
      if (ih(t)) return e;
    }
    function r0(e, t) {
      if (e === "change") return t;
    }
    function d0() {
      gm && (gm.detachEvent("onpropertychange", h0), bm = gm = null);
    }
    function h0(e) {
      if (e.propertyName === "value" && oo(bm)) {
        var t = [];
        Bc(
          t,
          bm,
          e,
          Qa(e)
        ), Nc($s, t);
      }
    }
    function gh(e, t, a) {
      e === "focusin" ? (d0(), gm = t, bm = a, gm.attachEvent("onpropertychange", h0)) : e === "focusout" && d0();
    }
    function nv(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return oo(bm);
    }
    function uv(e, t) {
      if (e === "click") return oo(t);
    }
    function iv(e, t) {
      if (e === "input" || e === "change")
        return oo(t);
    }
    function cv(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function so(e, t) {
      if (ba(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var f = a[i];
        if (!Hn.call(t, f) || !ba(e[f], t[f]))
          return !1;
      }
      return !0;
    }
    function bh(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function y0(e, t) {
      var a = bh(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = bh(a);
      }
    }
    function m0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? m0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function p0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = eo(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = eo(e.document);
      }
      return t;
    }
    function Sh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Ws(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      zv || Od == null || Od !== eo(i) || (i = Od, "selectionStart" in i && Sh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Sm && so(Sm, i) || (Sm = i, i = Al(Rv, "onSelect"), 0 < i.length && (t = new Xe(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Od)));
    }
    function Hi(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function xi(e) {
      if (Dv[e]) return Dv[e];
      if (!Md[e]) return e;
      var t = Md[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in Ng)
          return Dv[e] = t[a];
      return e;
    }
    function Za(e, t) {
      Gg.set(e, t), Cu(t, [e]);
    }
    function Vl(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Mv.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: u0(t)
        }, Mv.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: u0(t)
      };
    }
    function Fs() {
      for (var e = Ud, t = Hv = Ud = 0; t < e; ) {
        var a = Yn[t];
        Yn[t++] = null;
        var i = Yn[t];
        Yn[t++] = null;
        var f = Yn[t];
        Yn[t++] = null;
        var o = Yn[t];
        if (Yn[t++] = null, i !== null && f !== null) {
          var d = i.pending;
          d === null ? f.next = f : (f.next = d.next, d.next = f), i.pending = f;
        }
        o !== 0 && v0(a, f, o);
      }
    }
    function Is(e, t, a, i) {
      Yn[Ud++] = e, Yn[Ud++] = t, Yn[Ud++] = a, Yn[Ud++] = i, Hv |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Th(e, t, a, i) {
      return Is(e, t, a, i), Ps(e);
    }
    function Xl(e, t) {
      return Is(e, null, null, t), Ps(e);
    }
    function v0(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var f = !1, o = e.return; o !== null; )
        o.childLanes |= a, i = o.alternate, i !== null && (i.childLanes |= a), o.tag === 22 && (e = o.stateNode, e === null || e._visibility & Uv || (f = !0)), e = o, o = o.return;
      return e.tag === 3 ? (o = e.stateNode, f && t !== null && (f = 31 - el(a), e = o.hiddenUpdates, i = e[f], i === null ? e[f] = [t] : i.push(t), t.lane = a | 536870912), o) : null;
    }
    function Ps(e) {
      if (Qm > RS)
        throw Hs = Qm = 0, Zm = ig = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Hs > zS && (Hs = 0, Zm = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Uy(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Uy(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Ci(e) {
      if (_n === null) return e;
      var t = _n(e);
      return t === void 0 ? e : t.current;
    }
    function Eh(e) {
      if (_n === null) return e;
      var t = _n(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Ci(e.render), e.render !== t) ? (t = { $$typeof: di, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function g0(e, t) {
      if (_n === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, f = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || f === va) && (i = !0);
          break;
        case 11:
          (f === di || f === va) && (i = !0);
          break;
        case 14:
        case 15:
          (f === rd || f === va) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = _n(a), e !== void 0 && e === _n(t)));
    }
    function er(e) {
      _n !== null && typeof WeakSet == "function" && (Hd === null && (Hd = /* @__PURE__ */ new WeakSet()), Hd.add(e));
    }
    function Ni(e, t, a) {
      var i = e.alternate, f = e.child, o = e.sibling, d = e.tag, h = e.type, p = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          p = h;
          break;
        case 11:
          p = h.render;
      }
      if (_n === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var v = !1;
      h = !1, p !== null && (p = _n(p), p !== void 0 && (a.has(p) ? h = !0 : t.has(p) && (d === 1 ? h = !0 : v = !0))), Hd !== null && (Hd.has(e) || i !== null && Hd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || v) && (i = Xl(e, 2), i !== null && Se(i, e, 2)), f === null || h || Ni(
        f,
        t,
        a
      ), o !== null && Ni(
        o,
        t,
        a
      );
    }
    function fv(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Xg || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function tr(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Tn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = we(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Ci(e.type);
          break;
        case 1:
          a.type = Ci(e.type);
          break;
        case 11:
          a.type = Eh(e.type);
      }
      return a;
    }
    function Ah(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function lr(e, t, a, i, f, o) {
      var d = 0, h = e;
      if (typeof e == "function")
        tr(e) && (d = 1), h = Ci(h);
      else if (typeof e == "string")
        d = x(), d = ed(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case dd:
            return t = we(31, a, t, f), t.elementType = dd, t.lanes = o, t;
          case ri:
            return Oa(
              a.children,
              f,
              o,
              t
            );
          case nc:
            d = 8, f |= na, f |= Du;
            break;
          case ls:
            return e = a, i = f, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = we(12, e, t, i | Nl), t.elementType = ls, t.lanes = o, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case hi:
            return t = we(13, a, t, f), t.elementType = hi, t.lanes = o, t;
          case sd:
            return t = we(19, a, t, f), t.elementType = sd, t.lanes = o, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case P0:
                case la:
                  d = 10;
                  break e;
                case as:
                  d = 9;
                  break e;
                case di:
                  d = 11, h = Eh(h);
                  break e;
                case rd:
                  d = 14;
                  break e;
                case va:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : wt(e) ? a = "array" : e !== void 0 && e.$$typeof === bu ? (a = "<" + (Me(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? ia(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = we(d, a, t, f), t.elementType = e, t.type = h, t.lanes = o, t._debugOwner = i, t;
    }
    function ro(e, t, a) {
      return t = lr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Oa(e, t, a, i) {
      return e = we(7, e, i, t), e.lanes = a, e;
    }
    function Rh(e, t, a) {
      return e = we(6, e, null, t), e.lanes = a, e;
    }
    function zh(e, t, a) {
      return t = we(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Bi(e, t) {
      La(), xd[Cd++] = yp, xd[Cd++] = hp, hp = e, yp = t;
    }
    function Dh(e, t, a) {
      La(), Gn[Vn++] = fc, Gn[Vn++] = oc, Gn[Vn++] = gs, gs = e;
      var i = fc;
      e = oc;
      var f = 32 - el(i) - 1;
      i &= ~(1 << f), a += 1;
      var o = 32 - el(t) + f;
      if (30 < o) {
        var d = f - f % 5;
        o = (i & (1 << d) - 1).toString(32), i >>= d, f -= d, fc = 1 << 32 - el(t) + f | a << f | i, oc = o + e;
      } else
        fc = 1 << o | a << f | i, oc = e;
    }
    function ar(e) {
      La(), e.return !== null && (Bi(e, 1), Dh(e, 1, 0));
    }
    function qi(e) {
      for (; e === hp; )
        hp = xd[--Cd], xd[Cd] = null, yp = xd[--Cd], xd[Cd] = null;
      for (; e === gs; )
        gs = Gn[--Vn], Gn[Vn] = null, oc = Gn[--Vn], Gn[Vn] = null, fc = Gn[--Vn], Gn[Vn] = null;
    }
    function La() {
      Ye || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Yi(e, t) {
      if (e.return === null) {
        if (Xn === null)
          Xn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Xn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Xn.distanceFromLeaf > t && (Xn.distanceFromLeaf = t);
        }
        return Xn;
      }
      var a = Yi(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function qc(e, t) {
      sc || (e = Yi(e, 0), e.serverProps = null, t !== null && (t = $r(t), e.serverTail.push(t)));
    }
    function Vu(e) {
      var t = "", a = Xn;
      throw a !== null && (Xn = null, t = _u(a)), _c(
        Vl(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), xv;
    }
    function Oh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Rl] = e, t[aa] = i, hu(a, i), a) {
        case "dialog":
          Te("cancel", t), Te("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Te("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Lm.length; a++)
            Te(Lm[a], t);
          break;
        case "source":
          Te("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Te("error", t), Te("load", t);
          break;
        case "details":
          Te("toggle", t);
          break;
        case "input":
          bn("input", i), Te("invalid", t), Ri(t, i), fh(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), Dt(t);
          break;
        case "option":
          c0(t, i);
          break;
        case "select":
          bn("select", i), Te("invalid", t), Sn(t, i);
          break;
        case "textarea":
          bn("textarea", i), Te("invalid", t), js(t, i), zi(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), Dt(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || tc(t.textContent, a) ? (i.popover != null && (Te("beforetoggle", t), Te("toggle", t)), i.onScroll != null && Te("scroll", t), i.onScrollEnd != null && Te("scrollend", t), i.onClick != null && (t.onclick = li), t = !0) : t = !1, t || Vu(e);
    }
    function nr(e) {
      for (Sa = e.return; Sa; )
        switch (Sa.tag) {
          case 5:
          case 13:
            gi = !1;
            return;
          case 27:
          case 3:
            gi = !0;
            return;
          default:
            Sa = Sa.return;
        }
    }
    function _i(e) {
      if (e !== Sa) return !1;
      if (!Ye)
        return nr(e), Ye = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || ni(e.type, e.memoizedProps)), a = !a), a && Bt) {
        for (a = Bt; a; ) {
          var i = Yi(e, 0), f = $r(a);
          i.serverTail.push(f), a = f.type === "Suspense" ? Sf(a) : ea(a.nextSibling);
        }
        Vu(e);
      }
      if (nr(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Bt = Sf(e);
      } else
        t === 27 ? (t = Bt, Lt(e.type) ? (e = gg, gg = null, Bt = e) : Bt = t) : Bt = Sa ? ea(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Yc() {
      Bt = Sa = null, sc = Ye = !1;
    }
    function Mh() {
      var e = bs;
      return e !== null && (Aa === null ? Aa = e : Aa.push.apply(
        Aa,
        e
      ), bs = null), e;
    }
    function _c(e) {
      bs === null ? bs = [e] : bs.push(e);
    }
    function b0() {
      var e = Xn;
      if (e !== null) {
        Xn = null;
        for (var t = _u(e); 0 < e.children.length; )
          e = e.children[0];
        ee(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function ur() {
      Nd = mp = null, Bd = !1;
    }
    function Xu(e, t, a) {
      Ue(Cv, t._currentValue, e), t._currentValue = a, Ue(Nv, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Lg && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = Lg;
    }
    function Fn(e, t) {
      e._currentValue = Cv.current;
      var a = Nv.current;
      Ae(Nv, t), e._currentRenderer = a, Ae(Cv, t);
    }
    function Uh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Ul(e, t, a, i) {
      var f = e.child;
      for (f !== null && (f.return = e); f !== null; ) {
        var o = f.dependencies;
        if (o !== null) {
          var d = f.child;
          o = o.firstContext;
          e: for (; o !== null; ) {
            var h = o;
            o = f;
            for (var p = 0; p < t.length; p++)
              if (h.context === t[p]) {
                o.lanes |= a, h = o.alternate, h !== null && (h.lanes |= a), Uh(
                  o.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            o = h.next;
          }
        } else if (f.tag === 18) {
          if (d = f.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, o = d.alternate, o !== null && (o.lanes |= a), Uh(
            d,
            a,
            e
          ), d = null;
        } else d = f.child;
        if (d !== null) d.return = f;
        else
          for (d = f; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (f = d.sibling, f !== null) {
              f.return = d.return, d = f;
              break;
            }
            d = d.return;
          }
        f = d;
      }
    }
    function In(e, t, a, i) {
      e = null;
      for (var f = t, o = !1; f !== null; ) {
        if (!o) {
          if ((f.flags & 524288) !== 0) o = !0;
          else if ((f.flags & 262144) !== 0) break;
        }
        if (f.tag === 10) {
          var d = f.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = f.type;
            ba(f.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (f === hd.current) {
          if (d = f.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== f.memoizedState.memoizedState && (e !== null ? e.push(km) : e = [km]);
        }
        f = f.return;
      }
      e !== null && Ul(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ho(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!ba(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function ju(e) {
      mp = e, Nd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function nt(e) {
      return Bd && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), ir(mp, e);
    }
    function yo(e, t) {
      return mp === null && ju(e), ir(e, t);
    }
    function ir(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Nd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Nd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Nd = Nd.next = t;
      return a;
    }
    function Hh() {
      return {
        controller: new oS(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Ma(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Gi(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && sS(rS, function() {
        e.controller.abort();
      });
    }
    function oa() {
      var e = Ss;
      return Ss = 0, e;
    }
    function Gc(e) {
      var t = Ss;
      return Ss = e, t;
    }
    function Vc(e) {
      var t = Ss;
      return Ss += e, t;
    }
    function Pn(e) {
      Ga = qd(), 0 > e.actualStartTime && (e.actualStartTime = Ga);
    }
    function Qu(e) {
      if (0 <= Ga) {
        var t = qd() - Ga;
        e.actualDuration += t, e.selfBaseDuration = t, Ga = -1;
      }
    }
    function cr(e) {
      if (0 <= Ga) {
        var t = qd() - Ga;
        e.actualDuration += t, Ga = -1;
      }
    }
    function wa() {
      if (0 <= Ga) {
        var e = qd() - Ga;
        Ga = -1, Ss += e;
      }
    }
    function Tl() {
      Ga = qd();
    }
    function mo(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function S0(e, t) {
      if (Tm === null) {
        var a = Tm = [];
        Bv = 0, Ts = wr(), Yd = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return Bv++, t.then(xh, xh), t;
    }
    function xh() {
      if (--Bv === 0 && Tm !== null) {
        Yd !== null && (Yd.status = "fulfilled");
        var e = Tm;
        Tm = null, Ts = 0, Yd = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ov(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(f) {
          a.push(f);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var f = 0; f < a.length; f++) (0, a[f])(t);
        },
        function(f) {
          for (i.status = "rejected", i.reason = f, f = 0; f < a.length; f++)
            (0, a[f])(void 0);
        }
      ), i;
    }
    function Ch() {
      var e = Es.current;
      return e !== null ? e : ft.pooledCache;
    }
    function fr(e, t) {
      t === null ? Ue(Es, Es.current, e) : Ue(Es, t.pool, e);
    }
    function Nh() {
      var e = Ch();
      return e === null ? null : { parent: yl._currentValue, pool: e };
    }
    function Bh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function or(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function jl() {
    }
    function qh(e, t, a) {
      M.actQueue !== null && (M.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(jl, jl), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, ra(e), e;
        default:
          if (typeof t.status == "string")
            t.then(jl, jl);
          else {
            if (e = ft, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var o = t;
                  o.status = "fulfilled", o.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var o = t;
                  o.status = "rejected", o.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, ra(e), e;
          }
          throw Um = t, Tp = !0, Mm;
      }
    }
    function sa() {
      if (Um === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Um;
      return Um = null, Tp = !1, e;
    }
    function ra(e) {
      if (e === Mm || e === Sp)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Zu(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function po(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Ja(e) {
      return {
        lane: e,
        tag: $g,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Ka(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, _v === i && !Ig) {
        var f = ae(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          f
        ), Ig = !0;
      }
      return (Le & Ea) !== yn ? (f = i.pending, f === null ? t.next = t : (t.next = f.next, f.next = t), i.pending = t, t = Ps(e), v0(e, null, a), t) : (Is(e, i, t, a), Ps(e));
    }
    function Vi(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, _l(e, a);
      }
    }
    function eu(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var f = null, o = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            o === null ? f = o = d : o = o.next = d, a = a.next;
          } while (a !== null);
          o === null ? f = o = t : o = o.next = t;
        } else f = o = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: f,
          lastBaseUpdate: o,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Xc() {
      if (Gv) {
        var e = Yd;
        if (e !== null) throw e;
      }
    }
    function Lu(e, t, a, i) {
      Gv = !1;
      var f = e.updateQueue;
      Yf = !1, _v = f.shared;
      var o = f.firstBaseUpdate, d = f.lastBaseUpdate, h = f.shared.pending;
      if (h !== null) {
        f.shared.pending = null;
        var p = h, v = p.next;
        p.next = null, d === null ? o = v : d.next = v, d = p;
        var U = e.alternate;
        U !== null && (U = U.updateQueue, h = U.lastBaseUpdate, h !== d && (h === null ? U.firstBaseUpdate = v : h.next = v, U.lastBaseUpdate = p));
      }
      if (o !== null) {
        var N = f.baseState;
        d = 0, U = v = p = null, h = o;
        do {
          var O = h.lane & -536870913, B = O !== h.lane;
          if (B ? (ze & O) === O : (i & O) === O) {
            O !== 0 && O === Ts && (Gv = !0), U !== null && (U = U.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              O = e;
              var I = h, ce = t, ot = a;
              switch (I.tag) {
                case Wg:
                  if (I = I.payload, typeof I == "function") {
                    Bd = !0;
                    var Oe = I.call(
                      ot,
                      N,
                      ce
                    );
                    if (O.mode & na) {
                      _e(!0);
                      try {
                        I.call(ot, N, ce);
                      } finally {
                        _e(!1);
                      }
                    }
                    Bd = !1, N = Oe;
                    break e;
                  }
                  N = I;
                  break e;
                case Yv:
                  O.flags = O.flags & -65537 | 128;
                case $g:
                  if (Oe = I.payload, typeof Oe == "function") {
                    if (Bd = !0, I = Oe.call(
                      ot,
                      N,
                      ce
                    ), O.mode & na) {
                      _e(!0);
                      try {
                        Oe.call(ot, N, ce);
                      } finally {
                        _e(!1);
                      }
                    }
                    Bd = !1;
                  } else I = Oe;
                  if (I == null) break e;
                  N = fe({}, N, I);
                  break e;
                case Fg:
                  Yf = !0;
              }
            }
            O = h.callback, O !== null && (e.flags |= 64, B && (e.flags |= 8192), B = f.callbacks, B === null ? f.callbacks = [O] : B.push(O));
          } else
            B = {
              lane: O,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, U === null ? (v = U = B, p = N) : U = U.next = B, d |= O;
          if (h = h.next, h === null) {
            if (h = f.shared.pending, h === null)
              break;
            B = h, h = B.next, B.next = null, f.lastBaseUpdate = B, f.shared.pending = null;
          }
        } while (!0);
        U === null && (p = N), f.baseState = p, f.firstBaseUpdate = v, f.lastBaseUpdate = U, o === null && (f.shared.lanes = 0), Xf |= d, e.lanes = d, e.memoizedState = N;
      }
      _v = null;
    }
    function Xi(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function sv(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Xi(a[e], t);
    }
    function Ql(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Xi(a[e], t);
    }
    function sr(e, t) {
      var a = Ti;
      Ue(Ep, a, e), Ue(_d, t, e), Ti = a | t.baseLanes;
    }
    function ka(e) {
      Ue(Ep, Ti, e), Ue(
        _d,
        _d.current,
        e
      );
    }
    function rr(e) {
      Ti = Ep.current, Ae(_d, e), Ae(Ep, e);
    }
    function me() {
      var e = C;
      Zn === null ? Zn = [e] : Zn.push(e);
    }
    function Q() {
      var e = C;
      if (Zn !== null && (dc++, Zn[dc] !== e)) {
        var t = ae(oe);
        if (!Pg.has(t) && (Pg.add(t), Zn !== null)) {
          for (var a = "", i = 0; i <= dc; i++) {
            var f = Zn[i], o = i === dc ? e : f;
            for (f = i + 1 + ". " + f; 30 > f.length; )
              f += " ";
            f += o + `
`, a += f;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function wu(e) {
      e == null || wt(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        C,
        typeof e
      );
    }
    function jc() {
      var e = ae(oe);
      t1.has(e) || (t1.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function tt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Ju(e, t) {
      if (xm) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          C
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        C,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ba(e[a], t[a])) return !1;
      return !0;
    }
    function Qc(e, t, a, i, f, o) {
      _f = o, oe = t, Zn = e !== null ? e._debugHookTypes : null, dc = -1, xm = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (o = ae(oe), Vv.has(o) || (Vv.add(o), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        o === null ? "An unknown Component" : "<" + o + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e !== null && e.memoizedState !== null ? jv : Zn !== null ? l1 : Xv, Rs = o = (t.mode & na) !== mt;
      var d = Qv(a, i, f);
      if (Rs = !1, Vd && (d = Zl(
        t,
        a,
        i,
        f
      )), o) {
        _e(!0);
        try {
          d = Zl(
            t,
            a,
            i,
            f
          );
        } finally {
          _e(!1);
        }
      }
      return vo(e, t), d;
    }
    function vo(e, t) {
      t._debugHookTypes = Zn, t.dependencies === null ? rc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: rc
      }) : t.dependencies._debugThenableState = rc, M.H = zp;
      var a = lt !== null && lt.next !== null;
      if (_f = 0, Zn = C = al = lt = oe = null, dc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Ap = !1, Hm = 0, rc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || zl || (e = e.dependencies, e !== null && ho(e) && (zl = !0)), Tp ? (Tp = !1, e = !0) : e = !1, e && (t = ae(t) || "Unknown", e1.has(t) || Vv.has(t) || (e1.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Zl(e, t, a, i) {
      oe = e;
      var f = 0;
      do {
        if (Vd && (rc = null), Hm = 0, Vd = !1, f >= hS)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (f += 1, xm = !1, al = lt = null, e.updateQueue != null) {
          var o = e.updateQueue;
          o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
        }
        dc = -1, M.H = a1, o = Qv(t, a, i);
      } while (Vd);
      return o;
    }
    function Ua() {
      var e = M.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? ji(t) : t, e = e.useState()[0], (lt !== null ? lt.memoizedState : null) !== e && (oe.flags |= 1024), t;
    }
    function tu() {
      var e = Rp !== 0;
      return Rp = 0, e;
    }
    function $a(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Du) !== mt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Wa(e) {
      if (Ap) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Ap = !1;
      }
      _f = 0, Zn = al = lt = oe = null, dc = -1, C = null, Vd = !1, Hm = Rp = 0, rc = null;
    }
    function Ht() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return al === null ? oe.memoizedState = al = e : al = al.next = e, al;
    }
    function Qe() {
      if (lt === null) {
        var e = oe.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = lt.next;
      var t = al === null ? oe.memoizedState : al.next;
      if (t !== null)
        al = t, lt = e;
      else {
        if (e === null)
          throw oe.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        lt = e, e = {
          memoizedState: lt.memoizedState,
          baseState: lt.baseState,
          baseQueue: lt.baseQueue,
          queue: lt.queue,
          next: null
        }, al === null ? oe.memoizedState = al = e : al = al.next = e;
      }
      return al;
    }
    function go() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ji(e) {
      var t = Hm;
      return Hm += 1, rc === null && (rc = Bh()), e = qh(rc, e, t), t = oe, (al === null ? t.memoizedState : al.next) === null && (t = t.alternate, M.H = t !== null && t.memoizedState !== null ? jv : Xv), e;
    }
    function St(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return ji(e);
        if (e.$$typeof === la) return nt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ke(e) {
      var t = null, a = oe.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = oe.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(f) {
            return f.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = go(), oe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || xm)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = ep;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function pe(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function lu(e, t, a) {
      var i = Ht();
      if (a !== void 0) {
        var f = a(t);
        if (Rs) {
          _e(!0);
          try {
            a(t);
          } finally {
            _e(!1);
          }
        }
      } else f = t;
      return i.memoizedState = i.baseState = f, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: f
      }, i.queue = e, e = e.dispatch = Mo.bind(
        null,
        oe,
        e
      ), [i.memoizedState, e];
    }
    function Hl(e) {
      var t = Qe();
      return bo(t, lt, e);
    }
    function bo(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var f = e.baseQueue, o = i.pending;
      if (o !== null) {
        if (f !== null) {
          var d = f.next;
          f.next = o.next, o.next = d;
        }
        t.baseQueue !== f && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = f = o, i.pending = null;
      }
      if (o = e.baseState, f === null) e.memoizedState = o;
      else {
        t = f.next;
        var h = d = null, p = null, v = t, U = !1;
        do {
          var N = v.lane & -536870913;
          if (N !== v.lane ? (ze & N) === N : (_f & N) === N) {
            var O = v.revertLane;
            if (O === 0)
              p !== null && (p = p.next = {
                lane: 0,
                revertLane: 0,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }), N === Ts && (U = !0);
            else if ((_f & O) === O) {
              v = v.next, O === Ts && (U = !0);
              continue;
            } else
              N = {
                lane: 0,
                revertLane: v.revertLane,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }, p === null ? (h = p = N, d = o) : p = p.next = N, oe.lanes |= O, Xf |= O;
            N = v.action, Rs && a(o, N), o = v.hasEagerState ? v.eagerState : a(o, N);
          } else
            O = {
              lane: N,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, p === null ? (h = p = O, d = o) : p = p.next = O, oe.lanes |= N, Xf |= N;
          v = v.next;
        } while (v !== null && v !== t);
        if (p === null ? d = o : p.next = h, !ba(o, e.memoizedState) && (zl = !0, U && (a = Yd, a !== null)))
          throw a;
        e.memoizedState = o, e.baseState = d, e.baseQueue = p, i.lastRenderedState = o;
      }
      return f === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Fa(e) {
      var t = Qe(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, f = a.pending, o = t.memoizedState;
      if (f !== null) {
        a.pending = null;
        var d = f = f.next;
        do
          o = e(o, d.action), d = d.next;
        while (d !== f);
        ba(o, t.memoizedState) || (zl = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), a.lastRenderedState = o;
      }
      return [o, i];
    }
    function dr(e, t, a) {
      var i = oe, f = Ht();
      if (Ye) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var o = a();
        Gd || o === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Gd = !0);
      } else {
        if (o = t(), Gd || (a = t(), ba(o, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Gd = !0)), ft === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (ze & 124) !== 0 || Zc(i, t, o);
      }
      return f.memoizedState = o, a = { value: o, getSnapshot: t }, f.queue = a, Ao(
        Yh.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Rn(
        Qn | ml,
        kc(),
        Lc.bind(
          null,
          i,
          a,
          o,
          t
        ),
        null
      ), o;
    }
    function So(e, t, a) {
      var i = oe, f = Qe(), o = Ye;
      if (o) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !Gd) {
        var d = t();
        ba(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Gd = !0);
      }
      (d = !ba(
        (lt || f).memoizedState,
        a
      )) && (f.memoizedState = a, zl = !0), f = f.queue;
      var h = Yh.bind(null, i, f, e);
      if (Ll(2048, ml, h, [e]), f.getSnapshot !== t || d || al !== null && al.memoizedState.tag & Qn) {
        if (i.flags |= 2048, Rn(
          Qn | ml,
          kc(),
          Lc.bind(
            null,
            i,
            f,
            a,
            t
          ),
          null
        ), ft === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        o || (_f & 124) !== 0 || Zc(i, t, a);
      }
      return a;
    }
    function Zc(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = oe.updateQueue, t === null ? (t = go(), oe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function Lc(e, t, a, i) {
      t.value = a, t.getSnapshot = i, wc(t) && hr(e);
    }
    function Yh(e, t, a) {
      return a(function() {
        wc(t) && hr(e);
      });
    }
    function wc(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !ba(e, a);
      } catch {
        return !0;
      }
    }
    function hr(e) {
      var t = Xl(e, 2);
      t !== null && Se(t, e, 2);
    }
    function au(e) {
      var t = Ht();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Rs) {
          _e(!0);
          try {
            a();
          } finally {
            _e(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pe,
        lastRenderedState: e
      }, t;
    }
    function Ia(e) {
      e = au(e);
      var t = e.queue, a = ef.bind(null, oe, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function En(e) {
      var t = Ht();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Sr.bind(
        null,
        oe,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function An(e, t) {
      var a = Qe();
      return yr(a, lt, e, t);
    }
    function yr(e, t, a, i) {
      return e.baseState = a, bo(
        e,
        lt,
        typeof i == "function" ? i : pe
      );
    }
    function mr(e, t) {
      var a = Qe();
      return lt !== null ? yr(a, lt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function To(e, t, a, i, f) {
      if (cu(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var o = {
          payload: f,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            o.listeners.push(d);
          }
        };
        M.T !== null ? a(!0) : o.isTransition = !1, i(o), a = t.pending, a === null ? (o.next = t.pending = o, Eo(t, o)) : (o.next = a.next, t.pending = a.next = o);
      }
    }
    function Eo(e, t) {
      var a = t.action, i = t.payload, f = e.state;
      if (t.isTransition) {
        var o = M.T, d = {};
        M.T = d, M.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(f, i), p = M.S;
          p !== null && p(d, h), Ku(e, t, h);
        } catch (v) {
          Jc(e, t, v);
        } finally {
          M.T = o, o === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(f, i), Ku(e, t, d);
        } catch (v) {
          Jc(e, t, v);
        }
    }
    function Ku(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          ol(e, t, i);
        },
        function(i) {
          return Jc(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ol(e, t, a);
    }
    function ol(e, t, a) {
      t.status = "fulfilled", t.value = a, _h(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Eo(e, a)));
    }
    function Jc(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, _h(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function _h(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function T0(e, t) {
      return t;
    }
    function Kc(e, t) {
      if (Ye) {
        var a = ft.formState;
        if (a !== null) {
          e: {
            var i = oe;
            if (Ye) {
              if (Bt) {
                t: {
                  for (var f = Bt, o = gi; f.nodeType !== 8; ) {
                    if (!o) {
                      f = null;
                      break t;
                    }
                    if (f = ea(
                      f.nextSibling
                    ), f === null) {
                      f = null;
                      break t;
                    }
                  }
                  o = f.data, f = o === yg || o === tb ? f : null;
                }
                if (f) {
                  Bt = ea(
                    f.nextSibling
                  ), i = f.data === yg;
                  break e;
                }
              }
              Vu(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Ht(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: T0,
        lastRenderedState: t
      }, a.queue = i, a = ef.bind(
        null,
        oe,
        i
      ), i.dispatch = a, i = au(!1), o = Sr.bind(
        null,
        oe,
        !1,
        i.queue
      ), i = Ht(), f = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = f, a = To.bind(
        null,
        oe,
        f,
        o,
        a
      ), f.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function pr(e) {
      var t = Qe();
      return xt(t, lt, e);
    }
    function xt(e, t, a) {
      if (t = bo(
        e,
        t,
        T0
      )[0], e = Hl(pe)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = ji(t);
        } catch (d) {
          throw d === Mm ? Sp : d;
        }
      else i = t;
      t = Qe();
      var f = t.queue, o = f.dispatch;
      return a !== t.memoizedState && (oe.flags |= 2048, Rn(
        Qn | ml,
        kc(),
        Gh.bind(null, f, a),
        null
      )), [i, o, e];
    }
    function Gh(e, t) {
      e.action = t;
    }
    function ku(e) {
      var t = Qe(), a = lt;
      if (a !== null)
        return xt(t, a, e);
      Qe(), t = t.memoizedState, a = Qe();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Rn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = oe.updateQueue, t === null && (t = go(), oe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function kc() {
      return { destroy: void 0, resource: void 0 };
    }
    function $u(e) {
      var t = Ht();
      return e = { current: e }, t.memoizedState = e;
    }
    function Ha(e, t, a, i) {
      var f = Ht();
      i = i === void 0 ? null : i, oe.flags |= e, f.memoizedState = Rn(
        Qn | t,
        kc(),
        a,
        i
      );
    }
    function Ll(e, t, a, i) {
      var f = Qe();
      i = i === void 0 ? null : i;
      var o = f.memoizedState.inst;
      lt !== null && i !== null && Ju(i, lt.memoizedState.deps) ? f.memoizedState = Rn(t, o, a, i) : (oe.flags |= e, f.memoizedState = Rn(
        Qn | t,
        o,
        a,
        i
      ));
    }
    function Ao(e, t) {
      (oe.mode & Du) !== mt && (oe.mode & Vg) === mt ? Ha(276826112, ml, e, t) : Ha(8390656, ml, e, t);
    }
    function Vh(e, t) {
      var a = 4194308;
      return (oe.mode & Du) !== mt && (a |= 134217728), Ha(a, Bl, e, t);
    }
    function Xh(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function nu(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (oe.mode & Du) !== mt && (i |= 134217728), Ha(
        i,
        Bl,
        Xh.bind(null, t, e),
        a
      );
    }
    function $c(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Ll(
        4,
        Bl,
        Xh.bind(null, t, e),
        a
      );
    }
    function Wc(e, t) {
      return Ht().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Ro(e, t) {
      var a = Qe();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Ju(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Qi(e, t) {
      var a = Ht();
      t = t === void 0 ? null : t;
      var i = e();
      if (Rs) {
        _e(!0);
        try {
          e();
        } finally {
          _e(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function zo(e, t) {
      var a = Qe();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && Ju(t, i[1]))
        return i[0];
      if (i = e(), Rs) {
        _e(!0);
        try {
          e();
        } finally {
          _e(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Fc(e, t) {
      var a = Ht();
      return Ic(a, e, t);
    }
    function vr(e, t) {
      var a = Qe();
      return Qh(
        a,
        lt.memoizedState,
        e,
        t
      );
    }
    function jh(e, t) {
      var a = Qe();
      return lt === null ? Ic(a, e, t) : Qh(
        a,
        lt.memoizedState,
        e,
        t
      );
    }
    function Ic(e, t, a) {
      return a === void 0 || (_f & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = by(), oe.lanes |= e, Xf |= e, a);
    }
    function Qh(e, t, a, i) {
      return ba(a, t) ? a : _d.current !== null ? (e = Ic(e, a, i), ba(e, t) || (zl = !0), e) : (_f & 42) === 0 ? (zl = !0, e.memoizedState = a) : (e = by(), oe.lanes |= e, Xf |= e, t);
    }
    function Pc(e, t, a, i, f) {
      var o = Ve.p;
      Ve.p = o !== 0 && o < xn ? o : xn;
      var d = M.T, h = {};
      M.T = h, Sr(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var p = f(), v = M.S;
        if (v !== null && v(h, p), p !== null && typeof p == "object" && typeof p.then == "function") {
          var U = ov(
            p,
            i
          );
          tf(
            e,
            t,
            U,
            ha(e)
          );
        } else
          tf(
            e,
            t,
            i,
            ha(e)
          );
      } catch (N) {
        tf(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: N },
          ha(e)
        );
      } finally {
        Ve.p = o, M.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function gr(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var f = Zh(e).queue;
      Pc(
        e,
        f,
        t,
        qs,
        a === null ? Yt : function() {
          return uu(e), a(i);
        }
      );
    }
    function Zh(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: qs,
        baseState: qs,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: pe,
          lastRenderedState: qs
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: pe,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function uu(e) {
      M.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Zh(e).next.queue;
      tf(
        e,
        t,
        {},
        ha(e)
      );
    }
    function Do() {
      var e = au(!1);
      return e = Pc.bind(
        null,
        oe,
        e.queue,
        !0,
        !1
      ), Ht().memoizedState = e, [!1, e];
    }
    function br() {
      var e = Hl(pe)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : ji(e),
        t
      ];
    }
    function iu() {
      var e = Fa(pe)[0], t = Qe().memoizedState;
      return [
        typeof e == "boolean" ? e : ji(e),
        t
      ];
    }
    function wl() {
      return nt(km);
    }
    function Zi() {
      var e = Ht(), t = ft.identifierPrefix;
      if (Ye) {
        var a = oc, i = fc;
        a = (i & ~(1 << 32 - el(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Rp++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = dS++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function Oo() {
      return Ht().memoizedState = Lh.bind(
        null,
        oe
      );
    }
    function Lh(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ha(a);
            e = Ja(i);
            var f = Ka(a, e, i);
            f !== null && (Se(f, a, i), Vi(f, a, i)), a = Hh(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function Mo(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ha(e);
      var f = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      cu(e) ? Uo(t, f) : (f = Th(e, t, f, i), f !== null && (Se(f, e, i), wh(f, t, i))), Ei(e, i);
    }
    function ef(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ha(e), tf(e, t, a, i), Ei(e, i);
    }
    function tf(e, t, a, i) {
      var f = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (cu(e)) Uo(t, f);
      else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) {
          var d = M.H;
          M.H = Mu;
          try {
            var h = t.lastRenderedState, p = o(h, a);
            if (f.hasEagerState = !0, f.eagerState = p, ba(p, h))
              return Is(e, t, f, 0), ft === null && Fs(), !1;
          } catch {
          } finally {
            M.H = d;
          }
        }
        if (a = Th(e, t, f, i), a !== null)
          return Se(a, e, i), wh(a, t, i), !0;
      }
      return !1;
    }
    function Sr(e, t, a, i) {
      if (M.T === null && Ts === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: wr(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, cu(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Th(
          e,
          a,
          i,
          2
        ), t !== null && Se(t, e, 2);
      Ei(e, 2);
    }
    function cu(e) {
      var t = e.alternate;
      return e === oe || t !== null && t === oe;
    }
    function Uo(e, t) {
      Vd = Ap = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function wh(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, _l(e, a);
      }
    }
    function Qt(e) {
      var t = be;
      return e != null && (be = t === null ? e : t.concat(e)), t;
    }
    function lf(e, t, a) {
      for (var i = Object.keys(e.props), f = 0; f < i.length; f++) {
        var o = i[f];
        if (o !== "children" && o !== "key") {
          t === null && (t = ro(e, a.mode, 0), t._debugInfo = be, t.return = a), ee(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            o
          );
          break;
        }
      }
    }
    function Pa(e) {
      var t = Cm;
      return Cm += 1, Xd === null && (Xd = Bh()), qh(Xd, e, t);
    }
    function se(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Ge(e, t) {
      throw t.$$typeof === vv ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function gt(e, t) {
      var a = ae(e) || "Component";
      g1[a] || (g1[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Li(e, t) {
      var a = ae(e) || "Component";
      b1[a] || (b1[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function wi(e) {
      function t(b, S) {
        if (e) {
          var T = b.deletions;
          T === null ? (b.deletions = [S], b.flags |= 16) : T.push(S);
        }
      }
      function a(b, S) {
        if (!e) return null;
        for (; S !== null; )
          t(b, S), S = S.sibling;
        return null;
      }
      function i(b) {
        for (var S = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? S.set(b.key, b) : S.set(b.index, b), b = b.sibling;
        return S;
      }
      function f(b, S) {
        return b = Tn(b, S), b.index = 0, b.sibling = null, b;
      }
      function o(b, S, T) {
        return b.index = T, e ? (T = b.alternate, T !== null ? (T = T.index, T < S ? (b.flags |= 67108866, S) : T) : (b.flags |= 67108866, S)) : (b.flags |= 1048576, S);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, S, T, q) {
        return S === null || S.tag !== 6 ? (S = Rh(
          T,
          b.mode,
          q
        ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = be, S) : (S = f(S, T), S.return = b, S._debugInfo = be, S);
      }
      function p(b, S, T, q) {
        var J = T.type;
        return J === ri ? (S = U(
          b,
          S,
          T.props.children,
          q,
          T.key
        ), lf(T, S, b), S) : S !== null && (S.elementType === J || g0(S, T) || typeof J == "object" && J !== null && J.$$typeof === va && Gf(J) === S.type) ? (S = f(S, T.props), se(S, T), S.return = b, S._debugOwner = T._owner, S._debugInfo = be, S) : (S = ro(T, b.mode, q), se(S, T), S.return = b, S._debugInfo = be, S);
      }
      function v(b, S, T, q) {
        return S === null || S.tag !== 4 || S.stateNode.containerInfo !== T.containerInfo || S.stateNode.implementation !== T.implementation ? (S = zh(T, b.mode, q), S.return = b, S._debugInfo = be, S) : (S = f(S, T.children || []), S.return = b, S._debugInfo = be, S);
      }
      function U(b, S, T, q, J) {
        return S === null || S.tag !== 7 ? (S = Oa(
          T,
          b.mode,
          q,
          J
        ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = be, S) : (S = f(S, T), S.return = b, S._debugInfo = be, S);
      }
      function N(b, S, T) {
        if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
          return S = Rh(
            "" + S,
            b.mode,
            T
          ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = be, S;
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case bu:
              return T = ro(
                S,
                b.mode,
                T
              ), se(T, S), T.return = b, b = Qt(S._debugInfo), T._debugInfo = be, be = b, T;
            case re:
              return S = zh(
                S,
                b.mode,
                T
              ), S.return = b, S._debugInfo = be, S;
            case va:
              var q = Qt(S._debugInfo);
              return S = Gf(S), b = N(b, S, T), be = q, b;
          }
          if (wt(S) || Ut(S))
            return T = Oa(
              S,
              b.mode,
              T,
              null
            ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, b = Qt(S._debugInfo), T._debugInfo = be, be = b, T;
          if (typeof S.then == "function")
            return q = Qt(S._debugInfo), b = N(
              b,
              Pa(S),
              T
            ), be = q, b;
          if (S.$$typeof === la)
            return N(
              b,
              yo(b, S),
              T
            );
          Ge(b, S);
        }
        return typeof S == "function" && gt(b, S), typeof S == "symbol" && Li(b, S), null;
      }
      function O(b, S, T, q) {
        var J = S !== null ? S.key : null;
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return J !== null ? null : h(b, S, "" + T, q);
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case bu:
              return T.key === J ? (J = Qt(T._debugInfo), b = p(
                b,
                S,
                T,
                q
              ), be = J, b) : null;
            case re:
              return T.key === J ? v(b, S, T, q) : null;
            case va:
              return J = Qt(T._debugInfo), T = Gf(T), b = O(
                b,
                S,
                T,
                q
              ), be = J, b;
          }
          if (wt(T) || Ut(T))
            return J !== null ? null : (J = Qt(T._debugInfo), b = U(
              b,
              S,
              T,
              q,
              null
            ), be = J, b);
          if (typeof T.then == "function")
            return J = Qt(T._debugInfo), b = O(
              b,
              S,
              Pa(T),
              q
            ), be = J, b;
          if (T.$$typeof === la)
            return O(
              b,
              S,
              yo(b, T),
              q
            );
          Ge(b, T);
        }
        return typeof T == "function" && gt(b, T), typeof T == "symbol" && Li(b, T), null;
      }
      function B(b, S, T, q, J) {
        if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
          return b = b.get(T) || null, h(S, b, "" + q, J);
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case bu:
              return T = b.get(
                q.key === null ? T : q.key
              ) || null, b = Qt(q._debugInfo), S = p(
                S,
                T,
                q,
                J
              ), be = b, S;
            case re:
              return b = b.get(
                q.key === null ? T : q.key
              ) || null, v(S, b, q, J);
            case va:
              var de = Qt(q._debugInfo);
              return q = Gf(q), S = B(
                b,
                S,
                T,
                q,
                J
              ), be = de, S;
          }
          if (wt(q) || Ut(q))
            return T = b.get(T) || null, b = Qt(q._debugInfo), S = U(
              S,
              T,
              q,
              J,
              null
            ), be = b, S;
          if (typeof q.then == "function")
            return de = Qt(q._debugInfo), S = B(
              b,
              S,
              T,
              Pa(q),
              J
            ), be = de, S;
          if (q.$$typeof === la)
            return B(
              b,
              S,
              T,
              yo(S, q),
              J
            );
          Ge(S, q);
        }
        return typeof q == "function" && gt(S, q), typeof q == "symbol" && Li(S, q), null;
      }
      function I(b, S, T, q) {
        if (typeof T != "object" || T === null) return q;
        switch (T.$$typeof) {
          case bu:
          case re:
            $t(b, S, T);
            var J = T.key;
            if (typeof J != "string") break;
            if (q === null) {
              q = /* @__PURE__ */ new Set(), q.add(J);
              break;
            }
            if (!q.has(J)) {
              q.add(J);
              break;
            }
            ee(S, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                J
              );
            });
            break;
          case va:
            T = Gf(T), I(b, S, T, q);
        }
        return q;
      }
      function ce(b, S, T, q) {
        for (var J = null, de = null, P = null, he = S, ge = S = 0, pt = null; he !== null && ge < T.length; ge++) {
          he.index > ge ? (pt = he, he = null) : pt = he.sibling;
          var Kt = O(
            b,
            he,
            T[ge],
            q
          );
          if (Kt === null) {
            he === null && (he = pt);
            break;
          }
          J = I(
            b,
            Kt,
            T[ge],
            J
          ), e && he && Kt.alternate === null && t(b, he), S = o(Kt, S, ge), P === null ? de = Kt : P.sibling = Kt, P = Kt, he = pt;
        }
        if (ge === T.length)
          return a(b, he), Ye && Bi(b, ge), de;
        if (he === null) {
          for (; ge < T.length; ge++)
            he = N(b, T[ge], q), he !== null && (J = I(
              b,
              he,
              T[ge],
              J
            ), S = o(
              he,
              S,
              ge
            ), P === null ? de = he : P.sibling = he, P = he);
          return Ye && Bi(b, ge), de;
        }
        for (he = i(he); ge < T.length; ge++)
          pt = B(
            he,
            b,
            ge,
            T[ge],
            q
          ), pt !== null && (J = I(
            b,
            pt,
            T[ge],
            J
          ), e && pt.alternate !== null && he.delete(
            pt.key === null ? ge : pt.key
          ), S = o(
            pt,
            S,
            ge
          ), P === null ? de = pt : P.sibling = pt, P = pt);
        return e && he.forEach(function(gc) {
          return t(b, gc);
        }), Ye && Bi(b, ge), de;
      }
      function ot(b, S, T, q) {
        if (T == null)
          throw Error("An iterable object provided no iterator.");
        for (var J = null, de = null, P = S, he = S = 0, ge = null, pt = null, Kt = T.next(); P !== null && !Kt.done; he++, Kt = T.next()) {
          P.index > he ? (ge = P, P = null) : ge = P.sibling;
          var gc = O(b, P, Kt.value, q);
          if (gc === null) {
            P === null && (P = ge);
            break;
          }
          pt = I(
            b,
            gc,
            Kt.value,
            pt
          ), e && P && gc.alternate === null && t(b, P), S = o(gc, S, he), de === null ? J = gc : de.sibling = gc, de = gc, P = ge;
        }
        if (Kt.done)
          return a(b, P), Ye && Bi(b, he), J;
        if (P === null) {
          for (; !Kt.done; he++, Kt = T.next())
            P = N(b, Kt.value, q), P !== null && (pt = I(
              b,
              P,
              Kt.value,
              pt
            ), S = o(
              P,
              S,
              he
            ), de === null ? J = P : de.sibling = P, de = P);
          return Ye && Bi(b, he), J;
        }
        for (P = i(P); !Kt.done; he++, Kt = T.next())
          ge = B(
            P,
            b,
            he,
            Kt.value,
            q
          ), ge !== null && (pt = I(
            b,
            ge,
            Kt.value,
            pt
          ), e && ge.alternate !== null && P.delete(
            ge.key === null ? he : ge.key
          ), S = o(
            ge,
            S,
            he
          ), de === null ? J = ge : de.sibling = ge, de = ge);
        return e && P.forEach(function(VS) {
          return t(b, VS);
        }), Ye && Bi(b, he), J;
      }
      function Oe(b, S, T, q) {
        if (typeof T == "object" && T !== null && T.type === ri && T.key === null && (lf(T, null, b), T = T.props.children), typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case bu:
              var J = Qt(T._debugInfo);
              e: {
                for (var de = T.key; S !== null; ) {
                  if (S.key === de) {
                    if (de = T.type, de === ri) {
                      if (S.tag === 7) {
                        a(
                          b,
                          S.sibling
                        ), q = f(
                          S,
                          T.props.children
                        ), q.return = b, q._debugOwner = T._owner, q._debugInfo = be, lf(T, q, b), b = q;
                        break e;
                      }
                    } else if (S.elementType === de || g0(
                      S,
                      T
                    ) || typeof de == "object" && de !== null && de.$$typeof === va && Gf(de) === S.type) {
                      a(
                        b,
                        S.sibling
                      ), q = f(S, T.props), se(q, T), q.return = b, q._debugOwner = T._owner, q._debugInfo = be, b = q;
                      break e;
                    }
                    a(b, S);
                    break;
                  } else t(b, S);
                  S = S.sibling;
                }
                T.type === ri ? (q = Oa(
                  T.props.children,
                  b.mode,
                  q,
                  T.key
                ), q.return = b, q._debugOwner = b, q._debugTask = b._debugTask, q._debugInfo = be, lf(T, q, b), b = q) : (q = ro(
                  T,
                  b.mode,
                  q
                ), se(q, T), q.return = b, q._debugInfo = be, b = q);
              }
              return b = d(b), be = J, b;
            case re:
              e: {
                for (J = T, T = J.key; S !== null; ) {
                  if (S.key === T)
                    if (S.tag === 4 && S.stateNode.containerInfo === J.containerInfo && S.stateNode.implementation === J.implementation) {
                      a(
                        b,
                        S.sibling
                      ), q = f(
                        S,
                        J.children || []
                      ), q.return = b, b = q;
                      break e;
                    } else {
                      a(b, S);
                      break;
                    }
                  else t(b, S);
                  S = S.sibling;
                }
                q = zh(
                  J,
                  b.mode,
                  q
                ), q.return = b, b = q;
              }
              return d(b);
            case va:
              return J = Qt(T._debugInfo), T = Gf(T), b = Oe(
                b,
                S,
                T,
                q
              ), be = J, b;
          }
          if (wt(T))
            return J = Qt(T._debugInfo), b = ce(
              b,
              S,
              T,
              q
            ), be = J, b;
          if (Ut(T)) {
            if (J = Qt(T._debugInfo), de = Ut(T), typeof de != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var P = de.call(T);
            return P === T ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(P) !== "[object Generator]") && (p1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), p1 = !0) : T.entries !== de || Lv || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Lv = !0), b = ot(
              b,
              S,
              P,
              q
            ), be = J, b;
          }
          if (typeof T.then == "function")
            return J = Qt(T._debugInfo), b = Oe(
              b,
              S,
              Pa(T),
              q
            ), be = J, b;
          if (T.$$typeof === la)
            return Oe(
              b,
              S,
              yo(b, T),
              q
            );
          Ge(b, T);
        }
        return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (J = "" + T, S !== null && S.tag === 6 ? (a(
          b,
          S.sibling
        ), q = f(S, J), q.return = b, b = q) : (a(b, S), q = Rh(
          J,
          b.mode,
          q
        ), q.return = b, q._debugOwner = b, q._debugTask = b._debugTask, q._debugInfo = be, b = q), d(b)) : (typeof T == "function" && gt(b, T), typeof T == "symbol" && Li(b, T), a(b, S));
      }
      return function(b, S, T, q) {
        var J = be;
        be = null;
        try {
          Cm = 0;
          var de = Oe(
            b,
            S,
            T,
            q
          );
          return Xd = null, de;
        } catch (pt) {
          if (pt === Mm || pt === Sp) throw pt;
          var P = we(29, pt, null, b.mode);
          P.lanes = q, P.return = b;
          var he = P._debugInfo = be;
          if (P._debugOwner = b._debugOwner, P._debugTask = b._debugTask, he != null) {
            for (var ge = he.length - 1; 0 <= ge; ge--)
              if (typeof he[ge].stack == "string") {
                P._debugOwner = he[ge], P._debugTask = he[ge].debugTask;
                break;
              }
          }
          return P;
        } finally {
          be = J;
        }
      };
    }
    function Jl(e) {
      var t = e.alternate;
      Ue(
        pl,
        pl.current & Qd,
        e
      ), Ue(Ln, e, e), Si === null && (t === null || _d.current !== null || t.memoizedState !== null) && (Si = e);
    }
    function Ho(e) {
      if (e.tag === 22) {
        if (Ue(pl, pl.current, e), Ue(Ln, e, e), Si === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Si = e);
        }
      } else xa(e);
    }
    function xa(e) {
      Ue(pl, pl.current, e), Ue(
        Ln,
        Ln.current,
        e
      );
    }
    function Kl(e) {
      Ae(Ln, e), Si === e && (Si = null), Ae(pl, e);
    }
    function Tr(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === mc || fi(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function bt(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        x1.has(t) || (x1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function xo(e, t, a, i) {
      var f = e.memoizedState, o = a(i, f);
      if (e.mode & na) {
        _e(!0);
        try {
          o = a(i, f);
        } finally {
          _e(!1);
        }
      }
      o === void 0 && (t = Me(t) || "Component", O1.has(t) || (O1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), f = o == null ? f : fe({}, f, o), e.memoizedState = f, e.lanes === 0 && (e.updateQueue.baseState = f);
    }
    function Er(e, t, a, i, f, o, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          o,
          d
        ), e.mode & na) {
          _e(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              o,
              d
            );
          } finally {
            _e(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Me(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !so(a, i) || !so(f, o) : !0;
    }
    function Jh(e, t, a, i) {
      var f = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== f && (e = ae(e) || "Component", E1.has(e) || (E1.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), wv.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Wu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = fe({}, a));
        for (var f in e)
          a[f] === void 0 && (a[f] = e[f]);
      }
      return a;
    }
    function E0(e) {
      Jv(e), console.warn(
        `%s

%s
`,
        Zd ? "An error occurred in the <" + Zd + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Ar(e) {
      var t = Zd ? "The above error occurred in the <" + Zd + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Kv || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          ob + e[0],
          sb,
          Lp + i + Lp,
          rb
        ) : e.splice(
          0,
          0,
          ob,
          sb,
          Lp + i + Lp,
          rb
        ), e.unshift(console), i = _S.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Rr(e) {
      Jv(e);
    }
    function af(e, t) {
      try {
        Zd = t.source ? ae(t.source) : null, Kv = null;
        var a = t.value;
        if (M.actQueue !== null)
          M.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (f) {
        setTimeout(function() {
          throw f;
        });
      }
    }
    function xl(e, t, a) {
      try {
        Zd = a.source ? ae(a.source) : null, Kv = ae(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (f) {
        setTimeout(function() {
          throw f;
        });
      }
    }
    function Tt(e, t, a) {
      return a = Ja(a), a.tag = Yv, a.payload = { element: null }, a.callback = function() {
        ee(t.source, af, e, t);
      }, a;
    }
    function Co(e) {
      return e = Ja(e), e.tag = Yv, e;
    }
    function Ji(e, t, a, i) {
      var f = a.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var o = i.value;
        e.payload = function() {
          return f(o);
        }, e.callback = function() {
          er(a), ee(
            i.source,
            xl,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        er(a), ee(
          i.source,
          xl,
          t,
          a,
          i
        ), typeof f != "function" && (Qf === null ? Qf = /* @__PURE__ */ new Set([this]) : Qf.add(this)), yS(this, i), typeof f == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          ae(a) || "Unknown"
        );
      });
    }
    function zr(e, t, a, i, f) {
      if (a.flags |= 32768, _a && Pi(e, f), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && In(
          t,
          a,
          f,
          !0
        ), Ye && (sc = !0), a = Ln.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Si === null ? Vr() : a.alternate === null && qt === yc && (qt = Fv), a.flags &= -257, a.flags |= 65536, a.lanes = f, i === qv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), My(e, i, f)), !1;
            case 22:
              return a.flags |= 65536, i === qv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), My(e, i, f)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return My(e, i, f), Vr(), !1;
      }
      if (Ye)
        return sc = !0, t = Ln.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = f, i !== xv && _c(
          Vl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== xv && _c(
          Vl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, f &= -f, e.lanes |= f, i = Vl(i, a), f = Tt(
          e.stateNode,
          i,
          f
        ), eu(e, f), qt !== zs && (qt = Kd)), !1;
      var o = Vl(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (Xm === null ? Xm = [o] : Xm.push(o), qt !== zs && (qt = Kd), t === null) return !0;
      i = Vl(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = f & -f, a.lanes |= e, e = Tt(
              a.stateNode,
              i,
              e
            ), eu(a, e), !1;
          case 1:
            if (t = a.type, o = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Qf === null || !Qf.has(o))))
              return a.flags |= 65536, f &= -f, a.lanes |= f, f = Co(f), Ji(
                f,
                e,
                a,
                i
              ), eu(a, f), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Zt(e, t, a, i) {
      t.child = e === null ? S1(t, null, a, i) : jd(
        t,
        e.child,
        a,
        i
      );
    }
    function zn(e, t, a, i, f) {
      a = a.render;
      var o = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return ju(t), Yl(t), i = Qc(
        e,
        t,
        a,
        d,
        o,
        f
      ), h = tu(), ca(), e !== null && !zl ? ($a(e, t, f), Dn(e, t, f)) : (Ye && h && ar(t), t.flags |= 1, Zt(e, t, i, f), t.child);
    }
    function No(e, t, a, i, f) {
      if (e === null) {
        var o = a.type;
        return typeof o == "function" && !tr(o) && o.defaultProps === void 0 && a.compare === null ? (a = Ci(o), t.tag = 15, t.type = a, qo(t, o), Dr(
          e,
          t,
          a,
          i,
          f
        )) : (e = lr(
          a.type,
          null,
          i,
          t,
          t.mode,
          f
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (o = e.child, !ly(e, f)) {
        var d = o.memoizedProps;
        if (a = a.compare, a = a !== null ? a : so, a(d, i) && e.ref === t.ref)
          return Dn(
            e,
            t,
            f
          );
      }
      return t.flags |= 1, e = Tn(o, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Dr(e, t, a, i, f) {
      if (e !== null) {
        var o = e.memoizedProps;
        if (so(o, i) && e.ref === t.ref && t.type === e.type)
          if (zl = !1, t.pendingProps = i = o, ly(e, f))
            (e.flags & 131072) !== 0 && (zl = !0);
          else
            return t.lanes = e.lanes, Dn(e, t, f);
      }
      return Mr(
        e,
        t,
        a,
        i,
        f
      );
    }
    function Or(e, t, a) {
      var i = t.pendingProps, f = i.children, o = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = o !== null ? o.baseLanes | a : a, e !== null) {
            for (f = t.child = e.child, o = 0; f !== null; )
              o = o | f.lanes | f.childLanes, f = f.sibling;
            t.childLanes = o & ~i;
          } else t.childLanes = 0, t.child = null;
          return Kh(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && fr(
            t,
            o !== null ? o.cachePool : null
          ), o !== null ? sr(t, o) : ka(t), Ho(t);
        else
          return t.lanes = t.childLanes = 536870912, Kh(
            e,
            t,
            o !== null ? o.baseLanes | a : a,
            a
          );
      } else
        o !== null ? (fr(t, o.cachePool), sr(t, o), xa(t), t.memoizedState = null) : (e !== null && fr(t, null), ka(t), xa(t));
      return Zt(e, t, f, a), t.child;
    }
    function Kh(e, t, a, i) {
      var f = Ch();
      return f = f === null ? null : {
        parent: yl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && fr(t, null), ka(t), Ho(t), e !== null && In(e, t, i, !0), null;
    }
    function Bo(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Mr(e, t, a, i, f) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var o = Me(a) || "Unknown";
        N1[o] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          o,
          o
        ), N1[o] = !0);
      }
      return t.mode & na && Ou.recordLegacyContextWarning(
        t,
        null
      ), e === null && (qo(t, t.type), a.contextTypes && (o = Me(a) || "Unknown", q1[o] || (q1[o] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        o
      )))), ju(t), Yl(t), a = Qc(
        e,
        t,
        a,
        i,
        void 0,
        f
      ), i = tu(), ca(), e !== null && !zl ? ($a(e, t, f), Dn(e, t, f)) : (Ye && i && ar(t), t.flags |= 1, Zt(e, t, a, f), t.child);
    }
    function kh(e, t, a, i, f, o) {
      return ju(t), Yl(t), dc = -1, xm = e !== null && e.type !== t.type, t.updateQueue = null, a = Zl(
        t,
        i,
        a,
        f
      ), vo(e, t), i = tu(), ca(), e !== null && !zl ? ($a(e, t, o), Dn(e, t, o)) : (Ye && i && ar(t), t.flags |= 1, Zt(e, t, a, o), t.child);
    }
    function $h(e, t, a, i, f) {
      switch (vl(t)) {
        case !1:
          var o = t.stateNode, d = new t.type(
            t.memoizedProps,
            o.context
          ).state;
          o.updater.enqueueSetState(o, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, o = Error("Simulated error coming from DevTools");
          var h = f & -f;
          if (t.lanes |= h, d = ft, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Co(h), Ji(
            h,
            d,
            t,
            Vl(o, t)
          ), eu(t, h);
      }
      if (ju(t), t.stateNode === null) {
        if (d = qf, o = a.contextType, "contextType" in a && o !== null && (o === void 0 || o.$$typeof !== la) && !H1.has(a) && (H1.add(a), h = o === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? " However, it is set to a " + typeof o + "." : o.$$typeof === as ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Me(a) || "Component",
          h
        )), typeof o == "object" && o !== null && (d = nt(o)), o = new a(i, d), t.mode & na) {
          _e(!0);
          try {
            o = new a(i, d);
          } finally {
            _e(!1);
          }
        }
        if (d = t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = wv, t.stateNode = o, o._reactInternals = t, o._reactInternalInstance = T1, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Me(a) || "Component", A1.has(d) || (A1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          o.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function") {
          var p = h = d = null;
          if (typeof o.componentWillMount == "function" && o.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof o.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof o.componentWillReceiveProps == "function" && o.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof o.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof o.componentWillUpdate == "function" && o.componentWillUpdate.__suppressDeprecationWarning !== !0 ? p = "componentWillUpdate" : typeof o.UNSAFE_componentWillUpdate == "function" && (p = "UNSAFE_componentWillUpdate"), d !== null || h !== null || p !== null) {
            o = Me(a) || "Component";
            var v = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            z1.has(o) || (z1.add(o), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              o,
              v,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              p !== null ? `
  ` + p : ""
            ));
          }
        }
        o = t.stateNode, d = Me(a) || "Component", o.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !o.getInitialState || o.getInitialState.isReactClassApproved || o.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), o.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !U1.has(a) && (U1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !M1.has(a) && (M1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof o.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof o.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Me(a) || "A pure component"
        ), typeof o.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof o.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof o.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof o.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = o.props !== i, o.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), o.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof o.getSnapshotBeforeUpdate != "function" || typeof o.componentDidUpdate == "function" || R1.has(a) || (R1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Me(a)
        )), typeof o.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof o.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = o.state) && (typeof h != "object" || wt(h)) && console.error("%s.state: must be set to an object or null", d), typeof o.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), o = t.stateNode, o.props = i, o.state = t.memoizedState, o.refs = {}, Zu(t), d = a.contextType, o.context = typeof d == "object" && d !== null ? nt(d) : qf, o.state === i && (d = Me(a) || "Component", D1.has(d) || (D1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & na && Ou.recordLegacyContextWarning(
          t,
          o
        ), Ou.recordUnsafeLifecycleWarnings(
          t,
          o
        ), o.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (xo(
          t,
          a,
          d,
          i
        ), o.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (d = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), d !== o.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          ae(t) || "Component"
        ), wv.enqueueReplaceState(
          o,
          o.state,
          null
        )), Lu(t, i, o, f), Xc(), o.state = t.memoizedState), typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Du) !== mt && (t.flags |= 134217728), o = !0;
      } else if (e === null) {
        o = t.stateNode;
        var U = t.memoizedProps;
        h = Wu(a, U), o.props = h;
        var N = o.context;
        p = a.contextType, d = qf, typeof p == "object" && p !== null && (d = nt(p)), v = a.getDerivedStateFromProps, p = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function", U = t.pendingProps !== U, p || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (U || N !== d) && Jh(
          t,
          o,
          i,
          d
        ), Yf = !1;
        var O = t.memoizedState;
        o.state = O, Lu(t, i, o, f), Xc(), N = t.memoizedState, U || O !== N || Yf ? (typeof v == "function" && (xo(
          t,
          a,
          v,
          i
        ), N = t.memoizedState), (h = Yf || Er(
          t,
          a,
          h,
          i,
          O,
          N,
          d
        )) ? (p || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Du) !== mt && (t.flags |= 134217728)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Du) !== mt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = N), o.props = i, o.state = N, o.context = d, o = h) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Du) !== mt && (t.flags |= 134217728), o = !1);
      } else {
        o = t.stateNode, po(e, t), d = t.memoizedProps, p = Wu(a, d), o.props = p, v = t.pendingProps, O = o.context, N = a.contextType, h = qf, typeof N == "object" && N !== null && (h = nt(N)), U = a.getDerivedStateFromProps, (N = typeof U == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (d !== v || O !== h) && Jh(
          t,
          o,
          i,
          h
        ), Yf = !1, O = t.memoizedState, o.state = O, Lu(t, i, o, f), Xc();
        var B = t.memoizedState;
        d !== v || O !== B || Yf || e !== null && e.dependencies !== null && ho(e.dependencies) ? (typeof U == "function" && (xo(
          t,
          a,
          U,
          i
        ), B = t.memoizedState), (p = Yf || Er(
          t,
          a,
          p,
          i,
          O,
          B,
          h
        ) || e !== null && e.dependencies !== null && ho(e.dependencies)) ? (N || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(i, B, h), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(
          i,
          B,
          h
        )), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = B), o.props = i, o.state = B, o.context = h, o = p) : (typeof o.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), o = !1);
      }
      if (h = o, Bo(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, qu(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Ga = -1;
        else {
          if (Yl(t), a = i1(h), t.mode & na) {
            _e(!0);
            try {
              i1(h);
            } finally {
              _e(!1);
            }
          }
          ca();
        }
        t.flags |= 1, e !== null && d ? (t.child = jd(
          t,
          e.child,
          null,
          f
        ), t.child = jd(
          t,
          null,
          a,
          f
        )) : Zt(e, t, a, f), t.memoizedState = h.state, e = t.child;
      } else
        e = Dn(
          e,
          t,
          f
        );
      return f = t.stateNode, o && f.props !== i && (Ld || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        ae(t) || "a component"
      ), Ld = !0), e;
    }
    function Wh(e, t, a, i) {
      return Yc(), t.flags |= 256, Zt(e, t, a, i), t.child;
    }
    function qo(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Me(t) || "Unknown", Y1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Y1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Me(t) || "Unknown", B1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), B1[t] = !0));
    }
    function Ur(e) {
      return { baseLanes: e, cachePool: Nh() };
    }
    function Fh(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= pn), e;
    }
    function Ih(e, t, a) {
      var i, f = t.pendingProps;
      kt(t) && (t.flags |= 128);
      var o = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (pl.current & Nm) !== 0), i && (o = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Ye) {
          if (o ? Jl(t) : xa(t), Ye) {
            var h = Bt, p;
            if (!(p = !h)) {
              e: {
                var v = h;
                for (p = gi; v.nodeType !== 8; ) {
                  if (!p) {
                    p = null;
                    break e;
                  }
                  if (v = ea(v.nextSibling), v === null) {
                    p = null;
                    break e;
                  }
                }
                p = v;
              }
              p !== null ? (La(), t.memoizedState = {
                dehydrated: p,
                treeContext: gs !== null ? { id: fc, overflow: oc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, v = we(18, null, null, mt), v.stateNode = p, v.return = t, t.child = v, Sa = t, Bt = null, p = !0) : p = !1, p = !p;
            }
            p && (qc(
              t,
              h
            ), Vu(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return fi(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          Kl(t);
        }
        return h = f.children, f = f.fallback, o ? (xa(t), o = t.mode, h = Yo(
          {
            mode: "hidden",
            children: h
          },
          o
        ), f = Oa(
          f,
          o,
          a,
          null
        ), h.return = t, f.return = t, h.sibling = f, t.child = h, o = t.child, o.memoizedState = Ur(a), o.childLanes = Fh(
          e,
          i,
          a
        ), t.memoizedState = $v, f) : (Jl(t), Hr(
          t,
          h
        ));
      }
      var U = e.memoizedState;
      if (U !== null && (h = U.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (Jl(t), t.flags &= -257, t = _o(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (xa(t), t.child = e.child, t.flags |= 128, t = null) : (xa(t), o = f.fallback, h = t.mode, f = Yo(
            {
              mode: "visible",
              children: f.children
            },
            h
          ), o = Oa(
            o,
            h,
            a,
            null
          ), o.flags |= 2, f.return = t, o.return = t, f.sibling = o, t.child = f, jd(
            t,
            e.child,
            null,
            a
          ), f = t.child, f.memoizedState = Ur(a), f.childLanes = Fh(
            e,
            i,
            a
          ), t.memoizedState = $v, t = o);
        else if (Jl(t), Ye && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), fi(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            p = i.dgst;
            var N = i.msg;
            v = i.stck;
            var O = i.cstck;
          }
          h = N, i = p, f = v, p = o = O, o = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), o.stack = f || "", o.digest = i, i = p === void 0 ? null : p, f = {
            value: o,
            source: null,
            stack: i
          }, typeof i == "string" && Mv.set(
            o,
            f
          ), _c(f), t = _o(
            e,
            t,
            a
          );
        } else if (zl || In(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, zl || i) {
          if (i = ft, i !== null && (f = a & -a, f = (f & 42) !== 0 ? 1 : vn(
            f
          ), f = (f & (i.suspendedLanes | a)) !== 0 ? 0 : f, f !== 0 && f !== U.retryLane))
            throw U.retryLane = f, Xl(
              e,
              f
            ), Se(
              i,
              e,
              f
            ), C1;
          h.data === mc || Vr(), t = _o(
            e,
            t,
            a
          );
        } else
          h.data === mc ? (t.flags |= 192, t.child = e.child, t = null) : (e = U.treeContext, Bt = ea(
            h.nextSibling
          ), Sa = t, Ye = !0, bs = null, sc = !1, Xn = null, gi = !1, e !== null && (La(), Gn[Vn++] = fc, Gn[Vn++] = oc, Gn[Vn++] = gs, fc = e.id, oc = e.overflow, gs = t), t = Hr(
            t,
            f.children
          ), t.flags |= 4096);
        return t;
      }
      return o ? (xa(t), o = f.fallback, h = t.mode, p = e.child, v = p.sibling, f = Tn(
        p,
        {
          mode: "hidden",
          children: f.children
        }
      ), f.subtreeFlags = p.subtreeFlags & 65011712, v !== null ? o = Tn(
        v,
        o
      ) : (o = Oa(
        o,
        h,
        a,
        null
      ), o.flags |= 2), o.return = t, f.return = t, f.sibling = o, t.child = f, f = o, o = t.child, h = e.child.memoizedState, h === null ? h = Ur(a) : (p = h.cachePool, p !== null ? (v = yl._currentValue, p = p.parent !== v ? { parent: v, pool: v } : p) : p = Nh(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: p
      }), o.memoizedState = h, o.childLanes = Fh(
        e,
        i,
        a
      ), t.memoizedState = $v, f) : (Jl(t), a = e.child, e = a.sibling, a = Tn(a, {
        mode: "visible",
        children: f.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Hr(e, t) {
      return t = Yo(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Yo(e, t) {
      return e = we(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: Uv,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function _o(e, t, a) {
      return jd(t, e.child, null, a), e = Hr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Ph(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Uh(
        e.return,
        t,
        a
      );
    }
    function ey(e, t) {
      var a = wt(e);
      return e = !a && typeof Ut(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function xr(e, t, a, i, f) {
      var o = e.memoizedState;
      o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: f
      } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = i, o.tail = a, o.tailMode = f);
    }
    function ty(e, t, a) {
      var i = t.pendingProps, f = i.revealOrder, o = i.tail;
      if (i = i.children, f !== void 0 && f !== "forwards" && f !== "backwards" && f !== "together" && !_1[f])
        if (_1[f] = !0, typeof f == "string")
          switch (f.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                f,
                f.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                f,
                f.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                f
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            f
          );
      o === void 0 || kv[o] || (o !== "collapsed" && o !== "hidden" ? (kv[o] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        o
      )) : f !== "forwards" && f !== "backwards" && (kv[o] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        o
      )));
      e: if ((f === "forwards" || f === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (wt(i)) {
          for (var d = 0; d < i.length; d++)
            if (!ey(i[d], d)) break e;
        } else if (d = Ut(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), p = 0; !h.done; h = d.next()) {
              if (!ey(h.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            f
          );
      if (Zt(e, t, i, a), i = pl.current, (i & Nm) !== 0)
        i = i & Qd | Nm, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Ph(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Ph(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= Qd;
      }
      switch (Ue(pl, i, t), f) {
        case "forwards":
          for (a = t.child, f = null; a !== null; )
            e = a.alternate, e !== null && Tr(e) === null && (f = a), a = a.sibling;
          a = f, a === null ? (f = t.child, t.child = null) : (f = a.sibling, a.sibling = null), xr(
            t,
            !1,
            f,
            a,
            o
          );
          break;
        case "backwards":
          for (a = null, f = t.child, t.child = null; f !== null; ) {
            if (e = f.alternate, e !== null && Tr(e) === null) {
              t.child = f;
              break;
            }
            e = f.sibling, f.sibling = a, a = f, f = e;
          }
          xr(
            t,
            !0,
            a,
            null,
            o
          );
          break;
        case "together":
          xr(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Dn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Ga = -1, Xf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (In(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = Tn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = Tn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function ly(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ho(e)));
    }
    function A0(e, t, a) {
      switch (t.tag) {
        case 3:
          Xt(
            t,
            t.stateNode.containerInfo
          ), Xu(
            t,
            yl,
            e.memoizedState.cache
          ), Yc();
          break;
        case 27:
        case 5:
          Z(t);
          break;
        case 4:
          Xt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Xu(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Jl(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Ih(
              e,
              t,
              a
            ) : (Jl(t), e = Dn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          Jl(t);
          break;
        case 19:
          var f = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (In(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), f) {
            if (i)
              return ty(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (f = t.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Ue(
            pl,
            pl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Or(e, t, a);
        case 24:
          Xu(
            t,
            yl,
            e.memoizedState.cache
          );
      }
      return Dn(e, t, a);
    }
    function Fu(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = lr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var f = i.child;
          if (f === null)
            throw Error("Expected parent to have a child.");
          for (; f.sibling !== t; )
            if (f = f.sibling, f === null)
              throw Error("Expected to find the previous sibling.");
          f.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          zl = !0;
        else {
          if (!ly(e, a) && (t.flags & 128) === 0)
            return zl = !1, A0(
              e,
              t,
              a
            );
          zl = (e.flags & 131072) !== 0;
        }
      else
        zl = !1, (i = Ye) && (La(), i = (t.flags & 1048576) !== 0), i && (i = t.index, La(), Dh(t, yp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Gf(t.elementType), t.type = e, typeof e == "function")
            tr(e) ? (i = Wu(
              e,
              i
            ), t.tag = 1, t.type = e = Ci(e), t = $h(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, qo(t, e), t.type = e = Ci(e), t = Mr(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (f = e.$$typeof, f === di) {
                t.tag = 11, t.type = e = Eh(e), t = zn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (f === rd) {
                t.tag = 14, t = No(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === va && (t = " Did you wrap a component in React.lazy() more than once?"), e = Me(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Mr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, f = Wu(
            i,
            t.pendingProps
          ), $h(
            e,
            t,
            i,
            f,
            a
          );
        case 3:
          e: {
            if (Xt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var o = t.memoizedState;
            f = o.element, po(e, t), Lu(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Xu(t, yl, i), i !== o.cache && Ul(
              t,
              [yl],
              a,
              !0
            ), Xc(), i = d.element, o.isDehydrated)
              if (o = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                t = Wh(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== f) {
                f = Vl(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), _c(f), t = Wh(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Bt = ea(e.firstChild), Sa = t, Ye = !0, bs = null, sc = !1, Xn = null, gi = !0, e = S1(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (Yc(), i === f) {
                t = Dn(
                  e,
                  t,
                  a
                );
                break e;
              }
              Zt(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Bo(e, t), e === null ? (e = Wo(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : Ye || (e = t.type, a = t.pendingProps, i = Vt(
            Un.current
          ), i = Be(
            i
          ).createElement(e), i[Rl] = t, i[aa] = a, Pt(i, e, a), jt(i), t.stateNode = i) : t.memoizedState = Wo(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return Z(t), e === null && Ye && (i = Vt(Un.current), f = x(), i = t.stateNode = ta(
            t.type,
            t.pendingProps,
            i,
            f,
            !1
          ), sc || (f = Ee(
            i,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Yi(t, 0).serverProps = f)), Sa = t, gi = !0, f = Bt, Lt(t.type) ? (gg = f, Bt = ea(
            i.firstChild
          )) : Bt = f), Zt(
            e,
            t,
            t.pendingProps.children,
            a
          ), Bo(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && Ye && (o = x(), i = Ls(
            t.type,
            o.ancestorInfo
          ), f = Bt, (d = !f) || (d = sl(
            f,
            t.type,
            t.pendingProps,
            gi
          ), d !== null ? (t.stateNode = d, sc || (o = Ee(
            d,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Yi(t, 0).serverProps = o)), Sa = t, Bt = ea(
            d.firstChild
          ), gi = !1, o = !0) : o = !1, d = !o), d && (i && qc(t, f), Vu(t))), Z(t), f = t.type, o = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = o.children, ni(f, o) ? i = null : d !== null && ni(f, d) && (t.flags |= 32), t.memoizedState !== null && (f = Qc(
            e,
            t,
            Ua,
            null,
            null,
            a
          ), km._currentValue = f), Bo(e, t), Zt(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && Ye && (e = t.pendingProps, a = x(), i = a.ancestorInfo.current, e = i != null ? xc(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = Bt, (i = !a) || (i = ci(
            a,
            t.pendingProps,
            gi
          ), i !== null ? (t.stateNode = i, Sa = t, Bt = null, i = !0) : i = !1, i = !i), i && (e && qc(t, a), Vu(t))), null;
        case 13:
          return Ih(e, t, a);
        case 4:
          return Xt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = jd(
            t,
            null,
            i,
            a
          ) : Zt(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return zn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Zt(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Zt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Zt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, f = t.pendingProps, o = f.value, "value" in f || G1 || (G1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Xu(t, i, o), Zt(
            e,
            t,
            f.children,
            a
          ), t.child;
        case 9:
          return f = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), ju(t), f = nt(f), Yl(t), i = Qv(
            i,
            f,
            void 0
          ), ca(), t.flags |= 1, Zt(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return No(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Dr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return ty(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Yo(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Tn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return Or(e, t, a);
        case 24:
          return ju(t), i = nt(yl), e === null ? (f = Ch(), f === null && (f = ft, o = Hh(), f.pooledCache = o, Ma(o), o !== null && (f.pooledCacheLanes |= a), f = o), t.memoizedState = {
            parent: i,
            cache: f
          }, Zu(t), Xu(t, yl, f)) : ((e.lanes & a) !== 0 && (po(e, t), Lu(t, null, null, a), Xc()), f = e.memoizedState, o = t.memoizedState, f.parent !== i ? (f = {
            parent: i,
            cache: i
          }, t.memoizedState = f, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = f), Xu(t, yl, i)) : (i = o.cache, Xu(t, yl, i), i !== f.cache && Ul(
            t,
            [yl],
            a,
            !0
          ))), Zt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Ca(e) {
      e.flags |= 4;
    }
    function ay(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & wn) !== Bs)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !wy(t)) {
        if (t = Ln.current, t !== null && ((ze & 4194048) === ze ? Si !== null : (ze & 62914560) !== ze && (ze & 536870912) === 0 || t !== Si))
          throw Um = qv, kg;
        e.flags |= 8192;
      }
    }
    function Ki(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? l0() : 536870912, e.lanes |= t, Ms |= t);
    }
    function fu(e, t) {
      if (!Ye)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function ut(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Nl) !== mt) {
          for (var f = e.selfBaseDuration, o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, f += o.treeBaseDuration, o = o.sibling;
          e.treeBaseDuration = f;
        } else
          for (f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, f.return = e, f = f.sibling;
      else if ((e.mode & Nl) !== mt) {
        f = e.actualDuration, o = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, f += d.actualDuration, o += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = f, e.treeBaseDuration = o;
      } else
        for (f = e.child; f !== null; )
          a |= f.lanes | f.childLanes, i |= f.subtreeFlags, i |= f.flags, f.return = e, f = f.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function R0(e, t, a) {
      var i = t.pendingProps;
      switch (qi(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ut(t), null;
        case 1:
          return ut(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Fn(yl, t), _(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (_i(t) ? (b0(), Ca(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Mh())), ut(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Ca(t), a !== null ? (ut(t), ay(
            t,
            a
          )) : (ut(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Ca(t), ut(t), ay(
            t,
            a
          )) : (ut(t), t.flags &= -16777217) : (e.memoizedProps !== i && Ca(t), ut(t), t.flags &= -16777217), null;
        case 27:
          W(t), a = Vt(Un.current);
          var f = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Ca(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ut(t), null;
            }
            e = x(), _i(t) ? Oh(t) : (e = ta(
              f,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Ca(t));
          }
          return ut(t), null;
        case 5:
          if (W(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Ca(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ut(t), null;
            }
            if (f = x(), _i(t))
              Oh(t);
            else {
              switch (e = Vt(Un.current), Ls(a, f.ancestorInfo), f = f.context, e = Be(e), f) {
                case Pd:
                  e = e.createElementNS(zu, a);
                  break;
                case jp:
                  e = e.createElementNS(
                    Ad,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        zu,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Ad,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || Hn.call(
                        ab,
                        a
                      ) || (ab[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Rl] = t, e[aa] = i;
              e: for (f = t.child; f !== null; ) {
                if (f.tag === 5 || f.tag === 6)
                  e.appendChild(f.stateNode);
                else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                  f.child.return = f, f = f.child;
                  continue;
                }
                if (f === t) break e;
                for (; f.sibling === null; ) {
                  if (f.return === null || f.return === t)
                    break e;
                  f = f.return;
                }
                f.sibling.return = f.return, f = f.sibling;
              }
              t.stateNode = e;
              e: switch (Pt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Ca(t);
            }
          }
          return ut(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Ca(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Vt(Un.current), a = x(), _i(t)) {
              e = t.stateNode, a = t.memoizedProps, f = !sc, i = null;
              var o = Sa;
              if (o !== null)
                switch (o.tag) {
                  case 3:
                    f && (f = jy(
                      e,
                      a,
                      i
                    ), f !== null && (Yi(t, 0).serverProps = f));
                    break;
                  case 27:
                  case 5:
                    i = o.memoizedProps, f && (f = jy(
                      e,
                      a,
                      i
                    ), f !== null && (Yi(
                      t,
                      0
                    ).serverProps = f));
                }
              e[Rl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || tc(e.nodeValue, a)), e || Vu(t);
            } else
              f = a.ancestorInfo.current, f != null && xc(
                i,
                f.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Be(e).createTextNode(
                i
              ), e[Rl] = t, t.stateNode = e;
          }
          return ut(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (f = _i(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Rl] = t, ut(t), (t.mode & Nl) !== mt && i !== null && (f = t.child, f !== null && (t.treeBaseDuration -= f.treeBaseDuration));
              } else
                b0(), Yc(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, ut(t), (t.mode & Nl) !== mt && i !== null && (f = t.child, f !== null && (t.treeBaseDuration -= f.treeBaseDuration));
              f = !1;
            } else
              f = Mh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = f), f = !0;
            if (!f)
              return t.flags & 256 ? (Kl(t), t) : (Kl(t), null);
          }
          return Kl(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Nl) !== mt && mo(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, f = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (f = i.alternate.memoizedState.cachePool.pool), o = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool), o !== f && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Ki(t, t.updateQueue), ut(t), (t.mode & Nl) !== mt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return _(t), e === null && Ko(
            t.stateNode.containerInfo
          ), ut(t), null;
        case 10:
          return Fn(t.type, t), ut(t), null;
        case 19:
          if (Ae(pl, t), f = t.memoizedState, f === null) return ut(t), null;
          if (i = (t.flags & 128) !== 0, o = f.rendering, o === null)
            if (i) fu(f, !1);
            else {
              if (qt !== yc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (o = Tr(e), o !== null) {
                    for (t.flags |= 128, fu(f, !1), e = o.updateQueue, t.updateQueue = e, Ki(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Ah(a, e), a = a.sibling;
                    return Ue(
                      pl,
                      pl.current & Qd | Nm,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              f.tail !== null && rl() > Up && (t.flags |= 128, i = !0, fu(f, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Tr(o), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Ki(t, e), fu(f, !0), f.tail === null && f.tailMode === "hidden" && !o.alternate && !Ye)
                  return ut(t), null;
              } else
                2 * rl() - f.renderingStartTime > Up && a !== 536870912 && (t.flags |= 128, i = !0, fu(f, !1), t.lanes = 4194304);
            f.isBackwards ? (o.sibling = t.child, t.child = o) : (e = f.last, e !== null ? e.sibling = o : t.child = o, f.last = o);
          }
          return f.tail !== null ? (e = f.tail, f.rendering = e, f.tail = e.sibling, f.renderingStartTime = rl(), e.sibling = null, a = pl.current, a = i ? a & Qd | Nm : a & Qd, Ue(pl, a, t), e) : (ut(t), null);
        case 22:
        case 23:
          return Kl(t), rr(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t), a = t.updateQueue, a !== null && Ki(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Ae(Es, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Fn(yl, t), ut(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function z0(e, t) {
      switch (qi(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Nl) !== mt && mo(t), t) : null;
        case 3:
          return Fn(yl, t), _(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return W(t), null;
        case 13:
          if (Kl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Yc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Nl) !== mt && mo(t), t) : null;
        case 19:
          return Ae(pl, t), null;
        case 4:
          return _(t), null;
        case 10:
          return Fn(t.type, t), null;
        case 22:
        case 23:
          return Kl(t), rr(t), e !== null && Ae(Es, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Nl) !== mt && mo(t), t) : null;
        case 24:
          return Fn(yl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ny(e, t) {
      switch (qi(t), t.tag) {
        case 3:
          Fn(yl, t), _(t);
          break;
        case 26:
        case 27:
        case 5:
          W(t);
          break;
        case 4:
          _(t);
          break;
        case 13:
          Kl(t);
          break;
        case 19:
          Ae(pl, t);
          break;
        case 10:
          Fn(t.type, t);
          break;
        case 22:
        case 23:
          Kl(t), rr(t), e !== null && Ae(Es, t);
          break;
        case 24:
          Fn(yl, t);
      }
    }
    function en(e) {
      return (e.mode & Nl) !== mt;
    }
    function uy(e, t) {
      en(e) ? (Tl(), nf(t, e), wa()) : nf(t, e);
    }
    function Go(e, t, a) {
      en(e) ? (Tl(), ki(
        a,
        e,
        t
      ), wa()) : ki(
        a,
        e,
        t
      );
    }
    function nf(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var f = i.next;
          a = f;
          do {
            if ((a.tag & e) === e && ((e & ml) !== jn ? K !== null && typeof K.markComponentPassiveEffectMountStarted == "function" && K.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Bl) !== jn && K !== null && typeof K.markComponentLayoutEffectMountStarted == "function" && K.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Ta) !== jn && (Fd = !0), i = ee(
              t,
              mS,
              a
            ), (e & Ta) !== jn && (Fd = !1), (e & ml) !== jn ? K !== null && typeof K.markComponentPassiveEffectMountStopped == "function" && K.markComponentPassiveEffectMountStopped() : (e & Bl) !== jn && K !== null && typeof K.markComponentLayoutEffectMountStopped == "function" && K.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var o = void 0;
              o = (a.tag & Bl) !== 0 ? "useLayoutEffect" : (a.tag & Ta) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + o + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + o + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ee(
                t,
                function(h, p) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    p
                  );
                },
                o,
                d
              );
            }
            a = a.next;
          } while (a !== f);
        }
      } catch (h) {
        ke(t, t.return, h);
      }
    }
    function ki(e, t, a) {
      try {
        var i = t.updateQueue, f = i !== null ? i.lastEffect : null;
        if (f !== null) {
          var o = f.next;
          i = o;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & ml) !== jn ? K !== null && typeof K.markComponentPassiveEffectUnmountStarted == "function" && K.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Bl) !== jn && K !== null && typeof K.markComponentLayoutEffectUnmountStarted == "function" && K.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Ta) !== jn && (Fd = !0), f = t, ee(
                f,
                pS,
                f,
                a,
                h
              ), (e & Ta) !== jn && (Fd = !1), (e & ml) !== jn ? K !== null && typeof K.markComponentPassiveEffectUnmountStopped == "function" && K.markComponentPassiveEffectUnmountStopped() : (e & Bl) !== jn && K !== null && typeof K.markComponentLayoutEffectUnmountStopped == "function" && K.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== o);
        }
      } catch (p) {
        ke(t, t.return, p);
      }
    }
    function Cr(e, t) {
      en(e) ? (Tl(), nf(t, e), wa()) : nf(t, e);
    }
    function Nr(e, t, a) {
      en(e) ? (Tl(), ki(
        a,
        e,
        t
      ), wa()) : ki(
        a,
        e,
        t
      );
    }
    function iy(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Ld || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          ae(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          ae(e) || "instance"
        ));
        try {
          ee(
            e,
            Ql,
            t,
            a
          );
        } catch (i) {
          ke(e, e.return, i);
        }
      }
    }
    function rv(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function cy(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Ld || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        ae(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        ae(e) || "instance"
      ));
      try {
        var f = Wu(
          e.type,
          a,
          e.elementType === e.type
        ), o = ee(
          e,
          rv,
          t,
          f,
          i
        );
        a = V1, o !== void 0 || a.has(e.type) || (a.add(e.type), ee(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            ae(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = o;
      } catch (d) {
        ke(e, e.return, d);
      }
    }
    function fy(e, t, a) {
      a.props = Wu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, en(e) ? (Tl(), ee(
        e,
        d1,
        e,
        t,
        a
      ), wa()) : ee(
        e,
        d1,
        e,
        t,
        a
      );
    }
    function D0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (en(e))
            try {
              Tl(), e.refCleanup = t(a);
            } finally {
              wa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            ae(e)
          ), t.current = a;
      }
    }
    function $i(e, t) {
      try {
        ee(e, D0, e);
      } catch (a) {
        ke(e, t, a);
      }
    }
    function tn(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (en(e))
              try {
                Tl(), ee(e, i);
              } finally {
                wa(e);
              }
            else ee(e, i);
          } catch (f) {
            ke(e, t, f);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (en(e))
              try {
                Tl(), ee(e, a, null);
              } finally {
                wa(e);
              }
            else ee(e, a, null);
          } catch (f) {
            ke(e, t, f);
          }
        else a.current = null;
    }
    function oy(e, t, a, i) {
      var f = e.memoizedProps, o = f.id, d = f.onCommit;
      f = f.onRender, t = t === null ? "mount" : "update", vp && (t = "nested-update"), typeof f == "function" && f(
        o,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function dv(e, t, a, i) {
      var f = e.memoizedProps;
      e = f.id, f = f.onPostCommit, t = t === null ? "mount" : "update", vp && (t = "nested-update"), typeof f == "function" && f(
        e,
        t,
        i,
        a
      );
    }
    function O0(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ee(
          e,
          At,
          i,
          t,
          a,
          e
        );
      } catch (f) {
        ke(e, e.return, f);
      }
    }
    function Br(e, t, a) {
      try {
        ee(
          e,
          ui,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        ke(e, e.return, i);
      }
    }
    function uf(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Lt(e.type) || e.tag === 4;
    }
    function Vo(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || uf(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Lt(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function cf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = li));
      else if (i !== 4 && (i === 27 && Lt(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (cf(e, t, a), e = e.sibling; e !== null; )
          cf(e, t, a), e = e.sibling;
    }
    function Xo(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && Lt(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Xo(e, t, a), e = e.sibling; e !== null; )
          Xo(e, t, a), e = e.sibling;
    }
    function M0(e) {
      for (var t, a = e.return; a !== null; ) {
        if (uf(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = Vo(e), Xo(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (ii(a), t.flags &= -33), t = Vo(e), Xo(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = Vo(e), cf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function jo(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ee(
          e,
          Z0,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        ke(e, e.return, i);
      }
    }
    function U0(e, t) {
      if (e = e.containerInfo, mg = wp, e = p0(e), Sh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var f = i.anchorOffset, o = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, o.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, p = -1, v = 0, U = 0, N = e, O = null;
              t: for (; ; ) {
                for (var B; N !== a || f !== 0 && N.nodeType !== 3 || (h = d + f), N !== o || i !== 0 && N.nodeType !== 3 || (p = d + i), N.nodeType === 3 && (d += N.nodeValue.length), (B = N.firstChild) !== null; )
                  O = N, N = B;
                for (; ; ) {
                  if (N === e) break t;
                  if (O === a && ++v === f && (h = d), O === o && ++U === i && (p = d), (B = N.nextSibling) !== null) break;
                  N = O, O = N.parentNode;
                }
                N = B;
              }
              a = h === -1 || p === -1 ? null : { start: h, end: p };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (pg = {
        focusedElem: e,
        selectionRange: a
      }, wp = !1, Dl = t; Dl !== null; )
        if (t = Dl, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Dl = e;
        else
          for (; Dl !== null; ) {
            switch (e = t = Dl, a = e.alternate, f = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (f & 1024) !== 0 && a !== null && cy(e, a);
                break;
              case 3:
                if ((f & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    On(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        On(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((f & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Dl = e;
              break;
            }
            Dl = t.return;
          }
    }
    function sy(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ct(e, a), i & 4 && uy(a, Bl | Qn);
          break;
        case 1:
          if (Ct(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Ld || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ae(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ae(a) || "instance"
              )), en(a) ? (Tl(), ee(
                a,
                Zv,
                a,
                e
              ), wa()) : ee(
                a,
                Zv,
                a,
                e
              );
            else {
              var f = Wu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Ld || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                ae(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                ae(a) || "instance"
              )), en(a) ? (Tl(), ee(
                a,
                o1,
                a,
                e,
                f,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), wa()) : ee(
                a,
                o1,
                a,
                e,
                f,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && iy(a), i & 512 && $i(a, a.return);
          break;
        case 3:
          if (t = oa(), Ct(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (f = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  f = a.child.stateNode;
                  break;
                case 1:
                  f = a.child.stateNode;
              }
            try {
              ee(
                a,
                Ql,
                i,
                f
              );
            } catch (d) {
              ke(a, a.return, d);
            }
          }
          e.effectDuration += Gc(t);
          break;
        case 27:
          t === null && i & 4 && jo(a);
        case 26:
        case 5:
          Ct(e, a), t === null && i & 4 && O0(a), i & 512 && $i(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = oa(), Ct(e, a), e = a.stateNode, e.effectDuration += Vc(i);
            try {
              ee(
                a,
                oy,
                a,
                t,
                pp,
                e.effectDuration
              );
            } catch (d) {
              ke(a, a.return, d);
            }
          } else Ct(e, a);
          break;
        case 13:
          Ct(e, a), i & 4 && Qo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = ei.bind(
            null,
            a
          ), bf(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || hc, !i) {
            t = t !== null && t.memoizedState !== null || Jt, f = hc;
            var o = Jt;
            hc = i, (Jt = t) && !o ? El(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Ct(e, a), hc = f, Jt = o;
          }
          break;
        case 30:
          break;
        default:
          Ct(e, a);
      }
    }
    function H0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, H0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ec(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function kl(e, t, a) {
      for (a = a.child; a !== null; )
        ff(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function ff(e, t, a) {
      if (dl && typeof dl.onCommitFiberUnmount == "function")
        try {
          dl.onCommitFiberUnmount(ic, a);
        } catch (o) {
          Mt || (Mt = !0, console.error(
            "React instrumentation encountered an error: %s",
            o
          ));
        }
      switch (a.tag) {
        case 26:
          Jt || tn(a, t), kl(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          Jt || tn(a, t);
          var i = nl, f = Va;
          Lt(a.type) && (nl = a.stateNode, Va = !1), kl(
            e,
            t,
            a
          ), ee(
            a,
            Tf,
            a.stateNode
          ), nl = i, Va = f;
          break;
        case 5:
          Jt || tn(a, t);
        case 6:
          if (i = nl, f = Va, nl = null, kl(
            e,
            t,
            a
          ), nl = i, Va = f, nl !== null)
            if (Va)
              try {
                ee(
                  a,
                  $o,
                  nl,
                  a.stateNode
                );
              } catch (o) {
                ke(
                  a,
                  t,
                  o
                );
              }
            else
              try {
                ee(
                  a,
                  gf,
                  nl,
                  a.stateNode
                );
              } catch (o) {
                ke(
                  a,
                  t,
                  o
                );
              }
          break;
        case 18:
          nl !== null && (Va ? (e = nl, Cl(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Df(e)) : Cl(nl, a.stateNode));
          break;
        case 4:
          i = nl, f = Va, nl = a.stateNode.containerInfo, Va = !0, kl(
            e,
            t,
            a
          ), nl = i, Va = f;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Jt || ki(
            Ta,
            a,
            t
          ), Jt || Go(
            a,
            t,
            Bl
          ), kl(
            e,
            t,
            a
          );
          break;
        case 1:
          Jt || (tn(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && fy(
            a,
            t,
            i
          )), kl(
            e,
            t,
            a
          );
          break;
        case 21:
          kl(
            e,
            t,
            a
          );
          break;
        case 22:
          Jt = (i = Jt) || a.memoizedState !== null, kl(
            e,
            t,
            a
          ), Jt = i;
          break;
        default:
          kl(
            e,
            t,
            a
          );
      }
    }
    function Qo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ee(
            t,
            Q0,
            e
          );
        } catch (a) {
          ke(t, t.return, a);
        }
    }
    function Zo(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new X1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new X1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function of(e, t) {
      var a = Zo(e);
      t.forEach(function(i) {
        var f = Y0.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), _a)
            if (wd !== null && Jd !== null)
              Pi(Jd, wd);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(f, f);
        }
      });
    }
    function $l(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var f = e, o = t, d = a[i], h = o;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (Lt(h.type)) {
                  nl = h.stateNode, Va = !1;
                  break e;
                }
                break;
              case 5:
                nl = h.stateNode, Va = !1;
                break e;
              case 3:
              case 4:
                nl = h.stateNode.containerInfo, Va = !0;
                break e;
            }
            h = h.return;
          }
          if (nl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          ff(f, o, d), nl = null, Va = !1, f = d, o = f.alternate, o !== null && (o.return = null), f.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          ry(t, e), t = t.sibling;
    }
    function ry(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          $l(t, e), Ft(e), i & 4 && (ki(
            Ta | Qn,
            e,
            e.return
          ), nf(Ta | Qn, e), Go(
            e,
            e.return,
            Bl | Qn
          ));
          break;
        case 1:
          $l(t, e), Ft(e), i & 512 && (Jt || a === null || tn(a, a.return)), i & 64 && hc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var f = Uu;
          if ($l(t, e), Ft(e), i & 512 && (Jt || a === null || tn(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = f.ownerDocument || f;
                    t: switch (i) {
                      case "title":
                        f = t.getElementsByTagName("title")[0], (!f || f[fs] || f[Rl] || f.namespaceURI === zu || f.hasAttribute("itemprop")) && (f = t.createElement(i), t.head.insertBefore(
                          f,
                          t.querySelector("head > title")
                        )), Pt(f, i, a), f[Rl] = e, jt(f), i = f;
                        break e;
                      case "link":
                        var o = Ly(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (o) {
                          for (var d = 0; d < o.length; d++)
                            if (f = o[d], f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              o.splice(d, 1);
                              break t;
                            }
                        }
                        f = t.createElement(i), Pt(f, i, a), t.head.appendChild(f);
                        break;
                      case "meta":
                        if (o = Ly(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < o.length; d++)
                            if (f = o[d], w(
                              a.content,
                              "content"
                            ), f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              o.splice(d, 1);
                              break t;
                            }
                        }
                        f = t.createElement(i), Pt(f, i, a), t.head.appendChild(f);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    f[Rl] = e, jt(f), i = f;
                  }
                  e.stateNode = i;
                } else
                  ac(
                    f,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = w0(
                  f,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? ac(
                f,
                e.type,
                e.stateNode
              ) : w0(
                f,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Br(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          $l(t, e), Ft(e), i & 512 && (Jt || a === null || tn(a, a.return)), a !== null && i & 4 && Br(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if ($l(t, e), Ft(e), i & 512 && (Jt || a === null || tn(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              ee(e, ii, t);
            } catch (U) {
              ke(e, e.return, U);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Br(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (Wv = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if ($l(t, e), Ft(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              ee(
                e,
                Gy,
                t,
                a,
                i
              );
            } catch (U) {
              ke(e, e.return, U);
            }
          }
          break;
        case 3:
          if (f = oa(), Qp = null, o = Uu, Uu = Fr(t.containerInfo), $l(t, e), Uu = o, Ft(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              ee(
                e,
                pa,
                t.containerInfo
              );
            } catch (U) {
              ke(e, e.return, U);
            }
          Wv && (Wv = !1, dy(e)), t.effectDuration += Gc(f);
          break;
        case 4:
          i = Uu, Uu = Fr(
            e.stateNode.containerInfo
          ), $l(t, e), Ft(e), Uu = i;
          break;
        case 12:
          i = oa(), $l(t, e), Ft(e), e.stateNode.effectDuration += Vc(i);
          break;
        case 13:
          $l(t, e), Ft(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (lg = rl()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, of(e, i)));
          break;
        case 22:
          f = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, p = hc, v = Jt;
          if (hc = p || f, Jt = v || h, $l(t, e), Jt = v, hc = p, Ft(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = f ? t._visibility & -2 : t._visibility | Uv, f && (a === null || h || hc || Jt || Wl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    o = h.stateNode, f ? ee(h, Vy, o) : ee(
                      h,
                      Kr,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (U) {
                    ke(h, h.return, U);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, f ? ee(h, Xy, d) : ee(
                      h,
                      kr,
                      d,
                      h.memoizedProps
                    );
                  } catch (U) {
                    ke(h, h.return, U);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, of(e, a))));
          break;
        case 19:
          $l(t, e), Ft(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, of(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          $l(t, e), Ft(e);
      }
    }
    function Ft(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ee(e, M0, e);
        } catch (a) {
          ke(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function dy(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          dy(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Ct(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          sy(e, t.alternate, t), t = t.sibling;
    }
    function ln(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Go(
            e,
            e.return,
            Bl
          ), Wl(e);
          break;
        case 1:
          tn(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && fy(
            e,
            e.return,
            t
          ), Wl(e);
          break;
        case 27:
          ee(
            e,
            Tf,
            e.stateNode
          );
        case 26:
        case 5:
          tn(e, e.return), Wl(e);
          break;
        case 22:
          e.memoizedState === null && Wl(e);
          break;
        case 30:
          Wl(e);
          break;
        default:
          Wl(e);
      }
    }
    function Wl(e) {
      for (e = e.child; e !== null; )
        ln(e), e = e.sibling;
    }
    function hy(e, t, a, i) {
      var f = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          El(
            e,
            a,
            i
          ), uy(a, Bl);
          break;
        case 1:
          if (El(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ee(
            a,
            Zv,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ee(
                a,
                sv,
                t,
                e
              );
            } catch (o) {
              ke(a, a.return, o);
            }
          }
          i && f & 64 && iy(a), $i(a, a.return);
          break;
        case 27:
          jo(a);
        case 26:
        case 5:
          El(
            e,
            a,
            i
          ), i && t === null && f & 4 && O0(a), $i(a, a.return);
          break;
        case 12:
          if (i && f & 4) {
            f = oa(), El(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Vc(f);
            try {
              ee(
                a,
                oy,
                a,
                t,
                pp,
                i.effectDuration
              );
            } catch (o) {
              ke(a, a.return, o);
            }
          } else
            El(
              e,
              a,
              i
            );
          break;
        case 13:
          El(
            e,
            a,
            i
          ), i && f & 4 && Qo(e, a);
          break;
        case 22:
          a.memoizedState === null && El(
            e,
            a,
            i
          ), $i(a, a.return);
          break;
        case 30:
          break;
        default:
          El(
            e,
            a,
            i
          );
      }
    }
    function El(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        hy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function an(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Ma(e), a != null && Gi(a));
    }
    function Ot(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Ma(t), e != null && Gi(e));
    }
    function da(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          qr(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function qr(e, t, a, i) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          da(
            e,
            t,
            a,
            i
          ), f & 2048 && Cr(t, ml | Qn);
          break;
        case 1:
          da(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var o = oa();
          da(
            e,
            t,
            a,
            i
          ), f & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (Ma(t), a != null && Gi(a))), e.passiveEffectDuration += Gc(o);
          break;
        case 12:
          if (f & 2048) {
            f = oa(), da(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += Vc(f);
            try {
              ee(
                t,
                dv,
                t,
                t.alternate,
                pp,
                e.passiveEffectDuration
              );
            } catch (h) {
              ke(t, t.return, h);
            }
          } else
            da(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          da(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          o = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? o._visibility & vs ? da(
            e,
            t,
            a,
            i
          ) : sf(
            e,
            t
          ) : o._visibility & vs ? da(
            e,
            t,
            a,
            i
          ) : (o._visibility |= vs, Iu(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), f & 2048 && an(d, t);
          break;
        case 24:
          da(
            e,
            t,
            a,
            i
          ), f & 2048 && Ot(t.alternate, t);
          break;
        default:
          da(
            e,
            t,
            a,
            i
          );
      }
    }
    function Iu(e, t, a, i, f) {
      for (f = f && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        yy(
          e,
          t,
          a,
          i,
          f
        ), t = t.sibling;
    }
    function yy(e, t, a, i, f) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Iu(
            e,
            t,
            a,
            i,
            f
          ), Cr(t, ml);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & vs ? Iu(
            e,
            t,
            a,
            i,
            f
          ) : sf(
            e,
            t
          ) : (d._visibility |= vs, Iu(
            e,
            t,
            a,
            i,
            f
          )), f && o & 2048 && an(
            t.alternate,
            t
          );
          break;
        case 24:
          Iu(
            e,
            t,
            a,
            i,
            f
          ), f && o & 2048 && Ot(t.alternate, t);
          break;
        default:
          Iu(
            e,
            t,
            a,
            i,
            f
          );
      }
    }
    function sf(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, f = i.flags;
          switch (i.tag) {
            case 22:
              sf(
                a,
                i
              ), f & 2048 && an(
                i.alternate,
                i
              );
              break;
            case 24:
              sf(
                a,
                i
              ), f & 2048 && Ot(
                i.alternate,
                i
              );
              break;
            default:
              sf(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function Na(e) {
      if (e.subtreeFlags & Bm)
        for (e = e.child; e !== null; )
          Lo(e), e = e.sibling;
    }
    function Lo(e) {
      switch (e.tag) {
        case 26:
          Na(e), e.flags & Bm && e.memoizedState !== null && K0(
            Uu,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          Na(e);
          break;
        case 3:
        case 4:
          var t = Uu;
          Uu = Fr(
            e.stateNode.containerInfo
          ), Na(e), Uu = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Bm, Bm = 16777216, Na(e), Bm = t) : Na(e));
          break;
        default:
          Na(e);
      }
    }
    function my(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function rf(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Dl = i, Yr(
              i,
              e
            );
          }
        my(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          py(e), e = e.sibling;
    }
    function py(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          rf(e), e.flags & 2048 && Nr(
            e,
            e.return,
            ml | Qn
          );
          break;
        case 3:
          var t = oa();
          rf(e), e.stateNode.passiveEffectDuration += Gc(t);
          break;
        case 12:
          t = oa(), rf(e), e.stateNode.passiveEffectDuration += Vc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & vs && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Wi(e)) : rf(e);
          break;
        default:
          rf(e);
      }
    }
    function Wi(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Dl = i, Yr(
              i,
              e
            );
          }
        my(e);
      }
      for (e = e.child; e !== null; )
        vy(e), e = e.sibling;
    }
    function vy(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Nr(
            e,
            e.return,
            ml
          ), Wi(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & vs && (t._visibility &= -3, Wi(e));
          break;
        default:
          Wi(e);
      }
    }
    function Yr(e, t) {
      for (; Dl !== null; ) {
        var a = Dl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Nr(
              i,
              t,
              ml
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && Ma(i));
            break;
          case 24:
            Gi(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Dl = i;
        else
          e: for (a = e; Dl !== null; ) {
            i = Dl;
            var f = i.sibling, o = i.return;
            if (H0(i), i === a) {
              Dl = null;
              break e;
            }
            if (f !== null) {
              f.return = o, Dl = f;
              break e;
            }
            Dl = o;
          }
      }
    }
    function x0() {
      gS.forEach(function(e) {
        return e();
      });
    }
    function gy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || M.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ha(e) {
      if ((Le & Ea) !== yn && ze !== 0)
        return ze & -ze;
      var t = M.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Ts, e !== 0 ? e : wr()) : n0();
    }
    function by() {
      pn === 0 && (pn = (ze & 536870912) === 0 || Ye ? $f() : 536870912);
      var e = Ln.current;
      return e !== null && (e.flags |= 32), pn;
    }
    function Se(e, t, a) {
      if (Fd && console.error("useInsertionEffect must not schedule updates."), cg && (Hp = !0), (e === ft && (Ie === Ds || Ie === Os) || e.cancelPendingCommit !== null) && (su(e, 0), ou(
        e,
        ze,
        pn,
        !1
      )), Wf(e, a), (Le & Ea) !== 0 && e === ft) {
        if (Cn)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Re && ae(Re) || "Unknown", W1.has(e) || (W1.add(e), t = ae(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              $1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), $1 = !0);
          }
      } else
        _a && Gl(e, t, a), Hy(t), e === ft && ((Le & Ea) === yn && (jf |= a), qt === zs && ou(
          e,
          ze,
          pn,
          !1
        )), Ba(e);
    }
    function It(e, t, a) {
      if ((Le & (Ea | Hu)) !== yn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Sc(e, t), f = i ? Ay(e, t) : wo(e, t, !0), o = i;
      do {
        if (f === yc) {
          $d && !i && ou(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, o && !C0(a)) {
            f = wo(e, t, !1), o = !1;
            continue;
          }
          if (f === Kd) {
            if (o = t, e.errorRecoveryDisabledLanes & o)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                f = e;
                var h = d;
                d = Xm;
                var p = f.current.memoizedState.isDehydrated;
                if (p && (su(
                  f,
                  h
                ).flags |= 256), h = wo(
                  f,
                  h,
                  !1
                ), h !== Kd) {
                  if (eg && !p) {
                    f.errorRecoveryDisabledLanes |= o, jf |= o, f = zs;
                    break e;
                  }
                  f = Aa, Aa = d, f !== null && (Aa === null ? Aa = f : Aa.push.apply(
                    Aa,
                    f
                  ));
                }
                f = h;
              }
              if (o = !1, f !== Kd) continue;
            }
          }
          if (f === Ym) {
            su(e, 0), ou(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, f) {
              case yc:
              case Ym:
                throw Error("Root did not complete. This is a bug in React.");
              case zs:
                if ((t & 4194048) !== t) break;
              case Op:
                ou(
                  i,
                  t,
                  pn,
                  !Vf
                );
                break e;
              case Kd:
                Aa = null;
                break;
              case Fv:
              case j1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (M.actQueue !== null)
              nn(
                i,
                a,
                t,
                Aa,
                jm,
                Mp,
                pn,
                jf,
                Ms
              );
            else {
              if ((t & 62914560) === t && (o = lg + Z1 - rl(), 10 < o)) {
                if (ou(
                  i,
                  t,
                  pn,
                  !Vf
                ), _s(i, 0, !0) !== 0) break e;
                i.timeoutHandle = nb(
                  Sy.bind(
                    null,
                    i,
                    a,
                    Aa,
                    jm,
                    Mp,
                    t,
                    pn,
                    jf,
                    Ms,
                    Vf,
                    f,
                    ES,
                    wg,
                    0
                  ),
                  o
                );
                break e;
              }
              Sy(
                i,
                a,
                Aa,
                jm,
                Mp,
                t,
                pn,
                jf,
                Ms,
                Vf,
                f,
                SS,
                wg,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ba(e);
    }
    function Sy(e, t, a, i, f, o, d, h, p, v, U, N, O, B) {
      if (e.timeoutHandle = Ns, N = t.subtreeFlags, (N & 8192 || (N & 16785408) === 16785408) && (Km = { stylesheets: null, count: 0, unsuspend: J0 }, Lo(t), N = k0(), N !== null)) {
        e.cancelPendingCommit = N(
          nn.bind(
            null,
            e,
            t,
            o,
            a,
            i,
            f,
            d,
            h,
            p,
            U,
            TS,
            O,
            B
          )
        ), ou(
          e,
          o,
          d,
          !v
        );
        return;
      }
      nn(
        e,
        t,
        o,
        a,
        i,
        f,
        d,
        h,
        p
      );
    }
    function C0(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var f = a[i], o = f.getSnapshot;
            f = f.value;
            try {
              if (!ba(o(), f)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function ou(e, t, a, i) {
      t &= ~tg, t &= ~jf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var f = t; 0 < f; ) {
        var o = 31 - el(f), d = 1 << o;
        i[o] = -1, f &= ~d;
      }
      a !== 0 && Tc(e, a, t);
    }
    function Fi() {
      return (Le & (Ea | Hu)) === yn ? (ti(0), !1) : !0;
    }
    function _r() {
      if (Re !== null) {
        if (Ie === Xa)
          var e = Re.return;
        else
          e = Re, ur(), Wa(e), Xd = null, Cm = 0, e = Re;
        for (; e !== null; )
          ny(e.alternate, e), e = e.return;
        Re = null;
      }
    }
    function su(e, t) {
      var a = e.timeoutHandle;
      a !== Ns && (e.timeoutHandle = Ns, qS(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), _r(), ft = e, Re = a = Tn(e.current, null), ze = t, Ie = Xa, mn = null, Vf = !1, $d = Sc(e, t), eg = !1, qt = yc, Ms = pn = tg = jf = Xf = 0, Aa = Xm = null, Mp = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var f = 31 - el(i), o = 1 << f;
          t |= e[f], i &= ~o;
        }
      return Ti = t, Fs(), t = Zg(), 1e3 < t - Qg && (M.recentlyCreatedOwnerStacks = 0, Qg = t), Ou.discardPendingWarnings(), a;
    }
    function Gr(e, t) {
      oe = null, M.H = zp, M.getCurrentStack = null, Cn = !1, hl = null, t === Mm || t === Sp ? (t = sa(), Ie = Gm) : t === kg ? (t = sa(), Ie = Q1) : Ie = t === C1 ? Pv : t !== null && typeof t == "object" && typeof t.then == "function" ? kd : _m, mn = t;
      var a = Re;
      if (a === null)
        qt = Ym, af(
          e,
          Vl(t, e.current)
        );
      else
        switch (a.mode & Nl && Qu(a), ca(), Ie) {
          case _m:
            K !== null && typeof K.markComponentErrored == "function" && K.markComponentErrored(
              a,
              t,
              ze
            );
            break;
          case Ds:
          case Os:
          case Gm:
          case kd:
          case Vm:
            K !== null && typeof K.markComponentSuspended == "function" && K.markComponentSuspended(
              a,
              t,
              ze
            );
        }
    }
    function Ty() {
      var e = M.H;
      return M.H = zp, e === null ? zp : e;
    }
    function Ey() {
      var e = M.A;
      return M.A = vS, e;
    }
    function Vr() {
      qt = zs, Vf || (ze & 4194048) !== ze && Ln.current !== null || ($d = !0), (Xf & 134217727) === 0 && (jf & 134217727) === 0 || ft === null || ou(
        ft,
        ze,
        pn,
        !1
      );
    }
    function wo(e, t, a) {
      var i = Le;
      Le |= Ea;
      var f = Ty(), o = Ey();
      if (ft !== e || ze !== t) {
        if (_a) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Pi(e, ze), d.clear()), a0(e, t);
        }
        jm = null, su(e, t);
      }
      bc(t), t = !1, d = qt;
      e: do
        try {
          if (Ie !== Xa && Re !== null) {
            var h = Re, p = mn;
            switch (Ie) {
              case Pv:
                _r(), d = Op;
                break e;
              case Gm:
              case Ds:
              case Os:
              case kd:
                Ln.current === null && (t = !0);
                var v = Ie;
                if (Ie = Xa, mn = null, Ii(e, h, p, v), a && $d) {
                  d = yc;
                  break e;
                }
                break;
              default:
                v = Ie, Ie = Xa, mn = null, Ii(e, h, p, v);
            }
          }
          Xr(), d = qt;
          break;
        } catch (U) {
          Gr(e, U);
        }
      while (!0);
      return t && e.shellSuspendCounter++, ur(), Le = i, M.H = f, M.A = o, Ys(), Re === null && (ft = null, ze = 0, Fs()), d;
    }
    function Xr() {
      for (; Re !== null; ) jr(Re);
    }
    function Ay(e, t) {
      var a = Le;
      Le |= Ea;
      var i = Ty(), f = Ey();
      if (ft !== e || ze !== t) {
        if (_a) {
          var o = e.memoizedUpdaters;
          0 < o.size && (Pi(e, ze), o.clear()), a0(e, t);
        }
        jm = null, Up = rl() + L1, su(e, t);
      } else
        $d = Sc(
          e,
          t
        );
      bc(t);
      e: do
        try {
          if (Ie !== Xa && Re !== null)
            t: switch (t = Re, o = mn, Ie) {
              case _m:
                Ie = Xa, mn = null, Ii(
                  e,
                  t,
                  o,
                  _m
                );
                break;
              case Ds:
              case Os:
                if (or(o)) {
                  Ie = Xa, mn = null, Jo(t);
                  break;
                }
                t = function() {
                  Ie !== Ds && Ie !== Os || ft !== e || (Ie = Vm), Ba(e);
                }, o.then(t, t);
                break e;
              case Gm:
                Ie = Vm;
                break e;
              case Q1:
                Ie = Iv;
                break e;
              case Vm:
                or(o) ? (Ie = Xa, mn = null, Jo(t)) : (Ie = Xa, mn = null, Ii(
                  e,
                  t,
                  o,
                  Vm
                ));
                break;
              case Iv:
                var d = null;
                switch (Re.tag) {
                  case 26:
                    d = Re.memoizedState;
                  case 5:
                  case 27:
                    var h = Re;
                    if (!d || wy(d)) {
                      Ie = Xa, mn = null;
                      var p = h.sibling;
                      if (p !== null) Re = p;
                      else {
                        var v = h.return;
                        v !== null ? (Re = v, df(v)) : Re = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Ie = Xa, mn = null, Ii(
                  e,
                  t,
                  o,
                  Iv
                );
                break;
              case kd:
                Ie = Xa, mn = null, Ii(
                  e,
                  t,
                  o,
                  kd
                );
                break;
              case Pv:
                _r(), qt = Op;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          M.actQueue !== null ? Xr() : N0();
          break;
        } catch (U) {
          Gr(e, U);
        }
      while (!0);
      return ur(), M.H = i, M.A = f, Le = a, Re !== null ? (K !== null && typeof K.markRenderYielded == "function" && K.markRenderYielded(), yc) : (Ys(), ft = null, ze = 0, Fs(), qt);
    }
    function N0() {
      for (; Re !== null && !gv(); )
        jr(Re);
    }
    function jr(e) {
      var t = e.alternate;
      (e.mode & Nl) !== mt ? (Pn(e), t = ee(
        e,
        Fu,
        t,
        e,
        Ti
      ), Qu(e)) : t = ee(
        e,
        Fu,
        t,
        e,
        Ti
      ), e.memoizedProps = e.pendingProps, t === null ? df(e) : Re = t;
    }
    function Jo(e) {
      var t = ee(e, Ry, e);
      e.memoizedProps = e.pendingProps, t === null ? df(e) : Re = t;
    }
    function Ry(e) {
      var t = e.alternate, a = (e.mode & Nl) !== mt;
      switch (a && Pn(e), e.tag) {
        case 15:
        case 0:
          t = kh(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            ze
          );
          break;
        case 11:
          t = kh(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            ze
          );
          break;
        case 5:
          Wa(e);
        default:
          ny(t, e), e = Re = Ah(e, Ti), t = Fu(t, e, Ti);
      }
      return a && Qu(e), t;
    }
    function Ii(e, t, a, i) {
      ur(), Wa(t), Xd = null, Cm = 0;
      var f = t.return;
      try {
        if (zr(
          e,
          f,
          t,
          a,
          ze
        )) {
          qt = Ym, af(
            e,
            Vl(a, e.current)
          ), Re = null;
          return;
        }
      } catch (o) {
        if (f !== null) throw Re = f, o;
        qt = Ym, af(
          e,
          Vl(a, e.current)
        ), Re = null;
        return;
      }
      t.flags & 32768 ? (Ye || i === _m ? e = !0 : $d || (ze & 536870912) !== 0 ? e = !1 : (Vf = e = !0, (i === Ds || i === Os || i === Gm || i === kd) && (i = Ln.current, i !== null && i.tag === 13 && (i.flags |= 16384))), zy(t, e)) : df(t);
    }
    function df(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          zy(
            t,
            Vf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, Pn(t), a = ee(
          t,
          R0,
          a,
          t,
          Ti
        ), (t.mode & Nl) !== mt && cr(t), a !== null) {
          Re = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Re = t;
          return;
        }
        Re = t = e;
      } while (t !== null);
      qt === yc && (qt = j1);
    }
    function zy(e, t) {
      do {
        var a = z0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Re = a;
          return;
        }
        if ((e.mode & Nl) !== mt) {
          cr(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Re = e;
          return;
        }
        Re = e = a;
      } while (e !== null);
      qt = Op, Re = null;
    }
    function nn(e, t, a, i, f, o, d, h, p) {
      e.cancelPendingCommit = null;
      do
        Pu();
      while (ql !== Us);
      if (Ou.flushLegacyContextWarning(), Ou.flushPendingUnsafeLifecycleWarnings(), (Le & (Ea | Hu)) !== yn)
        throw Error("Should not already be working.");
      if (K !== null && typeof K.markCommitStarted == "function" && K.markCommitStarted(a), t === null) ht();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (o = t.lanes | t.childLanes, o |= Hv, Pp(
          e,
          a,
          o,
          d,
          h,
          p
        ), e === ft && (Re = ft = null, ze = 0), Wd = t, Zf = e, Lf = a, ng = o, ug = f, k1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, _0(Mf, function() {
          return hf(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), pp = qd(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = M.T, M.T = null, f = Ve.p, Ve.p = ga, d = Le, Le |= Hu;
          try {
            U0(e, t, a);
          } finally {
            Le = d, Ve.p = f, M.T = i;
          }
        }
        ql = w1, Qr(), B0(), Dy();
      }
    }
    function Qr() {
      if (ql === w1) {
        ql = Us;
        var e = Zf, t = Wd, a = Lf, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = M.T, M.T = null;
          var f = Ve.p;
          Ve.p = ga;
          var o = Le;
          Le |= Hu;
          try {
            wd = a, Jd = e, ry(t, e), Jd = wd = null, a = pg;
            var d = p0(e.containerInfo), h = a.focusedElem, p = a.selectionRange;
            if (d !== h && h && h.ownerDocument && m0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (p !== null && Sh(h)) {
                var v = p.start, U = p.end;
                if (U === void 0 && (U = v), "selectionStart" in h)
                  h.selectionStart = v, h.selectionEnd = Math.min(
                    U,
                    h.value.length
                  );
                else {
                  var N = h.ownerDocument || document, O = N && N.defaultView || window;
                  if (O.getSelection) {
                    var B = O.getSelection(), I = h.textContent.length, ce = Math.min(
                      p.start,
                      I
                    ), ot = p.end === void 0 ? ce : Math.min(p.end, I);
                    !B.extend && ce > ot && (d = ot, ot = ce, ce = d);
                    var Oe = y0(
                      h,
                      ce
                    ), b = y0(
                      h,
                      ot
                    );
                    if (Oe && b && (B.rangeCount !== 1 || B.anchorNode !== Oe.node || B.anchorOffset !== Oe.offset || B.focusNode !== b.node || B.focusOffset !== b.offset)) {
                      var S = N.createRange();
                      S.setStart(Oe.node, Oe.offset), B.removeAllRanges(), ce > ot ? (B.addRange(S), B.extend(b.node, b.offset)) : (S.setEnd(b.node, b.offset), B.addRange(S));
                    }
                  }
                }
              }
              for (N = [], B = h; B = B.parentNode; )
                B.nodeType === 1 && N.push({
                  element: B,
                  left: B.scrollLeft,
                  top: B.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < N.length; h++) {
                var T = N[h];
                T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
              }
            }
            wp = !!mg, pg = mg = null;
          } finally {
            Le = o, Ve.p = f, M.T = i;
          }
        }
        e.current = t, ql = J1;
      }
    }
    function B0() {
      if (ql === J1) {
        ql = Us;
        var e = Zf, t = Wd, a = Lf, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = M.T, M.T = null;
          var f = Ve.p;
          Ve.p = ga;
          var o = Le;
          Le |= Hu;
          try {
            K !== null && typeof K.markLayoutEffectsStarted == "function" && K.markLayoutEffectsStarted(a), wd = a, Jd = e, sy(
              e,
              t.alternate,
              t
            ), Jd = wd = null, K !== null && typeof K.markLayoutEffectsStopped == "function" && K.markLayoutEffectsStopped();
          } finally {
            Le = o, Ve.p = f, M.T = i;
          }
        }
        ql = K1;
      }
    }
    function Dy() {
      if (ql === AS || ql === K1) {
        ql = Us, bv();
        var e = Zf, t = Wd, a = Lf, i = k1, f = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        f ? ql = ag : (ql = Us, Wd = Zf = null, Oy(e, e.pendingLanes), Hs = 0, Zm = null);
        var o = e.pendingLanes;
        if (o === 0 && (Qf = null), f || un(e), f = th(a), t = t.stateNode, dl && typeof dl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (f) {
              case ga:
                var h = is;
                break;
              case xn:
                h = Iy;
                break;
              case Au:
                h = Mf;
                break;
              case md:
                h = em;
                break;
              default:
                h = Mf;
            }
            dl.onCommitFiberRoot(
              ic,
              t,
              h,
              d
            );
          } catch (N) {
            Mt || (Mt = !0, console.error(
              "React instrumentation encountered an error: %s",
              N
            ));
          }
        if (_a && e.memoizedUpdaters.clear(), x0(), i !== null) {
          d = M.T, h = Ve.p, Ve.p = ga, M.T = null;
          try {
            var p = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var v = i[t], U = ru(v.stack);
              ee(
                v.source,
                p,
                v.value,
                U
              );
            }
          } finally {
            M.T = d, Ve.p = h;
          }
        }
        (Lf & 3) !== 0 && Pu(), Ba(e), o = e.pendingLanes, (a & 4194090) !== 0 && (o & 42) !== 0 ? (gp = !0, e === ig ? Qm++ : (Qm = 0, ig = e)) : Qm = 0, ti(0), ht();
      }
    }
    function ru(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Oy(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Gi(t)));
    }
    function Pu(e) {
      return Qr(), B0(), Dy(), hf();
    }
    function hf() {
      if (ql !== ag) return !1;
      var e = Zf, t = ng;
      ng = 0;
      var a = th(Lf), i = Au > a ? Au : a;
      a = M.T;
      var f = Ve.p;
      try {
        Ve.p = i, M.T = null, i = ug, ug = null;
        var o = Zf, d = Lf;
        if (ql = Us, Wd = Zf = null, Lf = 0, (Le & (Ea | Hu)) !== yn)
          throw Error("Cannot flush passive effects while already rendering.");
        cg = !0, Hp = !1, K !== null && typeof K.markPassiveEffectsStarted == "function" && K.markPassiveEffectsStarted(d);
        var h = Le;
        if (Le |= Hu, py(o.current), qr(
          o,
          o.current,
          d,
          i
        ), K !== null && typeof K.markPassiveEffectsStopped == "function" && K.markPassiveEffectsStopped(), un(o), Le = h, ti(0, !1), Hp ? o === Zm ? Hs++ : (Hs = 0, Zm = o) : Hs = 0, Hp = cg = !1, dl && typeof dl.onPostCommitFiberRoot == "function")
          try {
            dl.onPostCommitFiberRoot(ic, o);
          } catch (v) {
            Mt || (Mt = !0, console.error(
              "React instrumentation encountered an error: %s",
              v
            ));
          }
        var p = o.current.stateNode;
        return p.effectDuration = 0, p.passiveEffectDuration = 0, !0;
      } finally {
        Ve.p = f, M.T = a, Oy(e, t);
      }
    }
    function yt(e, t, a) {
      t = Vl(a, t), t = Tt(e.stateNode, t, 2), e = Ka(e, t, 2), e !== null && (Wf(e, 2), Ba(e));
    }
    function ke(e, t, a) {
      if (Fd = !1, e.tag === 3)
        yt(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            yt(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Qf === null || !Qf.has(i))) {
              e = Vl(a, e), a = Co(2), i = Ka(t, a, 2), i !== null && (Ji(
                a,
                i,
                t,
                e
              ), Wf(i, 2), Ba(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function My(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new bS();
        var f = /* @__PURE__ */ new Set();
        i.set(t, f);
      } else
        f = i.get(t), f === void 0 && (f = /* @__PURE__ */ new Set(), i.set(t, f));
      f.has(a) || (eg = !0, f.add(a), i = q0.bind(null, e, t, a), _a && Pi(e, a), t.then(i, i));
    }
    function q0(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, gy() && M.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), ft === e && (ze & a) === a && (qt === zs || qt === Fv && (ze & 62914560) === ze && rl() - lg < Z1 ? (Le & Ea) === yn && su(e, 0) : tg |= a, Ms === ze && (Ms = 0)), Ba(e);
    }
    function yf(e, t) {
      t === 0 && (t = l0()), e = Xl(e, t), e !== null && (Wf(e, t), Ba(e));
    }
    function ei(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), yf(e, a);
    }
    function Y0(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, f = e.memoizedState;
          f !== null && (a = f.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), yf(e, a);
    }
    function Zr(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, f = t, o = f.type === nc;
          o = a || o, f.tag !== 22 ? f.flags & 67108864 ? o && ee(
            f,
            mf,
            i,
            f,
            (f.mode & Vg) === mt
          ) : Zr(
            i,
            f,
            o
          ) : f.memoizedState === null && (o && f.flags & 8192 ? ee(
            f,
            mf,
            i,
            f
          ) : f.subtreeFlags & 67108864 && ee(
            f,
            Zr,
            i,
            f,
            o
          )), t = t.sibling;
        }
    }
    function mf(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      _e(!0);
      try {
        ln(t), a && vy(t), hy(e, t.alternate, t, !1), a && yy(e, t, 0, null, !1, 0);
      } finally {
        _e(!1);
      }
    }
    function un(e) {
      var t = !0;
      e.current.mode & (na | Du) || (t = !1), Zr(
        e,
        e.current,
        t
      );
    }
    function Uy(e) {
      if ((Le & Ea) === yn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = ae(e) || "ReactComponent", xp !== null) {
            if (xp.has(t)) return;
            xp.add(t);
          } else xp = /* @__PURE__ */ new Set([t]);
          ee(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Pi(e, t) {
      _a && e.memoizedUpdaters.forEach(function(a) {
        Gl(e, a, t);
      });
    }
    function _0(e, t) {
      var a = M.actQueue;
      return a !== null ? (a.push(t), DS) : Fy(e, t);
    }
    function Hy(e) {
      gy() && M.actQueue === null && ee(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          ae(e)
        );
      });
    }
    function Ba(e) {
      e !== Id && e.next === null && (Id === null ? Cp = Id = e : Id = Id.next = e), Np = !0, M.actQueue !== null ? og || (og = !0, V0()) : fg || (fg = !0, V0());
    }
    function ti(e, t) {
      if (!sg && Np) {
        sg = !0;
        do
          for (var a = !1, i = Cp; i !== null; ) {
            if (e !== 0) {
              var f = i.pendingLanes;
              if (f === 0) var o = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                o = (1 << 31 - el(42 | e) + 1) - 1, o &= f & ~(d & ~h), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0;
              }
              o !== 0 && (a = !0, xy(i, o));
            } else
              o = ze, o = _s(
                i,
                i === ft ? o : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Ns
              ), (o & 3) === 0 || Sc(i, o) || (a = !0, xy(i, o));
            i = i.next;
          }
        while (a);
        sg = !1;
      }
    }
    function G0() {
      cn();
    }
    function cn() {
      Np = og = fg = !1;
      var e = 0;
      xs !== 0 && (_y() && (e = xs), xs = 0);
      for (var t = rl(), a = null, i = Cp; i !== null; ) {
        var f = i.next, o = Et(i, t);
        o === 0 ? (i.next = null, a === null ? Cp = f : a.next = f, f === null && (Id = a)) : (a = i, (e !== 0 || (o & 3) !== 0) && (Np = !0)), i = f;
      }
      ti(e);
    }
    function Et(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, f = e.expirationTimes, o = e.pendingLanes & -62914561; 0 < o; ) {
        var d = 31 - el(o), h = 1 << d, p = f[d];
        p === -1 ? ((h & a) === 0 || (h & i) !== 0) && (f[d] = t0(h, t)) : p <= t && (e.expiredLanes |= h), o &= ~h;
      }
      if (t = ft, a = ze, a = _s(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ns
      ), i = e.callbackNode, a === 0 || e === t && (Ie === Ds || Ie === Os) || e.cancelPendingCommit !== null)
        return i !== null && Nt(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || Sc(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || M.actQueue !== null && i !== rg)
          Nt(i);
        else return t;
        switch (th(a)) {
          case ga:
          case xn:
            a = Iy;
            break;
          case Au:
            a = Mf;
            break;
          case md:
            a = em;
            break;
          default:
            a = Mf;
        }
        return i = Lr.bind(null, e), M.actQueue !== null ? (M.actQueue.push(i), a = rg) : a = Fy(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && Nt(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Lr(e, t) {
      if (gp = vp = !1, ql !== Us && ql !== ag)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Pu() && e.callbackNode !== a)
        return null;
      var i = ze;
      return i = _s(
        e,
        e === ft ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ns
      ), i === 0 ? null : (It(
        e,
        i,
        t
      ), Et(e, rl()), e.callbackNode != null && e.callbackNode === a ? Lr.bind(null, e) : null);
    }
    function xy(e, t) {
      if (Pu()) return null;
      vp = gp, gp = !1, It(e, t, !0);
    }
    function Nt(e) {
      e !== rg && e !== null && tp(e);
    }
    function V0() {
      M.actQueue !== null && M.actQueue.push(function() {
        return cn(), null;
      }), YS(function() {
        (Le & (Ea | Hu)) !== yn ? Fy(
          is,
          G0
        ) : cn();
      });
    }
    function wr() {
      return xs === 0 && (xs = $f()), xs;
    }
    function Cy(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (w(e, "action"), Wn("" + e));
    }
    function it(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Fl(e, t, a, i, f) {
      if (t === "submit" && a && a.stateNode === f) {
        var o = Cy(
          (f[aa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[aa] || null) ? Cy(t.formAction) : d.getAttribute("formAction"), t !== null && (o = t, d = null));
        var h = new Xe(
          "action",
          "action",
          null,
          i,
          f
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (xs !== 0) {
                    var p = d ? it(
                      f,
                      d
                    ) : new FormData(f), v = {
                      pending: !0,
                      data: p,
                      method: f.method,
                      action: o
                    };
                    Object.freeze(v), gr(
                      a,
                      v,
                      null,
                      p
                    );
                  }
                } else
                  typeof o == "function" && (h.preventDefault(), p = d ? it(
                    f,
                    d
                  ) : new FormData(f), v = {
                    pending: !0,
                    data: p,
                    method: f.method,
                    action: o
                  }, Object.freeze(v), gr(
                    a,
                    v,
                    o,
                    p
                  ));
              },
              currentTarget: f
            }
          ]
        });
      }
    }
    function qa(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        Jv(i);
      }
      e.currentTarget = null;
    }
    function Ny(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var f = void 0, o = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], p = h.instance, v = h.currentTarget;
              if (h = h.listener, p !== f && o.isPropagationStopped())
                break e;
              p !== null ? ee(
                p,
                qa,
                o,
                h,
                v
              ) : qa(o, h, v), f = p;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], p = h.instance, v = h.currentTarget, h = h.listener, p !== f && o.isPropagationStopped())
                break e;
              p !== null ? ee(
                p,
                qa,
                o,
                h,
                v
              ) : qa(o, h, v), f = p;
            }
        }
      }
    }
    function Te(e, t) {
      dg.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[pd];
      a === void 0 && (a = t[pd] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (Il(t, e, 2, !1), a.add(i));
    }
    function By(e, t, a) {
      dg.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Il(
        a,
        e,
        i,
        t
      );
    }
    function Ko(e) {
      if (!e[Bp]) {
        e[Bp] = !0, cc.forEach(function(a) {
          a !== "selectionchange" && (dg.has(a) || By(a, !1, e), By(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Bp] || (t[Bp] = !0, By("selectionchange", !1, t));
      }
    }
    function Il(e, t, a, i) {
      switch (si(t)) {
        case ga:
          var f = nd;
          break;
        case xn:
          f = Rf;
          break;
        default:
          f = Po;
      }
      a = f.bind(
        null,
        t,
        a,
        e
      ), f = void 0, !V || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (f = !0), i ? f !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: f
      }) : e.addEventListener(t, a, !0) : f !== void 0 ? e.addEventListener(t, a, {
        passive: f
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function ya(e, t, a, i, f) {
      var o = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === f) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var p = d.tag;
                if ((p === 3 || p === 4) && d.stateNode.containerInfo === f)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = Ra(h), d === null) return;
              if (p = d.tag, p === 5 || p === 6 || p === 26 || p === 27) {
                i = o = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      Nc(function() {
        var v = o, U = Qa(a), N = [];
        e: {
          var O = Gg.get(e);
          if (O !== void 0) {
            var B = Xe, I = e;
            switch (e) {
              case "keypress":
                if (Ui(a) === 0) break e;
              case "keydown":
              case "keyup":
                B = Zb;
                break;
              case "focusin":
                I = "focus", B = qn;
                break;
              case "focusout":
                I = "blur", B = qn;
                break;
              case "beforeblur":
              case "afterblur":
                B = qn;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                B = te;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                B = ll;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                B = Jb;
                break;
              case Bg:
              case qg:
              case Yg:
                B = Bb;
                break;
              case _g:
                B = kb;
                break;
              case "scroll":
              case "scrollend":
                B = E;
                break;
              case "wheel":
                B = Wb;
                break;
              case "copy":
              case "cut":
              case "paste":
                B = Yb;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                B = Dg;
                break;
              case "toggle":
              case "beforetoggle":
                B = Ib;
            }
            var ce = (t & 4) !== 0, ot = !ce && (e === "scroll" || e === "scrollend"), Oe = ce ? O !== null ? O + "Capture" : null : O;
            ce = [];
            for (var b = v, S; b !== null; ) {
              var T = b;
              if (S = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || S === null || Oe === null || (T = Da(b, Oe), T != null && ce.push(
                pf(
                  b,
                  T,
                  S
                )
              )), ot) break;
              b = b.return;
            }
            0 < ce.length && (O = new B(
              O,
              I,
              null,
              a,
              U
            ), N.push({
              event: O,
              listeners: ce
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (O = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", O && a !== r && (I = a.relatedTarget || a.fromElement) && (Ra(I) || I[mi]))
              break e;
            if ((B || O) && (O = U.window === U ? U : (O = U.ownerDocument) ? O.defaultView || O.parentWindow : window, B ? (I = a.relatedTarget || a.toElement, B = v, I = I ? Ra(I) : null, I !== null && (ot = Je(I), ce = I.tag, I !== ot || ce !== 5 && ce !== 27 && ce !== 6) && (I = null)) : (B = null, I = v), B !== I)) {
              if (ce = te, T = "onMouseLeave", Oe = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (ce = Dg, T = "onPointerLeave", Oe = "onPointerEnter", b = "pointer"), ot = B == null ? O : Kn(B), S = I == null ? O : Kn(I), O = new ce(
                T,
                b + "leave",
                B,
                a,
                U
              ), O.target = ot, O.relatedTarget = S, T = null, Ra(U) === v && (ce = new ce(
                Oe,
                b + "enter",
                I,
                a,
                U
              ), ce.target = S, ce.relatedTarget = ot, T = ce), ot = T, B && I)
                t: {
                  for (ce = B, Oe = I, b = 0, S = ce; S; S = ec(S))
                    b++;
                  for (S = 0, T = Oe; T; T = ec(T))
                    S++;
                  for (; 0 < b - S; )
                    ce = ec(ce), b--;
                  for (; 0 < S - b; )
                    Oe = ec(Oe), S--;
                  for (; b--; ) {
                    if (ce === Oe || Oe !== null && ce === Oe.alternate)
                      break t;
                    ce = ec(ce), Oe = ec(Oe);
                  }
                  ce = null;
                }
              else ce = null;
              B !== null && du(
                N,
                O,
                B,
                ce,
                !1
              ), I !== null && ot !== null && du(
                N,
                ot,
                I,
                ce,
                !0
              );
            }
          }
          e: {
            if (O = v ? Kn(v) : window, B = O.nodeName && O.nodeName.toLowerCase(), B === "select" || B === "input" && O.type === "file")
              var q = r0;
            else if (ks(O))
              if (Cg)
                q = iv;
              else {
                q = nv;
                var J = gh;
              }
            else
              B = O.nodeName, !B || B.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? v && Oi(v.elementType) && (q = r0) : q = uv;
            if (q && (q = q(e, v))) {
              Bc(
                N,
                q,
                a,
                U
              );
              break e;
            }
            J && J(e, O, v), e === "focusout" && v && O.type === "number" && v.memoizedProps.value != null && Xs(O, "number", O.value);
          }
          switch (J = v ? Kn(v) : window, e) {
            case "focusin":
              (ks(J) || J.contentEditable === "true") && (Od = J, Rv = v, Sm = null);
              break;
            case "focusout":
              Sm = Rv = Od = null;
              break;
            case "mousedown":
              zv = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              zv = !1, Ws(
                N,
                a,
                U
              );
              break;
            case "selectionchange":
              if (lS) break;
            case "keydown":
            case "keyup":
              Ws(
                N,
                a,
                U
              );
          }
          var de;
          if (Av)
            e: {
              switch (e) {
                case "compositionstart":
                  var P = "onCompositionStart";
                  break e;
                case "compositionend":
                  P = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  P = "onCompositionUpdate";
                  break e;
              }
              P = void 0;
            }
          else
            Dd ? Gu(e, a) && (P = "onCompositionEnd") : e === "keydown" && a.keyCode === Og && (P = "onCompositionStart");
          P && (Mg && a.locale !== "ko" && (Dd || P !== "onCompositionStart" ? P === "onCompositionEnd" && Dd && (de = Ks()) : (D = U, H = "value" in D ? D.value : D.textContent, Dd = !0)), J = Al(
            v,
            P
          ), 0 < J.length && (P = new zg(
            P,
            e,
            null,
            a,
            U
          ), N.push({
            event: P,
            listeners: J
          }), de ? P.data = de : (de = co(a), de !== null && (P.data = de)))), (de = eS ? fo(e, a) : av(e, a)) && (P = Al(
            v,
            "onBeforeInput"
          ), 0 < P.length && (J = new Gb(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            U
          ), N.push({
            event: J,
            listeners: P
          }), J.data = de)), Fl(
            N,
            e,
            v,
            a,
            U
          );
        }
        Ny(N, t);
      });
    }
    function pf(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Al(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var f = e, o = f.stateNode;
        if (f = f.tag, f !== 5 && f !== 26 && f !== 27 || o === null || (f = Da(e, a), f != null && i.unshift(
          pf(e, f, o)
        ), f = Da(e, t), f != null && i.push(
          pf(e, f, o)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function ec(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function du(e, t, a, i, f) {
      for (var o = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, p = h.alternate, v = h.stateNode;
        if (h = h.tag, p !== null && p === i) break;
        h !== 5 && h !== 26 && h !== 27 || v === null || (p = v, f ? (v = Da(a, o), v != null && d.unshift(
          pf(a, v, p)
        )) : f || (v = Da(a, o), v != null && d.push(
          pf(a, v, p)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function hu(e, t) {
      f0(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || dp || (dp = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: dn,
        possibleRegistrationNames: vd
      };
      Oi(e) || typeof t.is == "string" || o0(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ct(e, t, a, i) {
      t !== a && (a = yu(a), yu(t) !== a && (i[e] = t));
    }
    function qy(e, t, a) {
      t.forEach(function(i) {
        a[vf(i)] = i === "style" ? Jr(e) : e.getAttribute(i);
      });
    }
    function Ya(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function fn(e, t) {
      return e = e.namespaceURI === Ad || e.namespaceURI === zu ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function yu(e) {
      return Y(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ne(e)
      ), $(e)), (typeof e == "string" ? e : "" + e).replace(OS, `
`).replace(MS, "");
    }
    function tc(e, t) {
      return t = yu(t), yu(e) === t;
    }
    function li() {
    }
    function Ne(e, t, a, i, f, o) {
      switch (a) {
        case "children":
          typeof i == "string" ? (xc(i, t, !1), t === "body" || t === "textarea" && i === "" || ao(e, i)) : (typeof i == "number" || typeof i == "bigint") && (xc("" + i, t, !1), t !== "body" && ao(e, "" + i));
          break;
        case "className":
          Rc(e, "class", i);
          break;
        case "tabIndex":
          Rc(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Rc(e, a, i);
          break;
        case "style":
          ws(e, i, o);
          break;
        case "data":
          if (t !== "object") {
            Rc(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          w(i, a), i = Wn("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (f.encType == null && f.method == null || _p || (_p = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), f.target == null || Yp || (Yp = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || f.type === "submit" || f.type === "image" || qp ? t !== "button" || f.type == null || f.type === "submit" || qp ? typeof i == "function" && (f.name == null || P1 || (P1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), f.formEncType == null && f.formMethod == null || _p || (_p = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), f.formTarget == null || Yp || (Yp = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (qp = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (qp = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof o == "function" && (a === "formAction" ? (t !== "input" && Ne(e, t, "name", f.name, f, null), Ne(
              e,
              t,
              "formEncType",
              f.formEncType,
              f,
              null
            ), Ne(
              e,
              t,
              "formMethod",
              f.formMethod,
              f,
              null
            ), Ne(
              e,
              t,
              "formTarget",
              f.formTarget,
              f,
              null
            )) : (Ne(
              e,
              t,
              "encType",
              f.encType,
              f,
              null
            ), Ne(e, t, "method", f.method, f, null), Ne(
              e,
              t,
              "target",
              f.target,
              f,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          w(i, a), i = Wn("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ya(a, i), e.onclick = li);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ya(a, i), Te("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ya(a, i), Te("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (f.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          w(i, a), a = Wn("" + i), e.setAttributeNS(Cs, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (w(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Gp[a] || (Gp[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (w(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (w(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (w(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Te("beforetoggle", e), Te("toggle", e), Ff(e, "popover", i);
          break;
        case "xlinkActuate":
          ja(
            e,
            Cs,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          ja(
            e,
            Cs,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          ja(
            e,
            Cs,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          ja(
            e,
            Cs,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          ja(
            e,
            Cs,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          ja(
            e,
            Cs,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          ja(
            e,
            hg,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          ja(
            e,
            hg,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          ja(
            e,
            hg,
            "xml:space",
            i
          );
          break;
        case "is":
          o != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Ff(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          eb || i == null || typeof i != "object" || (eb = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Mi(a), Ff(e, a, i)) : dn.hasOwnProperty(a) && i != null && typeof i != "function" && Ya(a, i);
      }
    }
    function ai(e, t, a, i, f, o) {
      switch (a) {
        case "style":
          ws(e, i, o);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (f.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? ao(e, i) : (typeof i == "number" || typeof i == "bigint") && ao(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ya(a, i), Te("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ya(a, i), Te("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ya(a, i), e.onclick = li);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (dn.hasOwnProperty(a))
            i != null && typeof i != "function" && Ya(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (f = a.endsWith("Capture"), t = a.slice(2, f ? a.length - 7 : void 0), o = e[aa] || null, o = o != null ? o[a] : null, typeof o == "function" && e.removeEventListener(t, o, f), typeof i == "function")) {
                typeof o != "function" && o !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, f);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Ff(e, a, i);
            }
      }
    }
    function Pt(e, t, a) {
      switch (hu(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Te("error", e), Te("load", e);
          var i = !1, f = !1, o;
          for (o in a)
            if (a.hasOwnProperty(o)) {
              var d = a[o];
              if (d != null)
                switch (o) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    f = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Ne(e, t, o, d, a, null);
                }
            }
          f && Ne(e, t, "srcSet", a.srcSet, a, null), i && Ne(e, t, "src", a.src, a, null);
          return;
        case "input":
          bn("input", a), Te("invalid", e);
          var h = o = d = f = null, p = null, v = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var U = a[i];
              if (U != null)
                switch (i) {
                  case "name":
                    f = U;
                    break;
                  case "type":
                    d = U;
                    break;
                  case "checked":
                    p = U;
                    break;
                  case "defaultChecked":
                    v = U;
                    break;
                  case "value":
                    o = U;
                    break;
                  case "defaultValue":
                    h = U;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (U != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Ne(e, t, i, U, a, null);
                }
            }
          Ri(e, a), fh(
            e,
            o,
            h,
            p,
            v,
            d,
            f,
            !1
          ), Dt(e);
          return;
        case "select":
          bn("select", a), Te("invalid", e), i = d = o = null;
          for (f in a)
            if (a.hasOwnProperty(f) && (h = a[f], h != null))
              switch (f) {
                case "value":
                  o = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  Ne(
                    e,
                    t,
                    f,
                    h,
                    a,
                    null
                  );
              }
          Sn(e, a), t = o, a = d, e.multiple = !!i, t != null ? kn(e, !!i, t, !1) : a != null && kn(e, !!i, a, !0);
          return;
        case "textarea":
          bn("textarea", a), Te("invalid", e), o = f = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  f = h;
                  break;
                case "children":
                  o = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Ne(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          js(e, a), zi(e, i, f, o), Dt(e);
          return;
        case "option":
          c0(e, a);
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  Ne(e, t, p, i, a, null);
              }
          return;
        case "dialog":
          Te("beforetoggle", e), Te("toggle", e), Te("cancel", e), Te("close", e);
          break;
        case "iframe":
        case "object":
          Te("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < Lm.length; i++)
            Te(Lm[i], e);
          break;
        case "image":
          Te("error", e), Te("load", e);
          break;
        case "details":
          Te("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Te("error", e), Te("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Ne(e, t, v, i, a, null);
              }
          return;
        default:
          if (Oi(t)) {
            for (U in a)
              a.hasOwnProperty(U) && (i = a[U], i !== void 0 && ai(
                e,
                t,
                U,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && Ne(e, t, h, i, a, null));
    }
    function X0(e, t, a, i) {
      switch (hu(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var f = null, o = null, d = null, h = null, p = null, v = null, U = null;
          for (B in a) {
            var N = a[B];
            if (a.hasOwnProperty(B) && N != null)
              switch (B) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  p = N;
                default:
                  i.hasOwnProperty(B) || Ne(
                    e,
                    t,
                    B,
                    null,
                    i,
                    N
                  );
              }
          }
          for (var O in i) {
            var B = i[O];
            if (N = a[O], i.hasOwnProperty(O) && (B != null || N != null))
              switch (O) {
                case "type":
                  o = B;
                  break;
                case "name":
                  f = B;
                  break;
                case "checked":
                  v = B;
                  break;
                case "defaultChecked":
                  U = B;
                  break;
                case "value":
                  d = B;
                  break;
                case "defaultValue":
                  h = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  B !== N && Ne(
                    e,
                    t,
                    O,
                    B,
                    i,
                    N
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || I1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), I1 = !0), !t || i || F1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), F1 = !0), ch(
            e,
            d,
            h,
            p,
            v,
            U,
            o,
            f
          );
          return;
        case "select":
          B = d = h = O = null;
          for (o in a)
            if (p = a[o], a.hasOwnProperty(o) && p != null)
              switch (o) {
                case "value":
                  break;
                case "multiple":
                  B = p;
                default:
                  i.hasOwnProperty(o) || Ne(
                    e,
                    t,
                    o,
                    null,
                    i,
                    p
                  );
              }
          for (f in i)
            if (o = i[f], p = a[f], i.hasOwnProperty(f) && (o != null || p != null))
              switch (f) {
                case "value":
                  O = o;
                  break;
                case "defaultValue":
                  h = o;
                  break;
                case "multiple":
                  d = o;
                default:
                  o !== p && Ne(
                    e,
                    t,
                    f,
                    o,
                    i,
                    p
                  );
              }
          i = h, t = d, a = B, O != null ? kn(e, !!t, O, !1) : !!a != !!t && (i != null ? kn(e, !!t, i, !0) : kn(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          B = O = null;
          for (h in a)
            if (f = a[h], a.hasOwnProperty(h) && f != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Ne(e, t, h, null, i, f);
              }
          for (d in i)
            if (f = i[d], o = a[d], i.hasOwnProperty(d) && (f != null || o != null))
              switch (d) {
                case "value":
                  O = f;
                  break;
                case "defaultValue":
                  B = f;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (f != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  f !== o && Ne(e, t, d, f, i, o);
              }
          oh(e, O, B);
          return;
        case "option":
          for (var I in a)
            if (O = a[I], a.hasOwnProperty(I) && O != null && !i.hasOwnProperty(I))
              switch (I) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  Ne(
                    e,
                    t,
                    I,
                    null,
                    i,
                    O
                  );
              }
          for (p in i)
            if (O = i[p], B = a[p], i.hasOwnProperty(p) && O !== B && (O != null || B != null))
              switch (p) {
                case "selected":
                  e.selected = O && typeof O != "function" && typeof O != "symbol";
                  break;
                default:
                  Ne(
                    e,
                    t,
                    p,
                    O,
                    i,
                    B
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var ce in a)
            O = a[ce], a.hasOwnProperty(ce) && O != null && !i.hasOwnProperty(ce) && Ne(
              e,
              t,
              ce,
              null,
              i,
              O
            );
          for (v in i)
            if (O = i[v], B = a[v], i.hasOwnProperty(v) && O !== B && (O != null || B != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Ne(
                    e,
                    t,
                    v,
                    O,
                    i,
                    B
                  );
              }
          return;
        default:
          if (Oi(t)) {
            for (var ot in a)
              O = a[ot], a.hasOwnProperty(ot) && O !== void 0 && !i.hasOwnProperty(ot) && ai(
                e,
                t,
                ot,
                void 0,
                i,
                O
              );
            for (U in i)
              O = i[U], B = a[U], !i.hasOwnProperty(U) || O === B || O === void 0 && B === void 0 || ai(
                e,
                t,
                U,
                O,
                i,
                B
              );
            return;
          }
      }
      for (var Oe in a)
        O = a[Oe], a.hasOwnProperty(Oe) && O != null && !i.hasOwnProperty(Oe) && Ne(e, t, Oe, null, i, O);
      for (N in i)
        O = i[N], B = a[N], !i.hasOwnProperty(N) || O === B || O == null && B == null || Ne(e, t, N, O, i, B);
    }
    function vf(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Jr(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function ko(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, f = i = "", o;
        for (o in t)
          if (t.hasOwnProperty(o)) {
            var d = t[o];
            d != null && typeof d != "boolean" && d !== "" && (o.indexOf("--") === 0 ? (ye(d, o), i += f + o + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || pm.has(o) ? (ye(d, o), i += f + o.replace(Ru, "-$1").toLowerCase().replace(Nf, "-ms-") + ":" + ("" + d).trim()) : i += f + o.replace(Ru, "-$1").toLowerCase().replace(Nf, "-ms-") + ":" + d + "px", f = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = yu(i), yu(t) !== i && (a.style = Jr(e)));
      }
    }
    function ma(e, t, a, i, f, o) {
      if (f.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (w(i, t), e === "" + i)
              return;
        }
      ct(t, e, i, o);
    }
    function j0(e, t, a, i, f, o) {
      if (f.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      ct(t, e, i, o);
    }
    function Yy(e, t, a, i, f, o) {
      if (f.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (w(i, a), e === "" + i)
              return;
        }
      ct(t, e, i, o);
    }
    function Ze(e, t, a, i, f, o) {
      if (f.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (w(i, t), e === "" + i))
              return;
        }
      ct(t, e, i, o);
    }
    function $e(e, t, a, i, f, o) {
      if (f.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (w(i, t), a = Wn("" + i), e === a)
              return;
        }
      ct(t, e, i, o);
    }
    function Ee(e, t, a, i) {
      for (var f = {}, o = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            o.add(d[h].name);
        }
      if (Oi(t)) {
        for (var p in a)
          if (a.hasOwnProperty(p)) {
            var v = a[p];
            if (v != null) {
              if (dn.hasOwnProperty(p))
                typeof v != "function" && Ya(p, v);
              else if (a.suppressHydrationWarning !== !0)
                switch (p) {
                  case "children":
                    typeof v != "string" && typeof v != "number" || ct(
                      "children",
                      e.textContent,
                      v,
                      f
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = fn(e, v), ct(
                      p,
                      d,
                      v,
                      f
                    ));
                    continue;
                  case "style":
                    o.delete(p), ko(e, v, f);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    o.delete(p.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      p
                    );
                    continue;
                  case "className":
                    o.delete("class"), d = ah(
                      e,
                      "class",
                      v
                    ), ct(
                      "className",
                      d,
                      v,
                      f
                    );
                    continue;
                  default:
                    i.context === pc && t !== "svg" && t !== "math" ? o.delete(p.toLowerCase()) : o.delete(p), d = ah(
                      e,
                      p,
                      v
                    ), ct(
                      p,
                      d,
                      v,
                      f
                    );
                }
            }
          }
      } else
        for (v in a)
          if (a.hasOwnProperty(v) && (p = a[v], p != null)) {
            if (dn.hasOwnProperty(v))
              typeof p != "function" && Ya(v, p);
            else if (a.suppressHydrationWarning !== !0)
              switch (v) {
                case "children":
                  typeof p != "string" && typeof p != "number" || ct(
                    "children",
                    e.textContent,
                    p,
                    f
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = fn(e, p), d !== p && (f[v] = { __html: d }));
                  continue;
                case "className":
                  ma(
                    e,
                    v,
                    "class",
                    p,
                    o,
                    f
                  );
                  continue;
                case "tabIndex":
                  ma(
                    e,
                    v,
                    "tabindex",
                    p,
                    o,
                    f
                  );
                  continue;
                case "style":
                  o.delete(v), ko(e, p, f);
                  continue;
                case "multiple":
                  o.delete(v), ct(
                    v,
                    e.multiple,
                    p,
                    f
                  );
                  continue;
                case "muted":
                  o.delete(v), ct(
                    v,
                    e.muted,
                    p,
                    f
                  );
                  continue;
                case "autoFocus":
                  o.delete("autofocus"), ct(
                    v,
                    e.autofocus,
                    p,
                    f
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    o.delete(v), d = e.getAttribute("data"), ct(
                      v,
                      d,
                      p,
                      f
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(p !== "" || t === "a" && v === "href" || t === "object" && v === "data")) {
                    console.error(
                      v === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      v,
                      v
                    );
                    continue;
                  }
                  $e(
                    e,
                    v,
                    v,
                    p,
                    o,
                    f
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(v), typeof p == "function") {
                    o.delete(v.toLowerCase()), v === "formAction" ? (o.delete("name"), o.delete("formenctype"), o.delete("formmethod"), o.delete("formtarget")) : (o.delete("enctype"), o.delete("method"), o.delete("target"));
                    continue;
                  } else if (d === US) {
                    o.delete(v.toLowerCase()), ct(
                      v,
                      "function",
                      p,
                      f
                    );
                    continue;
                  }
                  $e(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    o,
                    f
                  );
                  continue;
                case "xlinkHref":
                  $e(
                    e,
                    v,
                    "xlink:href",
                    p,
                    o,
                    f
                  );
                  continue;
                case "contentEditable":
                  Yy(
                    e,
                    v,
                    "contenteditable",
                    p,
                    o,
                    f
                  );
                  continue;
                case "spellCheck":
                  Yy(
                    e,
                    v,
                    "spellcheck",
                    p,
                    o,
                    f
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Yy(
                    e,
                    v,
                    v,
                    p,
                    o,
                    f
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  j0(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    o,
                    f
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var U = d = v, N = f;
                    if (o.delete(U), h = h.getAttribute(U), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (p === !1) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (p === !0 && h === "") break e;
                          break;
                        default:
                          if (w(p, d), h === "" + p)
                            break e;
                      }
                    ct(
                      d,
                      h,
                      p,
                      N
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, U = d = v, N = f, o.delete(U), h = h.getAttribute(U), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(p) || 1 > p) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(p) || 1 > p) && (w(p, d), h === "" + p))
                            break e;
                      }
                    ct(
                      d,
                      h,
                      p,
                      N
                    );
                  }
                  continue;
                case "rowSpan":
                  Ze(
                    e,
                    v,
                    "rowspan",
                    p,
                    o,
                    f
                  );
                  continue;
                case "start":
                  Ze(
                    e,
                    v,
                    v,
                    p,
                    o,
                    f
                  );
                  continue;
                case "xHeight":
                  ma(
                    e,
                    v,
                    "x-height",
                    p,
                    o,
                    f
                  );
                  continue;
                case "xlinkActuate":
                  ma(
                    e,
                    v,
                    "xlink:actuate",
                    p,
                    o,
                    f
                  );
                  continue;
                case "xlinkArcrole":
                  ma(
                    e,
                    v,
                    "xlink:arcrole",
                    p,
                    o,
                    f
                  );
                  continue;
                case "xlinkRole":
                  ma(
                    e,
                    v,
                    "xlink:role",
                    p,
                    o,
                    f
                  );
                  continue;
                case "xlinkShow":
                  ma(
                    e,
                    v,
                    "xlink:show",
                    p,
                    o,
                    f
                  );
                  continue;
                case "xlinkTitle":
                  ma(
                    e,
                    v,
                    "xlink:title",
                    p,
                    o,
                    f
                  );
                  continue;
                case "xlinkType":
                  ma(
                    e,
                    v,
                    "xlink:type",
                    p,
                    o,
                    f
                  );
                  continue;
                case "xmlBase":
                  ma(
                    e,
                    v,
                    "xml:base",
                    p,
                    o,
                    f
                  );
                  continue;
                case "xmlLang":
                  ma(
                    e,
                    v,
                    "xml:lang",
                    p,
                    o,
                    f
                  );
                  continue;
                case "xmlSpace":
                  ma(
                    e,
                    v,
                    "xml:space",
                    p,
                    o,
                    f
                  );
                  continue;
                case "inert":
                  p !== "" || Gp[v] || (Gp[v] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    v
                  )), j0(
                    e,
                    v,
                    v,
                    p,
                    o,
                    f
                  );
                  continue;
                default:
                  if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
                    h = Mi(v), d = !1, i.context === pc && t !== "svg" && t !== "math" ? o.delete(h.toLowerCase()) : (U = v.toLowerCase(), U = ps.hasOwnProperty(
                      U
                    ) && ps[U] || null, U !== null && U !== v && (d = !0, o.delete(U)), o.delete(h));
                    e: if (U = e, N = h, h = p, lh(N))
                      if (U.hasAttribute(N))
                        U = U.getAttribute(
                          N
                        ), w(
                          h,
                          N
                        ), h = U === "" + h ? h : U;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (U = N.toLowerCase().slice(0, 5), U !== "data-" && U !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || ct(
                      v,
                      h,
                      p,
                      f
                    );
                  }
              }
          }
      return 0 < o.size && a.suppressHydrationWarning !== !0 && qy(e, o, f), Object.keys(f).length === 0 ? null : f;
    }
    function He(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Be(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Pl(e) {
      switch (e) {
        case zu:
          return Pd;
        case Ad:
          return jp;
        default:
          return pc;
      }
    }
    function mu(e, t) {
      if (e === pc)
        switch (t) {
          case "svg":
            return Pd;
          case "math":
            return jp;
          default:
            return pc;
        }
      return e === Pd && t === "foreignObject" ? pc : e;
    }
    function ni(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function _y() {
      var e = window.event;
      return e && e.type === "popstate" ? e === vg ? !1 : (vg = e, !0) : (vg = null, !1);
    }
    function pu(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function At(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function ui(e, t, a, i) {
      X0(e, t, a, i), e[aa] = i;
    }
    function ii(e) {
      ao(e, "");
    }
    function Gy(e, t, a) {
      e.nodeValue = a;
    }
    function Lt(e) {
      return e === "head";
    }
    function gf(e, t) {
      e.removeChild(t);
    }
    function $o(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Cl(e, t) {
      var a = t, i = 0, f = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === Xp) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & xS && Tf(d.documentElement), a & CS && Tf(d.body), a & NS)
                for (a = d.head, Tf(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, p = d.nodeName;
                  d[fs] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (f === 0) {
              e.removeChild(o), Df(t);
              return;
            }
            f--;
          } else
            a === Vp || a === mc || a === wm ? f++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = o;
      } while (a);
      Df(t);
    }
    function Vy(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Xy(e) {
      e.nodeValue = "";
    }
    function Kr(e, t) {
      t = t[BS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function kr(e, t) {
      e.nodeValue = t;
    }
    function On(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            On(a), Ec(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function sl(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var f = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[fs])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (o = e.getAttribute("rel"), o === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (o !== f.rel || e.getAttribute("href") !== (f.href == null || f.href === "" ? null : f.href) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin) || e.getAttribute("title") !== (f.title == null ? null : f.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (o = e.getAttribute("src"), (o !== (f.src == null ? null : f.src) || e.getAttribute("type") !== (f.type == null ? null : f.type) || e.getAttribute("crossorigin") !== (f.crossOrigin == null ? null : f.crossOrigin)) && o && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          w(f.name, "name");
          var o = f.name == null ? null : "" + f.name;
          if (f.type === "hidden" && e.getAttribute("name") === o)
            return e;
        } else return e;
        if (e = ea(e.nextSibling), e === null) break;
      }
      return null;
    }
    function ci(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ea(e.nextSibling), e === null)) return null;
      return e;
    }
    function fi(e) {
      return e.data === wm || e.data === mc && e.ownerDocument.readyState === lb;
    }
    function bf(e, t) {
      var a = e.ownerDocument;
      if (e.data !== mc || a.readyState === lb)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function ea(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Vp || t === wm || t === mc || t === yg || t === tb)
            break;
          if (t === Xp) return null;
        }
      }
      return e;
    }
    function $r(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, f = 0; f < i.length; f++) {
          var o = i[f];
          a[vf(o.name)] = o.name.toLowerCase() === "style" ? Jr(e) : o.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function jy(e, t, a) {
      return a === null || a[HS] !== !0 ? (e.nodeValue === t ? e = null : (t = yu(t), e = yu(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Sf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Xp) {
            if (t === 0)
              return ea(e.nextSibling);
            t--;
          } else
            a !== Vp && a !== wm && a !== mc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Wr(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Vp || a === wm || a === mc) {
            if (t === 0) return e;
            t--;
          } else a === Xp && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function pa(e) {
      Df(e);
    }
    function Q0(e) {
      Df(e);
    }
    function ta(e, t, a, i, f) {
      switch (f && Ls(e, i.ancestorInfo), t = Be(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Z0(e, t, a, i) {
      if (!a[mi] && gn(a)) {
        var f = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          f,
          f,
          f
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (f = a.attributes; f.length; )
        a.removeAttributeNode(f[0]);
      Pt(a, e, t), a[Rl] = i, a[aa] = t;
    }
    function Tf(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Ec(e);
    }
    function Fr(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function vu(e, t, a) {
      var i = eh;
      if (i && typeof t == "string" && t) {
        var f = Wt(t);
        f = 'link[rel="' + e + '"][href="' + f + '"]', typeof a == "string" && (f += '[crossorigin="' + a + '"]'), fb.has(f) || (fb.add(f), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(f) === null && (t = i.createElement("link"), Pt(t, "link", e), jt(t), i.head.appendChild(t)));
      }
    }
    function Wo(e, t, a, i) {
      var f = (f = Un.current) ? Fr(f) : null;
      if (!f)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = on(a.href), t = Ac(f).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = on(a.href);
            var o = Ac(f).hoistableStyles, d = o.get(e);
            if (!d && (f = f.ownerDocument || f, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Bs, preload: null }
            }, o.set(e, d), (o = f.querySelector(
              Af(e)
            )) && !o._p && (d.instance = o, d.state.loading = Jm | wn), !Jn.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Jn.set(e, h), o || L0(
                f,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Ef(t) + `
  + ` + Ef(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Ef(t) + `
  + ` + Ef(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = oi(a), t = Ac(f).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Ef(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Hn.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Hn.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Hn.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function on(e) {
      return 'href="' + Wt(e) + '"';
    }
    function Af(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Qy(e) {
      return fe({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function L0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = Jm : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= Jm;
      }), t.addEventListener("error", function() {
        return i.loading |= ib;
      }), Pt(t, "link", a), jt(t), e.head.appendChild(t));
    }
    function oi(e) {
      return '[src="' + Wt(e) + '"]';
    }
    function lc(e) {
      return "script[async]" + e;
    }
    function w0(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Wt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, jt(i), i;
            var f = fe({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), jt(i), Pt(i, "style", f), Ir(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            f = on(a.href);
            var o = e.querySelector(
              Af(f)
            );
            if (o)
              return t.state.loading |= wn, t.instance = o, jt(o), o;
            i = Qy(a), (f = Jn.get(f)) && Zy(i, f), o = (e.ownerDocument || e).createElement("link"), jt(o);
            var d = o;
            return d._p = new Promise(function(h, p) {
              d.onload = h, d.onerror = p;
            }), Pt(o, "link", i), t.state.loading |= wn, Ir(o, a.precedence, e), t.instance = o;
          case "script":
            return o = oi(a.src), (f = e.querySelector(
              lc(o)
            )) ? (t.instance = f, jt(f), f) : (i = a, (f = Jn.get(o)) && (i = fe({}, a), Pr(i, f)), e = e.ownerDocument || e, f = e.createElement("script"), jt(f), Pt(f, "link", i), e.head.appendChild(f), t.instance = f);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & wn) === Bs && (i = t.instance, t.state.loading |= wn, Ir(i, a.precedence, e));
      return t.instance;
    }
    function Ir(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), f = i.length ? i[i.length - 1] : null, o = f, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) o = h;
        else if (o !== f) break;
      }
      o ? o.parentNode.insertBefore(e, o.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function Zy(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Pr(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Ly(e, t, a) {
      if (Qp === null) {
        var i = /* @__PURE__ */ new Map(), f = Qp = /* @__PURE__ */ new Map();
        f.set(a, i);
      } else
        f = Qp, i = f.get(a), i || (i = /* @__PURE__ */ new Map(), f.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), f = 0; f < a.length; f++) {
        var o = a[f];
        if (!(o[fs] || o[Rl] || e === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== zu) {
          var d = o.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(o) : i.set(d, [o]);
        }
      }
      return i;
    }
    function ac(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function ed(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Pd || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var f = t.onError, o = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), f && a.push("`onError`"), o != null && a.push("`disabled`"), f = He(a, "and"), f += a.length === 1 ? " prop" : " props", o = a.length === 1 ? "an " + f : "the " + f, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                o,
                f
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function wy(e) {
      return !(e.type === "stylesheet" && (e.state.loading & cb) === Bs);
    }
    function J0() {
    }
    function K0(e, t, a) {
      if (Km === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = Km;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & wn) === Bs) {
        if (t.instance === null) {
          var f = on(a.href), o = e.querySelector(
            Af(f)
          );
          if (o) {
            e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = Fo.bind(i), e.then(i, i)), t.state.loading |= wn, t.instance = o, jt(o);
            return;
          }
          o = e.ownerDocument || e, a = Qy(a), (f = Jn.get(f)) && Zy(a, f), o = o.createElement("link"), jt(o);
          var d = o;
          d._p = new Promise(function(h, p) {
            d.onload = h, d.onerror = p;
          }), Pt(o, "link", a), t.instance = o;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & cb) === Bs && (i.count++, t = Fo.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function k0() {
      if (Km === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = Km;
      return e.stylesheets && e.count === 0 && td(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && td(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function Fo() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          td(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function td(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Zp = /* @__PURE__ */ new Map(), t.forEach(ld, e), Zp = null, Fo.call(e));
    }
    function ld(e, t) {
      if (!(t.state.loading & wn)) {
        var a = Zp.get(e);
        if (a) var i = a.get(bg);
        else {
          a = /* @__PURE__ */ new Map(), Zp.set(e, a);
          for (var f = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), o = 0; o < f.length; o++) {
            var d = f[o];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(bg, i);
        }
        f = t.instance, d = f.getAttribute("data-precedence"), o = a.get(d) || i, o === i && a.set(bg, f), a.set(d, f), this.count++, i = Fo.bind(this), f.addEventListener("load", i), f.addEventListener("error", i), o ? o.parentNode.insertBefore(f, o.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(f, e.firstChild)), t.state.loading |= wn;
      }
    }
    function $0(e, t, a, i, f, o, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ns, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gs(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gs(0), this.hiddenUpdates = Gs(null), this.identifierPrefix = i, this.onUncaughtError = f, this.onCaughtError = o, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Jy(e, t, a, i, f, o, d, h, p, v, U, N) {
      return e = new $0(
        e,
        t,
        a,
        d,
        h,
        p,
        v,
        N
      ), t = iS, o === !0 && (t |= na | Du), _a && (t |= Nl), o = we(3, null, null, t), e.current = o, o.stateNode = e, t = Hh(), Ma(t), e.pooledCache = t, Ma(t), o.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Zu(o), e;
    }
    function We(e) {
      return e ? (e = qf, e) : qf;
    }
    function Io(e, t, a, i, f, o) {
      if (dl && typeof dl.onScheduleFiberRoot == "function")
        try {
          dl.onScheduleFiberRoot(ic, i, a);
        } catch (d) {
          Mt || (Mt = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      K !== null && typeof K.markRenderScheduled == "function" && K.markRenderScheduled(t), f = We(f), i.context === null ? i.context = f : i.pendingContext = f, Cn && hl !== null && !db && (db = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        ae(hl) || "Unknown"
      )), i = Ja(t), i.payload = { element: a }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        o
      ), i.callback = o), a = Ka(e, i, t), a !== null && (Se(a, e, t), Vi(a, e, t));
    }
    function W0(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function ad(e, t) {
      W0(e, t), (e = e.alternate) && W0(e, t);
    }
    function F0(e) {
      if (e.tag === 13) {
        var t = Xl(e, 67108864);
        t !== null && Se(t, e, 67108864), ad(e, 67108864);
      }
    }
    function hv() {
      return hl;
    }
    function yv() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = Ip(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function nd(e, t, a, i) {
      var f = M.T;
      M.T = null;
      var o = Ve.p;
      try {
        Ve.p = ga, Po(e, t, a, i);
      } finally {
        Ve.p = o, M.T = f;
      }
    }
    function Rf(e, t, a, i) {
      var f = M.T;
      M.T = null;
      var o = Ve.p;
      try {
        Ve.p = xn, Po(e, t, a, i);
      } finally {
        Ve.p = o, M.T = f;
      }
    }
    function Po(e, t, a, i) {
      if (wp) {
        var f = zf(i);
        if (f === null)
          ya(
            e,
            t,
            i,
            Jp,
            a
          ), sn(e, i);
        else if (mv(
          f,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (sn(e, i), t & 4 && -1 < GS.indexOf(e)) {
          for (; f !== null; ) {
            var o = gn(f);
            if (o !== null)
              switch (o.tag) {
                case 3:
                  if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                    var d = gl(o.pendingLanes);
                    if (d !== 0) {
                      var h = o;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var p = 1 << 31 - el(d);
                        h.entanglements[1] |= p, d &= ~p;
                      }
                      Ba(o), (Le & (Ea | Hu)) === yn && (Up = rl() + L1, ti(0));
                    }
                  }
                  break;
                case 13:
                  h = Xl(o, 2), h !== null && Se(h, o, 2), Fi(), ad(o, 2);
              }
            if (o = zf(i), o === null && ya(
              e,
              t,
              i,
              Jp,
              a
            ), o === f) break;
            f = o;
          }
          f !== null && i.stopPropagation();
        } else
          ya(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function zf(e) {
      return e = Qa(e), es(e);
    }
    function es(e) {
      if (Jp = null, e = Ra(e), e !== null) {
        var t = Je(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Gt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Jp = e, null;
    }
    function si(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ga;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return xn;
        case "message":
          switch (lp()) {
            case is:
              return ga;
            case Iy:
              return xn;
            case Mf:
            case Py:
              return Au;
            case em:
              return md;
            default:
              return Au;
          }
        default:
          return Au;
      }
    }
    function sn(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          wf = null;
          break;
        case "dragenter":
        case "dragleave":
          Jf = null;
          break;
        case "mouseover":
        case "mouseout":
          Kf = null;
          break;
        case "pointerover":
        case "pointerout":
          $m.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Wm.delete(t.pointerId);
      }
    }
    function gu(e, t, a, i, f, o) {
      return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: o,
        targetContainers: [f]
      }, t !== null && (t = gn(t), t !== null && F0(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, f !== null && t.indexOf(f) === -1 && t.push(f), e);
    }
    function mv(e, t, a, i, f) {
      switch (t) {
        case "focusin":
          return wf = gu(
            wf,
            e,
            t,
            a,
            i,
            f
          ), !0;
        case "dragenter":
          return Jf = gu(
            Jf,
            e,
            t,
            a,
            i,
            f
          ), !0;
        case "mouseover":
          return Kf = gu(
            Kf,
            e,
            t,
            a,
            i,
            f
          ), !0;
        case "pointerover":
          var o = f.pointerId;
          return $m.set(
            o,
            gu(
              $m.get(o) || null,
              e,
              t,
              a,
              i,
              f
            )
          ), !0;
        case "gotpointercapture":
          return o = f.pointerId, Wm.set(
            o,
            gu(
              Wm.get(o) || null,
              e,
              t,
              a,
              i,
              f
            )
          ), !0;
      }
      return !1;
    }
    function Ky(e) {
      var t = Ra(e.target);
      if (t !== null) {
        var a = Je(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Gt(a), t !== null) {
              e.blockedOn = t, Vs(e.priority, function() {
                if (a.tag === 13) {
                  var i = ha(a);
                  i = vn(i);
                  var f = Xl(
                    a,
                    i
                  );
                  f !== null && Se(f, a, i), ad(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ts(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = zf(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), f = i;
          r !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = f, a.target.dispatchEvent(i), r === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = null;
        } else
          return t = gn(a), t !== null && F0(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function ky(e, t, a) {
      ts(e) && a.delete(t);
    }
    function I0() {
      Sg = !1, wf !== null && ts(wf) && (wf = null), Jf !== null && ts(Jf) && (Jf = null), Kf !== null && ts(Kf) && (Kf = null), $m.forEach(ky), Wm.forEach(ky);
    }
    function ud(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Sg || (Sg = !0, Rt.unstable_scheduleCallback(
        Rt.unstable_NormalPriority,
        I0
      )));
    }
    function id(e) {
      Kp !== e && (Kp = e, Rt.unstable_scheduleCallback(
        Rt.unstable_NormalPriority,
        function() {
          Kp === e && (Kp = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], f = e[t + 2];
            if (typeof i != "function") {
              if (es(i || a) === null)
                continue;
              break;
            }
            var o = gn(a);
            o !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: f,
              method: a.method,
              action: i
            }, Object.freeze(a), gr(
              o,
              a,
              i,
              f
            ));
          }
        }
      ));
    }
    function Df(e) {
      function t(p) {
        return ud(p, e);
      }
      wf !== null && ud(wf, e), Jf !== null && ud(Jf, e), Kf !== null && ud(Kf, e), $m.forEach(t), Wm.forEach(t);
      for (var a = 0; a < kf.length; a++) {
        var i = kf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < kf.length && (a = kf[0], a.blockedOn === null); )
        Ky(a), a.blockedOn === null && kf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var f = a[i], o = a[i + 1], d = f[aa] || null;
          if (typeof o == "function")
            d || id(a);
          else if (d) {
            var h = null;
            if (o && o.hasAttribute("formAction")) {
              if (f = o, d = o[aa] || null)
                h = d.formAction;
              else if (es(f) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), id(a);
          }
        }
    }
    function cd(e) {
      this._internalRoot = e;
    }
    function fd(e) {
      this._internalRoot = e;
    }
    function od(e) {
      e[mi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Rt = Nb(), $y = Rg, pv = Cb, fe = Object.assign, vv = Symbol.for("react.element"), bu = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), ri = Symbol.for("react.fragment"), nc = Symbol.for("react.strict_mode"), ls = Symbol.for("react.profiler"), P0 = Symbol.for("react.provider"), as = Symbol.for("react.consumer"), la = Symbol.for("react.context"), di = Symbol.for("react.forward_ref"), hi = Symbol.for("react.suspense"), sd = Symbol.for("react.suspense_list"), rd = Symbol.for("react.memo"), va = Symbol.for("react.lazy"), dd = Symbol.for("react.activity"), ep = Symbol.for("react.memo_cache_sentinel"), ns = Symbol.iterator, Fe = Symbol.for("react.client.reference"), wt = Array.isArray, M = $y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ve = pv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Wy = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), us = [], Of = [], Mn = -1, Su = rt(null), uc = rt(null), Un = rt(null), hd = rt(null), Hn = Object.prototype.hasOwnProperty, Fy = Rt.unstable_scheduleCallback, tp = Rt.unstable_cancelCallback, gv = Rt.unstable_shouldYield, bv = Rt.unstable_requestPaint, rl = Rt.unstable_now, lp = Rt.unstable_getCurrentPriorityLevel, is = Rt.unstable_ImmediatePriority, Iy = Rt.unstable_UserBlockingPriority, Mf = Rt.unstable_NormalPriority, Py = Rt.unstable_LowPriority, em = Rt.unstable_IdlePriority, rn = Rt.log, tm = Rt.unstable_setDisableYieldValue, ic = null, dl = null, K = null, Mt = !1, _a = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", el = Math.clz32 ? Math.clz32 : Fp, Tu = Math.log, Sv = Math.LN2, yd = 256, Eu = 4194304, ga = 2, xn = 8, Au = 32, md = 268435456, yi = Math.random().toString(36).slice(2), Rl = "__reactFiber$" + yi, aa = "__reactProps$" + yi, mi = "__reactContainer$" + yi, pd = "__reactEvents$" + yi, Uf = "__reactListeners$" + yi, cs = "__reactHandles$" + yi, lm = "__reactResources$" + yi, fs = "__reactMarker$" + yi, cc = /* @__PURE__ */ new Set(), dn = {}, vd = {}, gd = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, am = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), bd = {}, os = {}, Hf = 0, nm, ap, um, xf, np, up, ip;
    nh.__reactDisabledLog = !0;
    var Cf, ss, rs = !1, im = new (typeof WeakMap == "function" ? WeakMap : Map)(), hl = null, Cn = !1, cp = /[\n"\\]/g, cm = !1, fm = !1, om = !1, Sd = !1, sm = !1, ds = !1, fp = ["value", "defaultValue"], op = !1, Td = /["'&<>\n\t]|^\s|\s$/, rm = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), hs = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), dm = hs.concat(["button"]), sp = "dd dt li option optgroup p rp rt".split(" "), Ed = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, hn = {}, Nn = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Ru = /([A-Z])/g, Nf = /^ms-/, ys = /^(?:webkit|moz|o)[A-Z]/, pi = /^-ms-/, Tv = /-(.)/g, hm = /;\s*$/, Bn = {}, ym = {}, mm = !1, ms = !1, pm = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Ad = "http://www.w3.org/1998/Math/MathML", zu = "http://www.w3.org/2000/svg", Rd = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), ps = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Bf = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, vi = {}, zd = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), rp = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), dp = !1, tl = {}, l = /^on./, n = /^on[^A-Z]/, u = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), s = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, r = null, y = null, m = null, g = !1, R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), V = !1;
    if (R)
      try {
        var j = {};
        Object.defineProperty(j, "passive", {
          get: function() {
            V = !0;
          }
        }), window.addEventListener("test", j, j), window.removeEventListener("test", j, j);
      } catch {
        V = !1;
      }
    var D = null, H = null, ue = null, le = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Xe = fl(le), A = fe({}, le, { view: 0, detail: 0 }), E = fl(A), z, X, F, ve = fe({}, A, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Sl,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== F && (F && e.type === "mousemove" ? (z = e.screenX - F.screenX, X = e.screenY - F.screenY) : X = z = 0, F = e), z);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : X;
      }
    }), te = fl(ve), ie = fe({}, ve, { dataTransfer: 0 }), ll = fl(ie), qe = fe({}, A, { relatedTarget: 0 }), qn = fl(qe), Ev = fe({}, le, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bb = fl(Ev), qb = fe({}, le, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yb = fl(qb), _b = fe({}, le, { data: 0 }), zg = fl(
      _b
    ), Gb = zg, Vb = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Xb = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, jb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, Qb = fe({}, A, {
      key: function(e) {
        if (e.key) {
          var t = Vb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Ui(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xb[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sl,
      charCode: function(e) {
        return e.type === "keypress" ? Ui(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Zb = fl(Qb), Lb = fe({}, ve, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Dg = fl(Lb), wb = fe({}, A, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sl
    }), Jb = fl(wb), Kb = fe({}, le, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), kb = fl(Kb), $b = fe({}, ve, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Wb = fl($b), Fb = fe({}, le, {
      newState: 0,
      oldState: 0
    }), Ib = fl(Fb), Pb = [9, 13, 27, 32], Og = 229, Av = R && "CompositionEvent" in window, vm = null;
    R && "documentMode" in document && (vm = document.documentMode);
    var eS = R && "TextEvent" in window && !vm, Mg = R && (!Av || vm && 8 < vm && 11 >= vm), Ug = 32, Hg = String.fromCharCode(Ug), xg = !1, Dd = !1, tS = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, gm = null, bm = null, Cg = !1;
    R && (Cg = vh("input") && (!document.documentMode || 9 < document.documentMode));
    var ba = typeof Object.is == "function" ? Object.is : cv, lS = R && "documentMode" in document && 11 >= document.documentMode, Od = null, Rv = null, Sm = null, zv = !1, Md = {
      animationend: Hi("Animation", "AnimationEnd"),
      animationiteration: Hi("Animation", "AnimationIteration"),
      animationstart: Hi("Animation", "AnimationStart"),
      transitionrun: Hi("Transition", "TransitionRun"),
      transitionstart: Hi("Transition", "TransitionStart"),
      transitioncancel: Hi("Transition", "TransitionCancel"),
      transitionend: Hi("Transition", "TransitionEnd")
    }, Dv = {}, Ng = {};
    R && (Ng = document.createElement("div").style, "AnimationEvent" in window || (delete Md.animationend.animation, delete Md.animationiteration.animation, delete Md.animationstart.animation), "TransitionEvent" in window || delete Md.transitionend.transition);
    var Bg = xi("animationend"), qg = xi("animationiteration"), Yg = xi("animationstart"), aS = xi("transitionrun"), nS = xi("transitionstart"), uS = xi("transitioncancel"), _g = xi("transitionend"), Gg = /* @__PURE__ */ new Map(), Ov = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Ov.push("scrollEnd");
    var Mv = /* @__PURE__ */ new WeakMap(), Uv = 1, vs = 2, Yn = [], Ud = 0, Hv = 0, qf = {};
    Object.freeze(qf);
    var _n = null, Hd = null, mt = 0, iS = 1, Nl = 2, na = 8, Du = 16, Vg = 64, Xg = !1;
    try {
      var jg = Object.preventExtensions({});
    } catch {
      Xg = !0;
    }
    var xd = [], Cd = 0, hp = null, yp = 0, Gn = [], Vn = 0, gs = null, fc = 1, oc = "", Sa = null, Bt = null, Ye = !1, sc = !1, Xn = null, bs = null, gi = !1, xv = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Qg = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var cS = performance, Zg = function() {
        return cS.now();
      };
    else {
      var fS = Date;
      Zg = function() {
        return fS.now();
      };
    }
    var Cv = rt(null), Nv = rt(null), Lg = {}, mp = null, Nd = null, Bd = !1, oS = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, sS = Rt.unstable_scheduleCallback, rS = Rt.unstable_NormalPriority, yl = {
      $$typeof: la,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, qd = Rt.unstable_now, wg = -0, pp = -0, Ga = -1.1, Ss = -0, vp = !1, gp = !1, Tm = null, Bv = 0, Ts = 0, Yd = null, Jg = M.S;
    M.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && S0(e, t), Jg !== null && Jg(e, t);
    };
    var Es = rt(null), Ou = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Em = [], Am = [], Rm = [], zm = [], Dm = [], Om = [], As = /* @__PURE__ */ new Set();
    Ou.recordUnsafeLifecycleWarnings = function(e, t) {
      As.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Em.push(e), e.mode & na && typeof t.UNSAFE_componentWillMount == "function" && Am.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Rm.push(e), e.mode & na && typeof t.UNSAFE_componentWillReceiveProps == "function" && zm.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Dm.push(e), e.mode & na && typeof t.UNSAFE_componentWillUpdate == "function" && Om.push(e));
    }, Ou.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Em.length && (Em.forEach(function(h) {
        e.add(
          ae(h) || "Component"
        ), As.add(h.type);
      }), Em = []);
      var t = /* @__PURE__ */ new Set();
      0 < Am.length && (Am.forEach(function(h) {
        t.add(
          ae(h) || "Component"
        ), As.add(h.type);
      }), Am = []);
      var a = /* @__PURE__ */ new Set();
      0 < Rm.length && (Rm.forEach(function(h) {
        a.add(
          ae(h) || "Component"
        ), As.add(h.type);
      }), Rm = []);
      var i = /* @__PURE__ */ new Set();
      0 < zm.length && (zm.forEach(
        function(h) {
          i.add(
            ae(h) || "Component"
          ), As.add(h.type);
        }
      ), zm = []);
      var f = /* @__PURE__ */ new Set();
      0 < Dm.length && (Dm.forEach(function(h) {
        f.add(
          ae(h) || "Component"
        ), As.add(h.type);
      }), Dm = []);
      var o = /* @__PURE__ */ new Set();
      if (0 < Om.length && (Om.forEach(function(h) {
        o.add(
          ae(h) || "Component"
        ), As.add(h.type);
      }), Om = []), 0 < t.size) {
        var d = Ce(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Ce(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Ce(
        o
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = Ce(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Ce(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Ce(f), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var bp = /* @__PURE__ */ new Map(), Kg = /* @__PURE__ */ new Set();
    Ou.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & na && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !Kg.has(e.type) && (i = bp.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], bp.set(a, i)), i.push(e));
    }, Ou.flushLegacyContextWarning = function() {
      bp.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(f) {
            a.add(ae(f) || "Component"), Kg.add(f.type);
          });
          var i = Ce(a);
          ee(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ou.discardPendingWarnings = function() {
      Em = [], Am = [], Rm = [], zm = [], Dm = [], Om = [], bp = /* @__PURE__ */ new Map();
    };
    var Mm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), kg = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Sp = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), qv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Um = null, Tp = !1, jn = 0, Qn = 1, Ta = 2, Bl = 4, ml = 8, $g = 0, Wg = 1, Fg = 2, Yv = 3, Yf = !1, Ig = !1, _v = null, Gv = !1, _d = rt(null), Ep = rt(0), Gd, Pg = /* @__PURE__ */ new Set(), e1 = /* @__PURE__ */ new Set(), Vv = /* @__PURE__ */ new Set(), t1 = /* @__PURE__ */ new Set(), _f = 0, oe = null, lt = null, al = null, Ap = !1, Vd = !1, Rs = !1, Rp = 0, Hm = 0, rc = null, dS = 0, hS = 25, C = null, Zn = null, dc = -1, xm = !1, zp = {
      readContext: nt,
      use: St,
      useCallback: tt,
      useContext: tt,
      useEffect: tt,
      useImperativeHandle: tt,
      useLayoutEffect: tt,
      useInsertionEffect: tt,
      useMemo: tt,
      useReducer: tt,
      useRef: tt,
      useState: tt,
      useDebugValue: tt,
      useDeferredValue: tt,
      useTransition: tt,
      useSyncExternalStore: tt,
      useId: tt,
      useHostTransitionStatus: tt,
      useFormState: tt,
      useActionState: tt,
      useOptimistic: tt,
      useMemoCache: tt,
      useCacheRefresh: tt
    }, Xv = null, l1 = null, jv = null, a1 = null, bi = null, Mu = null, Dp = null;
    Xv = {
      readContext: function(e) {
        return nt(e);
      },
      use: St,
      useCallback: function(e, t) {
        return C = "useCallback", me(), wu(t), Wc(e, t);
      },
      useContext: function(e) {
        return C = "useContext", me(), nt(e);
      },
      useEffect: function(e, t) {
        return C = "useEffect", me(), wu(t), Ao(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", me(), wu(a), nu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        C = "useInsertionEffect", me(), wu(t), Ha(4, Ta, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", me(), wu(t), Vh(e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", me(), wu(t);
        var a = M.H;
        M.H = bi;
        try {
          return Qi(e, t);
        } finally {
          M.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", me();
        var i = M.H;
        M.H = bi;
        try {
          return lu(e, t, a);
        } finally {
          M.H = i;
        }
      },
      useRef: function(e) {
        return C = "useRef", me(), $u(e);
      },
      useState: function(e) {
        C = "useState", me();
        var t = M.H;
        M.H = bi;
        try {
          return Ia(e);
        } finally {
          M.H = t;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", me();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", me(), Fc(e, t);
      },
      useTransition: function() {
        return C = "useTransition", me(), Do();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", me(), dr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", me(), Zi();
      },
      useFormState: function(e, t) {
        return C = "useFormState", me(), jc(), Kc(e, t);
      },
      useActionState: function(e, t) {
        return C = "useActionState", me(), Kc(e, t);
      },
      useOptimistic: function(e) {
        return C = "useOptimistic", me(), En(e);
      },
      useHostTransitionStatus: wl,
      useMemoCache: Ke,
      useCacheRefresh: function() {
        return C = "useCacheRefresh", me(), Oo();
      }
    }, l1 = {
      readContext: function(e) {
        return nt(e);
      },
      use: St,
      useCallback: function(e, t) {
        return C = "useCallback", Q(), Wc(e, t);
      },
      useContext: function(e) {
        return C = "useContext", Q(), nt(e);
      },
      useEffect: function(e, t) {
        return C = "useEffect", Q(), Ao(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", Q(), nu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        C = "useInsertionEffect", Q(), Ha(4, Ta, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", Q(), Vh(e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", Q();
        var a = M.H;
        M.H = bi;
        try {
          return Qi(e, t);
        } finally {
          M.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", Q();
        var i = M.H;
        M.H = bi;
        try {
          return lu(e, t, a);
        } finally {
          M.H = i;
        }
      },
      useRef: function(e) {
        return C = "useRef", Q(), $u(e);
      },
      useState: function(e) {
        C = "useState", Q();
        var t = M.H;
        M.H = bi;
        try {
          return Ia(e);
        } finally {
          M.H = t;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", Q(), Fc(e, t);
      },
      useTransition: function() {
        return C = "useTransition", Q(), Do();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", Q(), dr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", Q(), Zi();
      },
      useActionState: function(e, t) {
        return C = "useActionState", Q(), Kc(e, t);
      },
      useFormState: function(e, t) {
        return C = "useFormState", Q(), jc(), Kc(e, t);
      },
      useOptimistic: function(e) {
        return C = "useOptimistic", Q(), En(e);
      },
      useHostTransitionStatus: wl,
      useMemoCache: Ke,
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Q(), Oo();
      }
    }, jv = {
      readContext: function(e) {
        return nt(e);
      },
      use: St,
      useCallback: function(e, t) {
        return C = "useCallback", Q(), Ro(e, t);
      },
      useContext: function(e) {
        return C = "useContext", Q(), nt(e);
      },
      useEffect: function(e, t) {
        C = "useEffect", Q(), Ll(2048, ml, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", Q(), $c(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return C = "useInsertionEffect", Q(), Ll(4, Ta, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", Q(), Ll(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", Q();
        var a = M.H;
        M.H = Mu;
        try {
          return zo(e, t);
        } finally {
          M.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", Q();
        var i = M.H;
        M.H = Mu;
        try {
          return Hl(e, t, a);
        } finally {
          M.H = i;
        }
      },
      useRef: function() {
        return C = "useRef", Q(), Qe().memoizedState;
      },
      useState: function() {
        C = "useState", Q();
        var e = M.H;
        M.H = Mu;
        try {
          return Hl(pe);
        } finally {
          M.H = e;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", Q(), vr(e, t);
      },
      useTransition: function() {
        return C = "useTransition", Q(), br();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", Q(), So(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", Q(), Qe().memoizedState;
      },
      useFormState: function(e) {
        return C = "useFormState", Q(), jc(), pr(e);
      },
      useActionState: function(e) {
        return C = "useActionState", Q(), pr(e);
      },
      useOptimistic: function(e, t) {
        return C = "useOptimistic", Q(), An(e, t);
      },
      useHostTransitionStatus: wl,
      useMemoCache: Ke,
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Q(), Qe().memoizedState;
      }
    }, a1 = {
      readContext: function(e) {
        return nt(e);
      },
      use: St,
      useCallback: function(e, t) {
        return C = "useCallback", Q(), Ro(e, t);
      },
      useContext: function(e) {
        return C = "useContext", Q(), nt(e);
      },
      useEffect: function(e, t) {
        C = "useEffect", Q(), Ll(2048, ml, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", Q(), $c(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return C = "useInsertionEffect", Q(), Ll(4, Ta, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", Q(), Ll(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", Q();
        var a = M.H;
        M.H = Dp;
        try {
          return zo(e, t);
        } finally {
          M.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", Q();
        var i = M.H;
        M.H = Dp;
        try {
          return Fa(e, t, a);
        } finally {
          M.H = i;
        }
      },
      useRef: function() {
        return C = "useRef", Q(), Qe().memoizedState;
      },
      useState: function() {
        C = "useState", Q();
        var e = M.H;
        M.H = Dp;
        try {
          return Fa(pe);
        } finally {
          M.H = e;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", Q(), jh(e, t);
      },
      useTransition: function() {
        return C = "useTransition", Q(), iu();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", Q(), So(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", Q(), Qe().memoizedState;
      },
      useFormState: function(e) {
        return C = "useFormState", Q(), jc(), ku(e);
      },
      useActionState: function(e) {
        return C = "useActionState", Q(), ku(e);
      },
      useOptimistic: function(e, t) {
        return C = "useOptimistic", Q(), mr(e, t);
      },
      useHostTransitionStatus: wl,
      useMemoCache: Ke,
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Q(), Qe().memoizedState;
      }
    }, bi = {
      readContext: function(e) {
        return De(), nt(e);
      },
      use: function(e) {
        return k(), St(e);
      },
      useCallback: function(e, t) {
        return C = "useCallback", k(), me(), Wc(e, t);
      },
      useContext: function(e) {
        return C = "useContext", k(), me(), nt(e);
      },
      useEffect: function(e, t) {
        return C = "useEffect", k(), me(), Ao(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", k(), me(), nu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        C = "useInsertionEffect", k(), me(), Ha(4, Ta, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", k(), me(), Vh(e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", k(), me();
        var a = M.H;
        M.H = bi;
        try {
          return Qi(e, t);
        } finally {
          M.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", k(), me();
        var i = M.H;
        M.H = bi;
        try {
          return lu(e, t, a);
        } finally {
          M.H = i;
        }
      },
      useRef: function(e) {
        return C = "useRef", k(), me(), $u(e);
      },
      useState: function(e) {
        C = "useState", k(), me();
        var t = M.H;
        M.H = bi;
        try {
          return Ia(e);
        } finally {
          M.H = t;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", k(), me();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", k(), me(), Fc(e, t);
      },
      useTransition: function() {
        return C = "useTransition", k(), me(), Do();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", k(), me(), dr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", k(), me(), Zi();
      },
      useFormState: function(e, t) {
        return C = "useFormState", k(), me(), Kc(e, t);
      },
      useActionState: function(e, t) {
        return C = "useActionState", k(), me(), Kc(e, t);
      },
      useOptimistic: function(e) {
        return C = "useOptimistic", k(), me(), En(e);
      },
      useMemoCache: function(e) {
        return k(), Ke(e);
      },
      useHostTransitionStatus: wl,
      useCacheRefresh: function() {
        return C = "useCacheRefresh", me(), Oo();
      }
    }, Mu = {
      readContext: function(e) {
        return De(), nt(e);
      },
      use: function(e) {
        return k(), St(e);
      },
      useCallback: function(e, t) {
        return C = "useCallback", k(), Q(), Ro(e, t);
      },
      useContext: function(e) {
        return C = "useContext", k(), Q(), nt(e);
      },
      useEffect: function(e, t) {
        C = "useEffect", k(), Q(), Ll(2048, ml, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", k(), Q(), $c(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return C = "useInsertionEffect", k(), Q(), Ll(4, Ta, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", k(), Q(), Ll(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", k(), Q();
        var a = M.H;
        M.H = Mu;
        try {
          return zo(e, t);
        } finally {
          M.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", k(), Q();
        var i = M.H;
        M.H = Mu;
        try {
          return Hl(e, t, a);
        } finally {
          M.H = i;
        }
      },
      useRef: function() {
        return C = "useRef", k(), Q(), Qe().memoizedState;
      },
      useState: function() {
        C = "useState", k(), Q();
        var e = M.H;
        M.H = Mu;
        try {
          return Hl(pe);
        } finally {
          M.H = e;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", k(), Q();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", k(), Q(), vr(e, t);
      },
      useTransition: function() {
        return C = "useTransition", k(), Q(), br();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", k(), Q(), So(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", k(), Q(), Qe().memoizedState;
      },
      useFormState: function(e) {
        return C = "useFormState", k(), Q(), pr(e);
      },
      useActionState: function(e) {
        return C = "useActionState", k(), Q(), pr(e);
      },
      useOptimistic: function(e, t) {
        return C = "useOptimistic", k(), Q(), An(e, t);
      },
      useMemoCache: function(e) {
        return k(), Ke(e);
      },
      useHostTransitionStatus: wl,
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Q(), Qe().memoizedState;
      }
    }, Dp = {
      readContext: function(e) {
        return De(), nt(e);
      },
      use: function(e) {
        return k(), St(e);
      },
      useCallback: function(e, t) {
        return C = "useCallback", k(), Q(), Ro(e, t);
      },
      useContext: function(e) {
        return C = "useContext", k(), Q(), nt(e);
      },
      useEffect: function(e, t) {
        C = "useEffect", k(), Q(), Ll(2048, ml, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return C = "useImperativeHandle", k(), Q(), $c(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return C = "useInsertionEffect", k(), Q(), Ll(4, Ta, e, t);
      },
      useLayoutEffect: function(e, t) {
        return C = "useLayoutEffect", k(), Q(), Ll(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        C = "useMemo", k(), Q();
        var a = M.H;
        M.H = Mu;
        try {
          return zo(e, t);
        } finally {
          M.H = a;
        }
      },
      useReducer: function(e, t, a) {
        C = "useReducer", k(), Q();
        var i = M.H;
        M.H = Mu;
        try {
          return Fa(e, t, a);
        } finally {
          M.H = i;
        }
      },
      useRef: function() {
        return C = "useRef", k(), Q(), Qe().memoizedState;
      },
      useState: function() {
        C = "useState", k(), Q();
        var e = M.H;
        M.H = Mu;
        try {
          return Fa(pe);
        } finally {
          M.H = e;
        }
      },
      useDebugValue: function() {
        C = "useDebugValue", k(), Q();
      },
      useDeferredValue: function(e, t) {
        return C = "useDeferredValue", k(), Q(), jh(e, t);
      },
      useTransition: function() {
        return C = "useTransition", k(), Q(), iu();
      },
      useSyncExternalStore: function(e, t, a) {
        return C = "useSyncExternalStore", k(), Q(), So(
          e,
          t,
          a
        );
      },
      useId: function() {
        return C = "useId", k(), Q(), Qe().memoizedState;
      },
      useFormState: function(e) {
        return C = "useFormState", k(), Q(), ku(e);
      },
      useActionState: function(e) {
        return C = "useActionState", k(), Q(), ku(e);
      },
      useOptimistic: function(e, t) {
        return C = "useOptimistic", k(), Q(), mr(e, t);
      },
      useMemoCache: function(e) {
        return k(), Ke(e);
      },
      useHostTransitionStatus: wl,
      useCacheRefresh: function() {
        return C = "useCacheRefresh", Q(), Qe().memoizedState;
      }
    };
    var n1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = Cn;
        Cn = !0;
        try {
          return e(t, a);
        } finally {
          Cn = i;
        }
      }
    }, Qv = n1["react-stack-bottom-frame"].bind(n1), u1 = {
      "react-stack-bottom-frame": function(e) {
        var t = Cn;
        Cn = !0;
        try {
          return e.render();
        } finally {
          Cn = t;
        }
      }
    }, i1 = u1["react-stack-bottom-frame"].bind(u1), c1 = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          ke(e, e.return, a);
        }
      }
    }, Zv = c1["react-stack-bottom-frame"].bind(c1), f1 = {
      "react-stack-bottom-frame": function(e, t, a, i, f) {
        try {
          t.componentDidUpdate(a, i, f);
        } catch (o) {
          ke(e, e.return, o);
        }
      }
    }, o1 = f1["react-stack-bottom-frame"].bind(f1), s1 = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, yS = s1["react-stack-bottom-frame"].bind(s1), r1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          ke(e, t, i);
        }
      }
    }, d1 = r1["react-stack-bottom-frame"].bind(r1), h1 = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, mS = h1["react-stack-bottom-frame"].bind(h1), y1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          ke(e, t, i);
        }
      }
    }, pS = y1["react-stack-bottom-frame"].bind(y1), m1 = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Gf = m1["react-stack-bottom-frame"].bind(m1), Xd = null, Cm = 0, be = null, Lv, p1 = Lv = !1, v1 = {}, g1 = {}, b1 = {};
    $t = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = ae(e), f = i || "null";
        if (!v1[f]) {
          v1[f] = !0, a = a._owner, e = e._debugOwner;
          var o = "";
          e && typeof e.tag == "number" && (f = ae(e)) && (o = `

Check the render method of \`` + f + "`."), o || i && (o = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = ae(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ee(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              o,
              d
            );
          });
        }
      }
    };
    var jd = wi(!0), S1 = wi(!1), Ln = rt(null), Si = null, Qd = 1, Nm = 2, pl = rt(0), T1 = {}, E1 = /* @__PURE__ */ new Set(), A1 = /* @__PURE__ */ new Set(), R1 = /* @__PURE__ */ new Set(), z1 = /* @__PURE__ */ new Set(), D1 = /* @__PURE__ */ new Set(), O1 = /* @__PURE__ */ new Set(), M1 = /* @__PURE__ */ new Set(), U1 = /* @__PURE__ */ new Set(), H1 = /* @__PURE__ */ new Set(), x1 = /* @__PURE__ */ new Set();
    Object.freeze(T1);
    var wv = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ha(e), f = Ja(i);
        f.payload = t, a != null && (bt(a), f.callback = a), t = Ka(e, f, i), t !== null && (Se(t, e, i), Vi(t, e, i)), Ei(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ha(e), f = Ja(i);
        f.tag = Wg, f.payload = t, a != null && (bt(a), f.callback = a), t = Ka(e, f, i), t !== null && (Se(t, e, i), Vi(t, e, i)), Ei(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ha(e), i = Ja(a);
        i.tag = Fg, t != null && (bt(t), i.callback = t), t = Ka(e, i, a), t !== null && (Se(t, e, a), Vi(t, e, a)), K !== null && typeof K.markForceUpdateScheduled == "function" && K.markForceUpdateScheduled(e, a);
      }
    }, Jv = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, Zd = null, Kv = null, C1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), zl = !1, N1 = {}, B1 = {}, q1 = {}, Y1 = {}, Ld = !1, _1 = {}, kv = {}, $v = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, G1 = !1, V1 = null;
    V1 = /* @__PURE__ */ new Set();
    var hc = !1, Jt = !1, Wv = !1, X1 = typeof WeakSet == "function" ? WeakSet : Set, Dl = null, wd = null, Jd = null, nl = null, Va = !1, Uu = null, Bm = 8192, vS = {
      getCacheForType: function(e) {
        var t = nt(yl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return hl;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var qm = Symbol.for;
      qm("selector.component"), qm("selector.has_pseudo_class"), qm("selector.role"), qm("selector.test_id"), qm("selector.text");
    }
    var gS = [], bS = typeof WeakMap == "function" ? WeakMap : Map, yn = 0, Ea = 2, Hu = 4, yc = 0, Ym = 1, Kd = 2, Fv = 3, zs = 4, Op = 6, j1 = 5, Le = yn, ft = null, Re = null, ze = 0, Xa = 0, _m = 1, Ds = 2, Gm = 3, Q1 = 4, Iv = 5, kd = 6, Vm = 7, Pv = 8, Os = 9, Ie = Xa, mn = null, Vf = !1, $d = !1, eg = !1, Ti = 0, qt = yc, Xf = 0, jf = 0, tg = 0, pn = 0, Ms = 0, Xm = null, Aa = null, Mp = !1, lg = 0, Z1 = 300, Up = 1 / 0, L1 = 500, jm = null, Qf = null, SS = 0, TS = 1, ES = 2, Us = 0, w1 = 1, J1 = 2, K1 = 3, AS = 4, ag = 5, ql = 0, Zf = null, Wd = null, Lf = 0, ng = 0, ug = null, k1 = null, RS = 50, Qm = 0, ig = null, cg = !1, Hp = !1, zS = 50, Hs = 0, Zm = null, Fd = !1, xp = null, $1 = !1, W1 = /* @__PURE__ */ new Set(), DS = {}, Cp = null, Id = null, fg = !1, og = !1, Np = !1, sg = !1, xs = 0, rg = {};
    (function() {
      for (var e = 0; e < Ov.length; e++) {
        var t = Ov[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Za(a, "on" + t);
      }
      Za(Bg, "onAnimationEnd"), Za(qg, "onAnimationIteration"), Za(Yg, "onAnimationStart"), Za("dblclick", "onDoubleClick"), Za("focusin", "onFocus"), Za("focusout", "onBlur"), Za(aS, "onTransitionRun"), Za(nS, "onTransitionStart"), Za(uS, "onTransitionCancel"), Za(_g, "onTransitionEnd");
    })(), Nu("onMouseEnter", ["mouseout", "mouseover"]), Nu("onMouseLeave", ["mouseout", "mouseover"]), Nu("onPointerEnter", ["pointerout", "pointerover"]), Nu("onPointerLeave", ["pointerout", "pointerover"]), Cu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Cu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Cu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Cu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Cu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Cu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var Lm = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), dg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lm)
    ), Bp = "_reactListening" + Math.random().toString(36).slice(2), F1 = !1, I1 = !1, qp = !1, P1 = !1, Yp = !1, _p = !1, eb = !1, Gp = {}, OS = /\r\n?/g, MS = /\u0000|\uFFFD/g, Cs = "http://www.w3.org/1999/xlink", hg = "http://www.w3.org/XML/1998/namespace", US = "javascript:throw new Error('React form unexpectedly submitted.')", HS = "suppressHydrationWarning", Vp = "$", Xp = "/$", mc = "$?", wm = "$!", xS = 1, CS = 2, NS = 4, yg = "F!", tb = "F", lb = "complete", BS = "style", pc = 0, Pd = 1, jp = 2, mg = null, pg = null, ab = { dialog: !0, webview: !0 }, vg = null, nb = typeof setTimeout == "function" ? setTimeout : void 0, qS = typeof clearTimeout == "function" ? clearTimeout : void 0, Ns = -1, ub = typeof Promise == "function" ? Promise : void 0, YS = typeof queueMicrotask == "function" ? queueMicrotask : typeof ub < "u" ? function(e) {
      return ub.resolve(null).then(e).catch(pu);
    } : nb, gg = null, Bs = 0, Jm = 1, ib = 2, cb = 3, wn = 4, Jn = /* @__PURE__ */ new Map(), fb = /* @__PURE__ */ new Set(), vc = Ve.d;
    Ve.d = {
      f: function() {
        var e = vc.f(), t = Fi();
        return e || t;
      },
      r: function(e) {
        var t = gn(e);
        t !== null && t.tag === 5 && t.type === "form" ? uu(t) : vc.r(e);
      },
      D: function(e) {
        vc.D(e), vu("dns-prefetch", e, null);
      },
      C: function(e, t) {
        vc.C(e, t), vu("preconnect", e, t);
      },
      L: function(e, t, a) {
        vc.L(e, t, a);
        var i = eh;
        if (i && e && t) {
          var f = 'link[rel="preload"][as="' + Wt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (f += '[imagesrcset="' + Wt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (f += '[imagesizes="' + Wt(
            a.imageSizes
          ) + '"]')) : f += '[href="' + Wt(e) + '"]';
          var o = f;
          switch (t) {
            case "style":
              o = on(e);
              break;
            case "script":
              o = oi(e);
          }
          Jn.has(o) || (e = fe(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Jn.set(o, e), i.querySelector(f) !== null || t === "style" && i.querySelector(
            Af(o)
          ) || t === "script" && i.querySelector(lc(o)) || (t = i.createElement("link"), Pt(t, "link", e), jt(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        vc.m(e, t);
        var a = eh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", f = 'link[rel="modulepreload"][as="' + Wt(i) + '"][href="' + Wt(e) + '"]', o = f;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              o = oi(e);
          }
          if (!Jn.has(o) && (e = fe({ rel: "modulepreload", href: e }, t), Jn.set(o, e), a.querySelector(f) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(lc(o)))
                  return;
            }
            i = a.createElement("link"), Pt(i, "link", e), jt(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        vc.X(e, t);
        var a = eh;
        if (a && e) {
          var i = Ac(a).hoistableScripts, f = oi(e), o = i.get(f);
          o || (o = a.querySelector(
            lc(f)
          ), o || (e = fe({ src: e, async: !0 }, t), (t = Jn.get(f)) && Pr(e, t), o = a.createElement("script"), jt(o), Pt(o, "link", e), a.head.appendChild(o)), o = {
            type: "script",
            instance: o,
            count: 1,
            state: null
          }, i.set(f, o));
        }
      },
      S: function(e, t, a) {
        vc.S(e, t, a);
        var i = eh;
        if (i && e) {
          var f = Ac(i).hoistableStyles, o = on(e);
          t = t || "default";
          var d = f.get(o);
          if (!d) {
            var h = { loading: Bs, preload: null };
            if (d = i.querySelector(
              Af(o)
            ))
              h.loading = Jm | wn;
            else {
              e = fe(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Jn.get(o)) && Zy(e, a);
              var p = d = i.createElement("link");
              jt(p), Pt(p, "link", e), p._p = new Promise(function(v, U) {
                p.onload = v, p.onerror = U;
              }), p.addEventListener("load", function() {
                h.loading |= Jm;
              }), p.addEventListener("error", function() {
                h.loading |= ib;
              }), h.loading |= wn, Ir(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, f.set(o, d);
          }
        }
      },
      M: function(e, t) {
        vc.M(e, t);
        var a = eh;
        if (a && e) {
          var i = Ac(a).hoistableScripts, f = oi(e), o = i.get(f);
          o || (o = a.querySelector(
            lc(f)
          ), o || (e = fe({ src: e, async: !0, type: "module" }, t), (t = Jn.get(f)) && Pr(e, t), o = a.createElement("script"), jt(o), Pt(o, "link", e), a.head.appendChild(o)), o = {
            type: "script",
            instance: o,
            count: 1,
            state: null
          }, i.set(f, o));
        }
      }
    };
    var eh = typeof document > "u" ? null : document, Qp = null, Km = null, bg = null, Zp = null, qs = Wy, km = {
      $$typeof: la,
      Provider: null,
      Consumer: null,
      _currentValue: qs,
      _currentValue2: qs,
      _threadCount: 0
    }, ob = "%c%s%c ", sb = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", rb = "", Lp = " ", _S = Function.prototype.bind, db = !1, hb = null, yb = null, mb = null, pb = null, vb = null, gb = null, bb = null, Sb = null, Tb = null;
    hb = function(e, t, a, i) {
      t = vt(e, t), t !== null && (a = Pe(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = fe({}, e.memoizedProps), a = Xl(e, 2), a !== null && Se(a, e, 2));
    }, yb = function(e, t, a) {
      t = vt(e, t), t !== null && (a = st(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = fe({}, e.memoizedProps), a = Xl(e, 2), a !== null && Se(a, e, 2));
    }, mb = function(e, t, a, i) {
      t = vt(e, t), t !== null && (a = G(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = fe({}, e.memoizedProps), a = Xl(e, 2), a !== null && Se(a, e, 2));
    }, pb = function(e, t, a) {
      e.pendingProps = Pe(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xl(e, 2), t !== null && Se(t, e, 2);
    }, vb = function(e, t) {
      e.pendingProps = st(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xl(e, 2), t !== null && Se(t, e, 2);
    }, gb = function(e, t, a) {
      e.pendingProps = G(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Xl(e, 2), t !== null && Se(t, e, 2);
    }, bb = function(e) {
      var t = Xl(e, 2);
      t !== null && Se(t, e, 2);
    }, Sb = function(e) {
      vl = e;
    }, Tb = function(e) {
      kt = e;
    };
    var wp = !0, Jp = null, Sg = !1, wf = null, Jf = null, Kf = null, $m = /* @__PURE__ */ new Map(), Wm = /* @__PURE__ */ new Map(), kf = [], GS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Kp = null;
    if (fd.prototype.render = cd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : zt(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, f = ha(i);
      Io(i, f, a, t, null, null);
    }, fd.prototype.unmount = cd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (Le & (Ea | Hu)) !== yn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Io(e.current, 2, null, e, null, null), Fi(), t[mi] = null;
      }
    }, fd.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = n0();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < kf.length && t !== 0 && t < kf[a].priority; a++) ;
        kf.splice(a, 0, e), a === 0 && Ky(e);
      }
    }, function() {
      var e = $y.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Ve.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Ol(t), e = e !== null ? il(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: M,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = hb, e.overrideHookStateDeletePath = yb, e.overrideHookStateRenamePath = mb, e.overrideProps = pb, e.overridePropsDeletePath = vb, e.overridePropsRenamePath = gb, e.scheduleUpdate = bb, e.setErrorHandler = Sb, e.setSuspenseHandler = Tb, e.scheduleRefresh = _t, e.scheduleRoot = at, e.setRefreshHandler = ua, e.getCurrentFiber = hv, e.getLaneLabelMap = yv, e.injectProfilingHooks = xu, dt(e);
    }() && R && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var Eb = window.location.protocol;
      /^(https?|file):$/.test(Eb) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (Eb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    e0.createRoot = function(e, t) {
      if (!zt(e))
        throw Error("Target container is not a DOM element.");
      od(e);
      var a = !1, i = "", f = E0, o = Ar, d = Rr, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === bu && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (f = t.onUncaughtError), t.onCaughtError !== void 0 && (o = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = Jy(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        f,
        o,
        d,
        h,
        null
      ), e[mi] = t.current, Ko(e), new cd(t);
    }, e0.hydrateRoot = function(e, t, a) {
      if (!zt(e))
        throw Error("Target container is not a DOM element.");
      od(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, f = "", o = E0, d = Ar, h = Rr, p = null, v = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (f = a.identifierPrefix), a.onUncaughtError !== void 0 && (o = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (p = a.unstable_transitionCallbacks), a.formState !== void 0 && (v = a.formState)), t = Jy(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        f,
        o,
        d,
        h,
        p,
        v
      ), t.context = We(null), a = t.current, i = ha(a), i = vn(i), f = Ja(i), f.callback = null, Ka(a, f, i), a = i, t.current.lanes = a, Wf(t, a), Ba(t), e[mi] = t.current, Ko(e), new fd(t);
    }, e0.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }(), e0;
}
var xb;
function kS() {
  if (xb) return $p.exports;
  xb = 1;
  var L = {};
  function vt() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (L.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vt);
      } catch (Pe) {
        console.error(Pe);
      }
    }
  }
  return L.NODE_ENV === "production" ? (vt(), $p.exports = JS()) : $p.exports = KS(), $p.exports;
}
var $S = kS();
const WS = /* @__PURE__ */ XS($S), FS = ({ totalWithTax: L = 0 }) => /* @__PURE__ */ Ag.jsxs(Ag.Fragment, { children: [
  "SeQura totalWithTax: ",
  L
] }), eT = (L) => {
  const vt = document.getElementById("widget-container");
  WS.createRoot(vt).render(/* @__PURE__ */ Ag.jsx(FS, { totalWithTax: L }));
};
export {
  eT as renderWidget
};
