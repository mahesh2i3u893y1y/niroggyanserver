
🩺 Doctor Appointment Booking App
A full-stack web application where users can search, view, and book appointments with doctors based on their availability. This app features pagination, doctor detail view, and a fully functional appointment booking form.


**🚀 Features **
- 🔍 Search for doctors by name or specialty
- 📄 View a paginated list of all doctors
- 👨‍⚕️ View doctor details including qualifications and address
- 📅 Book an appointment by filling a form (stored in MongoDB)
- 🔄 Fully connected frontend and backend using APIs
- 🌐 Responsive and mobile-friendly UI



**🛠️ Tech Stack** 
**Frontend Repo:**  https://github.com/mahesh2i3u893y1y/niroggyanclient
**Frontend:**
-  React JS
-  JavaScript
-  Tailwind CSS


**Backend:**
- Node.js
- Express.js
- CORS
  
  
**Database:**
- MongoDB

**API Endpoints**

- GET /doctors
- https://niroggyanserver-xogh.onrender.com/doctors
- Returns a paginated list of all doctors

**GET /doctor/:id**
- https://niroggyanserver-xogh.onrender.com/doctor/688c42eaec4d34872040d71f
- Fetch detailed info of a specific doctor by their ID
- https://niroggyanserver-xogh.onrender.com/appointment

  
**POST /appointments**
-Submit a new appointment form (includes patient name, selected doctor, date, time, etc.)


**Improvements If Given More Time**

- Add authentication (Login/Signup for patients and doctors)
- Admin dashboard for managing appointments
- Email/SMS notifications for booked appointments
- Sorting and filtering of doctors by availability, location, etc.
- Add doctor profile images
- Error handling and validation improvements
- UI polish and animations


**Challenges Faced & Solutions**
- Form data submission to backend
- Challenge: Connecting the React form with MongoDB through Express
- Solution: Used Express and CORS middleware to accept cross-origin requests, validated form data, and stored it directly in MongoDB.


**some screenshsots of the UI **

**Hero section:**
- <img width="1883" height="895" alt="Screenshot 2025-08-03 133636" src="https://github.com/user-attachments/assets/03f3776d-03f8-4ddd-b520-69f3cd41187a" />

**Doctors List:**
- <img width="537" height="720" alt="Screenshot 2025-08-03 133746" src="https://github.com/user-attachments/assets/ddc680b3-d2b7-4ebd-99b1-5fed1a2b161b" />

**View Details of Doctor:**
-<img width="1889" height="630" alt="Screenshot 2025-08-03 133818" src="https://github.com/user-attachments/assets/f17d247d-78cc-4ca6-bbac-77e75fb3732b" />
- <img width="1883" height="762" alt="Screenshot 2025-08-03 133825" src="https://github.com/user-attachments/assets/729b6ba6-1b6c-4080-9513-c89d752f8125" /> 

**Doctor Appointment popup:**
- <img width="911" height="867" alt="Screenshot 2025-08-03 133834" src="https://github.com/user-attachments/assets/6e7698de-5919-444c-8ff0-c6a842776acd" />






