const submitBtn=document.getElementById('submitBtn');
const cityname=document.getElementById('cityname');
const city_Name=document.getElementById('city_name');

const dayName=document.getElementById("day");

const today_date=document.getElementById("today_date");

const temp_status =document.getElementById('temp_status');
const temp_Real_val =document.getElementById('temp_Real_val');

const datahide=document.querySelector('.middle-layer')


let day=new Date().getDay();

let date = new Date();
let days = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = days + " " +month+" "+year;

let dayname;
if(day==1){
dayname="Monday";
}else if(day==2){
dayname="Tuesday";
}else if(day==3){
dayname="wednesday";
}else if(day==4){
dayname="Thursday";
}else if(day==5){
dayname="Friday";
}else if(day==6){
dayname="Saturday";
}else if(day==0){
dayname="Sunday";
}

dayName.innerText=dayname;
date.innerText=currentDate;

const getinfo=async(event)=>{
    event.preventDefault();
    
    const appid="ac8c131b86b4ea31e09c52cb3d49c550";
 
  let cityval=cityname.value;
   

  if(cityval===""){
    city_Name.innerText="Plz enter the location";
   datahide.classList.add('data_hide');
}else{

    try{
        let url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+cityval+"&appid="+appid+"";
        const response= await fetch(url);
       const data=await response.json();
       const arrData=[data];
       

        city_Name.innerText=arrData[0].name + " "+ arrData[0].sys.country;
        temp_Real_val.innerText=arrData[0].main.temp;
       

           const tempmod=arrData[0].weather[0].main;

           if(tempmod ==="Clear"){
            temp_status.innerHTML='<i class="fas fa-sun"></i>';
         }else if(tempmod==="Clouds"){
            temp_status.innerHTML='<i class="fas fa-cloud" ></i>';
         }else if(tempmod==="Rain"){
            temp_status.innerHTML='<i class="fas fa-rain"></i>';
         }else{
            temp_status.innerHTML='<i class="fas fa-sun" ></i>';

         }

        datahide.classList.remove('data_hide');

    }catch{
        city_Name.innerText="Plz Enter The Valid Location ☣";
        datahide.classList.add('data_hide');

    }
   
     
  }
}

submitBtn.addEventListener('click',getinfo);