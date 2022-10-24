const PRODUCT_LIST = [
    {
      productName: "bread",
      productData: {
        weight: 200,
        certificate: false,
        dataOfExpiry: "21.10.22",
        sugarFree: true,
      },
      ProductProvider: "FOP Kulechevsky ",
      productCountry: "UA",
      productPrice: 11.75,
    },
    {
      productName: "milk",
      productData: {
        weight: 800,
        certificate: true,
        dataOfExpiry: "20.10.22",
        sugarFree: true,
      },
      ProductProvider: "FOP Komo",
      productCountry: "UA",
      productPrice: 45,
    },
    {
      productName: "oil",
      productData: {
        weight: 900,
        certificate: true,
        dataOfExpiry: "21.10.22",
        sugarFree: true,
      },
      ProductProvider: "FOP Oliyar",
      productCountry: "GR",
      productPrice: 80.5,
    },
    {
      productName: "sausages",
      productData: {
        weight: 1000,
        certificate: true,
        dataOfExpiry: "19.10.22",
        sugarFree: true,
      },
      ProductProvider: "FOP Skubida S.V",
      productCountry: "IT",
      productPrice: 110.75,
    },
    {
      productName: "beef",
      productData: {
        weight: 1000,
        certificate: true,
        dataOfExpiry: "18.10.22",
        sugarFree: false,
      },
      ProductProvider: "Argo-oven",
      productCountry: "ES",
      productPrice: 220,
    },
    {
      productName: "fish",
      productData: {
        weight: 1000,
        certificate: false,
        dataOfExpiry: "20.10.22",
        sugarFree: false,
      },
      ProductProvider: "FOP Delfin",
      productCountry: "UA",
      productPrice: 150,
    },
    {
      productName: "egg",
      productData: {
        weight: 200,
        certificate: true,
        dataOfExpiry: "21.10.22",
        sugarFree: false,
      },
      ProductProvider: "Avangardco",
      productCountry: "UA",
      productPrice: 80.75,
    },
    {
      productName: "butter",
      productData: {
        weight: 200,
        certificate: true,
        dataOfExpiry: "20.10.22",
        sugarFree: true,
      },
      ProductProvider: "Dannon",
      productCountry: "UA",
      productPrice: 80,
    },
    {
      productName: "tomato",
      productData: {
        weight: 1000,
        certificate: true,
        dataOfExpiry: "13.10.22",
        sugarFree: true,
      },
      ProductProvider: "Chumak",
      productCountry: "UA",
      productPrice: 50,
    },
    {
      productName: "onion",
      productData: {
        weight: 1000,
        certificate: true,
        dataOfExpiry: "20.10.22",
        sugarFree: true,
      },
      ProductProvider: "Chumak",
      productCountry: "UA",
      productPrice: 25,
    },
    {
      productName: "papper",
      productData: {
        weight: 1000,
        certificate: true,
        dataOfExpiry: "21.10.22",
        sugarFree: true,
      },
      ProductProvider: "Chumak",
      productCountry: "UA",
      productPrice: 110.75,
    },
    {
      productName: "potato",
      productData: {
        weight: 1000,
        certificate: true,
        dataOfExpiry: "20.10.22",
        sugarFree: false,
      },
      ProductProvider: "FOP Agrofresh",
      productCountry: "UA",
      productPrice: 20,
    },
    {
      productName: "carrot",
      productData: {
        weight: 1000,
        certificate: false,
        dataOfExpiry: "21.10.22",
        sugarFree: false,
      },
      ProductProvider: "FOP Agrofresh",
      productCountry: "UA",
      productPrice: 35.75,
    },
    {
      productName: "cabbage",
      productData: {
        weight: 800,
        certificate: true,
        dataOfExpiry: "20.10.22",
        sugarFree: true,
      },
      ProductProvider: "FOP Agrofresh",
      productCountry: "UA",
      productPrice: 45,
    },
    {
      productName: "beetroot",
      productData: {
        weight: 1000,
        certificate: true,
        dataOfExpiry: "21.10.22",
        sugarFree: true,
      },
      ProductProvider: "FOP Kalinivka",
      productCountry: "UA",
      productPrice: 30,
    },
    {
      productName: "garlic",
      productData: {
        weight: 100,
        certificate: true,
        dataOfExpiry: "20.10.22",
        sugarFree: false,
      },
      ProductProvider: "FOP Skubida S.V",
      productCountry: "CN",
      productPrice: 20,
    },
  ];
  const container = document.getElementById("container");
  const listOfProducts = document.createElement("h1");
  listOfProducts.className = "header";
  listOfProducts.innerHTML = "List of product";
  const uList = document.createElement("ul");
  
  PRODUCT_LIST.forEach((lisItem, itemIndex) => {
    const item = document.createElement("li");
    item.classList.add(itemIndex % 2 ? "odd" : "even");
    item.innerHTML="<span>" + lisItem.productName.toUpperCase() +"</span>";
  
    const img = document.createElement("img");
    img.src = "https://countryflagsapi.com/png/" + lisItem.productCountry;
    img.width = 22;
    img.height = 12;
    item.appendChild(img);
    const price = document.createElement("span");
    price.innerHTML = `${lisItem.productPrice} UAH`;
    item.appendChild(price)
  
    if (!lisItem.productData.certificate) {
      const exclamatioMark = document.createElement("span");
      exclamatioMark.style.color = "red";
      exclamatioMark.style.fontSize = "22px";
      exclamatioMark.innerText = "!";
      item.appendChild(exclamatioMark);
    } else {
      const chekMark = document.createElement("span");
      chekMark.style.color = "blue";
      chekMark.style.fontSize = "22px";
      chekMark.innerText = "✓";
      item.appendChild(chekMark);
    }
    if (lisItem.productData.sugarFree) {
      const sugarContain = document.createElement("span");
      sugarContain.className = "shugar";
      sugarContain.innerText = "Contain sugar";
      item.appendChild(sugarContain);
    } else {
      const sugarContain = document.createElement("span");
      sugarContain.innerText = "SugarFree";
      item.appendChild(sugarContain);
    }
    uList.appendChild(item);
  });
  
  // 9
  const totalPrice = PRODUCT_LIST.reduce((accumulator, item) => {
    return accumulator + item.productPrice;
  }, 0);
  
  const totalProductlPrice = document.createElement("p");
  totalProductlPrice.className = "total";
  totalProductlPrice.innerHTML = `The total cost of the list of products is ${totalPrice} UAH`;
  
  // 10
  const expensiveProduct = PRODUCT_LIST.sort(
    (a, b) => b.productPrice - a.productPrice
  )[0];
  const mostExpensiveProduct = document.createElement("p");
  mostExpensiveProduct.className = "most";
  mostExpensiveProduct.innerHTML = `The most expensive product in list is ${expensiveProduct.productName} costs ${expensiveProduct.productPrice} UAH`;
  
  // 11
  
  const averagePrice = (totalPrice / PRODUCT_LIST.length).toFixed(2);
  const averageOfProduct = document.createElement("p");
  averageOfProduct.className = "average";
  averageOfProduct.innerHTML = `Average price for products is  ${averagePrice} UAH`;
  
  container.appendChild(listOfProducts);
  container.appendChild(uList);
  container.appendChild(totalProductlPrice);
  container.appendChild(mostExpensiveProduct);
  container.appendChild(averageOfProduct);
  