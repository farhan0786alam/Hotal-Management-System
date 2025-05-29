// all globle variable decleration
let userInfo;
let user;
let allBData = [];
let navBrand = document.querySelector(".navbar-brand");
let logoutBtn = document.querySelector(".logout-btn");
let bookingForm = document.querySelector(".booking-form");
let allBInput = bookingForm.querySelectorAll("input");
let bTextarea = bookingForm.querySelector("textarea");
let bCloseBtn = bookingForm.querySelector(".b-modal-close-btn");
let bListTBody = document.querySelector(".booking-list")

// check user is login or not

if (sessionStorage.getItem("__au__") == null) 
{
  window.location = "../index.html";
}
userInfo = JSON.parse(sessionStorage.getItem("__au__"));
navBrand.innerHTML = userInfo.hotelname;
user = userInfo.email.split("@")[0];

// geering data from storage

const fetchData = (key) => {
  if (localStorage.getItem(key) != null) 
  {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  }
};
allBData = fetchData(user+"_allBData");


// logout functionality
logoutBtn.onclick = () => {
  logoutBtn.innerHTML = "Please wait....";
  setTimeout(() => {
    logoutBtn.innerHTML = "Logout";
    sessionStorage.removeItem("__au__");
    window.location = "../index.html";
  }, 3000);
};

// start booking coding
bookingForm.onsubmit = (e) => {
  e.preventDefault();
  let data = {notice : bTextarea.value}
  for(let el of allBInput) {
    let key = el.name;
    let value = el.value;
    data[key] = value;
  }
  allBData.push(data);
  localStorage.setItem(user + "_allBData", JSON.stringify(allBData));
  swal("Good Job !", "Booking Success👍🤞", "success");
  bookingForm.reset("");
  bCloseBtn.onclick();
};

// show booking data in table

const ShowBookingData = () => {
  allBData.forEach((item, index) => {
    bListTBody.innerHTML += 
     `
        <tr>
                <td>1</td>
                 <td>Dehli</td>
                 <td>15</td>
                 <td>Mehzan</td>
                 <td>12-6-200</td>
                 <td>15-6-200</td>
                 <td>5</td>
                 <td>8604104002</td>
                 <td>₹60,000</td>
                 <td>All include</td>
                 <td>12-6-200</td>
                 <td>
                  <button class="btn p-1 px-1 btn-primary">
                    <i class="fa fa-edit"></i>
                  </button>
                  <button class="btn p-1 px-1 text-white btn-success">
                    <i class="fa fa-check"></i>
                  </button>
                  <button class="btn p-1 px-1 btn-danger">
                     <i class="fa fa-trash"></i>
                  </button>
                 </td>
                 
        </tr>
     `;
  });
  
};
ShowBookingData();

// const ShowBookingData = () =>{
//     allBData.forEach((item,index) => {
//         bListTBody.innerHTML += `
//           <tr>
//                 <td>1</td>
//                 <td>Dehli</td>
//                 <td>15</td>
//                 <td>farhan</td>
//                 <td>12-6-200</td>
//                 <td>15-6-200</td>
//                 <td>5</td>
//                 <td>8604104002</td>
//                 <td>₹60,000</td>

//                 <td>All include</td>
//                 <td>12-6-200</td>
//                 <td>
//                 <button class="btn p-1 px-1 btn-primary">
//                     <i class="fa fa-edit"></i>
//                 </button>
//                 <button class="btn p-1 px-1 text-white btn-success">
//                     <i class="fa fa-check"></i>
//                 </button>
//                 <button class="btn p-1 px-1 btn-danger">
//                     <i class="fa fa-trash"></i>
//                 </button>
//                 </td>
//            </tr>
//         `
//     })
// }
// ShowBookingData();
