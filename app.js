document.getElementById("button1").addEventListener("click", loadData);
document.getElementById("button2").addEventListener("click", loadEmp);


function loadData(e){
     e.preventDefault();

     const xhr = new XMLHttpRequest();
     xhr.open("GET", "employee.json", true);
     xhr.onload=function(){
          if(this.status===200){
               let html ="";
               const data = JSON.parse(this.responseText);

               html+=`<li>${data.name}</li>
               <li>${data.company}</li>
               <li>${data.Job}</li>
               `
               document.getElementById("employee").innerHTML = html;
          }
     }
     xhr.send()
}

function loadEmp(e){
     e.preventDefault();
     const url = "employees.json"

     fetch(url)
     .then(res=>res.json())
     .then(datan=>{
          let html ="";
          datan.forEach(data=>{
               html +=`
               <li>${data.name}</li>
               <li>${data.company}</li>
               <li>${data.job}</li>
               `
          })
          document.getElementById("employees").innerHTML = html;

     })
     .catch(error=>{
          console.log(error)
     })
}

/*




function loadData(e){
     e.preventDefault();
     const xhr = new XMLHttpRequest();
     xhr.open("GET", "employee.json", true);
     xhr.onload= function(){
          if(this.status===200){
               let html = "";
               const data = JSON.parse(this.responseText);
              
               html += `<li>${data.name}</li>`
              document.getElementById("employee").innerHTML = html;
          }
          
     }
     xhr.send();

}

function loadEmp(){

     fetch("employees.json")
     .then(response=>response.json())
     .then(datan=> {
          let html = "";
          datan.forEach(names=> {
          html +=`<p>${names.name}</p>`
        
     });
     document.getElementById("employees").innerHTML = html;
})
     .catch(error=>console.log(error))
          
}

     /*
fetch("employees.json")
.then(function(response){
      return response.json();
})
.then(function(datan){
     let html ="";
     datan.forEach(function(names){
          html += `<p>${names.name}</p>`
     })
     document.getElementById("employees").innerHTML = html;
}).catch(function(error){
     console.log(error)
})
*/
