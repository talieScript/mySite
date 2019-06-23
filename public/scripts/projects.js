// ajax get function
function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            try {
                data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}    

// create and send temaplates to portifolio section
function sendTemplates(data) {
    let markUp = [];
    data.forEach((el) => {
        function checkLive(el) {
            if(el.isLive === true) {
                return `
                <a href="${el.liveLink}" class="card__btn-live" target="_blank">See Live &rarr;</a>
                `
            } else{ return `
            <button href="" class="card__btn-live card__btn-live--disabled">See Live &rarr;</button>
            <label class="card__label" for="card__btn">Currenctly not hosted online &otimes;</label>
            `
            }
        }
        markUp.push(
            `<div class="card card-fade">
                <!-- front of card -->
                <div class="card__side card__side--front">
                    <!-- front img -->
                    <img  src="./images/project/${el.image}-small.jpg"
                        alt="Project ${el.name} example image" class="card__img">

                    <h4 class="card__name card__name--front">${el.name}</h4>
                </div>

                <!-- Back of card -->
                <div class="card__side card__side--back">
                    <h4 class="card__name card__name--back">${el.name}</h4>
                    <p class="card__paragraph">${el.text}</p>
                    
                    ${checkLive(el)}
                </div>
            </div>
        </div>`)
    });
    document.querySelector('.port__show').innerHTML = markUp.join('');
    // fade in animation
    let cards = document.querySelectorAll('.card');
    cards.forEach((el, index) => {
        setTimeout(() => {
            el.classList.remove("card-fade")
        }, index*300)
    })
}

// collection data get and convert to ar, then run sendTemplates with the data
async function getCollection(collection) {
    var lower = collection.toLowerCase();
    new Promise((resolve, reject) => {
        resolve(ajax_get("/api/projects/"+lower, () => {
            sendTemplates(Object.values(data))
        }))
    });   
}

// get button elements
const portBtns = document.querySelectorAll(".port__btn");

// button active function
function activeBtn(btn) {
    portBtns.forEach((el) => {
        el.classList.remove("btn--3--active");
    });
    btn.classList.add("btn--3--active");
}

// button click listeners 
portBtns.forEach((el) => {
    let collection = el.innerHTML;
    el.addEventListener("click", () => {
        getCollection(collection.toLowerCase())
        activeBtn(el);        
    })
});

// get fullstack projects on page load
(function getCollectionOnLOad() {
    activeBtn(portBtns[0]); 
    getCollection("fullstack")
})();

