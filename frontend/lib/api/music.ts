import client from './client';

export const getMusic = (title) => {
  const headers = {
    'Content-type': 'text/html; charset=UTF-8',
  };
  client.get(`/SVS?title=${title}`, { headers });
};
