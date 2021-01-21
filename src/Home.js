import React ,{useEffect, useState} from 'react';
import Flight from './Flight';
import NoFlight from './NoFlight';
import RadioButton from './RadioButton';
import axios from 'axios';
//import "./index.css";
const yearsData =[
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020'
];
export default props => {
    const [flightData, setFlightData] = useState(props.flights);
    const [isLaunched, setIsLaunched] = useState('');
    const [isLanded, setIsLanded] = useState('');
    const [launchYear, setLaunchUear] = useState('');
    const [isMount, setIsMount] = useState(true);
    const launchChangeHandler = (event) => {
        setIsLaunched(event.target.value);
    }
    const landChangeHandler = (event) => {
        setIsLanded(event.target.value);
    }
    const yearChangeHandler = (event) => {
        setLaunchUear(event.target.value);
    }
    useEffect(() => {
        if(isMount){
            setIsMount(false);
            return;
        }
        fetchFlights(getUrl());
      }, [isLaunched,isLanded,launchYear]);
    
    const getUrl = () => {
        let finalUrl ="https://api.spaceXdata.com/v3/launches?limit=100";
        if(launchYear){
            finalUrl = finalUrl+"&launch_year="+launchYear;
        }
        if(isLaunched){
            let label = isLaunched=='Yes'?true:false;
            finalUrl=finalUrl+"&land_success="+label;
        }
        if(isLanded){
            let label = isLanded=='Yes'?true:false;
            finalUrl=finalUrl+"&launch_success="+label;
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
                        <div>
                        {
                            yearsData.map((year,index)=>
                                <RadioButton 
                                    changed={yearChangeHandler} 
                                    id={index + year} 
                                    isSelected={ launchYear === year } 
                                    label={year}
                                    value={year}
                                />
                            )
                        }</div>
                    </div>
                    <div className="flight-launch" role="form">
                        <h5 className="flight-launch-title row">Successful Launch</h5>
                        <RadioButton 
                        changed={launchChangeHandler} 
                        id="1Yes" 
                        isSelected={ isLaunched === "Yes" } 
                        label="True" 
                        value="Yes" 
                    />
                        <RadioButton 
                        changed={launchChangeHandler} 
                        id="2Yes" 
                        isSelected={ isLaunched === "No" } 
                        label="False" 
                        value="No" 
                    />               
                    </div>
                    <div className="flight-land">
                        <h5 className="flight-landtitle">Successful Land</h5>
                        <RadioButton 
                        changed={landChangeHandler} 
                        id="3True" 
                        isSelected={ isLanded === "Yes" } 
                        label="True" 
                        value="Yes" 
                    />
                        <RadioButton 
                        changed={landChangeHandler} 
                        id="4False" 
                        isSelected={ isLanded === "No" } 
                        label="False" 
                        value="No" 
                    />  
                    </div>
                </div>
              <div className="flight-container col-s-12 col-m-9 col-l-10 "> 
            {flightData && flightData.map(flight=>(<Flight flight={flight}></Flight>))}
            {flightData.length == 0 &&
                <NoFlight isLaunched={isLaunched} isLanded={isLanded} launchYear={launchYear}></NoFlight>
            }
        </div>
    </div>
    <footer>Developed by: Sudheer Kumar Tumarada</footer>
    </>
};