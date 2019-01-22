console.log(window.innerWidth);
console.log(window.innerHeight);

const imageNames = ["edit-6603.jpg", "edit-6891.jpg", "edit-6913.jpg", "edit-7569.jpg", "edit-7687.jpg",
    "edit-7808.jpg", "edit-8010.jpg", "SAM_5306.jpg", "SAM_7000.jpg"
]
const tumbs = document.getElementById('tumbs');
const display = document.getElementById('display');
let imageNamesLength = imageNames.length;
let current = 0;
selectImage(Math.floor(Math.random() * imageNamesLength));

for (let i = 0, max = imageNamesLength; i < max; i++) {
    let tumb = new Image();
    tumb.src = "images/small/" + imageNames[i];
    tumb.id = i;
    tumbs.appendChild(tumb);
    tumb.addEventListener("click", function (e) {
       selectImage(e.target.id);
    });
}

function selectImage(id) {
    console.log(id);
    current = id;
    display.src = "images/big/"+ imageNames[id];
}

function cycle(direction) {
    if (direction) {
        current--;
        if (current < 0) {
            current = imageNames.length - 1;
        }
        selectImage(current);
    } else {
        current++;
        if (current >= imageNames.length) {
            current = 0;
        }
        selectImage(current);
    }
}