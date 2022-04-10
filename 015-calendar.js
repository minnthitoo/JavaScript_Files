var year = document.getElementById("yearInput");
var month = document.getElementById("monthInput");
var day = document.getElementById("setDay");

var now = new Date();

var start = new Date(Date.UTC(now.getFullYear(), now.getMonth()));

year.value = now.getFullYear();

for(var i = 0; i < 12; i++){
    var s = new Date(Date.UTC(now.getDate(), i)).toLocaleString("en", {month:"long"});
    month.innerHTML += "<option>" + s;
}

var end = new Date(Date.UTC(now.getFullYear(), now.getMonth() + 1));

var datas = [];

while(start < end){
    datas.push({
        date: start.getDate(),
        day : start.getDay()
    });
    start.setDate(start.getDate() + 1);
}

console.log(datas);

var r = "<tr>";
for(var j = 0; j < datas[0].day; j++){
    r += "<td>" + datas[0].date + "</td>";
}

for(var k = 0 ; k < 7 - i; k++){
    r += "<td>" + datas[k].date + "</td>";
}

r += "</tr>";

day.innerHTML = r;