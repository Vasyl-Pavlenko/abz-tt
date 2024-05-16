import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

//Token
export const getToken = createAsyncThunk('token/getToken', async () => {
  const { data } = await axios.get(`${BASE_URL}token`);

  return data.token;
});

//Users
export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const { data } = await axios.get(`${BASE_URL}users?page=1&count=6`);

  return data.users;
});

//Get more users
export const getMoreUsers = createAsyncThunk('users/getMoreUsers', async (_, { getState }) => {
  const { page } = getState().user;
  const { data } = await axios.get(`${BASE_URL}users?page=${page}&count=6`);

  return data;
});
//Positions
export const getPositions = createAsyncThunk('positions/getPositions', async () => {
  const { data } = await axios.get(`${BASE_URL}positions`);

  return data.positions;
});

//Create new User
export const createNewUser = createAsyncThunk('users/createUser', async ({ formData, token }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}users`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Token: token,
      },
    });

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
});
