/**
 * Created by Siddiq Abbasi on 5/8/2017.
 */
function AddItem(){
    var list = document.createElement("li");
    var item = document.getElementById("todos").value;
    var t_node = document.createTextNode(item);
    list.appendChild(t_node);
    //console.log(item)
    if (item !== '') {
        var val = document.getElementById("myList").appendChild(list);
    } else {
        alert("plz write some thing");
    }
     document.getElementById("todos").value = "" ;
}

function update(){
    
}
