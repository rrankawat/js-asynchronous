document.querySelector("#button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "data.txt", true);

  // console.log(`readyState: ${xhr.readyState}`);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    // console.log(`readyState: ${xhr.readyState}`);
  };

  xhr.onload = function () {
    // console.log(`readyState: ${xhr.readyState}`);
    if (this.status === 200) {
      // console.log(this.responseText);
      document.querySelector(
        "#output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  /* xhr.onreadystatechange = function () {
    console.log(`readyState: ${xhr.readyState}`);
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  }; */

  xhr.onerror = function () {
    console.log("Request error");
  };

  xhr.send();

  // readyState values
  // 0: request not initialized
  // 1: server connected established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: 'OK'
  // 403: 'Forbidden'
  // 404: 'Not Found'
}
