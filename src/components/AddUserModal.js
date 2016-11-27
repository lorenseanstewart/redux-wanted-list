import React, { Component } from 'react';
import NewUserFace from './NewUserFace';

class AddUserModal extends Component {
  render() {
    return (
      <div className={`modal ${this.props.open ? 'active' : null}`}>
        <div className="modal-overlay"></div>
        <div className="modal-container">
          <div className="modal-header">
            <button
              onClick={this.props.close}
              className="btn btn-clear float-right"></button>
            <div className="modal-title">
              <h4>Add someone to the Most Wanted list</h4>
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <form>
                <div className="form-group">
                  <label className="form-label">Name:</label>
                  <input
                    value={this.props.name}
                    onChange={this.props.onNameChange}
                    className="form-input"
                    type="text"
                    placeholder="Name or known alias" />
                </div>
                <div className="form-group">
                  <label className="form-label">Reason for arrest:</label>
                  <input
                    value={this.props.reason}
                    onChange={this.props.onReasonChange}
                    className="form-input"
                    type="text"
                    placeholder="What has the perp done?" />
                </div>
                <div className="form-group">
                  <label className="form-label">Reward for delivery to police station:</label>
                  <input
                    value={this.props.reward}
                    onChange={this.props.onRewardChange}
                    className="form-input"
                    type="text"
                    placeholder="Reward" />
                </div>
                <div className="form-group">
                  <label className="form-label">Police sketch &ndash; choose the most accurate facial features.</label>
                  <div className="dds">
                    <select
                      onChange={this.props.onEyeChange}
                      className="form-select">
                      <option value={this.props.eyes}>Choose eyes</option>
                      {[1,2,3,4,5,6,7,8,9].map(num => {
                        return <option key={num} value={num}>{num}</option>
                      })}
                    </select>
                    <select
                      onChange={this.props.onNoseChange}
                      className="form-select">
                      <option value={this.props.nose}>Choose nose</option>
                      {[1,2,3,4,5,6,7,8,9].map(num => {
                        return <option key={num} value={num}>{num}</option>
                      })}
                    </select>
                    <select
                      onChange={this.props.onMouthChange}
                      className="form-select">
                      <option value={this.props.mouth}>Choose mouth</option>
                      {[1,2,3,4,5,6,7,8,9].map(num => {
                        return <option key={num} value={num}>{num}</option>
                      })}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Skin color: (click the colored stripe below)</label>
                  <div className="columns">
                    <div className="column col-6 color-picker-container">
                      <input
                        onChange={this.props.onSkinChange}
                        className="form-input"
                        type="color"
                        value={this.props.skinTone} />
                    </div>
                    <div className="columns col-6 new-avatar-container">
                      <NewUserFace
                        eyes={this.props.eyes}
                        nose={this.props.nose}
                        mouth={this.props.mouth}
                        skin={this.props.skinTone} />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={this.props.createPerson}
              className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUserModal;
