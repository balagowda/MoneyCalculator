
function total(sum1){
    return eval(sum1);
}

function print(para,val){
    let j=0
    for(i of para){
        let pr = document.getElementsByName(i)[0],message;
        if(val[j]!==0){  
            message = "total = "+val[j];
            pr.innerHTML = message;
            j++;
        }
        else{
            message = '';
            pr.innerHTML = message;
            j++;
        }
    }

}

function grand(su){
    let pr1 = document.getElementsByName('gran')[0],message;
    message = "Grand total = "+su;
    pr1.innerHTML = message;
}

function sum(){
    let ten = document.getElementById("ten").value;
    let twenty = document.getElementById('twenty').value;
    let fifty = document.getElementById('fifty').value;
    let hundred = document.getElementById('hundred').value;
    let twohundred = document.getElementById('twohundred').value;
    let fivehundred = document.getElementById('fivehundred').value;
    let twothousand = document.getElementById('twothousand').value;

    ten = total(ten*10);
    twenty = total(twenty*20);
    fifty = total(fifty*50);
    hundred = total(hundred*100);
    fivehundred = total(fivehundred*500);
    twohundred = total(twohundred*200);
    twothousand = total(twothousand*2000);

    let sum2 = total(ten+twenty+fifty+hundred+twohundred+fivehundred+twothousand);
    let nam = ['ten','twenty','fifty','hundred','twohundred','fivehundred','twothousand']
    let nam1 = [ten,twenty,fifty,hundred,twohundred,fivehundred,twothousand]
    print(nam,nam1);
    grand(sum2);
}