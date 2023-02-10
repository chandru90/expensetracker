var form =document.getElementById('addform')
window.form.addEventListener('submit',additem)

async function sync(){
    await  additems(respone.data)
    
    printelement(obj)
    console.log("async executed")
}
sync ()

 function additem(e)
{
    e.preventDefault();
    var amount1 =document.getElementById('amount').value ;
    var description1 =document.getElementById('description').value;
    var category=document.getElementById('category').value
    const obj ={amount1,description1,category}
 
     axios.post("https://crudcrud.com/api/930f181238ec40e299dc22b861de0683/appointment/",obj)
    .then((response)=>{
        console.log(response.data)
    })
    .catch((err)=>{decodeURIComponent
        console.log(err)
    })

    //console.log(response.data._uid)

    //  localStorage.setItem(obj.amount1,JSON.stringify(obj))
 printelement(obj)
}

//console.log(obj._uid)

function printelement(obj)
{
   // console.log(obj._uid)
const parentelement =document.getElementById('listitems')
const childelement=document.createElement('li')
childelement.textContent= obj.amount1 + '- '+ obj.description1 +'-'+obj.category

const editbtn =document.createElement('input')
editbtn.type ="button"
editbtn.value='edit'
editbtn.onclick =(obj)=>
{
    axios.put("https://crudcrud.com/api/930f181238ec40e299dc22b861de0683/appointment/",obj)
    localStorage.removeItem(obj.amount)
    parentelement.removeChild(childelement)
    document.getElementById('amount').value =obj.amount1
    document.getElementById('description').value=obj.description1
   document.getElementById('category').value=obj.category

}


const deletebtn =document.createElement('input')
deletebtn.type="button"
deletebtn.value='delete'
deletebtn.onclick =(obj) =>
{
    axios({
        method :'delete',url:'https://crudcrud.com/api/930f181238ec40e299dc22b861de0683/appointment/',
        data : {amount :obj.amount1 ,completed : true} })
       .then(res=>showOutput(res))
       .catch(err =>console.error(err))
 

  /*  axios.delete("https://crudcrud.com/api/930f181238ec40e299dc22b861de0683/appointment/",{obj})
    .then((response)=>{
        console.log(response.data)
    })
    .catch((err)=>{decodeURIComponent
        console.log(err)
    })*/
  localStorage.removeItem(obj.amount)
    parentelement.removeChild(childelement)
}

    childelement.appendChild(editbtn)
    childelement.appendChild(deletebtn)
    parentelement.appendChild(childelement)

}