import {
  getDoctorsAsync, postDoctorAsync, deleteDoctorAsync, doctorsSlice,
} from '../redux/doctors/doctorsSlice';

const initialState = {
  loading: false,
  doctors: [],
  message: '',
};

const response = [
  {
    id: 1,
    name: 'John Doe',
    specialization: 'General Practitioner',
    picture: 'https://randomuser.me/api/portraits.png',
    available_times: '8:00 - 10:00',
    hourly_rate: '100',
  },
  {
    id: 2,
    name: 'Jane Doe',
    specialization: 'General Practitioner',
    picture: 'https://randomuser.me/api/portraits.png',
    available_times: '8:00 - 10:00',
    hourly_rate: '100',
  },
];

describe('doctorsSlice', () => {
  it('should return the initial state', () => {
    expect(doctorsSlice.reducer(undefined, { type: null })).toEqual(initialState);
  });

  it('should handle getDoctorsAsync.pending', () => {
    expect(doctorsSlice.reducer(initialState, getDoctorsAsync.pending())).toEqual({
      loading: true,
      doctors: [],
      message: '',
    });
  });

  it('should handle getDoctorsAsync.fulfilled', () => {
    expect(doctorsSlice.reducer(initialState, {
      type: getDoctorsAsync.fulfilled,
      payload: response,
    })).toEqual({
      loading: false,
      doctors: response,
      message: '',
    });
  });

  it('should handle postDoctorAsync.pending', () => {
    expect(doctorsSlice.reducer(initialState, postDoctorAsync.pending())).toEqual({
      loading: true,
      doctors: [],
      message: '',
    });
  });

  it('should handle postDoctorAsync.fulfilled', () => {
    expect(doctorsSlice.reducer(initialState, {
      type: postDoctorAsync.fulfilled,
      payload: { message: 'Doctor added successfully' },
    })).toEqual({
      loading: false,
      doctors: [],
      message: 'Doctor added successfully',
    });
  });

  it('should handle deleteDoctorAsync.pending', () => {
    expect(doctorsSlice.reducer(initialState, deleteDoctorAsync.pending())).toEqual({
      loading: true,
      doctors: [],
      message: '',
    });
  });

  it('should handle deleteDoctorAsync.fulfilled', () => {
    expect(doctorsSlice.reducer(initialState, {
      type: deleteDoctorAsync.fulfilled,
      payload: { message: 'Doctor deleted successfully' },
    })).toEqual({
      loading: false,
      doctors: [],
      message: 'Doctor deleted successfully',
    });
  });
});
