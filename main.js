let name = document.getElementById("name");
let email = document.getElementById("email");
let Element = document.querySelector("input");
let img = document.querySelector("img");

Element.addEventListener("change", function () {
  let url = URL.createObjectURL(Element.files[0]);

  // console.log(url);
});
let btnSave = document.getElementById("btn-one");
let btnLook = document.getElementById("btn-two");
let btnDel = document.getElementById("btn-three");
let list = document.getElementById("list");
function allInp(liInp) {
  if (localStorage.getItem("all[0]") === null) {
    localStorage.setItem("all[0]", "[]");
  }
  let data = JSON.parse(localStorage.getItem("all[0]"));
  data.push(liInp);
  // console.log(data);
  localStorage.setItem("all[0]", JSON.stringify(data));
  readTask();
}
function readTask() {
  if (localStorage.getItem("all[0]") === null) {
    localStorage.setItem("all[0]", "[]");
  }

  btnSave.addEventListener("click", () => {
    if (name.value === "")
      if (email.value === "") {
        alert("Заполните поле");
        return;
      }
    // let obj = { name: name.value };
    let obj = { name: name.value, email: email.value };

    allInp(obj);
    readTask();
    // name.value = "";
    // email.value = "";
    // img.value = "";
  });

  btnLook.addEventListener("click", e => {
    let data = JSON.parse(localStorage.getItem("all[0]"));
    // console.log(data);
    list.innerHTML = "";
    data.forEach((item, index) => {
      let li = document.createElement("p");
      li.innerHTML = `Name: ${item.name}
      <br> Email: ${item.email} `;
      let url = URL.createObjectURL(Element.files[0]);
      img.src = url;
      list.append(li);
      readTask();
      btnDel.addEventListener("click", () => {
        // console.log(index);
        deleteTask(index);
      });
    });
  });
  function deleteTask(index) {
    let data = JSON.parse(localStorage.getItem("all[0]"));
    data.splice(index);
    localStorage.setItem("all[0]", JSON.stringify(data));
    readTask();
    list.innerHTML = "";
    let imgdel = document.getElementById("delete");
    imgdel.style.display = "none";
    data.forEach((item, index) => {
      let li = document.createElement("p");
      li.innerHTML = `Name: ${item.name}
      <br> Email: ${item.email} `;
      list.append(li);
      readTask();
    });
  }
}
readTask();
