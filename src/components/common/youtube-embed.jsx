import PropTypes from "prop-types";
import ReactPlayer from "react-player/youtube";

const YoutubeEmbed = ({ url }) => {
  const playerConfig = {
    youtube: {
      playerVars: { showinfo: 1 },
    },
  };

  return (
    <div className="aspect-video">
      <ReactPlayer
        url={url}
        config={playerConfig}
        controls={true}
        className="w-full h-full"
        width="100%"
        height="100%"
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  url: PropTypes.string,
};

export default YoutubeEmbed;
