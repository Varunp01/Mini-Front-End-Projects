
localStorage.setItem(1,1);
let input=document.querySelector(".input");
let scroll=document.querySelector("i");
let addbtn=document.querySelector("#add");
let clearbtn=document.querySelector("#clear");
let clearallbtn=document.querySelector("#clearall");
let ul=document.querySelector("ul");


//localStorage

if (localStorage.length>1) {
    for(let a=2;a<=100;a++)
    {
        if (localStorage.getItem(a)==null) {
            
        } else {
            let li=document.createElement("li");
            ul.insertAdjacentElement("beforeend",li);
            li.innerText=localStorage.getItem(a);
            let label=document.createElement("label");
            li.insertAdjacentElement("afterbegin",label);
            let box=document.createElement("span");
            box.setAttribute("class","checkbox");
            box.setAttribute("data-checkbox","ogicheckbox");
            label.insertAdjacentElement("afterbegin",box);
            let checkbox=document.createElement("input");
            checkbox.setAttribute("type","checkbox");
            checkbox.setAttribute("class","ogicheckbox");
            checkbox.setAttribute("id","ogicheckbox");
            label.insertAdjacentElement("afterbegin",checkbox);                
        }
    }
}

//scroll down using icon
scroll.addEventListener('click', function(){
    window.scrollTo({
        top:500,
        behavior:"smooth"
    });
});

//adding a task
addbtn.addEventListener('click',function () {
    if(input.value=="")
    {
        alert("write something in input area");
    }else{
        let li=document.createElement("li");
        ul.insertAdjacentElement("beforeend",li);
        li.innerText=input.value;
        let i = localStorage.getItem(1);
        localStorage.setItem(++i,input.value);
        localStorage.setItem(1,i);

        let label=document.createElement("label");
        li.insertAdjacentElement("afterbegin",label);
        let box=document.createElement("span");
        box.setAttribute("class","checkbox");
        box.setAttribute("data-checkbox","ogicheckbox");
        label.insertAdjacentElement("afterbegin",box);
        let checkbox=document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("class","ogicheckbox");
        checkbox.setAttribute("id","ogicheckbox");
        label.insertAdjacentElement("afterbegin",checkbox);
        input.value="";
    } 
})

//deleting selected task
clearbtn.addEventListener('click',function(){
    let selected=document.querySelectorAll("li label #ogicheckbox");
    for (const x of selected) {
        if(x.checked==1){
            
            let rem=x.offsetParent;
            console.dir(rem);
            for (let a = 2; a <= localStorage.getItem(1); a++) {
                if(localStorage.getItem(a)==rem.innerText){
                    localStorage.removeItem(a);
                }
                
            }
            rem.remove();
        }
    }
})

//deleting all task
clearallbtn.addEventListener('click',function () {
    let lis=document.querySelectorAll("li");
    for (const li of lis) {
        li.remove();
    }
    localStorage.clear();
    localStorage.setItem(1,1);
})
