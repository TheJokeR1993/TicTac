const btn_start = document.querySelector('.btn_start')
const inp_1 = document.querySelector('.inp_1')
const inp_2 = document.querySelector('.inp_2')
 const error = document.querySelector('.error')
 const btn_start_robot = document.querySelector('.btn_start_robot')
const div_complication = document.querySelector('.div_complication')
const container_selec = document.querySelector('.container_selec')
const reg = /[A-z]{1}([A-Z]+)?\w+/

btn_start.addEventListener('click',e=>{
    input_error(inp_1)
  
    if(!error.children[0]){
        
        input_error(inp_2)
    }
    
   
    if(!error.innerHTML){
        location.href = location.href.split('first.html').join('') + `index.html?${inp_1.value}&${inp_2.value}`
    } 
})

btn_start_robot.addEventListener('click',e=>{
   
    input_error(inp_1)
    if(!error.innerHTML.trim()){
        complicat()
    } 
  
})

function complicat(){
    div_complication.classList.add('active')
    container_selec.innerHTML=`
        <div class="div_complication">
          <button value="exit"  onclick="exit(this)">x</button>
        <button value="easy"  onclick="exit(this)">easy</button>
        <button value="normal"  onclick="exit(this)">normal</button>
        <button value="hard"  onclick="exit(this)">hard</button>
  
        </div>
       
         
    
    `
}

function exit(item){
    
    if(item.value=== 'exit'){
        // console.log(item);
        
        // item.parentElement.style.zIndex ='1'
        item.parentElement.remove()
        div_complication.classList.remove('active')


    }else{
        location.href = location.href.split('first.html').join('') + `index.html?${inp_1.value}&Robot&${item.value}`

    }
 
}



inp_2.addEventListener('click',e=>{
    e.target.value = ''
})




function input_error(arg){

    console.log(arg);
    if(!arg.value){
        error.innerHTML = `<h3>Name cannot be empty</h3>`
       return error_or_not(true,arg)
    } else if(arg.value.length<3){
        error.innerHTML = `<h3>Name is too short</h3>`
       return error_or_not(true,arg)
    } else if(+arg.value){
        error.innerHTML = `<h3>Name must not be a number</h3>`
       return error_or_not(true,arg)
    } else if(!reg.test(arg.value)){
        error.innerHTML = `<h3>Use English</h3>`
       return error_or_not(true,arg)
    } else if(arg.value.match(reg)[0]!==arg.value.match(reg).input){
        +arg.value.match(reg).input[0]
        ? error.innerHTML = `<h3>Name cannot start with a number</h3>`
        : error.innerHTML = `<h3>Use English </h3>`
       return error_or_not(true,arg)
    } else if(arg.value.length>9){
        error.innerHTML = `<h3>Name is too long</h3>`
        return  error_or_not(true,arg)
    } else{
         return error_or_not(false,arg)
    }
    
}

function error_or_not (isBool,arg){
    if(isBool){
       
        arg.style.border = '2px solid red'
        error.style.padding= '10px'
    }else{
        if(arg){
            error.innerHTML=""
            arg.style.border = '1px solid black'
            error.style.padding= '0px'
        }
        
        
    }
}

console.log(22)
