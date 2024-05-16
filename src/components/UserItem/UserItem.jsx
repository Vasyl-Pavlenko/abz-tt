import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  StyledImg,
  StyledInfoContainer,
  StyledLink,
  StyledName,
  StyledPosition,
} from './UserItem.styled';

import preloadImg from '../../Assets/preloader/preloader.svg';
import { textChecker } from '../../utils';

export const UserItem = ({ userData }) => {
  const { name, position, email, phone, photo } = userData;
  const [image, setImage] = useState(preloadImg);
  const { status } = useSelector((state) => state.user);

  useEffect(() => {
    const img = new Image();
    
    img.src = photo;
    img.onload = () => {
      setImage(photo);
    };
  }, [photo]);

  return (
    status === 'succeeded' && (
      <>
        <StyledImg src={image} alt={name} />

        <StyledName>{textChecker(name)}</StyledName>

        <StyledInfoContainer>
          <StyledPosition>{textChecker(position)}</StyledPosition>

          <StyledLink href={`mailto:${email}`}>{textChecker(email)}</StyledLink>

          <StyledLink href={`tel:${phone}`}>{phone}</StyledLink>
        </StyledInfoContainer>
      </>
    )
  );
};

UserItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};
