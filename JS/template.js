function cardFrontTemplate(id, typName, pic, M, APL, GA, BF, SV, W) {

    return `
        <div class="thumbNail" data-id="${id}" onclick="renderCardWeapons(${id})">
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

function cardDetailsTemplate(waepPic1, waepPic2, waepPic3, waepPic4, waepPic5, waepPic6, waepPic7, waepPic8, waepPic9, waepPic10, weap1, weap2, weap3, weap4, weap5, weap6, weap7, weap8, weap9, weap10) {

    return `
        <div class="cardDetails">
            <table class="waeponTable">
                <tr>
                    <th></th>
                    <th>NAME</th>
                    <th>A</th>
                    <th>BS/WS</th>
                    <th>D</th>
                </tr>
                <tr class="white">
                    <td><img class="rowIcon" src="${waepPic1}"></td>
                    <td>${weap1}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="lightGrey">
                    <td><img class="rowIcon" src="${waepPic2}"></td>
                    <td>${weap2}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <trclass="white">
                    <td><img class="rowIcon" src="${waepPic3}"></td>
                    <td>${weap3}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="lightGrey">
                    <td><img class="rowIcon" src="${waepPic4}"></td>
                    <td>${weap4}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <trclass="white">
                    <td><img class="rowIcon" src="${waepPic5}"></td>
                    <td>${weap5}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="lightGrey">
                    <td><img class="rowIcon" src="${waepPic6}"></td>
                    <td>${weap6}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="white">
                    <td><img class="rowIcon" src="${waepPic7}"></td>
                    <td>${weap7}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="lightGrey">
                    <td><img class="rowIcon" src="${waepPic8}"></td>
                    <td>${weap8}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="white">
                    <td><img class="rowIcon" src="${waepPic9}"></td>
                    <td>${weap8}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="lightGrey">
                    <td><img class="rowIcon" src="${waepPic10}"></td>
                    <td>${weap10}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    `;
}; 

