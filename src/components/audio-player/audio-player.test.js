import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from "./audio-player.jsx";

const mockSong = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
};

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <AudioPlayer
      isPlaying={false}
      src={mockSong.src}
    />
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
