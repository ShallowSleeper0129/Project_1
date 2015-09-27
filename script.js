function calculate(){
	var points = 0; 
	var i = 0; 
    
    var groups = ["a", "b", "c", "d", "e", "f", "g", "h","i","j"]; 
    
    for(var j = 0; j < groups.length; j++){

        var group1 = document.getElementsByName(groups[j]); 

        for(i = 0; i < group1.length; i++){

            if(group1[i].checked){
                var val = group1[i].value;
                val = Number(val); 
                points += val
            }
        }
    }

    var killer; 

    if(points == 10)
    	killer = "Jason"; 
    else if (points >= 11 && points <= 20)
    	killer = "Chucky" 
    else if(points > 21 && points <= 31 )
    	killer = "Freddy";
    else
    	killer = "Pennywise the Dancing Clown"; 
	console.log(points);

    var loc = document.getElementById("image"); 

    switch(killer){
    	case "Jason": 
    		loc.src = 'http://www.funzine.hu/wp-content/uploads/2014/09/jason-voorhees-friday-the-13th.jpg';
			break;
    	case "Chucky": 
    		loc.src = 'http://images5.fanpop.com/image/photos/29200000/Bride-of-Chucky-bride-of-chucky-29210988-1024-576.png';
    		break; 
		case "Freddy":
			loc.src = 'http://cdn.business2community.com/wp-content/uploads/2014/11/3516858-freddy-freddy-krueger-33746737-500-614.jpg';
			break;
		case "Pennywise the Dancing Clown":
			loc.src = 'http://media2.theranking.com/card/106074/image/4ba8ea30b76e168517e5b5a22a4a825f/resize_image.jpg';
			break;
    }
}