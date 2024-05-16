import React from 'react';
import { PositionList, UploadImage, Inputs, Loader } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../redux/slices/SignUpSlice';
import { getPositions, getToken, createNewUser, getUsers } from '../../redux/actions';
import { useForm } from 'react-hook-form';
import { StyledButtonContainer, StyledButtonAdd, StyledForm } from './SignUpForm.styled';
import { toast } from 'react-toastify';

export const SignUpForm = () => {
  const [isLoadingNewUser, setIsLoadingNewUser] = React.useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      position_id: '1',
      photo: null,
    },
    mode: 'onChange',
  });

  const isFormValid = Object.keys(errors).length === 0 && isValid;
  const dispatch = useDispatch();
  const { positions: positionsData, status } = useSelector((state) => state.positions);

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(getPositions());
    }
  }, [status, dispatch]);

  const onSubmit = async (data) => {
    setIsLoadingNewUser(true);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('position_id', data.position_id);
    formData.append('photo', data.photo[0]);

    try {
      const actionResult = await dispatch(getToken());
      const token = actionResult.payload;
      const newUser = await dispatch(createNewUser({ formData, token }));

      if (newUser.payload) {
        toast.success('A new user has been registered');
        dispatch(toggleState());
        dispatch(getUsers(1));
        reset();
      } else {
        throw new Error(newUser.error.message);
      }
    } catch (error) {
      toast.error('Something went wrong, please try again');
      console.log(error)
    } finally {
      setIsLoadingNewUser(false);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      {isLoadingNewUser ? (
        <Loader />
      ) : (
        <>
          <Inputs register={register} errors={errors} />
          <PositionList register={register} positions={positionsData} watch={watch} />
          <UploadImage register={register} watch={watch} errors={errors} />
          <StyledButtonContainer>
            <StyledButtonAdd
              type="submit"
              value="Sign up"
              aria-label="sign up button"
              disabled={!isFormValid}
            />
          </StyledButtonContainer>
        </>
      )}
    </StyledForm>
  );
};
