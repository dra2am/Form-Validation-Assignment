function init(){
    //access ids
    const firstName = document.getElementById("firstname")
    const lastName = document.getElementById("lastname")
    const email = document.getElementById("email")
    const phone = document.getElementById("phone")
    const students = document.getElementById("students")
    //handles submission
    var canSubmit = false;
    
    function validateData (){
        //the form
        const form = document.getElementById("info")
        //if id = "id name" execute validation for that specific field
        
        //for first and last name...
        if(firstName){
            const label = document.getElementById("last")
            //check that input is not empty,
            //check that input contains only letters
           if(firstName.value.match(/^\D+\D$/)){
                //check icon
                const check = document.createElement("i")
                check.className = "fas fa-check-square fa-2x"
                check.id = "check"
                const getCheck = document.getElementById("check")
                canSubmit = true 

                if(!form.contains(getCheck)){
                    form.insertBefore(check, label)    
                    if(form.contains(document.getElementById("wrong"))){
                        document.getElementById("wrong").innerText = ""
                        form.removeChild(document.getElementById("wrong"))
                    }               
                } 
                
           } else {
                //x icon
                const wrong = document.createElement("i")
                wrong.className = "fas fa-times-circle fa-2x"
                wrong.id = "wrong"
                const getWrong = document.getElementById("wrong")
                canSubmit = false

                if(!form.contains(getWrong)){
                    form.insertBefore(wrong, label)
                    wrong.innerText = "Enter letters only!"
                    if(form.contains(document.getElementById("check"))){
                        form.removeChild(document.getElementById("check"))
                    }
                }
           }
            
        }

        //for last name...
        if(lastName){
            const label = document.getElementById("mail-label")
            if(lastName.value.match(/^\D+\D$/)){

                //check icon
                const check = document.createElement("i")
                check.className = "fas fa-check-square fa-2x"
                check.id = "check2"
                const getCheck = document.getElementById("check2")
                canSubmit = true
          
                if(!form.contains(getCheck)){
                    form.insertBefore(check, label)    
                              
                    if(form.contains(document.getElementById("wrong2"))){
                        document.getElementById("wrong2").innerText = ""
                        form.removeChild(document.getElementById("wrong2"))
                    }                     
                }   
            } else {
                //x icon
                const wrong = document.createElement("i")
                wrong.className = "fas fa-times-circle fa-2x"
                wrong.id = "wrong2"
                const getWrong = document.getElementById("wrong2")
                canSubmit = false
          
                if(!form.contains(getWrong)){
                    form.insertBefore(wrong, label)
                    wrong.innerText = "Enter letters only!"
                    if(form.contains(document.getElementById("check2"))){
                        form.removeChild(document.getElementById("check2"))
                    }
                 }
            }
        }

        //for email...
        if(email){
            const label = document.getElementById("phone-label")
            //check for chara@chara.chara
            if(email.value.match(/^\w+@\w+\.com$/)){
                 //check icon
                const check = document.createElement("i")
                check.className = "fas fa-check-square fa-2x"
                check.id = "check3"
                const getCheck = document.getElementById("check3")
                canSubmit = true
                          
                if(!form.contains(getCheck)){
                    form.insertBefore(check, label)    
                                              
                    if(form.contains(document.getElementById("wrong3"))){
                        document.getElementById("wrong3").innerText = ""
                        form.removeChild(document.getElementById("wrong3"))
                    }                       
                }   
            } else {
                //x icon
                const wrong = document.createElement("i")
                wrong.className = "fas fa-times-circle fa-2x"
                wrong.id = "wrong3"
                const getWrong = document.getElementById("wrong3")
                canSubmit = false
                          
                 if(!form.contains(getWrong)){
                    form.insertBefore(wrong, label)
                     wrong.innerText = "Check format!"     
                    if(form.contains(document.getElementById("check3"))){
                        form.removeChild(document.getElementById("check3"))
                    }
                }
            }
                
        }

        //for phone...
        if(phone){
            const label = document.getElementById("student-label")
            //check for ###-###-####
            if(phone.value.match(/\d\d\d-\d\d\d-\d\d\d\d/)){
                //check icon
                const check = document.createElement("i")
                check.className = "fas fa-check-square fa-2x"
                check.id = "check4"
                const getCheck = document.getElementById("check4")
                canSubmit = true
          
                if(!form.contains(getCheck)){
                    form.insertBefore(check, label)    
                              
                    if(form.contains(document.getElementById("wrong4"))){
                        document.getElementById("wrong4").innerText = ""
                        form.removeChild(document.getElementById("wrong4"))
                    }                     
                }   
            } else {
                //x icon
                const wrong = document.createElement("i")
                wrong.className = "fas fa-times-circle fa-2x"
                wrong.id = "wrong4"
                const getWrong = document.getElementById("wrong4")
                canSubmit = false
          
                if(!form.contains(getWrong)){
                    form.insertBefore(wrong, label)
                    wrong.innerText = "Wrong format!"
                    if(form.contains(document.getElementById("check4"))){
                        form.removeChild(document.getElementById("check4"))
                    }
                 }
            }

        }

        //for student address
        if(students){
            if(students.value.match(/^http:\/\/.*\~.*/)){
                //check icon
                const check = document.createElement("i")
                check.className = "fas fa-check-square fa-2x"
                check.id = "check5"
                const getCheck = document.getElementById("check5")
                canSubmit = true
          
                if(!form.contains(getCheck)){
                    form.appendChild(check)  
                              
                    if(form.contains(document.getElementById("wrong5"))){
                        document.getElementById("wrong5").innerText = ""
                        form.removeChild(document.getElementById("wrong5"))
                    }                     
                }   
            } else {
                //x icon
                const wrong = document.createElement("i")
                wrong.className = "fas fa-times-circle fa-2x"
                wrong.id = "wrong5"
                const getWrong = document.getElementById("wrong5")
                canSubmit = false
          
                if(!form.contains(getWrong)){
                    form.appendChild(wrong)
                    wrong.innerText = "Check website format"
                    if(form.contains(document.getElementById("check5"))){
                        form.removeChild(document.getElementById("check5"))
                    }
                 }
            }

        }
    }

   //Handles form submit
   const form = document.getElementById("info")
   form.addEventListener("submit",(event)=>{
       if(!canSubmit){
           event.preventDefault()
           alert("Cannot Submit!")
       } else if (canSubmit){
            //handle survey outcome
               const isActionChecked = document.getElementById("action").checked
               const isHorrorChecked = document.getElementById("horror").checked
               const isAnimatedChecked = document.getElementById("animated").checked
               const isLiveChecked = document.getElementById("live").checked
               //wont work without clg below
               console.log("")
               if(isActionChecked && isAnimatedChecked){
                   //the idea is that it will add an img representing the selections you made
                   const img = document.createElement("img")
                   img.src = "../img/myhero.jpg"
                   form.appendChild(img)
                   console.log("My Hero")
               } else
               if(isActionChecked && isLiveChecked){
                   console.log("Avengers")
               } else
               if(isHorrorChecked && isAnimatedChecked){
                   console.log("Coraline")
               } else
               if(isHorrorChecked && isLiveChecked){
                   console.log("Hereditary")
               } else {
                   event.preventDefault()
                   alert("Please answer the survey")
               }
       }

   })

    //Add hints
    firstName.addEventListener("focus", ()=>{
        //get and create elements
        const form = document.getElementById("info")
        const input = document.getElementById("last")
        const hint = document.createElement("p")
        hint.id = "nameHint"
        //add hint
        hint.textContent = "Please enter your first name"
        form.insertBefore(hint, input)
        
    })

    firstName.addEventListener("blur",()=>{
        const hint = document.getElementById("nameHint")
        hint.remove()
        validateData()
    })

    lastName.addEventListener("focus", ()=>{
        //get and create elements
        const form = document.getElementById("info")
        const input = document.getElementById("email-label")
        const hint = document.createElement("p")
        hint.id = "lastHint"
        //add hint
        hint.textContent = "Please enter your last name"
        form.insertBefore(hint, input)
        
    })

    lastName.addEventListener("blur",()=>{
        const hint = document.getElementById("lastHint")
        hint.remove()
        validateData()
    })

    email.addEventListener("focus", ()=>{
        //get and create elements
        const form = document.getElementById("info")
        const input = document.getElementById("phone-label")
        const hint = document.createElement("p")
        hint.id = "emailHint"
        //add hint
        hint.textContent = "Please enter a valid email (name@email.com)"
        form.insertBefore(hint, input)
        
    })

    email.addEventListener("blur",()=>{
        const hint = document.getElementById("emailHint")
        hint.remove()
        validateData()
    })

    phone.addEventListener("focus", ()=>{
        //get and create elements
        const form = document.getElementById("info")
        const input = document.getElementById("student-label")
        const hint = document.createElement("p")
        hint.id = "phoneHint"
        //add hint
        hint.textContent = "Please enter a valid phone number (xxx-xxx-xxxx)"
        form.insertBefore(hint, input)
        
    })

    phone.addEventListener("blur",()=>{
        const hint = document.getElementById("phoneHint")
        hint.remove()
        validateData()
    })

    students.addEventListener("focus", ()=>{
        //get and create elements
        const form = document.getElementById("info")
        const hint = document.createElement("p")
        hint.id = "studentHint"
        //add hint
        hint.textContent = "Enter http address (http://students.cah.ucf.edu/~novatnak)"
        form.appendChild(hint)
        
    })

    students.addEventListener("blur",()=>{
        const hint = document.getElementById("studentHint")
        hint.remove()
        validateData()
    })

    


}

window.addEventListener('load',init,false);