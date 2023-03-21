
let myLibrary = [];
let submit = document.querySelector(".btn");
let titleInput = document.getElementById("title").value;
let authorInput = document.getElementById("author").value;
let pagesInput = document.getElementById("pages").value;
let readInput = document.getElementById("read").value;
let form = document.getElementById("form")
let books= document.getElementById("books")
let clear = document.querySelector(".clear")

console.log(books);
function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}


form.addEventListener("submit",function addBookToLibrary(event) {
 
  const newBook = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("read").value);
event.preventDefault();
  myLibrary.push(newBook);
  updateArr();

})



  


    function updateArr(){
        books.innerText = " "
      myLibrary.forEach((res) => {
          let card = document.createElement("div");
          card.setAttribute("class", "card");
        
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
        
          let cardTitle = document.createTextNode("Title: " + res.title);
          c1.appendChild(cardTitle);
        
          let cardAuthor = document.createTextNode("Author: " + res.author);
          c2.appendChild(cardAuthor);
        
          let cardPages = document.createTextNode("Pages: " + res.pages);
          c3.appendChild(cardPages);
        
          let cardRead = document.createTextNode("Read: " + res.read);
          c4.appendChild(cardRead);
        
          let books = document.querySelector(".books");
          books.appendChild(card);
        });
    }




