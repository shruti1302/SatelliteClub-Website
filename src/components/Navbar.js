// import React, { useEffect } from 'react';
// import { Router, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//   }, []);

//   const handleScroll = () => {
//     var top =
//       (document.documentElement && document.documentElement.scrollTop) ||
//       document.body.scrollTop;
//     if (top > 200)
//       document.querySelector('.navbar-fixed-top').classList.add('scroll');
//     else document.querySelector('.navbar-fixed-top').classList.remove('scroll');
//   };

//   return (
//     <>
//       <nav className='navbar navbar-expand-lg navbar-dark fixed-top navbar-fixed-top'>
//         {/* <NavLink className='navbar-brand' to='/'>
//           Navbar
//         </NavLink> */}
//         <button
//           className='navbar-toggler'
//           type='button'
//           data-toggle='collapse'
//           data-target='#navbarSupportedContent'
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//         >
//           <span className='navbar-toggler-icon'></span>
//         </button>
//         <div className='collapse navbar-collapse' id='navbarSupportedContent'>
//           <ul className='navbar-nav ml-auto'>
//             <li className='nav-item active'>
//               {/* <NavLink exact className='nav-link' aria-current='page' to='/'>
//                 Home
//               </NavLink> */}
//             </li>
//             <li className='nav-item'>
//               {/* <NavLink
//                 exact
//                 className='nav-link'
//                 aria-current='page'
//                 to='/register'
//               >
//                 Register
//               </NavLink> */}
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
