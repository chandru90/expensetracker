var form =document.getElementById('addform')
form.addEventListener('submit',additem)
 function additem(e)
{
    e.preventDefault();
   
    var amount1 =document.getElementById('amount').value ;
    var description1 =document.getElementById('description').value;
    var category=document.getElementById('category').value
    const obj ={amount1,description1,category}
    
 
     axios.post("https://crudcrud.com/api/7cb395bff3854faf9ae25395e8f25df4/appointment/",obj)
    .then((response)=>{
        for(var i=0;i<response.data.length;i++)
        {
           printelement(response.data[i])
            console.log(response.data[i])
            
        } 
        return new Promise((res,rej)=>
{setTimeout(()=>{res(response.data)},1000)})
       
      //  console.log(response)
       
    })
    .catch((err)=>{
     console.log(err)
    })

    

    //console.log(response.data._uid)

    //  localStorage.setItem(obj.amount1,JSON.stringify(obj))

    printelement(obj)
   


function printelement(obj)
{
    //console.log(obj1._uid)

 
   const parentelement =document.getElementById('listitems')
   const childelement=document.createElement('li')
   childelement.textContent= obj.amount1 + '- '+ obj.description1 +'-'+obj.category
const editbtn =document.createElement('input')
editbtn.type ="button"
editbtn.value='edit'
editbtn.onclick =()=>
{
    editbtn1()
}
const deletebtn =document.createElement('input')
deletebtn.type="button"
deletebtn.value='delete'
deletebtn.onclick =() =>
{
    deletebtn1()
}




childelement.appendChild(editbtn)
childelement.appendChild(deletebtn)
 parentelement.appendChild(childelement)



function editbtn1(obj)
{
    
    axios.put("https://crudcrud.com/api/7cb395bff3854faf9ae25395e8f25df4/appointment/",obj)
    localStorage.removeItem(obj.amount)
    parentelement.removeChild(childelement)
    document.getElementById('amount').value =obj.amount1
    document.getElementById('description').value=obj.description1
   document.getElementById('category').value=obj.category
   


}



function deletebtn1()
{
   


    axios.delete('https://crudcrud.com/api/7cb395bff3854faf9ae25395e8f25df4/appointment/${obj._id}')
    .then((response)=>{
        console.log(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
 

 parentelement.removeChild(childelement)
    
    
}
}

async function test ()
{
    const msg =await additems(e)
    console.log(msg)
}
 
test()
}