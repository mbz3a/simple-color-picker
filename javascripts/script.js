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
const make_changes = (elemts)=>{ 
    console.log(elemts.value);
}


// let a = dec_to_hex(255);
// console.log(a);

let ranges = document.getElementsByClassName('ranges');

for(var i=0 ; i<ranges.length ; i++){
    ranges[i].addEventListener("input",function(e){ 
        make_changes(e.currentTarget) 
    });
}

