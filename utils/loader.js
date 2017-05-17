import React from 'react';
import { LoadingState } from '../components';

export default (condition, message, render) =>
  condition
    ? (message && <LoadingState>{message}</LoadingState>)
    : render();