import React from "react";
import PinSVG from "../images/pin.svg";

export default function Trip(props) {
  return (
    <section className="trip">
      <div className="trip__img">
        <img src={props.imageUrl} />
      </div>
      <div className="trip__details">
        <div className="trip__location">
          <img src={PinSVG} />
          <p className="trip__location-country">{props.location}</p>
          <a href={props.googleMaps} className="trip__location-map">
            View on Google Maps
          </a>
        </div>
        <h2 className="trip__header">{props.title}</h2>
        <p className="trip__date">
          {props.startDate} - {props.endDate}
        </p>
        <div className="trip__summary">
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
}
