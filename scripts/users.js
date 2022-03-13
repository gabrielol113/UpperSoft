fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json => {
    console.log(json.data);
    const markup = json.data.map(el => {
        return `
        <li class="card-container">
            <div class="image-container">
              <img class="round" src="${el.avatar}">
                <img src="./assets/edit-icon.png" width='40px' id='icon'>
            </div>

             <div class="name-container"> 
                 <span class="firstName">${el.first_name}</span>
                 <span class="lastName">${el.last_name}</span>
                
             </div> 
             <p class="email">${el.email}</p>  
            </li>
        `
    });
    document.querySelector('.list-container').innerHTML = markup;
  
})

function loading(){
    let load = document.querySelector('#load');
    
    setTimeout(() => {
        load.style.display = 'none';
    }, 5000);
}

