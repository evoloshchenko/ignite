//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux/es/exports";

const GameDetail = () => {
  //Data
  const { screen, game } = useSelector((state) => state.detail);
  return (
    <CardShadow>
      <Detail>
        <Stats>
          <div className="rating">
            <h3 className="title">{game.name}</h3>
            <p className="rate">Rating: {game.rating} </p>
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {game.platforms?.map((item) => (
                <h3 key={item.platform.id}>{item.platform.name}</h3>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={game.background_image} alt={game.background_image} />
        </Media>
        <Description>
          <p>{game.description_raw}</p>
        </Description>
        <div className="gallery">
          {screen.results?.map((screen) => (
            <img src={screen.image} key={screen.id} alt={screen.image} />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
  h3.title {
    font-size: 2rem;
    font-family: "Abril Fatface", cursive;
    font-weight: lighter;
  }
  p.rate {
    font-size: 1.2rem;
    text-decoration: underline #010161;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  h3 {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  img {
    margin: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
