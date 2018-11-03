/*global markets */
/*global goodsInfo*/
/*global time */
/*global weight*/
/*global dimension*/
/*global $*/
/*global vatStatus*/
/*global competitors*/
/*global services*/
/*global collection*/
/*global addInfo*/
/*global opp*/
/*global vol*/


let oppinfo = document.getElementById("oppid");
let volume = document.getElementById("volumes");
let compile = document.getElementById("compile");
let businessinfo = document.getElementsByClassName("businesstype");
let businessType = document.getElementById("customertype");
let marketsinfo = document.getElementsByClassName("market");
let arr = [];
let businfo = document.getElementById("businesstype");
let dimensions = [];
let trafficsplit = [];
let sizeInfo = document.getElementsByClassName("size");
let trafficPercentage = document.getElementById("letterpercentage");
let serviceSelect = document.getElementsByClassName("services");
let serviceArr = [];
let collections = document.querySelectorAll(".collection");
let visible = document.getElementsByClassName("volumePercentage");
let lett = document.getElementById("letter");
let lgl = document.getElementById("lrgletter");
let smp = document.getElementById("smparcel");
let mdp = document.getElementById("medparcel");
let addinfo = document.getElementById("info");
let box = document.getElementById("addInfo");
let email = document.getElementById("email");
let table = document.getElementById("priceTable");
let press = document.getElementById("compile");

    $("#tpstpn").click(function(event){
    $(".tracked").fadeToggle(250);
});


$(".size").click(function(){
    for(let i = 0; i < sizeInfo.length; i++){
        if(sizeInfo[i].checked){
           visible[i].style.display =  "inline"; 
        } else {
            visible[i].style.display = "none";
        }
    }
})
    
    const businessInfo = () => {
        for (let i =0; i < businessinfo.length; i++){
            if(businessinfo[i].checked){
                businessType.textContent = businessinfo[i].value;
            }
        }
        
        for(let i = 0; i < marketsinfo.length; i++){
            if(marketsinfo[i].checked){
                arr.push(marketsinfo[i].value);
                markets.textContent = arr.toString();
            }
        }
        
        let type = $("#typeselect").val();
            $("#businesstype").text(type);
        
        let vat = document.getElementById("vatstat").value;
        vatStatus.textContent = vat;
        
        let comp = document.getElementById("competitor").value;
        competitors.textContent = comp;
        
    }

    const details = () => {
        let details = document.getElementById("goods").value;
        goodsInfo.textContent = details;
        
        let volumes = document.getElementById("volumes").value;
        vol.textContent = volumes;
        let frequency = document.getElementById("frequency").value;
        time.textContent = frequency;
        
        let averageWeight = document.getElementById("weights").value;
        weight.textContent = (averageWeight + "g");
        
        for(let i = 0; i < sizeInfo.length; i++) {
            let split = [lett.value, lgl.value, smp.value, mdp.value];
            let per = (volume.value/100)*(split[i]);
            if(sizeInfo[i].checked){
                dimensions.push
                    (sizeInfo[i].value 
                     + " " 
                     + "(" + per.toFixed(0) 
                     + ")" 
                    );
                dimension.textContent = dimensions.toString();
            }
            
        }
//        alert(split);
        
        
    }

    const serviceChoice = () => {
        for(let i = 0; i < serviceSelect.length; i++) {
            if(serviceSelect[i].checked) {
                serviceArr.push(serviceSelect[i].value);
                services.textContent = serviceArr.toString();
            }
        }
        
        for(let i = 0; i < collections.length; i++){
            if(collections[i].checked) {
                collection.textContent = collections[i].value;
            }
        }
        
        let tracked24 = $("#tracked24").val();
        $("#tps").text("£" + tracked24);
        
        let tracked48 = $("#tracked48").val();
        $("#tpn").text("£" + tracked48);
    }

    const moreInfo = () => {
        let testInfo = document.getElementById("info").value;
        addInfo.textContent = testInfo;
    }

// Email code below

// const emailcheck = () => {
//     let test = document.querySelectorAll(".name");
//     let title = document.getElementById("title");
//     let name = document.getElementById("cusName");
    
//     test[0].classList.add("hide");
//     title.textContent = test[0].value;
//     test[1].classList.add("hide");
//     name.textContent = test[1].value;

//     switch(serviceArr[0]){
//         case "BPL":
//             choice.textContent = "1st and 2nd class service";
//             break;
//         case "CRL":
//             choice.textContent = "Royal Mail 24/48";
//             break;
//         case "Tracked":
//             choice.textContent = "Royal Mail Tracked 24/48";
//             break;
//         case "International":
//             choice.textContent = "International Business services";
//             break;
//         case "SD":
//             choice.textContent = "Guaranteed Next day Special Delivery";
//             break;
//         default:
//             choice.textContent = "Several Royal Mail services"
//         }
// }


//RUN CODE ON CLICK
$("#compile").click(function(){
    opp.textContent = oppinfo.value;
    businessInfo();
    details();
    serviceChoice();
    moreInfo();
    // emailcheck();
})

//RUN CODE ON KEYPRESS
document.addEventListener("keypress", function(event){
    if(event.keyCode === 13) {
        opp.textContent = oppinfo.value;
        businessInfo();
        details();
        serviceChoice();
        moreInfo();
        emailcheck();
    }
});

// console.log("JS Connected!");