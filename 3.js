const cursor = document.querySelector('.cur');

document.addEventListener('mousemove',(e)=>{
  cursor.style.left=e.pageX + 'px';  
  cursor.style.top=e.pageY + 'px';  
console.log(e.pageX,e.pageY)
  cursor.setAttribute('data-top',(cursor.offsetTop-scrollY)) 
})
 window.addEventListener('scroll',()=>{
  const fromTop=parseInt(cursor.getAttribute('data-top'));
  cursor.style.top=scrollY +fromTop +'px';  
console.log(fromTop)
})

/* window.addEventListener('click',()=>

if(cursor.classList.contains('click')){
cursor.classList.remove('click');
void cursor.offsetWidth;
cursor.classList.add('click') 
}
else
{
  cursor.classList.add('click');
}
})

function MyFunction(){
 alert("Thank you. Coming soon!!")} 
 */