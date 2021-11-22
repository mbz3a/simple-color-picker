let show_color= document.getElementById('show-color');
var r = document.querySelector(':root');
let hex_elmt = document.getElementById('hex');
let rgb_elmt = document.getElementById('rgb');

const dec_to_hex = (input_num)=>{
    var inpt = Number(input_num);
    var divisor = inpt;
    let hexcode = "";
    let temp = [];
    while(divisor>0){
        let left_over = divisor%16;
        switch(left_over) {
            case 10:
                temp.push("a");
                break;
            case 11:
                temp.push("b");
                break;
            case 12:
                temp.push("c");
                break;
            case 13:
                temp.push("d");
                break;
            case 14:
                temp.push("e");
                break;
            case 15:
                temp.push("f");
                break;
            default:
                temp.push(left_over);
        }
        divisor = Math.floor(divisor/16) ;
    }
    for(var i = temp.length-1 ; i>=0  ; i-- ){
        hexcode += temp[i];
    }
    return hexcode;
}

const give_zero = (strs)=>{
    let mkNum = Number(strs);
    if( mkNum <10){
        return "0"+mkNum;
    }
    else if(strs=="a"){
        return "0"+strs;
    }
    else if(strs=="b"){
        return "0"+strs;
    }
    else if(strs=="c"){
        return "0"+strs;
    }
    else if(strs=="d"){
        return "0"+strs;
    }
    else if(strs=="e"){
        return "0"+strs;
    }
    else if(strs=="f"){
        return "0"+strs;
    }
    else if(strs==""){
        return "00";
    }
    else{
        return strs;
    }
}

const make_changes = ()=>{ 
    let allranges = document.querySelectorAll('.ranges');
    var range1 = dec_to_hex(allranges[0].value) ;
    var range2 = dec_to_hex(allranges[1].value) ;
    var range3 = dec_to_hex(allranges[2].value) ;
    range1 = give_zero(range1) ;
    range2 = give_zero(range2) ;
    range3 = give_zero(range3) ;
    r.style.setProperty('--bgcolor',"#"+range1+range3+range2 );
    hex_elmt.value = "#"+range1+range3+range2 ;
    rgb_elmt.value = "rgb("+allranges[0].value+","+allranges[2].value+","+ allranges[1].value+")"  ;
}

const make_copy = (elmt)=>{
    let str = elmt.parentElement.children[1] ;
    str.select();
    str.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(str.value);

    let modal = document.getElementById('modal');
    let timeline = document.getElementById('timeline');
    modal.style.display = "flex";
    timeline.classList.add("tl-animation");
    setTimeout( ()=>{ modal.style.display = "none"} ,3000)

}

let ranges = document.getElementsByClassName('ranges');
for(var i=0 ; i<ranges.length ; i++){
    ranges[i].addEventListener("input",function(){ 
        make_changes(); 
    });
}
make_changes();

let copyBtns = document.querySelectorAll('.btns-copy');
for(var i=0 ; i<copyBtns.length ; i++){
    copyBtns[i].addEventListener("click",function(e){ 
        let elemnt = e.currentTarget;
        make_copy(elemnt);
    });
}