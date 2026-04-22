//#region ==================== MARK: IMPORTS ====================

// import { Route, Routes } from 'react-router-dom';
// import { useRef } from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

// import Wrapper from './components/Wrapper';
import Header from './components/Header';
// import Navbar from './components/Navbar';

// import Home from './pages/Home';
// import Work from './pages/Work';
// import About from './pages/About';
// import Resume from './pages/Resume';
// // import Resume_ from './pages/Resume_';
// // import Preload from './pages/Preload';
// // import Scene from './components/three/Scene';

// // REF: https://www.youtube.com/watch?v=PMXUCNzthQU&t=508s => https://www.npmjs.com/package/ua-parser-js => https://github.com/faisalman/ua-parser-js => https://docs.uaparser.dev/api/main/overview.html
// import { UAParser } from 'ua-parser-js';

import "./stylesheets/App.css";

//#endregion ==================== IMPORTS ====================


//#region ==================== MARK: CONSTANTS n VARS ====================

//#region -------------------- MARK: CONST: ua/browserDetect --------------------

// const ua = new UAParser().getResult();

// let browserDetect = 'desktop';

// if (ua.device.type === undefined) {
// 	// setBrowserDetect('desktop');
// 	browserDetect = 'desktop';
// } else {
// 	// setBrowserDetect(ua.device.type);
// 	browserDetect = ua.device.type;
// }

//#endregion -------------------- CONST: ua/browserDetect --------------------

//#endregion ==================== CONSTANTS n VARS ====================


function App() {
// function App({children}) {


	//#region ==================== MARK: useState DEFs ====================

	// const [isChipVisible, setIsChipVisible] = useState(true);
	// const [filterKey, setFilterKey] = useState();

	//#endregion ==================== useState DEFs ====================


	//#region ==================== MARK: CONSTs/FUNCTIONs ====================

	// const locationApp = useLocation();


	//#region -------------------- MARK: CONST: toggleVisibility --------------------

	// const toggleVisibility = () => {

	// 	// setIsChipVisible(!isChipVisible);
	// 	setIsChipVisible(true);

	// 	// setFilterKey(key);
	// 	// setFilterKey('*');
	// 	setFilterKey('null');

	// 	// console.log('');
	// 	// console.log('==================== COMPONENT: App.jsx ====================');
	// 	// console.log('***** FUNCTION: toggleVisibility TRIGGERED! *****');
	// 	// console.log('isChipVisible = ' + isChipVisible);
	// };

	//#endregion -------------------- CONST: toggleVisibility --------------------


	//#region -------------------- MARK: CONST: useMediaQuery - REF: https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs#:~:text=Sorted%20by:,file=src/App.js --------------------

	// // const useMediaQuery = (query) => {

	// // 	// const [matches, setMatches] = useState(false);

	// // 	useEffect(() => {

	// // 		const mediaQuery = window.matchMedia(query);

	// // 		// console.log('');
	// // 		// console.log('mediaQuery = ' + mediaQuery);
	// // 		// console.log(mediaQuery);

	// // 		setMatches(mediaQuery.matches);

	// // 		const handler = (event) => setMatches(event.matches);

	// // 		// Use addEventListener
	// // 		mediaQuery.addEventListener('change', handler);

	// // 		return () => {
	// // 			// Use removeEventListener for cleanup
	// // 			mediaQuery.removeEventListener('change', handler);
	// // 		};

	// // 	}, [query]);

	// // 	return matches;
	// // };

	//#endregion -------------------- CONST: useMediaQuery - REF: https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs#:~:text=Sorted%20by:,file=src/App.js --------------------


	//#region -------------------- MARK: CONST: appProps --------------------

	// let appProps = {
	// 	 isChipVisible: {isChipVisible}, 
	// 	 setIsChipVisible: {setIsChipVisible}, 
	// 	 toggleVisibility: {toggleVisibility}, 
	// 	 filterKey: {filterKey}, 
	// 	 setFilterKey: {setFilterKey}
	// };

	//#endregion -------------------- CONST: appProps --------------------

	//#endregion ==================== CONSTs/FUNCTIONs ====================


	//#region ==================== MARK: FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: App.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('locationApp.pathname = ' + locationApp.pathname);
	// console.log(locationApp.pathname);

	// // console.log('');
	// // console.log('ua = ' + ua);
	// console.log(ua);
	// console.log('ua.device.type = ' + ua.device.type);

	// console.log('browserDetect = ' + browserDetect);

	// // console.log('');
	// console.log('window.innerWidth = ' + window.innerWidth);
	// console.log(window.innerWidth);

	// // console.log('');
	// console.log('window.innerHeight = ' + window.innerHeight);
	// console.log(window.innerHeight);

	// // console.log('');
	// console.log('screen.orientation = ' + screen.orientation);
	// console.log('screen.orientation.type = ' + screen.orientation.type);

	// // console.log('');
	// console.log('isMobile = ' + isMobile);
	// console.log(isMobile);

	// // console.log('');
	// console.log('isLandscape = ' + isLandscape);
	// console.log(isLandscape);

	// // console.log('');
	// console.log('window.matchMedia = ' + window.matchMedia);
	// console.log('window.matchMedia((min-width: 1920px)).media = ' + window.matchMedia('(min-width: 1920px)').media);
	// console.log(window.matchMedia('(min-width: 1920px)').media);

	// // console.log('');
	// console.log('typeof chipVisibility = ' + typeof chipVisibility);
	// console.log('typeof setChipVisibility = ' + typeof setChipVisibility);
	// console.log('typeof handleChipToggle = ' + typeof handleChipToggle);

	// // console.log('');
	// console.log('chipVisibility = ' + chipVisibility);
	// console.log(chipVisibility);
	// console.log('setChipVisibility = ' + setChipVisibility);
	// console.log(setChipVisibility);
	// console.log('handleChipToggle = ' + handleChipToggle);
	// console.log(handleChipToggle);

	// console.log('typeof chipvisibility = ' + typeof chipvisibility);
	// console.log('typeof setChipvisibility = ' + typeof setChipvisibility);

	// // console.log('');
	// console.log('chipvisibility = ' + chipvisibility);
	// console.log(chipvisibility);
	// // console.log('setChipvisibility = ' + setChipvisibility);

	// // console.log('');
	// console.log('chipState = ' + chipState);
	// console.log(chipState);

	// // console.log('');
	// console.log('isChipVisible = ' + isChipVisible);
	// // console.log(isChipVisible);

	// // console.log('');
	// console.log('setIsChipVisible = ' + setIsChipVisible);
	// // console.log(setIsChipVisible);

	// // console.log('');
	// console.log('toggleVisibility = ' + toggleVisibility);
	// // console.log(toggleVisibility);

	//#endregion ==================== FINDIN' OUT SH*T ====================


	return (
		<>
			<Header />
		</>
	);
}

export default App;
