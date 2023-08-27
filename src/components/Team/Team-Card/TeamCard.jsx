import styles from "./TeamCard.module.scss";
import fb from "../../../assets/images/fb.svg";
import lin from "../../../assets/images/linkedin.svg";
import github from "../../../assets/images/github.svg";

const TeamCard = (props) => {
  const displayID = props.Description === "" ? "none" : "block";
  return (
    <div
      className={styles.core_mem}
      style={{ height: displayID === "none" ? "24rem" : "26rem" }}
      key={props._id}
    >
      <div className={styles.body}>
        <div className={styles.core_images}>
          <img src={props.ImageSrc} alt="member avatar" loading="lazy" />
        </div>
        <div className={styles.details}>
          <h3 className={styles.core_title}>{props.Name}</h3>
          <p className={styles.core_description} style={{ display: displayID }}>
            {props.Description}
          </p>
        </div>
        <p className={styles.core_mem_text}>{props.Domain}</p>
        <div className={styles.social_media_core}>
          <a
            href={props.Linkdin}
            className={styles.SocialLogoCore}
            target="_blank"
            rel="noreferrer"
          >
            <img src={lin} alt="LinkedIn icon" className={styles.socialicon} />
          </a>
          <a
            href={props.Facebook}
            className={styles.SocialLogoCore}
            target="_blank"
            rel="noreferrer"
          >
            <img src={fb} alt="Facebook icon" className={styles.socialicon} />
          </a>
          <a
            href={props.Twitter}
            className={styles.SocialLogoCore}
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github icon" className={styles.socialicon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
