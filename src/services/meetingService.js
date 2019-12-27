import api from '../config/api';

export const listRooms = async filters => {
  try {
    const response = await api.get('/room', {...filters});

    const {
      message,
      data,
      total,
      per_page,
      current_page,
      last_page,
      from,
      to,
    } = response.data;

    const pagination = {total, per_page, current_page, last_page, from, to};

    return {pagination, data};
  } catch (error) {
    console.log(error);
  }
};

export const getRoom = async roomId => {
  try {
    const response = await api.get(`/room/${roomId}`);

    const {message, data} = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createMeeting = async meetingData => {
  try {
    const response = await api.post(`/room`, {meetingData});

    return response.status == 200;
  } catch (error) {
    console.log(error);
  }
};

export const editMeeting = async (meetingId, meetingData) => {
  try {
    const response = await api.post(`/room/${meetingId}`, {meetingData});

    return response.status == 200;
  } catch (error) {
    console.log(error);
  }
};

export const listMeeting = async filters => {
  try {
    const response = await api.get(`/room`, {...filters});

    const {message, data} = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMeeting = async meetingId => {
  try {
    const response = await api.get(`/room/${meetingId}`);

    const {message, data} = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  listRooms,
  getRoom,
  createMeeting,
  editMeeting,
  listMeeting,
  getMeeting,
};
