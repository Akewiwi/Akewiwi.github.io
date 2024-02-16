function displayNone() {
    document.getElementById("audio1").play()
    setTimeout(()=>{
        document.getElementById("pompurinLove").style.opacity = "0.88";    
        document.getElementById("start").style.opacity = "0.88"; 
    }, 100)
  setTimeout(()=>{
        document.getElementById("pompurinLove").style.opacity = "0.75";    
        document.getElementById("start").style.opacity = "0.75";    
    }, 150)
    setTimeout(()=>{
        document.getElementById("pompurinLove").style.opacity = "0.50";
        document.getElementById("start").style.opacity = "0.50";
    }, 300)
    setTimeout(()=>{
        document.getElementById("pompurinLove").style.opacity = "0.25";
        document.getElementById("start").style.opacity = "0.25";
    }, 450)
    setTimeout(()=>{
        document.getElementById("pompurinLove").style.opacity = "0";
        document.getElementById("start").style.opacity = "0";
        document.getElementById("pompurinLove").style.display = "none";
        document.getElementById("pompurinLove").style.display = "none";
    }, 600)
}