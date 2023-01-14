import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import css from './Profile.module.css';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats} style={{ backgroundColor: getRandomHexColor() }}>
      <li>
        <span className={css.label}>Followers</span>
        <span className="quantity"> {followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className="css.quantity"> {views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className="quantity"> {likes}</span>
      </li>
    </ul>
  </div>
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,  
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
}