


function check(call){
  var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
  if(username=="admin" && password=="12345"){
    
    call();
  }
  else{
          alert("Incorrect Username or Password");
          }
  }
function call(){
  window.open("/main.html");
}

function ajax(){
  
    var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            
            var response=JSON.parse(this.responseText);
            var output="";
           
            for(var i=0;i<response.length;i++)
            {
              output +=`<li><input type="checkbox" ${response[i].completed?' checked disabled':''} class="checkbox" > ${response[i].title}</li>`;
              
            }
            document.getElementById("print").innerHTML =output;
            //comment
            
//             var promise= new Promise(function(resolve,reject){
//               var counter=0;
//               $(".checkbox").change(function(){
                
//                 if($(this).prop("checked",true)){
//                   counter=counter+1;
//                   console.log(counter);
                  
                    
//                   if(counter==5)
//                   {
                   
//                    resolve("Done");
                  
//                   }
                  
//                 }
                
//                 else{
                  
                
//                   counter=counter-1;
//                   console.log(counter);
//                 }
//               });
           
//             });
// promise.then(function(s)
// {alert(s);});



 let promise = new Promise((resolve,reject)=>{
   var counter=0;
   $('.checkbox').change((e)=>{
     var bool=e.target;
     console.log(bool);
     if(bool.checked==true){
       counter=counter+1;
       console.log(counter);
       if(counter==5){
         resolve("Congratulations..!! You have selected five tasks.");
       }
     }
     else{
     counter=counter-1;
     console.log(counter);
    }
   })
 });
 promise.then((e)=>{
   alert(e);
 })

            //comment
            }
         }
          xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
          xhttp.send();
          
          
}












