const form = document.getElementById('addform');
form.addEventListener('submit', addItem);

async function addItem(e) {
  e.preventDefault();
  const amount1 = document.getElementById('amount').value;
   const description1 = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  const obj = { amount1, description1, category };
  const response = await axios.post("https://crudcrud.com/api/6135a05c65204a5eb859a346a37518b4/appointment/", obj);
  console.log(response.data);
  printElement(response.data);
  }


  async function printElement(obj) {
  const parentElement = document.getElementById('listitems');
  const childElement = document.createElement('li');
  childElement.textContent = obj.amount1 + '- ' + obj.description1 + '-' + obj.category;
  const editBtn = document.createElement('input');
  editBtn.type = 'button';
  editBtn.value = 'edit';
  editBtn.onclick = async () => {
  const updateObj= {
        amount1: document.getElementById('amount').value,
        description1: document.getElementById('description').value,
        category: document.getElementById('category').value,
      }
   const response = await axios.put(`https://crudcrud.com/api/6135a05c65204a5eb859a346a37518b4/appointment/${obj._id}`, updateObj);
      console.log(response.data);

      
      parentElement.removeChild(childElement);
     
    
  };

  
  const deleteBtn = document.createElement('input');
  deleteBtn.type = 'button';
  deleteBtn.value = 'delete';
  deleteBtn.onclick = async () => {
    
      const response = await axios.delete(`https://crudcrud.com/api/6135a05c65204a5eb859a346a37518b4/appointment/${obj._id}`);
      console.log(response.data);

      
      parentElement.removeChild(childElement);
   
  };

  
  childElement.appendChild(editBtn);
  childElement.appendChild(deleteBtn);

  parentElement.appendChild(childElement);
}