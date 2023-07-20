import React,{useState} from "react";

const App=()=>{
    const [latitude, setLatitude] = useState("");
    const [longitude,setLongitude] = useState("");
  const [hemisphere,setHemisphere] = useState("");
const [month, setMonth] = useState(new Date().getMonth());

function getLocation(){
    //search navigator in the console of the any side
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
           (location)=>{
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
          
if(location.coords.latitude >0){
    setHemisphere("Northen Hemisphere");
}
else if(location.coords.latitude <0){
    setHemisphere("Southern Hemisphere");
}
else{
    setHemisphere("Equator");
}
});
}
}
    return(
        <div>
        {/* <h1>Hemisphere: {hemisphere}</h1>
        <h1> Latitude: {latitude} </h1>
        <h1>Longitude: {longitude}</h1>
        <h1>Months: {month}</h1> */}

<button onClick={getLocation}>Get Location</button>
        
        {
           (hemisphere =="Northen Hemisphere" && month>=2 &&month<=9)||
           (hemisphere =="Southern Hemisphere" && month<2 &&month>9)

           ?
           (
                <div>
                    <h1>It's Summer in the {hemisphere} </h1>
                    
                    <img src=" https://i.ytimg.com/vi/HzErgJjLN0A/maxresdefault.jpg" alt =" summer "/>
                </div>
            ) : (
                (hemisphere =="Northen Hemisphere" && month<2 &&month>9)||
           (hemisphere =="Southern Hemisphere" && month>=2 &&month<=9)
?(
                    <div>
                <h1> Its Winter in the {hemisphere}</h1>
                <img src="https://pbs.twimg.com/media/DpePTTuWsAAxmhT.jpg" 
                alt="Winter"/>
              </div>
                ):(
                    <h1>Relax we are fetching......</h1>
                )


                
            )
        }
        </div>
    )
}
export default  App;