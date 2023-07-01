import PropTypes from 'prop-types'; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import css from './FriendList.module.css'; // імпорт стилів 

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}; // експорт компоненту FriendListItem

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}; // типізація (опис типів) пропсів компоненту FriendListItem 