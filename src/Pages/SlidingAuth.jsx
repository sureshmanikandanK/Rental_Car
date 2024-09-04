// import React, { useState } from 'react';
// import '../styles/SlidingAuthStyles/SlidingAuth.scss';

// const SlidingAuth = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   const toggleForm = () => {
//     setIsSignIn(!isSignIn);
//   };

//   return (
//     <div className={`container ${isSignIn ? '' : 'right-panel-active'}`}>
//       <div className="form-container sign-up-container">
//         <form action="#">
//           <h1>Create Account</h1>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button>Sign Up</button>
//         </form>
//       </div>

//       <div className="form-container sign-in-container">
//         <form action="#">
//           <h1>Sign in</h1>
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button>Sign In</button>
//         </form>
//       </div>

//       <div className="overlay-container">
//         <div className="overlay">
//           <div className="overlay-panel overlay-left">
//             <h1>Welcome Back!</h1>
//             <p>To keep connected with us, please login with your personal info</p>
//             <button className="ghost" onClick={toggleForm}>Sign In</button>
//           </div>
//           <div className="overlay-panel overlay-right">
//             <h1>Hello, Friend!</h1>
//             <p>Enter your details and start your journey with us</p>
//             <button className="ghost" onClick={toggleForm}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SlidingAuth;
