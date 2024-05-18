function pink(){
    let a = document.querySelectorAll(".text-red-500");
   
    for(let i = 0; i<a.length; i++){
        let cl = a[i].classList
        cl.remove('text-red-500')
        cl.add('text-pink-500')


    }
    let b = document.querySelectorAll(".bg-red-500");
   
    for(let i = 0; i<b.length; i++){
       let ele = b[i].classList
       ele.remove('bg-red-500')
       ele.add('bg-pink-500')
    }
    let c = document.querySelectorAll(".navclass");
    for(let i = 0; i<c.length; i++){
        let ele = c[i].classList
        ele.remove("hover:text-red-500")
        ele.add('hover:text-pink-500')
    }


    
}

// pink()


// function to add the default submision 
function removedeft(event){
    event.preventDefault();
}

// function to change th them
function blackThem(){
    
    let cl1 = document.querySelectorAll(".bg-white")
    let cl2 = document.querySelectorAll(".bg-slate-200")
    let cl3 = document.querySelectorAll(".text-black")

    for(let i = 0; i<cl1.length; i++){
        let ele = cl1[i].classList
        ele.remove("bg-white")
        ele.add('bg-black')
    }
    for(let i = 0; i<cl2.length; i++){
        let ele = cl2[i].classList
        ele.remove("bg-slate-200")
        ele.add('bg-gray')
    }
    for(let i = 0; i<cl3.length; i++){
        let ele = cl3[i].classList
        ele.remove("text-black")
        ele.add('text-white')
    }



}

blackThem()
