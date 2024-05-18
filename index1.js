
// function add() {

//     var email= document.getElementById("email-op").value;
//     var name= document.getElementById("name-op").value;

//     if (name && email){
//        let listArray=JSON.parse(localStorage.getItem("list")) ||[]
//        listArray.push({
//         name:name,
//         email:email
//        })
//     }
// }
// function details() {
//         let listArray = JSON.parse(localStorage.getItem("list")) || [];
    
//         var detail = listArray.map(function(detail, index) {
//             return `<div class="detail-bars">
//                 <h1 class="detail-name">${detail.name}</h1>
//                 <p class="detail-email"><b>${detail.email}</p>
//                 <button class="delete" onclick="deleteDetail(${index})">Delete</button>
//             </div>`;
//         });
    
//         document.getElementById("listArray").innerHTML = detailS.join("");
//     }
    
//  function deleteDetail(index) {
//     let listArray = JSON.parse(localStorage.getItem("list")) || [];
//     listArray.splice(index, 1);
//     localStorage.setItem("list", JSON.stringify(listArray));
//     details();
// }  
function submit() {
    var email = document.getElementById("email-op").value;
    var name = document.getElementById("name-op").value;

    if (name && email) {
        let listArray = JSON.parse(localStorage.getItem("list")) || [];
        listArray.push({
            name: name,
            email: email
        });

        localStorage.setItem("list", JSON.stringify(listArray));
        details();
    }
}

function details() {
    let listArray = JSON.parse(localStorage.getItem("list")) || [];

    var detail = listArray.map(function(detail, index) {
        return `<div class="detail-bars">
            <h1 class="detail-name">${detail.name}</h1>
            <p class="detail-email"><b>Email: </b>${detail.email}</p>
            <button class="delete" onclick="deleteDetail(${index})">Delete</button>
        </div>`;
    });

    document.getElementById("detailsList").innerHTML = detail.join("");
}

function deleteDetail(index) {
    let listArray = JSON.parse(localStorage.getItem("list")) || [];
    listArray.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(listArray));
    details();
}

window.onload = details;
