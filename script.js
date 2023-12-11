
function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  function spr() {
    let slowo = document.getElementById("a").value
            slowo = slowo.toLowerCase()

    if(ang == 1){
        if (slowo == wordq){
            alert("Poprawna odpowiedź")
        }else{
            alert(`Źle, prawidłowe słowo '${wordq}' dla '${word}'`)
        }
    }else{
        if (slowo == word){
            alert("Poprawna odpowiedź")
        }else{
            alert(`Źle, prawidłowe słowo '${word}' dla '${wordq} `)
        }
    }

    location.reload()
}

let rand = getRandomNumber(0,111)
let ang = getRandomNumber(0,2)
let word = ""
let wordq = ""
let wordq1 = ""
console.log(rand)

if (rand == 0) {
    word = "otyły"
    wordq = "obese"
}

if (rand == 1) {
    word = "z nadwagą"
    wordq = "overweight"
}

if (rand == 2) {
    word = "starszy"
    wordq = "elderly"
}

if (rand == 3) {
    word = "przystojny"
    wordq = "handsome"
}

if (rand == 4) {
    word = "rozwiedziony"
    wordq = "divorced"
}

if (rand == 5) {
    word = "zawód"
    wordq = "occupation"
}

if (rand == 6) {
    word = "owdowiały"
    wordq = "widowed" 
}

if (rand == 7) {
    word = "szczupły"
    wordq = "slim"
}
if (rand == 8) {
    wordq = "curly"
    word = "kręcone"
}
if (rand == 9) {
    wordq = "ginger"
    word = "rude"
}
if (rand == 10) {
    wordq = "wavy"
    word = "falujące"
}
if (rand == 11) {
    wordq = "beard"
    word = "broda"
}
if (rand == 12) {
    wordq = "freckles"
    word = "piegi"
}
if (rand == 13) {
    wordq = "moustache"
    word = "wąsy"
}
if (rand == 14) {
    wordq = "pierced ears"
    word = "przekłute uszy"
}
if (rand == 15) {
    wordq = "scar"
    word = "blizna"
}
if (rand == 16) {
    wordq = "spotty"
    word = "pryszczaty"
}
if (rand == 17) {
    wordq = "tattoo"
    word = "tatuaż"
}
if (rand == 18) {
    wordq = "wrinkles"
    word = "zmarszczki"
}
if (rand == 19) {
    wordq = "blouse"
    word = "bluzka"
}
if (rand == 20) {
    wordq = "boots"
    word = "wysokie buty"
}
if (rand == 21) {
    wordq = "fleece"
    word = "bluza polarowa"
}
if (rand == 22) {
    wordq = "hoodie"
    word = "bluza z kapturem"
}
if (rand == 23) {
    wordq = "jacket"
    word = "kurtka"
}
if (rand == 24) {
    wordq = "jumper"
    word = "sweter"
}
if (rand == 25) {
    wordq = "pyjamas"
    word = "piżama"
}
if (rand == 26) {
    wordq = "sneakers"
    word = "trampki"
}
if (rand == 27) {
    wordq = "shoes"
    word = "buty"
}
if (rand == 28) {
    wordq = "skirt"
    word = "spódnica"
}
if (rand == 29) {
    wordq = "suit"
    word = "garnitur"
}
if (rand == 30) {
    wordq = "sweatshirt"
    word = "bluza sportowa"
}
if (rand == 31) {
    wordq = "tracksuit"
    word = "dres"
}
if (rand == 32) {
    wordq = "underwear"
    word = "bielizna"
}
if (rand == 33) {
    wordq = "ballgown"
    word = "suknia balowa"
}
if (rand == 34) {
    wordq = "belt"
    word = "pasek"
}
if (rand == 35) {
    wordq = "bracelet"
    word = "bransoletka"
}
if (rand == 36) {
    wordq = "button"
    word = "guzik"
}
if (rand == 37) {
    wordq = "earrings"
    word = "kolczyki"
}
if (rand == 38) {
    wordq = "gloves"
    word = "rękawiczki"
}
if (rand == 39) {
    wordq = "handbag"
    word = "torebka"
}
if (rand == 40) {
    wordq = "necklace"
    word = "naszyjnik"
}
if (rand == 41) {
    wordq = "ring"
    word = "pierścionek"
}
if (rand == 42) {
    wordq = "scarf"
    word = "szalik"
}
if (rand == 43) {
    wordq = "tie"
    word = "krawat"
}
if (rand == 44) {
    wordq = "checked"
    word = "w kratę"
}
if (rand == 45) {
    wordq = "cotton"
    word = "bawełna"
}
if (rand == 46) {
    wordq = "denim"
    word = "dżinsowy"
}
if (rand == 47) {
    wordq = "fur"
    word = "futro"
}
if (rand == 48) {
    wordq = "leather"
    word = "skóra"
}
if (rand == 49) {
    wordq = "linen"
    word = "lniany"
}
if (rand == 50) {
    wordq = "silk"
    word = "jedwab"
}
if (rand == 51) {
    wordq = "spotted"
    word = "w kropki"
}
if (rand == 52) {
    wordq = "striped"
    word = "w paski"
}
if (rand == 53) {
    wordq = "wool"
    word = "wełna"
}
if (rand == 54) {
    wordq = "absent-minded"
    word = "roztargniony"
}
if (rand == 55) {
    wordq = "bad-tempered"
    word = "wybuchowy"
}
if (rand == 56) {
    wordq = "bossy"
    word = "apodyktyczny"
}
if (rand == 57) {
    wordq = "careful"
    word = "ostrożny"
}
if (rand == 58) {
    wordq = "careless"
    word = "nieostrożny"
}
if (rand == 60) {
    wordq = "confident"
    word = "pewny siebie"
}
if (rand == 61) {
    wordq = "overconfident"
    word = "zbyt pewny siebie"
}
if (rand == 62) {
    wordq = "easygoing"
    word = "wyluzowany"
}
if (rand == 63) {
    wordq = "extrowert"
    word = "extrawertyk"
}
if (rand == 64) {
    wordq = "gentle"
    word = "delikatny"
}
if (rand == 65) {
    wordq = "helpful"
    word = "uczynny"
}
if (rand == 66) {
    wordq = "unhelpful"
    word = "nieskory do pomocy"
}
if (rand == 67) {
    wordq = "honest"
    word = "uczciwy"
}
if (rand == 68) {
    wordq = "dishonest"
    word = "nieuczciwy"
}
if (rand == 69) {
    wordq = "imaginative"
    word = "pomysłowy"
}
if (rand == 70) {
    wordq = "unmaginative"
    word = "bez wyobraźni"
}
if (rand == 71) {
    wordq = "introvert"
    word = "introwertyk"
}
if (rand == 72) {
    wordq = "messy"
    word = "bałaganiarski"
}
if (rand == 73) {
    wordq = "modest"
    word = "skromny"
}
if (rand == 74) {
    wordq = "narrow-minded"
    word = "ograniczony"
}
if (rand == 75) {
    wordq = "optimistic"
    word = "optymistyczny"
}
if (rand == 76) {
    wordq = "pessimistic"
    word = "pesymistyczny"
}
if (rand == 77) {
    wordq = "outgoing"
    word = "otwarty"
}
if (rand == 78) {
    wordq = "patient"
    word = "cierpliwy"
}
if (rand == 79) {
    wordq = "impatient"
    word = "niecierpliwy"
}
if (rand == 80) {
    wordq = "polite"
    word = "uprzejmy"
}
if (rand == 81) {
    wordq = "impolite"
    word = "nieuprzejmy"
}
if (rand == 82) {
    wordq = "reliable"
    word = "solidny"
}
if (rand == 83) {
    wordq = "unreliable"
    word = "niesolidny"
}
if (rand == 84) {
    wordq = "selfish"
    word = "samolubny"
}
if (rand == 85) {
    wordq = "unselfish"
    word = "bezinteresowny"
}
if (rand == 86) {
    wordq = "sensitive"
    word = "wrażliwy"
}
if (rand == 87) {
    wordq = "sincere"
    word = "szczery"
}
if (rand == 88) {
    wordq = "sociable"
    word = "towarzyski"
}
if (rand == 89) {
    wordq = "unsociable"
    word = "nietowarzyski"
}
if (rand == 90) {
    wordq = "tidy"
    word = "porządny"
}
if (rand == 91) {
    wordq = "untidy"
    word = "niechlujny"
}
if (rand == 92) {
    wordq = "tolerant"
    word = "tolerancyjny"
}
if (rand == 93) {
    wordq = "intolerant"
    word = "nietolerancyjny"
}
if (rand == 94) {
    wordq = "trustworthy"
    word = "godny zaufania"
}
if (rand == 95) {
    wordq = "vain"
    word = "próżny"
}
if (rand == 96) {
    wordq = "bold"
    word = "odważny"
}
if (rand == 97) {
    wordq = "annoyed"
    word = "zirytowany"
}
if (rand == 98) {
    wordq = "anxious"
    word = "zaniepokojony"
}
if (rand == 99) {
    wordq = "be in a good mood"
    word = "być w dobrym humorze"
}
if (rand == 100) {
    wordq = "bad mood"
    word = "być w złym humorze"
}
if (rand == 101) {
    wordq = "embarrassed"
    word = "zawstydzony"
}
if (rand == 102) {
    wordq = "exhausted"
    word = "wyczerpany"
}
if (rand == 103) {
    wordq = "frightened"
    word = "przerażony"
}
if (rand == 104) {
    wordq = "pleased"
    word = "zadowolony"
}
if (rand == 105) {
    wordq = "scared"
    word = "wystraszony"
}
if (rand == 106) {
    wordq = "stressed"
    word = "zestresowany"
}
if (rand == 107) {
    wordq = "surprised"
    word = "zdziwiony"
}
if (rand == 108) {
    wordq = "tired"
    word = "zmęczony"
}
if (rand == 109) {
    wordq = "upset"
    word = "przygnębiony"
}
if (rand == 110) {
    wordq = "worried"
    word = "zmartwiony"
}

if(ang == 1){
    document.getElementById("output").innerHTML = `Podaj słowo: <h1>${word}</h1>`
}else{
document.getElementById("output").innerHTML = `Podaj słowo: <h1>${wordq}</h1>`
}