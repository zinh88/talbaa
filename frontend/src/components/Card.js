import React from "react";
import Rating from "./Rating";
import { Author, CardFooter, CardPic, Description, StyledCard, Tags, Title, Info, Tag, Bottom, RatingBar, Stars} from "./styles/Card.styled";

const Card = ({card : { title, desc, pic, rating, tags, creator}}) => {
    return (
        <StyledCard>
            <CardPic src={pic}/>
            <CardFooter>
                <Info>
                    <Title>{title}</Title>
                    <Author>{creator}</Author>
                    <Description>{desc}</Description>
                </Info>
                <Bottom>
                <Tags>
                    {
                        tags.map((tag, index) => 
                            <Tag index={index}>{tag}</Tag>
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
    )
}

export default Card;