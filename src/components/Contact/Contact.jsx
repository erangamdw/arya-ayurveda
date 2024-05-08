import React, { useEffect, useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const accessKey = process.env.REACT_APP_WEB3FORMS_API_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber:"",
    // message: "",
    treatment: "",
    appointmentDate: "", // Adding appointmentDate field to the form data
    appointmentTime: "", // Adding appointmentTime field to the form data
    errors: {},
    access_key:accessKey,
    subject:"New Booking from Arya Ayurveda"
  });

  const [result, setResult] = useState("");


  useEffect(() => {
    const currentDate = new Date();
    const fourHoursLater = new Date(currentDate.getTime() + 4 * 60 * 60 * 1000);
    const formattedDate = formatDate(currentDate);
    const formattedTime = formatTime(fourHoursLater);
    setFormData((prevData) => ({
      ...prevData,
      appointmentDate: formattedDate,
      appointmentTime: formattedTime,
    }));
  }, []);

  
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
      errors: { ...prevData.errors, [e.target.id]: "" } 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validating form fields before submission
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
    
      // Proceed with form submission
      setResult("Sending....");
 
    console.log(formData);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),

    });

    const data = await response.json();

    if (data.success) {
      setResult("Booking Submitted Successfully");
      toast.success("Booking Successfull !", {
        position: "bottom-right"
      });
      resetForm(e)
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("Booking Failed !", {
        position: "bottom-right"
      });
    }
      
    } else {
      setFormData((prevData) => ({
        ...prevData,
        errors: errors
      }));
      toast.error("Booking Failed !", {
        position: "bottom-right"
      });
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
    } else if (!isValidPhoneNumber(data.contactNumber)) {
      errors.contactNumber = "Invalid contact number format";
    }
    if (!data.appointmentDate.trim()) {
      errors.appointmentDate = "Appointment date is required";
    }
    if (!data.appointmentTime.trim()) {
      errors.appointmentTime = "Appointment time is required";
    }
    // if (!data.message.trim()) {
    //   errors.message = "Message is required";
    // }
    if (!data.treatment.trim()) {
      errors.treatment = "Treatment is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phonePattern = /^\d{10}$/; // Assuming 10-digit phone number format
    return phonePattern.test(phoneNumber);
  };

  const resetForm = (form) => {
    // form.reset();
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      treatment: "",
      appointmentDate: formatDate(new Date()),
      appointmentTime: generateTimeOptions()[0],
      errors: {},
      access_key: accessKey,
      subject:"New Booking from Arya Ayurveda"
    });
    setResult("");
  };

   // Generate time options from 10:00 AM to 5:00 PM at intervals of 30 minutes
   const generateTimeOptions = () => {
    const timeOptions = [];
    let time = new Date("2024-01-01T10:00:00"); // Starting time
    const endTime = new Date("2024-01-01T17:00:00"); // Ending time

    while (time <= endTime) {
      const formattedTime = formatTime(time);
      timeOptions.push(formattedTime);
      time.setMinutes(time.getMinutes() + 30); // Increment time by 30 minutes
    }

    return timeOptions;
  };

  return (
    <div className="contact section-p" id="contact">
      <div className="container">
        <div className="contact-section">
          <div className="section-title">
            <h3 className="text-brown">
              Booking <span className="text-dark">with us</span>
            </h3>
            <p className="text">We help you transform you life.</p>
          </div>
        </div>

        <form className="mx-auto contact-form" onSubmit={handleSubmit}>
          <div className="form-elem">
          {formData.errors.name && <span className="error">{formData.errors.name}</span>}
            <input
              type="text"
              value={formData.name}
              className="form-control"
              placeholder="Name"
              onChange={handleChange}
              id="name"
            />
          </div>
          <div className="form-elem">
          {formData.errors.email && <span className="error">{formData.errors.email}</span>}
            <input
              type="text"
              value={formData.email}
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              id="email"
            />
          </div>
          <div className="form-elem">
          {formData.errors.contactNumber && <span className="error">{formData.errors.contactNumber}</span>}
            <input
              type="text"
              value={formData.contactNumber}
              className="form-control"
              placeholder="Contact Number"
              onChange={handleChange}
              id="contactNumber"
            />
          </div>
          <div className="form-elem">
          {formData.errors.appointmentDate && <span className="error">{formData.errors.appointmentDate}</span>}
            <input
              type="date"
              value={formData.appointmentDate}
              min={formatDate(new Date())}
              className="form-control"
              onChange={handleChange}
              id="appointmentDate"
            />
          </div>
          <div className="form-elem">
          {formData.errors.appointmentTime && <span className="error">{formData.errors.appointmentTime}</span>}
            <select
              value={formData.appointmentTime}
              className="form-control"
              onChange={handleChange}
              id="appointmentTime"
            >
              <option value="">Select Time</option>
              {generateTimeOptions().map((timeOption, index) => (
                <option key={index} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="form-elem">
          {formData.errors.message && <span className="error">{formData.errors.message}</span>}
            <textarea
              rows="2"
              value={formData.message}
              className="form-control"
              placeholder="Message"
              onChange={handleChange}
              id="message"
            ></textarea>
          </div> */}
          <div className="form-elem">
          {formData.errors.treatment && <span className="error">{formData.errors.treatment}</span>}
            <select
              value={formData.treatment}
              className="form-control"
              onChange={handleChange}
              id="treatment"
            >
              <option disabled value="">Select Treatment</option>
              <option value="Arthritis & Joint pains">Arthritis & Joint pains</option>
              <option value="Neck and Back pains">Neck and Back pains</option>
              <option value="Piles">Piles</option>
              <option value="Sinusitis">Sinusitis</option>
              <option value="Eczema and Skin diseases">Eczema and Skin diseases</option>
              <option value="Paralysis">Paralysis</option>
              <option value="Migraine">Migraine</option>
              <option value="Full Body massage">Full Body massage</option>
              <option value="Head Massage">Head Massage</option>
              <option value="Foot Massage">Foot Massage</option>
              <option value="Shirodhara">Shirodhara</option>
              <option value="Nasya karma">Nasya karma</option>
              <option value="Greeva vasti">Greeva vasti</option>
              <option value="Kati vasti">Kati vasti</option>
            </select>
          </div>
          {result && <span className="error">{result}</span>}
          <button
            type="submit"
            className="text-white bg-brown submit-btn fw-3 fs-22"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
