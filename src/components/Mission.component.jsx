import PropTypes from 'prop-types';
import './styles.components/Mission.style.scss';

function Mission({ mission }) {
  const { description, mission_name: missionName } = mission;
  return (
    <div className="mission">
      <p>{missionName}</p>
      <span>{description}</span>
      <button type="button">Click</button>
    </div>
  );
}

Mission.defaultProps = {
  mission: {
    mission_name: '',
    description: '',
  },
};

Mission.propTypes = {
  mission: PropTypes.shape(
    {
      mission_name: PropTypes.string,
      description: PropTypes.string,
      // flickr_images: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
    },
  ),
};

export default Mission;
