// api url
const api_url =
	"https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("message");
    li = ul.getElementsByTagName('div');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementById("Fname")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
// Function to define innerHTML for HTML table
function show(data) {
   
	let tab ="";

	// Loop to access all rows
	for (let r of data.results) {
        
		tab += `
        <div class="contact-section">
        <img src=${r.picture.thumbnail} alt="Avatar" class="avatar">
        <li class="list__item">
            <p class="contact-name" id="Fname">${r.name.first}</p>
            <p class="relationship">${r.cell}</p>
        </li>
        <li class="list__item">
            <i class="fas fa-sms text"></i>
        </li>	
        </div>
`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("message").innerHTML = tab;
}
