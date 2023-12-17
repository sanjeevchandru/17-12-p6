document.write("6. inserts dashes (-) between each even number. "+"<br>");
var num=4243587564;
function test6(num){
    var n=num.toString();
    var res=[n[0]];
    console.log(n);
    for(let i=0;i<n.length;i++){
        if(n[i]%2==0 && n[i+1]%2==0){
            res.push("-",n[i+1]);
        }
        else{
            res.push(n[i+1]);
        }
    }
    return res.join("");
}
document.write(test6(num)+"<br><br>");