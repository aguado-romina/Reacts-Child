import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_PROFILE, ADD_MATCH, REMOVE_MATCH } from "../utils/actions";

const Detail = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getProfile(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_PROFILE, profile: res.data }))
      .catch(err => console.log(err));
  }, []);

  const addFavorite = () => {
    dispatch({
      type: ADD_MATCH,
      profile: state.currentProfile
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_MATCH,
      _id: state.currentProfile._id
    });
  };

  return (
    <>{state.currentProfile ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {state.currentProfile.puppyParent} with {state.currentProfile.puppyName}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Content:</h1>
              <p>{state.currentProfile.body}</p>
            </article>
          </Col>
          {state.matches.indexOf(state.currentProfile) !== -1 ? (
            <button className="btn btn-danger" onClick={removeFavorite}>
                Remove from Favorites!
            </button>
          ) : (
            <button className="btn" onClick={addFavorite}>
                ❤️ Add to Favorites
            </button>
          )}
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Profile</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      <div>loading...</div>
    )}</>
  );
};

export default Detail;
