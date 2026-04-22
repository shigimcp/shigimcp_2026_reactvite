//#region ==================== MARK: IMPORTS ====================

import { Route, Routes } from 'react-router-dom';
// import { useRef, forwardRef } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';

// import Navbar from './Navbar';

import Home from '../pages/Home';
import Work from '../pages/Work';
import About from '../pages/About';
import Resume from '../pages/Resume';
// import ResumeModal from './ResumeModal';


import '../stylesheets/App.css';

// import logo from '../assets/images/0elements/shigeru_logo_ko.svg';
// import logoRev from '../assets/images/0elements/shigeru_logo_ko_rev.svg';

// const logo = ('/images/0elements/shigeru_logo_ko.svg', import.meta.url).href;
// const logoRev = ('/images/0elements/shigeru_logo_ko_rev.svg', import.meta.url).href;

//#endregion ==================== IMPORTS ====================


//#region ==================== MARK: COMPONENTS ====================

//#region -------------------- MARK: CustomNavLink --------------------

	// const remoteResumeLoc = 'https://www.shigimcp.com/assets/resume/';
	// const resumePDF_url = 'https://www.shigimcp.com/assets/resume/Shigeru_McPherson_Creative_Technologist_Digital_Designer_Resume.pdf';

	// const CustomNavLink = ({ to, children, download }) => {
	// 	return (
	// 		<a href={to} download={download} className='resumeNav' id='resumeNavID' target='_new' rel='noreferrer noopener'>
	// 		<a href={resumePDF_url} download={'Shigeru_McPherson_Creative_Technologist_Digital_Designer_Resume.pdf'} className='resumeNav' id='resumeNavID' target='_new' rel='noreferrer noopener'>
	// 			{children}
	// 		</a>
	// 	);
	// };

//#endregion -------------------- CustomNavLink --------------------

//#endregion ==================== COMPONENTS ====================


//#region ==================== MARK: TIMELINES ====================

const navToggleTL = new gsap.timeline().pause();

//#endregion ==================== TIMELINES ====================



