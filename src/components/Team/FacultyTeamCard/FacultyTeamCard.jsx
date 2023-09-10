import styles from "./FacultyTeamCard.module.scss";
import { FaGlobe, FaLinkedin, FaFacebook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const FacultyTeamCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={props.img} />
      </div>
      <div className={styles.data}>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.designation}>{props.designation}</p>
        <p className={styles.department}>{props.department}</p>
      </div>
      <div className={styles.links}>
        {props.website && (
          <a
            href={props.website}
            className={styles.logo}
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe className={styles.socialicon} />
          </a>
        )}
        {props.linkedin && (
          <a
            href={props.linkedin}
            className={styles.logo}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.socialicon} />
          </a>
        )}
        {props.facebook && (
          <a
            href={props.facebook}
            className={styles.logo}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className={styles.socialicon} />
          </a>
        )}
        {props.mail && (
          <a
            href={`mailto:${props.mail}`}
            className={styles.logo}
            target="_blank"
            rel="noreferrer"
          >
            <GrMail className={styles.socialicon} />
          </a>
        )}
      </div>
    </div>
  );
};

export default FacultyTeamCard;
