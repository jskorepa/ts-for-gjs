"use strict";
exports.__esModule = true;
var Gtk = require("./Gtk");
var WebKit = require("./WebKit");
Gtk.init(null);
var w = WebKit.WebView["new"]();
w.vfunc_map();
w.connect("notify::composite-child", function (obj, pspec) {
});
var s = w;
