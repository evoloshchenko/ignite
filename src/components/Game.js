//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({
  name,
  platforms,
  released,
  playtime,
  image,
  ratings,
  genres,
}) => {
  console.log(platforms);
  return (
    <StyledGame>
      <img src={image} alt="{name}" />
      <h3>{name}</h3>
      <p>Platforms:</p>
      <ul>
        {platforms.map((item) => (
          <li>{item.platform.name}</li>
        ))}
      </ul>
      <p>Released date {released}</p>
      <p>Playtime hours: {playtime}</p>
      <p>Ratings: {ratings[0].percent}</p>
      <p>Genre: {genres[0].name} </p>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: left;
  padding: 0rem 2.5rem 0rem 2.5rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  ul {
    list-style-type: none;
  }

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    background-position: center;
    /* object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto; */
  }
`;

export default Game;
