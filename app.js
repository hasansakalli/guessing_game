const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");

deneme = 0;
tahmin = [];
randomNumber = 0;

window.addEventListener("load", newGame)
  function newGame() { 
  var randomNumber = Math.floor(Math.random() * 101);
  yeni = parseInt(randomNumber);
  console.log(randomNumber);
  inputNumber.value="";
  message1.innerHTML = ""
  message2.innerHTML = "" 
  message3.innerHTML = "" 
}

function start() {
  const inputNumber = document.querySelector("#inputNumber").value;

  if (inputNumber < 1 || inputNumber > 100) {
    alert("lütfen 1 ila 100 arasında bir sayı giriniz");
  } else {
        deneme++;
     tahmin.push(inputNumber);
  }

  if (inputNumber == yeni) {
    console.log(inputNumber);
    message1.innerHTML =
      " Tebrikler " + deneme + ". denemenizde sayıyı doğru tahmin ettiniz";
    message1.style.color = "blue";
    message2.innerHTML = "  " + tahmin;
    message3.innerHTML = "  " + deneme;
  
    document.querySelector("#inputNumber").value = "";

    const myTimeout = setTimeout(openText, 3000);
    function openText() {
      window.location.reload();
    }

    Swal.fire({
      position: "top",
      icon: "success",
      title: "Tebrikler... Doğru Tahmin",
      showConfirmButton: false,

      timer: 2000,
    });
  } else if (inputNumber < yeni) {
    message1.innerHTML = "Lütfen daha yüksek bir sayı giriniz";
    message2.innerHTML = "  " + tahmin;
    message3.innerHTML = "  " + deneme;
       document.querySelector("#inputNumber").value = "";
     } else if (inputNumber > yeni) {
    message1.innerHTML = "Lütfen daha küçük bir sayı giriniz";
    message2.innerHTML = "  " + tahmin;
    message3.innerHTML = "  " + deneme;
    document.querySelector("#inputNumber").value = "";
  }
  if(deneme==1){
    document.querySelector(".game2").style.display="block"
    document.querySelector(".game1").style.display="none"
  }else if(deneme==3){
    document.querySelector(".game3").style.display="block"
    document.querySelector(".game2").style.display="none" 
  }else if(deneme==5){
    document.querySelector(".game4").style.display="block"
    document.querySelector(".game3").style.display="none" 
  }else if(deneme==6){
    document.querySelector(".game5").style.display="block"
    document.querySelector(".game4").style.display="none" 
  }else if(deneme==7){
    document.querySelector(".game6").style.display="block"
    document.querySelector(".game5").style.display="none" 
  }else if(deneme==8){
    document.querySelector(".game7").style.display="block"
    document.querySelector(".game6").style.display="none"

    Swal.fire({
      icon: 'error',
      title: 'Oyun Sona erdi',
      text: 'Tekrar denemek için Yeni Oyun açınız',
      
      timer: 3000
    }) 
   
        //  window.location.reload();
        
  }
}
