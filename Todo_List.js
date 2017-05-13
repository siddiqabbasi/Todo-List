

        var lastid = 0,
         item = document.getElementById("todos");


function AddItem(){
    var ul = document.createElement("ul"),
        list = document.createElement("li"),

        chek = document.createElement("input"),
        p = document.createElement("p"),
        d = document.createElement("div"),
        b1 = document.createElement("img"),
        b2 = document.createElement("img");

       var val,
     item1 = item.value;
    list.className = "list";
    chek.className = "checked";
    d.className = "b-div";
    b1.className = "edt";
    b2.className = "del";
    p.innerText = item1;
    list.setAttribute('id','unit'+lastid);
    chek.setAttribute('type','checkbox');
    b2.setAttribute('src','photos/download.png');
    b1.setAttribute('src','photos/edit.png');
    chek.setAttribute('onClick','toggleCheck()');
    b1.setAttribute('onClick','edit("'+'unit'+lastid+'")');
    b2.setAttribute('onClick','Delete("'+'unit'+lastid+'")');
    ul.appendChild(list);
    list.appendChild(chek);
    list.appendChild(p);
    list.appendChild(d);
    d.appendChild(b1);
    d.appendChild(b2);
    lastid++;

    if (item1 !== "") {
        val = document.getElementById("myList").appendChild(list);
    } else {
        alert("Insert some thing");
    }
     document.getElementById("todos").value = "" ;
}
function toggleCheck(){
    var chek = event.target.parentElement.children[1];
    if(event.target.checked){
        chek.setAttribute('class','para');
    }
    else{
        chek.setAttribute('class','');
    }
}

function edit(){
    var li = event.target.parentElement.parentElement;
    var liId = li.id;
    var pikTxt = li.childNodes[1];
    item.value = pikTxt.innerText;
    var item1 = item.value;
    var b3 = document.getElementById("main");
    b3.innerText = "Update";
    b3.setAttribute('onClick','upDate()');
    b3.setAttribute('taskId',liId);
    disable();
}
function disable(){
    var button = document.getElementsByClassName("b-div")[0];
    var buttons = button.getElementsByTagName("img");
    for (var i = 0; i<buttons.length; i++){
        buttons[i].setAttribute('onClick','');
    }
}

function enable(){
    var button = document.getElementsByClassName("b-div")[0];
     var edt = button.children[0];
     var del = button.children[1];
    edt.setAttribute('onClick','edit("'+'unit'+lastid+'")');
    del.setAttribute('onClick','Delete("'+'unit'+lastid+'")');
}

        function upDate(){
    var taskId = event.target.getAttribute('taskId');
    var input = document.getElementById('todos').value;
    var li = document.getElementById(taskId);
     li.children[1].innerText = input;
     var b3 = document.getElementById("main");
    b3.innerText = "Add";
    b3.setAttribute('onClick','AddItem()');
    document.getElementById("todos").value = "" ;
    enable();
}

function Delete() {

    var del = event.target.parentElement.parentElement;
    del.remove();
}

