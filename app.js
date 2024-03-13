var list_of_activities=[];
var input=document.getElementById("input");

var todo_list=document.getElementById("todolist");
document.getElementById("button").onclick=click;

function click()
{
    list_of_activities.push(input.value);
    console.log(list_of_activities);
    input.value="";
    showList();
}

function showList()
{
    todo_list.innerHTML="";
    list_of_activities.forEach(function (n, i) {
        todo_list.innerHTML +=
          "<li>" +
          n +
          "<a onclick='editItem(" +
          i +
          ")'>Edit</a>" +
          "<a onclick='deleteItem(" +
          i +
          ")'>&times | </a></li>";
      });
}

function deleteItem(i){
    list_of_activities.splice(i,1);
    showList();
}

function editItem(i)
{
    var newValue=prompt("Please insert your new value");
    list_of_activities.splice(i,1,newValue);
    showList();
}
