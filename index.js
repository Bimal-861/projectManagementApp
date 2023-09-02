function toggleMenu(){
    var toggle=document.getElementById('menu');
    if(toggle.style.display!='none'){
        toggle.style.display='none';
    }
    else{
        toggle.style.display="";
    }
}
var projectList=[
    {
        name:'Project One'
    },
    {
        name:'project Two'
    }
];
add('projectlList');
function add(listId){
  
    projectList.forEach(function(value,index){
        var template=
        '<div class="project-card">'+
        '<ul>'+
            value.name+
            '<div class="task">'+
            '<li>'+'task one'+ '</li>'+
            '<li>'+'task two'+'</li>'+
            '</div>'+    
        '</ul>'+
        '</div>';
        var a=document.getElementById(listId);
        a.innerHTML+=template;
    })
   
}
var idName=1;
function addBoard(id){
    idName++;
    var listId='projectList_'+idName;
    var template=
    '<div class="board">'+ id.value+'<button onclick="remove("'+listId+'")">ClickTo Remove</button></div>'+
    '<section class="section">'+
    '<div class="project-block" id='+listId+'>'+
    '</section>';
    document.getElementById('moreBoard').innerHTML+=template;
    add(listId);
    document.getElementById('menu').innerHTML+='<li>'+id.value+'</li>';
}
function remove(id){
    document.getElementById(id).innerHTML="";
}
