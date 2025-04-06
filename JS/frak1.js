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
    for (let i = 0; i < fraction.length; i++) {
        let waepPic1 = fraction[i].wepIcon1;
        let waepPic2 = fraction[i].wepIcon2;
        let waepPic3 = fraction[i].wepIcon3;
        let waepPic4 = fraction[i].wepIcon4;
        let waepPic5 = fraction[i].wepIcon5;
        let waepPic6 = fraction[i].wepIcon6;
        let waepPic7 = fraction[i].wepIcon7;
        let waepPic8 = fraction[i].wepIcon8;
        let waepPic9 = fraction[i].wepIcon9;
        let waepPic10 = fraction[i].wepIcon10;
        let weap1 = fraction[i].weap1;
        let weap2 = fraction[i].weap2;
        let weap3 = fraction[i].weap3;
        let weap4 = fraction[i].weap4;
        let weap5 = fraction[i].weap5;
        let weap6 = fraction[i].weap6;
        let weap7 = fraction[i].weap7;
        let weap8 = fraction[i].weap8;
        let weap9 = fraction[i].weap9;
        let weap10 = fraction[i].weap10;

        contentRef.innerHTML += cardDetailsTemplate(id, waepPic1, waepPic2, waepPic3, waepPic4, waepPic5, waepPic6, waepPic7, waepPic8, waepPic9, waepPic10, weap1, weap2, weap3, weap4, weap5, weap6, weap7, weap8, weap9, weap10);
    }
}
function showDetails(id) {
    renderCardWeapons(id);
}

