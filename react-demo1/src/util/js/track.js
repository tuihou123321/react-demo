'use strict';

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }

    return obj;
}

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }

    return keys;
}

function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }

    return target;
}

var Util = {
    // 参数编码返回字符串
    parseParam: function parseParam(data) {
        var params = "";

        for (var e in data) {
            if (e && data[e]) {
                params += encodeURIComponent(e) + "=" + encodeURIComponent(data[e]) + "&";
            }
        }

        if (params) {
            return params.substring(0, params.length - 1);
        }

        return params;
    },
    getCookie: function getCookie(key) {
        try {
            var reg = new RegExp("(^| )".concat(key, "=([^;]*)(;|$)"));
            var arr = document.cookie.match(reg);
            if (arr) return decodeURIComponent(arr[2]);
        } catch (e) {
            console.log(e);
        }

        return null;
    },
    // 获取url
    getQueryString: function getQueryString(name) {
        var reg = new RegExp("(^|&?)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
};

function getUid() {
    return Util.getQueryString('uid') || Util.getCookie('uid') || localStorage.getItem('uid') || '';
}

function getUserAppId() {
    //app来源，根据url上参数来
    return '';
}

function getParams() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var event_id = params.event_id,
        _params$event_type = params.event_type,
        event_type = _params$event_type === void 0 ? 'click' : _params$event_type;
    return _objectSpread2({
        sdk_type: "JS",
        // SDK类型
        sdk_version: "0.1.0",
        // SDK版本
        resolution: window.screen.availWidth + "*" + window.screen.availHeight,
        // 分辨率
        dpi: window.screen.deviceXDP,
        // 像素密度
        ram: navigator.deviceMemory,
        // 设备总内存
        os: navigator.userAgent,
        // 操作系统：Android、IOS、WebView
        app_key: getUserAppId(),
        // 客户端标识：整型
        app_version: navigator.appVersion,
        // 客户端版本：3.6.1
        app_language: navigator.language,
        // 客户端语言：zh-Hans
        page: window.location.href,
        //当前的url地址
        event_id: event_id,
        //事件id
        event_type: event_type,
        //事件类型: pv ,click
        user_id: getUid()
    }, params);
}

var opts = {
    host: 'cn-hangzhou.log.aliyuncs.com',
    project: 'xz-test',
    logstore: 'test',
    time: 10,
    count: 10
};

var url = "https://".concat(opts.project, ".").concat(opts.host, "/logstores/").concat(opts.logstore, "/track.gif?APIVersion=0.6.0&"); //发送一张图片

function sendTrackData(params) {
    var img = new Image(1, 1);

    img.onerror = function () {// 这里可以进行重试操作
    };

    img.src = url + Util.parseParam(getParams(params));
}

module.exports = sendTrackData;
