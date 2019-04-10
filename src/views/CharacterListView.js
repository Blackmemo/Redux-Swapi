import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { CharacterList } from "../components";
import { getPeople } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    console.log(this.props.characters)
    if (this.props.fetching) {
     <Loader type='Ball-Triangle' color='#00BFFF' height='90' width='60' />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.isFetching,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  {
    getPeople
  }
)(CharacterListView);
