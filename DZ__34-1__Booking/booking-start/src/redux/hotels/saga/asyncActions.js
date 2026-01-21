import { createAction } from '@reduxjs/toolkit';

const getHotelsAction = createAction('hotels/getHotels');

export default {
  getHotelsAction,
};