var data = [];

function save(){
    var tit = document.getElementById("title");
    var desc = document.getElementById("desc");

    var obj = {title : tit.value, description : desc.value};

    data.unshift(obj);
    var row1 = tbody.insertRow(0);
    var td_0 = row1.insertCell(0);
    td_0.appendChild(document.createTextNode(tit.value));

    var td_1 = row1.insertCell(1);
    var viewBtn = document.createElement("button");
    viewBtn.className = "btn btn-primary";
    viewBtn.innerHTML = "View";
    td_1.appendChild(viewBtn);

    var td_2 = row1.insertCell(2);
    var delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger";
    delBtn.innerHTML = "Delete";
    td_2.appendChild(delBtn);

    viewBtn.onclick = function(){
        tit.value = data[row1.rowIndex -1].title;
        desc.value = data[row1.rowIndex -1].description;
    }

    delBtn.onclick = function(){
        tbody.deleteRow(row1.rowIndex -1);
    }

}