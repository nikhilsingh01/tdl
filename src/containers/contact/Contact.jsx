import { useForm } from "react-hook-form";
import "./contact.css"
export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("Name")); // watch input value by passing the name of it

  return (
    
    <form className="form1" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div><input className="inp" placeholder="Enter your Name" {...register("Name")} /></div>
      
      {/* include validation with required or other standard HTML validation rules */}
      <div><input className="inp" placeholder="Enter your Email"{...register("Email", { required: true })} /></div>
      {/* errors will return when field validation fails  */}
      <div><input className="inp" placeholder="Enter Your Message" {...register("Message")} /></div>
      <select {...register("technology")}>
        <option value='Angular'>Angular</option>
        <option value='React'>React</option>
        <option value='SQL'>SQL</option>
        <option value='DBMS'>DBMS</option>
        <option value='HTML'>HTML</option>
      </select>
      <input type='file' {...register("File")}/>
      <button className="btn" type="submit">Submit Message</button>

    </form>
  );
}
