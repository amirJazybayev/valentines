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

no_btn.addEventListener("click", function () {

    if (click_count < 6) {
        yesBtnSize += 0.3;
        yes_btn.style.fontSize = yesBtnSize + "rem";
        yes_btn.style.padding = (yesBtnSize * 6.67) + "px " + (yesBtnSize * 13.33) + "px";
        label.textContent = labels[click_count];
        click_count++;
    } 
    else if (click_count < labels.length - 1) {
        no_btn.style.position = "absolute";
        no_btn.style.left = Math.random() * 80 + "%";
        no_btn.style.top = Math.random() * 80 + "%";
        label.textContent = labels[click_count];
        click_count++;
    }
    else if (click_count === labels.length - 1) {
        label.textContent = labels[click_count];
        no_btn.style.position = "absolute";
        no_btn.style.left = Math.random() * 80 + "%";
        no_btn.style.top = Math.random() * 80 + "%";
        click_count++;
    }
    else {
        alert("Ok, let's start over...");
        location.reload();
    }
   
});