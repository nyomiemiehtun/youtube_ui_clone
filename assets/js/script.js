const menuIcon=document.querySelector(".menu_icon");
const sideBar=document.querySelector(".yt-sidebar");
const mainContent=document.querySelector(".yt-pageContainer");
menuIcon.addEventListener("click",function(){
    sideBar.classList.toggle("small-sidebar");
    mainContent.classList.toggle("paddingLeft");
})
