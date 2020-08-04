//function loadjson(file,callback)
//{
//	var xhr= new XMLHttpRequest();
//	xhr.overrideMimeType("application/json");
//	xhr.open("GET",file,true);
//	xhr.onreadystatechange=function()
//	{
//		if(xhr.readyState===4 && xhr.status=="200")
//		{
//			callback(xhr.responseText);
//		}
//	};
//	xhr.send(null);
//}

//loadjson("data.json",function(text){
//	var data = JSON.parse(text);
//	console.log(data);
//	basic(data.details);
//	careerinfo(data.careerobjective);
//	education(data.educationalqualification);
//	skills(data.technicalskills);
//})

function loadjson(file)
{
  return new Promise((resolve,reject)=>{
  	return fetch(file).then(response=>{
  		if(response.ok)
  		{
  			resolve(response.json());
  		}
  		else
  		{
  			reject(new Error('error'));
  		}
  	})
  })
}

 var newfile = loadjson("data.json");
 newfile.then(data=>{
 	console.log(data);
 		basic(data.details);
careerinfo(data.careerobjective);
education(data.educationalqualification);
skills(data.technicalskills);
 })








var child1=document.querySelector(".child1");

function basic(det){
	var name = document.createElement("h1");
	name.textContent = det.name;
	child1.appendChild(name);

		var image = document.createElement("img");
         image.src = det.image;
	child1.appendChild(image);
	 child1.appendChild(document.createElement("br"));

    var email = document.createElement("a");
    email.href="mailto:lav@gmail.com";
    email.textContent=det.email;
    child1.appendChild(email);
     
    var number = document.createElement("h4");
    number.href="tel:+91555555";
    number.textContent=det.number;
    child1.appendChild(number);

    var address = document.createElement("h2");
    address.textContent = "address";
    child1.appendChild(address);

    child1.appendChild(document.createElement("hr"));
}

var child2 = document.querySelector(".child2");
function careerinfo(edu)
{
	var heading1 = document.createElement("h2");
	heading1.textContent="Career Objective";
	child2.appendChild(heading1);

	child2.appendChild(document.createElement("hr"));

	var heading2 = document.createElement("p");
	heading2.textContent=edu.info;
	child2.appendChild(heading2);
}

function education(edu)
{
	var heading3 = document.createElement("h2");
	heading3.textContent="Educational Qualification";
	child2.appendChild(heading3);

	child2.appendChild(document.createElement("hr"));

	 var table1 =document.createElement("table");
	 table1.border="1";
	 child2.appendChild(table1);

	 tabledata="";
	 for(i=0;i<edu.length;i++)
	 {
	 	tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+"</td><td>"+edu[i].percentage+"</td></tr>"
	 }
	 table1.innerHTML=tabledata;

}

function skills(skillinfo)
{
   var hd = document.createElement("h2");
    hd.textContent="Technical Skills";
    child2.appendChild(hd);

	child2.appendChild(document.createElement("hr"));

    for(i=0;i<skillinfo.length;i++)
    {
    	var title= document.createElement("h3");
    	title.textContent=skillinfo[i].title;
    	child2.appendChild(title);

    	var skillul = document.createElement("ul");
    	var skillli = document.createElement("li");
    	skillli.textContent=skillinfo[i].info;
    	skillul.appendChild(skillli);
    	child2.appendChild(skillul);
    }


}