import "./SponsorCard.scss";
import PropTypes from "prop-types";

const SponsorCard = ({ logo, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="sponsorCard">
      <div className="sponsorLogoContainer">
        <img className="sponsorLogo" src={logo} alt="this is an image" />
      </div>
      <div className="spnsrTitle">{title}</div>
    </a>
  );
};

SponsorCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
};

export default SponsorCard;
