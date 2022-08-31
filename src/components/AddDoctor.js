import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { postDoctorAsync } from '../redux/doctors/doctorsSlice';
import Input from './Form/Input';
import Button from './Form/Button';
import FormScaffold from './Form/FormScaffold';
import useForm from './Form/useForm';

export default function AddDoctor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { values, handleChange } = useForm({
    name: '',
    specialization: '',
    hourly: '',
    available: '',
    picture: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postDoctorAsync(values))
      .unwrap()
      .then(() => {
        navigate('/');
        toast.success('Doctor profile added successfully');
      });
  };
  return (
    <FormScaffold title="Add New Doctor" onSubmit={handleSubmit}>
      <Input label="Name" type="text" name="name" value={values.name} onChange={handleChange} placeholder="Dr Doo Little" />
      <Input label="Specialization" type="text" name="specialization" value={values.specialization} onChange={handleChange} placeholder="Vetinary" />
      <Input label="Available times" type="text" name="available" value={values.available} onChange={handleChange} placeholder="Monday - Friday" />
      <Input label="Hourly rate" type="number" name="hourly" value={values.hourly} onChange={handleChange} placeholder="$100" />
      <Input label="Paste picture" type="text" name="picture" value={values.picture} onChange={handleChange} placeholder="https://mypicture.png" />
      <Button text="Add" disabled={false} />
    </FormScaffold>
  );
}
