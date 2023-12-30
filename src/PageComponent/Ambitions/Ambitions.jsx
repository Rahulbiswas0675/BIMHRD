import './Ambitions.scss';
import { ambitionsData } from '../../Datas/PagesData';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from 'react';
import Swal from 'sweetalert2';


const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  number: yup.string().required(),
  otp: yup.string().required(),
}).required();

function Ambitions() {
  const [ckeckVal, setCheckVal] = useState();
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    console.log(data);
    if (ckeckVal) {
      Swal.fire({
        title: "Good job!",
        text: "Your application submited!",
        icon: "success"
      });
      reset();
    } else {
      Swal.fire({
        title: "Opps...Sorry!",
        text: "Please click the check-box!",
        icon: "error"
      });
    }
  }

  return (
    <div className="ambitions-component">
      <div className="ambitions-container">
        <img src={ambitionsData.image} alt="ambitionsImg" className='ambitionsImg' />
        <div className="form-container">
          <h3 className="title">{ambitionsData.title1} <br /> {ambitionsData.title2}</h3>
          <p className="para">{ambitionsData.para1}<br /> {ambitionsData.para2}</p>
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className="input-box">
              <input type='text' placeholder='Enter your name ' className='input-field' {...register("name")} required />
              <input type='email' placeholder='Enter Email Address ' className='input-field' {...register("email")} required />
            </div>
            <div className="input-box">
              <input type='number' placeholder='Enter your mobile number  ' className='input-field' {...register("number")} required />
              <input type='number' placeholder='Enter OTP ' className='input-field' {...register("otp")} required />
              <input type="submit" className='submit-btn' />
            </div>
            <p className="checkbox">
              <input className='checkinput' onChange={(e) => setCheckVal(e.target.value)} type="radio" />
              I agree to receive information regarding my submitted enquiry by signing up on BIMHRD
            </p>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Ambitions