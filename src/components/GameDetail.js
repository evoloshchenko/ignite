//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import nintendo from "../img/nintendo.svg";
import xbox from "../img/xbox.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const GameDetail = ({ pathId }) => {
  const history = useNavigate();

  //Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history("/");
    }
  };

  //Get Platform Images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo 3DS":
        return nintendo;
      case "Nintendo Switch":
        return nintendo;
      case "macOS":
        return apple;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };
  //Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <h3 className="title">{game.name}</h3>
                <p className="rate">Rating: {game.rating} </p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((item) => (
                    <img
                      className="icons"
                      key={item.platform.id}
                      src={getPlatform(item.platform.name)}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results?.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
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
  z-index: 5;
  img.icons {
    width: 2.5rem;
    height: 2.5rem;
  }
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
