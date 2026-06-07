import { useState } from "react";
import PropTypes from "prop-types";

const BookingAppointmentSection = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    email: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked! We will contact you shortly.");
  };

  const inputStyle = {
    width: "100%",
    height: "52px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    padding: "0 20px",
    fontSize: "17px",
    color: "#555",
    fontFamily: "Lato, sans-serif",
    fontWeight: "500",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const selectStyle = {
    ...inputStyle,
    appearance: "none",
    backgroundImage: `url('/mdi-light-chevron-down.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 16px center",
    backgroundSize: "20px",
    cursor: "pointer",
  };

  return (
    <section
      className={`w-full rounded-[40px] bg-lavender flex items-center p-10 box-border gap-6 booking-section ${className}`}
    >
      <img
        className="h-[672px] flex-1 relative rounded-[20px] max-w-full overflow-hidden object-cover booking-img"
        loading="lazy"
        alt="Doctor with phone"
        src="/img@2x.png"
      />
      <section className="self-stretch flex-1 flex flex-col items-start justify-center py-0 px-10 gap-8 text-left font-lato booking-form-wrapper">
        <div className="self-stretch flex flex-col items-start gap-2.5">
          <div className="flex items-end gap-[5.7px]">
            <div className="h-2 w-2 rounded-full bg-steelblue" />
            <h2 className="!m-0 text-steelblue text-[25px] leading-[30px] capitalize font-bold">
              Fill The Form
            </h2>
          </div>
          <h1 className="!m-0 self-stretch text-[55px] leading-[66px] capitalize font-bold text-gray-400 booking-title">
            Book Your Appointment Today!
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="self-stretch flex flex-col gap-[27px]"
        >
          <div className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="flex gap-5 booking-row">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#2d7dd2")}
                onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
              />
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                style={selectStyle}
                onFocus={(e) => (e.target.style.borderColor = "#2d7dd2")}
                onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
              >
                <option value="" disabled>
                  Select Department *
                </option>
                <option value="allergy">Allergy</option>
                <option value="asthma">Asthma</option>
                <option value="immunology">Immunology</option>
                <option value="food-allergy">Food Allergy</option>
              </select>
            </div>

            {/* Row 2 */}
            <div className="flex gap-5 booking-row">
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                style={selectStyle}
                onFocus={(e) => (e.target.style.borderColor = "#2d7dd2")}
                onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
              >
                <option value="" disabled>
                  Select Your Doctor *
                </option>
                <option value="mark-stahl">Dr. Mark C Stahl, DO</option>
                <option value="david-brncic">Dr. David E. Brncic, MD</option>
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#2d7dd2")}
                onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
              />
            </div>

            {/* Row 3 - time */}
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              style={selectStyle}
              onFocus={(e) => (e.target.style.borderColor = "#2d7dd2")}
              onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
            >
              <option value="" disabled>
                Select Appointment Time *
              </option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="13:00">01:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>

            {/* Textarea */}
            <textarea
              name="message"
              placeholder="Your Message Here....."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              style={{
                ...inputStyle,
                height: "100px",
                padding: "14px 20px",
                resize: "vertical",
                lineHeight: "1.5",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#2d7dd2")}
              onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
            />
          </div>

          <button
            type="submit"
            className="btn-primary rounded-[5px] bg-steelblue border-0 cursor-pointer font-lato font-semibold capitalize text-white self-start"
            style={{
              padding: "15px 28px",
              fontSize: "18px",
              lineHeight: "21.6px",
            }}
          >
            Book An Appointment
          </button>
        </form>
      </section>
    </section>
  );
};

BookingAppointmentSection.propTypes = {
  className: PropTypes.string,
};

export default BookingAppointmentSection;
