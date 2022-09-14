const renderTable = (data) => {
  for (i = 0; i < data.length; i++) {
    const elemProducts = document.getElementById("products");
    let elemProduct = document.createElement("tr");

    elemProducts.appendChild(elemProduct);

    for (j = 0; j < 6; j++) {
      let productDetail = Object.values(data[i].acf);

      let elemProductDetail = document.createElement("td");

      elemProduct.appendChild(elemProductDetail);
      const requestFormUrl = "https://nac-apas.websapient.com/request-form";

      elemProductDetail.textContent = productDetail[j];
      console.log(productDetail[j]);

      // convert request form detail into link
      if (productDetail[j] === requestFormUrl) {
        console.log(requestFormUrl);
        elemProductDetail.textContent = "";
        console.log(elemProductDetail.textContent);

        elemProductDetail.innerHTML =
          '<a href="' + requestFormUrl + '">Request Form</a>';
      }
    }
  }
};

const getData = () => {
  const request = new XMLHttpRequest();
  const url =
    "https://nac-apas.websapient.com/wp-json/wp/v2/products?_fields=acf";

  request.open("GET", url);

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);

      renderTable(data);
    } else if (request.readyState === 4) {
      console.log("Sorry, there was an error.");
    }
  });

  request.send();
};
getData();
