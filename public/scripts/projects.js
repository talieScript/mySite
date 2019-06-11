// ajax get function
function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // console.log('responseText:' + xmlhttp.responseText);
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

// collection data get and convert to arr 
let dataArr
function getCollection(collection) {
    var lower = collection.toLowerCase();
   ajax_get("/api/projects/"+lower, function() {
        dataArr = Object.values(data);
    });
};

// button click listeners 
const portBtns = document.querySelectorAll(".port__btn");
portBtns.forEach((el) => {
    let collection = el.innerHTML;
    el.addEventListener("click", () => {
        getCollection(collection.toLowerCase())
        setTimeout(() => {
            sendTemplates();
        }, 100)
        
    })
});



function sendTemplates() {
    let markUp = [];
    dataArr.forEach((el) => {
        function checkLive(el) {
            if(el.isLive === true) {
                return `
                <a href="${el.liveLink})" class="card__btn-live">See Live &rarr;</a>
                `
            } else{ return `
            <a href="${el.liveLink})" class="card__btn-live card__btn-live--disabled">See Live &rarr;</a>
            <label class="card__label" for="card__btn">Currenctly not hosted online &otimes;</label>
            `
            }
        }
        markUp.push(
            `<div class="card card-fade">
                <!-- front of card -->
                <div class="card__side card__side--front">
                    <!-- front img -->
                    <img class="card__img" src="./images/project/${el.image}" alt="Project ${el.name} example image">

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



