/** Cookie Library */
var Cookie = Cookie || (function () {
    // parse cookies
    var cookieList = {};
    var ac = document.Cookie.split(';');
    var c;
    var i;
    for (i = 0; i < ac.length; i++) {
        c = ac[i].split('=');
        if (c.length > 1) {
            cookieList[c[0].trim()] = unescape(c[1]);
        }
    }
    var cookiePath;
    // Set cookie
    var Set = function (name, value, expiry, path) {
        var cookieExpiry = cookiePath = "";
        
        if (expiry) {           
            var date = new Date();
            date.setTime(date.getTime() + expiry * 60000);
            cookieExpiry = "; expires=" + date.toGMTString();
        }
        
        if (path) {
            cookiePath = "; path=" + path;
        }
        
        // store cookie
        document.cookie = name + "=" + escape(value) + cookieExpiry + cookiePath;
        
        // update cookieList
        if (expiry && expiry < 0) {
            // delete cookie
            delete cookieList[name];
        } else {
            // add cookie
            cookieList[name] = value;
        }
    };
    
    // delete cookie
    var Delete = function (name) {
        Set(name, "", -1);
    };
    
    // get cookie
    var Get = function (name) {
        return cookieList[name] || undefined;
    }
    return {
        Set: Set,
        Delete: Delete,
        Get: Get
    }
});

/** cookies */
// document.cookie = 'a=100; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/'
// document.cookie = 'b=200; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/'
// document.cookie = 'c=300; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/'
/** show cookies */
// document.getElementById('output').textContent = document.cookie;

/** Using Cookie Library */
Cookie.Set("a", 101, 10)
Cookie.Set("b", 202, 20)
Cookie.Set("c", 303, 30)
document.getElementById("output").innerHTML = 
'<p>cookie a = ' + Cookie.Get('a') + '</p>' +
'<p>cookie b = ' + Cookie.Get('b') + '</p>' +
'<p>cookie c = ' + Cookie.Get('c') + '</p>' +