function initFrak1() {
    includeHTML();
    renderCardPics();
}

function renderCardPics() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let i = 0; i < fraction.length; i++) {
        let typName = fraction[i].type;
        let pic = fraction[i].typePic;
        let M = fraction[i].M;
        let APL = fraction[i].APL;
        let GA = fraction[i].GA;
        let BF = fraction[i].BF;
        let SV = fraction[i].SV;
        let W = fraction[i].W;
        let id = 

        contentRef.innerHTML += cardFrontTemplate(i, typName, pic, M, APL, GA, BF, SV, W);
    }
}

function renderCardWeapons(id) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    // Anzeigen Sie nur die relevanten Details für die Karte mit der übergebenen ID
    if (id < fraction.length) {
        let waepPic1 = fraction[id].wepIcon1;
        let waepPic2 = fraction[id].wepIcon2;
        let waepPic3 = fraction[id].wepIcon3;
        let waepPic4 = fraction[id].wepIcon4;
        let waepPic5 = fraction[id].wepIcon5;
        let waepPic6 = fraction[id].wepIcon6;
        let waepPic7 = fraction[id].wepIcon7;
        let waepPic8 = fraction[id].wepIcon8;
        let waepPic9 = fraction[id].wepIcon9;
        let waepPic10 = fraction[id].wepIcon10;
        
        let weap1 = fraction[id].weap1;
        let weap2 = fraction[id].weap2;
        let weap3 = fraction[id].weap3;
        let weap4 = fraction[id].weap4;
        let weap5 = fraction[id].weap5;
        let weap6 = fraction[id].weap6;
        let weap7 = fraction[id].weap7;
        let weap8 = fraction[id].weap8;
        let weap9 = fraction[id].weap9;
        let weap10 = fraction[id].weap10;

        contentRef.innerHTML += cardDetailsTemplate(
            waepPic1, waepPic2, waepPic3, waepPic4, 
            waepPic5, waepPic6, waepPic7, waepPic8, 
            waepPic9, waepPic10, weap1, weap2, 
            weap3, weap4, weap5, weap6, 
            weap7, weap8, weap9, weap10
        );
    } else {
        contentRef.innerHTML = "<p>Details nicht verfügbar.</p>";
    }
}

function showDetails(id) {
    renderCardWeapons(id);
}

