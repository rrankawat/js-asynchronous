document.querySelector("#button1").addEventListener("click", loadCustomer);
document.querySelector("#button2").addEventListener("click", loadCustomers);

function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customers = JSON.parse(this.responseText);

      let output = "";

      customers.forEach(function (customer) {
        output += `
            <ul>
                <li>Id: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
        `;
      });

      document.querySelector("#customers").innerHTML = output;
    }
  };

  xhr.send();
}

function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
            <li>Id: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
        </ul>
      `;

      document.querySelector("#customer").innerHTML = output;
    }
  };

  xhr.send();
}
