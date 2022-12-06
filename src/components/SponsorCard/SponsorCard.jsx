import "./SponsorCard.scss";
import PropTypes from "prop-types";

const SponsorCard = ({ logo, title }) => {
  return (
    <div className="sponsorCard">
      <div className="sponsorLogoContainer">
        <img className="sponsorLogo" src={logo} alt="this is an image" />
      </div>
      <div className="spnsrTitle">{title}</div>
    </div>
  );
};

SponsorCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
};

export default SponsorCard;
