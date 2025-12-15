export const BASE_URL = 'https://www.saucedemo.com';

export const USERS = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  problem: {
    username: 'problem_user',
    password: 'secret_sauce',
  },
  performance: {
    username: 'performance_glitch_user',
    password: 'secret_sauce',
  },
  error: {
    username: 'error_user',
    password: 'secret_sauce',
  },
  visual: {
    username: 'visual_user',
    password: 'secret_sauce',
  },
};

export const POSITIVE_LOGIN_USERS = [
  'standard',
  'problem',
  'performance',
  'error',
  'visual',
];






export const NEGATIVE_LOGIN_USERS = [
  {
    description: 'correct username + wrong password',
    username: 'standard_user',
    password: 'wrong_password',
  },
  {
    description: 'wrong username + correct password',
    username: 'wrong_user',
    password: 'secret_sauce',
  },
  {
    description: 'wrong username + wrong password',
    username: 'wrong_user',
    password: 'wrong_password',
  },
  {
    description: 'empty username + correct password',
    username: '',
    password: 'secret_sauce',
  },
  {
    description: 'correct username + empty password',
    username: 'standard_user',
    password: '',
  },
  {
    description: 'empty username + empty password',
    username: '',
    password: '',
  },
];
