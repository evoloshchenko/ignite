import axios from "axios";
import { popularGamesURL, upComingGamesURL, newGamesURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //Fetch Axios
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upComingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
