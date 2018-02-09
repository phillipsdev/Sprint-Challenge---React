import React from 'react';
import styled from 'styled-components';
import { Stats } from 'fs';

const StyledCharCard = styled.div`
    background-color: transparent;
    box-sizing: border-box;
    border: 5px solid black;
    width: 200px;
    display: in-line;
    color: black;
`;

const CharacterCard = (props) => {
    return (
        <StyledCharCard>
            <div>Name: {props.character.name}</div>
            <div>Gender: {props.character.gender}</div>
            <div>Birth Year: {props.character.birth_year}</div>
            <div>Eye Color: {props.character.eye_color}</div>
            <div>Hair Color: {props.character.hair_color}</div>
            <div>Skin Color: {props.character.skin_color}</div>
            <div>Height: {props.character.height}</div>
            <div>Mass: {props.character.mass}</div>
        </StyledCharCard>
    )
}

export default CharacterCard;