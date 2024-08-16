import locations from "../assets/locations";
import classes from "./SearchElement.module.css";

const SearchElement = ({ location, setLocation }) => {
  return (
    <>
    
      {/* <img src={background} alt="background" className={classes.background} /> */}

      <video
        className={classes.background}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://videocdn.cdnpk.net/videos/e17c42b5-ee30-4d91-b910-e5d31df53750/horizontal/previews/clear/large.mp4?token=exp=1723623451~hmac=3d8111c883aac74bd3939e78a328adebb42407d6eabeebfea7d263bd8ef11b61" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.location}>

        <label htmlFor="location">
          <b>Location</b>
        </label>
        <select
          onChange={(event) => setLocation(event.target.value)}
          defaultValue={location}
          className={classes.selection}
          id="location"
          name="location"
        >
          
          <option value="none">--Select--</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      
    </>
  );
};

export default SearchElement;
