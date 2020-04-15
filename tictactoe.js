var squ=document.querySelectorAll("th");


for(var i=0;i<squ.length;i++){
squ[i].addEventListener('click',changeMarker1)
squ[i].addEventListener('dblclick',changeMarker2)
}
function changeMarker1() {
  if(this.textContent==''){
    this.textContent='X';
  }else if (this.textContent=='X') {
    this.textContent='';
  }
}
function changeMarker2() {
  if(this.textContent==''){
    this.textContent='O';
  }else if (this.textContent=='O') {
    this.textContent='';
  }
}
