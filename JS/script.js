
var activity = document.getElementById("activity")
var button = document.getElementById("submit")
var output = document.getElementById("output")
var clear = document.getElementById("clear")
var clearOutput = document.getElementById("clearOutput")



var checkCounter = 0
button.addEventListener("click", function  submitClick(){

    if(activity.value.length > 50) {
        alert("Maximum 50 characters!")
    }

    else if(activity.value.length === 0) {
        alert("You must input a task!")
    }

    else {


        var inside = document.getElementById("inside")
        var list = document.createElement("li")
        list.className = "loop"
       
        var activityP = document.createElement("h2")
        activityP.innerHTML = activity.value
 
  
        var check = document.createElement("img")
        check.src = "./img/checkmark.png"
        check.id = "checkid"

        var erase = document.createElement("img")
        erase.src = "./img/bin.png"
        erase.className = "delete"
        
        var rightCounter = document.getElementById("rightCounter")
        var leftCounter = document.getElementById("leftCounter")
        
        /* LIST CSS */
        list.style.display = "flex"
        list.style.justifyContent = "flex-start"
        list.style.border = "2px solid #484B50"
        list.style.paddingBottom = "5px"
        list.style.transition = "2s ease-out"
        list.style.borderRadius = "10px"
        list.style.margin = "7px"
        // list.style.border = "2px solid black"

        check.style.width = "30px"
        check.style.height = "30px"
        check.style.opacity = "0.5"
        check.style.marginTop = "7px"
        check.style.marginRight = "10px"

        erase.style.width = "30px"
        erase.style.height = "30px"
        erase.style.opacity = "0.5"
        erase.style.marginRight = "20px"
        erase.style.marginTop = "7px"

         
        activityP.style.margin = "auto"
        activityP.style.marginLeft = "25px"
        activityP.style.fontSize = "20px"
        activityP.style.fontWeight = "500"
        
        
        /* APPENDING LIST TO DIV */           
        list.appendChild(activityP) 
        list.appendChild(check)
        list.appendChild(erase)

        inside.appendChild(list)
        rightCounter.innerHTML = inside.getElementsByTagName("li").length


        /* CHECKMARK BUTTON */
        check.addEventListener("mouseover", function() {
            check.style.opacity = "1"
            check.style.cursor = "pointer"
        })

        
        var checkCall = false
        check.addEventListener("click", function() {
            if(checkCall === false) {
                checkCounter++
                leftCounter.innerHTML = checkCounter
                check.style.opacity = "1"
                list.style.backgroundColor = "lightgreen"
                activityP.style.textDecoration = "line-through double" 
                checkCall = true
            }

            else {
                checkCounter--
                leftCounter.innerHTML = checkCounter
                list.style.backgroundColor = ""
                checkCall = false
                activityP.style.textDecoration = ""
            }
        })


        check.addEventListener("mouseout", function() {
            if(checkCall === false) {
                check.style.opacity = "0.65"      
            }
            else{
                check.style.opacity = "1"
            }

        })
        
        list.addEventListener("mouseover", function() {
            if(checkCall === false) {
               list.style.backgroundColor = "#F2F2F2"
               list.style.transition = "background-color 0.2s ease-out"
            }
        })

        
        list.addEventListener("mouseout", function() {
            if(checkCall === false) {
               list.style.backgroundColor = ""
            }
        })


        /* ERASE BUTTON */

        erase.addEventListener("mouseover", function(){
            erase.style.opacity = "1"
            erase.style.cursor = "pointer"
        })
        
        erase.addEventListener("mouseout", function(){
            erase.style.opacity = "0.65"
        })  

        erase.addEventListener("click", function(){
            var item = this.parentNode.parentNode
            item.removeChild(list)
            
            rightCounter.innerHTML = inside.getElementsByTagName("li").length
            
            if(checkCall === true) {
                checkCounter--
                if(checkCounter < 0 ){
                    checkCounter = 0
                }
                leftCounter.innerHTML = checkCounter
            }
         
        })

        clearOutput.addEventListener("click", function() {
            inside.removeChild(list)
            rightCounter.innerHTML = inside.getElementsByTagName("li").length
            checkCounter = 0
            leftCounter.innerHTML = checkCounter
        })
        

        /* ERASES INPUT AFTER SUBMIT */
        activity.value = ""
        hour.value = ""
        minute.value = ""   
        hour.style.backgroundColor = ""
        minute.style.backgroundColor = "" 
    }
})





clear.addEventListener("click", function(){

    activity.value = ""
    hour.value = ""
    minute.value = " "
})



