import locationIcon from "../../assets/location.png";
import "../Travel Journey/travel.css";

const Entry = (props) => {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="entry-details">
        <div className="entry-header">
          <img className="location-icon" src={locationIcon} alt="Location Marker" />
          <span className="country-name">{props.country}</span>
          <a className="google-maps-link" href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>
        <h2 className="entry-title">{props.title}</h2>
        <p className="entry-date">{props.date}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
};

export default Entry;
