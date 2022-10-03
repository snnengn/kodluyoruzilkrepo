let userName = prompt("Lütfen Adınızı Giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = `Hoşgeldin, ${userName.length > 0 ? userName : "Kullanıcı Bilgisi Bulunamadı :("}`

let mailAdress = prompt("Lütfen Mail adresinizi Giriniz:")
let mail = document.querySelector("#mail")
mail.innerHTML = `${mailAdress.length > 0 ? mailAdress : "Kullanıcı Bilgisi Bulunamadı :("}`


function showTime() {
    const today = new Date();  
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = h < 10 ? "0" + h : h        //
    m = m < 10 ? "0" + m : m        //  Eğer saat , dakika , saniye 10'dan küçükse başına 0 koyar
    s = s < 10 ? "0" + s : s        //

    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let d = days[today.getDay()];
    let info = document.querySelector("#myClock")
    info.innerHTML = `${h}:${m}:${s} - ${d}`
  }
  
  setInterval(showTime, 1000);


  showTime();

    