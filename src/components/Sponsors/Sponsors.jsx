import "./Sponsors.scss";
import SponsorCard from "../SponsorCard/SponsorCard";
import eggheadLogo from "../../assets/sponsors/eggheadLogo.png";
import GMCLogo from "../../assets/sponsors/GMCLogo.png";
import reskillXsparkLogo from "../../assets/sponsors/reskillXsparkLogo.png";

const Sponsors = () => {
  const sponsors = [
    {
      logo: eggheadLogo,
      title: "egghead",
    },
    {
      logo: GMCLogo,
      title: "Give My Certificate",
    },
    {
      logo: reskillXsparkLogo,
      title: "Reskill & SparkAR",
    },
  ];

  return (
    <div id="sponsorsSection">
      <div className="sponsorsSectionTitle">SPONSORS</div>
      <div className="sponsorContainer">
        {sponsors.map((sponsor) => {
          return (
            <>
              <SponsorCard logo={sponsor.logo} title={sponsor.title} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsors;
