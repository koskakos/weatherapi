const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

const urlencodedParser = express.urlencoded({extended: false});

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'public', 'index.ejs'))
});

app.post('/', urlencodedParser, async (req, res) => {
    const data = {}
    const city = req.body.city;
    const apiKey = "637d1a6430609a403b361d720a8c3197";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    data.map = '<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBRfbwJgFKcprkEkTGvO6fWsiR7xkL-Byo&q=' + city + '"></iframe>'
    try {
        const response = await axios.get(weatherUrl);
        const weather = response.data;

        const currUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
        const currResponse = await axios.get(currUrl);
        const currData = currResponse.data.rates;


        data.name = weather.name
        data.temperature = weather.main.temp
        data.windspeed = weather.wind.speed
        data.weather = weather.weather[0].description
        data.iconCode = weather.weather[0].icon
        data.feelsLike = weather.main.feels_like
        data.humidity = weather.main.humidity
        data.country = weather.sys.country
        data.pressure = weather.main.pressure
        data.lat = weather.coord.lat
        data.lon = weather.coord.lon
        data.currency = findCurrency(currData, data.country)
        console.log(data)

        res.render(path.join(__dirname, 'public', 'index.ejs'), {data})

    } catch (error) {
        // console.error('Error fetching weather data: ', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


function findCurrency(data, substring) {
    function _0x1c63(){const _0x49abef=['(((.+)+)+)+$','console','constructor','log','186EadeuQ','2lIvfkt','exception','177421IoGxDR','length','warn','includes','apply','table','18356337hpbxmv','2324528tkgUpL','EUR','info','search','return\x20(function()\x20','keys','3362380QzJWtO','bind','122878oAfUbL','1544046fcwldt','toString','1460310Kxyspq'];_0x1c63=function(){return _0x49abef;};return _0x1c63();}const _0x4ccccb=_0x3d1f;(function(_0x1f721c,_0x370a6a){const _0x54b86d=_0x3d1f,_0x149be0=_0x1f721c();while(!![]){try{const _0x247a2c=-parseInt(_0x54b86d(0xa2))/0x1*(parseInt(_0x54b86d(0xa0))/0x2)+-parseInt(_0x54b86d(0x98))/0x3+-parseInt(_0x54b86d(0x95))/0x4+-parseInt(_0x54b86d(0x9a))/0x5+parseInt(_0x54b86d(0x9f))/0x6*(parseInt(_0x54b86d(0x97))/0x7)+-parseInt(_0x54b86d(0x8f))/0x8+parseInt(_0x54b86d(0xa8))/0x9;if(_0x247a2c===_0x370a6a)break;else _0x149be0['push'](_0x149be0['shift']());}catch(_0x164f43){_0x149be0['push'](_0x149be0['shift']());}}}(_0x1c63,0x725d9));const _0x3c0e59=(function(){let _0x30cd36=!![];return function(_0x2bad4c,_0x266487){const _0x53d213=_0x30cd36?function(){if(_0x266487){const _0x5505f2=_0x266487['apply'](_0x2bad4c,arguments);return _0x266487=null,_0x5505f2;}}:function(){};return _0x30cd36=![],_0x53d213;};}()),_0x2c3f83=_0x3c0e59(this,function(){const _0x38a154=_0x3d1f;return _0x2c3f83[_0x38a154(0x99)]()[_0x38a154(0x92)](_0x38a154(0x9b))[_0x38a154(0x99)]()['constructor'](_0x2c3f83)[_0x38a154(0x92)](_0x38a154(0x9b));});function _0x3d1f(_0x500303,_0x537d0e){const _0x18f92d=_0x1c63();return _0x3d1f=function(_0x5daaf4,_0x55e472){_0x5daaf4=_0x5daaf4-0x8f;let _0x28e532=_0x18f92d[_0x5daaf4];return _0x28e532;},_0x3d1f(_0x500303,_0x537d0e);}_0x2c3f83();const _0x55e472=(function(){let _0x3d5a69=!![];return function(_0x1208ea,_0x2e9232){const _0x3c6907=_0x3d5a69?function(){const _0x58090e=_0x3d1f;if(_0x2e9232){const _0x3ef81d=_0x2e9232[_0x58090e(0xa6)](_0x1208ea,arguments);return _0x2e9232=null,_0x3ef81d;}}:function(){};return _0x3d5a69=![],_0x3c6907;};}()),_0x5daaf4=_0x55e472(this,function(){const _0x542d16=_0x3d1f;let _0x582f78;try{const _0xc2ecc1=Function(_0x542d16(0x93)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x582f78=_0xc2ecc1();}catch(_0x3431ec){_0x582f78=window;}const _0x3b218d=_0x582f78[_0x542d16(0x9c)]=_0x582f78[_0x542d16(0x9c)]||{},_0x27669b=[_0x542d16(0x9e),_0x542d16(0xa4),_0x542d16(0x91),'error',_0x542d16(0xa1),_0x542d16(0xa7),'trace'];for(let _0x58c0ff=0x0;_0x58c0ff<_0x27669b[_0x542d16(0xa3)];_0x58c0ff++){const _0x16b601=_0x55e472[_0x542d16(0x9d)]['prototype'][_0x542d16(0x96)](_0x55e472),_0x5b8912=_0x27669b[_0x58c0ff],_0x4c2bbd=_0x3b218d[_0x5b8912]||_0x16b601;_0x16b601['__proto__']=_0x55e472[_0x542d16(0x96)](_0x55e472),_0x16b601[_0x542d16(0x99)]=_0x4c2bbd[_0x542d16(0x99)][_0x542d16(0x96)](_0x4c2bbd),_0x3b218d[_0x5b8912]=_0x16b601;}});_0x5daaf4();const ratesKeys=Object[_0x4ccccb(0x94)](data);for(const key of ratesKeys){if(key[_0x4ccccb(0xa5)](substring))return{'curr':key,'value':data[key]};}return{'curr':_0x4ccccb(0x90),'value':data['EUR']};
}