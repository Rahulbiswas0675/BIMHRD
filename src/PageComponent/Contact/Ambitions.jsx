import './Connect.scss';
import contactImg from '../../Assates/Images/contactImage.png';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  number: yup.string().required(),
  otp: yup.string().required(),
  checkbox: yup.string(),
}).required();

function Ambitions() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <div className="contact-component" id='admitions'>
      <div className="contact-container">
        <img src={contactImg} alt="contactImg" className='contactImg' />
        <div className="form-container">
          <h3 className="title">Personalized Guidance <br /> Tailored to Your Ambitions</h3>
          <p className="para">Let's Navigate Your Academic Journey Together,<br /> Get in touch with us</p>

          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className="input-box">
              <input type='text' placeholder='Enter your name ' className='input-field' {...register("name")} required/>
              <input type='email' placeholder='Enter Email Address ' className='input-field' {...register("email")} required/>
            </div>
            <div className="input-box">
              <input type='number' placeholder='Enter your mobile number  ' className='input-field' {...register("number")} required/>
              <input type='number' placeholder='Enter OTP ' className='input-field' {...register("otp")} required/>
              <input type="submit" className='submit-btn' />
            </div>
            <p className="checkbox">
              <input className='checkinput' {...register("checkbox")} type="radio" />
              I agree to receive information regarding my submitted enquiry by signing up on BIMHRD
            </p>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Ambitions