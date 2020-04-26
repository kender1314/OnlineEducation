function Base64() {
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    };

    //public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 !== 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    };

    //private method for UTF-8 encoding
    var _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };

    //private method for UTF-8 decoding
    var _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = 0, c1 = 0, c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                var c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

window.obscure = function (pwd, exceeded) {
    if (pwd) {
        var s = new Base64().encode(pwd);
        var salt = randomSalt(s.length + parseInt(exceeded));
        return s.length > salt.length ? encrypt(s, salt) : encrypt(salt, s);
    }
    return pwd;
};

window.stringToDecode = function (pwd, exceeded) {
    var temp = decrypt(pwd, exceeded);
    return new Base64().decode(temp);
};

window.loginObscure = function () {
    if ($('obscureEnable').val() === 'true') {
        loginForm.password.value = obscure(loginForm.password.value, $('obscureSalt').val());
    }
};

function randomSalt(length) {
    var saltArr = [];
    for (var i = 0; i < length; i++) {
        saltArr[i] = String.fromCharCode(getRandom());
    }
    return saltArr.join("");
}

function getRandom() {
    var v;
    while (true) {
        v = parseInt(Math.random() * 122);
        if (v >= 32 && v !== 62 && v !== 60) {
            break;
        }
    }
    return v;
}

function encrypt(s, salt) {
    var len1 = s.length;
    var len2 = salt.length;
    var chars = [];
    var step = Math.floor(len1 / len2) + 1;

    for (var i = 1, j = 0; ; i++) {
        if (i % step === 0 && len2 > j) {
            chars[i - 1] = salt.charAt(j);
            j++;
        } else if (len1 > i - j - 1) {
            chars[i - 1] = s.charAt(i - j - 1);
        } else {
            break;
        }
    }
    return chars.join("");
}

function decrypt(pwd, exceeded) {
    var salt = randomSalt(exceeded + (pwd.length - exceeded) / 2);
    if(pwd.length > 2 * salt.length){
        return decrypting(pwd, salt);
    }
    return decrypting0(pwd, salt);
}

function decrypting(str, salt) {
    var sum = str.length;
    var saltLen = salt.length;
    var strLen = sum - saltLen;
    var chars = [];
    var step = Math.floor(strLen / saltLen + 1);
    for (var i = 1, j = 0; i <= sum; i++) {
        if (i % step === 0 && salt.length > j) {
            i++;
            j++;
        }
        if (i <= sum) {
            chars[i - 1 - j] = str.charAt(i - 1);
        }
    }
    debugger;
    return chars.join("");
}

function decrypting0(str, salt) {
    var sum = str.length;
    var saltLen = salt.length;
    var strLen = sum - saltLen;
    if (strLen === 0) {
        return "";
    }
    var chars = [];
    var step = Math.floor(saltLen / strLen + 1);
    for (var i = 1, j = 0; i <= step * strLen; i++) {
        if (i % step === 0 && salt.length > j) {
            chars[j] = str.charAt(i - 1);
            i++;
            j++;
        }
    }
    return chars.join("");
}





