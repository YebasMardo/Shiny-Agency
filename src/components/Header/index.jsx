import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/">Accueil</Link>
            <Link to="/survey">Questionnaire</Link>
        </div>
    );
};

export default Header;
