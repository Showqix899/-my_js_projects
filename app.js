// let text1=document.querySelector(".text1");
// let btn=document.querySelector(".btn");
// let box=document.querySelector(".box");
// btn.addEventListener("click",()=>{
//     let text=text1.value;
//     let p=document.createElement("p");
//     p.innerText=text;
//     box.appendChild(p);

// })
let text=document.querySelector(".text");
let addBtn=document.querySelector(".btn");
let showlist=document.querySelector(".showlist");
addBtn.addEventListener("click",()=>{
    if(text.value==""){
        alert("Please enter task");
    }
    else{
        let textDetails=text.value;
        let div=document.createElement("div");
        div.innerText=textDetails;
        showlist.appendChild(div);

        div.addEventListener("click",()=>{
        div.classList.toggle("checked");
        })
        text.value="";
        if(div.value!=""){

            let allClose=document.querySelector(".closebutton");
            allClose.style.display="block";
            allClose.addEventListener("click",()=>{
            if(div.classList=="checked"){
            div.remove();
            }
            })
            


        }
        
        
    }
    

    

})