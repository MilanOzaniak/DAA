let znamenia = {
    vodnar:{
        order: 1,
        name: "AQUARIUS",
        image: "vodnar.png",
        start: "01.21.",
        end: "02.18.",
        popis:"V osobnom živote je toto obdobie prevratov, ak by ste bojovali s nedostatkom času, stačí si len lepšie premyslieť jednotlivé kroky. V láske neváhajte byť veľkorysí, nielenže si to vaša polovička zaslúži, ale jeto niečo, čo váš vzťah posunie zas ďalej.",
    },
    ryby:{
        order: 2,
        name: "PISCES",
        image: "ryby.jpg",
        start: "02.19.",
        end: "03.20.",
        popis: "Je to vodné znamenie. Sú to ľudia veľmi citliví, zraniteľní, sú výborní pozorovatelia, majú umelecké sklony. Vládnucou planétou je Neptún, ktorý im dáva neobyčajnú fantáziu a výborné herecké sklony. Majú sklon k sebaobetovaniu. ",
    },
    baran:{
        order: 3,
        name: "ARIES",
        image: "baran.png",
        start: "03.21.",
        end:"04.19.",
        popis: "Je to ohnivé znamenie. Barani sú kamarátski, impulzívni, súťaživí, vždy otvorení novým veciam. Potrebujú byť dominantní a neznášajú prehry. Vládnucou planétou je Mars, ktorá im dáva obrovské množstvo nespútanej energie a hnaciu silu. ",
    },
    byk:{
        order:4,
        name:"TAURUS",
        image:"byk.png",
        start:"04.20.",
        end:"05.20.",
        popis:"Je to zemské znamenie. Sú to ľudia stáli, konzervatívni, tvrdohlaví, pôžitkárski. Potrebujú mať pocit istoty, milujú stabilitu vo všetkom &#8211; v bývaní, vo vzťahoch, v práci. Sú zaťažení na peniaze.",
    },
    blizenci:{
        order:5,
        name:"GEMINI",
        image:"blizenci.png",
        start:"05.21.",
        end:"06.21.",
        popis:"Je to vzdušné znamenie. Sú to ľudia citliví, nedokážu úmyselne ublížiť, sú rozpoltení a sú otvorení k novým veciam. Vládne im planéta Merkúr, ktorá im dáva schopnosť výborne komunikovať a stále sa vzdelávať. Sú nesmierne inteligentní.",  
    },
    rak:{
        order:6,
        name: "CANCER",
        image:"rak.png",
        start:"06.22.",
        end:"07.22.",
        popis:"Je to vodné znamenie. Sú veľmi rodinne založení. Majú silný pud sebazáchovy. Ich vládnucou planétou je Luna, ktorá im dáva hlboké city, jemnosť , materinskú starostlivosť. Citlivá oblasť tela je žalúdok, prsia. ",
    },
    lev:{
        order:7,
        name:"LEO",
        image:"lev.png",
        start:"07.23.",
        end:"08.22.",
        popis:"Je to ohnivé znamenie. Títo ľudia sú egocentrickí, radi stávajú stredobodom pozornosti. Majú prirodzený vodcovský talent. Ich vládnucou planétou je Slnko, ktoré im dodáva nevyčerpateľné množstvo energie, hravosť, spontánnosť a večný úsmev na tvári",
    },
    panna:{
        order:8,
        name:"VIRGO",
        image:"panna.png",
        start:"08.23.",
        end:"09.22.",
        popis:"Je to zemské znamenie. Sú to ľudia silní, vplyvní, produktívni. Ich život sa toči okolo služby a sebaobetovania. Ich vládnucou planétou je Merkúr, ktorá im dáva precíznosť, múdrosť, poriadkumilovnosť. ",
    },
    vahy:{
        order:9,
        name:"LIBRA",
        image:"vahy.png",
        start:"09.23.",
        end:"10.23.",
        popis:"e to vzdušné znamenie. Títo ľudia sú kamarátski, úprimní, poctiví, slobodomyseľní a neznášajú konflikty. Vzťahy s druhými sú pre nich mimoriadne dôležité. Majú zmysel pre spravodlivosť a česť.",
    },
    skorpion:{
        order:10,
        name:"SCORPIO",
        image:"skorpion.png",
        start:"10.24",
        end:"11.22",
        popis:"Je to vodné znamenie. Sú to ľudia originálni, tvrdohlaví, majú vynikajúcu pamäť, logické a analytické myslenie. Disponujú výbornými nápadmi. Vedia byť veľmi starostliví a nápomocní.",
    },
    strelec:{
        order:11,
        name:"SAGITARIUS",
        image:"strelec.png",
        start:"11.23.",
        end:"12.20.",
        popis:"Je to ohnivé znamenie. Sú to ľudia spoločenskí, veľmi spravodliví, vždy pripravení a veľmi úprimní. Ich vládnucou planétou je Jupiter, ktorý im dáva šťastie a pôvab. Sú otvorení novým myšlienkam, stále sa učia a vzdelávajú sa.",
    },
    kozorozec:{
        order:12,
        name:"CAPRICORN",
        image:"kozorozec.png",
        start:"12.21",
        end:"01.20",
        popis:"Je to zemské znamenie. Sú to ľudia veľmi rodinne založení, starostliví, ale aj ťažkopádni. Ich vládnucou planétou je Saturn, ktorý ich učí k trpezlivosti. Chcú mať všetko pod kontrolou a sú materiálne založení.",
    },

    //Todo: Doplniť
}

