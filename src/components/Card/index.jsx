import PropTypes from "prop-types";
import DefaultPicture from "../../assets/picture.jpg";
import styled from "styled-components";

const Card = ({ label, title, picture }) => {
    const finalPicture = picture || DefaultPicture;
    const CardLabel = styled.span`
        color: #5843e4;
        font-size: 22px;
        font-weight: bold;
    `

    const CardImg = styled.img`
        height: 80px;
        width: 80px;
        border-radius: 50%;
    `

    const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: '#F9F9FC';
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
    `
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImg src={finalPicture} alt="freelances" />
            <span>{title}</span>
        </CardWrapper>
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
