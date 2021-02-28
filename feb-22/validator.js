const data = {
  
  "validate": function () {
    const frm = event.target
  
    // Clear errors
    all("[data-validate]").forEach(element =>{
      element.classList.remove("error")
    })
  
    let min
    let max
    const items = []
    console.log(items);

    let input = {
          name: document.getElementById("name").value,
          last_name: document.getElementById("last_name").value,
          phone: document.getElementById("phone").value,
          email: document.getElementById("email").value,
          password_confirmed: document.getElementById("password_confirmed").value
    }
    
  
    all("[data-validate]").forEach( element => {
      
      
      switch(element.getAttribute("data-validate")){ // str | int
  
        case "str":
          min = element.getAttribute("data-min")
          max = element.getAttribute("data-max")
          let total_characters = element.value.length
          console.log(total_characters)
          if( total_characters < min ||  total_characters > max){
            element.classList.add("error")    
          } 
        break
        case "int":
          console.log("validate phone")
          min = parseInt(element.getAttribute("data-min")) // number
          max = parseInt(element.getAttribute("data-max")) // number
          let phone = parseInt(element.value)
          if( ! phone < min || phone > max ){
            element.classList.add("error")
          }
        break
        case "email":
            const re = /^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$/;        // regular expression
            if( ! re.test(element.value.toLowerCase()) ){ 
              element.classList.add("error")
            }

            // }
        break
        case "password":
          console.log("validate password");
          let password_1 = document.getElementById("password")
          let password_2 = document.getElementById("password_confirmed")

          if(password_1.value === password_2.value) {
            console.log("match");
          } else {
            console.log("no match");
          }
      }
    })
    items.push(input)
  }
  }


function clear_error() {
    event.target.classList.remove("error")
}

function one(selector) {
    return document.querySelector(selector)
} // get whateever the documentselector gives to me }
function all(selector) {
    return document.querySelectorAll(selector)
}