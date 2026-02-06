var pic = document.getElementById("pic");
var yes_btn = document.getElementById("yes_button");
var no_btn = document.getElementById("no_button");
var label = document.getElementById("label");
var yesBtnSize = 1.5; 
var click_count = 0;
const labels = ["Please?", "Pleeeease?", "Are you sure?", "Are you really sure?", "Think again!", 
    "Pretty please?", "Dont make me beg...", "Why are you so cold?", "Cmooooon!", "Give me a chance!",
    "Stop it...", "You are breaking my heart!", "Just say yes!", "It's not hard", "Last chance!!!"
]


yes_btn.addEventListener("click", function () {
    var img = pic.querySelector("img");
    img.src = "rosecat.jpg";
    label.textContent = "Yay!";
    yes_btn.style.display = "none";
    no_btn.style.display = "none";
});

no_btn.addEventListener("mouseover", function () {
    no_btn.style.position = "absolute";
    
    var rect = no_btn.getBoundingClientRect();
    var btnCenterX = rect.left + rect.width / 2;
    var btnCenterY = rect.top + rect.height / 2;
    
    document.addEventListener("mousemove", function moveAway(e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        
        var deltaX = btnCenterX - mouseX;
        var deltaY = btnCenterY - mouseY;
        var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 150) {
            var angle = Math.atan2(deltaY, deltaX);
            var moveDistance = 150 - distance;
            
            var newLeft = rect.left + Math.cos(angle) * moveDistance;
            var newTop = rect.top + Math.sin(angle) * moveDistance;
            
            newLeft = Math.max(0, Math.min(window.innerWidth - rect.width, newLeft));
            newTop = Math.max(0, Math.min(window.innerHeight - rect.height, newTop));
            
            no_btn.style.left = newLeft + "px";
            no_btn.style.top = newTop + "px";
            
            rect = no_btn.getBoundingClientRect();
            btnCenterX = rect.left + rect.width / 2;
            btnCenterY = rect.top + rect.height / 2;
        }
    });
});