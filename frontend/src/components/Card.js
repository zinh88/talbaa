import React from "react";
import Rating from "./Rating";
import { Author, CardFooter, CardPic, Description, StyledCard, Tags, Title, Info, Tag, Bottom, RatingBar, Stars} from "./styles/Card.styled";

const Card = ({card : { _id, title, description, pic, rating, tags, created_by}}) => {
    return (
        <a style={{ "text-decoration" : "none", "color" : "black"}} href={`/coursePage/${_id}`}>
        <StyledCard>
            <CardPic src={pic}/>
            <CardFooter>
                <Info>
                    <Title>{title}</Title>
                    <Author>Created By: {created_by}</Author>
                    <Description>{description}</Description>
                </Info>
                <Bottom>
                <Tags>
                    {
                        tags.map((tag, index) => 
                            <Tag key={index}>{tag}</Tag>
                        )
                    }
                </Tags>
                <RatingBar>
                    <Stars>
                        <Rating rating={rating} />
                    </Stars>
                </RatingBar>
                </Bottom>

            </CardFooter>
        </StyledCard>
        </a>
    )
}

export default Card;