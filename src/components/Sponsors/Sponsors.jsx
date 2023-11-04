import "./Sponsors.scss";
import SponsorCard from "../SponsorCard/SponsorCard";
import eggheadLogo from "../../assets/sponsors/eggheadLogo.png";
import GMCLogo from "../../assets/sponsors/GMCLogo.png";
import reskillXsparkLogo from "../../assets/sponsors/reskillXsparkLogo.png";

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      logo: eggheadLogo,
      title: "egghead",
      link: "https://egghead.io/",
    },
    {
      id: 2,
      logo: GMCLogo,
      title: "Give My Certificate",
      link: "https://givemycertificate.com/",
    },
    {
      id: 3,
      logo: reskillXsparkLogo,
      title: "Reskill & SparkAR",
      link: "https://reskilll.com/",
    },
  ];

  return (
    <div id="sponsorsSection">
      <div className="sponsorsSectionTitle">SPONSORS</div>
      <div className="sponsorContainer">
        {sponsors.map((sponsor) => {
          return (
            <div key={sponsor.id}>
              <SponsorCard
                logo={sponsor.logo}
                title={sponsor.title}
                link={sponsor.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sponsors;
