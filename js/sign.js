function check() {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const exampleInputEmail1 = document.querySelector(
    "#exampleInputEmail1"
  ).value;
  const exampleInputPassword1 = document.querySelector(
    "#exampleInputPassword1"
  ).value;
  const pasworddanger = document.querySelector("#pasworddanger");
  const maildanger = document.querySelector("#maildanger");
  const formControl = document.querySelector(".form-control");
  const formControls = document.querySelector(".form-controls");
  const text = document.querySelector(".text");
  var i = 5;
  if (!exampleInputEmail1.match(re)) {
    maildanger.classList.remove("d-none");
    maildanger.innerHTML = "შეავსე მეილი!";
    formControl.classList.add("border-danger");
  }else if (exampleInputPassword1 == 0) {
    maildanger.classList.add("d-none");
    formControl.classList.add("border-success");
    formControls.classList.remove("border-danger");
    
    pasworddanger.classList.remove("d-none");
    pasworddanger.innerHTML = "შეავსე პაროლი!";
    formControl.classList.remove("border-danger");
    pasworddanger.classList.add("alert-danger");
  } else {
    formControls.classList.add("border-success");
    formControls.classList.remove("border-danger");
    maildanger.classList.add("d-none");
    pasworddanger.classList.add("d-none");
    pasworddanger.classList.remove("alert-danger");
    setTimeout(function () {
      location.href = "ecomerce.html";
    }, 5000);
    setInterval(function () {
      text.innerHTML = `გადამისამართება მოხდება:<h3>${i--}</h3> წამში`;
    }, 1000);
  }
}
