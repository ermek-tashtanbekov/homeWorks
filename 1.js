for(let num  = 1 ; num <= 10; num++ ){
    document.write("<div style='float: left ; max-widht : 500px; margin:0 auto; margin-right:20px; display-flex:  justify-content:center'") 
    for(let num1 = 1 ; num1 <= 10 ; num1++){
        document.write("<table >"+ "<tr>"  + num + " * " + num1 + " = " + num * num1 + "<br>" + "</tr>" +"</table>");
    }
  document.write("</div>")
}