import React from "react";
import {
    Container, FeedbackTitle, FeedbackMarks, FeedbackButton,
    FeedbackStatistics, FeedbackList, FeedbackItem
} from "./Feedback.styled";



function Feedback() {
    return (
        <Container>
            <FeedbackTitle>Please leave feedback</FeedbackTitle>
            <FeedbackMarks>
                <FeedbackButton type="button">Good</FeedbackButton>
                <FeedbackButton type="button">Neutral</FeedbackButton>
                <FeedbackButton type="button">Bad</FeedbackButton>
            </FeedbackMarks>
            <FeedbackStatistics>Statistics</FeedbackStatistics>
            <FeedbackList>
                <FeedbackItem></FeedbackItem>
            </FeedbackList>
        </Container>
    )
}

export default Feedback
