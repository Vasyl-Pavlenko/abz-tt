import React from 'react';
import { UserItem, Loader } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage } from '../../redux/slices/UserSlice';
import { getUsers, getMoreUsers } from '../../redux/actions';
import { SKELETON_DATA, Skeleton } from '../../utils';
import { StyledButtonContainer, StyledLi, StyledShowMoreButton, StyledUl } from './UserList.styled';
import { toast } from 'react-toastify';

export const UsersList = () => {
  const dispatch = useDispatch();
  const { users, status, hasMoreUsers } = useSelector((state) => state.user);

  const handleNextPage = async () => {
    try {
      await dispatch(nextPage());
      await dispatch(getMoreUsers());
    } catch (error) {
      console.error('Error while fetching users:', error);
      toast.error('Error while fetching users, please try again');
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getUsers());
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Error while fetching users, please try again');
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <StyledUl>
        {status === 'loading'
          ? SKELETON_DATA.map((_, idx) => (
              <StyledLi key={idx}>
                <UserItem userData={Skeleton} />
              </StyledLi>
            ))
          : users.map((userData) => (
              <StyledLi key={userData.id}>
                <UserItem userData={userData} />
              </StyledLi>
            ))}
      </StyledUl>

      <StyledButtonContainer>
        {status === 'loading' ? (
          <Loader />
        ) : (
          hasMoreUsers && (
            <StyledShowMoreButton
              type="button"
              onClick={handleNextPage}
              disabled={status === 'loading'}
              aria-label="button to show more users">
              <p>Show more</p>
            </StyledShowMoreButton>
          )
        )}
      </StyledButtonContainer>
    </div>
  );
};
