var items=[];

var list=document.querySelector('#myList');

items.forEach(function(item){

    CreateItem(item);
  
});

//üstünü çizip kaldırma
list.addEventListener('click',function(item){
    if(item.target.tagName=='LI'){
        item.target.classList.toggle('checked');
        ToggleDeleteButton();
    }
});

//Seçilenleri Silme
document.querySelector('#deleteAll').onclick=function(){
    var elements = document.querySelectorAll('.checked');
    elements.forEach(function(item){
        item.style.display='none';
    });
}
function ToggleDeleteButton(){
    var checkList=document.querySelectorAll('.chechked');
    if(checkList.length>0){
        document.querySelector('#deleteAll').classList.add('d-none');
    }
};
//Boş değer girememe
document.querySelector('#btnCreate').onclick=function(){
    var item = document.querySelector('#txtItem').value;
    if(item===''){
        alert('lütfen bir değer giriniz');
        return;
    }
    CreateItem(item);
};
function CreateItem(item){
      //liste oluşturma
      var li=document.createElement('li');
      var t=document.createTextNode(item);
      li.className='list-group-item';
      li.appendChild(t);
      list.appendChild(li);
      //close oluşturma
      var span=document.createElement('span');
      var text=document.createTextNode('\u00D7');
      span.className='close';
      span.appendChild(text);
      li.appendChild(span);
  
      span.onclick=function(){
          var li=this.parentElement;
          li.style.display='none';
          li.classList.remove('checked');
      }
}

//Menü
    //Menü açma
function openNav() {
    document.getElementById("YanMenu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
    //Menü kapama
  function closeNav() {
    document.getElementById("YanMenu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }