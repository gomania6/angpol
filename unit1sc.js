function langE() {
    
    if(document.getElementById("English").checked == true){
        ang = 0
        lang = 1
        sprlos()
    } else {
        if(document.getElementById("Polski").checked == true){
            lang = 2
            ang = 1
            sprlos()
        } else {
            lang = 0
            ang = getRandomNumber(0,2)
            sprlos()
        }
    }
    console.log(lang)
}

function sprlos() {
    document.getElementById("a").value = ''

    if(lang == 1){
        ang = 0
        if(a == 1){
            rand = getRandomNumber(0,111)
            los()
         } if(a == 2){
            rand = getRandomNumber(0,170)
            los2()
         }
    } else {
        if(lang == 2){
            ang = 1
            if(a == 1){
                rand = getRandomNumber(0,111)
                los()
             } if(a == 2){
                rand = getRandomNumber(0,170)
                los2()
             }
        } else {
            ang = getRandomNumber(0,2)
            if(a == 1){
                rand = getRandomNumber(0,111)
                los()
             } if(a == 2){
                rand = getRandomNumber(0,170)
                los2()
             }
        }
    }
}

function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  function spr() {
    if(a == 1 | a == 2){
    let slowo = document.getElementById("a").value
    let odp = document.getElementById("odp").value
        console.log(odp)



            slowo = slowo.toLowerCase()
        console.log(slowo+" slowo");
        console.log(ang+" ang");
        if(ang == 1){
            if(slowo == ""){
                document.getElementById("odp").innerHTML = `Źle, prawidłowe słowo '${wordq}' dla '${word}'`
                pminus = pminus + 1
                document.getElementById("p-").innerHTML = `❌${pminus}` 
            } else if(slowo == wordq){
            document.getElementById("odp").innerHTML = `Poprawna odpowiedź`
            pplus = pplus + 1
            document.getElementById("p+").innerHTML = `✅${pplus}`
            } else if(slowo == wordp){
                document.getElementById("odp").innerHTML = `Poprawna odpowiedź`
                pplus = pplus + 1
                document.getElementById("p+").innerHTML = `✅${pplus}`
            } else{
                document.getElementById("odp").innerHTML = `Źle, prawidłowe słowo '${wordq}' dla '${word}'`
                pminus = pminus + 1
                document.getElementById("p-").innerHTML = `❌${pminus}` 
            }
        }else{
            if(slowo == ""){
                document.getElementById("odp").innerHTML = `Źle, prawidłowe słowo '${wordq}' dla '${word}'`
                pminus = pminus + 1
                document.getElementById("p-").innerHTML = `❌${pminus}` 
            } else if(slowo == word){
            document.getElementById("odp").innerHTML = `Poprawna odpowiedź`
            pplus = pplus + 1
            document.getElementById("p+").innerHTML = `✅${pplus}`
            } else if(slowo == worda){
                document.getElementById("odp").innerHTML = `Poprawna odpowiedź`
                pplus = pplus + 1
                document.getElementById("p+").innerHTML = `✅${pplus}`
            } else{
                document.getElementById("odp").innerHTML = `Źle, prawidłowe słowo '${wordq}' dla '${word}'`
                pminus = pminus + 1
                document.getElementById("p-").innerHTML = `❌${pminus}` 
            }
        }

    wordp = ""
    worda = ""

    sprlos()
    console.log(lang,ang);
} else {
    document.getElementById("odp").innerHTML = "Wybierz unit!"
}

}



function unit() {
    a = document.getElementById("unity").value
    // console.log(a);
    if(a == 1){
        rand = getRandomNumber(0,111)
        console.log(a);
        los()
        document.getElementById("odp").innerHTML = "Unit 1"
     } else {
        if(a == 2){
        console.log(a)
        rand = getRandomNumber(0,34)
        los2()
        document.getElementById("odp").innerHTML = "Unit 2"
     } else {
        document.getElementById("odp").innerHTML = "Wybierz unit!"
        document.getElementById("output").innerHTML = `Podaj słowo:`
     }
    }
    return a
}

var a = "Wybierz unit"
let lang = 1
let rand = getRandomNumber(0,111)
let ang = 0
let wordp = "" // slowo powtarzajace po ang
let word = "" // slowo po polsku
let wordq = "" // slowo po angielsku
let worda = "" // slowo powtarzajace po polsku
let pplus = 0 // punkt dodatni
let pminus = 0 // punkt ujemny
let atert = ""
console.log(rand)

function los() {

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

}

function los2() {

    if (rand == 0) {
        word = "blok mieszkalny"
        wordq = "block of flats"
    }
    
    if (rand == 1) {
        wordq = "bungalow"
        word = "dom parterowy"
    }

    if (rand == 2) {
        wordq = "cabin"
        word = "chata"
        worda = "domek"
    }

    if (rand == 3) {
        wordq = "cottage"
        word = "domek wiejski"
    }

    if (rand == 4) {
        wordq = "detached house"
        word = "wolnostojcy dom jednorodzinny"
    }

    if (rand == 5) {
        wordq = "family house"
        word = "dom rodzinny"
    }
    
    if (rand == 6) {
        wordq = "farmhouse"
        word = "dom w gospodarstwie rolnym"
    }

    if (rand == 7) {
        wordq = "housing estate"
        word = "osiedle mieszkaniowe"
    }

    if (rand == 8) {
        wordq = "mansion"
        word = "pałac"
        worda = "rezydencja"
    }

    if (rand == 9) {
        wordq = "nursing home"
        word = "dom spokojnej starości"
    }

    if (rand == 10) {
        wordq = "semi-detached house"
        word = "bliźniak"
    }

    if (rand == 11) {
        wordq = "skyscraper"
        word = "wieżowiec"
    }

    if (rand == 12) {
        wordq = "studio flat"
        word = "kawalerka"
    }

    if (rand == 13) {
        wordq = "terraced house"
        word = "dom szeregowy"
        worda = "segment"
    }

    if (rand == 14) {
        wordq = "across the road from"
        word = "po drugiej stronie ulicy"
    }

    if (rand == 15) {
        wordq = "central location"
        word = "centralne położenie"
    }

    if (rand == 16) {
        wordq = "commute"
        word = "dojeżdżać"
    }

    if (rand == 17) {
        wordq = "district"
        word = "dzielnica"
    }

    if (rand == 18) {
        wordq = "in a rural areas"
        word = "w wiejskiej okolicy"
    }

    if (rand == 19) {
        wordq = "in the countryside"
        word = "na wsi"
    }

    if (rand == 20) {
        wordq = "in the middle of nowhere"
        word = "na obludziu"
        worda = "w szczerym polu"
    }

    if (rand == 21) {
        wordq = "in the suburbs"
        word = "na przedmieściach"
    }

    if (rand == 22) {
        wordq = "inhabitant"
        word = "mieszkaniec"
        worda = "mieszkanka"
    }

    if (rand == 23) {
        wordq = "located"
        word = "położony"
    }

    if (rand == 24) {
        wordq = "neighbour"
        word = "sąsiad"
        worda = "sąsiadka"
    }

    if (rand == 25) {
        wordq = "neighbourhood"
        word = "sąsiedztwo"
        worda = "okolica"
    }

    if (rand == 26) {
        wordq = "old town"
        word = "stare miasto"
    }

    if (rand == 27) {
        wordq = "on the edge of"
        word = "na skraju"
    }

    if (rand == 28) {
        wordq = "overlook"
        word = "wychodzić na"
        worda = "mieć widok na"
    }

    if (rand == 29) {
        wordq = "public transport"
        word = "transport publiczny"
    }

    if (rand == 30) {
        wordq = "residents"
        word = "mieszkańcy"
    }

    if (rand == 31) {
        wordq = "village"
        word = "wioska"
    }

    if (rand == 32) {
        wordq = "attic"
        wordp = "loft"
        word = "poddasze"
        worda = "strych"
    }

    if (rand == 33) {
        wordp = "cellar"
        wordq = "basement"
        word = "piwnica"
    }


    if (rand == 34) {
        wordq = "carport"
        word = "wiata na samochód"
    }

    if (rand == 35) {
        wordq = "ceiling"
        word = "sufit"
    }
    
    if (rand == 36) {
        wordq = "chimney"
        word = "komin"
    }


    if (rand == 37) {
        wordq = "downstairs"
        word = "na dole"
        worda = "na parterze"
    }
    
    if (rand == 38) {
        wordq = "drive"
        word = "podjazd"
    }

    if (rand == 39) {
        wordq = "fence"
        word = "ogrodzenie"
        worda = "płot"
    }


    if (rand == 40) {
        wordq = "fireplace"
        word = "kominek"
    }

    if (rand == 41) {
        wordq = "front"
        wordp = "back door"
        word = "drzwi frontowe"
        worda = "tylne"
    }

    
    if (rand == 42) {
        wordq = "gate"
        word = "brama"
    }


    if (rand == 43) {
        wordq = "hedge"
        word = "żywopłot"
    }


    if (rand == 44) {
        wordq = "ground floor"
        word = "parter"
    }


    if (rand == 45) {
        wordq = "laundry room"
        word = "domowa pralnia"
    }


    if (rand == 46) {
        wordq = "lawn"
        word = "trawnik"
    }


    if (rand == 47) {
        wordq = "lift"
        word = "winda"
    }


    if (rand == 48) {
        wordq = "living room"
        wordp = "lounge"
        word = "salon"
    }

    if (rand == 49) {
        wordq = "porch"
        word = "ganek"
    }

    if (rand == 50) {
        wordq = "roof"
        word = "dach"
    }

    if (rand == 51) {
        wordq = "shed"
        word = "szopa"
    }

    if (rand == 52) {
        wordq = "staircase"
        word = "klatka schodowa"
    }

    if (rand == 53) {
        wordq = "steps"
        word = "schodki"
    }

    if (rand == 54) {
        wordq = "study"
        word = "gabinet"
    }

    if (rand == 55) {
        wordq = "upstairs"
        word = "na górze"
        worda = "na piętrze"
    }

    if (rand == 56) {
        wordq = "yard"
        word = "dziedziniec"
        worda = "podwórze"
    }

    if (rand == 57) {
        wordq = "airy"
        word = "przestronny"
    }

    if (rand == 58) {
        wordq = "badly-decorated"
        word = "źle wykończony"
    }

    if (rand == 59) {
        wordq = "bright"
        word = "jasny"
    }

    if (rand == 60) {
        wordq = "cluttered"
        word = "zagracony"
    }

    if (rand == 61) {
        wordq = "convert"
        word = "przerobić"
        worda = "przekształcić"
    }

    if (rand == 62) {
        wordq = "cosy"
        word = "przytulny"
    }

    if (rand == 63) {
        wordq = "dusty"
        word = "zakurzony"
    }

    if (rand == 64) {
        wordq = "eco-friendly"
        word = "przyjazny dla środowiska"
    }

    if (rand == 65) {
        wordq = "furnished"
        word = "umeblowany"
    }

    if (rand == 66) {
        wordq = "unfurnished"
        word = "nieumeblowany"
    }

    if (rand == 67) {
        wordq = "homely"
        word = "przytulny"
    }

    if (rand == 68) {
        wordq = "luxurious"
        word = "luksusowy"
    }

    if (rand == 69) {
        wordq = "maintain"
        word = "utrzymywać"
        worda = "konserwować"
    }

    if (rand == 70) {
        wordq = "mud"
        word = "błoto"
    }

    if (rand == 71) {
        wordq = "old-fashioned"
        word = "staromodny"
    }

    if (rand == 72) {
        wordq = "open-plan"
        word = "bez ścian działowy"
    }

    if (rand == 73) {
        wordq = "second-hand"
        word = "używany"
        worda = "z drugiej ręki"
    }

    if (rand == 74) {
        wordq = "spacious"
        word = "przestronny"
    }

    if (rand == 75) {
        wordq = "steel"
        word = "stalowy"
    }

    if (rand == 76) {
        wordq = "stone"
        word = "kamienny"
    }

    if (rand == 77) {
        wordq = "tidy"
        word = "posprzątany"
    }

    if (rand == 78) {
        wordq = "untidy"
        word = "nieposprzątany"
    }

    if (rand == 79) {
        wordq = "wooden"
        word = "drewniany"
    }

    if (rand == 80) {
        wordq = "air condition"
        word = "klimatyzacja"
    }

    if (rand == 81) {
        wordq = "alarm clock"
        word = "budzik"
    }
    
    if (rand == 82) {
        wordq = "bath mat"
        word = "dywanik łazienkowy"
    }

    if (rand == 83) {
        wordq = "bedside table"
        word = "stolik nocny"
    }

    if (rand == 84) {
        wordq = "blanket"
        word = "koc"
    }

    if (rand == 85) {
        wordq = "blinds"
        word = "rolety"
    }

    if (rand == 86) {
        wordq = "carpet"
        word = "dywan"
    }

    if (rand == 87) {
        wordq = "central heating"
        word = "centralne ogrzewanie"
    }

    if (rand == 88) {
        wordq = "chest of drawers"
        word = "komoda"
    }

    if (rand == 89) {
        wordq = "coffee maker"
        word = "ekspres do kawy"
    }

    if (rand == 90) {
        wordq = "cooker"
        word = "cupboard"
    }

    if (rand == 91) {
        wordq = "cupboard"
        word = "szafka kuchenna"
    }

    if (rand == 92) {
        wordq = "curtains"
        word = "zasłony"
    }

    if (rand == 93) {
        wordq = "net curtains"
        word = "firanki"
    }

    if (rand == 94) {
        wordq = "cushion"
        word = "poduszka"
    }

    if (rand == 95) {
        wordq = "dishwasher"
        word = "zmywarka"
    }

    if (rand == 96) {
        wordq = "doormat"
        word = "wycieraczka"
    }

    if (rand == 97) {
        wordq = "double bed"
        word = "podwójne łóżko"
    }

    if (rand == 98) {
        wordq = "duvet"
        word = "kołdra"
    }

    if (rand == 99) {
        wordq = "electric kettle"
        word = "czajnik elektryczny"
    }

    if (rand == 100) {
        wordq = "kitchen island"
        word = "wyspa kuchenna"
    }

    if (rand == 101) {
        wordq = "kitchen appliances"
        word = "urządzenia kuchenne"
    }

    if (rand == 102) {
        wordq = "lighting"
        word = "oświetlenie"
    }

    if (rand == 103) {
        wordq = "microwave"
        word = "kuchenka mikrofalowa"
    }

    if (rand == 104) {
        wordq = "oven"
        word = "piekarnik"
    }

    if (rand == 105) {
        wordq = "pillow"
        word = "poduszka"
    }

    if (rand == 106) {
        wordq = "potted plant"
        word = "roślina doniczkowa"
    }

    if (rand == 107) {
        wordq = "rug"
        word = "dywanik"
    }

    if (rand == 108) {
        wordq = "sheet"
        word = "prześcieradło"
    }

    if (rand == 109) {
        wordq = "shelf"
        word = "półka"
    }

    if (rand == 110) {
        wordq = "single bed"
        word = "pojedyncze łóżko"
    }

    if (rand == 111) {
        wordq = "toaster"
        word = "toster"
    }

    if (rand == 112) {
        wordq = "toilet"
        word = "toaleta"
        worda = "sedes"
    }

    if (rand == 113) {
        wordq = "tower rail"
        word = "wieszak na ręczniki"
    }

    if (rand == 114) {
        wordq = "TV set"
        word = "telewizor"
    }

    if (rand == 115) {
        wordq = "wallpaper"
        word = "tapeta"
    }

    if (rand == 116) {
        wordq = "washbasin"
        word = "umywalka"
    }

    if (rand == 117) {
        wordq = "washing machine"
        word = "pralka"
    }

    if (rand == 118) {
        wordq = "brush"
        word = "szczotka"
    }

    if (rand == 119) {
        wordq = "change the sheets"
        word = "zmieniać pościel"
    }

    if (rand == 120) {
        wordq = "dustpan"
        word = "szufelka"
    }

    if (rand == 121) {
        wordq = "do the gardening"
        word = "pracować w ogrodzie"
    }

    if (rand == 122) {
        wordq = "do the grocery shopping"
        word = "robić zakupy spożywcze"
    }

    if (rand == 123) {
        wordq = "do the laundry"
        word = "robić pranie"
    }

    if (rand == 124) {
        wordq = "do the homework"
        word = "zajmować się domem"
    }

    if (rand == 125) {
        wordq = "dust the furniture"
        word = "wycierać kurz z mebli"
    }

    if (rand == 126) {
        wordq = "empty the dishwasher"
        word = "opróźniać zmywarkę"
    }

    if (rand == 127) {
        wordq = "empty the rubbish bin"
        word = "opróżniać kosz na śmieci"
    }

    if (rand == 128) {
        wordq = "have a clear-out"
        word = "pozbywać się niepotrzebnych"
        worda = "pozbywać się nieużywanych rzeczy"
    }

    if (rand == 129) {
        wordq = "have green fingers"
        word = "mieć dobrą rękę do roślin"
    }

    if (rand == 130) {
        wordq = "hoover the carpet"
        word = "odkurzać dywan"
    }

    if (rand == 131) {
        wordq = "iron the clothes"
        word = "prasować ubrania"
    }

    if (rand == 132) {
        wordq = "keep sth neat and tidy"
        word = "utrzymywać coś w nienagannym porządku"
    }

    if (rand == 133) {
        wordq = "make improvements"
        word = "wprowadzać ulepszenia"
    }

    if (rand == 134) {
        wordq = "make the bed"
        word = "ścielić łóżko"
    }

    if (rand == 135) {
        wordq = "mop the floor"
        word = "wycierać podłogę mopem"
    }

    if (rand == 136) {
        wordq = "mow the lawn"
        word = "kosić trawnik"
    }

    if (rand == 137) {
        wordq = "renovate a corridor"
        word = "odnowić korytarz"
    }

    if (rand == 138) {
        wordq = "rubber gloves"
        word = "gumowe rękawiczki"
    }

    if (rand == 139) {
        wordq = "shopping bag"
        word = "torba na zakupy"
    }
    
    if (rand == 140) {
        wordq = "sponge"
        word = "gąbka"
    }

    if (rand == 141) {
        wordq = "sweep the floor"
        word = "zamiatać podłogę"
    }

    if (rand == 142) {
        wordq = "tea towel"
        word = "ścierka"
    }

    if (rand == 143) {
        wordq = "accommodation"
        word = "zakwaterowanie"
    }

    if (rand == 144) {
        wordq = "ad"
        wordp = "advert"
        word = "ogłoszenie"
        worda = "reklama"
    }

    if (rand == 145) {
        wordq = "auction"
        word = "aukcja"
        worda = "licytacja"
    }

    if (rand == 146) {
        wordq = "bill"
        word = "rachunek"
    }

    if (rand == 147) {
        wordq = "budget"
        word = "budżet"
    }

    if (rand == 148) {
        wordq = "deposit"
        word = "kaucja"
        worda = "zaliczka"
    }

    if (rand == 149) {
        wordq = "estate agent"
        word = "agent nieruchomości"
        worda = "agentka nieruchomości"
    }

    if (rand == 150) {
        wordq = "flatmate"
        wordp = "housemate"
        word = "współlokator"
        worda = "współlokatorka"
    }

    if (rand == 151) {
        wordq = "landlord"
        word = "właściciel"
    }
    
    if (rand == 152) {
        wordq = "landlady"
        word = "właścicielka"
    }

    if (rand == 153) {
        wordq = "live on one's own"
        word = "mieszkać samemu"
    }

    if (rand == 154) {
        wordq = "move house"
        word = "przeprowadzić się"
    }

    if (rand == 155) {
        wordq = "move in"
        word = "wprowadzić się"
    }

    if (rand == 156) {
        wordq = "move out"
        word = "wyprowadzić się"
    }

    if (rand == 157) {
        wordq = "notice"
        word = "wypowiedzenie"
    }

    if (rand == 158) {
        wordq = "pay in advice"
        word = "zapłacić z góry"
    }

    if (rand == 159) {
        wordq = "payment"
        word = "płatność"
    }

    if (rand == 160) {
        wordq = "removal van"
        word = "samochód służący do przewożenia mebli"
    }

    if (rand == 161) {
        wordq = "rent"
        word = "wynając"
        worda = "czynsz"
    }

    if (rand == 162) {
        wordq = "share a room"
        word = "dzielić z kimś pokój"
    }

    if (rand == 163) {
        wordq = "share a flat"
        word = "dzielić z kimś mieszkanie"
    }

    if (rand == 164) {
        wordq = "share a house"
        word = "dzielić z kimś dom"
    }

    if (rand == 165) {
        wordq = "to let"
        word = "do wynajęcia"
    }

    if (rand == 166) {
        wordq = "chore"
        word = "obowiązek"
        worda = "rodzaj nielubianej pracy"
    }

    if (rand == 167) {
        wordq = "cleanliness"
        word = "czystość"
    }

    if (rand == 168) {
        wordq = "get rid of sth"
        word = "pozbyć się czegoś"
    }

    if (rand == 169) {
        wordq = "put money aside"
        word = "odkładać pieniądze"
        worda = "oszczędzać"
    }

    

    if(wordp == "" | worda == ""){
        if(ang == 1){
            document.getElementById("output").innerHTML = `Podaj słowo: <h1>${word}</h1>`
        }else{
        document.getElementById("output").innerHTML = `Podaj słowo: <h1>${wordq}</h1>`
        }
    } else {
        if(ang == 1 | wordp == ""){
            document.getElementById("output").innerHTML = `Podaj słowo: <h1>${word}/${worda}</h1>`
        }else{
        document.getElementById("output").innerHTML = `Podaj słowo: <h1>${wordq}/${wordp}</h1>`
        }
    }
}


//    document.getElementById("odp").innerHTML = `Poprawna odpowiedź`
//   pplus = pplus + 1
//    document.getElementById("p+").innerHTML = `✅${pplus}` 

//    document.getElementById("odp").innerHTML = `Źle, prawidłowe słowo '${wordq}' dla '${word}'`
//    pminus = pminus + 1
//    document.getElementById("p-").innerHTML = `❌${pminus}` 
