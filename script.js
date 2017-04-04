
	var moveList =	function(item)
	{

		  //var addList = document.getElementById("listFlexId");
              //addList.removeAttribute("id");
              //addList.setAttribute("id", "reverseAnimation");
     
      var tFinal = document.createTextNode(item.parentElement.textContent);
      var liFinal = document.createElement("li");
          liFinal.setAttribute("class", "animat");


      var containerFinal= document.getElementById("finalList"); 
    
      // var container= document.getElementById("finalList") = "<li>"+item.parentElement.innerHTML + "<button>"+  "Clear"+ "</button> </li>";
     
          liFinal.appendChild(tFinal);

          containerFinal.appendChild(liFinal);
          //item.parentNode.removeChild(item);

          var DelButton = document.createElement('input');
          DelButton.type = "button";
          DelButton.id = "delButton";
          DelButton.value="Delete";
          DelButton.setAttribute("onclick", "DelFinalList(this)");

          liFinal.appendChild(DelButton);

          item.parentElement.style.display= "none";

 
    }


 var DelFinalList =(item) => {

             item.parentElement.style.display= "none";
 };

    

	var addToList = () => {	
    
    var input = document.getElementById("info").value;
    var t = document.createTextNode(input);
    var li = document.createElement("li");
        li.setAttribute("class", "listFlex");
        li.setAttribute("id", "listFlexId");
     
    var container=  document.getElementById("initialList");
   
        li.appendChild(t);

    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "checkBox";
        checkbox.setAttribute("onclick", "moveList(this)");

        li.appendChild(checkbox);
        container.appendChild(li);
   //container.appendChild(checkbox);

    document.getElementById("info").value= " ";

    };


    document.getElementById("btn").onclick = addToList; 

   //document.getElementById("checkBox").onclick = move();
  