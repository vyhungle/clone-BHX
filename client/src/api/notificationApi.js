import axios from 'axios';

import {apiUrl} from './constants';

export const getNotification = (phone, page) => {
  const data = axios.get(
    `${apiUrl}/notification?phoneNumber=${phone}&_page=${page}&_limit=10`,
  );
  return data;
};

export const readNotification = (notification, id) => {
  axios.put(`${apiUrl}/notification/1`, notification);
};