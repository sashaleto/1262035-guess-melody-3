import React from 'react';
import PropTypes from "prop-types";
import AudioPlayer from "../audio-player/audio-player.jsx";

const ArtistQuestionScreen = ({question, onAnswer}) => {
  const {answers, song} = question;
  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          <AudioPlayer
            src={song.src}
            isPlaying={true}
          />
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer, i) => (
          <div key={answer.artist} className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${i}`} id={`answer-${i}`}
              onChange={(evt) => {
                evt.preventDefault();
                onAnswer(question, answer);
              }}
            />
            <label className="artist__name" htmlFor={`answer-${i}`}>
              <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
              {answer.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    song: PropTypes.shape({
      src: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }),
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};
export default ArtistQuestionScreen;
