/** cookies */
document.cookie = 'a=100; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/'
document.cookie = 'b=200; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/'
document.cookie = 'c=300; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/'
/** show cookies */
document.getElementById('output').textContent = document.cookie;