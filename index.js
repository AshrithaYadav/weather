var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
   var apik = "c2d23ba20961753e1c232b9678716471";
function conversion(val){
    return (val - 273).toFixed(3);
}
btn.addEventListener('click',function()
{

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputvalue.value +'&appid='+apik)
  .then(res => res.json())
  .then(data =>
    {
        var nameval = data['name'];
        var weatherDescrip = data['weather']['0']['description'];
        var temparature = data['main']['temp'];
        var windspeed = data['wind']['speed'];
 
        city.innerHTML=`Weather of <span>${nameval}</span>`;
        temp.innerHTML=`Temperature:<span>${conversion(temparature)} C</span>`;
        description.innerHTML=`Sky Condition:<span>${weatherDescrip}</span>`;
        wind.innerHTML=`WindSpeed:<span>${windspeed}km/h</span>`;

    })
    .catch(err=>alert('You entered Wrong City Name'));

});
