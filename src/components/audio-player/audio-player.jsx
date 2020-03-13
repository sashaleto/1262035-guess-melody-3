import React, {Fragment, PureComponent} from 'react';
import PropTypes from "prop-types";

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {src} = this.props;
    return (
      <Fragment>
        <button className="track__button track__button--play" type="button"/>
        <div className="track__status">
          <audio src={src}/>
        </div>
      </Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AudioPlayer;
