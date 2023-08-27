import { request } from '../utils/request';
import { getJwtToken } from './auth';

export const createPost = async (image, description) => {
  const formData = new FormData();
  formData.append('files.image', image);
  formData.append('data', JSON.stringify({ description }));

  await fetch('/api/posts', {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
    },
  });
};

export const loadPosts = async () => {
  const response = await request('/api/posts?populate=*');
  return response.data.map((post) => ({
    id: post?.id,
    ...post?.attributes,
    image: post?.attributes?.image?.data?.[0]?.attributes?.url,
    user: {
      id: post?.attributes?.user?.data?.id,
      ...post?.attributes?.user?.data?.attributes,
    },
  }));
};

export const likePost = async (id) => {
  const response = await request(`/api/posts/${id}/like`, {
    method: 'PUT',
  });
  return response.data;
};

export const favorPost = async (id) => {
  const response = await request(`/api/posts/${id}/favor`, {
    method: 'PUT',
  });
  return response.data;
};
