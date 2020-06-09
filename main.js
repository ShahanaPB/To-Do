


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
            
            var promise= new Promise(function(resolve,reject){
              var counter=0;
              $(".checkbox").change(function(){
                
                if($(this).prop("checked",true)){
                  counter=counter+1;
                  console.log(counter);
                  
                    
                  if(counter==5)
                  {
                   // console.log("Done");
                   resolve("Done");
                  
                  }
                  
                }
                
                else{
                  
                //reject( counter=counter-1);
                  counter=counter-1;
                  console.log(counter);
                }
              });
           
            });
promise.then(function(s)
{alert(s);})

            //comment
            }
         }
          xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
          xhttp.send();
          
          
}