export default function Header() {
// export default function Header(props) {

	// #region ==================== MARK: FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Header.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// #endregion ==================== FINDIN' OUT SH*T ====================


	//#region ==================== MARK: useRef DEFs ====================

	const navBurger_Ref = useRef(null);
	// const navBarContainer_m_Ref = useRef(null);
	const navBar_m_Ref = useRef(null);

	//#endregion ==================== useRef DEFs ====================


	//#region ==================== MARK: useState DEFs ====================

	// const [burgerNavToggle, setBurgerNavToggle] = useState(false);
	const [burgerNavToggle, setBurgerNavToggle] = useState(true);

	const [isChipVisible, setIsChipVisible] = useState(true);
	const [filterKey, setFilterKey] = useState();
	// const [filterKey, setFilterKey] = useState('');
	// const [filterKey, setFilterKey] = useState('*');

	//#endregion ==================== useState DEFs ====================


	//#region ==================== MARK: useEffect(s) ====================

	//#region -------------------- MARK: useEffect: navToggleTL --------------------');

	useEffect(() => {

		// #region -------------------- MARK: FINDIN' OUT SH*T --------------------

		// console.log('-------------------- useEffect: navToggleTL --------------------');
		// console.log('');
		// console.log('navBar_m_Ref.current = ' + navBar_m_Ref.current);
		// console.log(navBar_m_Ref.current);

		// console.log('');
		// console.log('navBar_m_Ref.current.children = ' + navBar_m_Ref.current.children);
		// console.log(navBar_m_Ref.current.children);
		// console.log(navBar_m_Ref.current.children.length);

		// #endregion -------------------- FINDIN' OUT SH*T --------------------

		if (navBar_m_Ref.current) {

			// gsap.to([navBar_m_Ref.current], { y: -navBar_m_Ref.current.offsetHeight, duration: 0 })

			navToggleTL
				// .fromTo([navBar_m_Ref.current], { y: -navBar_m_Ref.current.offsetHeight }, { y: 0, duration: 0 }, 'frame00')
				// .to([navBar_m_Ref.current], { y: navBar_m_Ref.current.offsetHeight, duration: 0 }, 'frame00')
				// .to([navBar_m_Ref.current], { y: navBar_m_Ref.current.offsetHeight + 4, duration: 0 }, 'frame00')
				.to([navBar_m_Ref.current], { y: navBar_m_Ref.current.offsetHeight + navBar_m_Ref.current.children.length - 1, duration: 0 }, 'frame00')

				// .fromTo([navBar_m_Ref.current], { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
				.fromTo([navBar_m_Ref.current.children], { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')
				// .fromTo([navBar_m_Ref.current.children], { x: -100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.5, stagger: 0.025 }, 'frame01')
			;
		}
	}, [])

	//#endregion -------------------- useEffect: navToggleTL --------------------');

	//#endregion ==================== useEffect(s) ====================


	//#region ==================== MARK: CONSTs/FUNCTIONs ====================

	// const remoteResumeLoc = '/resume/';
	// const remoteResumeLoc = 'https://www.shigimcp.com/assets/resume/';
	// const resumePDF_url = remoteResumeLoc + 'Shigeru_McPherson_Creative_Technologist_Digital_Designer_Resume.pdf';
	const resumePDF_url = 'https://www.shigimcp.com/assets/resume/Shigeru_McPherson_Creative_Technologist_Digital_Designer_Resume.pdf';

	//#region -------------------- MARK: CONST: toggleVisibility --------------------

	const toggleVisibility = () => {

		// setBurgerNavToggle((prevState) => !prevState);
		toggleBurgerNav();

		// setIsChipVisible(!isChipVisible);
		setIsChipVisible(true);

		// setFilterKey(key);
		// setFilterKey('*');
		setFilterKey('null');

		// console.log('');
		// console.log('==================== COMPONENT: App.jsx ====================');
		// console.log('***** FUNCTION: toggleVisibility TRIGGERED! *****');
		// console.log('isChipVisible = ' + isChipVisible);
	};

	//#endregion -------------------- CONST: toggleVisibility --------------------


	//#region -------------------- MARK: CONST: toggleBurgerNav --------------------

	const toggleBurgerNav = () => {

		setBurgerNavToggle((prevState) => !prevState);

		// #region -------------------- MARK: FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- CONST: toggleBurgerNav --------------------');

		// // console.log('');
		// console.log('burgerNavToggle = ' + burgerNavToggle);
		// // console.log(burgerNavToggle);

		// // console.log('');
		// // console.log('navToggleTL = ' + navToggleTL);
		// console.log(navToggleTL);

		// #endregion -------------------- FINDIN' OUT SH*T --------------------


		if (burgerNavToggle) {
			navToggleTL.play();
		} else {
			navToggleTL.reverse();
		}
	};

	//#endregion -------------------- CONST: toggleBurgerNav --------------------


	//#region -------------------- MARK: CONST: useMediaQuery - REF: https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs#:~:text=Sorted%20by:,file=src/App.js --------------------

	// const [matches, setMatches] = useState(false);

	// const useMediaQuery = (query) => {

	// 	useEffect(() => {

	// 		const mediaQuery = window.matchMedia(query);

	// 		// console.log('');
	// 		// console.log('mediaQuery = ' + mediaQuery);
	// 		// console.log(mediaQuery);

	// 		setMatches(mediaQuery.matches);

	// 		const handler = (event) => setMatches(event.matches);

	// 		// Use addEventListener
	// 		mediaQuery.addEventListener('change', handler);

	// 		return () => {
	// 			// Use removeEventListener for cleanup
	// 			mediaQuery.removeEventListener('change', handler);
	// 		};

	// 	}, [query]);

	// 	return matches;
	// };

	// // console.log('');
	// // console.log('useMediaQuery = ' + useMediaQuery);
	// // console.log(useMediaQuery);

	// console.log('');
	// console.log('matches = ' + matches);
	// console.log(matches);

	//#endregion -------------------- CONST: useMediaQuery - REF: https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs#:~:text=Sorted%20by:,file=src/App.js --------------------


	//#region -------------------- MARK: CONST: window.matchMedia --------------------

	// const isLargeScreen = useMediaQuery('(min-width: 768px)');
	// const isLargeScreen = useMediaQuery('(min-width: 1920px)');
	// const isLargeScreen = useMediaQuery('(min-width: 1920px)');

	// const isLargeScreen = window.matchMedia('(min-width: 768px)').matches;
	// const isLargeScreen = window.matchMedia('(min-width: 1440px)').matches;
	// const isLargeScreen = window.matchMedia('(min-width: 1920px)').matches;


	const thisDeviceWidthArray = [
		// window.matchMedia('(max-width: 374px)').matches, 
		// window.matchMedia('(min-width: 375px)').matches && window.matchMedia('(max-width: 767px)').matches, 
		// window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1023px)').matches, 
		// window.matchMedia('(min-width: 1024px)').matches && window.matchMedia('(max-width: 1439px)').matches, 
		// window.matchMedia('(min-width: 1440px)').matches

		// window.matchMedia('(max-width: 375px)').matches || window.matchMedia('(max-width: 480px)').matches, 
		// window.matchMedia('(max-width: 768px)').matches, 
		// window.matchMedia('(min-width: 1024px)').matches

		window.matchMedia('(max-width: 480px)').matches, 
		window.matchMedia('(min-width: 481px)').matches && window.matchMedia('(max-width: 1023px)').matches, 
		window.matchMedia('(min-width: 1024px)').matches
	];

	// // setIsLandscape(useMediaQuery('(min-width: 1920px)'));`
	// setIsLandscape(isLargeScreen);

	//#endregion -------------------- CONST: window.matchMedia --------------------

	//#endregion ==================== CONSTs/FUNCTIONs ====================


	// #region ==================== MARK: FINDIN' OUT MORE SH*T ====================

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

		{/* #region ========================= MARK: ROUTES ========================= */}

			<Routes>
				{/* <Route path="/" element={<Home isLargeScreen={isLargeScreen} />} />
				<Route path="work" element={<Work isLargeScreen={isLargeScreen} isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} filterKey={filterKey} setFilterKey={setFilterKey} />} /> */}
				{/* <Route path="/" element={<Home />} /> */}
				<Route path="/" element={<Home thisDeviceWidthArray={thisDeviceWidthArray} />} />
				{/* <Route path="work" element={<Work isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} filterKey={filterKey} setFilterKey={setFilterKey} />} /> */}
				<Route path="work" element={<Work thisDeviceWidthArray={thisDeviceWidthArray} isChipVisible={isChipVisible} setIsChipVisible={setIsChipVisible} filterKey={filterKey} setFilterKey={setFilterKey} />} />
				<Route path="about" element={<About />} />
				<Route path="resume" element={<Resume />} />
			</Routes>

		{/* #endregion ========================= ROUTES ========================= */}

		{/* #region ==================== MARK: hedContainer ==================== */}

			<div className='hedWrapper' id='hedWrapperID'>

				<div className='hedContainer' id='hedContainerID'>

					<Link to="/" className='logo' id='logoID'>
						<img src='https://www.shigimcp.com/assets/img/0elements/shigeru_logo_ko_rev.svg' className='logoW' id='logoWID' alt='logoRev' />
					</Link>

				{/* #region -------------------- MARK: hed -------------------- */}

					<div className='hed' id='hedID'>

					{/* #region -------------------- MARK: hed00 -------------------- */}

						<div className='hed00' id='hed00ID'>
							<span className='hed01' id='hed01ID'>Shigeru McPherson&nbsp;</span>
							<span className='hed02' id='hed02ID'>creative technologist&nbsp;&nbsp;|&nbsp;&nbsp;digital designer&nbsp;&nbsp;|&nbsp;&nbsp;front-end developer</span>

						{/* #region -------------------- MARK: contact_m - contact MOBILE -------------------- */}

							{/* <div className='contact_m' id='contact_mID'>
								email: <a href='mailto:shigimcp@yahoo.com?Subject=Hi Shigi! I saw your website, and...' className='email'>shigimcp@yahoo.com</a><br />
								linkedin: <a href='https://www.linkedin.com/in/shigeru-mcpherson-8a19a44/' className='email' target='_new'>linkedin.com/in/shigeru-mcpherson</a>
							</div> */}

						{/* #endregion -------------------- contact_m - contact MOBILE -------------------- */}

						</div>

					{/* #endregion -------------------- hed00 -------------------- */}

					{/* #region -------------------- MARK: contact - contact DESKTOP -------------------- */}

						<div className='contact' id='contactID'>
							{/* 212.464.7989 &nbsp; */}
							email: <a href='mailto:shigimcp@yahoo.com?Subject=Hi Shigi! I saw your website, and...' className='email'>shigimcp@yahoo.com</a><br />
							linkedin: <a href='https://www.linkedin.com/in/shigeru-mcpherson-8a19a44/' className='email' target='_new'>linkedin.com/in/shigeru-mcpherson</a>
						</div>

					{/* #endregion -------------------- contact - contact DESKTOP -------------------- */}

					</div>

				{/* #endregion -------------------- hed -------------------- */}

				{/* #region -------------------- MARK: navBarContainer -------------------- */}

					<div className='navBarContainer' id='navBarContainerID'>
						{/* <div className='activeNavDiv' id='activeNavDivID' ref={activeNavDiv_Ref}></div> */}

						<div className='navBar' id='navBarID'>
							<NavLink className='null'></NavLink>
							<NavLink to='/' className='navItem' id='homeID' onClick={toggleVisibility}>Home</NavLink>
							{/* <NavLink to='/' className='navItem' id='homeID' islargescreen={isLargeScreen ? isLargeScreen.value : ''}>Home</NavLink> */}
							<NavLink to='/work' className='navItem' id='workID' onClick={toggleVisibility}>Work</NavLink>
							<NavLink to='/about' className='navItem' id='aboutID'>About</NavLink>
							<NavLink to='/resume' className='navItem' id='resumeID'>Resume</NavLink>
							<NavLink className='null'></NavLink>
							{/* <CustomNavLink to={resumePDF_url} download='Shigeru_McPherson_Creative_Technologist_Digital_Designer_Resume.pdf'>download resume</CustomNavLink> */}
							{/* <CustomNavLink to={resumePDF_url} download='Shigeru_McPherson_Creative_Technologist_Digital_Designer_Resume.pdf' className='resumeNav' id='resumeNavID'>download resume</CustomNavLink> */}
							<NavLink to={resumePDF_url} className='resumeNav' id='resumeNavID' target='_new' rel='noreferrer noopener' onClick={toggleBurgerNav}>download resume</NavLink>
						</div>
					</div>

					<div className='navBarContainer_m' id='navBarContainer_mID'>
						<div className='navBar' id='navBarID' ref={navBar_m_Ref}>
							<NavLink to='/' className='navItem' id='homeID' onClick={toggleBurgerNav}>Home</NavLink>
							{/* <NavLink to='/' className='navItem' id='homeID' onClick={toggleBurgerNav} islargescreen={isLargeScreen ? isLargeScreen.value : ''}>Home</NavLink> */}
							<NavLink to='/work' className='navItem' id='workID' onClick={toggleVisibility}>Work</NavLink>
							<NavLink to='/about' className='navItem' id='aboutID' onClick={toggleBurgerNav}>About</NavLink>
							<NavLink to='/resume' className='navItem' id='resumeID' onClick={toggleBurgerNav}>Resume</NavLink>
							{/* <CustomNavLink to={resumePDF_url} download='Shigeru_McPherson_Creative_Technologist_Digital_Designer_Resume.pdf'>download resume</CustomNavLink> */}
							{/* <CustomNavLink to={resumePDF_url} download='Shigeru_McPherson_Creative_Technologist_Digital_Designer_Resume.pdf' onClick={toggleBurgerNav}>download resume</CustomNavLink> */}
							{/* <CustomNavLink to={resumePDF_url} download='Shigeru_McPherson_Creative_Technologist_Digital_Designer_Resume.pdf' onClick={() => setBurgerNavToggle((prevState) => !prevState)}>download resume</CustomNavLink> */}
							{/* <CustomNavLink onClick={toggleBurgerNav}>download resume</CustomNavLink> */}
							<NavLink to={resumePDF_url} className='resumeNav' id='resumeNavID' target='_new' rel='noreferrer noopener' onClick={toggleBurgerNav}>download resume</NavLink>
						</div>

						<div className='navBurger' id='navBurgerID' onClick={toggleBurgerNav} ref={navBurger_Ref}>
							<img src='https://www.shigimcp.com/assets/img/0elements/navBurger.svg' className='navBurgerImg' id='navBurgerImgID' alt='navBurgerImg' />
						</div>
					</div>

				{/* #endregion -------------------- navBarContainer -------------------- */}

				</div>

			</div>

		</>
	);
}

// export default Header;
