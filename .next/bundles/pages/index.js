module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([4],{

/***/ "./components/Layouts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/home/juliet/App/components/Layouts.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layouts = function (_React$Component) {
  _inherits(Layouts, _React$Component);

  function Layouts() {
    _classCallCheck(this, Layouts);

    return _possibleConstructorReturn(this, (Layouts.__proto__ || Object.getPrototypeOf(Layouts)).apply(this, arguments));
  }

  _createClass(Layouts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        window.addEventListener('load', function () {
          navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            console.log('SW registered: ', registration);
            Notification.requestPermission().then(function (result) {
              console.log(result);
              navigator.serviceWorker.ready.then(function (registration) {
                if (!registration.pushManager) {
                  alert("Push Unsupported");
                  return;
                }
                var vapidPublicKey = 'BPCnADjDVFsexLnj6ESRHuu9YlDwg7P8b8k4_mi48LB8UDAYvTpAWYfBofUD8F9LWkh6U0dJqX0kCoF-yWb-tbM';
                var convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
                function urlBase64ToUint8Array(base64String) {
                  var padding = '='.repeat((4 - base64String.length % 4) % 4);
                  var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
                  var rawData = window.atob(base64);
                  var outputArray = new Uint8Array(rawData.length);
                  for (var i = 0; i < rawData.length; ++i) {
                    outputArray[i] = rawData.charCodeAt(i);
                  }
                  return outputArray;
                }
                registration.pushManager.subscribe({
                  userVisibleOnly: true, // Always display notifications
                  applicationServerKey: convertedVapidKey
                }).then(function (subscription) {
                  return fetch('/register', {
                    body: subscription,
                    method: 'POST'
                  });
                }).catch(function (err) {
                  return console.error('Push subscription error: ', err);
                });
              });
            }).catch(function (registrationError) {
              console.log('SW registration failed: ', registrationError);
            });
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1299345167',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        },
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1299345167',
          css: '{.no-touch a:link:hover,.no-touch;.no-touch a:link:active,.no-touch;}*{margin:0;padding:0;}article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;*display:inline;*zoom:1;}body{font-smoothing:antialiased;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-o-font-smoothing:antialiased;}b,strong{font-weight:bold;}h1,h2,h3,h4,h5,h6{font-weight:normal;}a:active,a:hover,a:focus{outline:0;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}img,a img{border:0;-ms-interpolation-mode:bicubic;}table{border-collapse:collapse;border-spacing:0;}fieldset{border:0;margin:0;padding:0;}textarea{resize:none;}textarea{overflow:hidden;}input:focus,select:focus,textarea:focus{outline:0;}input[type=search]{-webkit-appearance:textfield;}::-webkit-search-cancel-button{display:none;}.gradient{-webkit-filter:none;-webkit-filter:none;filter:none;}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%;}svg{display:block;}.ir,.logo,.logo-sm{background-color:transparent;border:0;display:block;overflow:hidden;text-indent:-1000em;}.clearfix:after,.readings:after,.rating:after,.card>footer:after,.summary-grid:after,.card.report:after,.card.report .report-card:after,.card.pre-log:after,.card.pre-log .text>footer:after,.form-row:after,.sensor-alerts li:after,.modal>footer:after{content:".";display:block;height:0;line-height:0;clear:both;visibility:hidden;}.clearfix,.readings,.rating,.card>footer,.summary-grid,.card.report,.card.report .report-card,.card.pre-log,.card.pre-log .text>footer,.form-row,.sensor-alerts li,.modal>footer{zoom:1;}.narrow-down-only{display:none;}@media (max-width:1199px){.narrow-down-only{display:block;}}.mob-only{display:none;}@media (max-width:699px){.mob-only{display:block;}}@media (max-width:699px){.mob-hide{display:none;}}html{background:#f8f7f6;}body{background:#f8f7f6;min-width:320px;overflow-x:hidden;overflow-y:auto;position:relative;}@media (max-width:1199px){body.menu-is-open{max-height:100vh;overflow-y:hidden;}}.content{margin-left:280px;padding:60px 60px 30px;}@media (max-width:1199px){.content{margin-left:0;margin-top:56px;padding:38px 36px 14px;}}@media (max-width:699px){.content{margin-top:44px;padding:16px 16px 0;}}.center{margin:0 auto;max-width:1280px;}body.pre-log .content{-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:0 !important;margin-top:0 !important;min-height:100vh;overflow:hidden;padding:0 60px;position:relative;z-index:0;}@media (max-width:1199px){body.pre-log .content{padding:0 36px;}}@media (max-width:699px){body.pre-log .content{padding:0 16px;}}body.pre-log .center{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:1040px;min-height:100vh;overflow:hidden;padding-bottom:54px;position:relative;z-index:2;}body.pre-log .center .header{position:relative;z-index:2;}@media (max-width:699px){body.pre-log .center{padding-bottom:34px;}}body.pre-log .img-full{background-color:#f8f7f6;background-position:center center;background-repeat:no-repeat;background-size:cover;bottom:0;height:60vh;left:0;position:absolute;right:0;width:100%;z-index:1;}body.pre-log .img-full:after{background:-o-linear-gradient(top,#f8f7f6 0%,rgba(248,247,246,0) 100%);background:-webkit-gradient(linear,left top,left bottom,from(#f8f7f6),to(rgba(248,247,246,0)));background:linear-gradient(to bottom,#f8f7f6 0%,rgba(248,247,246,0) 100%);content:"";height:30vh;left:0;position:absolute;right:0;top:0;z-index:1;}body.empty .content{-webkit-box-sizing:border-box;box-sizing:border-box;min-height:100vh;overflow:hidden;position:relative;z-index:0;}body.empty .center{position:relative;z-index:2;}body.empty .empty-text p{margin:12px 0 0 0;max-width:640px;}body.empty .empty-text .btn{margin:24px 0 0 0;}@media (max-width:699px){body.empty .empty-text{padding:0 8px;}body.empty .empty-text .btn{margin-top:20px;}}body.empty .img-full{background-color:#f8f7f6;background-position:center center;background-repeat:no-repeat;background-size:cover;bottom:0;height:60vh;left:0;position:absolute;right:0;width:100%;z-index:1;}body.empty .img-full:after{background:-o-linear-gradient(top,#f8f7f6 0%,rgba(248,247,246,0) 100%);background:-webkit-gradient(linear,left top,left bottom,from(#f8f7f6),to(rgba(248,247,246,0)));background:linear-gradient(to bottom,#f8f7f6 0%,rgba(248,247,246,0) 100%);content:"";height:30vh;left:0;position:absolute;right:0;top:0;z-index:1;}@media (max-width:699px){body.empty .img-full{height:50vh;}body.empty .img-full:after{height:25vh;}}body{font:400 16px/28px "Roboto",sans-serif;color:#333;text-align:left;}h1{color:#777;font:300 36px/42px "Roboto",sans-serif;margin:0 0 48px 0;}h1.lg{color:#333;font-size:48px;line-height:56px;margin-bottom:4px;text-align:center;}h1.sm{font-size:16px;font-weight:400;line-height:22px;margin:-12px 0 24px 0;}@media (max-width:1199px){h1{margin-bottom:38px;}}@media (max-width:699px){h1{font-size:16px;font-weight:400;line-height:22px;margin-bottom:16px;padding-left:8px;}h1.lg{font-size:24px;font-weight:300;line-height:30px;margin-bottom:0;padding-left:0;}h1.sm{margin:0 0 16px 0;}}h2{margin:0;font:700 24px/30px "Merriweather",serif;color:#333;}@media (max-width:699px){h2.secondary{font-size:18px;line-height:24px;}}h2.accent{color:#abcc75;}h2 .sensor{margin:-4px 12px;position:relative;top:-3px;}h3{margin:0;font:700 18px/24px "Merriweather",serif;color:#333;}h3 .sensor{margin:-3px 12px;position:relative;top:-2px;}h4{margin:0;font:400 14px/22px "Roboto",sans-serif;color:#777;}h4.lg{font-size:16px;line-height:28px;text-align:center;}@media (max-width:699px){h4.lg{font-size:14px;line-height:22px;}}h5{margin:0;font:400 12px/18px "Roboto",sans-serif;color:#777;}h6{margin:0;font:700 11px/13px "Roboto",sans-serif;color:#333;text-transform:uppercase;-webkit-letter-spacing:.1em;-moz-letter-spacing:.1em;-ms-letter-spacing:.1em;letter-spacing:.1em;}p{margin:24px 0 0 0;}p.sm{margin-top:18px;font-size:14px;line-height:22px;}@media (max-width:699px){p{margin-top:18px;font-size:14px;line-height:22px;}p.sm{margin-top:16px;font-size:12px;line-height:18px;}}p.light,span.light{color:#777;}ul,ol{color:#777;font-size:14px;line-height:22px;margin:24px 0 0 0;}ul>li,ol>li{margin-bottom:10px;}ul>li:last-child,ol>li:last-child{margin-bottom:0;}@media (max-width:699px){ul,ol{margin-top:20px;}}ul>li{list-style:none;padding-left:30px;background:transparent url("../static/img/bullet.svg") no-repeat 3px 8px;}ul.check>li{background:transparent url("../static/img/bullet-check.svg") no-repeat left 6px;}ul.check>li.bullet{background:transparent url("../static/img/bullet.svg") no-repeat 3px 8px;}ul.check>li.none{background-image:none;}ol{margin-left:16px;}ol>li{padding-left:14px;}label,dt{display:block;margin:0;font:700 11px/13px "Roboto",sans-serif;color:#333;text-transform:uppercase;-webkit-letter-spacing:.1em;-moz-letter-spacing:.1em;-ms-letter-spacing:.1em;letter-spacing:.1em;}label.hidden{visibility:hidden;}@media (max-width:699px){label.hidden{display:none !important;margin:0;padding:0;}}dl{margin:24px 0 0 0;font-size:12px;line-height:18px;color:#777;}dl dt{margin-bottom:2px;}dl dd{margin-bottom:16px;}dl dd:last-child{margin-bottom:0;}dl.col4{-webkit-column-count:4;-moz-column-count:4;-webkit-column-count:4;column-count:4;-webkit-column-width:25%;-moz-column-width:25%;-webkit-column-width:25%;column-width:25%;}dl.col4 dd{margin-bottom:0;}@media (max-width:699px){dl{margin-top:20px;}dl.col4{margin-right:-12px;-webkit-column-count:2;-moz-column-count:2;-webkit-column-count:2;column-count:2;-webkit-column-width:50%;-moz-column-width:50%;-webkit-column-width:50%;column-width:50%;}dl.col4 dd{margin-bottom:0;}dl.col4 dd:nth-child(4n+2){margin-bottom:16px;}}b,strong{font-weight:700;}.logo{width:117px;height:60px;background:transparent url("../static/img/logo.svg") no-repeat left top;}.logo-sm{width:174px;height:17px;float:left;background:transparent url("../static/img/logo-sm.svg") no-repeat left top;}.header{position:fixed;top:0;left:0;right:0;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box;height:56px;padding:19px 36px 0;background:#fff;border-bottom:solid 1px rgba(0,0,0,0.04);background-clip:padding-box;}@media (min-width:1200px){.header{display:none;}}@media (max-width:699px){.header{height:44px;padding:13px 24px 0;}}.open-menu{float:right;margin-top:2px;height:14px;line-height:14px;}.open-menu .label{display:inline-block;vertical-align:middle;padding-right:14px;font-size:14px;line-height:14px;color:#777;-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}.open-menu img,.open-menu svg{display:inline-block;vertical-align:middle;-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}.no-touch .open-menu:hover .label{color:#333;}.no-touch .open-menu:hover svg path{fill:#191919;}.open-menu:active .label{color:#000;}.open-menu:active svg path{fill:#000;}@media (max-width:699px){.open-menu{margin-top:1px;}.open-menu .label{display:none;}}.menu{position:fixed;top:0;left:0;bottom:0;z-index:102;-webkit-box-sizing:border-box;box-sizing:border-box;width:280px;background:#fff;border-right:solid 1px rgba(0,0,0,0.04);background-clip:padding-box;}.menu>header{-webkit-box-sizing:border-box;box-sizing:border-box;height:120px;margin:0 18px;padding:30px 12px;border-bottom:solid 1px rgba(0,0,0,0.06);}.menu>header h6{color:#abcc75;padding-top:22px;display:none;}.menu>header .x{position:absolute;top:21px;right:30px;z-index:1;width:14px;height:14px;display:none;}.menu>header .selectboxit-container{width:calc(100% + 48px);margin:20px -24px 0;position:relative;z-index:0;}.menu>footer{position:fixed;bottom:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:280px;height:56px;padding:0 30px;background:#fff;}.menu>footer .selectboxit-container{width:calc(100% + 36px);margin:6px -18px;}.menu>footer:before{content:"";position:absolute;top:-24px;left:0;right:0;height:24px;background:-webkit-gradient(linear,left bottom,left top,from(white),to(rgba(255,255,255,0)));background:-o-linear-gradient(bottom,white 0%,rgba(255,255,255,0) 100%);background:linear-gradient(to top,white 0%,rgba(255,255,255,0) 100%);}.menu>footer:after{content:"";position:absolute;top:-1px;left:18px;right:18px;height:1px;border-bottom:solid 1px rgba(0,0,0,0.06);}.menu .nav{-webkit-box-sizing:border-box;box-sizing:border-box;padding:24px 0 24px;height:calc(100vh - 176px);overflow-y:scroll;}.ie .menu .nav .nav-links:last-child{margin-bottom:24px;}.menu .nav h6{margin:30px 0 8px;padding:0 0 0 30px;}.menu.multi-whare>header{height:164px;}.menu.multi-whare .nav{height:calc(100vh - 220px);}@-webkit-keyframes overlay-in 0%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}@-webkit-keyframes overlay-in 1%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:0;}@-webkit-keyframes overlay-in 100%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}@-webkit-keyframes overlay-in{0%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}1%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:0;}100%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}@keyframes overlay-in{0%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}1%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:0;}100%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}@-webkit-keyframes overlay-out{0%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}99%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:0;}100%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}}@-webkit-keyframes overlay-out{0%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}99%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:0;}100%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}}@keyframes overlay-out{0%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}99%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:0;}100%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}}@-webkit-keyframes menu-in{0%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}100%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}@-webkit-keyframes menu-in{0%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}100%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}@keyframes menu-in{0%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}100%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}@-webkit-keyframes menu-out{0%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}100%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}}@-webkit-keyframes menu-out{0%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}100%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}}@keyframes menu-out{0%{-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}100%{-webkit-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}}@media (max-width:1199px){.overlay{position:fixed;top:0;right:0;left:0;bottom:0;z-index:101;background:rgba(248,247,246,0.8);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}.menu-is-open .overlay{-webkit-animation:overlay-in .3s;-webkit-animation:overlay-in .3s;animation:overlay-in .3s;-webkit-transform:translateX(0);-ms-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}.menu-is-closing .overlay{-webkit-animation:overlay-out .3s;-webkit-animation:overlay-out .3s;animation:overlay-out .3s;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}}.menu-is-open .menu{-webkit-animation:menu-in .3s;-webkit-animation:menu-in .3s;animation:menu-in .3s;-webkit-transform:translateX(0);-ms-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}.menu-is-closing .menu{-webkit-animation:menu-out .3s;-webkit-animation:menu-out .3s;animation:menu-out .3s;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}@media (max-width:1199px){.menu{left:auto;right:0;width:calc(50% + 1px);border-right:0;border-left:solid 1px rgba(0,0,0,0.04);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);opacity:0;}.menu>header{height:56px;padding:0 12px;}.menu>header .logo{display:none;}.menu>header h6{display:block;}.menu>header .x{display:block;}.menu>header .selectboxit-container{width:calc(100% - 20px);margin-top:0;top:8px;}.menu>footer{left:auto;right:0;width:100%;}.menu .nav{height:calc(100vh - 112px);padding-bottom:96px;}.menu.multi-whare>header{height:56px;}.menu.multi-whare .nav{height:calc(100vh - 112px);padding-bottom:48px;}}@media (max-width:699px){.menu{left:0;width:100%;border-left:0;}.menu>header{height:44px;margin:0 16px;padding:0 14px;}.menu>header h6{padding-top:16px;}.menu>header .x{top:15px;right:24px;}.menu>header .selectboxit-container{margin-top:0;top:0;}.menu>header .selectboxit-container .selectboxit-btn.whare-picker .selectboxit-text{font-size:14px !important;}.menu>footer{left:0;width:100%;height:44px;padding:0 26px;}.menu>footer:after{left:16px;right:16px;}.menu>footer .selectboxit-container{margin:0 -18px;}.menu .nav{height:calc(100vh - 88px);padding-bottom:96px !important;}.menu.multi-whare>header{height:44px;}.menu.multi-whare .nav{height:calc(100vh - 88px);}}body.pre-log .header{position:static;height:auto;padding:60px 0 48px 0;background:transparent;border-bottom:0;display:block !important;text-align:center;}body.pre-log .header .logo{margin:0 auto 30px;}body.pre-log .header .btn{margin:32px auto;}@media (max-width:699px){body.pre-log .header{padding:13px 0 16px 0;}body.pre-log .header .logo{width:174px;height:17px;margin:0 auto 18px;background:transparent url("../static/img/logo-sm.svg") no-repeat left top;}body.pre-log .header .btn{margin:24px auto;}}body.pre-log footer.lang{position:absolute;left:50%;bottom:18px;width:320px;height:44px;margin-left:-184px;}body.pre-log footer.lang h6{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;float:left;width:50%;height:44px;line-height:46px;text-align:right;overflow:hidden;}body.pre-log footer.lang .selectboxit-container{float:right;width:50%;}@media (max-width:699px){body.pre-log footer.lang{bottom:2px;}}a:link,a:visited{color:#333;text-decoration:none;-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}a:visited:hover{color:#191919;text-decoration:none;}a:visited:active{color:#000;text-decoration:none;}a.underline{position:relative;display:inline-block;font-size:14px;line-height:22px;font-weight:700;}a.underline:after{content:"";position:absolute;left:0;right:0;bottom:2px;height:0;border-bottom:solid 1px #333;}.no-touch a.underline:hover:after{border-bottom-color:#191919;}.no-touch a.underline:active:after{border-bottom-color:#000;}a.btn{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;height:44px;padding:0 24px;font-size:14px;line-height:44px;color:#fff;background:#333;border-radius:3px;overflow:hidden;}a.btn img,a.btn svg{display:inline-block;vertical-align:middle;margin-left:-4px;margin-right:10px;position:relative;top:-1px;}a.btn img path,a.btn svg path{fill:#fff;}.no-touch a.btn:hover{color:#fff;background:#191919;}.no-touch a.btn:active{color:#fff;background:#000;}a.btn.disabled{background:rgba(0,0,0,0.16);cursor:not-allowed;}.no-touch a.btn.disabled:hover{background:rgba(0,0,0,0.16);}.no-touch a.btn.disabled:active{background:rgba(0,0,0,0.16);}a.btn.icon-only img,a.btn.icon-only svg{margin:0 -4px;}a.btn.small{height:32px;padding:0 18px;line-height:32px;}a.btn.alert{background:#ea6720;}.no-touch a.btn.alert:hover{background:#d7550f;}.no-touch a.btn.alert:active{background:#c24a0a;}a.btn.alert.disabled{background:rgba(0,0,0,0.16);}.no-touch a.btn.alert.disabled:hover{background:rgba(0,0,0,0.16);}.no-touch a.btn.alert.disabled:active{background:rgba(0,0,0,0.16);}a.btn-add{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;height:52px;padding:0 30px;font-size:14px;line-height:52px;font-weight:bold;color:#abcc75;background:transparent;border:solid 1px rgba(0,0,0,0.06);border-radius:5px;overflow:hidden;}a.btn-add.append-table{margin-bottom:6px;}a.btn-add.append-card{margin-bottom:30px;}a.btn-add.append-top{margin-bottom:24px;}a.btn-add.append-middle{margin-top:24px;margin-bottom:24px;}a.btn-add img,a.btn-add svg{display:inline-block;vertical-align:middle;margin-right:16px;position:relative;top:-1px;}a.btn-add img path,a.btn-add svg path{fill:#abcc75;-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}.no-touch a.btn-add:hover{color:#96b85c;border:solid 1px rgba(0,0,0,0.08);}.no-touch a.btn-add:hover svg path{fill:#96b85c;}.no-touch a.btn-add:active{color:#86ab4a;border:solid 1px rgba(0,0,0,0.16);}.no-touch a.btn-add:active svg path{fill:#86ab4a;}@media (max-width:1199px){a.btn-add.append-card{margin-bottom:24px;}}@media (max-width:699px){a.btn-add{height:44px;line-height:44px;padding:0 14px;}a.btn-add img,a.btn-add svg{margin-right:10px;}a.btn-add.append-table{margin-left:-12px;margin-right:-12px;}a.btn-add.append-card{margin-bottom:16px;padding:0 26px;}a.btn-add.append-top{margin-left:-12px;margin-right:-12px;margin-bottom:20px;}a.btn-add.append-middle{margin-top:20px;margin-left:-12px;margin-right:-12px;margin-bottom:20px;}}a.head-action{display:block;}a.head-action svg path{fill:rgba(0,0,0,0.16);-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}.no-touch a.head-action:hover svg path{fill:rgba(0,0,0,0.24);}.no-touch a.head-action:active svg path{fill:rgba(0,0,0,0.32);}a.head-action.inv svg path{fill:rgba(255,255,255,0.5);-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}.no-touch a.head-action.inv:hover svg path{fill:rgba(255,255,255,0.75);}.no-touch a.head-action.inv:active svg path{fill:white;}a.i{display:inline-block;vertical-align:middle;width:16px;height:16px;margin-left:6px;position:relative;top:-1px;}a.i img,a.i svg{display:inline-block;}a.i img path,a.i svg path{fill:rgba(0,0,0,0.16);-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}.no-touch a.i:hover svg path{fill:rgba(0,0,0,0.24);}.no-touch a.i:active svg path{fill:rgba(0,0,0,0.32);}a.del{display:inline-block;height:18px;font-size:14px;line-height:18px;font-weight:bold;color:#ea6720;}a.del img,a.del svg{display:inline-block;vertical-align:middle;margin-right:10px;position:relative;top:-1px;}a.del svg path{-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}.no-touch a.del:hover{color:#d7550f;}.no-touch a.del:hover svg path{fill:#d7550f;}.no-touch a.del:active{color:#c24a0a;}.no-touch a.del:active svg path{fill:#c24a0a;}a.del.table-action svg{margin-right:0 !important;}a.cancel{display:inline-block;height:18px;font-size:14px;line-height:18px;font-weight:bold;color:#777;}.no-touch a.cancel:hover{color:#333;}.no-touch a.cancel:active{color:#000;}a.edit.table-action svg path{fill:#abcc75;-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}.no-touch a.edit.table-action:hover svg path{fill:#96b85c;}.no-touch a.edit.table-action:active svg path{fill:#86ab4a;}a.back{display:inline-block;vertical-align:middle;width:19px;height:14px;margin-right:18px;position:relative;top:-3px;}a.back img,a.back svg{display:inline-block;}a.back img path,a.back svg path{fill:rgba(0,0,0,0.16);-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}.no-touch a.back:hover svg path{fill:rgba(0,0,0,0.24);}.no-touch a.back:active svg path{fill:rgba(0,0,0,0.32);}.pagination{margin:24px 0 6px;text-align:center;font-size:0;line-height:0;}.pagination .btn{margin:0 4px !important;vertical-align:middle;}.pagination .pages{display:inline-block;vertical-align:middle;margin:0 20px;}.pagination .pages a{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;vertical-align:middle;height:44px;width:44px;font-size:14px;line-height:44px;color:#777;border:solid 1px rgba(0,0,0,0.06);border-right:0;}.pagination .pages a:first-child{border-radius:3px 0 0 3px;}.pagination .pages a:last-child{border-right:solid 1px rgba(0,0,0,0.06);border-radius:0 3px 3px 0;}.pagination .pages a.current{font-weight:700;color:#333;}@media (max-width:699px){.pagination{margin:20px -4px 0;}.pagination .btn{display:inline-block !important;width:calc(50% - 8px);margin:0 4px 6px !important;}.pagination .pages{margin:12px 0 18px 0;}}span.sensor,a.sensor{display:inline-block;height:32px;padding:0 16px;font-family:"Roboto",sans-serif !important;font-size:14px;line-height:32px;font-weight:700;color:#fff;background:#abcc75;border-radius:16px;}.no-touch a.sensor:hover{background:#96b85c;}.no-touch a.sensor:active{background:#86ab4a;}.loader{position:absolute;top:50%;left:50%;margin:-6px 0 0 -6px;display:block;width:12px;height:12px;background:rgba(0,0,0,0.16);border-radius:50%;-webkit-animation:load-bounce .8s ease 0s infinite;-webkit-animation:load-bounce .8s ease 0s infinite;animation:load-bounce .8s ease 0s infinite;}@-webkit-keyframes load-bounce{0%,100%{-webkit-transform:scale(0);-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:0;}50%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@-webkit-keyframes load-bounce{0%,100%{-webkit-transform:scale(0);-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:0;}50%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@keyframes load-bounce{0%,100%{-webkit-transform:scale(0);-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:0;}50%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}.readings{-webkit-box-sizing:border-box;box-sizing:border-box;margin:30px 0 0;}.reading{float:left;}.reading .vis{position:relative;display:block;width:72px;height:72px;margin-bottom:12px;border-radius:50%;-webkit-transition:background-color ease .3s;-o-transition:background-color ease .3s;-webkit-transition:background-color ease .3s;transition:background-color ease .3s;background:#4d9d2e;}.reading .value{font-size:36px;line-height:42px;font-weight:bold;-webkit-letter-spacing:-.05em;-moz-letter-spacing:-.05em;-ms-letter-spacing:-.05em;letter-spacing:-.05em;-webkit-transition:color ease .3s;-o-transition:color ease .3s;-webkit-transition:color ease .3s;transition:color ease .3s;margin-left:-1px;color:#4d9d2e;}@media (max-width:699px){.reading .value{font-size:32px;line-height:38px;}}.reading .label{display:block;margin:8px 0 0;font:700 11px/13px "Roboto",sans-serif;color:#333;text-transform:uppercase;-webkit-letter-spacing:.1em;-moz-letter-spacing:.1em;-ms-letter-spacing:.1em;letter-spacing:.1em;-webkit-transition:color ease .3s;-o-transition:color ease .3s;-webkit-transition:color ease .3s;transition:color ease .3s;}@media (max-width:699px){.reading .label{margin-top:4px;}}.reading .time{display:block;margin-top:2px;font-size:12px;line-height:18px;color:#777;}.reading.temp-high-2b .vis{background:#e38e14 url("../static/img/scale/temp-high-2b.svg") no-repeat center center;}.reading.temp-high-2b .value{color:#e38e14;}.reading.temp-high-2a .vis{background:#e38e14 url("../static/img/scale/temp-high-2a.svg") no-repeat center center;}.reading.temp-high-2a .value{color:#e38e14;}.reading.temp-high-1b .vis{background:#e0b50a url("../static/img/scale/temp-high-1b.svg") no-repeat center center;}.reading.temp-high-1b .value{color:#e0b50a;}.reading.temp-high-1a .vis{background:#e0b50a url("../static/img/scale/temp-high-1a.svg") no-repeat center center;}.reading.temp-high-1a .value{color:#e0b50a;}.reading.temp-mid-b .vis{background:#4d9d2e url("../static/img/scale/temp-mid-b.svg") no-repeat center center;}.reading.temp-mid-b .value{color:#4d9d2e;}.reading.temp-mid-a .vis{background:#4d9d2e url("../static/img/scale/temp-mid-a.svg") no-repeat center center;}.reading.temp-mid-a .value{color:#4d9d2e;}.reading.temp-low-1a .vis{background:#2d8d73 url("../static/img/scale/temp-low-1a.svg") no-repeat center center;}.reading.temp-low-1a .value{color:#2d8d73;}.reading.temp-low-1b .vis{background:#2d8d73 url("../static/img/scale/temp-low-1b.svg") no-repeat center center;}.reading.temp-low-1b .value{color:#2d8d73;}.reading.temp-low-2a .vis{background:#356bb5 url("../static/img/scale/temp-low-2a.svg") no-repeat center center;}.reading.temp-low-2a .value{color:#356bb5;}.reading.temp-low-2b .vis{background:#356bb5 url("../static/img/scale/temp-low-2b.svg") no-repeat center center;}.reading.temp-low-2b .value{color:#356bb5;}.reading.hum-high-2b .vis{background:#13a3bd url("../static/img/scale/hum-high-2b.svg") no-repeat center center;}.reading.hum-high-2b .value{color:#13a3bd;}.reading.hum-high-2a .vis{background:#13a3bd url("../static/img/scale/hum-high-2a.svg") no-repeat center center;}.reading.hum-high-2a .value{color:#13a3bd;}.reading.hum-high-1b .vis{background:#30a076 url("../static/img/scale/hum-high-1b.svg") no-repeat center center;}.reading.hum-high-1b .value{color:#30a076;}.reading.hum-high-1a .vis{background:#30a076 url("../static/img/scale/hum-high-1a.svg") no-repeat center center;}.reading.hum-high-1a .value{color:#30a076;}.reading.hum-mid-b .vis{background:#4d9d2e url("../static/img/scale/hum-mid-b.svg") no-repeat center center;}.reading.hum-mid-b .value{color:#4d9d2e;}.reading.hum-mid-a .vis{background:#4d9d2e url("../static/img/scale/hum-mid-a.svg") no-repeat center center;}.reading.hum-mid-a .value{color:#4d9d2e;}.reading.dew-high-2 .vis{background:#13a3bd url("../static/img/scale/dew-high-2.svg") no-repeat center calc(50% - 1px);}.reading.dew-high-2 .value{color:#13a3bd;}.reading.dew-high-1 .vis{background:#30a076 url("../static/img/scale/dew-high-1.svg") no-repeat center calc(50% - 1px);}.reading.dew-high-1 .value{color:#30a076;}.reading.dew-mid .vis{background:#4d9d2e url("../static/img/scale/dew-mid.svg") no-repeat center calc(50% - 1px);}.reading.dew-mid .value{color:#4d9d2e;}.reading.expired .vis,.expired .reading .vis{background-color:rgba(0,0,0,0.16) !important;}.reading.expired .value,.expired .reading .value{color:rgba(0,0,0,0.16) !important;}.reading.expired .label,.expired .reading .label{color:#777;}.loader{background:#fff;display:none;}.reading.loading .vis,.loading .reading .vis{background-color:rgba(0,0,0,0.16) !important;background-image:none !important;}.reading.loading .vis .loader,.loading .reading .vis .loader{display:block;}.reading.loading .value,.loading .reading .value{color:rgba(0,0,0,0.16) !important;}.rating{-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:20px;}.rating .grade{display:block;font-size:80px;line-height:94px;font-weight:700;white-spacing:nowrap;margin-left:-2px;color:#4d9d2e;}.rating .value{display:block;font-size:36px;line-height:42px;font-weight:300;-webkit-letter-spacing:-.02em;-moz-letter-spacing:-.02em;-ms-letter-spacing:-.02em;letter-spacing:-.02em;-webkit-transition:color ease .3s;-o-transition:color ease .3s;-webkit-transition:color ease .3s;transition:color ease .3s;margin-left:-2px;color:#4d9d2e;}.rating .label{display:block;margin:8px 0 0;font:700 11px/13px "Roboto",sans-serif;color:#333;text-transform:uppercase;-webkit-letter-spacing:.1em;-moz-letter-spacing:.1em;-ms-letter-spacing:.1em;letter-spacing:.1em;-webkit-transition:color ease .3s;-o-transition:color ease .3s;-webkit-transition:color ease .3s;transition:color ease .3s;}@media (max-width:699px){.rating{padding-top:12px;padding-left:72px;}.rating .grade{float:left;margin-left:-72px;}.rating .value{width:auto;margin-top:16px;font-size:32px;line-height:38px;}.rating .label{margin-top:4px;}}.card{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;border:solid 1px rgba(0,0,0,0.04);border-radius:5px;background-clip:padding-box;padding:0 30px 24px 30px;margin-bottom:30px;}.card>header{position:relative;margin:0 -12px 24px;padding:24px 40px 18px 12px;border-bottom:solid 1px rgba(0,0,0,0.06);}.card>header.condensed{margin-bottom:0;border-bottom:0;}.card>header .legend{position:absolute;top:0;right:0;padding:24px 12px 0;}.card a.head-action{position:absolute;top:18px;right:0;}.card .restrict-width{max-width:calc(100% - 220px);}.card .btn{margin:24px 0 0 0;}.card .right-action{float:right;margin-top:-30px;}.card .right-action .btn{margin-top:0 !important;}.card>footer{max-height:44px;margin:24px -12px -24px;padding:18px 12px;border-top:solid 1px rgba(0,0,0,0.06);}.card>footer .btn{float:left;margin-top:0;margin-right:16px;}.card>footer .del{float:right;margin-top:13px;}@media (max-width:1199px){.card{margin-bottom:24px;}}@media (min-width:700px) and (max-width:899px){.card .restrict-width{max-width:100%;}.card .right-action{float:none;margin-top:24px;}}@media (max-width:699px){.card{padding:0 26px 20px 26px;margin-bottom:16px;}.card>header{margin:0 -12px 20px;padding:20px 36px 14px 12px;}.card>header .legend{position:static;padding:12px 0 0;}.card a.head-action{top:16px;right:2px;}.card .restrict-width{max-width:100%;}.card .btn{display:block;margin-top:20px;}.card .right-action{float:none;margin-top:20px;}.card>footer{max-height:none;margin:20px -12px -20px;padding:14px 12px;}.card>footer .btn{display:block;float:none;width:calc(100% + 16px);margin:12px -8px 0 -8px;}.card>footer .btn:first-child{margin-top:0;}.card>footer .del{float:none;margin-top:24px;}}.inset{margin:24px 0;padding:24px 30px;border:solid 1px rgba(0,0,0,0.06);border-radius:5px;}.inset.append-top{margin-top:0;}@media (max-width:699px){.inset{margin:20px -12px;padding:20px 22px;}}.graph{margin:20px 0 0;overflow-x:auto;}.graph .scroller{min-width:566px;}.graph .placeholder{width:100%;height:304px;}.summary-grid .card{width:calc((100% - 48px) / 3);float:left;margin:0 24px 30px 0;}.summary-grid .card:nth-child(3n){margin-right:0;}.ie .summary-grid .card{width:calc((100% - 50px) / 3);}.summary-grid .card>footer{max-height:none;margin:24px -28px -22px;padding:18px 28px;border:0;background:rgba(248,247,246,0.8);border-radius:0 0 2px 2px;-webkit-transition:background-color ease .3s;-o-transition:background-color ease .3s;-webkit-transition:background-color ease .3s;transition:background-color ease .3s;}.summary-grid .card>footer.grade-high{background:rgba(77,157,46,0.08);}.summary-grid .card>footer.grade-mid{background:rgba(224,181,10,0.06);}.summary-grid .card>footer.grade-low{background:rgba(234,103,32,0.05);}.summary-grid .card>footer p{min-height:44px;margin:0 0 20px 0;font-size:14px;line-height:22px;-webkit-transition:opacity ease .3s;-o-transition:opacity ease .3s;-webkit-transition:opacity ease .3s;transition:opacity ease .3s;}.summary-grid .card>footer .btn{display:block;width:calc(100% + 20px);margin:0 -10px 0;}.summary-grid .card .readings{margin:24px -30px -4px 0;}.summary-grid .card .readings .reading{width:50%;}.summary-grid .card.expired>footer{background:rgba(248,247,246,0.8) !important;}.summary-grid .card.loading>footer{background:rgba(248,247,246,0.8) !important;}.summary-grid .card.loading>footer p{opacity:0;}@media (min-width:1200px) and (max-width:1365px){.summary-grid .card{width:calc((100% - 24px) / 2);}.summary-grid .card:nth-child(3n){margin-right:24px;}.summary-grid .card:nth-child(2n){margin-right:0;}}@media (min-width:700px) and (max-width:1023px){.summary-grid .card{width:calc((100% - 24px) / 2);}.summary-grid .card:nth-child(3n){margin-right:24px;}.summary-grid .card:nth-child(2n){margin-right:0;}}@media (max-width:699px){.summary-grid .card{width:100%;margin:0 0 16px 0;}.summary-grid .card:nth-child(3n){margin-right:0;}.summary-grid .card:nth-child(2n){margin-right:0;}.summary-grid .card>footer{margin:20px -24px -18px;padding:16px 24px 16px;}.summary-grid .card>footer p{margin-bottom:16px;}.summary-grid .card>footer .btn{width:calc(100% + 16px);margin:0 -8px 0;}.summary-grid .card .readings{margin:20px -26px -4px 0;}}.card.report{position:relative;}.card.report>header{position:absolute;z-index:1;top:0;left:30px;right:30px;}.card.report .readings{position:relative;z-index:0;width:50%;padding-right:30px;float:left;padding-top:93px;}.card.report .readings .reading{width:33.3%;}.card.report .report-card{position:relative;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:calc(50% + 28px);padding:0 30px;margin:2px -28px -22px 0;float:right;background:rgba(248,247,246,0.8);border-radius:0 2px 2px 0;-webkit-transition:background-color ease .3s;-o-transition:background-color ease .3s;-webkit-transition:background-color ease .3s;transition:background-color ease .3s;padding-top:93px;}.card.report .report-card .rating{float:left;padding-right:45px;width:33%;min-width:200px;}.card.report .report-card ul.check{float:left;width:66%;max-width:calc(100% - 208px);margin:0;padding:34px 0 34px;}.card.report .report-card.grade-high{background:rgba(77,157,46,0.08);}.card.report .report-card.grade-high .rating .grade,.card.report .report-card.grade-high .rating .value{color:#4d9d2e;}.card.report .report-card.grade-high ul.check li.bullet{background-image:url("../static/img/bullet-high.svg");}.card.report .report-card.grade-mid{background:rgba(224,181,10,0.06);}.card.report .report-card.grade-mid .rating .grade,.card.report .report-card.grade-mid .rating .value{color:#e0b50a;}.card.report .report-card.grade-mid ul.check li.bullet{background-image:url("../static/img/bullet-mid.svg");}.card.report .report-card.grade-low{background:rgba(234,103,32,0.05);}.card.report .report-card.grade-low .rating .grade,.card.report .report-card.grade-low .rating .value{color:#ea6720;}.card.report .report-card.grade-low ul.check li.bullet{background-image:url("../static/img/bullet-low.svg");}.card.report .report-card.expired{background:rgba(248,247,246,0.8) !important;}.card.report .report-card.expired .rating .grade,.card.report .report-card.expired .rating .value{color:rgba(0,0,0,0.16) !important;}.card.report .report-card.expired .rating .label{color:#777 !important;}.card.report .report-card.expired ul.check{opacity:.33;}.card.report .report-card.loading{background:rgba(248,247,246,0.8) !important;}.card.report .report-card.loading>*{opacity:0;}@media (min-width:1200px) and (max-width:1365px){.card.report{padding-bottom:2px;}.card.report header{position:relative;left:0;right:0;}.card.report .readings{width:auto;float:none;padding-top:0;}.card.report .report-card{width:auto;float:none;padding-top:0;margin:24px -28px 0;border-radius:0 0 2px 2px;}}@media (max-width:1023px){.card.report{padding-bottom:2px;}.card.report header{position:relative;left:0;right:0;}.card.report .readings{width:auto;float:none;padding-top:0;}.card.report .report-card{width:auto;float:none;padding-top:0;margin:24px -28px 0;border-radius:0 0 2px 2px;}}@media (max-width:699px){.card.report .readings{padding-right:0;margin:20px -26px -4px 0;}.card.report .readings .reading{width:50%;}.card.report .readings .reading:nth-child(3){margin-top:20px;}.card.report .readings .reading:nth-child(3) .vis{display:none;}.card.report .report-card{margin:24px -24px 0;padding:0 26px;}.card.report .report-card .rating{width:auto;min-width:0;float:none;padding-right:0;margin-right:-24px;}.card.report .report-card ul.check{width:auto;max-width:120%;float:none;padding:6px 0 24px;margin-right:-10px;}}.card.alert{border:solid 2px #ea6720;}.card.alert .img{position:absolute;top:0;right:0;bottom:0;width:50%;background-color:#333;background-repeat:no-repeat;background-position:center center;background-size:cover;border-radius:0 3px 3px 0;}.card.alert .img a.head-action{right:18px;}.card.alert>header{padding-left:54px;background:transparent url("../static/img/icon/alert.svg") no-repeat 12px 24px;}.card.alert>header h2{color:#ea6720;}.card.alert>footer{max-height:none;margin:24px -28px -22px;padding:14px 28px;border:0;background:rgba(248,247,246,0.8);border-radius:0 2px 2px 0;font-size:14px;color:#777;}.card.alert>footer p{margin:0;}.card.alert.with-image{padding-right:calc(50% + 28px);}.card.alert.with-image>header a.head-action{display:none;}.card.alert.health-alert>header{background-image:url("../static/img/icon/health.svg");}@media (min-width:1200px) and (max-width:1365px){.card.alert .img{width:36%;}.card.alert.with-image{padding-right:calc(36% + 28px);}}@media (min-width:700px) and (max-width:1023px){.card.alert .img{width:36%;}.card.alert.with-image{padding-right:calc(36% + 28px);}}@media (max-width:699px){.card.alert .img{position:relative;width:auto;height:200px;margin:0 -26px;border-radius:3px 3px 0 0;}.card.alert .img a.head-action{top:16px;right:16px;}.card.alert>header{padding-left:40px;background-position:12px 21px;background-size:20px 20px;}.card.alert>footer{margin:20px -24px -18px;padding:14px 24px;}.card.alert.with-image{padding-right:26px;}}.card.pre-log .img{position:absolute;top:0;left:0;bottom:0;width:50%;background-color:#333;background-repeat:no-repeat;background-position:center center;background-size:cover;border-radius:4px 0 0 4px;}.card.pre-log .text{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:calc(50% + 30px);min-height:444px;float:right;margin:0 -30px -24px;padding:48px 60px;}.card.pre-log .text>footer{position:absolute;left:0;right:0;bottom:0;padding:0 60px 48px;}.card.pre-log .text>footer p{margin:0;font-size:14px;line-height:22px;color:#777;}.card.pre-log .text>footer p.left{float:left;}.card.pre-log .text>footer p.right{float:right;}.card.pre-log h2{margin-bottom:32px;}.card.pre-log h2.accent{margin-top:-16px;}.card.pre-log .form-row{margin-bottom:0;}@media (max-width:1199px){.card.pre-log .img{width:36%;}.card.pre-log .text{width:calc((100% + 60px) * .64);padding-left:48px;padding-right:48px;}.card.pre-log .text>footer{padding-left:48px;padding-right:48px;}}@media (max-width:699px){.card.pre-log .img{display:none;}.card.pre-log .text{width:auto;min-height:364px;float:none;margin:0;padding:25.6px 0;}.card.pre-log .text>footer{padding:0 0 6.4px;}.card.pre-log .text>footer p{text-align:center;}.card.pre-log .text>footer p.right,.card.pre-log .text>footer p.left{float:none;}.card.pre-log .text>footer p.right{margin-top:12px;}.card.pre-log h2{margin-bottom:0;text-align:center;}.card.pre-log h2.accent{margin-top:16px;}.card.pre-log .form-row label{text-align:center;}.card.pre-log .form-row input[type=text],.card.pre-log .form-row input[type=password],.card.pre-log .form-row input[type=search],.card.pre-log .form-row input[type=email],.card.pre-log .form-row input[type=tel],.card.pre-log .form-row input[type=url],.card.pre-log .form-row input[type=number],.card.pre-log .form-row textarea{text-align:center;}.card.pre-log .form-row .btn{text-align:center;}}input[type=text],input[type=password],input[type=search],input[type=email],input[type=tel],input[type=url],input[type=number],textarea{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;height:44px;padding:8px 18px;font:400 16px/28px "Roboto",sans-serif;color:#333;background:rgba(248,247,246,0.5);border:solid 1px rgba(0,0,0,0.08);-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;-webkit-appearance:none;border-radius:3px;}input[type=text]:focus,input[type=password]:focus,input[type=search]:focus,input[type=email]:focus,input[type=tel]:focus,input[type=url]:focus,input[type=number]:focus,textarea:focus{border:solid 1px rgba(0,0,0,0.16);}input[type=text]:disabled,input[type=password]:disabled,input[type=search]:disabled,input[type=email]:disabled,input[type=tel]:disabled,input[type=url]:disabled,input[type=number]:disabled,textarea:disabled{background:#fff;color:#777;}.error input[type=text],.error input[type=password],.error input[type=search],.error input[type=email],.error input[type=tel],.error input[type=url],.error input[type=number],.error textarea{border-color:#ea6720;}.max-half input[type=text],.max-half input[type=password],.max-half input[type=search],.max-half input[type=email],.max-half input[type=tel],.max-half input[type=url],.max-half input[type=number],.max-half textarea{width:calc(50% - 9px);}@media (max-width:699px){.max-half input[type=text],.max-half input[type=password],.max-half input[type=search],.max-half input[type=email],.max-half input[type=tel],.max-half input[type=url],.max-half input[type=number],.max-half textarea{width:100%;}}textarea{height:100px;}select{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;height:44px;padding:8px 18px;font:400 16px/28px "Roboto",sans-serif;color:#333;background:rgba(248,247,246,0.5);border:solid 1px rgba(0,0,0,0.08);}select:disabled{background:#fff;color:#777;}.error select{border-color:#ea6720;}.max-half select{width:calc(50% - 9px);}input[type=checkbox],input[type=radio]{width:28px;height:28px;vertical-align:middle;opacity:0;}.icheckbox,.iradio{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;vertical-align:middle;margin:0 12px 0 0;padding:0;width:28px;height:28px;background:rgba(248,247,246,0.5);border:solid 1px rgba(0,0,0,0.08);border-radius:50%;cursor:pointer;-webkit-transition:background-color ease .2s,border-color ease .2s;-o-transition:background-color ease .2s,border-color ease .2s;-webkit-transition:background-color ease .2s,border-color ease .2s;transition:background-color ease .2s,border-color ease .2s;position:relative;top:-1px;}.icheckbox{background:rgba(248,247,246,0.5) url("../static/img/icon/input-checkbox.svg") no-repeat 6px -48px;}.icheckbox.hover{border:solid 1px rgba(0,0,0,0.16);background-position:6px -20px;}.icheckbox.checked{background-color:#abcc75;background-position:6px 8px;border-color:#95B463;}.icheckbox.disabled{background-color:#fff;}.icheckbox.checked.disabled{background-color:rgba(0,0,0,0.16);background-position:6px 8px;border:solid 1px rgba(0,0,0,0.06);}.iradio{background:rgba(248,247,246,0.5) url("../static/img/icon/input-radio.svg") no-repeat 9px -47px;}.iradio.hover{border:solid 1px rgba(0,0,0,0.16);background-position:9px -19px;}.iradio.checked{background-color:#abcc75;background-position:9px 9px;border-color:#95B463;}.iradio.disabled{background-color:#fff;}.iradio.checked.disabled{background-color:rgba(0,0,0,0.16);background-position:9px 9px;border:solid 1px rgba(0,0,0,0.06);}.selectboxit-container{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;vertical-align:top;}.selectboxit-container *{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:-moz-none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;white-space:nowrap;}.selectboxit-container .selectboxit{-webkit-box-sizing:border-box;box-sizing:border-box;width:auto !important;cursor:pointer;margin:0;padding:0;overflow:hidden;display:block;position:relative;}.selectboxit-container .selectboxit:focus{outline:0;}.selectboxit-container .selectboxit-option-icon{margin:0;padding:0;vertical-align:middle;}.selectboxit-rendering{display:inline-block !important;*display:inline !important;zoom:1 !important;visibility:visible !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.jqueryui .ui-icon{background-color:inherit;}.jqueryui .ui-icon-triangle-1-s{background-position:-64px -16px;}.selectboxit-btn{font:400 16px/28px "Roboto",sans-serif;color:#333;background:rgba(248,247,246,0.5);border:solid 1px rgba(0,0,0,0.08);-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;-webkit-appearance:none;border-radius:3px;}.selectboxit-container span,.selectboxit-container .selectboxit-options a{height:44px;line-height:44px;display:block;}.selectboxit-text{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100% !important;padding:0 40px 0 18px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;float:left;}.selectboxit-btn.selectboxit-enabled:hover,.selectboxit-btn.selectboxit-enabled:focus,.selectboxit-btn.selectboxit-enabled:active{border:solid 1px rgba(0,0,0,0.16);}.selectboxit-arrow-container{width:44px;position:absolute;top:-2px;right:0;}.selectboxit .selectboxit-arrow-container .selectboxit-arrow{margin:0 auto;position:absolute;top:50%;right:0;left:0;}.selectboxit-default-arrow{width:0;height:0;border-top:5px solid #333;border-right:4px solid transparent;border-left:4px solid transparent;}.selectboxit-container .selectboxit-options{-webkit-box-sizing:border-box;box-sizing:border-box;min-width:100% !important;width:100% !important;max-height:240px;margin:-2px 0;padding:12px 2px 12px !important;list-style:none;position:absolute;overflow-x:hidden;overflow-y:auto;cursor:pointer;display:none;z-index:9999999999999;text-align:left;background-color:#fff;border:solid 1px rgba(0,0,0,0.04);-webkit-box-shadow:0 12px 24px rgba(0,0,0,0.12);box-shadow:0 12px 24px rgba(0,0,0,0.12);border-radius:5px;background-clip:padding-box;overflow:scroll;}.selectboxit-option{list-type:none;padding:0;margin:0 0 2px 0 !important;background:none;}.selectboxit-option:last-child{margin-bottom:0 !important;}.selectboxit-list .selectboxit-option-anchor{display:block;height:auto !important;padding:11px 16px 10px 16px !important;font-size:14px;line-height:18px !important;color:#777;white-space:normal !important;border-radius:3px;cursor:pointer;-webkit-transition:all ease .2s;-o-transition:all ease .2s;-webkit-transition:all ease .2s;transition:all ease .2s;}.no-touch .selectboxit-list .selectboxit-option-anchor:hover{background:rgba(248,247,246,0.5);color:#333;}.selectboxit-optgroup-header{height:auto !important;padding:16px 16px 12px 12px;font:700 11px/13px "Roboto",sans-serif !important;color:#333;text-transform:uppercase;-webkit-letter-spacing:.1em;-moz-letter-spacing:.1em;-ms-letter-spacing:.1em;letter-spacing:.1em;}.no-touch .selectboxit-optgroup-header:hover{cursor:default;}.selectboxit-btn .selectboxit-option-icon-container{float:left;height:44px !important;line-height:44px !important;}.selectboxit-list .selectboxit-option-icon-container{float:left;height:20px !important;line-height:18px !important;position:relative;top:-1px;}.selectboxit-option-icon-url{width:20px;background-size:20px 20px;background-repeat:no-repeat;height:100%;background-position:left center;float:left;margin:0 -8px 0 19px !important;}.selectboxit-list .selectboxit-option-icon-url{margin-left:0 !important;margin-right:8px !important;}.selectboxit.selectboxit-disabled{background:#fff;color:#777;cursor:default;}.selectboxit.selectboxit-disabled .selectboxit-default-arrow{border-top-color:#777;}.selectboxit-list>.selectboxit-disabled>.selectboxit-option-anchor{color:rgba(0,0,0,0.16);}.selectboxit-selected>.selectboxit-option-anchor{background:#f8f7f6;color:#333;}.no-touch .selectboxit-selected>.selectboxit-option-anchor:hover{background:#f8f7f6;}.error .selectboxit-btn{border-color:#ea6720;}.error .selectboxit-btn.selectboxit-enabled:hover,.error .selectboxit-btn.selectboxit-enabled:focus,.error .selectboxit-btn.selectboxit-enabled:active{border-color:#d7550f;}.selectboxit-btn.lang-picker{background:transparent;border:0;}.selectboxit-btn.selectboxit-enabled.lang-picker:hover,.selectboxit-btn.selectboxit-enabled.lang-picker:focus,.selectboxit-btn.selectboxit-enabled.lang-picker:active{border:0;}.selectboxit-btn.lang-picker .selectboxit-text{float:left;padding-right:11px;font-size:14px;color:#777;}.selectboxit-btn.lang-picker .selectboxit-arrow-container{width:5px;position:relative;float:left;}.selectboxit-btn.lang-picker .selectboxit-default-arrow{border-top-color:#777;}.selectboxit-btn.whare-picker{background:transparent;border:0;}.selectboxit-btn.selectboxit-enabled.whare-picker:hover,.selectboxit-btn.selectboxit-enabled.whare-picker:focus,.selectboxit-btn.selectboxit-enabled.whare-picker:active{border:0;}.selectboxit-btn.whare-picker .selectboxit-text{float:left;padding-left:24px;padding-right:9px;font-weight:700;max-width:calc(100% - 36px) !important;}.selectboxit-btn.whare-picker .selectboxit-arrow-container{width:5px;position:relative;float:left;}.menu>header .selectboxit-list .selectboxit-option-anchor{padding:11px 22px 10px 22px !important;}.nav-links{list-type:none;margin:0 18px 0 2px;}.nav-links li{list-type:none;padding:0;margin:0;background:none;}.nav-links a{display:block;padding:11px 30px 9px 28px;border-radius:0 3px 3px 0;font-size:16px;line-height:20px;color:#777;}.no-touch .nav-links a:hover{color:#333;}.no-touch .nav-links a:active{color:#000;}.nav-links a.current{color:#333;background:#f8f7f6;}.form-row{max-width:756px;margin-top:24px;margin-right:-18px;margin-bottom:30px;}.inset .form-row{margin:12px 0 0;}.form-row>li{list-type:none;padding:0;margin:0;background:none;float:left;clear:left;width:calc(100% - 18px);margin-right:18px;margin-bottom:18px;}.form-row>li.half{width:calc(50% - 18px);clear:none;}.form-row>li.space{padding-top:14px;}.form-row label{display:inline-block;margin-right:6px;margin-bottom:8px;}.form-row .helper{font-size:11px;line-height:13px;color:#777;}.form-row .btn{margin-top:6px !important;}.form-row>li.error label{color:#ea6720;}.form-row.inline,.inset .form-row.inline{max-width:100%;margin:0;}.form-row.inline>li,.inset .form-row.inline>li{clear:none;margin-bottom:0 !important;}.form-row.inline>li.small,.inset .form-row.inline>li.small{width:calc(17% - 18px);clear:none;}.form-row.inline>li.small label,.inset .form-row.inline>li.small label{white-space:nowrap;}.form-row.inline>li.button,.inset .form-row.inline>li.button{width:auto;clear:none;margin-right:0;}.form-row.inline>li.button .btn,.inset .form-row.inline>li.button .btn{margin-top:27px !important;}@media (max-width:699px){.form-row{margin-top:20px;margin-right:0;margin-bottom:24px;}.form-row>li{float:none;width:100%;margin-right:0;}.form-row>li.half{width:100%;}.form-row>li.collapse-mob{margin-top:-12px;}.form-row label{display:block;margin-right:0;}.form-row .helper{display:block;margin-top:-4px;margin-bottom:9px;}.form-row.inline>li,.inset .form-row.inline>li{clear:none;margin-bottom:16px !important;}.form-row.inline>li:last-child,.inset .form-row.inline>li:last-child{margin-bottom:0 !important;}.form-row.inline>li.small,.inset .form-row.inline>li.small{width:calc(50% - 12px);float:left;clear:none;margin-right:12px;}.form-row.inline>li.button,.inset .form-row.inline>li.button{width:auto;clear:none;margin-right:0;}.form-row.inline>li.button .btn,.inset .form-row.inline>li.button .btn{margin-top:27px !important;}}.form-controls{margin:6px 0 0;}.form-controls>li{list-type:none;padding:0;margin:0;background:none;margin-bottom:6px;padding-left:40px;}.form-controls>li:last-child{margin-bottom:0;}.form-controls>li label{margin:0;font-size:14px;line-height:28px;font-weight:400;color:#777;text-transform:none;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;text-align:left !important;}.form-controls>li span.sensor{height:24px;padding:0 10px;line-height:24px;border-radius:12px;margin-right:8px;}.form-controls>li .icheckbox,.form-controls>li .iradio{float:left;margin-left:-40px;}.sensor-alerts{margin:-24px -12px -16px;}.sensor-alerts li{list-type:none;padding:0;margin:0;background:none;padding:12px 12px;border-bottom:solid 1px rgba(0,0,0,0.06);}.sensor-alerts li:last-child{border-bottom:0;}.sensor-alerts .sensor{float:left;margin-right:12px;}.sensor-alerts .time{float:left;line-height:32px;}.sensor-alerts .btn{float:right;margin:0;}@media (max-width:699px){.sensor-alerts{margin-top:-20px;margin-bottom:-20px;}.sensor-alerts li{padding:16px 12px 18px;}.sensor-alerts .sensor{float:none;}.sensor-alerts .time{display:block;float:none;line-height:22px;margin:8px 0 12px;}.sensor-alerts .btn{display:block;float:none;width:100%;}}.legend{margin:0;}.legend li{list-type:none;padding:0;margin:0;background:none;display:inline-block;margin-left:24px;font-size:12px;line-height:18px;}.legend .temp,.legend .hum{display:inline-block;vertical-align:middle;width:8px;height:8px;margin-right:8px;position:relative;top:-1px;}.legend .temp{background:#4d9d2e;border-radius:2px;}.legend .hum{background:rgba(77,157,46,0.33);border-radius:50%;}@media (max-width:699px){.legend li{margin-left:0;margin-right:24px;}}table{width:100%;border-collapse:separate;margin:0;line-height:22px;}tr th{padding:4px 0 12px 30px;font:700 11px/13px "Roboto",sans-serif;color:#333;text-transform:uppercase;-webkit-letter-spacing:.1em;-moz-letter-spacing:.1em;-ms-letter-spacing:.1em;letter-spacing:.1em;vertical-align:bottom;text-align:left;}tr th:last-child{padding-right:30px;}tr:not(.spacer) td{padding:14px 0 14px 30px;background:rgba(248,247,246,0.5);border-top:solid 1px rgba(0,0,0,0.06);border-bottom:solid 1px rgba(0,0,0,0.06);vertical-align:middle;text-align:left;}tr:not(.spacer) td:first-child{border-left:solid 1px rgba(0,0,0,0.06);border-radius:6px 0 0 6px;}tr:not(.spacer) td:last-child{padding-right:30px;border-right:solid 1px rgba(0,0,0,0.06);border-radius:0 6px 6px 0;}tr:not(.spacer) td.actions{min-width:96px;padding-left:0;text-align:right;}tr:not(.spacer) td.unbreak{overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;}tr:not(.spacer) td .sub{display:block;font-size:14px;color:#777;}tr:not(.spacer) td .sensor{display:inline-block;vertical-align:middle;margin:-4px 0;}tr:not(.spacer) td dl{display:inline-block;vertical-align:middle;margin:0;}tr:not(.spacer) td .sensor-group .sensor{margin-right:12px;}tr:not(.spacer) td .sensor-group dl{margin-top:2px;}tr:not(.spacer) td a.btn{margin:0 !important;vertical-align:middle;text-align:left !important;}tr:not(.spacer) td a.table-action{display:inline-block;vertical-align:middle;margin-left:26px;}tr:not(.spacer) td a:not(.btn):not(.table-action){position:relative;display:inline-block;font-weight:700;text-decoration:underline;}tr.spacer td{height:6px;}@media (max-width:699px){table{width:calc(100% + 24px);margin:0 -12px;font-size:12px;line-height:18px;}tr th{padding:4px 0 12px 18px;}tr th:last-child{padding-right:18px;}tr:not(.spacer) td{padding:12px 0 12px 18px;}tr:not(.spacer) td:last-child{padding-right:18px;}tr:not(.spacer) td.actions{min-width:0;}tr:not(.spacer) td.unbreak{max-width:160px;}tr:not(.spacer) td a.table-action{margin-left:0;}table.mob-break tr:not(.spacer) td{display:block;border-top:0;border-bottom:0;border-left:solid 1px rgba(0,0,0,0.06);border-right:solid 1px rgba(0,0,0,0.06);padding:8px 18px;}table.mob-break tr:not(.spacer) td:first-child{border-top:solid 1px rgba(0,0,0,0.06);border-radius:6px 6px 0 0;padding:16px 18px 8px;}table.mob-break tr:not(.spacer) td:last-child{border-bottom:solid 1px rgba(0,0,0,0.06);border-radius:0 0 6px 6px;padding:8px 18px 16px;}table.mob-break tr:not(.spacer) td.actions{padding:12px 0 0 0 !important;}table.mob-break tr:not(.spacer) td.actions .btn{border-radius:0 0 5px 5px;}}.tooltipster-base{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;pointer-events:none;position:absolute;}.tooltipster-box{-webkit-box-flex:1;-ms-flex:1 1 auto;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}.tooltipster-content{-webkit-box-sizing:border-box;box-sizing:border-box;max-height:100%;max-width:100%;overflow:auto;}.tooltipster-ruler{bottom:0;left:0;overflow:hidden;position:fixed;right:0;top:0;visibility:hidden;}.tooltipster-fade{opacity:0;-webkit-transition-property:opacity;-moz-transition-property:opacity;-o-transition-property:opacity;-ms-transition-property:opacity;-webkit-transition-property:opacity;transition-property:opacity;}.tooltipster-fade.tooltipster-show{opacity:1;}.tooltipster-grow{-webkit-transform:scale(0,0);-moz-transform:scale(0,0);-o-transform:scale(0,0);-ms-transform:scale(0,0);-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);-webkit-transition-property:-webkit-transform;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-property:-webkit-transform,-webkit-transform;-webkit-transition-property:transform,-webkit-transform;transition-property:transform,-webkit-transform;-webkit-backface-visibility:hidden;}.tooltipster-grow.tooltipster-show{-webkit-transform:scale(1,1);-moz-transform:scale(1,1);-o-transform:scale(1,1);-ms-transform:scale(1,1);-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1);-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-moz-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-ms-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-o-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);}.tooltipster-swing{opacity:0;-webkit-transform:rotateZ(4deg);-moz-transform:rotateZ(4deg);-o-transform:rotateZ(4deg);-ms-transform:rotateZ(4deg);-webkit-transform:rotateZ(4deg);-ms-transform:rotateZ(4deg);transform:rotateZ(4deg);-webkit-transition-property:-webkit-transform,opacity;-moz-transition-property:-moz-transform;-o-transition-property:-o-transform;-ms-transition-property:-ms-transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;-webkit-transition-property:-webkit-transform;-webkit-transition-property:transform;transition-property:transform;-webkit-transition-property:-webkit-transform,-webkit-transform;-webkit-transition-property:transform,-webkit-transform;transition-property:transform,-webkit-transform;}.tooltipster-swing.tooltipster-show{opacity:1;-webkit-transform:rotateZ(0deg);-moz-transform:rotateZ(0deg);-o-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);-webkit-transform:rotateZ(0deg);-ms-transform:rotateZ(0deg);transform:rotateZ(0deg);-webkit-transition-timing-function:cubic-bezier(0.23,0.635,0.495,1);-webkit-transition-timing-function:cubic-bezier(0.23,0.635,0.495,2.4);-moz-transition-timing-function:cubic-bezier(0.23,0.635,0.495,2.4);-ms-transition-timing-function:cubic-bezier(0.23,0.635,0.495,2.4);-o-transition-timing-function:cubic-bezier(0.23,0.635,0.495,2.4);-webkit-transition-timing-function:cubic-bezier(0.23,0.635,0.495,2.4);transition-timing-function:cubic-bezier(0.23,0.635,0.495,2.4);}.tooltipster-fall{-webkit-transition-property:top;-moz-transition-property:top;-o-transition-property:top;-ms-transition-property:top;-webkit-transition-property:top;transition-property:top;-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1);-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-moz-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-ms-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-o-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);}.tooltipster-fall.tooltipster-initial{top:0 !important;}.tooltipster-fall.tooltipster-dying{-webkit-transition-property:all;-moz-transition-property:all;-o-transition-property:all;-ms-transition-property:all;-webkit-transition-property:all;transition-property:all;top:0 !important;opacity:0;}.tooltipster-slide{-webkit-transition-property:left;-moz-transition-property:left;-o-transition-property:left;-ms-transition-property:left;-webkit-transition-property:left;transition-property:left;-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1);-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-moz-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-ms-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-o-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);-webkit-transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.15);}.tooltipster-slide.tooltipster-initial{left:-40px !important;}.tooltipster-slide.tooltipster-dying{-webkit-transition-property:all;-moz-transition-property:all;-o-transition-property:all;-ms-transition-property:all;-webkit-transition-property:all;transition-property:all;left:0 !important;opacity:0;}@-webkit-keyframes tooltipster-fading 0%{opacity:0;}@-webkit-keyframes tooltipster-fading 100%{opacity:1;}@-webkit-keyframes tooltipster-fading{0%{opacity:0;}100%{opacity:1;}}@keyframes tooltipster-fading{0%{opacity:0;}100%{opacity:1;}}.tooltipster-update-fade{-webkit-animation:tooltipster-fading 400ms;-webkit-animation:tooltipster-fading 400ms;animation:tooltipster-fading 400ms;}@-webkit-keyframes tooltipster-rotating 25%{-webkit-transform:rotate(-2deg);-webkit-transform:rotate(-2deg);-ms-transform:rotate(-2deg);transform:rotate(-2deg);}@-webkit-keyframes tooltipster-rotating 75%{-webkit-transform:rotate(2deg);-webkit-transform:rotate(2deg);-ms-transform:rotate(2deg);transform:rotate(2deg);}@-webkit-keyframes tooltipster-rotating 100%{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}@-webkit-keyframes tooltipster-rotating{25%{-webkit-transform:rotate(-2deg);-webkit-transform:rotate(-2deg);-ms-transform:rotate(-2deg);transform:rotate(-2deg);}75%{-webkit-transform:rotate(2deg);-webkit-transform:rotate(2deg);-ms-transform:rotate(2deg);transform:rotate(2deg);}100%{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}}@keyframes tooltipster-rotating{25%{-webkit-transform:rotate(-2deg);-webkit-transform:rotate(-2deg);-ms-transform:rotate(-2deg);transform:rotate(-2deg);}75%{-webkit-transform:rotate(2deg);-webkit-transform:rotate(2deg);-ms-transform:rotate(2deg);transform:rotate(2deg);}100%{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}}.tooltipster-update-rotate{-webkit-animation:tooltipster-rotating 600ms;-webkit-animation:tooltipster-rotating 600ms;animation:tooltipster-rotating 600ms;}@-webkit-keyframes tooltipster-scaling 50%{-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}@-webkit-keyframes tooltipster-scaling 100%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}@-webkit-keyframes tooltipster-scaling{50%{-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}100%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes tooltipster-scaling{50%{-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}100%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.tooltipster-update-scale{-webkit-animation:tooltipster-scaling 600ms;-webkit-animation:tooltipster-scaling 600ms;animation:tooltipster-scaling 600ms;}.tooltipster-sidetip .tooltipster-box{background:#fff;border:solid 1px rgba(0,0,0,0.04);border-radius:6px;-webkit-box-shadow:0 12px 24px rgba(0,0,0,0.12);box-shadow:0 12px 24px rgba(0,0,0,0.12);border-radius:5px;background-clip:padding-box;}.tooltipster-sidetip.tooltipster-bottom .tooltipster-box{margin-top:6px;}.tooltipster-sidetip.tooltipster-left .tooltipster-box{margin-right:6px;}.tooltipster-sidetip.tooltipster-right .tooltipster-box{margin-left:6px;}.tooltipster-sidetip.tooltipster-top .tooltipster-box{margin-bottom:6px;}.tooltipster-sidetip .tooltipster-content{color:#777;font-size:12px;line-height:18px;padding:14px 20px;}.tooltipster-sidetip .tooltipster-content h6{margin:3px 0 0;}.tooltipster-sidetip .tooltipster-content p{margin:8px 0 0 0;}.tooltipster-sidetip .tooltipster-content p:first-child{margin-top:0;}.tooltipster-sidetip .tooltipster-content .reading .value{font-size:36px;line-height:42px;font-weight:bold;-webkit-letter-spacing:-.05em;-moz-letter-spacing:-.05em;-ms-letter-spacing:-.05em;letter-spacing:-.05em;-webkit-transition:color ease .3s;-o-transition:color ease .3s;-webkit-transition:color ease .3s;transition:color ease .3s;margin-left:-1px;}@media (max-width:699px){.tooltipster-sidetip .tooltipster-content .reading .value{font-size:32px;line-height:38px;}}.tooltipster-sidetip .tooltipster-content .reading .label{display:block;margin:8px 0 0;font:700 11px/13px "Roboto",sans-serif;color:#333;text-transform:uppercase;-webkit-letter-spacing:.1em;-moz-letter-spacing:.1em;-ms-letter-spacing:.1em;letter-spacing:.1em;-webkit-transition:color ease .3s;-o-transition:color ease .3s;-webkit-transition:color ease .3s;transition:color ease .3s;}@media (max-width:699px){.tooltipster-sidetip .tooltipster-content .reading .label{margin-top:4px;}}.tooltipster-sidetip .tooltipster-content .reading .time{display:block;margin-top:2px;font-size:12px;line-height:18px;color:#777;}.tooltipster-sidetip .tooltipster-arrow{overflow:hidden;position:absolute;}.tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow{height:6px;margin-left:-6px;top:1px;width:12px;}.tooltipster-sidetip.tooltipster-left .tooltipster-arrow{height:12px;margin-top:-6px;right:0;top:0;width:6px;}.tooltipster-sidetip.tooltipster-right .tooltipster-arrow{height:12px;margin-top:-6px;left:0;top:0;width:6px;}.tooltipster-sidetip.tooltipster-top .tooltipster-arrow{bottom:1px;height:6px;margin-left:-6px;width:12px;}.tooltipster-sidetip .tooltipster-arrow-background,.tooltipster-sidetip .tooltipster-arrow-border{height:0;position:absolute;width:0;}.tooltipster-sidetip .tooltipster-arrow-background{border:6px solid transparent;}.tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow-background{border-bottom-color:#fff;left:0;top:0;}.tooltipster-sidetip.tooltipster-left .tooltipster-arrow-background{border-left-color:#fff;left:0;top:0;}.tooltipster-sidetip.tooltipster-right .tooltipster-arrow-background{border-right-color:#fff;left:0;top:0;}.tooltipster-sidetip.tooltipster-top .tooltipster-arrow-background{border-top-color:#fff;left:0;top:0;}.tooltipster-sidetip .tooltipster-arrow-border{border:6px solid transparent;left:0;top:0;}.tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow-border{border-bottom-color:rgba(0,0,0,0.433);}.tooltipster-sidetip.tooltipster-left .tooltipster-arrow-border{border-left-color:rgba(0,0,0,0.33);}.tooltipster-sidetip.tooltipster-right .tooltipster-arrow-border{border-right-color:rgba(0,0,0,0.33);}.tooltipster-sidetip.tooltipster-top .tooltipster-arrow-border{border-top-color:rgba(0,0,0,0.33);}.tooltipster-sidetip .tooltipster-arrow-uncropped{position:relative;}.tooltipster-sidetip.tooltipster-bottom .tooltipster-arrow-uncropped{top:-6px;}.tooltipster-sidetip.tooltipster-right .tooltipster-arrow-uncropped{left:-6px;}.modal{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:696px;background:#fff;border:solid 1px rgba(0,0,0,0.04);border-radius:5px;-webkit-box-shadow:0 12px 24px rgba(0,0,0,0.12);box-shadow:0 12px 24px rgba(0,0,0,0.12);background-clip:padding-box;padding:0 30px 24px 30px;margin:30px auto;}.modal>header{position:relative;margin:0 -12px 24px;padding:24px 40px 18px 12px;border-bottom:solid 1px rgba(0,0,0,0.06);}.modal a.head-action{position:absolute;top:18px;right:0;}.modal a.head-action svg path{fill:#333;}.modal .btn{margin:24px 0 0 0;}.modal>footer{max-height:44px;margin:24px -12px -24px;padding:18px 12px;border-top:solid 1px rgba(0,0,0,0.06);}.modal>footer .btn{float:left;margin-top:0;margin-right:16px;}.modal>footer .del,.modal>footer .cancel{float:right;margin-top:13px;}@media (max-width:1199px){.modal{margin:24px auto;}}@media (max-width:699px){.modal{padding:0 26px 20px 26px;margin:15px auto;}.modal>header{margin:0 -12px 20px;padding:20px 36px 14px 12px;}.modal a.head-action{top:16px;right:2px;}.modal .btn{display:block;margin-top:20px;}.modal>footer{max-height:none;margin:20px -12px -20px;padding:14px 12px;}.modal>footer .btn{display:block;float:none;width:calc(100% + 16px);margin:12px -8px 0 -8px;}.modal>footer .btn:first-child{margin-top:0;}.modal>footer .del,.modal>footer .cancel{float:none;margin-top:24px;}}.modal.alert>header{padding-left:54px;background:transparent url("../static/img/icon/alert.svg") no-repeat 12px 24px;}.modal.alert>header h2{color:#ea6720;}@media (max-width:699px){.modal.alert>header{padding-left:50px;background-position:12px 20px;}}.modal{opacity:0;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-o-transition:all .2s ease-out;-webkit-transition:all .2s ease-out;transition:all .2s ease-out;-webkit-transform:translateY(-12px) perspective(696px) rotateX(5deg);-moz-transform:translateY(-12px) perspective(696px) rotateX(5deg);-ms-transform:translateY(-12px) perspective(696px) rotateX(5deg);-o-transform:translateY(-12px) perspective(696px) rotateX(5deg);-webkit-transform:translateY(-12px) perspective(696px) rotateX(5deg);-ms-transform:translateY(-12px) perspective(696px) rotateX(5deg);transform:translateY(-12px) perspective(696px) rotateX(5deg);}.mfp-ready .modal{opacity:1;-webkit-transform:translateY(0) perspective(696px) rotateX(0);-moz-transform:translateY(0) perspective(696px) rotateX(0);-ms-transform:translateY(0) perspective(696px) rotateX(0);-o-transform:translateY(0) perspective(696px) rotateX(0);-webkit-transform:translateY(0) perspective(696px) rotateX(0);-ms-transform:translateY(0) perspective(696px) rotateX(0);transform:translateY(0) perspective(696px) rotateX(0);}.mfp-removing .modal{opacity:0;-webkit-transform:translateY(-12px) perspective(696px) rotateX(5deg);-moz-transform:translateY(-12px) perspective(696px) rotateX(5deg);-ms-transform:translateY(-12px) perspective(696px) rotateX(5deg);-o-transform:translateY(-12px) perspective(696px) rotateX(5deg);-webkit-transform:translateY(-12px) perspective(696px) rotateX(5deg);-ms-transform:translateY(-12px) perspective(696px) rotateX(5deg);transform:translateY(-12px) perspective(696px) rotateX(5deg);}.mfp-bg{opacity:0;-webkit-transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-o-transition:opacity .2s ease-out;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out;}.mfp-ready.mfp-bg{opacity:1;}.mfp-removing.mfp-bg{opacity:0;}.mfp-bg{top:0;left:0;width:100%;height:100%;z-index:1042;overflow:hidden;position:fixed;background:rgba(248,247,246,0.8);}.mfp-wrap{top:0;left:0;width:100%;height:100%;z-index:1043;position:fixed;outline:none !important;-webkit-backface-visibility:hidden;}.mfp-container{text-align:center;position:absolute;width:100%;height:100%;left:0;top:0;padding:0 36px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}.mfp-container:before{content:\'\';display:inline-block;height:100%;vertical-align:middle;}.mfp-align-top .mfp-container:before{display:none;}.mfp-content{position:relative;display:inline-block;vertical-align:middle;margin:0 auto;text-align:left;z-index:1045;}.mfp-inline-holder .mfp-content,.mfp-ajax-holder .mfp-content{width:100%;cursor:auto;}.mfp-ajax-cur{cursor:progress;}.mfp-zoom-out-cur,.mfp-zoom-out-cur .mfp-image-holder .mfp-close{cursor:-webkit--moz-zoom-out;cursor:-moz--moz-zoom-out;cursor:-moz-zoom-out;cursor:-webkit--webkit-zoom-out;cursor:-moz--webkit-zoom-out;cursor:-webkit-zoom-out;cursor:-webkit-zoom-out;cursor:-moz-zoom-out;cursor:zoom-out;}.mfp-zoom{cursor:pointer;cursor:-webkit--webkit-zoom-in;cursor:-moz--webkit-zoom-in;cursor:-webkit-zoom-in;cursor:-webkit--moz-zoom-in;cursor:-moz--moz-zoom-in;cursor:-moz-zoom-in;cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in;}.mfp-auto-cursor .mfp-content{cursor:auto;}.mfp-close,.mfp-arrow,.mfp-preloader,.mfp-counter{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.mfp-loading.mfp-figure{display:none;}.mfp-hide{display:none !important;}.mfp-preloader{color:#CCC;position:absolute;top:50%;width:auto;text-align:center;margin-top:-0.8em;left:8px;right:8px;z-index:1044;}.mfp-preloader a{color:#CCC;}.mfp-preloader a:hover{color:#FFF;}.mfp-s-ready .mfp-preloader{display:none;}.mfp-s-error .mfp-content{display:none;}button.mfp-close,button.mfp-arrow{overflow:visible;cursor:pointer;background:transparent;border:0;-webkit-appearance:none;display:block;outline:none;padding:0;z-index:1046;-webkit-box-shadow:none;box-shadow:none;}button::-moz-focus-inner{padding:0;border:0;}.mfp-close{width:44px;height:44px;line-height:44px;position:absolute;right:0;top:0;text-decoration:none;text-align:center;opacity:0.65;padding:0 0 18px 10px;color:#FFF;font-style:normal;font-size:28px;font-family:Arial,Baskerville,monospace;}.mfp-close:hover,.mfp-close:focus{opacity:1;}.mfp-close:active{top:1px;}.mfp-close-btn-in .mfp-close{color:#333;}.mfp-image-holder .mfp-close,.mfp-iframe-holder .mfp-close{color:#FFF;right:-6px;text-align:right;padding-right:6px;width:100%;}.mfp-counter{position:absolute;top:0;right:0;color:#CCC;font-size:12px;line-height:18px;}.mfp-arrow{position:absolute;opacity:0.65;margin:0;top:50%;margin-top:-55px;padding:0;width:90px;height:110px;-webkit-tap-highlight-color:transparent;}.mfp-arrow:active{margin-top:-54px;}.mfp-arrow:hover,.mfp-arrow:focus{opacity:1;}.mfp-arrow:before,.mfp-arrow:after,.mfp-arrow .mfp-b,.mfp-arrow .mfp-a{content:\'\';display:block;width:0;height:0;position:absolute;left:0;top:0;margin-top:35px;margin-left:35px;border:medium inset transparent;}.mfp-arrow:after,.mfp-arrow .mfp-a{border-top-width:13px;border-bottom-width:13px;top:8px;}.mfp-arrow:before,.mfp-arrow .mfp-b{border-top-width:21px;border-bottom-width:21px;}.mfp-arrow-left{left:0;}.mfp-arrow-left:after,.mfp-arrow-left .mfp-a{border-right:17px solid #FFF;margin-left:31px;}.mfp-arrow-left:before,.mfp-arrow-left .mfp-b{margin-left:25px;border-right:27px solid #3f3f3f;}.mfp-arrow-right{right:0;}.mfp-arrow-right:after,.mfp-arrow-right .mfp-a{border-left:17px solid #FFF;margin-left:39px;}.mfp-arrow-right:before,.mfp-arrow-right .mfp-b{border-left:27px solid #3f3f3f;}.mfp-iframe-holder{padding-top:40px;padding-bottom:40px;}.mfp-iframe-holder .mfp-content{line-height:0;width:100%;max-width:900px;}.mfp-iframe-holder .mfp-close{top:-40px;}.mfp-iframe-scaler{width:100%;height:0;overflow:hidden;padding-top:56.25%;}.mfp-iframe-scaler iframe{position:absolute;display:block;top:0;left:0;width:100%;height:100%;-webkit-box-shadow:0 0 8px rgba(0,0,0,0.6);box-shadow:0 0 8px rgba(0,0,0,0.6);background:#000;}img.mfp-img{width:auto;max-width:100%;height:auto;display:block;line-height:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:40px 0 40px;margin:0 auto;}.mfp-figure{line-height:0;}.mfp-figure:after{content:\'\';position:absolute;left:0;top:40px;bottom:40px;display:block;right:0;width:auto;height:auto;z-index:-1;-webkit-box-shadow:0 0 8px rgba(0,0,0,0.6);box-shadow:0 0 8px rgba(0,0,0,0.6);background:#444;}.mfp-figure small{color:#BDBDBD;display:block;font-size:12px;line-height:14px;}.mfp-bottom-bar{margin-top:-36px;position:absolute;top:100%;left:0;width:100%;cursor:auto;}.mfp-title{text-align:left;line-height:18px;color:#F3F3F3;word-wrap:break-word;padding-right:36px;}.mfp-image-holder .mfp-content{max-width:100%;}.mfp-gallery .mfp-image-holder .mfp-figure{cursor:pointer;}@media screen and (max-width:800px) and (orientation:landscape),screen and (max-height:300px){.mfp-img-mobile .mfp-image-holder{padding-left:0;padding-right:0;}.mfp-img-mobile img.mfp-img{padding:0;}.mfp-img-mobile .mfp-figure:after{top:0;bottom:0;}.mfp-img-mobile .mfp-figure small{display:inline;margin-left:5px;}.mfp-img-mobile .mfp-bottom-bar{background:rgba(0,0,0,0.6);bottom:0;margin:0;top:auto;padding:3px 5px;position:fixed;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}.mfp-img-mobile .mfp-bottom-bar:empty{padding:0;}.mfp-img-mobile .mfp-counter{right:5px;top:3px;}.mfp-img-mobile .mfp-close{top:0;right:0;width:35px;height:35px;line-height:35px;background:rgba(0,0,0,0.6);position:fixed;text-align:center;padding:0;}}@media all and (max-width:900px){.mfp-arrow{-webkit-transform:scale(0.75);-ms-transform:scale(0.75);-webkit-transform:scale(0.75);-ms-transform:scale(0.75);transform:scale(0.75);}.mfp-arrow-left{-webkit-transform-origin:0;-ms-transform-origin:0;-webkit-transform-origin:0;-ms-transform-origin:0;transform-origin:0;}.mfp-arrow-right{-webkit-transform-origin:100%;-ms-transform-origin:100%;-webkit-transform-origin:100%;-ms-transform-origin:100%;transform-origin:100%;}.mfp-container{padding-left:14px;padding-right:14px;}}.mfp-ie7 .mfp-img{padding:0;}.mfp-ie7 .mfp-bottom-bar{width:600px;left:50%;margin-left:-300px;margin-top:5px;padding-bottom:5px;}.mfp-ie7 .mfp-container{padding:0;}.mfp-ie7 .mfp-content{padding-top:44px;}.mfp-ie7 .mfp-close{top:0;right:0;padding-top:0;}h1.inline{margin-top:48px;}@media (max-width:1199px){h1.inline{margin-top:38px;}}@media (max-width:699px){h1.inline{margin-top:16px;}}.note{margin:0 0 30px 0;padding:0 30px 24px;background:rgba(255,255,255,0.5);border:solid 1px rgba(0,0,0,0.06);border-radius:5px;}.note h3{margin:24px 0;}@media (max-width:699px){.note{margin-bottom:16px;padding:20px 22px;}}.card .note{margin:30px 0 0 0;background:rgba(248,247,246,0.5);}@media (max-width:699px){.card .note{margin:20px -12px 0;}}code{display:inline-block;padding:0 6px;background:#fff;border:solid 1px rgba(0,0,0,0.06);border-radius:3px;}xmp{padding:6px 12px;background:#fff;border:solid 1px rgba(0,0,0,0.06);border-radius:3px;font-size:14px;line-height:22px;white-space:pre-wrap;}div.demo h1,div.demo h2,div.demo h3,div.demo h4,div.demo h5,div.demo h6{margin-top:24px !important;margin-bottom:0 !important;padding-left:0 !important;}div.demo h1.lg,div.demo h4.lg{text-align:left;}.readings.demo .reading{margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRDJCLEFBV3NCLEFBS0ssQUFJTyxBQU1NLEFBUVYsQUFJRSxBQUlULEFBSUksQUFPSCxBQUlJLEFBSU4sQUFLZ0IsQUFLaEIsQUFNRyxBQUlJLEFBSU4sQUFJbUIsQUFJaEIsQUFJTyxBQUtVLEFBT2hCLEFBZWUsQUFtQmpCLEFBb0JMLEFBUU0sQUFLRyxBQUtILEFBS0csQUFNRCxBQVNJLEFBSUEsQUFTQSxBQU1ELEFBTUYsQUFRRSxBQU1KLEFBS2dCLEFBYWIsQUFNQSxBQUthLEFBV1osQUFNSSxBQUtHLEFBY21ELEFBYTlDLEFBU1osQUFLQSxBQUtBLEFBS0YsQUFHRSxBQUtPLEFBY21ELEFBYzlELEFBR0EsQUFRMEIsQUFNN0IsQUFNQSxBQVFJLEFBUU0sQUFNSixBQU9BLEFBT0csQUFLWCxBQU9RLEFBTUgsQUFJRyxBQU1SLEFBTVEsQUFNUixBQU1NLEFBT0UsQUFNUixBQU1BLEFBUVMsQUFJRixBQU9FLEFBS0EsQUFRUCxBQUtBLEFBUVEsQUFLSCxBQU1FLEFBS0YsQUFNZ0UsQUFJUCxBQUluRCxBQUlMLEFBSUMsQUFLSixBQVNJLEFBS1EsQUFPUixBQU9BLEFBSUMsQUFJSCxBQUlPLEFBU1AsQUFLRSxBQUdHLEFBU0gsQUFHRyxBQU1MLEFBT0osQUFNQSxBQVVHLEFBZ0JBLEFBTUQsQUFNRixBQU9TLEFBYUEsQUFRVixBQUlFLEFBSUYsQUFJRCxBQUtPLEFBR0YsQUFRQSxBQWNlLEFBU2hCLEFBTUksQUFVTSxBQU9ULEFBWVMsQUFLYixBQVlBLEFBVW1CLEFBUVgsQUFJRCxBQUtMLEFBSWMsQUFRVSxBQUtILEFBS0EsQUFPRyxBQUtILEFBS0EsQUFRQSxBQUtBLEFBS0csQUFRSCxBQUtBLEFBS0csQUFRQSxBQUtILEFBUUcsQUFLSCxBQVFBLEFBS0csQUFRSCxBQUtHLEFBUXBCLEFBYWtCLEFBUUMsQUFVTixBQVNDLEFBVW5CLEFBV0UsQUFJQyxBQUdDLEFB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QSxDQWozQ2lFLElBaWlDUSxDQTlFQSxFQWh2QmxDLENBL21DdkMsR0F6UEEsQUFxUUEsQUFnbUVBLGNBdDFDMEIsQ0EwakNjLENBZ0NBLFFBaUJnQyxNQWp4Qm5CLFFBelZqQyxZQTRsRDhDLENBdCtDSixHQW8rQmQsQ0FnQ3dCLENBem5DeEUsQ0FqYW1CLElBdWpEcUQsQ0E5RUEsWUF4K0N4RSxJQXl2QjZDLGFBaXhCMEIsS0E2ZnZFLElBN2dCd0MsY0FrZ0J1QixJQWx3QzNDLElBZ3lCbUQsTUE2QkEsQ0E5RUEsT0E5dUJ6QyxTQTh0QkssQUF3akJuQyxZQXRnQnNFLE9BL3dCcEQsYUF0T0UsQ0FvOEJZLEVBN3RCaEMsUUE4eEJvRSxNQTZCQSxDQWppQ3pELEFBbTlCeUQsU0FsOUJwRSxrQkFvL0JtRSxRQWpCaEMsaUNBQ0gsNkJBakNtQixpQkFraUJuRCxhQWplQSxNQTZCQSxDQTlFQSx5QkFrQ0EsdUJBaEJtRCxtRkFqQ2QsbUNBQ3JDLGtEQWlDQSIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dHMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvanVsaWV0L0FwcCIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExheW91dHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IgJiYgJ1B1c2hNYW5hZ2VyJyBpbiB3aW5kb3cpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJykudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTVyByZWdpc3RlcmVkOiAnLCByZWdpc3RyYXRpb24pXG4gICAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAgICAgICAgIGlmICghcmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQdXNoIFVuc3VwcG9ydGVkXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgdmFwaWRQdWJsaWNLZXkgPSAnQlBDbkFEakRWRnNleExuajZFU1JIdXU5WWxEd2c3UDhiOGs0X21pNDhMQjhVREFZdlRwQVdZZkJvZlVEOEY5TFdraDZVMGRKcVgwa0NvRi15V2ItdGJNJ1xuICAgICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRWYXBpZEtleSA9IHVybEJhc2U2NFRvVWludDhBcnJheSh2YXBpZFB1YmxpY0tleSlcbiAgICAgICAgICAgICAgZnVuY3Rpb24gdXJsQmFzZTY0VG9VaW50OEFycmF5IChiYXNlNjRTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gJz0nLnJlcGVhdCgoNCAtIGJhc2U2NFN0cmluZy5sZW5ndGggJSA0KSAlIDQpXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0ID0gKGJhc2U2NFN0cmluZyArIHBhZGRpbmcpLnJlcGxhY2UoL1xcLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aClcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRBcnJheVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLCAvLyBBbHdheXMgZGlzcGxheSBub3RpZmljYXRpb25zXG4gICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleTogY29udmVydGVkVmFwaWRLZXlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHN1YnNjcmlwdGlvbiA9PlxuICAgICAgICAgICAgICAgICAgZmV0Y2goJy9yZWdpc3RlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdQdXNoIHN1YnNjcmlwdGlvbiBlcnJvcjogJywgZXJyKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSkuY2F0Y2gocmVnaXN0cmF0aW9uRXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NXIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIHJlZ2lzdHJhdGlvbkVycm9yKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBXaGFyZSBIYXVvcmEgV2ViIEFwcCBDU1MgKFNDU1MpXG4gICAgICAgICAgYnkgQmVuZWsgTGlzZWZza2lcbiAgICAgICAgICBodHRwOi8vYmVuZWsubnpcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBSZXNldHMgJiBGaXhlc1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgICoge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBuYXYsIHNlY3Rpb24sIHN1bW1hcnkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXVkaW8sIGNhbnZhcywgdmlkZW8ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgKmRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICp6b29tOiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgICAtby1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYiwgc3Ryb25nIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmFjdGl2ZSwgYTpob3ZlciwgYTpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN1Yiwgc3VwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3VwIHtcbiAgICAgICAgICAgIHRvcDogLTAuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN1YiB7XG4gICAgICAgICAgICBib3R0b206IC0wLjI1ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nLCBhIGltZyB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWVsZHNldCB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ncmFkaWVudCB7XG4gICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogbm9uZTtcbiAgICAgICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgICAgIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgVmFyaWFibGVzXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgTWl4aW5zXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgTGF5b3V0IEhlbHBlcnNcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAuaXIsXG4gICAgICAgICAgLmxvZ28sXG4gICAgICAgICAgLmxvZ28tc20ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogLTEwMDBlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xlYXJmaXg6YWZ0ZXIsXG4gICAgICAgICAgLnJlYWRpbmdzOmFmdGVyLFxuICAgICAgICAgIC5yYXRpbmc6YWZ0ZXIsXG4gICAgICAgICAgLmNhcmQgPiBmb290ZXI6YWZ0ZXIsXG4gICAgICAgICAgLnN1bW1hcnktZ3JpZDphZnRlcixcbiAgICAgICAgICAuY2FyZC5yZXBvcnQ6YWZ0ZXIsXG4gICAgICAgICAgLmNhcmQucmVwb3J0IC5yZXBvcnQtY2FyZDphZnRlcixcbiAgICAgICAgICAuY2FyZC5wcmUtbG9nOmFmdGVyLFxuICAgICAgICAgIC5jYXJkLnByZS1sb2cgLnRleHQgPiBmb290ZXI6YWZ0ZXIsXG4gICAgICAgICAgLmZvcm0tcm93OmFmdGVyLFxuICAgICAgICAgIC5zZW5zb3ItYWxlcnRzIGxpOmFmdGVyLFxuICAgICAgICAgIC5tb2RhbCA+IGZvb3RlcjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIi5cIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xlYXJmaXgsXG4gICAgICAgICAgLnJlYWRpbmdzLFxuICAgICAgICAgIC5yYXRpbmcsXG4gICAgICAgICAgLmNhcmQgPiBmb290ZXIsXG4gICAgICAgICAgLnN1bW1hcnktZ3JpZCxcbiAgICAgICAgICAuY2FyZC5yZXBvcnQsXG4gICAgICAgICAgLmNhcmQucmVwb3J0IC5yZXBvcnQtY2FyZCxcbiAgICAgICAgICAuY2FyZC5wcmUtbG9nLFxuICAgICAgICAgIC5jYXJkLnByZS1sb2cgLnRleHQgPiBmb290ZXIsXG4gICAgICAgICAgLmZvcm0tcm93LFxuICAgICAgICAgIC5zZW5zb3ItYWxlcnRzIGxpLFxuICAgICAgICAgIC5tb2RhbCA+IGZvb3RlciB7XG4gICAgICAgICAgICB6b29tOiAxO1xuICAgICAgICAgICAgLyogZm9yIElFICovXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgUmVzcG9uc2l2ZSBIZWxwZXJzXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLm5hcnJvdy1kb3duLW9ubHkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgICAgICAubmFycm93LWRvd24tb25seSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb2Itb25seSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgLm1vYi1vbmx5IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICAubW9iLWhpZGUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgIExhcmdlIHNlY3Rpb25zICYgY29udGFpbmVyc1xuICAgICAgICAgIChTZWUgYWxzbyBfbmF2KVxuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjdmNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY3ZjY7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgICAgICBib2R5Lm1lbnUtaXMtb3BlbiB7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNjBweCA2MHB4IDMwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMzhweCAzNnB4IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQ0cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEyODBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5LnByZS1sb2cgLmNvbnRlbnQge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDYwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgIGJvZHkucHJlLWxvZyAuY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIGJvZHkucHJlLWxvZyAuY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5LnByZS1sb2cgLmNlbnRlciB7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5wcmUtbG9nIC5jZW50ZXIgLmhlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgYm9keS5wcmUtbG9nIC5jZW50ZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5LnByZS1sb2cgLmltZy1mdWxsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY3ZjY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5wcmUtbG9nIC5pbWctZnVsbDphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhmN2Y2IDAlLCByZ2JhKDI0OCwgMjQ3LCAyNDYsIDApIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZjhmN2Y2KSwgdG8ocmdiYSgyNDgsIDI0NywgMjQ2LCAwKSkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y4ZjdmNiAwJSwgcmdiYSgyNDgsIDI0NywgMjQ2LCAwKSAxMDAlKTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkuZW1wdHkgLmNvbnRlbnQge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5lbXB0eSAuY2VudGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5lbXB0eSAuZW1wdHktdGV4dCBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTJweCAwIDAgMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5lbXB0eSAuZW1wdHktdGV4dCAuYnRuIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjRweCAwIDAgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIGJvZHkuZW1wdHkgLmVtcHR5LXRleHQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHkuZW1wdHkgLmVtcHR5LXRleHQgLmJ0biB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5lbXB0eSAuaW1nLWZ1bGwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjdmNjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5LmVtcHR5IC5pbWctZnVsbDphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZjhmN2Y2IDAlLCByZ2JhKDI0OCwgMjQ3LCAyNDYsIDApIDEwMCUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZjhmN2Y2KSwgdG8ocmdiYSgyNDgsIDI0NywgMjQ2LCAwKSkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y4ZjdmNiAwJSwgcmdiYSgyNDgsIDI0NywgMjQ2LCAwKSAxMDAlKTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgYm9keS5lbXB0eSAuaW1nLWZ1bGwge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5LmVtcHR5IC5pbWctZnVsbDphZnRlciB7XG4gICAgICAgICAgICAgIGhlaWdodDogMjV2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBUeXBlXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250OiA0MDAgMTZweC8yOHB4IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgICBmb250OiAzMDAgMzZweC80MnB4IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA0OHB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEubGcge1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMS5zbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBtYXJnaW46IC0xMnB4IDAgMjRweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMS5sZyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgxLnNtIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQ6IDcwMCAyNHB4LzMwcHggXCJNZXJyaXdlYXRoZXJcIiwgc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIGgyLnNlY29uZGFyeSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIuYWNjZW50IHtcbiAgICAgICAgICAgIGNvbG9yOiAjYWJjYzc1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgyIC5zZW5zb3Ige1xuICAgICAgICAgICAgbWFyZ2luOiAtNHB4IDEycHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udDogNzAwIDE4cHgvMjRweCBcIk1lcnJpd2VhdGhlclwiLCBzZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgzIC5zZW5zb3Ige1xuICAgICAgICAgICAgbWFyZ2luOiAtM3B4IDEycHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udDogNDAwIDE0cHgvMjJweCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDQubGcge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICBoNC5sZyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udDogNDAwIDEycHgvMThweCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDYge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udDogNzAwIDExcHgvMTNweCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMCAwIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcC5zbSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAuc20ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHAubGlnaHQsXG4gICAgICAgICAgc3Bhbi5saWdodCB7XG4gICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCxcbiAgICAgICAgICBvbCB7XG4gICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyNHB4IDAgMCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsID4gbGksXG4gICAgICAgICAgb2wgPiBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsID4gbGk6bGFzdC1jaGlsZCxcbiAgICAgICAgICBvbCA+IGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIHVsLFxuICAgICAgICAgICAgb2wge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsID4gbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uL3N0YXRpYy9pbWcvYnVsbGV0LnN2Z1wiKSBuby1yZXBlYXQgM3B4IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bC5jaGVjayA+IGxpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uL3N0YXRpYy9pbWcvYnVsbGV0LWNoZWNrLnN2Z1wiKSBuby1yZXBlYXQgbGVmdCA2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwuY2hlY2sgPiBsaS5idWxsZXQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vc3RhdGljL2ltZy9idWxsZXQuc3ZnXCIpIG5vLXJlcGVhdCAzcHggOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsLmNoZWNrID4gbGkubm9uZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9sIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9sID4gbGkge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIGR0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udDogNzAwIDExcHgvMTNweCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGFiZWwuaGlkZGVuIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIGxhYmVsLmhpZGRlbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjRweCAwIDAgMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGwgZHQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRsIGRkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGwgZGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRsLmNvbDQge1xuICAgICAgICAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDQ7XG4gICAgICAgICAgICAtbW96LWNvbHVtbi1jb3VudDogNDtcbiAgICAgICAgICAgIGNvbHVtbi1jb3VudDogNDtcbiAgICAgICAgICAgIC13ZWJraXQtY29sdW1uLXdpZHRoOiAyNSU7XG4gICAgICAgICAgICAtbW96LWNvbHVtbi13aWR0aDogMjUlO1xuICAgICAgICAgICAgY29sdW1uLXdpZHRoOiAyNSU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGwuY29sNCBkZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgZGwge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGwuY29sNCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTEycHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xuICAgICAgICAgICAgICAtbW96LWNvbHVtbi1jb3VudDogMjtcbiAgICAgICAgICAgICAgY29sdW1uLWNvdW50OiAyO1xuICAgICAgICAgICAgICAtd2Via2l0LWNvbHVtbi13aWR0aDogNTAlO1xuICAgICAgICAgICAgICAtbW96LWNvbHVtbi13aWR0aDogNTAlO1xuICAgICAgICAgICAgICBjb2x1bW4td2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRsLmNvbDQgZGQge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGwuY29sNCBkZDpudGgtY2hpbGQoNG4rMikge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGIsXG4gICAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgTG9nb1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMTdweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uL3N0YXRpYy9pbWcvbG9nby5zdmdcIikgbm8tcmVwZWF0IGxlZnQgdG9wO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvLXNtIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNzRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vc3RhdGljL2ltZy9sb2dvLXNtLnN2Z1wiKSBuby1yZXBlYXQgbGVmdCB0b3A7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgSGVhZGVyICh0YWJsZXQgZG93bilcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOXB4IDM2cHggMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxM3B4IDI0cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3Blbi1tZW51IHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5vcGVuLW1lbnUgLmxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5vcGVuLW1lbnUgaW1nLFxuICAgICAgICAgIC5vcGVuLW1lbnUgc3ZnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlIC4ycztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlIC4ycztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC4ycztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm8tdG91Y2ggLm9wZW4tbWVudTpob3ZlciAubGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIC5vcGVuLW1lbnU6aG92ZXIgc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogIzE5MTkxOTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3Blbi1tZW51OmFjdGl2ZSAubGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm9wZW4tbWVudTphY3RpdmUgc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogIzAwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC5vcGVuLW1lbnUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3Blbi1tZW51IC5sYWJlbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgTmF2IFBhbmVsXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUgPiBoZWFkZXIge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMThweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51ID4gaGVhZGVyIGg2IHtcbiAgICAgICAgICAgIGNvbG9yOiAjYWJjYzc1O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51ID4gaGVhZGVyIC54IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMjFweDtcbiAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudSA+IGhlYWRlciAuc2VsZWN0Ym94aXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0OHB4KTtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAtMjRweCAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudSA+IGZvb3RlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUgPiBmb290ZXIgLnNlbGVjdGJveGl0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMzZweCk7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAtMThweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudSA+IGZvb3RlcjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTI0cHg7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBmcm9tKHdoaXRlKSwgdG8ocmdiYSgyNTUsIDI1NSwgMjU1LCAwKSkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgd2hpdGUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB3aGl0ZSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudSA+IGZvb3RlcjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICAgICAgbGVmdDogMThweDtcbiAgICAgICAgICAgIHJpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudSAubmF2IHtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDAgMjRweDtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE3NnB4KTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaWUgLm1lbnUgLm5hdiAubmF2LWxpbmtzOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudSAubmF2IGg2IHtcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDhweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDMwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUubXVsdGktd2hhcmUgPiBoZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNjRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudS5tdWx0aS13aGFyZSAubmF2IHtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIyMHB4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBUYWIgLyBNb2IgTWVudVxuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBvdmVybGF5LWluIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDElIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIG92ZXJsYXktaW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMSUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG92ZXJsYXktb3V0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDk5JSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIG92ZXJsYXktb3V0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDk5JSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbWVudS1pbiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIG1lbnUtaW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG1lbnUtb3V0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgbWVudS1vdXQge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTAxO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuOCk7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1pcy1vcGVuIC5vdmVybGF5IHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG92ZXJsYXktaW4gLjNzO1xuICAgICAgICAgICAgICBhbmltYXRpb246IG92ZXJsYXktaW4gLjNzO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUtaXMtY2xvc2luZyAub3ZlcmxheSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBvdmVybGF5LW91dCAuM3M7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogb3ZlcmxheS1vdXQgLjNzO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWlzLW9wZW4gLm1lbnUge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG1lbnUtaW4gLjNzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBtZW51LWluIC4zcztcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtaXMtY2xvc2luZyAubWVudSB7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbWVudS1vdXQgLjNzO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBtZW51LW91dCAuM3M7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSArIDFweCk7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgPiBoZWFkZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51ID4gaGVhZGVyIC5sb2dvIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51ID4gaGVhZGVyIGg2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSA+IGhlYWRlciAueCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgPiBoZWFkZXIgLnNlbGVjdGJveGl0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSA+IGZvb3RlciB7XG4gICAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51IC5uYXYge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTJweCk7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA5NnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUubXVsdGktd2hhcmUgPiBoZWFkZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS5tdWx0aS13aGFyZSAubmF2IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEycHgpO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgPiBoZWFkZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSA+IGhlYWRlciBoNiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgPiBoZWFkZXIgLngge1xuICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgPiBoZWFkZXIgLnNlbGVjdGJveGl0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51ID4gaGVhZGVyIC5zZWxlY3Rib3hpdC1jb250YWluZXIgLnNlbGVjdGJveGl0LWJ0bi53aGFyZS1waWNrZXIgLnNlbGVjdGJveGl0LXRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51ID4gZm9vdGVyIHtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAyNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lbnUgPiBmb290ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51ID4gZm9vdGVyIC5zZWxlY3Rib3hpdC1jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgLTE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudSAubmF2IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODhweCk7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA5NnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS5tdWx0aS13aGFyZSA+IGhlYWRlciB7XG4gICAgICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51Lm11bHRpLXdoYXJlIC5uYXYge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4OHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBQcmUtbG9naW4gaGVhZGVyXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgYm9keS5wcmUtbG9nIC5oZWFkZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDYwcHggMCA0OHB4IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkucHJlLWxvZyAuaGVhZGVyIC5sb2dvIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9keS5wcmUtbG9nIC5oZWFkZXIgLmJ0biB7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIGJvZHkucHJlLWxvZyAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTNweCAwIDE2cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvZHkucHJlLWxvZyAuaGVhZGVyIC5sb2dvIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE3NHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDE4cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uL3N0YXRpYy9pbWcvbG9nby1zbS5zdmdcIikgbm8tcmVwZWF0IGxlZnQgdG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keS5wcmUtbG9nIC5oZWFkZXIgLmJ0biB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMjRweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkucHJlLWxvZyBmb290ZXIubGFuZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICBib3R0b206IDE4cHg7XG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE4NHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvZHkucHJlLWxvZyBmb290ZXIubGFuZyBoNiB7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBib2R5LnByZS1sb2cgZm9vdGVyLmxhbmcgLnNlbGVjdGJveGl0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgYm9keS5wcmUtbG9nIGZvb3Rlci5sYW5nIHtcbiAgICAgICAgICAgICAgYm90dG9tOiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgVGV4dCBMaW5rc1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIGE6bGluayxcbiAgICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlIC4ycztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlIC4ycztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC4ycztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm8tdG91Y2ggYTpsaW5rOmhvdmVyLCAubm8tdG91Y2hcbiAgICAgICAgICBhOnZpc2l0ZWQ6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMxOTE5MTk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIGE6bGluazphY3RpdmUsIC5uby10b3VjaFxuICAgICAgICAgIGE6dmlzaXRlZDphY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS51bmRlcmxpbmUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEudW5kZXJsaW5lOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMzMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLnVuZGVybGluZTpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMTkxOTE5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLnVuZGVybGluZTphY3RpdmU6YWZ0ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBCdXR0b25zXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgYS5idG4ge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJ0biBpbWcsXG4gICAgICAgICAgYS5idG4gc3ZnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJ0biBpbWcgcGF0aCxcbiAgICAgICAgICBhLmJ0biBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmJ0bjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOTE5MTk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIGEuYnRuOmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS5idG4uZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIGEuYnRuLmRpc2FibGVkOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIGEuYnRuLmRpc2FibGVkOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEuYnRuLmljb24tb25seSBpbWcsXG4gICAgICAgICAgYS5idG4uaWNvbi1vbmx5IHN2ZyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJ0bi5zbWFsbCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJ0bi5hbGVydCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWE2NzIwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmJ0bi5hbGVydDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDc1NTBmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmJ0bi5hbGVydDphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2MyNGEwYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJ0bi5hbGVydC5kaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmJ0bi5hbGVydC5kaXNhYmxlZDpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmJ0bi5hbGVydC5kaXNhYmxlZDphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJ0bi1hZGQge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjYWJjYzc1O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJ0bi1hZGQuYXBwZW5kLXRhYmxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJ0bi1hZGQuYXBwZW5kLWNhcmQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJ0bi1hZGQuYXBwZW5kLXRvcCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEuYnRuLWFkZC5hcHBlbmQtbWlkZGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEuYnRuLWFkZCBpbWcsXG4gICAgICAgICAgYS5idG4tYWRkIHN2ZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEuYnRuLWFkZCBpbWcgcGF0aCxcbiAgICAgICAgICBhLmJ0bi1hZGQgc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogI2FiY2M3NTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmJ0bi1hZGQ6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICM5NmI4NWM7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmJ0bi1hZGQ6aG92ZXIgc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogIzk2Yjg1YztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm8tdG91Y2ggYS5idG4tYWRkOmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzg2YWI0YTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIGEuYnRuLWFkZDphY3RpdmUgc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogIzg2YWI0YTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgICAgICBhLmJ0bi1hZGQuYXBwZW5kLWNhcmQge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgYS5idG4tYWRkIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYS5idG4tYWRkIGltZyxcbiAgICAgICAgICAgIGEuYnRuLWFkZCBzdmcge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhLmJ0bi1hZGQuYXBwZW5kLXRhYmxlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYS5idG4tYWRkLmFwcGVuZC1jYXJkIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAyNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYS5idG4tYWRkLmFwcGVuZC10b3Age1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEycHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTEycHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhLmJ0bi1hZGQuYXBwZW5kLW1pZGRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBJY29uIExpbmtzXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgYS5oZWFkLWFjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmhlYWQtYWN0aW9uIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlIC4ycztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCBlYXNlIC4ycztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC4ycztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm8tdG91Y2ggYS5oZWFkLWFjdGlvbjpob3ZlciBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmhlYWQtYWN0aW9uOmFjdGl2ZSBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEuaGVhZC1hY3Rpb24uaW52IHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmhlYWQtYWN0aW9uLmludjpob3ZlciBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmhlYWQtYWN0aW9uLmludjphY3RpdmUgc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS5pIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS5pIGltZywgYS5pIHN2ZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS5pIGltZyBwYXRoLCBhLmkgc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmk6aG92ZXIgc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm8tdG91Y2ggYS5pOmFjdGl2ZSBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEuZGVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogI2VhNjcyMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmRlbCBpbWcsXG4gICAgICAgICAgYS5kZWwgc3ZnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS5kZWwgc3ZnIHBhdGgge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIGEuZGVsOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZDc1NTBmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmRlbDpob3ZlciBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjZDc1NTBmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmRlbDphY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICNjMjRhMGE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIGEuZGVsOmFjdGl2ZSBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjYzI0YTBhO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEuZGVsLnRhYmxlLWFjdGlvbiBzdmcge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS5jYW5jZWwge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmNhbmNlbDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm8tdG91Y2ggYS5jYW5jZWw6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEuZWRpdC50YWJsZS1hY3Rpb24gc3ZnIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogI2FiY2M3NTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmVkaXQudGFibGUtYWN0aW9uOmhvdmVyIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICM5NmI4NWM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIGEuZWRpdC50YWJsZS1hY3Rpb246YWN0aXZlIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICM4NmFiNGE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS5iYWNrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB3aWR0aDogMTlweDtcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMThweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJhY2sgaW1nLCBhLmJhY2sgc3ZnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhLmJhY2sgaW1nIHBhdGgsIGEuYmFjayBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIGEuYmFjazpob3ZlciBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLmJhY2s6YWN0aXZlIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgUGFnaW5hdGlvblxuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjRweCAwIDZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYWdpbmF0aW9uIC5idG4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFnaW5hdGlvbiAucGFnZXMge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYWdpbmF0aW9uIC5wYWdlcyBhIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFnaW5hdGlvbiAucGFnZXMgYTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFnaW5hdGlvbiAucGFnZXMgYTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFnaW5hdGlvbiAucGFnZXMgYS5jdXJyZW50IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IC00cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdpbmF0aW9uIC5idG4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gOHB4KTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDRweCA2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdpbmF0aW9uIC5wYWdlcyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTJweCAwIDE4cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBTZW5zb3IgcGlsbFxuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIHNwYW4uc2Vuc29yLFxuICAgICAgICAgIGEuc2Vuc29yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYmNjNzU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLnNlbnNvcjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTZiODVjO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCBhLnNlbnNvcjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzg2YWI0YTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBMb2FkZXJcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAtNnB4IDAgMCAtNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZC1ib3VuY2UgLjhzIGVhc2UgMHMgaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb246IGxvYWQtYm91bmNlIC44cyBlYXNlIDBzIGluZmluaXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkLWJvdW5jZSB7XG4gICAgICAgICAgICAwJSwgMTAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIGxvYWQtYm91bmNlIHtcbiAgICAgICAgICAgIDAlLCAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgIERlZmF1bHQgUmVhZGluZyBTdHJ1Y3R1cmVcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAucmVhZGluZ3Mge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcgLnZpcyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA3MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlIC4zcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZSAuM3M7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UgLjNzO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkOWQyZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZyAudmFsdWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjA1ZW07XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIGVhc2UgLjNzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgZWFzZSAuM3M7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlIC4zcztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICAgICAgY29sb3I6ICM0ZDlkMmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICAucmVhZGluZyAudmFsdWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nIC5sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDAgMDtcbiAgICAgICAgICAgIGZvbnQ6IDcwMCAxMXB4LzEzcHggXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMWVtO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciBlYXNlIC4zcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGNvbG9yIGVhc2UgLjNzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZSAuM3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICAucmVhZGluZyAubGFiZWwge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcgLnRpbWUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgIFRlbXBlcmF0dXJlIFNjYWxlXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLnJlYWRpbmcudGVtcC1oaWdoLTJiIC52aXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UzOGUxNCB1cmwoXCIuLi9zdGF0aWMvaW1nL3NjYWxlL3RlbXAtaGlnaC0yYi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcudGVtcC1oaWdoLTJiIC52YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogI2UzOGUxNDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy50ZW1wLWhpZ2gtMmEgLnZpcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTM4ZTE0IHVybChcIi4uL3N0YXRpYy9pbWcvc2NhbGUvdGVtcC1oaWdoLTJhLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy50ZW1wLWhpZ2gtMmEgLnZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZTM4ZTE0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLnRlbXAtaGlnaC0xYiAudmlzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMGI1MGEgdXJsKFwiLi4vc3RhdGljL2ltZy9zY2FsZS90ZW1wLWhpZ2gtMWIuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLnRlbXAtaGlnaC0xYiAudmFsdWUge1xuICAgICAgICAgICAgY29sb3I6ICNlMGI1MGE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcudGVtcC1oaWdoLTFhIC52aXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UwYjUwYSB1cmwoXCIuLi9zdGF0aWMvaW1nL3NjYWxlL3RlbXAtaGlnaC0xYS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcudGVtcC1oaWdoLTFhIC52YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogI2UwYjUwYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy50ZW1wLW1pZC1iIC52aXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkOWQyZSB1cmwoXCIuLi9zdGF0aWMvaW1nL3NjYWxlL3RlbXAtbWlkLWIuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLnRlbXAtbWlkLWIgLnZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNGQ5ZDJlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLnRlbXAtbWlkLWEgLnZpcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ5ZDJlIHVybChcIi4uL3N0YXRpYy9pbWcvc2NhbGUvdGVtcC1taWQtYS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcudGVtcC1taWQtYSAudmFsdWUge1xuICAgICAgICAgICAgY29sb3I6ICM0ZDlkMmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcudGVtcC1sb3ctMWEgLnZpcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmQ4ZDczIHVybChcIi4uL3N0YXRpYy9pbWcvc2NhbGUvdGVtcC1sb3ctMWEuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLnRlbXAtbG93LTFhIC52YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzJkOGQ3MztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy50ZW1wLWxvdy0xYiAudmlzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZDhkNzMgdXJsKFwiLi4vc3RhdGljL2ltZy9zY2FsZS90ZW1wLWxvdy0xYi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcudGVtcC1sb3ctMWIgLnZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMmQ4ZDczO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLnRlbXAtbG93LTJhIC52aXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzM1NmJiNSB1cmwoXCIuLi9zdGF0aWMvaW1nL3NjYWxlL3RlbXAtbG93LTJhLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy50ZW1wLWxvdy0yYSAudmFsdWUge1xuICAgICAgICAgICAgY29sb3I6ICMzNTZiYjU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcudGVtcC1sb3ctMmIgLnZpcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzU2YmI1IHVybChcIi4uL3N0YXRpYy9pbWcvc2NhbGUvdGVtcC1sb3ctMmIuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLnRlbXAtbG93LTJiIC52YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzM1NmJiNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBIdW1pZGl0eSBTY2FsZVxuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC5yZWFkaW5nLmh1bS1oaWdoLTJiIC52aXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzEzYTNiZCB1cmwoXCIuLi9zdGF0aWMvaW1nL3NjYWxlL2h1bS1oaWdoLTJiLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy5odW0taGlnaC0yYiAudmFsdWUge1xuICAgICAgICAgICAgY29sb3I6ICMxM2EzYmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcuaHVtLWhpZ2gtMmEgLnZpcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTNhM2JkIHVybChcIi4uL3N0YXRpYy9pbWcvc2NhbGUvaHVtLWhpZ2gtMmEuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLmh1bS1oaWdoLTJhIC52YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzEzYTNiZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy5odW0taGlnaC0xYiAudmlzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMGEwNzYgdXJsKFwiLi4vc3RhdGljL2ltZy9zY2FsZS9odW0taGlnaC0xYi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcuaHVtLWhpZ2gtMWIgLnZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzBhMDc2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLmh1bS1oaWdoLTFhIC52aXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwYTA3NiB1cmwoXCIuLi9zdGF0aWMvaW1nL3NjYWxlL2h1bS1oaWdoLTFhLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy5odW0taGlnaC0xYSAudmFsdWUge1xuICAgICAgICAgICAgY29sb3I6ICMzMGEwNzY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcuaHVtLW1pZC1iIC52aXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkOWQyZSB1cmwoXCIuLi9zdGF0aWMvaW1nL3NjYWxlL2h1bS1taWQtYi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcuaHVtLW1pZC1iIC52YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzRkOWQyZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy5odW0tbWlkLWEgLnZpcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ5ZDJlIHVybChcIi4uL3N0YXRpYy9pbWcvc2NhbGUvaHVtLW1pZC1hLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy5odW0tbWlkLWEgLnZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNGQ5ZDJlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgIERld3BvaW50IFNjYWxlXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLnJlYWRpbmcuZGV3LWhpZ2gtMiAudmlzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxM2EzYmQgdXJsKFwiLi4vc3RhdGljL2ltZy9zY2FsZS9kZXctaGlnaC0yLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNhbGMoNTAlIC0gMXB4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy5kZXctaGlnaC0yIC52YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzEzYTNiZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy5kZXctaGlnaC0xIC52aXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwYTA3NiB1cmwoXCIuLi9zdGF0aWMvaW1nL3NjYWxlL2Rldy1oaWdoLTEuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2FsYyg1MCUgLSAxcHgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLmRldy1oaWdoLTEgLnZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzBhMDc2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLmRldy1taWQgLnZpcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ5ZDJlIHVybChcIi4uL3N0YXRpYy9pbWcvc2NhbGUvZGV3LW1pZC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjYWxjKDUwJSAtIDFweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcuZGV3LW1pZCAudmFsdWUge1xuICAgICAgICAgICAgY29sb3I6ICM0ZDlkMmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgRXhwaXJlZFxuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC5yZWFkaW5nLmV4cGlyZWQgLnZpcyxcbiAgICAgICAgICAuZXhwaXJlZCAucmVhZGluZyAudmlzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNikgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy5leHBpcmVkIC52YWx1ZSxcbiAgICAgICAgICAuZXhwaXJlZCAucmVhZGluZyAudmFsdWUge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNikgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy5leHBpcmVkIC5sYWJlbCxcbiAgICAgICAgICAuZXhwaXJlZCAucmVhZGluZyAubGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgTG9hZGluZ1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC5sb2FkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJlYWRpbmcubG9hZGluZyAudmlzLFxuICAgICAgICAgIC5sb2FkaW5nIC5yZWFkaW5nIC52aXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE2KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yZWFkaW5nLmxvYWRpbmcgLnZpcyAubG9hZGVyLFxuICAgICAgICAgIC5sb2FkaW5nIC5yZWFkaW5nIC52aXMgLmxvYWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZy5sb2FkaW5nIC52YWx1ZSxcbiAgICAgICAgICAubG9hZGluZyAucmVhZGluZyAudmFsdWUge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNikgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBSb29tIFJhdGluZ1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yYXRpbmcgLmdyYWRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDk0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2luZzogbm93cmFwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XG4gICAgICAgICAgICBjb2xvcjogIzRkOWQyZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmF0aW5nIC52YWx1ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAyZW07XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIGVhc2UgLjNzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgZWFzZSAuM3M7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlIC4zcztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgICAgICAgICAgY29sb3I6ICM0ZDlkMmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJhdGluZyAubGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAwIDA7XG4gICAgICAgICAgICBmb250OiA3MDAgMTFweC8xM3B4IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgZWFzZSAuM3M7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciBlYXNlIC4zcztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2UgLjNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDcycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0aW5nIC5ncmFkZSB7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTcycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0aW5nIC52YWx1ZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGluZyAubGFiZWwge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgQ2FyZHMgJiBDb250YWluZXJzXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAyNHB4IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkID4gaGVhZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAtMTJweCAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjRweCA0MHB4IDE4cHggMTJweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkID4gaGVhZGVyLmNvbmRlbnNlZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCA+IGhlYWRlciAubGVnZW5kIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMjRweCAxMnB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgYS5oZWFkLWFjdGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAucmVzdHJpY3Qtd2lkdGgge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgLmJ0biB7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMCAwIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgLnJpZ2h0LWFjdGlvbiB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCAucmlnaHQtYWN0aW9uIC5idG4ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkID4gZm9vdGVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggLTEycHggLTI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDEycHg7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCA+IGZvb3RlciAuYnRuIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCA+IGZvb3RlciAuZGVsIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkgYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XG4gICAgICAgICAgICAuY2FyZCAucmVzdHJpY3Qtd2lkdGgge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZCAucmlnaHQtYWN0aW9uIHtcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjZweCAyMHB4IDI2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZCA+IGhlYWRlciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAtMTJweCAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDM2cHggMTRweCAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQgPiBoZWFkZXIgLmxlZ2VuZCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQgYS5oZWFkLWFjdGlvbiB7XG4gICAgICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkIC5yZXN0cmljdC13aWR0aCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkIC5idG4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkIC5yaWdodC1hY3Rpb24ge1xuICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkID4gZm9vdGVyIHtcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IC0xMnB4IC0yMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZCA+IGZvb3RlciAuYnRuIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMTZweCk7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTJweCAtOHB4IDAgLThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkID4gZm9vdGVyIC5idG46Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQgPiBmb290ZXIgLmRlbCB7XG4gICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbnNldCB7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMzBweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmluc2V0LmFwcGVuZC10b3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC5pbnNldCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCAtMTJweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ncmFwaCB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZ3JhcGggLnNjcm9sbGVyIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTY2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmdyYXBoIC5wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMzA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgUm9vbSBTdW1tYXJ5XG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLnN1bW1hcnktZ3JpZCAuY2FyZCB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDQ4cHgpIC8gMyk7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyNHB4IDMwcHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkOm50aC1jaGlsZCgzbikge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pZSAuc3VtbWFyeS1ncmlkIC5jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNTBweCkgLyAzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkID4gZm9vdGVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggLTI4cHggLTIycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDI4cHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlIC4zcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZSAuM3M7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UgLjNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdW1tYXJ5LWdyaWQgLmNhcmQgPiBmb290ZXIuZ3JhZGUtaGlnaCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc3LCAxNTcsIDQ2LCAwLjA4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkID4gZm9vdGVyLmdyYWRlLW1pZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMTgxLCAxMCwgMC4wNik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN1bW1hcnktZ3JpZCAuY2FyZCA+IGZvb3Rlci5ncmFkZS1sb3cge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzQsIDEwMywgMzIsIDAuMDUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdW1tYXJ5LWdyaWQgLmNhcmQgPiBmb290ZXIgcCB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAuM3M7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgLjNzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIC4zcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkID4gZm9vdGVyIC5idG4ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTEwcHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkIC5yZWFkaW5ncyB7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggLTMwcHggLTRweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdW1tYXJ5LWdyaWQgLmNhcmQgLnJlYWRpbmdzIC5yZWFkaW5nIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN1bW1hcnktZ3JpZCAuY2FyZC5leHBpcmVkID4gZm9vdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDcsIDI0NiwgMC44KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdW1tYXJ5LWdyaWQgLmNhcmQubG9hZGluZyA+IGZvb3RlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuOCkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkLmxvYWRpbmcgPiBmb290ZXIgcCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzY1cHgpIHtcbiAgICAgICAgICAgIC5zdW1tYXJ5LWdyaWQgLmNhcmQge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSAtIDI0cHgpIC8gMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkOm50aC1jaGlsZCgzbikge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkOm50aC1jaGlsZCgybikge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyNHB4KSAvIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1bW1hcnktZ3JpZCAuY2FyZDpudGgtY2hpbGQoM24pIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1bW1hcnktZ3JpZCAuY2FyZDpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgLnN1bW1hcnktZ3JpZCAuY2FyZCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkOm50aC1jaGlsZCgzbikge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkOm50aC1jaGlsZCgybikge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkID4gZm9vdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IC0yNHB4IC0xOHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHggMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdW1tYXJ5LWdyaWQgLmNhcmQgPiBmb290ZXIgcCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkID4gZm9vdGVyIC5idG4ge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMTZweCk7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAtOHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3VtbWFyeS1ncmlkIC5jYXJkIC5yZWFkaW5ncyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCAtMjZweCAtNHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgUm9vbSBSZXBvcnQgLyBBbmFseXNpc1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC5jYXJkLnJlcG9ydCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQucmVwb3J0ID4gaGVhZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQucmVwb3J0IC5yZWFkaW5ncyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA5M3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnJlcG9ydCAucmVhZGluZ3MgLnJlYWRpbmcge1xuICAgICAgICAgICAgd2lkdGg6IDMzLjMlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnJlcG9ydCAucmVwb3J0LWNhcmQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgKyAyOHB4KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMnB4IC0yOHB4IC0yMnB4IDA7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlIC4zcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZSAuM3M7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UgLjNzO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDkzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQucmVwb3J0IC5yZXBvcnQtY2FyZCAucmF0aW5nIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnJlcG9ydCAucmVwb3J0LWNhcmQgdWwuY2hlY2sge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogNjYlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMDhweCk7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAzNHB4IDAgMzRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkLmdyYWRlLWhpZ2gge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3NywgMTU3LCA0NiwgMC4wOCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQucmVwb3J0IC5yZXBvcnQtY2FyZC5ncmFkZS1oaWdoIC5yYXRpbmcgLmdyYWRlLFxuICAgICAgICAgIC5jYXJkLnJlcG9ydCAucmVwb3J0LWNhcmQuZ3JhZGUtaGlnaCAucmF0aW5nIC52YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzRkOWQyZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkLmdyYWRlLWhpZ2ggdWwuY2hlY2sgbGkuYnVsbGV0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3N0YXRpYy9pbWcvYnVsbGV0LWhpZ2guc3ZnXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnJlcG9ydCAucmVwb3J0LWNhcmQuZ3JhZGUtbWlkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjI0LCAxODEsIDEwLCAwLjA2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkLmdyYWRlLW1pZCAucmF0aW5nIC5ncmFkZSxcbiAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkLmdyYWRlLW1pZCAucmF0aW5nIC52YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogI2UwYjUwYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkLmdyYWRlLW1pZCB1bC5jaGVjayBsaS5idWxsZXQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vc3RhdGljL2ltZy9idWxsZXQtbWlkLnN2Z1wiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkLmdyYWRlLWxvdyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNCwgMTAzLCAzMiwgMC4wNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQucmVwb3J0IC5yZXBvcnQtY2FyZC5ncmFkZS1sb3cgLnJhdGluZyAuZ3JhZGUsXG4gICAgICAgICAgLmNhcmQucmVwb3J0IC5yZXBvcnQtY2FyZC5ncmFkZS1sb3cgLnJhdGluZyAudmFsdWUge1xuICAgICAgICAgICAgY29sb3I6ICNlYTY3MjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQucmVwb3J0IC5yZXBvcnQtY2FyZC5ncmFkZS1sb3cgdWwuY2hlY2sgbGkuYnVsbGV0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL3N0YXRpYy9pbWcvYnVsbGV0LWxvdy5zdmdcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQucmVwb3J0IC5yZXBvcnQtY2FyZC5leHBpcmVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDcsIDI0NiwgMC44KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnJlcG9ydCAucmVwb3J0LWNhcmQuZXhwaXJlZCAucmF0aW5nIC5ncmFkZSxcbiAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkLmV4cGlyZWQgLnJhdGluZyAudmFsdWUge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNikgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkLmV4cGlyZWQgLnJhdGluZyAubGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM3NzcgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkLmV4cGlyZWQgdWwuY2hlY2sge1xuICAgICAgICAgICAgb3BhY2l0eTogLjMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnJlcG9ydCAucmVwb3J0LWNhcmQubG9hZGluZyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuOCkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkLmxvYWRpbmcgPiAqIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xuICAgICAgICAgICAgLmNhcmQucmVwb3J0IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLnJlcG9ydCBoZWFkZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQucmVwb3J0IC5yZWFkaW5ncyB7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyNHB4IC0yOHB4IDA7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAgICAgICAgIC5jYXJkLnJlcG9ydCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5yZXBvcnQgaGVhZGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLnJlcG9ydCAucmVhZGluZ3Mge1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQucmVwb3J0IC5yZXBvcnQtY2FyZCB7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMjRweCAtMjhweCAwO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC5jYXJkLnJlcG9ydCAucmVhZGluZ3Mge1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggLTI2cHggLTRweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQucmVwb3J0IC5yZWFkaW5ncyAucmVhZGluZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlYWRpbmdzIC5yZWFkaW5nOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlYWRpbmdzIC5yZWFkaW5nOm50aC1jaGlsZCgzKSAudmlzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLnJlcG9ydCAucmVwb3J0LWNhcmQge1xuICAgICAgICAgICAgICBtYXJnaW46IDI0cHggLTI0cHggMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAyNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQucmVwb3J0IC5yZXBvcnQtY2FyZCAucmF0aW5nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5yZXBvcnQgLnJlcG9ydC1jYXJkIHVsLmNoZWNrIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTIwJTtcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwIDI0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgQWxlcnQgLyBIZWFsdGggV2FybmluZyBDYXJkXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLmNhcmQuYWxlcnQge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggI2VhNjcyMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5hbGVydCAuaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5hbGVydCAuaW1nIGEuaGVhZC1hY3Rpb24ge1xuICAgICAgICAgICAgcmlnaHQ6IDE4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQuYWxlcnQgPiBoZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1NHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFwiLi4vc3RhdGljL2ltZy9pY29uL2FsZXJ0LnN2Z1wiKSBuby1yZXBlYXQgMTJweCAyNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLmFsZXJ0ID4gaGVhZGVyIGgyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZWE2NzIwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLmFsZXJ0ID4gZm9vdGVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggLTI4cHggLTIycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuOCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLmFsZXJ0ID4gZm9vdGVyIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLmFsZXJ0LndpdGgtaW1hZ2Uge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyg1MCUgKyAyOHB4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5hbGVydC53aXRoLWltYWdlID4gaGVhZGVyIGEuaGVhZC1hY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5hbGVydC5oZWFsdGgtYWxlcnQgPiBoZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vc3RhdGljL2ltZy9pY29uL2hlYWx0aC5zdmdcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzNjVweCkge1xuICAgICAgICAgICAgLmNhcmQuYWxlcnQgLmltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzNiU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5hbGVydC53aXRoLWltYWdlIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzNiUgKyAyOHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAgICAgICAgIC5jYXJkLmFsZXJ0IC5pbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMzYlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQuYWxlcnQud2l0aC1pbWFnZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMzYlICsgMjhweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICAuY2FyZC5hbGVydCAuaW1nIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIC0yNnB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLmFsZXJ0IC5pbWcgYS5oZWFkLWFjdGlvbiB7XG4gICAgICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5hbGVydCA+IGhlYWRlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTJweCAyMXB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLmFsZXJ0ID4gZm9vdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IC0yNHB4IC0xOHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5hbGVydC53aXRoLWltYWdlIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBQcmUtbG9naW4gY2FyZHNcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAuY2FyZC5wcmUtbG9nIC5pbWcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQucHJlLWxvZyAudGV4dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlICsgMzBweCk7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA0NDRweDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAtMzBweCAtMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQ4cHggNjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC5wcmUtbG9nIC50ZXh0ID4gZm9vdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNjBweCA0OHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnByZS1sb2cgLnRleHQgPiBmb290ZXIgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnByZS1sb2cgLnRleHQgPiBmb290ZXIgcC5sZWZ0IHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnByZS1sb2cgLnRleHQgPiBmb290ZXIgcC5yaWdodCB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQucHJlLWxvZyBoMiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnByZS1sb2cgaDIuYWNjZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLnByZS1sb2cgLmZvcm0tcm93IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAgICAgLmNhcmQucHJlLWxvZyAuaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDM2JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLnByZS1sb2cgLnRleHQge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygoMTAwJSArIDYwcHgpICogLjY0KTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0OHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQucHJlLWxvZyAudGV4dCA+IGZvb3RlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDhweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC5jYXJkLnByZS1sb2cgLmltZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5wcmUtbG9nIC50ZXh0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM2NHB4O1xuICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyNS42cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLnByZS1sb2cgLnRleHQgPiBmb290ZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgNi40cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5wcmUtbG9nIC50ZXh0ID4gZm9vdGVyIHAge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5wcmUtbG9nIC50ZXh0ID4gZm9vdGVyIHAucmlnaHQsIC5jYXJkLnByZS1sb2cgLnRleHQgPiBmb290ZXIgcC5sZWZ0IHtcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC5wcmUtbG9nIC50ZXh0ID4gZm9vdGVyIHAucmlnaHQge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQucHJlLWxvZyBoMiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLnByZS1sb2cgaDIuYWNjZW50IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLnByZS1sb2cgLmZvcm0tcm93IGxhYmVsIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQucHJlLWxvZyAuZm9ybS1yb3cgaW5wdXRbdHlwZT10ZXh0XSxcbiAgICAgICAgICAgIC5jYXJkLnByZS1sb2cgLmZvcm0tcm93IGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuICAgICAgICAgICAgLmNhcmQucHJlLWxvZyAuZm9ybS1yb3cgaW5wdXRbdHlwZT1zZWFyY2hdLFxuICAgICAgICAgICAgLmNhcmQucHJlLWxvZyAuZm9ybS1yb3cgaW5wdXRbdHlwZT1lbWFpbF0sXG4gICAgICAgICAgICAuY2FyZC5wcmUtbG9nIC5mb3JtLXJvdyBpbnB1dFt0eXBlPXRlbF0sXG4gICAgICAgICAgICAuY2FyZC5wcmUtbG9nIC5mb3JtLXJvdyBpbnB1dFt0eXBlPXVybF0sXG4gICAgICAgICAgICAuY2FyZC5wcmUtbG9nIC5mb3JtLXJvdyBpbnB1dFt0eXBlPW51bWJlcl0sXG4gICAgICAgICAgICAuY2FyZC5wcmUtbG9nIC5mb3JtLXJvdyB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLnByZS1sb2cgLmZvcm0tcm93IC5idG4ge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgRm9ybXNcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLFxuICAgICAgICAgIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuICAgICAgICAgIGlucHV0W3R5cGU9c2VhcmNoXSxcbiAgICAgICAgICBpbnB1dFt0eXBlPWVtYWlsXSxcbiAgICAgICAgICBpbnB1dFt0eXBlPXRlbF0sXG4gICAgICAgICAgaW5wdXRbdHlwZT11cmxdLFxuICAgICAgICAgIGlucHV0W3R5cGU9bnVtYmVyXSxcbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxOHB4O1xuICAgICAgICAgICAgZm9udDogNDAwIDE2cHgvMjhweCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuNSk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbiAgICAgICAgICBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyxcbiAgICAgICAgICBpbnB1dFt0eXBlPXNlYXJjaF06Zm9jdXMsXG4gICAgICAgICAgaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsXG4gICAgICAgICAgaW5wdXRbdHlwZT10ZWxdOmZvY3VzLFxuICAgICAgICAgIGlucHV0W3R5cGU9dXJsXTpmb2N1cyxcbiAgICAgICAgICBpbnB1dFt0eXBlPW51bWJlcl06Zm9jdXMsXG4gICAgICAgICAgdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdOmRpc2FibGVkLFxuICAgICAgICAgIGlucHV0W3R5cGU9cGFzc3dvcmRdOmRpc2FibGVkLFxuICAgICAgICAgIGlucHV0W3R5cGU9c2VhcmNoXTpkaXNhYmxlZCxcbiAgICAgICAgICBpbnB1dFt0eXBlPWVtYWlsXTpkaXNhYmxlZCxcbiAgICAgICAgICBpbnB1dFt0eXBlPXRlbF06ZGlzYWJsZWQsXG4gICAgICAgICAgaW5wdXRbdHlwZT11cmxdOmRpc2FibGVkLFxuICAgICAgICAgIGlucHV0W3R5cGU9bnVtYmVyXTpkaXNhYmxlZCxcbiAgICAgICAgICB0ZXh0YXJlYTpkaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVycm9yIGlucHV0W3R5cGU9dGV4dF0sIC5lcnJvclxuICAgICAgICAgIGlucHV0W3R5cGU9cGFzc3dvcmRdLCAuZXJyb3JcbiAgICAgICAgICBpbnB1dFt0eXBlPXNlYXJjaF0sIC5lcnJvclxuICAgICAgICAgIGlucHV0W3R5cGU9ZW1haWxdLCAuZXJyb3JcbiAgICAgICAgICBpbnB1dFt0eXBlPXRlbF0sIC5lcnJvclxuICAgICAgICAgIGlucHV0W3R5cGU9dXJsXSwgLmVycm9yXG4gICAgICAgICAgaW5wdXRbdHlwZT1udW1iZXJdLCAuZXJyb3JcbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNlYTY3MjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1heC1oYWxmIGlucHV0W3R5cGU9dGV4dF0sIC5tYXgtaGFsZlxuICAgICAgICAgIGlucHV0W3R5cGU9cGFzc3dvcmRdLCAubWF4LWhhbGZcbiAgICAgICAgICBpbnB1dFt0eXBlPXNlYXJjaF0sIC5tYXgtaGFsZlxuICAgICAgICAgIGlucHV0W3R5cGU9ZW1haWxdLCAubWF4LWhhbGZcbiAgICAgICAgICBpbnB1dFt0eXBlPXRlbF0sIC5tYXgtaGFsZlxuICAgICAgICAgIGlucHV0W3R5cGU9dXJsXSwgLm1heC1oYWxmXG4gICAgICAgICAgaW5wdXRbdHlwZT1udW1iZXJdLCAubWF4LWhhbGZcbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA5cHgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgLm1heC1oYWxmIGlucHV0W3R5cGU9dGV4dF0sIC5tYXgtaGFsZlxuICAgICAgICAgICAgaW5wdXRbdHlwZT1wYXNzd29yZF0sIC5tYXgtaGFsZlxuICAgICAgICAgICAgaW5wdXRbdHlwZT1zZWFyY2hdLCAubWF4LWhhbGZcbiAgICAgICAgICAgIGlucHV0W3R5cGU9ZW1haWxdLCAubWF4LWhhbGZcbiAgICAgICAgICAgIGlucHV0W3R5cGU9dGVsXSwgLm1heC1oYWxmXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXVybF0sIC5tYXgtaGFsZlxuICAgICAgICAgICAgaW5wdXRbdHlwZT1udW1iZXJdLCAubWF4LWhhbGZcbiAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMThweDtcbiAgICAgICAgICAgIGZvbnQ6IDQwMCAxNnB4LzI4cHggXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0NywgMjQ2LCAwLjUpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxlY3Q6ZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lcnJvciBzZWxlY3Qge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWE2NzIwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tYXgtaGFsZiBzZWxlY3Qge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gOXB4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBpQ2hlY2sgLSBjaGVja2JveCBhbmQgcmFkaW8gYnV0dG9uXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0sXG4gICAgICAgICAgaW5wdXRbdHlwZT1yYWRpb10ge1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaWNoZWNrYm94LFxuICAgICAgICAgIC5pcmFkaW8ge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTJweCAwIDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuNSk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UgLjJzLCBib3JkZXItY29sb3IgZWFzZSAuMnM7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UgLjJzLCBib3JkZXItY29sb3IgZWFzZSAuMnM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UgLjJzLCBib3JkZXItY29sb3IgZWFzZSAuMnM7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljaGVja2JveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuNSkgdXJsKFwiLi4vc3RhdGljL2ltZy9pY29uL2lucHV0LWNoZWNrYm94LnN2Z1wiKSBuby1yZXBlYXQgNnB4IC00OHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY2hlY2tib3guaG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDZweCAtMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaWNoZWNrYm94LmNoZWNrZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FiY2M3NTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDZweCA4cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM5NUI0NjM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljaGVja2JveC5kaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY2hlY2tib3guY2hlY2tlZC5kaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNnB4IDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlyYWRpbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuNSkgdXJsKFwiLi4vc3RhdGljL2ltZy9pY29uL2lucHV0LXJhZGlvLnN2Z1wiKSBuby1yZXBlYXQgOXB4IC00N3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pcmFkaW8uaG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDlweCAtMTlweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXJhZGlvLmNoZWNrZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FiY2M3NTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDlweCA5cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM5NUI0NjM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlyYWRpby5kaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pcmFkaW8uY2hlY2tlZC5kaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOXB4IDlweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgU2VsZWN0IEJveCBSZXBsYWNlXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLypcbiAgICAgICAgICAqIGpxdWVyeS5zZWxlY3RCb3hJdC5jc3MgMy44LjFcbiAgICAgICAgICAqIEF1dGhvcjogQGdyZWdmcmFua29cbiAgICAgICAgICAqIEN1c3RvbWlzZWQ6IEJlbmVrIExpc2Vmc2tpXG4gICAgICAgICAgKi9cbiAgICAgICAgICAvKlxuICAgICAgICAgIFNldHVwXG4gICAgICAgICAgKi9cbiAgICAgICAgICAvKiBTZWxlY3RCb3hJdCBjb250YWluZXIgKi9cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBTdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgU2VsZWN0Qm94SXQgZWxlbWVudHMgKi9cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtY29udGFpbmVyICoge1xuICAgICAgICAgICAgLyogUHJldmVudHMgdGV4dCBzZWxlY3Rpb24gKi9cbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogQnV0dG9uICovXG4gICAgICAgICAgLnNlbGVjdGJveGl0LWNvbnRhaW5lciAuc2VsZWN0Ym94aXQge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAvKiBXaWR0aCBvZiB0aGUgZHJvcGRvd24gYnV0dG9uICovXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEZvY3VzIHBzZXVkbyBzZWxlY3RvciAqL1xuICAgICAgICAgIC5zZWxlY3Rib3hpdC1jb250YWluZXIgLnNlbGVjdGJveGl0OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogVGhlIGZpcnN0IERyb3AgRG93biBvcHRpb24gKi9cbiAgICAgICAgICAvKiBUaGUgZmlyc3QgRHJvcCBEb3duIG9wdGlvbiBvcHRncm91cCAqL1xuICAgICAgICAgIC8qIFRoZSBsYXN0IERyb3AgRG93biBvcHRpb24gKi9cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtY29udGFpbmVyIC5zZWxlY3Rib3hpdC1vcHRpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtcmVuZGVyaW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgKmRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgem9vbTogMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0b3A6IC05OTk5cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxlZnQ6IC05OTk5cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBqUXVlcnlVSSBhbmQgalF1ZXJ5IE1vYmlsZSBjb21wYXRhYmlsaXR5IGZpeCAtIEZlZWwgZnJlZSB0byByZW1vdmUgdGhpcyBzdHlsZSBpZiB5b3UgYXJlIG5vdCB1c2luZyBqUXVlcnkgTW9iaWxlICovXG4gICAgICAgICAgLmpxdWVyeXVpIC51aS1pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogQW5vdGhlciBqUXVlcnlVSSBhbmQgalF1ZXJ5IE1vYmlsZSBjb21wYXRhYmlsaXR5IGZpeCAtIEZlZWwgZnJlZSB0byByZW1vdmUgdGhpcyBzdHlsZSBpZiB5b3UgYXJlIG5vdCB1c2luZyBqUXVlcnkgTW9iaWxlICovXG4gICAgICAgICAgLmpxdWVyeXVpIC51aS1pY29uLXRyaWFuZ2xlLTEtcyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBEZWZhdWx0IFdoYXJlIEhhdW9yYSBUaGVtZVxuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC8qIEJ1dHRvbiAqL1xuICAgICAgICAgIC5zZWxlY3Rib3hpdC1idG4ge1xuICAgICAgICAgICAgZm9udDogNDAwIDE2cHgvMjhweCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuNSk7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuMnM7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogSGVpZ2h0IGFuZCBWZXJ0aWNhbCBBbGlnbm1lbnQgb2YgVGV4dCAqL1xuICAgICAgICAgIC5zZWxlY3Rib3hpdC1jb250YWluZXIgc3BhbiwgLnNlbGVjdGJveGl0LWNvbnRhaW5lciAuc2VsZWN0Ym94aXQtb3B0aW9ucyBhIHtcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgICAgIC8qIEhlaWdodCBvZiB0aGUgZHJvcCBkb3duICovXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgICAgIC8qIFZlcnRpY2FsbHkgcG9zaXRpb25zIHRoZSBkcm9wIGRvd24gdGV4dCAqL1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogQnV0dG9uIFRleHQgKi9cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtdGV4dCB7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHggMCAxOHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtYnRuLnNlbGVjdGJveGl0LWVuYWJsZWQ6aG92ZXIsXG4gICAgICAgICAgLnNlbGVjdGJveGl0LWJ0bi5zZWxlY3Rib3hpdC1lbmFibGVkOmZvY3VzLFxuICAgICAgICAgIC5zZWxlY3Rib3hpdC1idG4uc2VsZWN0Ym94aXQtZW5hYmxlZDphY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBEcm9wIERvd24gZG93biBhcnJvdyBjb250YWluZXIgKi9cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtYXJyb3ctY29udGFpbmVyIHtcbiAgICAgICAgICAgIC8qIFBvc2l0aW9ucyB0aGUgZG93biBhcnJvdyAqL1xuICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBEcm9wIERvd24gZG93biBhcnJvdyAqL1xuICAgICAgICAgIC5zZWxlY3Rib3hpdCAuc2VsZWN0Ym94aXQtYXJyb3ctY29udGFpbmVyIC5zZWxlY3Rib3hpdC1hcnJvdyB7XG4gICAgICAgICAgICAvKiBIb3Jpem9udGFsbHkgY2VudGVycyB0aGUgZG93biBhcnJvdyAqL1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtZGVmYXVsdC1hcnJvdyB7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMzMzO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIE9wdGlvbnMgTGlzdCAqL1xuICAgICAgICAgIC5zZWxlY3Rib3hpdC1jb250YWluZXIgLnNlbGVjdGJveGl0LW9wdGlvbnMge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAtMnB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDJweCAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEycHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rib3hpdC1vcHRpb24ge1xuICAgICAgICAgICAgbGlzdC10eXBlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDJweCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rib3hpdC1vcHRpb246bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogSW5kaXZpZHVhbCBvcHRpb25zICovXG4gICAgICAgICAgLnNlbGVjdGJveGl0LWxpc3QgLnNlbGVjdGJveGl0LW9wdGlvbi1hbmNob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMTZweCAxMHB4IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCAuc2VsZWN0Ym94aXQtbGlzdCAuc2VsZWN0Ym94aXQtb3B0aW9uLWFuY2hvcjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuNSk7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBPcHRncm91cCBIZWFkZXIgKi9cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtb3B0Z3JvdXAtaGVhZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDEycHggMTJweDtcbiAgICAgICAgICAgIGZvbnQ6IDcwMCAxMXB4LzEzcHggXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vLXRvdWNoIC5zZWxlY3Rib3hpdC1vcHRncm91cC1oZWFkZXI6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rib3hpdC1idG4gLnNlbGVjdGJveGl0LW9wdGlvbi1pY29uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtbGlzdCAuc2VsZWN0Ym94aXQtb3B0aW9uLWljb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rib3hpdC1vcHRpb24taWNvbi11cmwge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOiAwIC04cHggMCAxOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlbGVjdGJveGl0LWxpc3QgLnNlbGVjdGJveGl0LW9wdGlvbi1pY29uLXVybCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0Ym94aXQuc2VsZWN0Ym94aXQtZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rib3hpdC5zZWxlY3Rib3hpdC1kaXNhYmxlZCAuc2VsZWN0Ym94aXQtZGVmYXVsdC1hcnJvdyB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjNzc3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rib3hpdC1saXN0ID4gLnNlbGVjdGJveGl0LWRpc2FibGVkID4gLnNlbGVjdGJveGl0LW9wdGlvbi1hbmNob3Ige1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlbGVjdGJveGl0LXNlbGVjdGVkID4gLnNlbGVjdGJveGl0LW9wdGlvbi1hbmNob3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjdmNjtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCAuc2VsZWN0Ym94aXQtc2VsZWN0ZWQgPiAuc2VsZWN0Ym94aXQtb3B0aW9uLWFuY2hvcjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmN2Y2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lcnJvciAuc2VsZWN0Ym94aXQtYnRuIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2VhNjcyMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZXJyb3IgLnNlbGVjdGJveGl0LWJ0bi5zZWxlY3Rib3hpdC1lbmFibGVkOmhvdmVyLFxuICAgICAgICAgIC5lcnJvciAuc2VsZWN0Ym94aXQtYnRuLnNlbGVjdGJveGl0LWVuYWJsZWQ6Zm9jdXMsXG4gICAgICAgICAgLmVycm9yIC5zZWxlY3Rib3hpdC1idG4uc2VsZWN0Ym94aXQtZW5hYmxlZDphY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZDc1NTBmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgIFNlbGVjdCBib3ggdmFyaWVudHNcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtYnRuLmxhbmctcGlja2VyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rib3hpdC1idG4uc2VsZWN0Ym94aXQtZW5hYmxlZC5sYW5nLXBpY2tlcjpob3ZlcixcbiAgICAgICAgICAuc2VsZWN0Ym94aXQtYnRuLnNlbGVjdGJveGl0LWVuYWJsZWQubGFuZy1waWNrZXI6Zm9jdXMsXG4gICAgICAgICAgLnNlbGVjdGJveGl0LWJ0bi5zZWxlY3Rib3hpdC1lbmFibGVkLmxhbmctcGlja2VyOmFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlbGVjdGJveGl0LWJ0bi5sYW5nLXBpY2tlciAuc2VsZWN0Ym94aXQtdGV4dCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDExcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtYnRuLmxhbmctcGlja2VyIC5zZWxlY3Rib3hpdC1hcnJvdy1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rib3hpdC1idG4ubGFuZy1waWNrZXIgLnNlbGVjdGJveGl0LWRlZmF1bHQtYXJyb3cge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogIzc3NztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtYnRuLndoYXJlLXBpY2tlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtYnRuLnNlbGVjdGJveGl0LWVuYWJsZWQud2hhcmUtcGlja2VyOmhvdmVyLFxuICAgICAgICAgIC5zZWxlY3Rib3hpdC1idG4uc2VsZWN0Ym94aXQtZW5hYmxlZC53aGFyZS1waWNrZXI6Zm9jdXMsXG4gICAgICAgICAgLnNlbGVjdGJveGl0LWJ0bi5zZWxlY3Rib3hpdC1lbmFibGVkLndoYXJlLXBpY2tlcjphY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWxlY3Rib3hpdC1idG4ud2hhcmUtcGlja2VyIC5zZWxlY3Rib3hpdC10ZXh0IHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzZweCkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VsZWN0Ym94aXQtYnRuLndoYXJlLXBpY2tlciAuc2VsZWN0Ym94aXQtYXJyb3ctY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudSA+IGhlYWRlciAuc2VsZWN0Ym94aXQtbGlzdCAuc2VsZWN0Ym94aXQtb3B0aW9uLWFuY2hvciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDIycHggMTBweCAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgTmF2IExpbmtzXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLm5hdi1saW5rcyB7XG4gICAgICAgICAgICBsaXN0LXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMThweCAwIDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWxpbmtzIGxpIHtcbiAgICAgICAgICAgIGxpc3QtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtbGlua3MgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMzBweCA5cHggMjhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm8tdG91Y2ggLm5hdi1saW5rcyBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uby10b3VjaCAubmF2LWxpbmtzIGE6YWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtbGlua3MgYS5jdXJyZW50IHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjdmNjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBGb3JtIHJvd3NcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAuZm9ybS1yb3cge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NTZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5zZXQgLmZvcm0tcm93IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTJweCAwIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tcm93ID4gbGkge1xuICAgICAgICAgICAgbGlzdC10eXBlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE4cHgpO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1yb3cgPiBsaS5oYWxmIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDE4cHgpO1xuICAgICAgICAgICAgY2xlYXI6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tcm93ID4gbGkuc3BhY2Uge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tcm93IGxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLXJvdyAuaGVscGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tcm93IC5idG4ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tcm93ID4gbGkuZXJyb3IgbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICNlYTY3MjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tcm93LmlubGluZSxcbiAgICAgICAgICAuaW5zZXQgLmZvcm0tcm93LmlubGluZSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tcm93LmlubGluZSA+IGxpLFxuICAgICAgICAgIC5pbnNldCAuZm9ybS1yb3cuaW5saW5lID4gbGkge1xuICAgICAgICAgICAgY2xlYXI6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tcm93LmlubGluZSA+IGxpLnNtYWxsLFxuICAgICAgICAgIC5pbnNldCAuZm9ybS1yb3cuaW5saW5lID4gbGkuc21hbGwge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTclIC0gMThweCk7XG4gICAgICAgICAgICBjbGVhcjogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1yb3cuaW5saW5lID4gbGkuc21hbGwgbGFiZWwsXG4gICAgICAgICAgLmluc2V0IC5mb3JtLXJvdy5pbmxpbmUgPiBsaS5zbWFsbCBsYWJlbCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLXJvdy5pbmxpbmUgPiBsaS5idXR0b24sXG4gICAgICAgICAgLmluc2V0IC5mb3JtLXJvdy5pbmxpbmUgPiBsaS5idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBjbGVhcjogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1yb3cuaW5saW5lID4gbGkuYnV0dG9uIC5idG4sXG4gICAgICAgICAgLmluc2V0IC5mb3JtLXJvdy5pbmxpbmUgPiBsaS5idXR0b24gLmJ0biB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICAuZm9ybS1yb3cge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybS1yb3cgPiBsaSB7XG4gICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0tcm93ID4gbGkuaGFsZiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0tcm93ID4gbGkuY29sbGFwc2UtbW9iIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybS1yb3cgbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0tcm93IC5oZWxwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm0tcm93LmlubGluZSA+IGxpLFxuICAgICAgICAgICAgLmluc2V0IC5mb3JtLXJvdy5pbmxpbmUgPiBsaSB7XG4gICAgICAgICAgICAgIGNsZWFyOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybS1yb3cuaW5saW5lID4gbGk6bGFzdC1jaGlsZCxcbiAgICAgICAgICAgIC5pbnNldCAuZm9ybS1yb3cuaW5saW5lID4gbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLXJvdy5pbmxpbmUgPiBsaS5zbWFsbCxcbiAgICAgICAgICAgIC5pbnNldCAuZm9ybS1yb3cuaW5saW5lID4gbGkuc21hbGwge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcbiAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgIGNsZWFyOiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybS1yb3cuaW5saW5lID4gbGkuYnV0dG9uLFxuICAgICAgICAgICAgLmluc2V0IC5mb3JtLXJvdy5pbmxpbmUgPiBsaS5idXR0b24ge1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgY2xlYXI6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtLXJvdy5pbmxpbmUgPiBsaS5idXR0b24gLmJ0bixcbiAgICAgICAgICAgIC5pbnNldCAuZm9ybS1yb3cuaW5saW5lID4gbGkuYnV0dG9uIC5idG4ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgICAgRm9ybSBjb250cm9sc1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC5mb3JtLWNvbnRyb2xzIHtcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDAgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm9ybS1jb250cm9scyA+IGxpIHtcbiAgICAgICAgICAgIGxpc3QtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLWNvbnRyb2xzID4gbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLWNvbnRyb2xzID4gbGkgbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3JtLWNvbnRyb2xzID4gbGkgc3Bhbi5zZW5zb3Ige1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvcm0tY29udHJvbHMgPiBsaSAuaWNoZWNrYm94LFxuICAgICAgICAgIC5mb3JtLWNvbnRyb2xzID4gbGkgLmlyYWRpbyB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBTZW5zb3IgYWxlcnRzIChpbiBhbGVydCBjYXJkKVxuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC5zZW5zb3ItYWxlcnRzIHtcbiAgICAgICAgICAgIG1hcmdpbjogLTI0cHggLTEycHggLTE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlbnNvci1hbGVydHMgbGkge1xuICAgICAgICAgICAgbGlzdC10eXBlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2Vuc29yLWFsZXJ0cyBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlbnNvci1hbGVydHMgLnNlbnNvciB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2Vuc29yLWFsZXJ0cyAudGltZSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZW5zb3ItYWxlcnRzIC5idG4ge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgLnNlbnNvci1hbGVydHMge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2Vuc29yLWFsZXJ0cyBsaSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTJweCAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlbnNvci1hbGVydHMgLnNlbnNvciB7XG4gICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlbnNvci1hbGVydHMgLnRpbWUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDhweCAwIDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2Vuc29yLWFsZXJ0cyAuYnRuIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBHcmFwaCBMZWdlbmRcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAubGVnZW5kIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGVnZW5kIGxpIHtcbiAgICAgICAgICAgIGxpc3QtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGVnZW5kIC50ZW1wLFxuICAgICAgICAgIC5sZWdlbmQgLmh1bSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxlZ2VuZCAudGVtcCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ5ZDJlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZWdlbmQgLmh1bSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc3LCAxNTcsIDQ2LCAwLjMzKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC5sZWdlbmQgbGkge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgIFRhYmxlIExpc3RzXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHIgdGgge1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDAgMTJweCAzMHB4O1xuICAgICAgICAgICAgZm9udDogNzAwIDExcHgvMTNweCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ciB0aDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHI6bm90KC5zcGFjZXIpIHRkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMCAxNHB4IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ3LCAyNDYsIDAuNSk7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHI6bm90KC5zcGFjZXIpIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCAwIDAgNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyOm5vdCguc3BhY2VyKSB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA2cHggNnB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHI6bm90KC5zcGFjZXIpIHRkLmFjdGlvbnMge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA5NnB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHI6bm90KC5zcGFjZXIpIHRkLnVuYnJlYWsge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyOm5vdCguc3BhY2VyKSB0ZCAuc3ViIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHI6bm90KC5zcGFjZXIpIHRkIC5zZW5zb3Ige1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIG1hcmdpbjogLTRweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyOm5vdCguc3BhY2VyKSB0ZCBkbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyOm5vdCguc3BhY2VyKSB0ZCAuc2Vuc29yLWdyb3VwIC5zZW5zb3Ige1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyOm5vdCguc3BhY2VyKSB0ZCAuc2Vuc29yLWdyb3VwIGRsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cjpub3QoLnNwYWNlcikgdGQgYS5idG4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyOm5vdCguc3BhY2VyKSB0ZCBhLnRhYmxlLWFjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHI6bm90KC5zcGFjZXIpIHRkIGE6bm90KC5idG4pOm5vdCgudGFibGUtYWN0aW9uKSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHIuc3BhY2VyIHRkIHtcbiAgICAgICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgMjRweCk7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAtMTJweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyIHRoIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDAgMTJweCAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHIgdGg6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cjpub3QoLnNwYWNlcikgdGQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMTJweCAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHI6bm90KC5zcGFjZXIpIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHI6bm90KC5zcGFjZXIpIHRkLmFjdGlvbnMge1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cjpub3QoLnNwYWNlcikgdGQudW5icmVhayB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cjpub3QoLnNwYWNlcikgdGQgYS50YWJsZS1hY3Rpb24ge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlLm1vYi1icmVhayB0cjpub3QoLnNwYWNlcikgdGQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhYmxlLm1vYi1icmVhayB0cjpub3QoLnNwYWNlcikgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMThweCA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZS5tb2ItYnJlYWsgdHI6bm90KC5zcGFjZXIpIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxOHB4IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZS5tb2ItYnJlYWsgdHI6bm90KC5zcGFjZXIpIHRkLmFjdGlvbnMge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJsZS5tb2ItYnJlYWsgdHI6bm90KC5zcGFjZXIpIHRkLmFjdGlvbnMgLmJ0biB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFRoaXMgaXMgdGhlIGNvcmUgQ1NTIG9mIFRvb2x0aXBzdGVyICovXG4gICAgICAgICAgLyogR0VORVJBTCBTVFJVQ1RVUkUgUlVMRVMgKGRvIG5vdCBlZGl0IHRoaXMgc2VjdGlvbikgKi9cbiAgICAgICAgICAudG9vbHRpcHN0ZXItYmFzZSB7XG4gICAgICAgICAgICAvKiB0aGlzIGVuc3VyZXMgdGhhdCBhIGNvbnN0cmFpbmVkIGhlaWdodCBzZXQgYnkgZnVuY3Rpb25Qb3NpdGlvbixcbiAgICAgICAgICAgIGlmIGdyZWF0ZXIgdGhhdCB0aGUgbmF0dXJhbCBoZWlnaHQgb2YgdGhlIHRvb2x0aXAsIHdpbGwgYmUgZW5mb3JjZWRcbiAgICAgICAgICAgIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBkaXNwbGF5OmZsZXggKi9cbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAvKiB0aGlzIG1heSBiZSBvdmVycmlkZW4gaW4gSlMgZm9yIGZpeGVkIHBvc2l0aW9uIG9yaWdpbnMgKi9cbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItYm94IHtcbiAgICAgICAgICAgIC8qIHNlZSAudG9vbHRpcHN0ZXItYmFzZS4gZmxleC1zaHJpbmsgMSBpcyBvbmx5IG5lY2Vzc2FyeSBmb3IgSUUxMC1cbiAgICAgICAgICAgIGFuZCBmbGV4LWJhc2lzIGF1dG8gZm9yIElFMTEtIChhdCBsZWFzdCkgKi9cbiAgICAgICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAgICAgICAtbXMtZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItY29udGVudCB7XG4gICAgICAgICAgICAvKiBwcmV2ZW50cyBhbiBvdmVyZmxvdyBpZiB0aGUgdXNlciBhZGRzIHBhZGRpbmcgdG8gdGhlIGRpdiAqL1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIC8qIHRoZXNlIG1ha2Ugc3VyZSB3ZSdsbCBiZSBhYmxlIHRvIGRldGVjdCBhbnkgb3ZlcmZsb3cgKi9cbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItcnVsZXIge1xuICAgICAgICAgICAgLyogdGhlc2UgbGV0IHVzIHRlc3QgdGhlIHNpemUgb2YgdGhlIHRvb2x0aXAgd2l0aG91dCBvdmVyZmxvd2luZyB0aGUgd2luZG93ICovXG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEFOSU1BVElPTlMgKi9cbiAgICAgICAgICAvKiBPcGVuL2Nsb3NlIGFuaW1hdGlvbnMgKi9cbiAgICAgICAgICAvKiBmYWRlICovXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLWZhZGUge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLWZhZGUudG9vbHRpcHN0ZXItc2hvdyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIGdyb3cgKi9cbiAgICAgICAgICAudG9vbHRpcHN0ZXItZ3JvdyB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW1vei10cmFuc2Zvcm07XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiAtby10cmFuc2Zvcm07XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW1zLXRyYW5zZm9ybTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1ncm93LnRvb2x0aXBzdGVyLXNob3cge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4xNSk7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjE1KTtcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4xNSk7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4xNSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4xNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogc3dpbmcgKi9cbiAgICAgICAgICAudG9vbHRpcHN0ZXItc3dpbmcge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDRkZWcpO1xuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooNGRlZyk7XG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooNGRlZyk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDRkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDRkZWcpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW1vei10cmFuc2Zvcm07XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiAtby10cmFuc2Zvcm07XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbi1wcm9wZXJ0eTogLW1zLXRyYW5zZm9ybTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXN3aW5nLnRvb2x0aXBzdGVyLXNob3cge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDAuNjM1LCAwLjQ5NSwgMSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMC42MzUsIDAuNDk1LCAyLjQpO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDAuNjM1LCAwLjQ5NSwgMi40KTtcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjMsIDAuNjM1LCAwLjQ5NSwgMi40KTtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMywgMC42MzUsIDAuNDk1LCAyLjQpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIzLCAwLjYzNSwgMC40OTUsIDIuNCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogZmFsbCAqL1xuICAgICAgICAgIC50b29sdGlwc3Rlci1mYWxsIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiB0b3A7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiB0b3A7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdG9wO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjE1KTtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMTUpO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjE1KTtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjE1KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjE1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItZmFsbC50b29sdGlwc3Rlci1pbml0aWFsIHtcbiAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1mYWxsLnRvb2x0aXBzdGVyLWR5aW5nIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIHNsaWRlICovXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNsaWRlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGxlZnQ7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxKTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMTUpO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4xNSk7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMTUpO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMTUpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMTUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zbGlkZS50b29sdGlwc3Rlci1pbml0aWFsIHtcbiAgICAgICAgICAgIGxlZnQ6IC00MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNsaWRlLnRvb2x0aXBzdGVyLWR5aW5nIHtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICAgICAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBVcGRhdGUgYW5pbWF0aW9ucyAqL1xuICAgICAgICAgIC8qIFdlIHVzZSBhbmltYXRpb25zIHJhdGhlciB0aGFuIHRyYW5zaXRpb25zIGhlcmUgYmVjYXVzZVxuICAgICAgICAgIHRyYW5zaXRpb24gZHVyYXRpb25zIG1heSBiZSBzcGVjaWZpZWQgaW4gdGhlIHN0eWxlIHRhZyBkdWUgdG9cbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbiwgYW5kIHdlIHRyeSB0byBhdm9pZCBjb2xsaXNpb25zIGFuZCB0aGUgdXNlXG4gICAgICAgICAgb2YgIWltcG9ydGFudCAqL1xuICAgICAgICAgIC8qIGZhZGUgKi9cbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdG9vbHRpcHN0ZXItZmFkaW5nIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHRvb2x0aXBzdGVyLWZhZGluZyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItdXBkYXRlLWZhZGUge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHRvb2x0aXBzdGVyLWZhZGluZyA0MDBtcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdG9vbHRpcHN0ZXItZmFkaW5nIDQwMG1zO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIHJvdGF0ZSAqL1xuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0b29sdGlwc3Rlci1yb3RhdGluZyB7XG4gICAgICAgICAgICAyNSUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgNzUlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgdG9vbHRpcHN0ZXItcm90YXRpbmcge1xuICAgICAgICAgICAgMjUlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDc1JSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci11cGRhdGUtcm90YXRlIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0b29sdGlwc3Rlci1yb3RhdGluZyA2MDBtcztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogdG9vbHRpcHN0ZXItcm90YXRpbmcgNjAwbXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogc2NhbGUgKi9cbiAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdG9vbHRpcHN0ZXItc2NhbGluZyB7XG4gICAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyB0b29sdGlwc3Rlci1zY2FsaW5nIHtcbiAgICAgICAgICAgIDUwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci11cGRhdGUtc2NhbGUge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHRvb2x0aXBzdGVyLXNjYWxpbmcgNjAwbXM7XG4gICAgICAgICAgICBhbmltYXRpb246IHRvb2x0aXBzdGVyLXNjYWxpbmcgNjAwbXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgKiBERUZBVUxUIFNUWUxFIE9GIFRIRSBTSURFVElQIFBMVUdJTlxuICAgICAgICAgICpcbiAgICAgICAgICAqIEFsbCBzdHlsZXMgYXJlIFwibmFtZXNwYWNlZFwiIHdpdGggLnRvb2x0aXBzdGVyLXNpZGV0aXAgdG8gcHJldmVudFxuICAgICAgICAgICogY29uZmxpY3RzIGJldHdlZW4gcGx1Z2lucy5cbiAgICAgICAgICAqL1xuICAgICAgICAgIC8qIC50b29sdGlwc3Rlci1ib3ggKi9cbiAgICAgICAgICAudG9vbHRpcHN0ZXItc2lkZXRpcCAudG9vbHRpcHN0ZXItYm94IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEycHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAudG9vbHRpcHN0ZXItYm90dG9tIC50b29sdGlwc3Rlci1ib3gge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwLnRvb2x0aXBzdGVyLWxlZnQgLnRvb2x0aXBzdGVyLWJveCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItc2lkZXRpcC50b29sdGlwc3Rlci1yaWdodCAudG9vbHRpcHN0ZXItYm94IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAudG9vbHRpcHN0ZXItdG9wIC50b29sdGlwc3Rlci1ib3gge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIC50b29sdGlwc3Rlci1jb250ZW50ICovXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAgLnRvb2x0aXBzdGVyLWNvbnRlbnQge1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItc2lkZXRpcCAudG9vbHRpcHN0ZXItY29udGVudCBoNiB7XG4gICAgICAgICAgICBtYXJnaW46IDNweCAwIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAgLnRvb2x0aXBzdGVyLWNvbnRlbnQgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAwIDAgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItc2lkZXRpcCAudG9vbHRpcHN0ZXItY29udGVudCBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAgLnRvb2x0aXBzdGVyLWNvbnRlbnQgLnJlYWRpbmcgLnZhbHVlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4wNWVtO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciBlYXNlIC4zcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGNvbG9yIGVhc2UgLjNzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgZWFzZSAuM3M7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwIC50b29sdGlwc3Rlci1jb250ZW50IC5yZWFkaW5nIC52YWx1ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAgLnRvb2x0aXBzdGVyLWNvbnRlbnQgLnJlYWRpbmcgLmxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiA4cHggMCAwO1xuICAgICAgICAgICAgZm9udDogNzAwIDExcHgvMTNweCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIGVhc2UgLjNzO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgZWFzZSAuM3M7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciBlYXNlIC4zcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwIC50b29sdGlwc3Rlci1jb250ZW50IC5yZWFkaW5nIC5sYWJlbCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItc2lkZXRpcCAudG9vbHRpcHN0ZXItY29udGVudCAucmVhZGluZyAudGltZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogLnRvb2x0aXBzdGVyLWFycm93IDogd2lsbCBrZWVwIG9ubHkgdGhlIHpvbmUgb2YgLnRvb2x0aXBzdGVyLWFycm93LXVuY3JvcHBlZCB0aGF0XG4gICAgICAgICAgY29ycmVzcG9uZHMgdG8gdGhlIGFycm93IHdlIHdhbnQgdG8gZGlzcGxheSAqL1xuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwIC50b29sdGlwc3Rlci1hcnJvdyB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwLnRvb2x0aXBzdGVyLWJvdHRvbSAudG9vbHRpcHN0ZXItYXJyb3cge1xuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgICAgICAvKiBoYWxmIHRoZSB3aWR0aCwgZm9yIGNlbnRlcmluZyAqL1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwLnRvb2x0aXBzdGVyLWxlZnQgLnRvb2x0aXBzdGVyLWFycm93IHtcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC02cHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIC8qIHRvcCAwIHRvIGtlZXAgdGhlIGFycm93IGZyb20gb3ZlcmZsb3dpbmcgLnRvb2x0aXBzdGVyLWJhc2Ugd2hlbiBpdCBoYXMgbm90XG4gICAgICAgICAgICBiZWVuIHBvc2l0aW9uZWQgeWV0ICovXG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwLnRvb2x0aXBzdGVyLXJpZ2h0IC50b29sdGlwc3Rlci1hcnJvdyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIC8qIHNhbWUgYXMgLnRvb2x0aXBzdGVyLWxlZnQgLnRvb2x0aXBzdGVyLWFycm93ICovXG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwLnRvb2x0aXBzdGVyLXRvcCAudG9vbHRpcHN0ZXItYXJyb3cge1xuICAgICAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogY29tbW9uIHJ1bGVzIGJldHdlZW4gLnRvb2x0aXBzdGVyLWFycm93LWJhY2tncm91bmQgYW5kIC50b29sdGlwc3Rlci1hcnJvdy1ib3JkZXIgKi9cbiAgICAgICAgICAudG9vbHRpcHN0ZXItc2lkZXRpcCAudG9vbHRpcHN0ZXItYXJyb3ctYmFja2dyb3VuZCwgLnRvb2x0aXBzdGVyLXNpZGV0aXAgLnRvb2x0aXBzdGVyLWFycm93LWJvcmRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAudG9vbHRpcHN0ZXItYXJyb3ctYmFja2dyb3VuZCAqL1xuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwIC50b29sdGlwc3Rlci1hcnJvdy1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwLnRvb2x0aXBzdGVyLWJvdHRvbSAudG9vbHRpcHN0ZXItYXJyb3ctYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItc2lkZXRpcC50b29sdGlwc3Rlci1sZWZ0IC50b29sdGlwc3Rlci1hcnJvdy1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHRpcHN0ZXItc2lkZXRpcC50b29sdGlwc3Rlci1yaWdodCAudG9vbHRpcHN0ZXItYXJyb3ctYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwLnRvb2x0aXBzdGVyLXRvcCAudG9vbHRpcHN0ZXItYXJyb3ctYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAudG9vbHRpcHN0ZXItYXJyb3ctYm9yZGVyICovXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAgLnRvb2x0aXBzdGVyLWFycm93LWJvcmRlciB7XG4gICAgICAgICAgICBib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAudG9vbHRpcHN0ZXItYm90dG9tIC50b29sdGlwc3Rlci1hcnJvdy1ib3JkZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQzMyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAudG9vbHRpcHN0ZXItbGVmdCAudG9vbHRpcHN0ZXItYXJyb3ctYm9yZGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwLnRvb2x0aXBzdGVyLXJpZ2h0IC50b29sdGlwc3Rlci1hcnJvdy1ib3JkZXIge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwLnRvb2x0aXBzdGVyLXRvcCAudG9vbHRpcHN0ZXItYXJyb3ctYm9yZGVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogdG9vbHRpcHN0ZXItYXJyb3ctdW5jcm9wcGVkICovXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAgLnRvb2x0aXBzdGVyLWFycm93LXVuY3JvcHBlZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2x0aXBzdGVyLXNpZGV0aXAudG9vbHRpcHN0ZXItYm90dG9tIC50b29sdGlwc3Rlci1hcnJvdy11bmNyb3BwZWQge1xuICAgICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29sdGlwc3Rlci1zaWRldGlwLnRvb2x0aXBzdGVyLXJpZ2h0IC50b29sdGlwc3Rlci1hcnJvdy11bmNyb3BwZWQge1xuICAgICAgICAgICAgbGVmdDogLTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBNb2RhbCBCb3hlcyAmIGNvbnRlbnRcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjk2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4IDI0cHggMzBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb2RhbCA+IGhlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTEycHggMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggNDBweCAxOHB4IDEycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kYWwgYS5oZWFkLWFjdGlvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDE4cHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kYWwgYS5oZWFkLWFjdGlvbiBzdmcgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb2RhbCAuYnRuIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjRweCAwIDAgMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kYWwgPiBmb290ZXIge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNDRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMjRweCAtMTJweCAtMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMTJweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tb2RhbCA+IGZvb3RlciAuYnRuIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kYWwgPiBmb290ZXIgLmRlbCxcbiAgICAgICAgICAubW9kYWwgPiBmb290ZXIgLmNhbmNlbCB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMjRweCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2OTlweCkge1xuICAgICAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAyNnB4IDIwcHggMjZweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9kYWwgPiBoZWFkZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgLTEycHggMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzNnB4IDE0cHggMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbCBhLmhlYWQtYWN0aW9uIHtcbiAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgICByaWdodDogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsIC5idG4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2RhbCA+IGZvb3RlciB7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCAtMTJweCAtMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsID4gZm9vdGVyIC5idG4ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxNnB4KTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IC04cHggMCAtOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsID4gZm9vdGVyIC5idG46Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vZGFsID4gZm9vdGVyIC5kZWwsXG4gICAgICAgICAgICAubW9kYWwgPiBmb290ZXIgLmNhbmNlbCB7XG4gICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgIEFsZXJ0IE1vZGFsXG4gICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXG4gICAgICAgICAgLm1vZGFsLmFsZXJ0ID4gaGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcIi4uL3N0YXRpYy9pbWcvaWNvbi9hbGVydC5zdmdcIikgbm8tcmVwZWF0IDEycHggMjRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kYWwuYWxlcnQgPiBoZWFkZXIgaDIge1xuICAgICAgICAgICAgY29sb3I6ICNlYTY3MjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICAubW9kYWwuYWxlcnQgPiBoZWFkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEycHggMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBNb2RhbCBib3ggYW5pbWF0aW9uc1xuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIC8qIG1vZGFsLCBzdGFydCBzdGF0ZSAqL1xuICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1vdXQ7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCkgcGVyc3BlY3RpdmUoNjk2cHgpIHJvdGF0ZVgoNWRlZyk7XG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCkgcGVyc3BlY3RpdmUoNjk2cHgpIHJvdGF0ZVgoNWRlZyk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KSBwZXJzcGVjdGl2ZSg2OTZweCkgcm90YXRlWCg1ZGVnKTtcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCkgcGVyc3BlY3RpdmUoNjk2cHgpIHJvdGF0ZVgoNWRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpIHBlcnNwZWN0aXZlKDY5NnB4KSByb3RhdGVYKDVkZWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIGFuaW1hdGUgaW4gKi9cbiAgICAgICAgICAubWZwLXJlYWR5IC5tb2RhbCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcGVyc3BlY3RpdmUoNjk2cHgpIHJvdGF0ZVgoMCk7XG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBwZXJzcGVjdGl2ZSg2OTZweCkgcm90YXRlWCgwKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcGVyc3BlY3RpdmUoNjk2cHgpIHJvdGF0ZVgoMCk7XG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcGVyc3BlY3RpdmUoNjk2cHgpIHJvdGF0ZVgoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcGVyc3BlY3RpdmUoNjk2cHgpIHJvdGF0ZVgoMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogYW5pbWF0ZSBvdXQgKi9cbiAgICAgICAgICAubWZwLXJlbW92aW5nIC5tb2RhbCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpIHBlcnNwZWN0aXZlKDY5NnB4KSByb3RhdGVYKDVkZWcpO1xuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpIHBlcnNwZWN0aXZlKDY5NnB4KSByb3RhdGVYKDVkZWcpO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCkgcGVyc3BlY3RpdmUoNjk2cHgpIHJvdGF0ZVgoNWRlZyk7XG4gICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpIHBlcnNwZWN0aXZlKDY5NnB4KSByb3RhdGVYKDVkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KSBwZXJzcGVjdGl2ZSg2OTZweCkgcm90YXRlWCg1ZGVnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBEYXJrIG92ZXJsYXksIHN0YXJ0IHN0YXRlICovXG4gICAgICAgICAgLm1mcC1iZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLW91dDtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1vdXQ7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2Utb3V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIGFuaW1hdGUgaW4gKi9cbiAgICAgICAgICAubWZwLXJlYWR5Lm1mcC1iZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIGFuaW1hdGUgb3V0ICovXG4gICAgICAgICAgLm1mcC1yZW1vdmluZy5tZnAtYmcge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgICBNYWduaWZpYyBQb3B1cCBzZXR0aW5ncyAvIHZhcnNcbiAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cbiAgICAgICAgICAubWZwLWJnIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwNDI7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0NywgMjQ2LCAwLjgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtd3JhcCB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDQzO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1jb250YWluZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMCAzNnB4O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWNvbnRhaW5lcjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtYWxpZ24tdG9wIC5tZnAtY29udGFpbmVyOmJlZm9yZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtY29udGVudCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgei1pbmRleDogMTA0NTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWlubGluZS1ob2xkZXIgLm1mcC1jb250ZW50LFxuICAgICAgICAgIC5tZnAtYWpheC1ob2xkZXIgLm1mcC1jb250ZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtYWpheC1jdXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwcm9ncmVzcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLXpvb20tb3V0LWN1ciwgLm1mcC16b29tLW91dC1jdXIgLm1mcC1pbWFnZS1ob2xkZXIgLm1mcC1jbG9zZSB7XG4gICAgICAgICAgICBjdXJzb3I6IC1tb3otem9vbS1vdXQ7XG4gICAgICAgICAgICBjdXJzb3I6IC13ZWJraXQtem9vbS1vdXQ7XG4gICAgICAgICAgICBjdXJzb3I6IHpvb20tb3V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtem9vbSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IC13ZWJraXQtem9vbS1pbjtcbiAgICAgICAgICAgIGN1cnNvcjogLW1vei16b29tLWluO1xuICAgICAgICAgICAgY3Vyc29yOiB6b29tLWluO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtYXV0by1jdXJzb3IgLm1mcC1jb250ZW50IHtcbiAgICAgICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWNsb3NlLFxuICAgICAgICAgIC5tZnAtYXJyb3csXG4gICAgICAgICAgLm1mcC1wcmVsb2FkZXIsXG4gICAgICAgICAgLm1mcC1jb3VudGVyIHtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1sb2FkaW5nLm1mcC1maWd1cmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWhpZGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtcHJlbG9hZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjQ0NDO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjhlbTtcbiAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDQ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtcHJlbG9hZGVyIGEge1xuICAgICAgICAgICAgY29sb3I6ICNDQ0M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1wcmVsb2FkZXIgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLXMtcmVhZHkgLm1mcC1wcmVsb2FkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLXMtZXJyb3IgLm1mcC1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uLm1mcC1jbG9zZSwgYnV0dG9uLm1mcC1hcnJvdyB7XG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwNDY7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtY2xvc2Uge1xuICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxOHB4IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgQmFza2VydmlsbGUsIG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWNsb3NlOmhvdmVyLCAubWZwLWNsb3NlOmZvY3VzIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1jbG9zZTphY3RpdmUge1xuICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1jbG9zZS1idG4taW4gLm1mcC1jbG9zZSB7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWltYWdlLWhvbGRlciAubWZwLWNsb3NlLFxuICAgICAgICAgIC5tZnAtaWZyYW1lLWhvbGRlciAubWZwLWNsb3NlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgcmlnaHQ6IC02cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtY291bnRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjQ0NDO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1hcnJvdyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY1O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtYXJyb3c6YWN0aXZlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01NHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtYXJyb3c6aG92ZXIsIC5tZnAtYXJyb3c6Zm9jdXMge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWFycm93OmJlZm9yZSwgLm1mcC1hcnJvdzphZnRlcixcbiAgICAgICAgICAubWZwLWFycm93IC5tZnAtYixcbiAgICAgICAgICAubWZwLWFycm93IC5tZnAtYSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiBtZWRpdW0gaW5zZXQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1hcnJvdzphZnRlcixcbiAgICAgICAgICAubWZwLWFycm93IC5tZnAtYSB7XG4gICAgICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAxM3B4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTNweDtcbiAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtYXJyb3c6YmVmb3JlLFxuICAgICAgICAgIC5tZnAtYXJyb3cgLm1mcC1iIHtcbiAgICAgICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAyMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtYXJyb3ctbGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtYXJyb3ctbGVmdDphZnRlcixcbiAgICAgICAgICAubWZwLWFycm93LWxlZnQgLm1mcC1hIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTdweCBzb2xpZCAjRkZGO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1hcnJvdy1sZWZ0OmJlZm9yZSxcbiAgICAgICAgICAubWZwLWFycm93LWxlZnQgLm1mcC1iIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAyN3B4IHNvbGlkICMzZjNmM2Y7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1hcnJvdy1yaWdodCB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWFycm93LXJpZ2h0OmFmdGVyLFxuICAgICAgICAgIC5tZnAtYXJyb3ctcmlnaHQgLm1mcC1hIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkICNGRkY7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzlweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWFycm93LXJpZ2h0OmJlZm9yZSxcbiAgICAgICAgICAubWZwLWFycm93LXJpZ2h0IC5tZnAtYiB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMjdweCBzb2xpZCAjM2YzZjNmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtaWZyYW1lLWhvbGRlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtaWZyYW1lLWhvbGRlciAubWZwLWNvbnRlbnQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1pZnJhbWUtaG9sZGVyIC5tZnAtY2xvc2Uge1xuICAgICAgICAgICAgdG9wOiAtNDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWlmcmFtZS1zY2FsZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDU2LjI1JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWlmcmFtZS1zY2FsZXIgaWZyYW1lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBNYWluIGltYWdlIGluIHBvcHVwICovXG4gICAgICAgICAgaW1nLm1mcC1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMCA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogVGhlIHNoYWRvdyBiZWhpbmQgdGhlIGltYWdlICovXG4gICAgICAgICAgLm1mcC1maWd1cmUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1maWd1cmU6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiA0MHB4O1xuICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZnAtZmlndXJlIHNtYWxsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjQkRCREJEO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWJvdHRvbS1iYXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTM2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjdXJzb3I6IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC10aXRsZSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogI0YzRjNGMztcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1pbWFnZS1ob2xkZXIgLm1mcC1jb250ZW50IHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWdhbGxlcnkgLm1mcC1pbWFnZS1ob2xkZXIgLm1mcC1maWd1cmUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpLCBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAzMDBweCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAqIFJlbW92ZSBhbGwgcGFkZGluZ3MgYXJvdW5kIHRoZSBpbWFnZSBvbiBzbWFsbCBzY3JlZW5cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAubWZwLWltZy1tb2JpbGUgLm1mcC1pbWFnZS1ob2xkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWZwLWltZy1tb2JpbGUgaW1nLm1mcC1pbWcge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1mcC1pbWctbW9iaWxlIC5tZnAtZmlndXJlIHtcbiAgICAgICAgICAgICAgLyogVGhlIHNoYWRvdyBiZWhpbmQgdGhlIGltYWdlICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWZwLWltZy1tb2JpbGUgLm1mcC1maWd1cmU6YWZ0ZXIge1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZnAtaW1nLW1vYmlsZSAubWZwLWZpZ3VyZSBzbWFsbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZnAtaW1nLW1vYmlsZSAubWZwLWJvdHRvbS1iYXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWZwLWltZy1tb2JpbGUgLm1mcC1ib3R0b20tYmFyOmVtcHR5IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZnAtaW1nLW1vYmlsZSAubWZwLWNvdW50ZXIge1xuICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZnAtaW1nLW1vYmlsZSAubWZwLWNsb3NlIHtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgIC5tZnAtYXJyb3cge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1mcC1hcnJvdy1sZWZ0IHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZnAtYXJyb3ctcmlnaHQge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCU7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1mcC1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1pZTcgLm1mcC1pbWcge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWllNyAubWZwLWJvdHRvbS1iYXIge1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1pZTcgLm1mcC1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWZwLWllNyAubWZwLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQ0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1mcC1pZTcgLm1mcC1jbG9zZSB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAgIFBhdHRlcm4gTGlicmFyeVxuICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuICAgICAgICAgIGgxLmlubGluZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgICAgIGgxLmlubGluZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDM4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY5OXB4KSB7XG4gICAgICAgICAgICBoMS5pbmxpbmUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ub3RlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAyNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubm90ZSBoMyB7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC5ub3RlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIC5ub3RlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDcsIDI0NiwgMC41KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICAgICAgICAgIC5jYXJkIC5ub3RlIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IC0xMnB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29kZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHhtcCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2LmRlbW8gaDEsXG4gICAgICAgICAgZGl2LmRlbW8gaDIsXG4gICAgICAgICAgZGl2LmRlbW8gaDMsXG4gICAgICAgICAgZGl2LmRlbW8gaDQsXG4gICAgICAgICAgZGl2LmRlbW8gaDUsXG4gICAgICAgICAgZGl2LmRlbW8gaDYge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGl2LmRlbW8gaDEubGcsXG4gICAgICAgICAgZGl2LmRlbW8gaDQubGcge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVhZGluZ3MuZGVtbyAucmVhZGluZyB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRzXG4iXX0= */\n/*@ sourceURL=components/Layouts.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Layouts;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Layouts;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layouts, 'Layouts', '/home/juliet/App/components/Layouts.js');
  reactHotLoader.register(_default, 'default', '/home/juliet/App/components/Layouts.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/home/juliet/App/components/Login.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

var Login = function Login(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'content', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 3
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'header',
        { className: 'header', __source: {
            fileName: _jsxFileName,
            lineNumber: 4
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'logo', href: './', __source: {
              fileName: _jsxFileName,
              lineNumber: 5
            }
          },
          'Whare Hauora'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'lg', __source: {
              fileName: _jsxFileName,
              lineNumber: 6
            }
          },
          'Kia ora'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          { className: 'lg', __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            }
          },
          'Login to start using Whare Hauora'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'card pre-log', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'img', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'text', __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            { className: 'secondary', __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            'Login'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'form-row', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  }
                },
                'Email Address'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  }
                },
                'Password'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'li',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { className: 'btn submit', href: '#', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  }
                },
                'Login'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'footer',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'left', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: './forgot-password.html', className: 'underline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                  }
                },
                'Forgot password?'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'right', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              'Don\u2019t have an account? ',
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: './sign-up.html', className: 'underline', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  }
                },
                'Sign up'
              )
            )
          )
        )
      )
    )
  );
};

