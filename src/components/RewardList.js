import React, { Component } from 'react';
import {connect} from 'react-redux';

class RewardList extends Component {
  renderRewards() {
    if(this.props.wantedPeople) {
      return this.props.wantedPeople.map(r => {
        return (
          <div key={r.name} className="card">
            <div className="card-body">
              <p>{r.reward}</p>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <h2>Reward List:</h2>
        {this.renderRewards()}
      </div>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    wantedPeople: state.wantedPeople
  }
}

export default connect(mapStateToProps, null)(RewardList);
