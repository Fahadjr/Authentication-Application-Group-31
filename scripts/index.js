
const guideList = document.querySelector('.guides');

const setupUi = (user) => {
  if(user)
  {
    loggedInElements.forEach(ele => ele.style.display = 'block');
  }
  else
  {
    loggedInElements.forEach(ele => ele.style.display = 'none');
  }
}

const setupGuides = (data) => {

  let html = '';

  if(data.length){
    data.forEach(doc => {
      const profile = doc.data();
      console.log(profile);
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4">${profile.bio}</div>
          <div class="collapsible-body white"><span>${profile.imageUrl}</span></div>
          <div class="collapsible-body white"><span>${profile.imageName}</span></div>
          <img class="collapsible-body white" id="photo" src="${profile.imageUrl}" style="width: 100%"/>
        </li>
      `;
  
      html += li;
    });
  
    guideList.innerHTML = html; 
  }
  else
  {
    guideList.innerHTML = `<h5 class="center-align">Login to view data</h5>`; 
  }
  
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });
