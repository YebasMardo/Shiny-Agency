import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const StyledLink = styled(Link)`
        padding: 15px;
        color: #8186a0;
        text-decoration: none;
        font-size: 18px;
        ${(props) => 
            props.$isFullLink && `color: white; border-radius: 30px; background-color: #5843E4;`
        }
    `
    return (
        <nav>
            <StyledLink to="/" $isFullLink>Accueil</StyledLink>
            <StyledLink to="/survey/1">Questionnaire</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
        </nav>
    );
};

export default Header;
