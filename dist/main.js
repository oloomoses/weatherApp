(()=>{"use strict";(async a=>{const e=await fetch("http://api.openweathermap.org/data/2.5/weather?q=Nairobi&APPID=fadee84cd4d6b571f22e03c5a35d02bc");return await e.json()})().then((a=>{console.log(a)}))})();