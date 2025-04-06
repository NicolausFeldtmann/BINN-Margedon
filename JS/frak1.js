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

        contentRef.innerHTML += cardFrontTemplate(typName, pic, M, APL, GA, BF, SV, W);
    }
}