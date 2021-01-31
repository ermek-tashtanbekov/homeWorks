// for(let num  = 1 ; num <= 10; num++ ){
//     document.write("<div style='float: left ; max-widht : 500px; margin:0 auto; margin-right:20px; display-flex:  justify-content:center'") 
//     for(let num1 = 1 ; num1 <= 10 ; num1++){
//         document.write("<table >"+ "<tr>"  + num + " * " + num1 + " = " + num * num1 + "<br>" + "</tr>" +"</table>");
//     }
//   document.write("</div>")
// }

function laptop(mouse){
  document.write(mouse + "<br>");
}

let komp ={
    hay : "это ноотбук" + " " + 45000,
    color: "Bleck",
    kg: 2,
    insade :{
    clerk:  3,
    dumma: 15.5,
    
    }

};
// laptop(komp.hay);
// laptop(komp.color);
// laptop(komp["kg"])
// laptop(komp["insade"]["clerk"]);
// laptop(komp.insade["dumma"]);


// komp.diss = "notebook";
// if("diss" in komp){
//   laptop("I know this" + " " +  komp.diss);
// }
// else{
//   laptop("I don't now this notebob");
// }

// for(let close in komp){
//   laptop(close + ": " + komp[close]);
// }
// for(let close in komp){
//   if(typeof komp[close] !='object' || typeof komp[close] != "function");
//   laptop(close + ":" + komp[close]);
// }