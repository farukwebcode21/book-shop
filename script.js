
// =============Click Event Button ================

const searchBook = () =>{
    const search = document.getElementById('search-text');
    const searchText = search.value;
    // loadBook(searchText);
    search.value = '';
    const url =`https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayBookTitle(data.docs));
}
// searchBook();

const displayBookTitle = titles =>{
    const book = document.getElementById('add-book');
    book.textContent ='';
    if(!titles){
        window.alert('Not Found Your search Result')
    }
    titles.forEach(titleBook =>{
        const div = document.createElement('div');
        div.innerHTML =`
                <div class="col"> 
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${titleBook.title}</h5>
                            <p class="card-text"><span style="color:blue">Author Name</span>:${titleBook.author_name}<br>Publish Year <span style="color:red">${titleBook.first_publish_year}<span></p>
                        </div>
                    </div>
               </div>
        `;
        book.appendChild(div);
    });
};

// hard code book list showing

const bookData =()=>{
    fetch('https://openlibrary.org/search.json?q=javascript')
    .then(res => res.json())
    .then(data => displayBook(data.docs));
} 
bookData();
const displayBook = books =>{
    const bookList = books.slice(0, 8);
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
    });

};

// ==================Dynamic link but not check because api create problem =========


// const loadBook = searchText =>{
//     const url = `https://openlibrary.org/search.json?q=${searchText}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>displayLoadingBook(data.docs));
// }
// loadBook('Javascript');

// const displayLoadingBook = loading =>{
//     const loads = loading.slice(0, 8);
//     const addBook = document.getElementById('book-result');
//     loads.forEach(load =>{
//         const div = document.createElement('div');
//         div.classList.add('col');
//         const url= `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
//         div.innerHTML =`
//             <div class="card h-100">
//                 <img src="${url === undefined }" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${load.title}</h5>
//                     <p class="card-text">${load.author_name} <br>First publish:${load.first_publish_year}</p>
//                 </div>
//             </div>
//         `;
//         addBook.appendChild(div);
//     });
// }
