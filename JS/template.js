function cardFrontTemplate(typName, pic, M, APL, GA, BF, SV, W) {

    return `
        <div class="thumbNail">
            <div class="thumbPicArea">
                <img class="thumbPic" src="${pic}"> 
            </div> 
            <div class="thumbNameArea">
                <h2>${typName}</h2>
            </div>

            <div class="thumbInfoArea">
                <div class="infoRow1">
                    <div class="letter1">M</div>
                    <div class="letter1">APL</div>
                    <div class="letter1">GA</div>
                </div>
                <div class="infoRow2">
                    <div class="number1">${M}</div>
                    <div class="number1">${APL}</div>
                    <div class="number1">${GA}</div>
                </div>
                <div class="infoRow3">
                    <div class="letter2">BF</div>
                    <div class="letter2">SV</div>
                    <div class="letter2">W</div>
                </div>
                <div class="infoRow4">
                    <div class="number2">${BF}</div>
                    <div class="number2">${SV}</div>
                    <div class="number2">${W}</div>
                </div>
            </div>   
        </div>
    `;
};

