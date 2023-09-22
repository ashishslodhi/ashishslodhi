import Api from '../api';

const service = 'users';

export const registerUser = async (postData) => {
  try {
    const response = await Api.post(`/${service}/register`, postData);
    return response;
  } catch (error) {
    throw error;
  }
};
