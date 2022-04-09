import React from "react";
import { Author, CardFooter, CardPic, Description, StyledCard, Tags, Title, Info, Tag, Bottom, Rating, Stars} from "./styles/Card.styled";

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
                    <Tag>tag #1</Tag>
                    <Tag>tag #2</Tag>
                    <Tag>tag #3</Tag>
                </Tags>
                <Rating>
                    <Stars>★★★★★</Stars>
                </Rating>
                </Bottom>

            </CardFooter>
        </StyledCard>
    )
}

export default Card;