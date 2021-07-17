const textInputDOM = document.getElementById("textInput");
const checkboxInputDOM = document.getElementById("checkboxInput");
let data = [];

const fetchData = () => {
  //verinin çekildiği yer
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      //json'dan okunan verinin data array'ine atanması
      data = responseData;
      //veri geldikten sonra filtreleme butonu görünür olsun
      let filterButton = document.querySelector("#filterButton");
      filterButton.setAttribute("style", "");

      //verinin html içerisinde listelendiği fonksiyon
      listData(responseData);
    })
    .catch((err) => {
      //hata yönetimi
      alert("Bir hata oluştu!");
    });
};

//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
  let list = document.querySelector(".list");
  list.innerHTML = data
    .map((element) => {
      return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold'>email:</span> ${element.email}
        </li>
        `;
    })
    .join("");
};

//verinin filtrelenmesini sağlayan fonksiyon
//TODO
const filterData = () => {
  let filteredData = [...data];

  if (checkboxInputDOM.checked) {
    filteredData = filteredData.filter((item) => {
      return item.age >= 18;
    });
  }

  if (textInputDOM.value) {
    filteredData = filteredData.filter((item) => {
      return (
        item.name.toLowerCase().charAt(0) ===
        textInputDOM.value.toLowerCase().charAt(0)
      );
    });
  }
  listData(filteredData);
};
