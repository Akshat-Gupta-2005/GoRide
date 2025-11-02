<h1 align="center">🚗 GoRide</h1>
<p align="center">
  <b>A full-stack ride-sharing web application built with React.</b>
  <br>
  <i>Connects drivers and riders in a seamless, real-time experience—similar to platforms like Uber or Lyft.</i>
</p>
<hr>

<h3>🚀 Features</h3>
<ul>
  <li><b>User & Driver Auth:</b> Secure Login, Sign Up, and route protection using Firebase Authentication.</li>
  <li><b>Ride Management:</b> Users can search, book, and manage rides. Drivers can publish and manage their upcoming bookings.</li>
  <li><b>Real-Time Chat:</b> Instant messaging between driver and rider implemented with SignalR.</li>
  <li><b>Map Integration:</b> Real-time route visualization, distance calculation, and mapping powered by Google Maps API.</li>
  <li><b>Secure Payments:</b> Integrated payment handling using Razorpay.</li>
  <li><b>User/Driver Dashboards:</b> View ride history, manage profiles, and see popular ride statistics.</li>
  <li><b>Offers & Referrals:</b> Built-in systems for promotions and user referrals.</li>
</ul>

<h3>🛠️ Key Technologies</h3>
<ul>
  <li><b>Frontend:</b> React 18, React Router DOM, React Bootstrap</li>
  <li><b>Backend:</b> Express.js, SignalR</li>
  <li><b>Database:</b> MySQL</li>
  <li><b>Authentication:</b> Firebase Authentication</li>
  <li><b>Maps:</b> Google Maps API</li>
  <li><b>Payments:</b> Razorpay</li>
  <li><b>Styling:</b> Bootstrap, CSS, Font Awesome, React Icons</li>
</ul>

<h3>🔌 Getting Started</h3>
<h4>1. Clone the Repository</h4>
<pre>
git clone https://github.com/Akshat-Gupta-2005/GoRide.git
cd GoRide
</pre>

<h4>2. Install Dependencies</h4>
<pre>
npm install
</pre>

<h4>3. Configure Environment</h4>
<p>Create a <code>.env</code> file in the root directory. Set up your Firebase and MySQL credentials, and add your API keys for Google Maps and Razorpay.</p>

<h4>4. Run the Application</h4>
<p>Start the frontend application (React):</p>
<pre>
npm start
</pre>
<p>In a separate terminal, start the backend server (Express.js) and ensure your MySQL database is running.</p>

<h3>📡 API Endpoints</h3>
<p>The backend API is served from:</p>
<pre>
API Base: http://localhost:5002/api
</pre>

<h3>📁 Project Structure</h3>
<pre>
GoRide/
│
├── public/              # Static assets, favicon, logos
│
├── src/
│   ├── components/      # User, Driver, Home, Login, SignUp, Payments, Auth
│   ├── services/
│   │   └── RideService.js # Centralized API calls
│   │
│   ├── firebase.js      # Firebase config
│   ├── ChatComponent.js # Instant messaging
│   └── ProtectedRoute.js  # Secured routes
│
└── ridesData.js       # Example dataset
</pre>

<h3>🤝 Contributing</h3>
<p>Contributions are welcome! Please fork this repository and submit a pull request for review. Feel free to open an issue for questions or feedback.</p>

<h3>📝 License</h3>
<p>This project is licensed under the MIT License.</p>

<p align="center"><b>GoRide — Empowering smarter travel for everyone!</b></p>
