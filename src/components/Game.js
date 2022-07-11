//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, platforms, released, image, ratings, genres, id }) => {
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <img src={image} alt="{name}" />
      <h3>{name}</h3>
      <p>Platforms:</p>
      <ul>
        {platforms.map((item) => (
          <li key={item.platform.id}>
            {item.platform.name ? item.platform.name : ""}
          </li>
        ))}
      </ul>
      <p>Released date {released}</p>
      <p>Ratings: {ratings[0] ? ratings[0].percent : "no rating"}</p>
      <p>Genre: {genres[0] ? genres[0].name : "no genre"} </p>
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
    /* list-style-type: none; */
  }

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    background-position: center;
  }
`;

export default Game;
