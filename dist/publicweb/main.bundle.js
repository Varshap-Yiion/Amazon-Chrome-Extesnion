webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Droid+Sans);", ""]);

// module
exports.push([module.i, "/* #Reset & Basics (Inspired by E. Meyers)\r\n================================================== */\r\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline; }\r\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\r\n  display: block; }\r\nbody {\r\n  line-height: 1; }\r\nol, ul {\r\n  list-style: none; }\r\nblockquote, q {\r\n  quotes: none; }\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n  content: '';\r\n  content: none; }\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0; }\r\n\r\n\r\n/* #Basic Styles\r\n================================================== */\r\nbody {\r\n  background: #eeeeee;\r\n  font: 14px/21px 'Droid Sans';\r\n  color: #444;\r\n  -webkit-font-smoothing: antialiased; /* Fix for webkit rendering */\r\n  -webkit-text-size-adjust: 100%;\r\n}\r\n\r\n\r\n/* #Typography\r\n================================================== */\r\nh5{ font-weight:bold!important;}\r\nh1, h2, h3, h4, h5, h6 {\r\n  color: #181818;\r\n  font-family: 'Droid Sans';\r\n  font-weight: normal; }\r\nh1 a, h2 a, h3 a, h4 a, h5 a, h6 a { font-weight: inherit; }\r\n/*----------*/\r\nb{ font-weight:bold;}\r\n\r\n\r\n/*----------*/\r\nem { font-style: italic; }\r\nstrong { font-weight: bold; color: #333; }\r\nsmall { font-size: 80%; }\r\n\r\n/*\tBlockquotes  */\r\nblockquote, blockquote p { font-size: 17px; line-height: 24px; color: #777; font-style: italic; }\r\nblockquote { margin: 0 0 20px; padding: 9px 20px 0 19px; border-left: 1px solid #ddd; }\r\nblockquote cite { display: block; font-size: 12px; color: #555; }\r\nblockquote cite:before { content: \"\\2014    \"; }\r\nblockquote cite a, blockquote cite a:visited, blockquote cite a:visited { color: #555; }\r\n\r\nhr { border: solid #ddd; border-width: 1px 0 0; clear: both; margin: 10px 0 30px; height: 0; }\r\n\r\n\r\n/*input[type=\"text\"],*/\r\n/* #Misc\r\n================================================== */\r\n.remove-bottom { margin-bottom: 0 !important; }\r\n.half-bottom { margin-bottom: 10px !important; }\r\n.add-bottom { margin-bottom: 20px !important; }\r\n\r\n\r\n::-moz-selection {\r\n  background:#333;\r\n  color:#FFF;\r\n}\r\n\r\n\r\n::selection {\r\n  background:#333;\r\n  color:#FFF;\r\n}\r\n::-moz-selection {\r\n  background:#333;\r\n  color:#FFF;\r\n}\r\n::-webkit-input-placeholder {\r\n  font-style:normal;\r\n  color:#d9d9d9;\r\n}\r\n:-moz-placeholder {\r\n  font-style:normal;\r\n  color:#d9d9d9;\r\n}\r\n.hidden { display:none; }\r\n.vspacer { height:20px; }\r\n.align_right { text-align:right !important; }\r\n.margin_right { margin-right:10px; }\r\n.j, .justify { text-align:justify !important; }\r\n.zindex { position:relative; z-index:1; }\r\n.lh { line-height:1.9; }\r\n.margin_top { margin-top:30px; }\r\na { text-decoration:none; color:#FFF; }\r\na:hover { text-decoration:underline; }\r\n.left{ float:left;}\r\n.right{ float:right;}\r\n.clear{ clear:both;}\r\n\r\n\r\n.row:after,\r\n.row:before{\r\n  display: table;\r\n  content: \" \";\r\n}\r\n.row-fluid {\r\n  margin-left: -15px;\r\n  margin-right: -15px;\r\n}\r\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12 {\r\n  float: left;\r\n  position: relative;\r\n  min-height: 1px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n.col-12 { width: 100%; }\r\n.col-11 { width: 91.66666667%; }\r\n.col-10 { width: 83.33333333%; }\r\n.col-9 { width: 75%; }\r\n.col-8 { width: 66.66666667%; }\r\n.col-7 { width: 58.33333333%; }\r\n.col-6 { width: 50%; }\r\n.col-5 { width: 41.66666667%; }\r\n.col-4 { width: 33.33333333%; }\r\n.col-3 { width: 25%; }\r\n.col-2 { width: 16.66666667%; }\r\n.col-1 { width: 8.33333333%; }\r\n\r\n@media (min-width: 768px) {\r\n  .col-tab-12 { width: 100%; }\r\n  .col-tab-11 { width: 91.66666667%; }\r\n  .col-tab-10 { width: 83.33333333%; }\r\n  .col-tab-9 { width: 75%; }\r\n  .col-tab-8 { width: 66.66666667%; }\r\n  .col-tab-7 { width: 58.33333333%; }\r\n  .col-tab-6 { width: 50%; }\r\n  .col-tab-5 { width: 41.66666667%; }\r\n  .col-tab-4 { width: 33.33333333%; }\r\n  .col-tab-3 { width: 25%; }\r\n  .col-tab-2 { width: 16.66666667%; }\r\n  .col-tab-1 { width: 8.33333333%; }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .col-12 { width: 100%; }\r\n  .col-11 { width: 91.66666667%; }\r\n  .col-10 { width: 83.33333333%; }\r\n  .col-9 { width: 75%; }\r\n  .col-8 { width: 66.66666667%; }\r\n  .col-7 { width: 58.33333333%; }\r\n  .col-6 { width: 50%; }\r\n  .col-5 { width: 41.66666667%; }\r\n  .col-4 { width: 33.33333333%; }\r\n  .col-3 { width: 25%; }\r\n  .col-2 { width: 16.66666667%; }\r\n  .col-1 { width: 8.33333333%; }\r\n}\r\n@media (max-width:767px){\r\n  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12 {\r\n    width: 100%;\r\n  }\r\n}\r\n.breadcrumbs{\r\n  display: none;\r\n}\r\nbody.cms-home .main-container{\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n\r\n/*--------------------------------------------------\r\n\t\t\tBODY BACKGROUND START\r\n---------------------------------------------------*/\r\n\r\n.header, .section, .footer{ width:1024px;margin: 0 auto}\r\n\r\n/*--------------------------------------------------\r\n\t\t\tBODY BACKGROUND END\r\n---------------------------------------------------*/\r\n\r\n\r\n/*--------------------------------------------------\r\n\t\t\tHEADER CSS START\r\n---------------------------------------------------*/\r\n.navbar-brand img {width: 30px;vertical-align: middle;}\r\n.bg-dark {background-color: #232F3E !important;}\r\n/*--------------------------------------------------\r\n\t\t\tHEADER CSS END\r\n---------------------------------------------------*/\r\n\r\n\r\n\r\n\r\n/*--------------------------------------------------\r\n\t\t\tCONTAINER CSS START\r\n---------------------------------------------------*/\r\n.tab-section img {width: 16px;}\r\n.tab-content {background: #fff;padding: 20px;}\r\n.tab-content #p-search h6 {font-size: 16px;font-weight: 600;}\r\n.nav .nav-item a{color: #000; font-weight: 600;}\r\n.label-title {font-size: 14px;color: #212528; font-weight: 600;margin-bottom: 7px;}\r\n.inner-text {color: #95a5a6}\r\n.btn-file {background-color: #f8cd96;color: #fff;}\r\n.card  {margin-bottom: 20px;}\r\nhr {margin: 15px 0 15px;}\r\n.alert-warning {color: #fff;background-color: #2c3e4f;border-color: #2c3e4f;}\r\n.custom-control-input:checked~.custom-control-label::before {color: #fff;border-color: #2c3e4f;background-color: #2c3e4f;}\r\n.custom-select:focus{border-color:#ee9793;box-shadow:none}\r\n.btn-success, .btn-success:hover {background: #28bb9c;border-color:#28bb9c;}\r\n/*--------------------------------------------------\r\n\t\t\tCONTAINER CSS END\r\n---------------------------------------------------*/\r\n\r\n\r\n\r\n\r\n/*--------------------------------------------------\r\n\t\t\tFOOTER CSS START\r\n---------------------------------------------------*/\r\n\r\n/*--------------------------------------------------\r\n\t\t\tFOOTER CSS END\r\n---------------------------------------------------*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- HEADER START -->\r\n<header>\r\n  <div class=\"header\">\r\n    <nav class=\"pos-f-t \">\r\n      <nav class=\"navbar navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/amazon-logo.png\"> Amazon Tool- PRO</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggleExternalContent\"\r\n                aria-controls=\"navbarToggleExternalContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n      </nav>\r\n      <div class=\"collapse\" id=\"navbarToggleExternalContent\">\r\n        <div class=\"bg-dark p-4\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\">Web Site</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\">Critical Brands List</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\">Trademark Inquiry</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\">Frequently Asked Questions</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"#\">Logout</a>\r\n            </li>\r\n          </ul>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"card card-box2 \">\r\n                <h6 class=\"card-header label-title\">Application Settings <img src=\"assets/youtube-logo.png\"\r\n                                                                              style=\"width: 20px;float:right;\"></h6>\r\n                <div class=\"card-body\">\r\n                  <div class=\"inner-sec\">\r\n                    <label class=\"label-title\">Language Option</label>\r\n                    <select class=\"browser-default custom-select\">\r\n                      <option selected>English</option>\r\n                      <option value=\"1\">Hindi</option>\r\n                      <option value=\"2\">Gujarati</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"inner-sec\">\r\n                    <label class=\"label-title\">Query Speed</label>\r\n                    <select class=\"browser-default custom-select\">\r\n                      <option selected>Normal</option>\r\n                      <option value=\"1\">Hindi</option>\r\n                      <option value=\"2\">Gujarati</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"inner-sec\">\r\n                    <label class=\"label-title\">Transaction Log</label>\r\n                    <select class=\"browser-default custom-select\">\r\n                      <option selected>Show</option>\r\n                      <option value=\"1\">Hindi</option>\r\n                      <option value=\"2\">Gujarati</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"inner-sec\">\r\n                    <label class=\"label-title\">Shipping Address</label>\r\n                    <select class=\"browser-default custom-select\">\r\n                      <option selected>Automatic Select</option>\r\n                      <option value=\"1\">Hindi</option>\r\n                      <option value=\"2\">Gujarati</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"inner-sec\">\r\n                    <label class=\"label-title\">Import Fees Average</label>\r\n                    <select class=\"browser-default custom-select\">\r\n                      <option selected>Automatic</option>\r\n                      <option value=\"1\">Hindi</option>\r\n                      <option value=\"2\">Gujarati</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</header>\r\n<!-- HEADER END -->\r\n<!-- CONTAINER START -->\r\n<section>\r\n  <div class=\"tab-section section\">\r\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" id=\"p-search-tab\" data-toggle=\"tab\" href=\"#p-search\" role=\"tab\"\r\n           aria-controls=\"p-search\" aria-selected=\"true\">Product Search </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"p-update-tab\" data-toggle=\"tab\" href=\"#p-update\" role=\"tab\" aria-controls=\"p-update\"\r\n           aria-selected=\"false\">Products Update</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"p-home-tab\" data-toggle=\"tab\" href=\"#p-home\" role=\"tab\" aria-controls=\"p-home\"\r\n           aria-selected=\"false\"><img src=\"assets/home.png\"></a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"tab-content\" id=\"myTabContent\">\r\n      <div class=\"tab-pane fade show active\" id=\"p-search\" role=\"tabpanel\" aria-labelledby=\"p-search-tab\">\r\n        <!--<form id=\"\" class=\"\" #f=\"ngForm\">-->\r\n          <div class=\"card card-box1\">\r\n            <h6 class=\"card-header\">Search Settings <img src=\"assets/youtube-logo.png\" style=\"float:right;\"></h6>\r\n\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <!-- Default unchecked -->\r\n                  <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" class=\"custom-control-input\" id=\"radio1\" name=\"defaultExampleRadios\">\r\n                    <label class=\"custom-control-label label-title\" for=\"radio1\">Products on Amazon pages\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                          <p class=\"label-title\">Number of pages</p><span class=\"inner-text\">Min:1-2 Max:1-100 </span>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <input id=\"number\" min=\"1\" type=\"number\" value=\"1\" [(ngModel)]=\"from_page\" name=\"from_page_field\" #from_page_field=\"ngModel\" class=\"form-control\" style=\"width:35%;float: left;\">\r\n                          <input class=\"form-control\" id=\"number\" max=\"1\" [(ngModel)]=\"to_page\" name=\"to_page_field\" #to_page_field=\"ngModel\" type=\"number\" value=\"50\" style=\"width:35%;\">\r\n                        </div>\r\n                      </div>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6\">\r\n                  <!-- Default unchecked -->\r\n                  <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" class=\"custom-control-input\" id=\"radio2\" name=\"defaultExampleRadios\">\r\n                    <label class=\"custom-control-label label-title\" for=\"radio2\">Products in .txt fil\r\n                      <div class=\"select-file\">\r\n                        <input type=\"button\" id=\"btnFileUpload\" class=\"btn btn-file\" value=\"Select File\"/>\r\n                        <span id=\"spnFilePath\"></span>\r\n                        <input type=\"file\" id=\"FileUpload1\" style=\"display: none;\"/>\r\n                      </div>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox1\">\r\n                <label class=\"custom-control-label label-title\" for=\"checkbox1\">Include Product variations</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card card-box2\">\r\n            <h6 class=\"card-header\">Search Filter</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"inner-sec\">\r\n                    <label class=\"label-title\">Select Sotre Country</label>\r\n                    <select class=\"browser-default custom-select\">\r\n                      <option selected>Please select</option>\r\n                      <option value=\"Afghanistan\">Afghanistan</option>\r\n                      <option value=\"Albania\">Albania</option>\r\n                      <option value=\"Algeria\">Algeria</option>\r\n                      <option value=\"American Samoa\">American Samoa</option>\r\n                      <option value=\"Andorra\">Andorra</option>\r\n                      <option value=\"Angola\">Angola</option>\r\n                      <option value=\"Anguilla\">Anguilla</option>\r\n                      <option value=\"Antartica\">Antarctica</option>\r\n                      <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\r\n                      <option value=\"Argentina\">Argentina</option>\r\n                      <option value=\"Armenia\">Armenia</option>\r\n                      <option value=\"Aruba\">Aruba</option>\r\n                      <option value=\"Australia\">Australia</option>\r\n                      <option value=\"Austria\">Austria</option>\r\n                      <option value=\"Azerbaijan\">Azerbaijan</option>\r\n                      <option value=\"Bahamas\">Bahamas</option>\r\n                      <option value=\"Bahrain\">Bahrain</option>\r\n                      <option value=\"Bangladesh\">Bangladesh</option>\r\n                      <option value=\"Barbados\">Barbados</option>\r\n                      <option value=\"Belarus\">Belarus</option>\r\n                      <option value=\"Belgium\">Belgium</option>\r\n                      <option value=\"Belize\">Belize</option>\r\n                      <option value=\"Benin\">Benin</option>\r\n                      <option value=\"Bermuda\">Bermuda</option>\r\n                      <option value=\"Bhutan\">Bhutan</option>\r\n                      <option value=\"Bolivia\">Bolivia</option>\r\n                      <option value=\"Bosnia and Herzegowina\">Bosnia and Herzegowina</option>\r\n                      <option value=\"Botswana\">Botswana</option>\r\n                      <option value=\"Bouvet Island\">Bouvet Island</option>\r\n                      <option value=\"Brazil\">Brazil</option>\r\n                      <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\r\n                      <option value=\"Brunei Darussalam\">Brunei Darussalam</option>\r\n                      <option value=\"Bulgaria\">Bulgaria</option>\r\n                      <option value=\"Burkina Faso\">Burkina Faso</option>\r\n                      <option value=\"Burundi\">Burundi</option>\r\n                      <option value=\"Cambodia\">Cambodia</option>\r\n                      <option value=\"Cameroon\">Cameroon</option>\r\n                      <option value=\"Canada\">Canada</option>\r\n                      <option value=\"Cape Verde\">Cape Verde</option>\r\n                      <option value=\"Cayman Islands\">Cayman Islands</option>\r\n                      <option value=\"Central African Republic\">Central African Republic</option>\r\n                      <option value=\"Chad\">Chad</option>\r\n                      <option value=\"Chile\">Chile</option>\r\n                      <option value=\"China\">China</option>\r\n                      <option value=\"Christmas Island\">Christmas Island</option>\r\n                      <option value=\"Cocos Islands\">Cocos (Keeling) Islands</option>\r\n                      <option value=\"Colombia\">Colombia</option>\r\n                      <option value=\"Comoros\">Comoros</option>\r\n                      <option value=\"Congo\">Congo</option>\r\n                      <option value=\"Congo\">Congo, the Democratic Republic of the</option>\r\n                      <option value=\"Cook Islands\">Cook Islands</option>\r\n                      <option value=\"Costa Rica\">Costa Rica</option>\r\n                      <option value=\"Cota D'Ivoire\">Cote d'Ivoire</option>\r\n                      <option value=\"Croatia\">Croatia (Hrvatska)</option>\r\n                      <option value=\"Cuba\">Cuba</option>\r\n                      <option value=\"Cyprus\">Cyprus</option>\r\n                      <option value=\"Czech Republic\">Czech Republic</option>\r\n                      <option value=\"Denmark\">Denmark</option>\r\n                      <option value=\"Djibouti\">Djibouti</option>\r\n                      <option value=\"Dominica\">Dominica</option>\r\n                      <option value=\"Dominican Republic\">Dominican Republic</option>\r\n                      <option value=\"East Timor\">East Timor</option>\r\n                      <option value=\"Ecuador\">Ecuador</option>\r\n                      <option value=\"Egypt\">Egypt</option>\r\n                      <option value=\"El Salvador\">El Salvador</option>\r\n                      <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\r\n                      <option value=\"Eritrea\">Eritrea</option>\r\n                      <option value=\"Estonia\">Estonia</option>\r\n                      <option value=\"Ethiopia\">Ethiopia</option>\r\n                      <option value=\"Falkland Islands\">Falkland Islands (Malvinas)</option>\r\n                      <option value=\"Faroe Islands\">Faroe Islands</option>\r\n                      <option value=\"Fiji\">Fiji</option>\r\n                      <option value=\"Finland\">Finland</option>\r\n                      <option value=\"France\">France</option>\r\n                      <option value=\"France Metropolitan\">France, Metropolitan</option>\r\n                      <option value=\"French Guiana\">French Guiana</option>\r\n                      <option value=\"French Polynesia\">French Polynesia</option>\r\n                      <option value=\"French Southern Territories\">French Southern Territories</option>\r\n                      <option value=\"Gabon\">Gabon</option>\r\n                      <option value=\"Gambia\">Gambia</option>\r\n                      <option value=\"Georgia\">Georgia</option>\r\n                      <option value=\"Germany\">Germany</option>\r\n                      <option value=\"Ghana\">Ghana</option>\r\n                      <option value=\"Gibraltar\">Gibraltar</option>\r\n                      <option value=\"Greece\">Greece</option>\r\n                      <option value=\"Greenland\">Greenland</option>\r\n                      <option value=\"Grenada\">Grenada</option>\r\n                      <option value=\"Guadeloupe\">Guadeloupe</option>\r\n                      <option value=\"Guam\">Guam</option>\r\n                      <option value=\"Guatemala\">Guatemala</option>\r\n                      <option value=\"Guinea\">Guinea</option>\r\n                      <option value=\"Guinea-Bissau\">Guinea-Bissau</option>\r\n                      <option value=\"Guyana\">Guyana</option>\r\n                      <option value=\"Haiti\">Haiti</option>\r\n                      <option value=\"Heard and McDonald Islands\">Heard and Mc Donald Islands</option>\r\n                      <option value=\"Holy See\">Holy See (Vatican City State)</option>\r\n                      <option value=\"Honduras\">Honduras</option>\r\n                      <option value=\"Hong Kong\">Hong Kong</option>\r\n                      <option value=\"Hungary\">Hungary</option>\r\n                      <option value=\"Iceland\">Iceland</option>\r\n                      <option value=\"India\">India</option>\r\n                      <option value=\"Indonesia\">Indonesia</option>\r\n                      <option value=\"Iran\">Iran (Islamic Republic of)</option>\r\n                      <option value=\"Iraq\">Iraq</option>\r\n                      <option value=\"Ireland\">Ireland</option>\r\n                      <option value=\"Israel\">Israel</option>\r\n                      <option value=\"Italy\">Italy</option>\r\n                      <option value=\"Jamaica\">Jamaica</option>\r\n                      <option value=\"Japan\">Japan</option>\r\n                      <option value=\"Jordan\">Jordan</option>\r\n                      <option value=\"Kazakhstan\">Kazakhstan</option>\r\n                      <option value=\"Kenya\">Kenya</option>\r\n                      <option value=\"Kiribati\">Kiribati</option>\r\n                      <option value=\"Democratic People's Republic of Korea\">Korea, Democratic People's Republic of\r\n                      </option>\r\n                      <option value=\"Korea\">Korea, Republic of</option>\r\n                      <option value=\"Kuwait\">Kuwait</option>\r\n                      <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\r\n                      <option value=\"Lao\">Lao People's Democratic Republic</option>\r\n                      <option value=\"Latvia\">Latvia</option>\r\n                      <option value=\"Lebanon\" selected>Lebanon</option>\r\n                      <option value=\"Lesotho\">Lesotho</option>\r\n                      <option value=\"Liberia\">Liberia</option>\r\n                      <option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\r\n                      <option value=\"Liechtenstein\">Liechtenstein</option>\r\n                      <option value=\"Lithuania\">Lithuania</option>\r\n                      <option value=\"Luxembourg\">Luxembourg</option>\r\n                      <option value=\"Macau\">Macau</option>\r\n                      <option value=\"Macedonia\">Macedonia, The Former Yugoslav Republic of</option>\r\n                      <option value=\"Madagascar\">Madagascar</option>\r\n                      <option value=\"Malawi\">Malawi</option>\r\n                      <option value=\"Malaysia\">Malaysia</option>\r\n                      <option value=\"Maldives\">Maldives</option>\r\n                      <option value=\"Mali\">Mali</option>\r\n                      <option value=\"Malta\">Malta</option>\r\n                      <option value=\"Marshall Islands\">Marshall Islands</option>\r\n                      <option value=\"Martinique\">Martinique</option>\r\n                      <option value=\"Mauritania\">Mauritania</option>\r\n                      <option value=\"Mauritius\">Mauritius</option>\r\n                      <option value=\"Mayotte\">Mayotte</option>\r\n                      <option value=\"Mexico\">Mexico</option>\r\n                      <option value=\"Micronesia\">Micronesia, Federated States of</option>\r\n                      <option value=\"Moldova\">Moldova, Republic of</option>\r\n                      <option value=\"Monaco\">Monaco</option>\r\n                      <option value=\"Mongolia\">Mongolia</option>\r\n                      <option value=\"Montserrat\">Montserrat</option>\r\n                      <option value=\"Morocco\">Morocco</option>\r\n                      <option value=\"Mozambique\">Mozambique</option>\r\n                      <option value=\"Myanmar\">Myanmar</option>\r\n                      <option value=\"Namibia\">Namibia</option>\r\n                      <option value=\"Nauru\">Nauru</option>\r\n                      <option value=\"Nepal\">Nepal</option>\r\n                      <option value=\"Netherlands\">Netherlands</option>\r\n                      <option value=\"Netherlands Antilles\">Netherlands Antilles</option>\r\n                      <option value=\"New Caledonia\">New Caledonia</option>\r\n                      <option value=\"New Zealand\">New Zealand</option>\r\n                      <option value=\"Nicaragua\">Nicaragua</option>\r\n                      <option value=\"Niger\">Niger</option>\r\n                      <option value=\"Nigeria\">Nigeria</option>\r\n                      <option value=\"Niue\">Niue</option>\r\n                      <option value=\"Norfolk Island\">Norfolk Island</option>\r\n                      <option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\r\n                      <option value=\"Norway\">Norway</option>\r\n                      <option value=\"Oman\">Oman</option>\r\n                      <option value=\"Pakistan\">Pakistan</option>\r\n                      <option value=\"Palau\">Palau</option>\r\n                      <option value=\"Panama\">Panama</option>\r\n                      <option value=\"Papua New Guinea\">Papua New Guinea</option>\r\n                      <option value=\"Paraguay\">Paraguay</option>\r\n                      <option value=\"Peru\">Peru</option>\r\n                      <option value=\"Philippines\">Philippines</option>\r\n                      <option value=\"Pitcairn\">Pitcairn</option>\r\n                      <option value=\"Poland\">Poland</option>\r\n                      <option value=\"Portugal\">Portugal</option>\r\n                      <option value=\"Puerto Rico\">Puerto Rico</option>\r\n                      <option value=\"Qatar\">Qatar</option>\r\n                      <option value=\"Reunion\">Reunion</option>\r\n                      <option value=\"Romania\">Romania</option>\r\n                      <option value=\"Russia\">Russian Federation</option>\r\n                      <option value=\"Rwanda\">Rwanda</option>\r\n                      <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\r\n                      <option value=\"Saint LUCIA\">Saint LUCIA</option>\r\n                      <option value=\"Saint Vincent\">Saint Vincent and the Grenadines</option>\r\n                      <option value=\"Samoa\">Samoa</option>\r\n                      <option value=\"San Marino\">San Marino</option>\r\n                      <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\r\n                      <option value=\"Saudi Arabia\">Saudi Arabia</option>\r\n                      <option value=\"Senegal\">Senegal</option>\r\n                      <option value=\"Seychelles\">Seychelles</option>\r\n                      <option value=\"Sierra\">Sierra Leone</option>\r\n                      <option value=\"Singapore\">Singapore</option>\r\n                      <option value=\"Slovakia\">Slovakia (Slovak Republic)</option>\r\n                      <option value=\"Slovenia\">Slovenia</option>\r\n                      <option value=\"Solomon Islands\">Solomon Islands</option>\r\n                      <option value=\"Somalia\">Somalia</option>\r\n                      <option value=\"South Africa\">South Africa</option>\r\n                      <option value=\"South Georgia\">South Georgia and the South Sandwich Islands</option>\r\n                      <option value=\"Span\">Spain</option>\r\n                      <option value=\"SriLanka\">Sri Lanka</option>\r\n                      <option value=\"St. Helena\">St. Helena</option>\r\n                      <option value=\"St. Pierre and Miguelon\">St. Pierre and Miquelon</option>\r\n                      <option value=\"Sudan\">Sudan</option>\r\n                      <option value=\"Suriname\">Suriname</option>\r\n                      <option value=\"Svalbard\">Svalbard and Jan Mayen Islands</option>\r\n                      <option value=\"Swaziland\">Swaziland</option>\r\n                      <option value=\"Sweden\">Sweden</option>\r\n                      <option value=\"Switzerland\">Switzerland</option>\r\n                      <option value=\"Syria\">Syrian Arab Republic</option>\r\n                      <option value=\"Taiwan\">Taiwan, Province of China</option>\r\n                      <option value=\"Tajikistan\">Tajikistan</option>\r\n                      <option value=\"Tanzania\">Tanzania, United Republic of</option>\r\n                      <option value=\"Thailand\">Thailand</option>\r\n                      <option value=\"Togo\">Togo</option>\r\n                      <option value=\"Tokelau\">Tokelau</option>\r\n                      <option value=\"Tonga\">Tonga</option>\r\n                      <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\r\n                      <option value=\"Tunisia\">Tunisia</option>\r\n                      <option value=\"Turkey\">Turkey</option>\r\n                      <option value=\"Turkmenistan\">Turkmenistan</option>\r\n                      <option value=\"Turks and Caicos\">Turks and Caicos Islands</option>\r\n                      <option value=\"Tuvalu\">Tuvalu</option>\r\n                      <option value=\"Uganda\">Uganda</option>\r\n                      <option value=\"Ukraine\">Ukraine</option>\r\n                      <option value=\"United Arab Emirates\">United Arab Emirates</option>\r\n                      <option value=\"United Kingdom\">United Kingdom</option>\r\n                      <option value=\"United States\">United States</option>\r\n                      <option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\r\n                      <option value=\"Uruguay\">Uruguay</option>\r\n                      <option value=\"Uzbekistan\">Uzbekistan</option>\r\n                      <option value=\"Vanuatu\">Vanuatu</option>\r\n                      <option value=\"Venezuela\">Venezuela</option>\r\n                      <option value=\"Vietnam\">Viet Nam</option>\r\n                      <option value=\"Virgin Islands (British)\">Virgin Islands (British)</option>\r\n                      <option value=\"Virgin Islands (U.S)\">Virgin Islands (U.S.)</option>\r\n                      <option value=\"Wallis and Futana Islands\">Wallis and Futuna Islands</option>\r\n                      <option value=\"Western Sahara\">Western Sahara</option>\r\n                      <option value=\"Yemen\">Yemen</option>\r\n                      <option value=\"Yugoslavia\">Yugoslavia</option>\r\n                      <option value=\"Zambia\">Zambia</option>\r\n                      <option value=\"Zimbabwe\">Zimbabwe</option>\r\n                    </select>\r\n                  </div>\r\n                  <hr>\r\n                  <div class=\"inner-sec\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-9\">\r\n                        <p class=\"label-title\">Minimum Stock</p>\r\n                        <span class=\"inner-text\">We do not add products with low inventory </span>\r\n                      </div>\r\n                      <div class=\"col-md-3\">\r\n                        <input id=\"number\" min=\"1\" type=\"number\" value=\"20\" class=\"form-control\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\r\n                    Use the Amazon filter to search for targeted focus note.\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"inner-sec\">\r\n                    <label class=\"label-title\">Unlist Options</label>\r\n\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox2\">\r\n                      <label class=\"custom-control-label label-title\" for=\"checkbox2\">Trademarked products</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox3\">\r\n                      <label class=\"custom-control-label label-title\" for=\"checkbox3\">Products in the cloud\r\n                        inventory</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox4\">\r\n                      <label class=\"custom-control-label label-title\" for=\"checkbox4\">Critical Branded product</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox5\">\r\n                      <label class=\"custom-control-label label-title\" for=\"checkbox5\">Discounted products</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox6\">\r\n                      <label class=\"custom-control-label label-title\" for=\"checkbox6\">Shipment and tax fee uncertain\r\n                        product</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox7\">\r\n                      <label class=\"custom-control-label label-title\" for=\"checkbox7\">Products requiring\r\n                        selection</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox8\">\r\n                      <label class=\"custom-control-label label-title\" for=\"checkbox8\">Amazon Prime products</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox9\">\r\n                      <label class=\"custom-control-label label-title\" for=\"checkbox9\">SBA tag product</label>\r\n                    </div>\r\n\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox2\">\r\n                      <label class=\"custom-control-label label-title\" for=\"checkbox2\">Ad-on product</label>\r\n                    </div>\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox2\">\r\n                      <label class=\"custom-control-label label-title\" for=\"checkbox2\">Not shipped product</label>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card card-box3\">\r\n            <h6 class=\"card-header\">Pricing and inventory Code</h6>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"inner-sec\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-8\">\r\n                        <p class=\"label-title\">Profit Margin</p>\r\n                        <span class=\"inner-text\">Your per capita profit margin</span>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group mb-3\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\" id=\"basic-addon1\">%</span>\r\n                          </div>\r\n                          <input id=\"number\" min=\"1\" type=\"number\" value=\"25\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"inner-sec\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-8\">\r\n                        <p class=\"label-title\">Amazon Commision</p>\r\n                        <span class=\"inner-text\">Commision per sale </span></div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group mb-3\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\" id=\"basic-addon1\">%</span>\r\n                          </div>\r\n                          <input id=\"number\" min=\"1\" type=\"number\" value=\"20\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"inner-sec\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-8\">\r\n                        <p class=\"label-title\">Exchange rate difference</p>\r\n                        <span class=\"inner-text\">1 USD =  1.35 CAD</span></div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group mb-3\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\" id=\"basic-addon1\">$</span>\r\n                          </div>\r\n                          <input id=\"number\" min=\"1\" type=\"number\" value=\"1.35\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <hr>\r\n                  <div class=\"inner-sec\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-8\">\r\n                        <p class=\"label-title\">Stock code</p>\r\n                        <span class=\"inner-text\">STK1000, STK1001</span></div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"input-group mb-3\">\r\n                          <input type=\"text\" value=\"XTQE\" class=\"form-control\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card card-box4\">\r\n            <!--Accordion wrapper-->\r\n            <div class=\"accordion md-accordion\" id=\"accordionEx\" role=\"tablist\" aria-multiselectable=\"true\">\r\n              <!-- Accordion card -->\r\n              <!-- Card header -->\r\n              <div class=\"card-header\" role=\"tab\" id=\"headingOne1\">\r\n                <div class=\"checkbox\">\r\n                  <label data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\"\r\n                         aria-controls=\"collapseOne\">\r\n                    <!-- <h6><input type=\"checkbox\" class=\"custom-control-label\"/> Automate Pricing Included</h6> -->\r\n\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox12\">\r\n                      <h6 class=\"custom-control-label\" for=\"checkbox12\">Automate Pricing Included</h6>\r\n                    </div>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <!-- Card body -->\r\n              <div id=\"collapseOne\" aria-expanded=\"false\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne1\"\r\n                   data-parent=\"#accordionEx\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"inner-sec\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-8\">\r\n                            <p class=\"label-title\">Minimum Price</p>\r\n                            <span class=\"inner-text\">Decrease by maximum</span></div>\r\n                          <div class=\"col-md-4\">\r\n                            <div class=\"input-group mb-3\">\r\n                              <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon1\">%</span>\r\n                              </div>\r\n                              <input id=\"number\" min=\"1\" type=\"number\" value=\"1.5\" class=\"form-control\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"inner-sec\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-8\">\r\n                            <p class=\"label-title\">Maximum Price</p>\r\n                            <span class=\"inner-text\">Rise by maximum</span></div>\r\n                          <div class=\"col-md-4\">\r\n                            <div class=\"input-group mb-3\">\r\n                              <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon1\">%</span>\r\n                              </div>\r\n                              <input id=\"number\" min=\"1\" type=\"number\" value=\"1.5\" class=\"form-control\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- Accordion card -->\r\n          </div>\r\n\r\n          <div class=\"card card-box5\">\r\n            <!--Accordion wrapper-->\r\n            <div class=\"accordion md-accordion\" id=\"accordionEx1\" role=\"tablist\" aria-multiselectable=\"true\">\r\n              <!-- Accordion card -->\r\n              <!-- Card header -->\r\n              <div class=\"card-header\" role=\"tab\" id=\"headingTwo2\">\r\n                <div class=\"checkbox\">\r\n                  <label data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\"\r\n                         aria-controls=\"collapseTwo\">\r\n                    <!-- <h6><input type=\"checkbox\" class=\"custom-control-label\"/> Automate Pricing Included</h6> -->\r\n\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkbox13\">\r\n                      <h6 class=\"custom-control-label\" for=\"checkbox13\">Compare to Sales Country</h6>\r\n                    </div>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <!-- Card body -->\r\n              <div id=\"collapseTwo\" aria-expanded=\"false\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo2\"\r\n                   data-parent=\"#accordionEx1\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"inner-sec\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-8\">\r\n                            <p class=\"label-title\">Price Difference</p>\r\n                            <span class=\"inner-text\">Maximum price difference ratio</span></div>\r\n                          <div class=\"col-md-4\">\r\n                            <div class=\"input-group mb-3\">\r\n                              <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon1\">%</span>\r\n                              </div>\r\n                              <input id=\"number\" min=\"1\" type=\"number\" value=\"10\" class=\"form-control\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"inner-sec\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-8\">\r\n                            <p class=\"label-title\">Number of Vendors</p><span class=\"inner-text\">Min-Max number of sellers</span>\r\n                          </div>\r\n                          <div class=\"col-md-4\">\r\n                            <input id=\"number\" min=\"0\" type=\"number\" value=\"0\" class=\"form-control\"\r\n                                   style=\"width:50%;float: left;\">\r\n                            <input class=\"form-control\" id=\"number\" max=\"5\" type=\"number\" value=\"5\" style=\"width:50%;\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"inner-sec\">\r\n                        <label class=\"label-title\">Unlist Options</label>\r\n\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"check1\">\r\n                          <label class=\"custom-control-label label-title\" for=\"check1\">If Prime seller</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"check2\">\r\n                          <label class=\"custom-control-label label-title\" for=\"check2\">SBA seller if available</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"check3\">\r\n                          <label class=\"custom-control-label label-title\" for=\"check3\">FBA seller if available</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-checkbox\">\r\n                          <input type=\"checkbox\" class=\"custom-control-input\" id=\"check4\">\r\n                          <label class=\"custom-control-label label-title\" for=\"check4\">Same vendor is available</label>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <!-- Accordion card -->\r\n          </div>\r\n\r\n          <div class=\"card card-box6\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"inner-sec\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-7\">\r\n                        <p class=\"label-title\">File name</p>\r\n                        <span class=\"inner-text\">Download in .csv and .txt</span>\r\n                      </div>\r\n                      <div class=\"col-md-5\">\r\n                        <div class=\"input-group mb-3\">\r\n                          <input name=\"products\" type=\"text\" value=\"products\" class=\"form-control\">\r\n                          <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\" id=\"basic-addon1\">.csv</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"inner-sec\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"check5\">\r\n                      <label class=\"custom-control-label label-title\" for=\"check5\">.csv format also download</label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"inner-sec\">\r\n                    <button type=\"button\" id=\"btn\" class=\"btn btn-success\" (click)=\"doSearchDownload()\">Search and\r\n                      Download\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <!--</form>-->\r\n\r\n      </div>\r\n      <div class=\"tab-pane fade\" id=\"p-update\" role=\"tabpanel\" aria-labelledby=\"p-update\">...</div>\r\n      <div class=\"tab-pane fade\" id=\"p-home\" role=\"tabpanel\" aria-labelledby=\"p-home\">...</div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- CONTAINER END -->\r\n<!-- FOOTER START -->\r\n<footer>\r\n  <div class=\"footer\">\r\n  </div>\r\n</footer>\r\n<!-- FOOTER END -->\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_common_service__ = __webpack_require__("../../../../../src/app/core/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_csv_dist_Angular5_csv__ = __webpack_require__("../../../../angular5-csv/dist/Angular5-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular5_csv_dist_Angular5_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular5_csv_dist_Angular5_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_layout_service__ = __webpack_require__("../../../../../src/app/core/layout.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(_commonService, _layoutService) {
        this._commonService = _commonService;
        this._layoutService = _layoutService;
        this.title = 'app';
        this.asinList = [];
        this.productList = [];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.getAsinDetail = function ($asin) {
        var url = 'https://www.amazon.com/dp/';
        url = url + $asin;
        var _result;
        __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            url: url,
            async: false,
            success: function (data) {
                var parser = new DOMParser();
                var parsedHtml = parser.parseFromString(data, 'text/html');
                // product
                var product_title = parsedHtml.getElementById('productTitle').innerText.trim();
                var product_price = parsedHtml.getElementById('priceblock_ourprice').innerText.trim();
                var product_brand = parsedHtml.getElementById('bylineInfo').innerText.trim();
                var product_quantity_arr = parsedHtml.getElementById('quantity').innerHTML.match(/<option[^>]*>([^<]*)<\/option>/g);
                var product_quantity = product_quantity_arr[product_quantity_arr.length - 1].replace(/(<([^>]+)>)/ig, "").trim();
                _result = {
                    'Product Title': product_title,
                    'Price': product_price,
                    'Brand': product_brand,
                    'Quantity': product_quantity
                };
                console.log(product_title);
                console.log(product_price);
                console.log(product_brand);
                console.log(product_quantity);
            }
        });
        return _result;
    };
    AppComponent.prototype.getAsinList = function (url) {
        var _result = [];
        __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            url: url,
            async: false,
            success: function (data) {
                var result = data.match(/data-asin="[A-Za-z0-9]*"/g);
                result = result.map(function (item) {
                    item = item.replace("data-asin=", "");
                    item = item.replace(/["']/g, "");
                    item = item.trim();
                    return item;
                });
                _result = result.filter(function (item) { return item != ""; });
            }
        });
        return _result;
    };
    // this._commonService.getProductList().subscribe((response: any) => {
    //   console.log(response);
    //   let parser = new DOMParser();
    //   let parsedHtml = parser.parseFromString(response, 'text/html');
    //   // let imagelist = parsedHtml.getElementsByClassName('s-result-list sg-row').innerHTML;
    //   // console.log("imagelist"+imagelist);
    //   console.log('parser' + parser);
    //   alert('adsad');
    // });
    AppComponent.prototype.doSearchDownload = function () {
        this._layoutService.showLoading();
        var _this = this;
        chrome.tabs.query({
            currentWindow: true,
            active: true
        }, function (tabs) {
            // console.log(tabs);
            if (tabs.length > 0) {
                if (tabs[0].url !== undefined && tabs[0].url !== null && tabs[0].url !== '') {
                    // that.tabId = tabs[0].id;
                    var tabURL = tabs[0].url;
                    console.log(tabURL);
                }
            }
            // let mainURL = "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Darts-crafts&field-keywords=";
            var mainURL = tabURL;
            _this.asinList = [];
            for (var i = _this.from_page; i <= _this.to_page; i++) {
                var perms = '&page=' + i;
                var url = mainURL + perms;
                var result = _this.getAsinList(url);
                _this.asinList = _this.asinList.concat(result);
            }
            console.log(_this.asinList);
            _this.processForAsin();
            _this._layoutService.hideLoading();
        });
    };
    AppComponent.prototype.processForAsin = function () {
        for (var i = 0; i < this.asinList.length; i++) {
            var result = this.getAsinDetail(this.asinList[i]);
            this.productList = this.productList.concat(result);
        }
        console.log('productList', this.productList);
        this.downloadCsv();
    };
    AppComponent.prototype.downloadCsv = function () {
        new __WEBPACK_IMPORTED_MODULE_3_angular5_csv_dist_Angular5_csv__["Angular5Csv"](this.productList, 'My Report');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_common_service__["a" /* CommonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_layout_service__["a" /* LayoutService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = (function () {
    function CommonService(_http) {
        this._http = _http;
    }
    CommonService.prototype.getProductList = function () {
        //http://localhost/s?k=cable&i=electronics-intl-ship&ref=nb_sb_noss
        return this._http.get('http://localhost/brian/angular-extension-master/search.html');
    };
    return CommonService;
}());
CommonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CommonService);

var _a;
//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service__ = __webpack_require__("../../../../../src/app/core/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_service__ = __webpack_require__("../../../../../src/app/core/layout.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [],
        exports: [],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutService = (function () {
    function LayoutService() {
        this.loading = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.notification = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.notificationMsg);
        this.service_provide_type_selection = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.company_logo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.logoutSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    LayoutService.prototype.hideLoading = function () {
        this.loading.next(false);
    };
    LayoutService.prototype.showLoading = function () {
        this.loading.next(true);
    };
    LayoutService.prototype.updateNotification = function (notification) {
        this.notification.next(notification);
    };
    LayoutService.prototype.updateServiceType = function (servicetype) {
        this.service_provide_type_selection.next(servicetype);
    };
    return LayoutService;
}());
LayoutService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LayoutService);

//# sourceMappingURL=layout.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map