//function dayNight() {
//
//    console.log(time)
//    if(time == 0) {
//        document.getElementById("night").innerHTML = `<link rel="stylesheet"href="night.css"></link>`
//        document.getElementById("dn").innerHTML = `<button onclick="dayNight()" id="dayNight" class="dn">Noc</button>`
//        time = 1
//    } else {
//        document.getElementById("night").innerHTML = ``
//        document.getElementById("dn").innerHTML = `<button onclick="dayNight()" id="dayNight" class="dn">Dzień</button>`
//        time = 0
//    }
//}

function dayNight() {

    night = document.getElementById("night")
    dn = document.getElementById("dayNight")

    if (time == 0) {
        night.href = "night.css"
        dn.value = "Dzień"
        time = 1
    } else {
        night.href = ""
        dn.value = "Noc"
        time = 0
    }
}

let time = 0
let night = 0
let dn = 0
let mo = 1

function mode() {
    let abc = document.getElementById("mode")
    console.log(abc);
    if(mo == 0){
        document.getElementById("mode").innerHTML = `
        <form>
        <input type="radio" name="lang" id="English" checked onclick="langE()">English

        <input type="radio" id="Polski" name="lang" onclick="langE()">Polski

        <input type="radio" id="Kombinacje" name="lang" onclick="langE()">Ang/Pol<br>

        </form>

        <div class="score" name="punkty">
            <a name="p+" id="p+">✅0</a>
             <a name="p-" id="p-">❌0</a>
            </div> 

    <h1><div class="unity1" id="output"></div></h1><br>

    <form class="form1" onsubmit="return false">

        <input class="odp" type="text" name="a" id="a" autocomplete="off" autofocus placeholder="Odpowiedź"><br><br>
        <button class="btn1" type="submit" onclick="spr()" id="btn" accesskey="enter">Sprawdź</button>    
    </form><br><br>
        <input type="button" id="dayNight" onclick="dayNight()" class="dn" value="Noc">
`
    } else {

    }



}   

mode()