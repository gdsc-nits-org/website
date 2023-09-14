import styles from "./TeamCard.module.scss";
import {
  FaGlobe,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaBehanceSquare,
} from "react-icons/fa";

const TeamCard = (props) => {
  const displayID = props.Description === "" ? "none" : "block";
  return (
    <div
      className={styles.core_mem}
      style={{ height: displayID === "none" ? "24rem" : "26rem" }}
    >
      <div className={styles.body}>
        <div className={styles.core_images}>
          <img src={props.imageSrc} alt="member avatar" loading="lazy" />
        </div>
        <div className={styles.details}>
          <h3 className={styles.core_title}>{props.Name}</h3>
          <p className={styles.core_description} style={{ display: displayID }}>
            {props.Description}
          </p>
        </div>
        <p className={styles.core_mem_text}>{props.Domain}</p>
        <div className={styles.social_media_core}>
          {props.Website && (
            <a
              href={props.Website}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe className={styles.socialicon} />
            </a>
          )}
          {props.Linkedin && (
            <a
              href={props.Linkedin}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className={styles.socialicon} />
            </a>
          )}
          {props.Facebook && (
            <a
              href={props.Facebook}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className={styles.socialicon} />
            </a>
          )}
          {props.Github && (
            <a
              href={props.Github}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className={styles.socialicon} />
            </a>
          )}
          {props.Behance && (
            <a
              href={props.Behance}
              className={styles.SocialLogoCore}
              target="_blank"
              rel="noreferrer"
            >
              <FaBehanceSquare className={styles.socialicon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
