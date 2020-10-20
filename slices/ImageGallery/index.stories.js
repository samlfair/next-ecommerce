import React from 'react';
import MySlice from '.';
import mock from './mock.json';

export default {
  title: 'ImageGallery',
  component: MySlice,
};

export const __DefaultSlice = () => < MySlice slice={mock} />;
