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
      console.log(booksName);
      booksName.forEach(book => {
        let newTitle = document.createElement('p');
        containerDiv.appendChild(newTitle);
        newTitle.innerText = book.book_name;
        newTitle.classList.add('bookItem');
        // newTitle.setAttribute('src', book.url)

        let newRow = document.createElement('tr');

        let newEntry = document.createElement('td');
        newEntry.innerText = book.book_name;
        newRow.appendChild(newEntry);
        
        let table = document.querySelector('#tableId');
        table.appendChild(newRow);
      });
      // let table = documnet.createElement('tr');
      // table.classList.add('table');

    }
  }
  http.send();
}
