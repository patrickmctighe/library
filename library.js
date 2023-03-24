let myLibrary = [];
let submit = document.querySelector(".btn");
let titleInput = document.getElementById("title").value;
let authorInput = document.getElementById("author").value;
let pagesInput = document.getElementById("pages").value;
let readInput = document.getElementById("read").value;
let form = document.getElementById("form");
let books = document.getElementById("books");
let clear = document.querySelector(".clear");

function Book(title, author, pages, read, data) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.data = data);
    
}
form.addEventListener("submit", function addBookToLibrary(event) {
  const newBook = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("read").value,
    Math.random() * 7
  );
  event.preventDefault();
  myLibrary.push(newBook);
  updateArr();
});

function updateArr() {
  books.innerText = " ";
  myLibrary.forEach((res) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let c0= document.createElement("div")
    c0.setAttribute("class","c0");

    let c1 = document.createElement("div");
    c1.setAttribute("class", "c1");
    card.appendChild(c1);

    let c2 = document.createElement("div");
    c2.setAttribute("class", "c2");
    card.appendChild(c2);

    let c3 = document.createElement("div");
    c3.setAttribute("class", "c3");
    card.appendChild(c3);

    let c4 = document.createElement("div");
    c4.setAttribute("class", "c4");
    card.appendChild(c4);

    let c5 = document.createElement("div");
    c5.setAttribute("class", "c5");
    card.appendChild(c5);
    
    let cardData= document.createTextNode(res.data);
    c0.appendChild(cardData)

    let cardTitle = document.createTextNode("Title: " + res.title);
    c1.appendChild(cardTitle);

    let cardAuthor = document.createTextNode("Author: " + res.author);
    c2.appendChild(cardAuthor);

    let cardPages = document.createTextNode("Pages: " + res.pages);
    c3.appendChild(cardPages);

    let cardRead = document.createTextNode("Read: ");
    c4.appendChild(cardRead);

    let yesNo = document.createElement("select");
    if (res.read === "Yes") {
      options = [res.read, "No"];
    } else if (res.read === "No") {
      options = [res.read, "Yes"];
    }
    let options_str = " ";
    options.forEach(function (option) {
      options_str += '<option value="' + option + '">' + option + "</option>";
    });
    yesNo.innerHTML = options_str;
    c4.appendChild(yesNo);

    let dele = document.createElement("button");
    dele.innerHTML = `<span class="material-symbols-outlined">
    remove
    </span> `;
    dele.addEventListener("click", (e) => {
      if ((e.target = "BUTTON")) {
        for(let i =0; i<myLibrary.length; i++){
        if(myLibrary[i].data == c0.innerText){
          myLibrary.splice(i);
        }
     
    ;
        
      
      }books.removeChild(card);
   }} );
    dele.setAttribute("class", "dele");
    c5.appendChild(dele);

    let books = document.querySelector(".books");
    books.appendChild(card);
  });
}

clear.addEventListener("click", (e) => {
  if ((e.target = "BUTTON")) {
    myLibrary = [];
    updateArr();
  }
});
