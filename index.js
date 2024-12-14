const loadData=()=>{
    fetch('https://f24-1-mid-1.vercel.app/content')
    .then(respons=>respons.json())
    .then(data=>showData(data))
}

const showData=(values)=>{
    // console.log(values)
    
    const maindiv = document.getElementById("contant")
    for(const value of values ){
        // console.log(value)
        const {category,author,title,description,comment_count,posted_time,image}=value;
        const div=document.createElement("div")
        div.innerHTML=`
        
         <div class="p-5 mt-8 rounded-md bg-[#e0ac62] shadow-slate-300  h-80">
     <div class="flex gap-3">
     <div>
        <img src="${image}" alt="" class="w-16 h-16">
     </div>
     <div class="font-semibold text-lg gap-2 ">
        <div>
          <h1>${author.name}</h1>
        </div>
         <div>             
         
              <h1>${category}</h1>
         </div>
     </div>
     </div>
      <p class="mt-4">${title}</p>
    
      <p>${description}</p>
      <div class="flex ">
        <div>
            <p>${comment_count}</p>
        </div>
        <div>
            <p>${posted_time}</p>
        </div>
      
         <button onclick='add(${JSON.stringify(value)})' class="font-semibold px-4 py-1 ml-20 bg-indigo-600 rounded-md mt-5" >select</button>
   
      

        `
       maindiv.appendChild(div)
    }
}
 


const add=(btn)=>{
    
    const {category,author,title,description,comment_count,posted_time,image}=btn;
   
 const ol =document.getElementById("add")
 const li=document.createElement("li")
  li.innerHTML=`
  <div class="card bg-base-100 w-96 bg-[#e0ac62] ml-4 shadow-xl h-28 mt-4 ">
  <div class="flex justify-around items-center mt-4 p-3 text-sm" >
      <div>
         <h2 class="card-title">${title}</h2>
       </div>
    
      <div class="card-actions justify-end">
         <p>${comment_count}</p>
      </div>
  </div>
</div>
 `     
      const oll =document.getElementById("add").childElementCount
      const count=document.getElementById("count")
      count.innerText=oll+1
      if(oll>6){
        alert("okk")
      }
      else{
        ol.appendChild(li)  

      }  
    }      
    

loadData()


const blog=()=>{
  fetch("https://f24-1-mid-1.vercel.app/blogs")
  .then(res=>res.json())
  .then(data=>blogs(data))
}

const blogs=(some)=>{
 const card=document.getElementById("blog")
  for(const value of some){
    const {author,cover_image,description,title,_id,profile_image}=value;
    console.log(value)
    const li=document.createElement("li")
    li.innerHTML=`
    <div class="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="${cover_image}"
      alt="" />
  </figure>
  <div class="card-body">
    <h2 class="text-lg font-semibold text-blackcode m-0.5">${title}</h2>
    <p>${description}</p>
    <div class="flex  justify-between">
       <div>
          <img src="${profile_image}" alt="">
       </div>
      <div>
         <p>${author.name}<p>
         <p>${description}
          
      </div>
    </div>
  </div>
</div>
    
    `
    card.appendChild(li)

  }
}
blog()

