import { A as D, R as T, _ as st, y as H, d as W, C as ut, p as U, a as tt } from "./compat.module-BTlffX0d.mjs";
function rt(t) {
  var e, a, o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var r = t.length;
    for (e = 0; e < r; e++) t[e] && (a = rt(t[e])) && (o && (o += " "), o += a);
  } else for (a in t) t[a] && (o && (o += " "), o += a);
  return o;
}
function N() {
  for (var t, e, a = 0, o = "", r = arguments.length; a < r; a++) (t = arguments[a]) && (e = rt(t)) && (o && (o += " "), o += e);
  return o;
}
function pt(t) {
  if (typeof document > "u") return;
  let e = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t));
}
pt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var M = (t) => typeof t == "number" && !isNaN(t), A = (t) => typeof t == "string", z = (t) => typeof t == "function", mt = (t) => A(t) || M(t), G = (t) => A(t) || z(t) ? t : null, _t = (t, e) => t === !1 || M(t) && t > 0 ? t : e, V = (t) => U(t) || A(t) || z(t) || M(t);
function gt(t, e, a = 300) {
  let { scrollHeight: o, style: r } = t;
  requestAnimationFrame(() => {
    r.minHeight = "initial", r.height = o + "px", r.transition = `all ${a}ms`, requestAnimationFrame(() => {
      r.height = "0", r.padding = "0", r.margin = "0", setTimeout(e, a);
    });
  });
}
function F({ enter: t, exit: e, appendPosition: a = !1, collapse: o = !0, collapseDuration: r = 300 }) {
  return function({ children: l, position: s, preventExitTransition: d, done: f, nodeRef: u, isIn: _, playToast: x }) {
    let w = a ? `${t}--${s}` : t, k = a ? `${e}--${s}` : e, E = D(0);
    return st(() => {
      let b = u.current, m = w.split(" "), p = (n) => {
        n.target === u.current && (x(), b.removeEventListener("animationend", p), b.removeEventListener("animationcancel", p), E.current === 0 && n.type !== "animationcancel" && b.classList.remove(...m));
      };
      b.classList.add(...m), b.addEventListener("animationend", p), b.addEventListener("animationcancel", p);
    }, []), H(() => {
      let b = u.current, m = () => {
        b.removeEventListener("animationend", m), o ? gt(b, f, r) : f();
      };
      _ || (d ? m() : (E.current = 1, b.className += ` ${k}`, b.addEventListener("animationend", m)));
    }, [_]), T.createElement(T.Fragment, null, l);
  };
}
function ot(t, e) {
  return { content: nt(t.content, t.props), containerId: t.props.containerId, id: t.props.toastId, theme: t.props.theme, type: t.props.type, data: t.props.data || {}, isLoading: t.props.isLoading, icon: t.props.icon, reason: t.removalReason, status: e };
}
function nt(t, e, a = !1) {
  return U(t) && !A(t.type) ? tt(t, { closeToast: e.closeToast, toastProps: e, data: e.data, isPaused: a }) : z(t) ? t({ closeToast: e.closeToast, toastProps: e, data: e.data, isPaused: a }) : t;
}
function vt({ closeToast: t, theme: e, ariaLabel: a = "close" }) {
  return T.createElement("button", { className: `Toastify__close-button Toastify__close-button--${e}`, type: "button", onClick: (o) => {
    o.stopPropagation(), t(!0);
  }, "aria-label": a }, T.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, T.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function bt({ delay: t, isRunning: e, closeToast: a, type: o = "default", hide: r, className: l, controlledProgress: s, progress: d, rtl: f, isIn: u, theme: _ }) {
  let x = r || s && d === 0, w = { animationDuration: `${t}ms`, animationPlayState: e ? "running" : "paused" };
  s && (w.transform = `scaleX(${d})`);
  let k = N("Toastify__progress-bar", s ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${_}`, `Toastify__progress-bar--${o}`, { "Toastify__progress-bar--rtl": f }), E = z(l) ? l({ rtl: f, type: o, defaultClassName: k }) : N(k, l), b = { [s && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: s && d < 1 ? null : () => {
    u && a();
  } };
  return T.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": x }, T.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${_} Toastify__progress-bar--${o}` }), T.createElement("div", { role: "progressbar", "aria-hidden": x ? "true" : "false", "aria-label": "notification timer", className: E, style: w, ...b }));
}
var Tt = 1, it = () => `${Tt++}`;
function ht(t, e, a) {
  let o = 1, r = 0, l = [], s = [], d = e, f = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set(), _ = (n) => (u.add(n), () => u.delete(n)), x = () => {
    s = Array.from(f.values()), u.forEach((n) => n());
  }, w = ({ containerId: n, toastId: i, updateId: c }) => {
    let h = n ? n !== t : t !== 1, C = f.has(i) && c == null;
    return h || C;
  }, k = (n, i) => {
    f.forEach((c) => {
      var h;
      (i == null || i === c.props.toastId) && ((h = c.toggle) == null || h.call(c, n));
    });
  }, E = (n) => {
    var i, c;
    (c = (i = n.props) == null ? void 0 : i.onClose) == null || c.call(i, n.removalReason), n.isActive = !1;
  }, b = (n) => {
    if (n == null) f.forEach(E);
    else {
      let i = f.get(n);
      i && E(i);
    }
    x();
  }, m = () => {
    r -= l.length, l = [];
  }, p = (n) => {
    var i, c;
    let { toastId: h, updateId: C } = n.props, y = C == null;
    n.staleId && f.delete(n.staleId), n.isActive = !0, f.set(h, n), x(), a(ot(n, y ? "added" : "updated")), y && ((c = (i = n.props).onOpen) == null || c.call(i));
  };
  return { id: t, props: d, observe: _, toggle: k, removeToast: b, toasts: f, clearQueue: m, buildToast: (n, i) => {
    if (w(i)) return;
    let { toastId: c, updateId: h, data: C, staleId: y, delay: v } = i, L = h == null;
    L && r++;
    let $ = { ...d, style: d.toastStyle, key: o++, ...Object.fromEntries(Object.entries(i).filter(([P, S]) => S != null)), toastId: c, updateId: h, data: C, isIn: !1, className: G(i.className || d.toastClassName), progressClassName: G(i.progressClassName || d.progressClassName), autoClose: i.isLoading ? !1 : _t(i.autoClose, d.autoClose), closeToast(P) {
      f.get(c).removalReason = P, b(c);
    }, deleteToast() {
      let P = f.get(c);
      if (P != null) {
        if (a(ot(P, "removed")), f.delete(c), r--, r < 0 && (r = 0), l.length > 0) {
          p(l.shift());
          return;
        }
        x();
      }
    } };
    $.closeButton = d.closeButton, i.closeButton === !1 || V(i.closeButton) ? $.closeButton = i.closeButton : i.closeButton === !0 && ($.closeButton = V(d.closeButton) ? d.closeButton : !0);
    let O = { content: n, props: $, staleId: y };
    d.limit && d.limit > 0 && r > d.limit && L ? l.push(O) : M(v) ? setTimeout(() => {
      p(O);
    }, v) : p(O);
  }, setProps(n) {
    d = n;
  }, setToggle: (n, i) => {
    let c = f.get(n);
    c && (c.toggle = i);
  }, isToastActive: (n) => {
    var i;
    return (i = f.get(n)) == null ? void 0 : i.isActive;
  }, getSnapshot: () => s };
}
var I = /* @__PURE__ */ new Map(), R = [], Z = /* @__PURE__ */ new Set(), xt = (t) => Z.forEach((e) => e(t)), lt = () => I.size > 0;
function kt() {
  R.forEach((t) => ct(t.content, t.options)), R = [];
}
var wt = (t, { containerId: e }) => {
  var a;
  return (a = I.get(e || 1)) == null ? void 0 : a.toasts.get(t);
};
function ft(t, e) {
  var a;
  if (e) return !!((a = I.get(e)) != null && a.isToastActive(t));
  let o = !1;
  return I.forEach((r) => {
    r.isToastActive(t) && (o = !0);
  }), o;
}
function It(t) {
  if (!lt()) {
    R = R.filter((e) => t != null && e.options.toastId !== t);
    return;
  }
  if (t == null || mt(t)) I.forEach((e) => {
    e.removeToast(t);
  });
  else if (t && ("containerId" in t || "id" in t)) {
    let e = I.get(t.containerId);
    e ? e.removeToast(t.id) : I.forEach((a) => {
      a.removeToast(t.id);
    });
  }
}
var Et = (t = {}) => {
  I.forEach((e) => {
    e.props.limit && (!t.containerId || e.id === t.containerId) && e.clearQueue();
  });
};
function ct(t, e) {
  V(t) && (lt() || R.push({ content: t, options: e }), I.forEach((a) => {
    a.buildToast(t, e);
  }));
}
function Ct(t) {
  var e;
  (e = I.get(t.containerId || 1)) == null || e.setToggle(t.id, t.fn);
}
function dt(t, e) {
  I.forEach((a) => {
    (e == null || !(e != null && e.containerId) || (e == null ? void 0 : e.containerId) === a.id) && a.toggle(t, e == null ? void 0 : e.id);
  });
}
function Lt(t) {
  let e = t.containerId || 1;
  return { subscribe(a) {
    let o = ht(e, t, xt);
    I.set(e, o);
    let r = o.observe(a);
    return kt(), () => {
      r(), I.delete(e);
    };
  }, setProps(a) {
    var o;
    (o = I.get(e)) == null || o.setProps(a);
  }, getSnapshot() {
    var a;
    return (a = I.get(e)) == null ? void 0 : a.getSnapshot();
  } };
}
function Ot(t) {
  return Z.add(t), () => {
    Z.delete(t);
  };
}
function zt(t) {
  return t && (A(t.toastId) || M(t.toastId)) ? t.toastId : it();
}
function B(t, e) {
  return ct(t, e), e.toastId;
}
function Y(t, e) {
  return { ...e, type: e && e.type || t, toastId: zt(e) };
}
function q(t) {
  return (e, a) => B(e, Y(t, a));
}
function g(t, e) {
  return B(t, Y("default", e));
}
g.loading = (t, e) => B(t, Y("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...e }));
function $t(t, { pending: e, error: a, success: o }, r) {
  let l;
  e && (l = A(e) ? g.loading(e, r) : g.loading(e.render, { ...r, ...e }));
  let s = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, d = (u, _, x) => {
    if (_ == null) {
      g.dismiss(l);
      return;
    }
    let w = { type: u, ...s, ...r, data: x }, k = A(_) ? { render: _ } : _;
    return l ? g.update(l, { ...w, ...k }) : g(k.render, { ...w, ...k }), x;
  }, f = z(t) ? t() : t;
  return f.then((u) => d("success", o, u)).catch((u) => d("error", a, u)), f;
}
g.promise = $t;
g.success = q("success");
g.info = q("info");
g.error = q("error");
g.warning = q("warning");
g.warn = g.warning;
g.dark = (t, e) => B(t, Y("default", { theme: "dark", ...e }));
function Pt(t) {
  It(t);
}
g.dismiss = Pt;
g.clearWaitingQueue = Et;
g.isActive = ft;
g.update = (t, e = {}) => {
  let a = wt(t, e);
  if (a) {
    let { props: o, content: r } = a, l = { delay: 100, ...o, ...e, toastId: e.toastId || t, updateId: it() };
    l.toastId !== t && (l.staleId = t);
    let s = l.render || r;
    delete l.render, B(s, l);
  }
};
g.done = (t) => {
  g.update(t, { progress: 1 });
};
g.onChange = Ot;
g.play = (t) => dt(!0, t);
g.pause = (t) => dt(!1, t);
function Nt(t) {
  var e;
  let { subscribe: a, getSnapshot: o, setProps: r } = D(Lt(t)).current;
  r(t);
  let l = (e = ut(a, o)) == null ? void 0 : e.slice();
  function s(d) {
    if (!l) return [];
    let f = /* @__PURE__ */ new Map();
    return t.newestOnTop && l.reverse(), l.forEach((u) => {
      let { position: _ } = u.props;
      f.has(_) || f.set(_, []), f.get(_).push(u);
    }), Array.from(f, (u) => d(u[0], u[1]));
  }
  return { getToastToRender: s, isToastActive: ft, count: l == null ? void 0 : l.length };
}
function At(t) {
  let [e, a] = W(!1), [o, r] = W(!1), l = D(null), s = D({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current, { autoClose: d, pauseOnHover: f, closeToast: u, onClick: _, closeOnClick: x } = t;
  Ct({ id: t.toastId, containerId: t.containerId, fn: a }), H(() => {
    if (t.pauseOnFocusLoss) return w(), () => {
      k();
    };
  }, [t.pauseOnFocusLoss]);
  function w() {
    document.hasFocus() || p(), window.addEventListener("focus", m), window.addEventListener("blur", p);
  }
  function k() {
    window.removeEventListener("focus", m), window.removeEventListener("blur", p);
  }
  function E(y) {
    if (t.draggable === !0 || t.draggable === y.pointerType) {
      n();
      let v = l.current;
      s.canCloseOnClick = !0, s.canDrag = !0, v.style.transition = "none", t.draggableDirection === "x" ? (s.start = y.clientX, s.removalDistance = v.offsetWidth * (t.draggablePercent / 100)) : (s.start = y.clientY, s.removalDistance = v.offsetHeight * (t.draggablePercent === 80 ? t.draggablePercent * 1.5 : t.draggablePercent) / 100);
    }
  }
  function b(y) {
    let { top: v, bottom: L, left: $, right: O } = l.current.getBoundingClientRect();
    y.nativeEvent.type !== "touchend" && t.pauseOnHover && y.clientX >= $ && y.clientX <= O && y.clientY >= v && y.clientY <= L ? p() : m();
  }
  function m() {
    a(!0);
  }
  function p() {
    a(!1);
  }
  function n() {
    s.didMove = !1, document.addEventListener("pointermove", c), document.addEventListener("pointerup", h);
  }
  function i() {
    document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", h);
  }
  function c(y) {
    let v = l.current;
    if (s.canDrag && v) {
      s.didMove = !0, e && p(), t.draggableDirection === "x" ? s.delta = y.clientX - s.start : s.delta = y.clientY - s.start, s.start !== y.clientX && (s.canCloseOnClick = !1);
      let L = t.draggableDirection === "x" ? `${s.delta}px, var(--y)` : `0, calc(${s.delta}px + var(--y))`;
      v.style.transform = `translate3d(${L},0)`, v.style.opacity = `${1 - Math.abs(s.delta / s.removalDistance)}`;
    }
  }
  function h() {
    i();
    let y = l.current;
    if (s.canDrag && s.didMove && y) {
      if (s.canDrag = !1, Math.abs(s.delta) > s.removalDistance) {
        r(!0), t.closeToast(!0), t.collapseAll();
        return;
      }
      y.style.transition = "transform 0.2s, opacity 0.2s", y.style.removeProperty("transform"), y.style.removeProperty("opacity");
    }
  }
  let C = { onPointerDown: E, onPointerUp: b };
  return d && f && (C.onMouseEnter = p, t.stacked || (C.onMouseLeave = m)), x && (C.onClick = (y) => {
    _ && _(y), s.canCloseOnClick && u(!0);
  }), { playToast: m, pauseToast: p, isRunning: e, preventExitTransition: o, toastRef: l, eventHandlers: C };
}
var Dt = typeof window < "u" ? st : H, K = ({ theme: t, type: e, isLoading: a, ...o }) => T.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${e})`, ...o });
function Rt(t) {
  return T.createElement(K, { ...t }, T.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}
function Mt(t) {
  return T.createElement(K, { ...t }, T.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}
function Bt(t) {
  return T.createElement(K, { ...t }, T.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}
function St(t) {
  return T.createElement(K, { ...t }, T.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}
function Xt() {
  return T.createElement("div", { className: "Toastify__spinner" });
}
var J = { info: Mt, warning: Rt, success: Bt, error: St, spinner: Xt }, Ht = (t) => t in J;
function Ut({ theme: t, type: e, isLoading: a, icon: o }) {
  let r = null, l = { theme: t, type: e };
  return o === !1 || (z(o) ? r = o({ ...l, isLoading: a }) : U(o) ? r = tt(o, l) : a ? r = J.spinner() : Ht(e) && (r = J[e](l))), r;
}
var Ft = (t) => {
  let { isRunning: e, preventExitTransition: a, toastRef: o, eventHandlers: r, playToast: l } = At(t), { closeButton: s, children: d, autoClose: f, onClick: u, type: _, hideProgressBar: x, closeToast: w, transition: k, position: E, className: b, style: m, progressClassName: p, updateId: n, role: i, progress: c, rtl: h, toastId: C, deleteToast: y, isIn: v, isLoading: L, closeOnClick: $, theme: O, ariaLabel: P } = t, S = N("Toastify__toast", `Toastify__toast-theme--${O}`, `Toastify__toast--${_}`, { "Toastify__toast--rtl": h }, { "Toastify__toast--close-on-click": $ }), yt = z(b) ? b({ rtl: h, position: E, type: _, defaultClassName: S }) : N(S, b), et = Ut(t), at = !!c || !f, j = { closeToast: w, type: _, theme: O }, X = null;
  return s === !1 || (z(s) ? X = s(j) : U(s) ? X = tt(s, j) : X = vt(j)), T.createElement(k, { isIn: v, done: y, position: E, preventExitTransition: a, nodeRef: o, playToast: l }, T.createElement("div", { id: C, tabIndex: 0, onClick: u, "data-in": v, className: yt, ...r, style: m, ref: o, ...v && { role: i, "aria-label": P } }, et != null && T.createElement("div", { className: N("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !L }) }, et), nt(d, t, !e), X, !t.customProgressBar && T.createElement(bt, { ...n && !at ? { key: `p-${n}` } : {}, rtl: h, theme: O, delay: f, isRunning: e, isIn: v, closeToast: w, hide: x, type: _, className: p, controlledProgress: at, progress: c || 0 })));
}, Q = (t, e = !1) => ({ enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: e }), Yt = F(Q("bounce", !0)), Qt = F(Q("slide", !0)), jt = F(Q("zoom")), Wt = F(Q("flip")), qt = { position: "top-right", transition: Yt, autoClose: 5e3, closeButton: !0, pauseOnHover: !0, pauseOnFocusLoss: !0, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light", "aria-label": "Notifications Alt+T", hotKeys: (t) => t.altKey && t.code === "KeyT" };
function Gt(t) {
  let e = { ...qt, ...t }, a = t.stacked, [o, r] = W(!0), l = D(null), { getToastToRender: s, isToastActive: d, count: f } = Nt(e), { className: u, style: _, rtl: x, containerId: w, hotKeys: k } = e;
  function E(m) {
    let p = N("Toastify__toast-container", `Toastify__toast-container--${m}`, { "Toastify__toast-container--rtl": x });
    return z(u) ? u({ position: m, rtl: x, defaultClassName: p }) : N(p, G(u));
  }
  function b() {
    a && (r(!0), g.play());
  }
  return Dt(() => {
    var m;
    if (a) {
      let p = l.current.querySelectorAll('[data-in="true"]'), n = 12, i = (m = e.position) == null ? void 0 : m.includes("top"), c = 0, h = 0;
      Array.from(p).reverse().forEach((C, y) => {
        let v = C;
        v.classList.add("Toastify__toast--stacked"), y > 0 && (v.dataset.collapsed = `${o}`), v.dataset.pos || (v.dataset.pos = i ? "top" : "bot");
        let L = c * (o ? 0.2 : 1) + (o ? 0 : n * y);
        v.style.setProperty("--y", `${i ? L : L * -1}px`), v.style.setProperty("--g", `${n}`), v.style.setProperty("--s", `${1 - (o ? h : 0)}`), c += v.offsetHeight, h += 0.025;
      });
    }
  }, [o, f, a]), H(() => {
    function m(p) {
      var n;
      let i = l.current;
      k(p) && ((n = i.querySelector('[tabIndex="0"]')) == null || n.focus(), r(!1), g.pause()), p.key === "Escape" && (document.activeElement === i || i != null && i.contains(document.activeElement)) && (r(!0), g.play());
    }
    return document.addEventListener("keydown", m), () => {
      document.removeEventListener("keydown", m);
    };
  }, [k]), T.createElement("section", { ref: l, className: "Toastify", id: w, onMouseEnter: () => {
    a && (r(!1), g.pause());
  }, onMouseLeave: b, "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text", "aria-label": e["aria-label"] }, s((m, p) => {
    let n = p.length ? { ..._ } : { ..._, pointerEvents: "none" };
    return T.createElement("div", { tabIndex: -1, className: E(m), "data-stacked": a, style: n, key: `c-${m}` }, p.map(({ content: i, props: c }) => T.createElement(Ft, { ...c, stacked: a, collapseAll: b, isIn: d(c.toastId, c.containerId), key: `t-${c.key}` }, i)));
  }));
}
export {
  F as $,
  Gt as L,
  J as W,
  gt as Z,
  N as c,
  Yt as l,
  Qt as m,
  jt as p,
  Wt as u,
  g as y
};
