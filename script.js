var currentTime = document.getElementById("currentDay");
var now = moment().format("llll");
currentTime.textContent = now;
var currentTime = moment().format("HH");

var time = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];


function makeBlocks() {
    for (var i = 0; i < time.length; i++) {
        var d1 = document.createElement("div");

        d1.setAttribute("class", "row")
        var d2 = document.createElement("div");
        d2.setAttribute("class", "col-1 hour")

        if (time[i] > 12) {
            d2.textContent = time[i] - 12 + " PM";

        }
        if (time[i] == 12) {
            d2.textContent = time[i] + " PM";

        }
        if (time[i] < 12) {
            d2.textContent = time[i] + " AM";

        }
        var textarea = document.createElement("textarea");

        if (currentTime == time[i]) {
            textarea.setAttribute("class", "present col-10 time-block " + time[i]);
        }
        if (currentTime > time[i]) {
            textarea.setAttribute("class", "past col-10 time-block " + time[i]);
        }
        if (currentTime < time[i]) {
            textarea.setAttribute("class", "future col-10 time-block " + time[i]);
        }

        var d3 = document.createElement("div");
        d3.setAttribute("class", "col-1 saveBtn");
        d3.setAttribute("id", time[i]);
        var itag = document.createElement("i");
        itag.setAttribute("class", "col-12 far fa-save");

        d3.appendChild(itag);

        d1.appendChild(d2);
        d1.appendChild(textarea);
        d1.appendChild(d3);

        document.querySelector(".container").appendChild(d1);
    }

    $(".saveBtn").on("click", function () {

        console.log(this.getAttribute("id"));
        console.log(this.parentElement.children[1].value);
        var idTime = this.getAttribute("id");
        var textAreaContent = this.parentElement.children[1].value;
        localStorage.setItem(idTime, textAreaContent);
    });

    function getToDos() {
        var storedTodos = JSON.parse(localStorage.getItem("todos"));

    }
    
}

makeBlocks();

