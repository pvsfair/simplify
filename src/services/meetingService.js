import api from '../config/api';

const listRooms = async filters => {
  try {
    const response = await api.get('/room', {...filters});

    const {message, data} = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getRoom = async roomId => {
  try {
    const response = await api.get(`/room/${roomId}`);

    const {message, data} = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const createMeeting = async meetingData => {
  try {
    const response = await api.post(`/room`, {meetingData});

    return response.status == 200;
  } catch (error) {
    console.log(error);
  }
};

const editMeeting = async (meetingId, meetingData) => {
  try {
    const response = await api.post(`/room/${meetingId}`, {meetingData});

    return response.status == 200;
  } catch (error) {
    console.log(error);
  }
};

const listMeeting = async filters => {
  try {
    const response = await api.get(`/room`, {...filters});

    const {message, data} = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getMeeting = async meetingId => {
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
export {
  listRooms,
  getRoom,
  createMeeting,
  editMeeting,
  listMeeting,
  getMeeting,
};
