var score = 0
var i = 1
var ans = 1

function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        Score++
        
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}




else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}




else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}





else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}





else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}





else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}






else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}






else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}





else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}






else if (ans===11){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}






	ans++; 
}



function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Who was the first holy Roman Emperor \na)Bob Marley \nb)Sheir \nc)Wilhelm The Second \nd)Charlamagne";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="When did the western Roman Empire Fall \na)476 AD\nb)3456 BC \nc)26 BC\nd)1451 AD";
    document.view.qans.value=""
}



else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who united all the Gallic tribes during the Gallic wars \na)Constatine the 11th \nb)Vercingetorix \nc)Rollo \nd)Peter The Great";
    document.view.qans.value=""
}


else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which Tsar is often seen as the modernizr of Russia \na)Alexi \nb)Ivan The Terrible  \nc)Peter The Great \nd)Nicholas The Second";
    document.view.qans.value=""
}



else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who are the Authors of the Communist Manifesto \na)Karl Marx and Friedrich Engles \nb)Vladimir Lenin and Joseph Stalin \nc)Wilhelm the first, and Bob Marley \nd)William The Bastard,and Gigivania";
    document.view.qans.value=""
}

else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which Prussian Chancellor united all the German states \na)Arnlod Heinrich \nb)Otto Von Bismarck \nc)Herbert Walter \nd)Frederick The Great";
    document.view.qans.value=""
}




else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="When was the fall of Constatinople \na)890BC \nb)863AD \nc)1453Ad \nd)247AD";
    document.view.qans.value=""
}




else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="The Mongolian Empire under...... \na)George Washington \nb)Batu Khan \nc)Dayan Khan \nd)Genghis Khan";
    document.view.qans.value=""
}



else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What year was the kingdom of the Franks split into West Francia, Central Francia, and Eastern Francia, and where? \na)843 BC, Alysia \nb)843 AD, Verdun \nc)727 AD, Londinium \nd)606 AD, Aachen";
    document.view.qans.value=""
}



else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What Germanic tribe controlled the Italian penisula after the fall of the Western Roman empire \na)The Franks \nb)The Lombards \nc)The Visigoths \nd)The Ostrogoths";
    document.view.qans.value=""
}







else if (i===11){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was in the command of the Ottoman seige of Viennia \na)Carl Segan \nb)Kara Mustafa  \nc)Sultan Osman The first \nd)Sultan Bayezid  ";
    document.view.qans.value=""
}







	i++; 
}