var _default = Login;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Login, 'Login', '/home/juliet/App/components/Login.js');
  reactHotLoader.register(_default, 'default', '/home/juliet/App/components/Login.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/set.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/set.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__("./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__("./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__("./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__("./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__("./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__("./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__("./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__("./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__("./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__("./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__("./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__("./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__("./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__("./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__("./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__("./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__("./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__("./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__("./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__("./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__("./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__("./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__("./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("./node_modules/core-js/library/modules/_perform.js");
var promiseResolve = __webpack_require__("./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__("./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__("./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__("./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__("./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__("./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__("./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/next/dist/lib/head.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.defaultHead = defaultHead;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sideEffect = __webpack_require__("./node_modules/next/dist/lib/side-effect.js");

var _sideEffect2 = _interopRequireDefault(_sideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Head = function (_React$Component) {
  (0, _inherits3.default)(Head, _React$Component);

  function Head() {
    (0, _classCallCheck3.default)(this, Head);
    return (0, _possibleConstructorReturn3.default)(this, (Head.__proto__ || (0, _getPrototypeOf2.default)(Head)).apply(this, arguments));
  }

  (0, _createClass3.default)(Head, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Head;
}(_react2.default.Component);

Head.contextTypes = {
  headManager: _propTypes2.default.object
};
function defaultHead() {
  return [_react2.default.createElement('meta', { charSet: 'utf-8', className: 'next-head' })];
}

function reduceComponents(components) {
  var _components$map$map$r;

  return (_components$map$map$r = components.map(function (c) {
    return c.props.children;
  }).map(function (children) {
    return _react2.default.Children.toArray(children);
  }).reduce(function (a, b) {
    return a.concat(b);
  }, []).reduce(function (a, b) {
    if (_react2.default.Fragment && b.type === _react2.default.Fragment) {
      return a.concat(_react2.default.Children.toArray(b.props.children));
    }
    return a.concat(b);
  }, []).reverse()).concat.apply(_components$map$map$r, (0, _toConsumableArray3.default)(defaultHead())).filter(function (c) {
    return !!c;
  }).filter(unique()).reverse().map(function (c) {
    var className = (c.props && c.props.className ? c.props.className + ' ' : '') + 'next-head';
    return _react2.default.cloneElement(c, { className: className });
  });
}

function mapOnServer(head) {
  return head;
}

function onStateChange(head) {
  if (this.context && this.context.headManager) {
    this.context.headManager.updateHead(head);
  }
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp', 'property'];

// returns a function for filtering head child elements
// which shouldn't be duplicated, like <title/>.

function unique() {
  var keys = new _set2.default();
  var tags = new _set2.default();
  var metaTypes = new _set2.default();
  var metaCategories = {};

  return function (h) {
    if (h.key && h.key.startsWith('.$')) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
    }
    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;
      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set2.default();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }
        break;
    }
    return true;
  };
}

exports.default = (0, _sideEffect2.default)(reduceComponents, onStateChange, mapOnServer)(Head);

/***/ }),

/***/ "./node_modules/next/dist/lib/side-effect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

exports.default = withSideEffect;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withSideEffect(reduceComponentsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reduceComponentsToState !== 'function') {
    throw new Error('Expected reduceComponentsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = new _set2.default();
    var state = void 0;

    function emitChange(component) {
      state = reduceComponentsToState([].concat((0, _toConsumableArray3.default)(mountedInstances)));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient.call(component, state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      (0, _inherits3.default)(SideEffect, _Component);

      function SideEffect() {
        (0, _classCallCheck3.default)(this, SideEffect);
        return (0, _possibleConstructorReturn3.default)(this, (SideEffect.__proto__ || (0, _getPrototypeOf2.default)(SideEffect)).apply(this, arguments));
      }

      (0, _createClass3.default)(SideEffect, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          mountedInstances.delete(this);
          emitChange(this);
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            WrappedComponent,
            null,
            this.props.children
          );
        }
      }], [{
        key: 'peek',
        value: function peek() {
          return state;
        }

        // Expose canUseDOM so tests can monkeypatch it

        // Try to use displayName of wrapped component

      }, {
        key: 'rewind',
        value: function rewind() {
          if (SideEffect.canUseDOM) {
            throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
          }

          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);
      return SideEffect;
    }(_react.Component);

    SideEffect.displayName = 'SideEffect(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';
    SideEffect.contextTypes = WrappedComponent.contextTypes;
    SideEffect.canUseDOM = typeof window !== 'undefined';


    return SideEffect;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGetInitialProps = undefined;

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var loadGetInitialProps = exports.loadGetInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(Component, ctx) {
    var props, compName, message;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (Component.getInitialProps) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', {});

          case 2:
            _context.next = 4;
            return Component.getInitialProps(ctx);

          case 4:
            props = _context.sent;

            if (!(ctx.res && isResSent(ctx.res))) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', props);

          case 7:
            if (props) {
              _context.next = 11;
              break;
            }

            compName = getDisplayName(Component);
            message = '"' + compName + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
            throw new Error(message);

          case 11:
            return _context.abrupt('return', props);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loadGetInitialProps(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.warn = warn;
exports.execOnce = execOnce;
exports.deprecated = deprecated;
exports.printAndExit = printAndExit;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function warn(message) {
  if (true) {
    console.error(message);
  }
}

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!used) {
      used = true;
      fn.apply(_this, args);
    }
  };
}

function deprecated(fn, message) {
  if (false) return fn;

  var warned = false;
  var newFn = function newFn() {
    if (!warned) {
      warned = true;
      console.error(message);
    }

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fn.apply(this, args);
  };

  // copy all properties
  (0, _assign2.default)(newFn, fn);

  return newFn;
}

function printAndExit(message) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (code === 0) {
    console.log(message);
  } else {
    console.error(message);
  }

  process.exit(code);
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;

  return protocol + '//' + hostname + (port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;

  var origin = getLocationOrigin();
  return href.substring(origin.length);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
  var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
var assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__("./node_modules/prop-types/checkPropTypes.js");

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__("./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/lib/global/generation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var generation = 0;

var increment = exports.increment = function increment() {
  return generation++;
};
var get = exports.get = function get() {
  return generation;
};

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/global/modules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.leave = exports.enter = exports.isOpened = exports.hotModule = undefined;

var _logger = __webpack_require__("./node_modules/react-hot-loader/lib/logger.js");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var openedModules = {};

var hotModules = {};

var createHotModule = function createHotModule() {
  return { instances: [], updateTimeout: 0 };
};

var hotModule = exports.hotModule = function hotModule(moduleId) {
  if (!hotModules[moduleId]) {
    hotModules[moduleId] = createHotModule();
  }
  return hotModules[moduleId];
};

var isOpened = exports.isOpened = function isOpened(sourceModule) {
  return sourceModule && !!openedModules[sourceModule.id];
};

var enter = exports.enter = function enter(sourceModule) {
  if (sourceModule && sourceModule.id) {
    openedModules[sourceModule.id] = true;
  } else {
    _logger2.default.warn('React-hot-loader: no `module` variable found. Do you shadow system variable?');
  }
};

var leave = exports.leave = function leave(sourceModule) {
  if (sourceModule && sourceModule.id) {
    delete openedModules[sourceModule.id];
  }
};

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/internal/reactUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isFragmentNode = exports.updateInstance = exports.getInternalInstance = exports.getComponentDisplayName = exports.isCompositeComponent = undefined;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */

var isCompositeComponent = exports.isCompositeComponent = function isCompositeComponent(type) {
  return typeof type === 'function';
};

var getComponentDisplayName = exports.getComponentDisplayName = function getComponentDisplayName(type) {
  return type.displayName || type.name || 'Component';
};

var getInternalInstance = exports.getInternalInstance = function getInternalInstance(instance) {
  return instance._reactInternalFiber || // React 16
  instance._reactInternalInstance || // React 15
  null;
};

var updateInstance = exports.updateInstance = function updateInstance(instance) {
  var updater = instance.updater,
      forceUpdate = instance.forceUpdate;

  if (typeof forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
    updater.enqueueForceUpdate(instance);
  }
};

var isFragmentNode = exports.isFragmentNode = function isFragmentNode(_ref) {
  var type = _ref.type;
  return _react2.default.Fragment && type === _react2.default.Fragment;
};

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/logger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/lib/reactHotLoader.js");

var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = {
  debug: function debug() {
    if (['debug'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console;

      (_console = console).debug.apply(_console, arguments);
    }
  },
  log: function log() {
    if (['debug', 'log'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
  },
  warn: function warn() {
    if (['debug', 'log', 'warn'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console3;

      (_console3 = console).warn.apply(_console3, arguments);
    }
  },
  error: function error() {
    if (['debug', 'log', 'warn', 'error'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console4;

      (_console4 = console).error.apply(_console4, arguments);
    }
  }
}; /* eslint-disable no-console */
exports.default = logger;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/patch.dev.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.leaveModule = exports.enterModule = undefined;

var _modules = __webpack_require__("./node_modules/react-hot-loader/lib/global/modules.js");

Object.defineProperty(exports, 'enterModule', {
  enumerable: true,
  get: function get() {
    return _modules.enter;
  }
});
Object.defineProperty(exports, 'leaveModule', {
  enumerable: true,
  get: function get() {
    return _modules.leave;
  }
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/lib/reactHotLoader.js");

var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactHotLoader2.default.patch(_react2.default);

exports.default = _reactHotLoader2.default;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/patch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require, import/no-mutable-exports */

if (false) {
  module.exports = require('./prod/patch.prod');
} else {
  module.exports = __webpack_require__("./node_modules/react-hot-loader/lib/patch.dev.js");
}

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/reactHotLoader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-use-before-define */


var _reactUtils = __webpack_require__("./node_modules/react-hot-loader/lib/internal/reactUtils.js");

var _generation = __webpack_require__("./node_modules/react-hot-loader/lib/global/generation.js");

var _proxies = __webpack_require__("./node_modules/react-hot-loader/lib/reconciler/proxies.js");

function resolveType(type) {
  if (!(0, _reactUtils.isCompositeComponent)(type)) return type;

  var proxy = reactHotLoader.disableProxyCreation ? (0, _proxies.getProxyByType)(type) : (0, _proxies.createProxyForType)(type);

  return proxy ? proxy.get() : type;
}

var reactHotLoader = {
  register: function register(type, uniqueLocalName, fileName) {
    if ((0, _reactUtils.isCompositeComponent)(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {
      (0, _generation.increment)();
      (0, _proxies.updateProxyById)(fileName + '#' + uniqueLocalName, type);
    }
  },
  reset: function reset() {
    (0, _proxies.resetProxies)();
  },
  patch: function patch(React) {
    if (!React.createElement.isPatchedByReactHotLoader) {
      var originalCreateElement = React.createElement;
      // Trick React into rendering a proxy so that
      // its state is preserved when the class changes.
      // This will update the proxy if it's for a known type.
      React.createElement = function (type) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return originalCreateElement.apply(undefined, [resolveType(type)].concat(args));
      };
      React.createElement.isPatchedByReactHotLoader = true;
    }

    if (!React.createFactory.isPatchedByReactHotLoader) {
      // Patch React.createFactory to use patched createElement
      // because the original implementation uses the internal,
      // unpatched ReactElement.createElement
      React.createFactory = function (type) {
        var factory = React.createElement.bind(null, type);
        factory.type = type;
        return factory;
      };
      React.createFactory.isPatchedByReactHotLoader = true;
    }

    if (!React.Children.only.isPatchedByReactHotLoader) {
      var originalChildrenOnly = React.Children.only;
      // Use the same trick as React.createElement
      React.Children.only = function (children) {
        return originalChildrenOnly(_extends({}, children, { type: resolveType(children.type) }));
      };
      React.Children.only.isPatchedByReactHotLoader = true;
    }

    reactHotLoader.reset();
  },


  disableProxyCreation: false,

  config: {
    logLevel: 'error'
  }
};

exports.default = reactHotLoader;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/reconciler/proxies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.resetProxies = exports.createProxyForType = exports.updateProxyById = exports.getProxyByType = exports.getIdByType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactStandIn = __webpack_require__("./node_modules/react-stand-in/lib/index.js");

var _reactStandIn2 = _interopRequireDefault(_reactStandIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proxiesByID = void 0;
var idsByType = void 0;

var elementCount = 0;

var generateTypeId = function generateTypeId() {
  return 'auto-' + elementCount++;
};

var getIdByType = exports.getIdByType = function getIdByType(type) {
  return idsByType.get(type);
};

var getProxyByType = exports.getProxyByType = function getProxyByType(type) {
  return proxiesByID[getIdByType(type)];
};

var autoWrapper = function autoWrapper(element) {
  // post wrap on post render
  if (!element) {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map(autoWrapper);
  }
  if (typeof element.type === 'function') {
    var proxy = getProxyByType(element.type);
    if (proxy) {
      return _extends({}, element, {
        type: proxy.get()
      });
    }
  }
  return element;
};

var updateProxyById = exports.updateProxyById = function updateProxyById(id, type) {
  // Remember the ID.
  idsByType.set(type, id);

  if (!proxiesByID[id]) {
    proxiesByID[id] = (0, _reactStandIn2.default)(type, id, autoWrapper);
  } else {
    proxiesByID[id].update(type);
  }
  return proxiesByID[id];
};

var createProxyForType = exports.createProxyForType = function createProxyForType(type) {
  return getProxyByType(type) || updateProxyById(generateTypeId(), type);
};

var resetProxies = exports.resetProxies = function resetProxies() {
  proxiesByID = {};
  idsByType = new WeakMap();
};

/***/ }),

/***/ "./node_modules/react-hot-loader/patch.js":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable import/no-unresolved */
module.exports = __webpack_require__("./node_modules/react-hot-loader/lib/patch.js")


/***/ }),

/***/ "./node_modules/react-stand-in/lib/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var config = {
  logger: console
};

var setConfig = exports.setConfig = function setConfig(obj) {
  Object.assign(config, obj);
};

exports.default = config;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var PREFIX = exports.PREFIX = '__reactstandin__';
var PROXY_KEY = exports.PROXY_KEY = PREFIX + 'key';
var GENERATION = exports.GENERATION = PREFIX + 'proxyGeneration';
var REGENERATE_METHOD = exports.REGENERATE_METHOD = PREFIX + 'regenerateByEval';
var UNWRAP_PROXY = exports.UNWRAP_PROXY = PREFIX + 'getCurrent';
var CACHED_RESULT = exports.CACHED_RESULT = PREFIX + 'cachedResult';

/***/ }),

/***/ "./node_modules/react-stand-in/lib/createClassProxy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _transferStaticProps = __webpack_require__("./node_modules/react-stand-in/lib/transferStaticProps.js");

var _transferStaticProps2 = _interopRequireDefault(_transferStaticProps);

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

var _utils = __webpack_require__("./node_modules/react-stand-in/lib/utils.js");

var _inject = __webpack_require__("./node_modules/react-stand-in/lib/inject.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var has = Object.prototype.hasOwnProperty;

var proxies = new WeakMap();

var defaultRenderOptions = {
  preRender: _utils.identity,
  postRender: function postRender(result) {
    return result;
  }
};

var defineClassMember = function defineClassMember(Class, methodName, methodBody) {
  return (0, _utils.safeDefineProperty)(Class.prototype, methodName, {
    configurable: true,
    writable: true,
    enumerable: false,
    value: methodBody
  });
};

function createClassProxy(InitialComponent, proxyKey, options) {
  var renderOptions = _extends({}, defaultRenderOptions, options);
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = proxies.get(InitialComponent);

  if (existingProxy) {
    return existingProxy;
  }

  var CurrentComponent = void 0;
  var savedDescriptors = {};
  var injectedMembers = {};
  var proxyGeneration = 0;
  var isFunctionalComponent = !(0, _utils.isReactClass)(InitialComponent);

  var lastInstance = null;

  function postConstructionAction() {
    this[_constants.GENERATION] = 0;

    // As long we can't override constructor
    // every class shall evolve from a base class
    (0, _inject.inject)(this, proxyGeneration, injectedMembers);

    lastInstance = this;
  }

  function proxiedUpdate() {
    (0, _inject.inject)(this, proxyGeneration, injectedMembers);
  }

  function lifeCycleWrapperFactory(wrapperName) {
    return function wrappedMethod() {
      proxiedUpdate.call(this);

      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);
    };
  }

  var componentWillReceiveProps = lifeCycleWrapperFactory('componentWillReceiveProps');
  var componentWillUpdate = lifeCycleWrapperFactory('componentWillUpdate');

  function proxiedRender() {
    proxiedUpdate.call(this);
    renderOptions.preRender(this);

    var result = void 0;

    // We need to use hasOwnProperty here, as the cached result is a React node
    // and can be null or some other falsy value.
    if (has.call(this, _constants.CACHED_RESULT)) {
      result = this[_constants.CACHED_RESULT];
      delete this[_constants.CACHED_RESULT];
    } else if (isFunctionalComponent) {
      result = CurrentComponent(this.props, this.context);
    } else {
      result = CurrentComponent.prototype.render.call(this);
    }

    return renderOptions.postRender(result);
  }

  var defineProxyMethods = function defineProxyMethods(Proxy) {
    defineClassMember(Proxy, 'render', proxiedRender);
    defineClassMember(Proxy, 'componentWillReceiveProps', componentWillReceiveProps);
    defineClassMember(Proxy, 'componentWillUpdate', componentWillUpdate);
  };

  var ProxyFacade = void 0;
  var ProxyComponent = null;

  if (!isFunctionalComponent) {
    ProxyComponent = (0, _utils.proxyClassCreator)(InitialComponent, postConstructionAction);

    defineProxyMethods(ProxyComponent);

    ProxyFacade = ProxyComponent;
  } else {
    // This function only gets called for the initial mount. The actual
    // rendered component instance will be the return value.

    // eslint-disable-next-line func-names
    ProxyFacade = function ProxyFacade(props, context) {
      var result = CurrentComponent(props, context);

      // This is a Relay-style container constructor. We can't do the prototype-
      // style wrapping for this as we do elsewhere, so just we just pass it
      // through as-is.
      if ((0, _utils.isReactComponentInstance)(result)) {
        ProxyComponent = null;
        return result;
      }

      // Otherwise, it's a normal functional component. Build the real proxy
      // and use it going forward.
      ProxyComponent = (0, _utils.proxyClassCreator)(_react.Component, postConstructionAction);

      defineProxyMethods(ProxyComponent);

      var determinateResult = new ProxyComponent(props, context);

      // Cache the initial render result so we don't call the component function
      // a second time for the initial render.
      determinateResult[_constants.CACHED_RESULT] = result;
      return determinateResult;
    };
  }

  function get() {
    return ProxyFacade;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  (0, _utils.safeDefineProperty)(ProxyFacade, _constants.UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  (0, _utils.safeDefineProperty)(ProxyFacade, _constants.PROXY_KEY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: proxyKey
  });

  (0, _utils.safeDefineProperty)(ProxyFacade, 'toString', {
    configurable: true,
    writable: false,
    enumerable: false,
    value: function toString() {
      return String(CurrentComponent);
    }
  });

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    if (NextComponent === CurrentComponent) {
      return;
    }

    // Prevent proxy cycles
    var existingProxy = proxies.get(NextComponent);
    if (existingProxy) {
      update(existingProxy[_constants.UNWRAP_PROXY]());
      return;
    }

    isFunctionalComponent = !(0, _utils.isReactClass)(NextComponent);
    proxyGeneration++;

    // Save the next constructor so we call it
    var PreviousComponent = CurrentComponent;
    CurrentComponent = NextComponent;

    // Try to infer displayName
    var displayName = (0, _utils.getDisplayName)(CurrentComponent);
    ProxyFacade.displayName = displayName;

    if (ProxyComponent) {
      (0, _utils.safeDefineProperty)(ProxyComponent, 'name', {
        value: displayName
      });
    }

    savedDescriptors = (0, _transferStaticProps2.default)(ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);

    if (isFunctionalComponent || !ProxyComponent) {
      // nothing
    } else {
      (0, _inject.checkLifeCycleMethods)(ProxyComponent, NextComponent);
      Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);
      if (proxyGeneration > 1) {
        injectedMembers = (0, _inject.mergeComponents)(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers);
      }
    }
  }

  update(InitialComponent);

  var proxy = { get: get, update: update };
  proxies.set(ProxyFacade, proxy);

  (0, _utils.safeDefineProperty)(proxy, _constants.UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

exports.default = createClassProxy;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

var _createClassProxy = __webpack_require__("./node_modules/react-stand-in/lib/createClassProxy.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createClassProxy).default;
  }
});

var _config = __webpack_require__("./node_modules/react-stand-in/lib/config.js");

Object.defineProperty(exports, 'setConfig', {
  enumerable: true,
  get: function get() {
    return _config.setConfig;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-stand-in/lib/inject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.inject = exports.checkLifeCycleMethods = exports.mergeComponents = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__("./node_modules/react-stand-in/lib/utils.js");

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

var _config = __webpack_require__("./node_modules/react-stand-in/lib/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers) {
  var injectedCode = {};
  try {
    var nextInstance = (0, _utils.safeReactConstructor)(NextComponent, lastInstance);

    try {
      // Bypass babel class inheritance checking
      (0, _utils.deepPrototypeUpdate)(InitialComponent, NextComponent);
    } catch (e) {
      // It was ES6 class
    }

    var proxyInstance = (0, _utils.safeReactConstructor)(ProxyComponent, lastInstance);

    if (!nextInstance || !proxyInstance) {
      return injectedCode;
    }

    var mergedAttrs = _extends({}, proxyInstance, nextInstance);
    var hasRegenerate = proxyInstance[_constants.REGENERATE_METHOD];
    var ownKeys = (0, _utils.getOwnKeys)(Object.getPrototypeOf(ProxyComponent.prototype));
    Object.keys(mergedAttrs).forEach(function (key) {
      if (key.startsWith(_constants.PREFIX)) return;
      var nextAttr = nextInstance[key];
      var prevAttr = proxyInstance[key];
      if (prevAttr && nextAttr) {
        if ((0, _utils.isNativeFunction)(nextAttr) || (0, _utils.isNativeFunction)(prevAttr)) {
          // this is bound method
          var isSameArity = nextAttr.length === prevAttr.length;
          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];
          if (isSameArity && existsInPrototype) {
            if (hasRegenerate) {
              injectedCode[key] = 'Object.getPrototypeOf(this)[\'' + key + '\'].bind(this)';
            } else {
              _config2.default.logger.warn('React-stand-in:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');
            }
          } else {
            _config2.default.logger.warn('React-stand-in:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));
          }
          return;
        }

        var nextString = String(nextAttr);
        var injectedBefore = injectedMembers[key];
        if (nextString !== String(prevAttr) || injectedBefore && nextString !== String(injectedBefore)) {
          if (!hasRegenerate) {
            if (nextString.indexOf('function') < 0 && nextString.indexOf('=>') < 0) {
              // just copy prop over
              injectedCode[key] = nextAttr;
            } else {
              _config2.default.logger.warn('React-stand-in:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');
            }
          } else {
            injectedCode[key] = nextAttr;
          }
        }
      }
    });
  } catch (e) {
    _config2.default.logger.warn('React-stand-in:', e);
  }
  return injectedCode;
}

function checkLifeCycleMethods(ProxyComponent, NextComponent) {
  try {
    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);
    var p2 = NextComponent.prototype;
    _utils.reactLifeCycleMountMethods.forEach(function (key) {
      var d1 = Object.getOwnPropertyDescriptor(p1, key) || { value: p1[key] };
      var d2 = Object.getOwnPropertyDescriptor(p2, key) || { value: p2[key] };
      if (!(0, _utils.shallowStringsEqual)(d1, d2)) {
        _config2.default.logger.warn('React-stand-in:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');
      }
    });
  } catch (e) {
    // Ignore errors
  }
}

function inject(target, currentGeneration, injectedMembers) {
  if (target[_constants.GENERATION] !== currentGeneration) {
    var hasRegenerate = !!target[_constants.REGENERATE_METHOD];
    Object.keys(injectedMembers).forEach(function (key) {
      try {
        if (hasRegenerate) {
          target[_constants.REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\n          var _this = this; // common babel transpile\n          var _this2 = this; // common babel transpile          \n          return ' + injectedMembers[key] + ';\n          }).call(this)');
        } else {
          target[key] = injectedMembers[key];
        }
      } catch (e) {
        _config2.default.logger.warn('React-stand-in: Failed to regenerate method ', key, ' of class ', target);
        _config2.default.logger.warn('got error', e);
      }
    });

    target[_constants.GENERATION] = currentGeneration;
  }
}

exports.mergeComponents = mergeComponents;
exports.checkLifeCycleMethods = checkLifeCycleMethods;
exports.inject = inject;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/transferStaticProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _utils = __webpack_require__("./node_modules/react-stand-in/lib/utils.js");

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', _constants.PROXY_KEY, _constants.UNWRAP_PROXY];

function transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    if (!(0, _shallowequal2.default)(prevDescriptor, savedDescriptor)) {
      (0, _utils.safeDefineProperty)(NextComponent, key, prevDescriptor);
    }
  });

  // Copy newly defined static methods and properties
  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !(0, _shallowequal2.default)(savedDescriptor, prevDescriptor)) {
      (0, _utils.safeDefineProperty)(NextComponent, key, prevDescriptor);
      return;
    }

    if (prevDescriptor && !savedDescriptor) {
      (0, _utils.safeDefineProperty)(ProxyComponent, key, prevDescriptor);
      return;
    }

    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
      configurable: true
    });

    savedDescriptors[key] = nextDescriptor;
    (0, _utils.safeDefineProperty)(ProxyComponent, key, nextDescriptor);
  });

  // Remove static methods and properties that are no longer defined
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }
    // Skip statics that exist on the next class
    if (NextComponent.hasOwnProperty(key)) {
      return;
    }
    // Skip non-configurable statics
    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    if (proxyDescriptor && !proxyDescriptor.configurable) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !(0, _shallowequal2.default)(savedDescriptor, prevDescriptor)) {
      return;
    }

    (0, _utils.safeDefineProperty)(ProxyComponent, key, {
      value: undefined
    });
  });

  return savedDescriptors;
}

