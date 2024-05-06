// 
  
  function CircleFollow(){
    window.addEventListener("mousemove", function(details){
        document.querySelector(".pointer").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
    })
}

CircleFollow();