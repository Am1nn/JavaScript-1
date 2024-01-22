
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

function FindSpeed()
{
    var distance=prompt("Enter Distance: ");
    var time=prompt("Enter Time: ");
    var speed=distance/time;
    return speed;
}
console.log(FindSpeed());

// 6. Valyuta konvertorunu həyata keçirin. İstifadəçi dollara daxil olur, proqram avroya çevrilir. Valyuta məzənnəsini saxla
// Sabit.

// 7. İstifadəçi flash sürücünün ölçüsünü GB ilə müəyyən edir. Proqram
// Bir flash sürücüyə neçə 820 MB fayl uyğun olduğunu hesablamalıyam.

// 8. İstifadəçi cüzdandakı pulun miqdarını və birinin qiymətini daxil edir
// şokoladlar. Proqram nə qədər şokoladın ola biləcəyini göstərir
// istifadəçi satın alır və nə qədər dəyişiklik qalıb.

// 9. İstifadəçidən üç rəqəmli nömrə istəyin və çap edin
// arxaya. Problemi həll etmək üçün sizə lazım olacaq
// % operatoru (bölmə qalığı).

// 10. İstifadəçidən tam ədəd istəyin və cavab olaraq çap edin,
// rəqəmin cüt olub-olmamasından asılı olmayaraq. Tapşırıqda məntiqdən istifadə edin
// operatorlar. Tapşırıqda if və ya keçiddən istifadə etməyə ehtiyac yoxdur.

// 11. Restoranda bir neçə növ oturacaq var:
// 1) Kiçik masa - 2 nəfərə qədər;
// 2) Orta masa - 4 nəfərə qədər;
// 3) Böyük masa - 8 nəfərə qədər.
// Restoran bir masada 8 nəfərdən çox şirkət yerləşdirə bilməyəcək :’-(
// İstifadəçidən gələn qonaqların sayını qəbul edəcək funksiyanı yazın və ən uyğun cədvəli təklif edin.

// 12. Mağaza müştərilər haqqında aşağıdakı məlumatları saxlayır:
// - Adı;
// - Yaş;
// - Sifarişlərin sayı;
// - Sifarişlərin məbləğləri.
// Mağaza daimi müştərilərə və 60 yaşdan yuxarı müştərilərə endirim edir. 
// Müştəri ümumi məbləği 100 AZN və daha çox olan 4 və ya daha çox sifariş vermişsə, daimi müştəri sayılır. 
// Müştərinin məlumatlarını giriş kimi qəbul edəcək və müştərinin endirim alıb-almamasından asılı olmayaraq məlumatı qaytaracaq bir funksiya yazın.