import api from '../config/api';

import {rooms, meetings} from './mockData';

export const listRooms = async filters => {
  return {
    pagination: {
      total: 7,
      per_page: 10,
      current_page: 1,
      last_page: 1,
      from: 1,
      to: 7,
    },
    data: rooms,
  };
};

export const getRoom = async roomId => {
  return rooms.find(room => room.id == roomId);
};

export const createMeeting = async meetingData => {
  return true;
};

export const editMeeting = async (meetingId, meetingData) => {
  return true;
};

export const listMeeting = async filters => {
  return meetings;
};

export const getMeeting = async meetingId => {
  return meetings.find(meeting => meeting.id == meetingId);
};

export default {
  listRooms,
  getRoom,
  createMeeting,
  editMeeting,
  listMeeting,
  getMeeting,
};
