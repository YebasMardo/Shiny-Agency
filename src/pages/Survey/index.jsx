import React from "react";
import { useParams } from "react-router-dom";

const Survey = () => {
    const { questionNumber } = useParams();
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
        </div>
    );
};

export default Survey;
