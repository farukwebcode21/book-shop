// const searchBook = search =>{
//     const url =`https://openlibrary.org/search.json?q=javascript`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displaySearchBook(data.docs[0]));
// }
// searchBook();



// const searchBook =()=>{
//     const search = document.getElementById('search-text');
//     const searchText = search.value;
//     search.value = '';

//     // console.log(searchText);

//     const url = `https://openlibrary.org/search.json?q=${searchText}`;
    
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayBook(data.docs));    
// }

// const displaySearchBook = docs =>{
//     const addBook = document.getElementById('book-result');
//     addBook.textContent = '';
//     docs.forEach(doc =>{
//         console.log(doc);
//         const div = document.createElement('div');
//         div.classList.add('col');
//         const url= `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`;
//         url.slice(0, 6);
//         div.innerHTML =`
//                 <div class="card h-100">
//                     <img src="${url}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                     <h5 class="card-title">${doc.title}</h5>
//                     <p class="card-text">${doc.author_name} ${doc.first_publish_year}</p>
//                     </div>
//                 </div>
//         `;
//         addBook.appendChild(div);
//         // div.innerHTML = `
//         //     <p>${doc.title}</p>
//         //     <img src="${url}" class="img-fluid" alt="...">
//         //     <h6>${doc.publish_date}</h6>
//         // `;
//         // addBook.appendChild(div);

//     })
// }

// =============Click Event Button ================

const searchBook = () =>{
    const search = document.getElementById('search-text');
    const searchText = search.value;
    search.value = '';
    const url =`https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBookTitle(data.docs));
}
// searchBook();
const displayBookTitle = titles =>{
    const book = document.getElementById('add-book');
    titles.forEach(titleBook =>{
        console.log(titleBook);
        const div = document.createElement('div');
        div.classList.add('row');
        div.innerHTML =`
                    <div class="col-sm-2">
                        <p>Title 1${titleBook.title}</p>
                    </div>
        `;
        book.appendChild(div);
    })
}


// hard code book list showing

const bookData =searchT=>{
    fetch('https://openlibrary.org/search.json?q=javascript')
    .then(res => res.json())
    .then(data => displayBook(data.docs));
} 
bookData();
const displayBook = books =>{
    const bookList = books.slice(0, 6);
    console.log(bookList);
    const addBook = document.getElementById('book-result');
    bookList.forEach(book =>{
        const div = document.createElement('div');
        div.classList.add('col');
        const url= `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        div.innerHTML =`
            <div class="card h-100">
                <img src="${url}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">${book.author_name} <br>First publish:${book.first_publish_year}</p>
                </div>
             </div>
        `;
        addBook.appendChild(div);
    })

}
