import Api from '../api';

const service = 'messages';

export const getMessagesByGroup = async (group) => {
  try {
    const response = await Api.get(`/${service}/${group}`);
    return response;
  } catch (error) {
    throw error;
  }
};
