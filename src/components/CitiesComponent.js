import React from "react"


export const CitiesComponent = (props) => {
    const { latLongDetails , getDetails} = props;
    return <React.Fragment>
        <h1>Click on City to see more Details</h1>
        <div className="d-flex">
        {latLongDetails.map(({ city , lat, lng}) => <div key={lat+""+lng}>
            <h1 onClick={()=>getDetails(lat , lng)} className="cityButtonCss">{city}</h1>
        </div>)}
        </div>
    </React.Fragment>
}