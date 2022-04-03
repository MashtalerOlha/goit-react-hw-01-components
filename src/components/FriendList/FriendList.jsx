import PropTypes from 'prop-types';
import {
  FriendsCard,
  FriendCard,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsCard>
      {friends.map(friend => (
        <FriendCard key={friend.id}>
          <Status isOnline={friend.isOnline}></Status>
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </FriendCard>
      ))}
    </FriendsCard>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};
