window.onload = () => {
  const host = 'http://localhost:3030';
  const http = new XMLHttpRequest();
  const containerDiv = document.querySelector('#container');

  http.open('GET', `${host}/api/books`, true);

  // http.onload = () => {
  //   if (http.status === 200) {
  //     const booksName = JSON.parse(http.response);
  //     console.log(booksName);
  //     booksName.forEach(book => {
  //       let newTitle = document.createElement('p');
  //       containerDiv.appendChild(newTitle);
  //       newTitle.innerText = book.book_name;
  //       newTitle.classList.add('bookItem');
  //       // newTitle.setAttribute('src', book.url)
  //     });
  //   }
  // }

  http.onload = () => {
    if (http.status === 200) {
      const booksName = JSON.parse(http.response);
      booksName.forEach(book => {

        let newRow = document.createElement('tr');

        let newBookTitle = document.createElement('td');
        newBookTitle.innerText = book.book_name;
        newRow.appendChild(newBookTitle);

        let newBookAuthor = document.createElement('td');
        newBookAuthor.innerText = book.aut_name;
        newRow.appendChild(newBookAuthor);

        let newCategory = document.createElement('td');
        newCategory.innerText = book.cate_descrip;
        newRow.appendChild(newCategory);

        let newPublisher = document.createElement('td');
        newPublisher.innerText = book.pub_name;
        newRow.appendChild(newPublisher);

        let newPrice = document.createElement('td');
        newPrice.innerText = book.book_price;
        newRow.appendChild(newPrice);

        let table = document.querySelector('#tableId');
        table.appendChild(newRow);
      });
    }
  }
  http.send();
}