exports.default = transferStaticProps;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.proxyClassCreator = exports.isReactComponentInstance = exports.doesSupportClasses = exports.identity = exports.reactLifeCycleMountMethods = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable no-eval, func-names */


exports.getDisplayName = getDisplayName;
exports.isReactClass = isReactClass;
exports.safeReactConstructor = safeReactConstructor;
exports.isNativeFunction = isNativeFunction;
exports.getOwnKeys = getOwnKeys;
exports.shallowStringsEqual = shallowStringsEqual;
exports.deepPrototypeUpdate = deepPrototypeUpdate;
exports.safeDefineProperty = safeDefineProperty;

var _config = __webpack_require__("./node_modules/react-stand-in/lib/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDisplayName(Component) {
  var displayName = Component.displayName || Component.name;
  return displayName && displayName !== 'ReactComponent' ? displayName : 'Unknown';
}

var reactLifeCycleMountMethods = exports.reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];

function isReactClass(Component) {
  return Component.prototype && (Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render);
}

function safeReactConstructor(Component, lastInstance) {
  try {
    if (lastInstance) {
      return new Component(lastInstance.props, lastInstance.context);
    }
    return new Component({}, {});
  } catch (e) {
    // some components, like Redux connect could not be created without proper context
  }
  return null;
}

function isNativeFunction(fn) {
  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;
}

