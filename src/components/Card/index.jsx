import PropTypes from "prop-types";
import DefaultPicture from "../../assets/picture.jpg";

const Card = ({ label, title, picture }) => {
    const finalPicture = picture || DefaultPicture;
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
            <span>{label}</span>
            <img src={finalPicture} alt="freelances" height={80} width={80} />
            <span>{title}</span>
        </div>
    );
};

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Card.defaultProps = {
    label: "",
    title: "",
    picture: DefaultPicture,
};

export default Card;