/*
Funkcia ktorá sa spustí po kliknutí na tlačítko Potvrdenia dátumu
 */
function changeDateTime(event){
    //Toto zastaví defaultne správanie tlačítka (odoslanie formulára) - skús to zakomentovať a uvidíš ako to funguje
    event.preventDefault();


    //Todo: Vyber dátum ktorý je aktuálne zadaný v inpute - https://www.w3schools.com/jsref/prop_text_value.asp

    const input = document.getElementById("birthday").value;
    const obrazok = document.getElementById("obrazok");
    const nadpis = document.getElementById("nadpis");
    const popis = document.getElementById("popis");

    //Todo: Vytvor si objekt Date a dostaň doň aktuálny dátum - https://www.w3schools.com/js/js_dates.asp

    let selectedDate = new Date(input);
    selectedDate.setFullYear(2001);

    console.log(selectedDate);

    let signStartDate;
    let signEndDate;

   
    for(let sign of Object.values(znamenia)){
        signStartDate = new Date(sign.start);
        signEndDate = new Date(sign.end);

        if (selectedDate >= signStartDate && selectedDate <= signEndDate) {
            obrazok.src = `images/${sign.image}`;
            nadpis.innerHTML = `${sign.name}`;
            popis.innerHTML = `${sign.popis}`;
        }
        
    }


    
    
    //Todo: Porovnaj dátum s tými v premennej znamenia (pomož si premennou order)
    let objektZnamenia = getZnamenie();

    //Todo: Zmeň obrazok na aktualne znamenie

    //Todo: Zmeň Meno na aktualne znamenie

    //Todo: Zmeň popis znamenia


    //Todo: Bonus - skus spraviť nejaku animaciu (obrazok, text...)
}


/*
TATO FUNKCIA BY MALA SLUŽIŤ PRE VYBER AKTUALNEHO ZNAMENIA PODĽA ZADANEHO DATUMU
ABY SME ODDELILI LOGIKU //Todo:
 */
function getZnamenie(){
    let current;

    

    //Todo: skontroluj ktore znamenie vyhovuje datumu ( start a end) - nezabudni si upraviť aby datumi mali rovnaky format


    //Todo: Bonus -  prestupne roky poriešiť



    return current;

}

