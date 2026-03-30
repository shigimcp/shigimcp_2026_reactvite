//#region ==================== MARK: IMPORTS ====================

// import { useRef } from 'react';
// import { useState } from 'react';

// import Navbar from './Navbar';

import { Link } from 'react-router-dom'

import '../stylesheets/App.css';

// import logo from '../assets/images/0elements/shigeru_logo_ko.svg';
// import logoRev from '../assets/images/0elements/shigeru_logo_ko_rev.svg';

// const logo = ('/images/0elements/shigeru_logo_ko.svg', import.meta.url).href;
// const logoRev = ('/images/0elements/shigeru_logo_ko_rev.svg', import.meta.url).href;

//#endregion ==================== IMPORTS ====================


export default function Header() {
// export default function Header(props) {

	// #region ==================== FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Header.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// #endregion ==================== FINDIN' OUT SH*T ====================


	//#region ==================== MARK: useRef DEFs ====================

	// const navBar_Ref = useRef(null);

	//#endregion ==================== useRef DEFs ====================


	//#region ==================== MARK: useState DEFs ====================

	// const [navClick, setNavClick] = useState(false);
	// const [restartPage, setRestartPage] = useState(false);

	//#endregion ==================== useState DEFs ====================


	// #region ==================== FINDIN' OUT MORE SH*T ====================

	// // console.log('');
	// console.log('navBar_Ref = ' + navBar_Ref);
	// console.log(navBar_Ref);
	// // console.log(navBar_Ref.children);

	// // // console.log('');
	// // console.log('navBar_Ref.current = ' + navBar_Ref.current);
	// console.log(navBar_Ref.current);
	// // // console.log(navBar_Ref.current.children);

	// console.log('');
	// console.log('restartPage = ' + restartPage);

	// #endregion ==================== FINDIN' OUT MORE SH*T ====================


	return (
		<>
		{/* #region ==================== MARK: hedContainer ==================== */}

			<div className='hedContainer' id='hedContainerID'>

				<div className='hed' id='hedID'>
					<Link to="/">
						<div className='logo' id='logoID'>
							{/* <img src={logo} className='logoK' id='logoKID' alt='logo' />
							<img src={logoRev} className='logoW' id='logoWID' alt='logoRev' /> */}
							{/* <img src='/images/0elements/shigeru_logo_ko.svg' className='logoK' id='logoKID' alt='logo' />
							<img src='/images/0elements/shigeru_logo_ko_rev.svg' className='logoW' id='logoWID' alt='logoRev' /> */}
							<img src='https://www.shigimcp.com/assets/img/0elements/shigeru_logo_ko.svg' className='logoK' id='logoKID' alt='logo' />
							<img src='https://www.shigimcp.com/assets/img/0elements/shigeru_logo_ko_rev.svg' className='logoW' id='logoWID' alt='logoRev' />
						</div>
					</Link>

					<div className='hed01' id='hed01ID'>Shigeru McPherson</div>

					{/* <div className='hed02' id='hed02'>digital designer &middot; art director &middot; front-end developer</div> */}
					{/* <div className='hed02' id='hed02'>creative technologist</div> */}
					<div className='hed02' id='hed02ID'>creative technologist&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;digital designer&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;front-end developer</div>

					<div className='contact' id='contactID'>
						{/* 212.464.7989 &nbsp; */}
						{/* linkedin: <a href='https://www.linkedin.com/in/shigeru-mcpherson-8a19a44/' className='email'>linkedin.com/in/shigeru-mcpherson</a>
						&nbsp; &nbsp;|&nbsp;
						email: <a href='mailto:shigimcp@yahoo.com?Subject=Hi Shigi! I saw your website, and...' className='email'>shigimcp@yahoo.com</a> */}

						{/* linkedin: <a href='https://www.linkedin.com/in/shigeru-mcpherson-8a19a44/' className='email' target='_blank'>linkedin.com/in/shigeru-mcpherson</a><br />
						email: <a href='mailto:shigimcp@yahoo.com?Subject=Hi Shigi! I saw your website, and...' className='email'>shigimcp@yahoo.com</a> */}

						email: <a href='mailto:shigimcp@yahoo.com?Subject=Hi Shigi! I saw your website, and...' className='email'>shigimcp@yahoo.com</a><br />
						linkedin: <a href='https://www.linkedin.com/in/shigeru-mcpherson-8a19a44/' className='email' target='_blank'>linkedin.com/in/shigeru-mcpherson</a>
					</div>
				</div>

				{/* <Navbar /> */}
				{/* <Navbar ref={navBar_Ref}/> */}
				{/* <Navbar navClick={navClick} /> */}

			</div>

		{/* #endregion ==================== hedContainer ==================== */}
		</>
	);
}

// export default Header;
