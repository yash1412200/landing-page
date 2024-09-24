let menuList=document.getElementById("menuList");
let info1List=document.getElementById("info1")
menuList.style.maxHeight="0px";
info1List.style.display="block";

function toggleMenu(){
    if(menuList.style.maxHeight=="0px")
  {
    menuList.style.maxHeight="300px";
  }
  else{
    menuList.style.maxHeight="0px";
  }

  
  if(info1List.style.display=="block"){
    info1List.style.display="none";
  }
  else{
    info1List.style.display="block";
  }
}