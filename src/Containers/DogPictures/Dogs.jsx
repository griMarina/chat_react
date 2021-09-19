import { CircularProgress } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDogsPicturesAction } from "../../Store/Dogs/actions";
import { dogsPicturesSelector } from "../../Store/Dogs/selectors";
import { Error } from "../../Components/Error";
import { RandomDogsPicture } from "../../Components/RandomDogsPicture/RandomDogsPicture";

export const Dogs = () => {
  const { loading, error, dogs } = useSelector(dogsPicturesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    handleUpdatePage();
  }, []);

  const handleUpdatePage = () => {
    dispatch(getDogsPicturesAction());
  };

  if (loading) {
    return (
      <Container className="App-wrap loading" maxWidth="sm">
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return <Error handleUpdatePage={handleUpdatePage} />;
  }

  return <RandomDogsPicture dogs={dogs} handleUpdatePage={handleUpdatePage} />;
};
