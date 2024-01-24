// 1. İstifadəçidən adını soruşun və cavab olaraq çap edin:
// "Salam, onun adı!"

// function FindName()
// {
//     var username=prompt("Please Enter Your Name: ");
//     return "Salam,"+username+" Necesen?";
// }

// var FindNameResult=FindName();
// console.log(FindNameResult);

// 2. İstifadəçidən onun doğum ilini soruşun, hesablayın
// onun neçə yaşı var və nəticəni çap edin. Cari ili göstərin
// kodda sabit olaraq.

// function FindAge()
// {
//     var Birthyear;
//     var CurrentYear=new Date().getFullYear();
//     while(true)
//     {
//       Birthyear=prompt("Enter Your Birth Year: ");
//      if(Birthyear>CurrentYear || Birthyear<=0)
//      {
//         console.warn("Wrong Birthyear!!");
//      }
//      else{
//      return CurrentYear-Birthyear;
//      }
//     }
// }

// console.log(FindAge());

// 3. İstifadəçidən kvadratın tərəfinin uzunluğunu soruşun və belə kvadratın perimetrini göstərin.

// function FindField()
// {
//     var length=prompt("Enter Length: ");

//     var field=4*length;
//     return field
// }
// console.log(FindField());

// 4. İstifadəçidən dairənin radiusunu soruşun və çap edin
// belə bir dairənin sahəsi.

// function FindSahe()
// {
//     var Pi=3.14;
//     var radius=prompt("Enter Radius: ");
//     var sahe=Pi*radius*radius;
//     return sahe;
// }
// console.log(FindSahe());

// 5. İstifadəçidən iki arasındakı məsafəni km ilə soruşun
// şəhərlər və ora neçə saat çatmaq istəyir. Hərəkət etmək üçün lazım olan sürəti hesablayın
// vaxtında almaq.

// function FindSpeed()
// {
//     var distance=prompt("Enter Distance: ");
//     var time=prompt("Enter Time: ");
//     var speed=distance/time;
//     return speed;
// }
// console.log(FindSpeed());

// 6. Valyuta konvertorunu həyata keçirin. İstifadəçi dollara daxil olur, proqram avroya çevrilir. Valyuta məzənnəsini saxla
// Sabit.

// function MoneyConventor()
// {
//     var cencure=0.92;
//     var dollar=prompt("Enter Dollar Count: ");
//     var euro=cencure*dollar;
//     return euro;
// }
// console.log(MoneyConventor());


// 7. İstifadəçi flash sürücünün ölçüsünü GB ilə müəyyən edir. Proqram
// Bir flash sürücüyə neçə 820 MB fayl uyğun olduğunu hesablamalıyam.


// function FindCapacity()
// {
//     var flashCapacity=prompt("Enter Flash Capacity(With GB): ");
//     var fileCount=(flashCapacity*1000)/820;
//     fileCount=fileCount-(fileCount%1)
//     return fileCount;
// }
// console.log(FindCapacity());

// 8. İstifadəçi cüzdandakı pulun miqdarını və birinin qiymətini daxil edir
// şokoladlar. Proqram nə qədər şokoladın ola biləcəyini göstərir
// istifadəçi satın alır və nə qədər dəyişiklik qalıb.


// function BuyChoclate()
// {
//     var wallet=prompt("Enter your wallet(MANAT): ");
//     var choclateCost=prompt("Enter Choclate Cost(QEPIK): ");
//     var choclateCount=(wallet*100)/choclateCost;
//     choclateCount=Math.floor(choclateCount);
//     var reseduce=(wallet*100)-(choclateCost*choclateCount);
//     return "Choclate Count->>"+ choclateCount + "\n" + "Reseduce(Qepik)->>" + reseduce;
// }
// console.log(BuyChoclate());

// 9. İstifadəçidən üç rəqəmli nömrə istəyin və çap edin
// arxaya. Problemi həll etmək üçün sizə lazım olacaq
// % operatoru (bölmə qalığı).



// function ReverseNumber()
// {
//     var number=prompt("Enter Number: ");
//     var reversed=0;
//     while(number>=1)
//     {
//         reversed=(reversed*10)+(number%10);
//         number=Math.floor(number/10);
//     }
//     return reversed;
// }
// console.log(ReverseNumber());

// 10. İstifadəçidən tam ədəd istəyin və cavab olaraq çap edin,
// rəqəmin cüt olub-olmamasından asılı olmayaraq. Tapşırıqda məntiqdən istifadə edin
// operatorlar. Tapşırıqda if və ya keçiddən istifadə etməyə ehtiyac yoxdur.

// function CheckEven() {
//     var number=prompt("Enter Number: ");
//     return (number % 2 === 0) ? "Even" : "Odd";
// }

// 11. Restoranda bir neçə növ oturacaq var:
// 1) Kiçik masa - 2 nəfərə qədər;
// 2) Orta masa - 4 nəfərə qədər;
// 3) Böyük masa - 8 nəfərə qədər.
// Restoran bir masada 8 nəfərdən çox şirkət yerləşdirə bilməyəcək :’-(
// İstifadəçidən gələn qonaqların sayını qəbul edəcək funksiyanı yazın və ən uyğun cədvəli təklif edin.

// function Place(personCount) {
//     if (personCount <= 2) {
//         return "Kicik masa seçin";
//     } else if (personCount <= 4) {
//         return "Orta masa secin";
//     } else if (personCount <= 8) {
//         return "Boyuk masa secin";
//     } else {
//         return "isteyinize uygun Masa Yoxdur!";
//     }
// }

// var personCount = prompt("Enter Person Count:");

// alert(masa(parseInt(personCount)));



// 12. Mağaza müştərilər haqqında aşağıdakı məlumatları saxlayır:
// - Adı;
// - Yaş;
// - Sifarişlərin sayı;
// - Sifarişlərin məbləğləri.
// Mağaza daimi müştərilərə və 60 yaşdan yuxarı müştərilərə endirim edir.
// Müştəri ümumi məbləği 100 AZN və daha çox olan 4 və ya daha çox sifariş vermişsə, daimi müştəri sayılır.
// Müştərinin məlumatlarını giriş kimi qəbul edəcək və müştərinin endirim alıb-almamasından asılı olmayaraq məlumatı qaytaracaq bir funksiya yazın.


// function ResturantProgram()
// {
//     var Name=prompt("Enter Name: ");
//     var Age=prompt("Enter Age: ");
//     var Order=prompt("Enter Order Count: ");
//     var Cost=prompt("Enter Order Cost:");
//     if(Cost>=100)
//     {
//         Cost=Cost-((Cost*20)/100);
//     }
//     if(Age>=60)
//     {
//         Cost=Cost-((Cost*20)/100);
//     }
//     if(Order>=4)
//     {
//         Cost=Cost-((Cost*20)/100);
//     }
//     return "Cost->>"+Cost;
// }

// console.log(ResturantProgram());