var identity = exports.identity = function identity(a) {
  return a;
};

var doesSupportClasses = exports.doesSupportClasses = function () {
  try {
    eval('class Test {}');
    return true;
  } catch (e) {
    return false;
  }
}();

var ES6ProxyComponentFactory = doesSupportClasses && eval('\n(function(InitialParent, postConstructionAction) {\n  return class ProxyComponent extends InitialParent {\n    constructor(props, context) {\n      super(props, context)\n      postConstructionAction.call(this)\n    }\n  }\n})\n');

var ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {
  function ProxyComponent(props, context) {
    InitialParent.call(this, props, context);
    postConstructionAction.call(this);
  }
  ProxyComponent.prototype = Object.create(InitialParent.prototype);
  Object.setPrototypeOf(ProxyComponent, InitialParent);
  return ProxyComponent;
};

var isReactComponentInstance = exports.isReactComponentInstance = function isReactComponentInstance(el) {
  return el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && !el.type && el.render;
};

var proxyClassCreator = exports.proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;

function getOwnKeys(target) {
  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));
}

function shallowStringsEqual(a, b) {
  for (var key in a) {
    if (String(a[key]) !== String(b[key])) {
      return false;
    }
  }
  return true;
}

function deepPrototypeUpdate(dest, source) {
  var deepDest = Object.getPrototypeOf(dest);
  var deepSrc = Object.getPrototypeOf(source);
  if (deepDest && deepSrc && deepSrc !== deepDest) {
    deepPrototypeUpdate(deepDest, deepSrc);
  }
  if (source.prototype && source.prototype !== dest.prototype) {
    dest.prototype = source.prototype;
  }
}

function safeDefineProperty(target, key, props) {
  try {
    Object.defineProperty(target, key, props);
  } catch (e) {
    _config2.default.logger.warn('Error while wrapping', key, ' -> ', e);
  }
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/***/ (function(module, exports) {

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });
    this._sheet.inject();
    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layouts__ = __webpack_require__("./components/Layouts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Login__ = __webpack_require__("./components/Login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = '/home/juliet/App/pages/index.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();





var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'manifest', href: 'static/manifest.json', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__components_Layouts__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Login__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })
    )
  );
};

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, 'Index', '/home/juliet/App/pages/index.js');
  reactHotLoader.register(_default, 'default', '/home/juliet/App/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map