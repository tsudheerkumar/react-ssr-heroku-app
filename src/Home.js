import React ,{useEffect, useState} from 'react';
import Flight from './Flight';
import RadioButton from './RadioButton';
import axios from 'axios';
//import "./index.css";
export default props => {
    const [flightData, setFlightData] = useState(props.flights);
    const [isLaunched, setIsLaunched] = useState("No");
    const [isLanded, setIsLanded] = useState("No");
    const launchChangeHandler = (event) => {
        setIsLaunched(event.target.value);
    }
    const landChangeHandler = (event) => {
        setIsLanded(event.target.value);
    }
    useEffect(() => {
        fetchFlights(getUrl());
      }, [isLaunched,isLanded]);
    const getUrl = () => {
        let baseUrl = "https://api.spaceXdata.com/v3/launches?limit=100";
        let finalUrl ='';
        if (isLaunched=="Yes"&& isLanded=="Yes") {
            finalUrl=baseUrl+"&launch_success=true&land_success=true";
        }else if(isLaunched=="Yes"&& isLanded=="No"){
            finalUrl=baseUrl+"&launch_success=true";
        }else if(isLaunched=="No"&& isLanded=="Yes"){
            finalUrl=baseUrl+"&land_success=true";
        }else{
            finalUrl=baseUrl;
        }
        return finalUrl;
    }
    const fetchFlights =(url) => {  
        axios.get(url)
            .then(response => {
                setFlightData(response.data);
            }) 
      };
    
    return <>
        <header>SpacEx Launch Programs</header>
        <div className="row">
        <div className="col-s-12 col-m-3 col-l-2 flight-filter">
                    <div className="flight-launch-land-year row">
                        <h5 className="flight-launch-title">Launch Year</h5>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2006</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2007</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2008</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2009</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button"> 2010</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2011</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2012</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2013</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2014</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2015</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2016</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2017</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2018</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2019</button>
                        <button className="col-s-5 col-m-6 col-l-6 year-button">2020</button>
                    </div>
                    <div className="flight-launch">
                        <h5 className="flight-launch-title row">Successful Launch</h5>
                        <RadioButton 
                        changed={launchChangeHandler} 
                        id="1" 
                        isSelected={ isLaunched === "Yes" } 
                        label="True" 
                        value="Yes" 
                    />
                        <RadioButton 
                        changed={launchChangeHandler} 
                        id="2" 
                        isSelected={ isLaunched === "No" } 
                        label="False" 
                        value="No" 
                    />               
                    </div>
                    <div className="flight-land">
                        <h5 className="flight-landtitle">Successful Land</h5>
                        <RadioButton 
                        changed={landChangeHandler} 
                        id="3" 
                        isSelected={ isLanded === "Yes" } 
                        label="True" 
                        value="Yes" 
                    />
                        <RadioButton 
                        changed={landChangeHandler} 
                        id="4" 
                        isSelected={ isLanded === "No" } 
                        label="False" 
                        value="No" 
                    />  
                    </div>
                </div>
              <div className="flight-container col-s-12 col-m-9 col-l-10 "> 
            {flightData && flightData.map(flight=>(<Flight flight={flight}></Flight>))}
               
            </div>
    </div>
    <footer>Developed by: Sudheer Kumar Tumarada</footer>
    </>
};