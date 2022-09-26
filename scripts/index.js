
const guideList = document.querySelector('.guides');

const loggedOutElements = document.querySelectorAll('.logged-out');
const loggedInElements = document.querySelectorAll('.logged-in');
const accDetails = document.querySelector('.account-details');

const setupUi = (user) => {
  if(user){
    //get user details 
    db.collection('users').doc(user.uid).get().then(doc => {
      //account code
      const html = `
        <div >Logged as: <span style="font-weight: 700;">${doc.data().userName}</span></div>
        <div >Email: <span style="font-weight: 700;">${user.email}</span></div>
        <div >Bio: <span style="font-weight: 700;">${doc.data().bio}</span></div>
        <img  src="${doc.data().profileUrl}" style="width: 100%"/>
      `;
      accDetails.innerHTML = html;
    });
    
    //ui elements
    loggedInElements.forEach(ele => ele.style.display = 'block');
    loggedOutElements.forEach(ele => ele.style.display = 'none');
  }else{ 
    //acc info
    accDetails.innerHTML = '';
    

    //ui elements
    loggedInElements.forEach(ele => ele.style.display = 'none');
    loggedOutElements.forEach(ele => ele.style.display = 'block');
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
  }else{
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