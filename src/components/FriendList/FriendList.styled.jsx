import styled from '@emotion/styled';

export const FriendsCard = styled.ul`
  margin-top: 50px;
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  border-radius: 4px;
  text-align: center;
  padding: 10px;
`;

export const Status = styled.span`
  border-radius: 50%;
  border: ${props => (props.isOnline ? '10px solid green' : '10px solid red')};
`;

export const Avatar = styled.img`
  margin-left: 10px;
`;

export const Name = styled.p`
  margin-left: 10px;
  font-size: 25px;
  font-weight: 500;
`;
