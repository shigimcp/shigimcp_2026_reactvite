//#region ==================== MARK: IMPORTS ====================

import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useLayoutEffect } from 'react';

// import { Suspense } from 'react';
// import { useCallback } from 'react';
// import { useLocation } from 'react-router-dom';

// import { isBrowser } from "react-device-detect";

// // REF: https://www.youtube.com/watch?v=PMXUCNzthQU&t=508s => https://www.npmjs.com/package/ua-parser-js => https://github.com/faisalman/ua-parser-js => https://docs.uaparser.dev/api/main/overview.html
// import { UAParser } from 'ua-parser-js';

// REF: https://gsap.com/resources/React/
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

// REF: https://metafizzy.co => https://isotope.metafizzy.co => https://packery.metafizzy.co => https://imagesloaded.desandro.com => https://github.com/desandro/imagesloaded => https://www.npmjs.com/package/imagesloaded
import Isotope from 'isotope-layout';
import Packery from 'isotope-packery';
// import { Packery } from 'packery';
// import packeryMode from 'isotope-packery';
// import imagesloaded from 'imagesloaded';
// import { imagesloaded } from 'imagesloaded';
import imagesLoaded from 'imagesloaded';

import FadeLoader from 'react-spinners/FadeLoader';

// import ReactPlayer from 'react-player/vimeo';
import ReactPlayer from 'react-player'

// import '../stylesheets/Global.css';
// import '../stylesheets/App.css';
import '../stylesheets/Work.css';

// import myData from '../data/MyData';

// import employers from '../data/json/employers_https.json';
import employers from '../data/json/employers.json';
import work from '../data/json/work.json';
// import about from '../data/json/about.json';
// import skills from '../data/json/skills.json'

// import Navbar from '../components/Navbar';


//#region -------------------- MARK: IMPORTS: GSAP BANNERS --------------------

//#region - - - - - - - - - - - MARK: EA (src/assets) - - - - - - - - - - -

import EAAR_18951 from '../assets/images/ea/banners/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600/EAAR_18951';

import NMPF_04852 from '../assets/images/ea/banners/CR_4852_NMPF_US_Walmart_300x250/NMPF_04852';
// import NMPF_04852 from '../assets/images/ea/banners/CR_4852_NMPF_US_Walmart_300x250_reactvite/dist/';
// import NMPF_04852 from '../assets/images/ea/banners/CR_4852_NMPF_US_Walmart_300x250_reactvite/src/App';
// import NMPF_04852 from '../assets/images/ea/banners/CR_4852_NMPF_US_Walmart_300x250_reactvite/src/NMPF_04852';
// import NMPF_04852 from '../assets/images/ea/banners/CR_4852_NMPF_US_Walmart_300x250_reactvite/NMPF_04852/index.html';

// import NMMN_11155 from '../assets/images/ea/banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';
import BCBG_02342 from '../assets/images/ea/banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342';
import BCBG_05500 from '../assets/images/ea/banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500';
import JCNR_07074 from '../assets/images/ea/banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074';
import BSPS_26897 from '../assets/images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
import NMTG_26903 from '../assets/images/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
import JCVR_26963 from '../assets/images/ea/banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963';
// import JBJA_10263 from '../assets/images/ea/banners/CR_10263_J_by_JENNIFER_ANISTON_Kohls_300x250/JBJA_10263';

//#endregion - - - - - - - - - - - EA (src/assets) - - - - - - - - - - -

//#region - - - - - - - - - - - MARK: EA (public) - - - - - - - - - - -

// import EAAR_18951 from '../assets/images/ea/banners/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600/EAAR_18951';

// import NMPF_04852 from '../assets/images/ea/banners/CR_4852_NMPF_US_Walmart_300x250/NMPF_04852';

// import NMMN_11155 from '../assets/images/ea/banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155';
// import BCBG_02342 from '../assets/images/ea/banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342';
// import BCBG_05500 from '../assets/images/ea/banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500';
// import JCNR_07074 from '../assets/images/ea/banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074';
// import BSPS_26897 from '../assets/images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897';
// import NMTG_26903 from '../assets/images/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903';
// import JCVR_26963 from '../assets/images/ea/banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963';
// import JBJA_10263 from '../assets/images/ea/banners/CR_10263_J_by_JENNIFER_ANISTON_Kohls_300x250/JBJA_10263';

//#endregion - - - - - - - - - - - EA (public) - - - - - - - - - - -

//#region - - - - - - - - - - - MARK: EA (shigimcp) - - - - - - - - - - -

// const EAAR_18951 = new URL('/images/ea/banners/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600/EAAR_18951.jsx', import.meta.url).href;

// // const NMPF_04852 = new URL('/images/ea/banners/CR_4852_NMPF_US_Walmart_300x250/NMPF_04852.jsx', import.meta.url).href;
// const NMPF_04852 = new URL('/images/ea/banners/CR_4852_NMPF_US_Walmart_300x250', import.meta.url).href;

// const NMMN_11155 = new URL('/images/ea/banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155.jsx', import.meta.url).href;
// const BCBG_02342 = new URL('/images/ea/banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342.jsx', import.meta.url).href;
// const BCBG_05500 = new URL('/images/ea/banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500.jsx', import.meta.url).href;
// const JCNR_07074 = new URL('/images/ea/banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074.jsx', import.meta.url).href;
// const BSPS_26897 = new URL('/images/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897.jsx', import.meta.url).href;
// const NMTG_26903 = new URL('/images/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903.jsx', import.meta.url).href;
// const JCVR_26963 = new URL('/images/ea/banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963.jsx', import.meta.url).href;
// const JBJA_10263 = new URL('/images/ea/banners/CR_10263_J_by_JENNIFER_ANISTON_Kohls_300x250/JBJA_10263.jsx', import.meta.url).href;



// const EAAR_18951 = new URL('https://www.shigimcp.com/assets/img/ea/banners/CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600/EAAR_18951.jsx', import.meta.url).href;

// const NMPF_04852 = new URL('https://www.shigimcp.com/assets/img/ea/banners/CR_4852_NMPF_US_Walmart_300x250/NMPF_04852.jsx', import.meta.url).href;

// const NMMN_11155 = new URL('https://www.shigimcp.com/assets/img/ea/banners/CR_11155_MINAJESTY_2014_US_DIGITAL_300x600/NMMN_11155.jsx', import.meta.url).href;
// const BCBG_02342 = new URL('https://www.shigimcp.com/assets/img/ea/banners/BCBG_MAXAZRIA_CR00002342_AU_Digital_Plan/BCBG_02342.jsx', import.meta.url).href;
// const BCBG_05500 = new URL('https://www.shigimcp.com/assets/img/ea/banners/CR_5500_BCBG_BC_AU_Digital_Plan_2013/BCBG_05500.jsx', import.meta.url).href;
// const JCNR_07074 = new URL('https://www.shigimcp.com/assets/img/ea/banners/CR_7074_JC_VNOIR_2013_AU_300x600/JCNR_07074.jsx', import.meta.url).href;
// const BSPS_26897 = new URL('https://www.shigimcp.com/assets/img/ea/banners/26897_BS_PRIVATE_SHOW_GWP_PR_Walgreens_300x250/BSPS_26897.jsx', import.meta.url).href;
// const NMTG_26903 = new URL('https://www.shigimcp.com/assets/img/ea/banners/26903_NM_TRINI_GIRL_GWP_PR_Walgreens_300x250/NMTG_26903.jsx', import.meta.url).href;
// const JCVR_26963 = new URL('https://www.shigimcp.com/assets/img/ea/banners/26963_JC_VIVA_ROSE_GWP_PR_Walgreens_300x250/JCVR_26963.jsx', import.meta.url).href;
// const JBJA_10263 = new URL('https://www.shigimcp.com/assets/img/ea/banners/CR_10263_J_by_JENNIFER_ANISTON_Kohls_300x250/JBJA_10263.jsx', import.meta.url).href;

//#endregion - - - - - - - - - - - EA (shigimcp) - - - - - - - - - - -

//#region - - - - - - - - - - - KIEHLS - - - - - - - - - - -

// import KU_0000 from '../assets/images/kiehls/anims/KU-0000_HOMEPAGE_ANIMS_WK01_products_snow';

//#endregion - - - - - - - - - - - KIEHLS - - - - - - - - - - -

//#endregion -------------------- IMPORTS: GSAP BANNERS --------------------

//#endregion ==================== IMPORTS ====================


//#region ==================== MARK: CONSTANTS n VARS ====================

const remoteLoc = 'https://www.shigimcp.com/assets/img/';
const videoLoc = 'https://vimeo.com/';

// const ua = new UAParser().getResult();

// console.log('ua = ' + ua);
// console.log(ua);

// if (ua.device.type === undefined) {
// 	// setBrowserDetect('desktop');
// 	let browserDetect = 'desktop';
// } else {
// 	// setBrowserDetect(ua.device.type);
// 	let browserDetect = ua.device.type;
// }


//#region -------------------- MARK: DATA --------------------

//#region -------------------- MARK: FINDIN' OUT SH*T --------------------

// console.log('');
// // console.log('myData = ' + myData);
// console.log('myData = ');
// console.log(myData);

//#endregion -------------------- FINDIN' OUT SH*T --------------------


// let employerData = myData[0];
// let workData = myData[1];

let employerData = employers;
let workData = work;


//#region -------------------- MARK: FINDIN' MORE OUT SH*T --------------------

// console.log('');
// // console.log('employerData = ' + employerData);
// console.log('employerData = ');
// console.log(employerData);
// // console.log(employerData[0].employer);

// console.log('');
// // console.log('workData = ' + workData);
// console.log('workData = ');
// console.log(workData);

//#endregion -------------------- FINDIN' MORE OUT SH*T --------------------

//#endregion -------------------- DATA --------------------


//#region -------------------- MARK: TIMELINES *** see useRef DEFs *** --------------------

// // let workNavWidth;
// let workNavHeight;

// const workNavIN = new gsap.timeline();
// // const workNavIN = new gsap.timeline().play();
// // const workNavIN = new gsap.timeline().pause();
// const workNavTL = new gsap.timeline().pause();

// const emplNavTL = new gsap.timeline().pause();
// const typeNavTL = new gsap.timeline().pause();

// const workNavIN = new gsap.timeline();
// const workNavTL = new gsap.timeline();
// const emplNavTL = new gsap.timeline();
// const typeNavTL = new gsap.timeline();

// const workNavIN = new gsap.timeline().pause();
// const workNavTL = new gsap.timeline().pause();
// const emplNavTL = new gsap.timeline().pause();
// const typeNavTL = new gsap.timeline().pause();

//#endregion -------------------- TIMELINES *** see useRef DEFs *** --------------------


//#region -------------------- MARK: FILTER ARRAY: filterEmployer (and... push "All" for emplNavBar) --------------------

const filterEmployer = employerData.filter(isInGallery => isInGallery.isInGallery);

// console.log('');
// // console.log('filterEmployer = ' + filterEmployer);
// console.log('filterEmployer = ');
// console.log(filterEmployer);

// filterEmployer.unshift(
// filterEmployer.push(
// 	{
// 		"album_index": '00',
// 		// "album_id": "*",
// 		// "employer": "*",
// 		"album_id": "all",
// 		"employer": "All",
// 		"title": "Digital Designer / Front-End Developer",
// 		"date_start": "present",
// 		"date_end": "present",
// 		"info": "View ALL work",
// 		"info_other": "",
// 		"other_html": "",
// 		"other_type": "",
// 		"other": "",
// 		"software": "",
// 		"languages": "",
// 		// "logopath": "0elements/shigeru_logo.svg",
// 		// "logo": "shigeru_logo_transparent.svg",
// 		"logopath": "#",
// 		"logo": "#",
// 		"slpath": "other/sl",
// 		"thpath": "other/th",
// 		"flpath": "https://www.shigimcp.com/img/other/",
// 		"flpath_stage": "https://www.shigimcp.com/Xstage/shigimcp_2019/img/other/",
// 		"chippath": "#",
// 		"chip": "#",
// 		"availability": true,
// 		"isInGallery": true
// 	}
// )

// console.log('');
// // console.log('filterEmployer = ' + filterEmployer);
// console.log('filterEmployer = ');
// console.log(filterEmployer);

//#endregion -------------------- FILTER ARRAY: filterEmployer (and... push "All" for emplNavBar) --------------------


//#region -------------------- MARK: FILTER ARRAY: filterType - REF: https://github.com/rhernandog/gsap-flip-react/blob/master/src/App.js --------------------

const filterType = [
	// { key: '0000', id: 'allCheck', value: 'all', label: 'All' },
	{ key: '0000', id: 'websiteCheck', value: 'website', label: 'Website' },
	{ key: '0001', id: 'mobileCheck', value: 'mobile', label: 'Mobile' },
	{ key: '0002', id: 'videoCheck', value: 'video', label: 'Video' },
	{ key: '0003', id: 'bannerCheck', value: 'banner', label: 'Banners' },
	{ key: '0004', id: 'printCheck', value: 'print', label: 'Print' },
	// { key: '0005', id: 'allCheck', value: '*', label: 'All' }
];

// console.log('');
// console.log('filterType = ' + filterType);
// console.log('filterType = ');
// console.log(filterType);

//#endregion -------------------- FILTER ARRAY: filterType - REF: https://github.com/rhernandog/gsap-flip-react/blob/master/src/App.js --------------------


//#region -------------------- MARK: HTML5 BANNERS: bannerContent[] --------------------

const bannerContent = {
	EAAR_18951: EAAR_18951,
	NMPF_04852: NMPF_04852,
	// NMMN_11155: NMMN_11155,
	BCBG_02342: BCBG_02342,
	BCBG_05500: BCBG_05500,
	JCNR_07074: JCNR_07074,
	BSPS_26897: BSPS_26897,
	NMTG_26903: NMTG_26903,
	JCVR_26963: JCVR_26963,
	// JBJA_10263: JBJA_10263,
};

//#endregion -------------------- HTML5 BANNERS: xContent[] --------------------

//#endregion ==================== CONSTANTS n VARS ====================


export default function Work(props) {
// export default function Work({isLargeScreen, isChipVisible, setIsChipVisible, filterKey, setFilterKey}) {
// export default function Work({isChipVisible, setIsChipVisible, filterKey, setFilterKey}) {
// export default function Work({thisDeviceWidthArray, isChipVisible, setIsChipVisible, filterKey, setFilterKey}) {


	//#region ==================== MARK: FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Work.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('props.this = ' + props.this);
	// console.log(props.this);

	// // console.log('');
	// console.log('props.filterKey = ' + props.filterKey);
	// console.log(props.filterKey);

	// // console.log('');
	// console.log('isLargeScreen = ' + isLargeScreen);
	// console.log(isLargeScreen);

	// // console.log('');
	// console.log('typeof isLargeScreen = ' + typeof isLargeScreen);
	// console.log(typeof isLargeScreen);

	// // console.log('');
	// console.log('thisDeviceWidthArray = ' + thisDeviceWidthArray);
	// console.log(thisDeviceWidthArray);

	// // console.log('');
	// console.log('typeof thisDeviceWidthArray = ' + typeof thisDeviceWidthArray);
	// console.log(typeof thisDeviceWidthArray);

	// // console.log('');
	// console.log('props.thisDeviceWidthArray = ' + props.thisDeviceWidthArray);
	// console.log(props.thisDeviceWidthArray);

	// // console.log('');
	// console.log('typeof props.thisDeviceWidthArray = ' + typeof props.thisDeviceWidthArray);
	// console.log(typeof props.thisDeviceWidthArray);

	// console.log('');
	// console.log('isBrowser = ' + isBrowser);
	// // console.log(isBrowser);

	// console.log('isMobile = ' + isMobile);
	// // console.log(isMobile);

	// console.log('typeof chipVisibility = ' + typeof chipVisibility);
	// console.log('typeof setChipVisibility = ' + typeof setChipVisibility);
	// console.log('typeof handleChipToggle = ' + typeof handleChipToggle);

	// console.log('typeof chipvisibility = ' + typeof chipvisibility);
	// // console.log('typeof setchipvisibility = ' + typeof setchipvisibility);
	// console.log('typeof handlechiptoggle = ' + typeof handlechiptoggle);

	// // console.log('');
	// console.log('chipVisibility = ' + chipVisibility);
	// console.log(chipVisibility);
	// console.log('setChipVisibility = ' + setChipVisibility);
	// console.log(setChipVisibility);
	// console.log('handleChipToggle = ' + handleChipToggle);
	// console.log(handleChipToggle);

	// // console.log('');
	// console.log('chipvisibility = ' + chipvisibility);
	// console.log(chipvisibility);

	// // console.log('');
	// console.log('locationWork = ' + locationWork);
	// console.log(locationWork);

	// // console.log('');
	// console.log('locationWork.state = ' + locationWork.state);
	// console.log(locationWork.state);

	// // console.log('');
	// console.log('locationWork.state.chipVisibility = ' + locationWork.state.chipVisibility);
	// console.log(locationWork.state.chipVisibility);

	// // console.log('');
	// console.log('locationWork.state.chipvisibility = ' + locationWork.state.chipvisibility);
	// console.log(locationWork.state.chipvisibility);

	// // console.log('');
	// console.log('locationWork.state.chipstate = ' + locationWork.state.chipstate);
	// console.log(locationWork.state.chipstate);

	// // console.log('');
	// console.log('locationWork.state.chipState = ' + locationWork.state.chipState);
	// console.log(locationWork.state.chipState);

	// // console.log('');
	// console.log('locationWork.state.chipState.chipvisibility = ' + locationWork.state.chipState.chipvisibility);
	// console.log(locationWork.state.chipState.chipvisibility);

	// // console.log('');
	// console.log('locationWork.state.setChipVisibility = ' + locationWork.state.setChipVisibility);
	// console.log(locationWork.state.setChipVisibility);

	// // console.log('');
	// console.log('chipvisibility = ' + chipvisibility);
	// console.log(chipvisibility);

	// console.log('');
	// console.log('setchipvisibility = ' + setchipvisibility);
	// console.log(setchipvisibility);

	// // console.log('');
	// console.log('chipstate = ' + chipstate);
	// console.log(chipstate);

	// // console.log('');
	// console.log('document.childNodes = ' + document.childNodes);
	// console.log(document.childNodes);

	// // console.log('');
	// console.log('isChipVisible = ' + isChipVisible);
	// // console.log(isChipVisible);

	// // console.log('');
	// console.log('setIsChipVisible = ' + setIsChipVisible);
	// // console.log(setIsChipVisible);

	// // console.log('');
	// console.log('props.isChipVisible = ' + props.isChipVisible);
	// // console.log(props.isChipVisible);

	// // console.log('');
	// console.log('props.setIsChipVisible = ' + props.setIsChipVisible);
	// // console.log(props.setIsChipVisible);

	// // console.log('');
	// console.log('toggleVisibility = ' + toggleVisibility);
	// // console.log(toggleVisibility);

	//#endregion ==================== FINDIN' OUT SH*T ====================


	//#region ==================== MARK: imagesLoaded *** TKTK *** ====================

	// var imagesLoaded = require('imagesloaded');
	// var imagesLoaded = import.meta.glob('imagesloaded');
	// var imagesLoaded = import.meta.globEager('imagesloaded');

	// var galleryImages = imagesLoaded(document.querySelector('#galleryContainerID'), function(instance) {
	// 	console.log('all images are loaded');
	// 	console.log('galleryImages = ' + galleryImages);
	// 	console.log('instance = ' + instance);
	// });

	// console.log('galleryImages = ' + galleryImages);
	// // console.log('instance = ' + instance);


	// var chipImages = imagesLoaded(document.querySelector('#isotopeChipsID'), function(instance) {
	// 	console.log('all images are loaded');
	// 	console.log('chipImages = ' + chipImages);
	// 	console.log('instance = ' + instance);
	// });

	// console.log('chipImages = ' + chipImages);
	// // console.log('instance = ' + instance);

	//#endregion ==================== imagesLoaded *** TKTK *** ====================


	//#region ==================== MARK: CONSTs / FUNCTIONs ====================

	//#region -------------------- MARK: CONST/FUNCTION: handleNavToggles *** NG *** --------------------

	// const handleNavToggles = () => {
	// // function handleNavToggles(thisToggle) {

	// 	switch(navToggle) {

	// 		case 'home':
	// 			console.log('navToggle = ' + navToggle);
	// 			break;

	// 		case 'settings':
	// 			console.log('navToggle = ' + navToggle);
	// 			break;

	// 		case 'profile':
	// 			console.log('navToggle = ' + navToggle);
	// 			break;

	// 		default:
	// 			console.log('break');
	// 			break;
	// 	}
	// }

	//#endregion -------------------- CONST/FUNCTION: handleNavToggles *** NG *** --------------------


	//#region -------------------- MARK: CONST: useGoBack = (fallbackUrl) => /work --------------------

	const useGoBack = (fallbackUrl) => {
		const navigate = useNavigate();

		// console.log('useGoBack');

		return () => {
			if (window.history.length > 1) {
				// navigate(-1);
				navigate(0);
			} else {
				navigate(fallbackUrl);
			}
		};
	};

	// Usage
	const goBack = useGoBack('/work');

	// return <button onClick={goBack}>Go Back</button>;

	//#endregion -------------------- CONST: useGoBack = (fallbackUrl) => /work --------------------


	//#region -------------------- MARK: CONST: handleFilterKeyChange - setFilterKey / activeEmplDiv_Ref / activeTypeDiv_Ref --------------------

	// const handleFilterKeyChange = key => () => setFilterKey(key);

	// const handleFilterKeyChange = key => (keyJSONnode) => {
	const handleFilterKeyChange = key => (keyJSONnode) => {
	// function handleFilterKeyChange(keyJSONnode) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: CONST: handleFilterKeyChange - setFilterKey / activeEmplDiv_Ref / activeTypeDiv --------------------');

		// console.log('key = ' + key);
		// console.log(key);

		// console.log('');
		// console.log('keyJSONnode = ' + keyJSONnode);
		// console.log(keyJSONnode);

		// console.log('');
		// console.log('keyJSONnode.target = ' + keyJSONnode.target);
		// console.log(keyJSONnode.target);
		// console.log('keyJSONnode.target.parentNode.id = ' + keyJSONnode.target.parentNode.id);
		// // console.log('keyJSONnode.target.parentNode.ref = ' + keyJSONnode.target.parentNode.ref);
		// console.log('keyJSONnode.target.parentNode.className = ' + keyJSONnode.target.parentNode.className);
		// console.log('keyJSONnode.target.parentNode.parentNode.id = ' + keyJSONnode.target.parentNode.parentNode.id);

		// // console.log('');
		// console.log('keyJSONnode.currentTarget = ' + keyJSONnode.currentTarget);
		// console.log(keyJSONnode.currentTarget);
		// console.log('keyJSONnode.currentTarget.id = ' + keyJSONnode.currentTarget.id);
		// console.log('keyJSONnode.currentTarget.getAttribute(data-navprop) = ' + keyJSONnode.currentTarget.getAttribute('data-navprop'));
		// console.log(keyJSONnode.currentTarget.getAttribute('data-navprop'));

		// console.log('');
		// console.log('keyJSONnode.currentTarget.parentNode = ' + keyJSONnode.currentTarget.parentNode);
		// console.log(keyJSONnode.currentTarget.parentNode);
		// console.log('keyJSONnode.currentTarget.parentNode.id = ' + keyJSONnode.currentTarget.parentNode.id);

		// console.log('isLoading = ' + isLoading);

		// console.log('');
		// console.log('emplNavBar_Ref = ' + emplNavBar_Ref);
		// console.log(emplNavBar_Ref);
		// console.log('emplNavBar_Ref.querySelector([data-navprop=ctm]) = ' + emplNavBar_Ref.querySelector('[data-navprop="ctm"]'));
		// console.log(emplNavBar_Ref.querySelector('[data-navprop="ctm"]'));
		// console.log('document.querySelector([data-navprop=ctm]) = ' + document.querySelector('[data-navprop="ctm"]'));
		// console.log(document.querySelector('[data-navprop="ctm"]'));

		// console.log('emplNavBar_Ref.current = ' + emplNavBar_Ref.current);
		// console.log('emplNavBar_Ref.current.id = ' + emplNavBar_Ref.current.id);
		// console.log('emplNavBar_Ref.current.offsetWidth = ' + emplNavBar_Ref.current.offsetWidth);
		// console.log('emplNavBar_Ref.current.offsetHeight = ' + emplNavBar_Ref.current.offsetHeight);
		// console.log('emplNavBar_Ref.current.id = ' + emplNavBar_Ref.current.id);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		clearContent();

		// workNavIN.current.play();

		// if (!props.thisDeviceWidthArray[0]) {
		// 	workNavIN.play();

		// 	// setEmplNavToggleBtn(!emplNavToggleBtn);
		// 	// setTypeNavToggleBtn(!typeNavToggleBtn);

		// 	// setEmplNavToggleBtn(false);
		// 	// setTypeNavToggleBtn(false);

		// 	// emplNavTL.pause();
		// 	// typeNavTL.pause();

		// 	// emplNavTL.pause(0);
		// 	// typeNavTL.pause(0);
		// }

		// setFilterKey(key);
		props.setFilterKey(key);
		// props.setFilterKey(keyJSONnode);

		// setGalleryVisibility(true);

		// setGalChipToggle(!galChipToggle);
		// setGalChipToggle(false);

		// setChipVisibility(!chipVisibility);
		// setChipVisibility(chipVisibility => !chipVisibility);
		// setChipVisibility(false);
		// setIsChipVisible(false);
		props.setIsChipVisible(false);

		// handleChipToggle();

		let thisLocX;
		let thisLocY;
		let thisLocW;
		let thisLocH;
		let activeDivDims

		// let activeDivDims = getDimensions(keyJSONnode.currentTarget);
		// // let activeDivDims = getDimensions(emplNavBar_Ref.current);
		// // let activeDivDims = getDimensions(key);

		if (keyJSONnode.currentTarget === 'undefined') {
			activeDivDims = getDimensions(keyJSONnode.currentTarget);

			//#region -------------------- FINDIN' OUT MORE SH*T --------------------

			// console.log('');

			// console.log('filterKey = ' + filterKey);
			// console.log(filterKey);

			// console.log('props.filterKey = ' + props.filterKey);
			// console.log(props.filterKey);

			// console.log('keyJSONnode.currentTarget.getAttribute(data-navprop) = ' + keyJSONnode.currentTarget.getAttribute('data-navprop'));

			// console.log('activeDivDims: activeEmplDiv_Ref / activeEmplDiv_Ref = ' + activeDivDims);
			// console.log(activeDivDims);

			//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------


			switch (true) {

				// case keyJSONnode.currentTarget.parentNode.id === 'isotopeChipsID':
				case keyJSONnode.currentTarget.parentNode.id === 'chipContainerID':

					// console.log("* - * - * CHIP!!! * - * - *");
					document.querySelector('[data-navprop=' + key + ']').click();
					// document.querySelector('[data-navprop=' + keyJSONnode + ']').click();

					break;

				case keyJSONnode.currentTarget.parentNode.id === 'emplNavBarID':

					// thisLocX = activeDivDims[0];
					thisLocX = activeDivDims[0] - 5;
					// thisLocX = activeDivDims[0] - (emplNavBar_Ref.current.offsetWidth * 0.5) + (activeDivDims[2] * 0.2) + 15;
					thisLocY = activeDivDims[1];
					// thisLocW = activeDivDims[2];
					thisLocW = activeDivDims[2] + 10;
					thisLocH = activeDivDims[3];

					gsap.to([activeEmplDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });
					gsap.to([activeTypeDiv_Ref.current], { x: 0, y: 0, width: 0, height: thisLocH, duration: 0 });

					break;

				case keyJSONnode.currentTarget.parentNode.id === 'typeNavBarID':

					thisLocX = activeDivDims[0];
					thisLocY = activeDivDims[1];
					thisLocW = activeDivDims[2];
					thisLocH = activeDivDims[3];

					gsap.to([activeTypeDiv_Ref.current], { x: thisLocX, y: thisLocY, width: thisLocW, height: thisLocH, duration: 0.375 });
					gsap.to([activeEmplDiv_Ref.current], { x: 0, y: 0, width: 0, height: thisLocH, duration: 0 });

					break;

				default:

					console.log('handleFilterKeyChange: switch = keyJSONnode.currentTarget.parentNode.id = DEFAULT');

					break;
			}
		}
	};

	//#endregion -------------------- CONST: handleFilterKeyChange - setFilterKey / activeEmplDiv_Ref / activeTypeDiv_Ref --------------------


	//#region -------------------- MARK: FUNCTION: getDimensions(thisObject) --------------------

	function getDimensions(thisObject) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: FUNCTION: getDimensions(thisObject) --------------------');

		// console.log('');
		// console.log('thisObject = ' + thisObject);
		// console.log('thisObject (key) = ' + thisObject);
		// console.log('thisObject (keyJSONnode.currentTarget) = ' + thisObject);
		// console.log(thisObject);

		// console.log('emplNavBar_Ref = ' + emplNavBar_Ref);
		// console.log(emplNavBar_Ref);

		// console.log('emplNavBar_Ref.current = ' + emplNavBar_Ref.current);
		// console.log(emplNavBar_Ref.current);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		let thisObject_x = thisObject.offsetLeft;
		let thisObject_y = thisObject.offsetTop;
		let thisObject_w = thisObject.offsetWidth;
		let thisObject_h = thisObject.offsetHeight;

		//#region -------------------- FINDIN' OUT MORE SH*T --------------------

		// console.log('thisObject_x = ' + thisObject_x);
		// console.log('thisObject_y = ' + thisObject_y);
		// console.log('thisObject_w = ' + thisObject_w);
		// console.log('thisObject_h = ' + thisObject_h);

		//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------

		return [thisObject_x, thisObject_y, thisObject_w, thisObject_h];
	}

	//#endregion -------------------- FUNCTION: getDimensions(thisContainer) --------------------


	//#region -------------------- MARK: FUNCTION: resizeContent(thisContent) *** RETHINK THIS! *** --------------------

	function resizeContent(thisContent) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- resizeContent(thisContent) *** RETHINK THIS! *** --------------------');
		// console.log('thisContent = ' + thisContent);
		// console.log(thisContent);

		// console.log('');
		// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);
		// console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		let newVidWidth;
		let newVidHeight;
		// let vidScale;
		// let vidScale = 0.5;
		let vidScale = 0.8;
		// let vidScale = 1.5;

		switch (true) {

			case thisContent.mwidth >= window.innerWidth && thisContent.mwidth >= thisContent.mheight:

				// console.log('This content is TOO WIDE & LANDSCAPE');
				// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);

				newVidWidth = window.innerWidth * vidScale;
				newVidHeight = thisContent.mheight * (newVidWidth / thisContent.mwidth);

				break;

			case thisContent.mwidth >= window.innerWidth && thisContent.mwidth <= thisContent.mheight:

				// console.log('This content is TOO WIDE & PORTRAIT');
				// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);

				newVidWidth = window.innerWidth * vidScale;
				newVidHeight = thisContent.mheight * (newVidWidth / thisContent.mwidth);

				break;

			case thisContent.mheight >= window.innerHeight && thisContent.mwidth >= thisContent.mheight:

				// console.log('This content is TOO TALL & LANDSCAPE');
				// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);

				newVidWidth = thisContent.mwidth * (newVidHeight / thisContent.mheight);
				newVidHeight = window.innerHeight * vidScale;

				break;

			case thisContent.mheight >= window.innerHeight && thisContent.mwidth <= thisContent.mheight:

				// console.log('This content is TOO TALL & PORTRAIT');
				// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);

				newVidWidth = thisContent.mwidth * (newVidHeight / thisContent.mheight);
				newVidHeight = window.innerHeight * vidScale;

				break;

			default:

				// console.log('DEFAULT');
				// console.log('thisContent.mwidth = ' + thisContent.mwidth + '     thisContent.mheight = ' + thisContent.mheight);

				if (window.innerWidth / window.innerHeight <= thisContent.mwidth / thisContent.mheight) {

					// console.log('thisContent.mwidth / thisContent.mheight = ' + thisContent.mwidth / thisContent.mheight);
					// console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

					// console.log('This content FITS and I want it to behave LANDSCAPE');

					newVidWidth = window.innerWidth * 0.75;
					newVidHeight = thisContent.mheight * (newVidWidth / thisContent.mwidth);

				} else {

					// console.log('thisContent.mwidth / thisContent.mheight = ' + thisContent.mwidth / thisContent.mheight);
					// console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

					// console.log('This content FITS and I want it to behave PORTRAIT');

					newVidHeight = window.innerHeight * 0.75;
					newVidWidth = thisContent.mwidth * (newVidHeight / thisContent.mheight);
				}

				break;
		}

		// console.log('');
		// console.log('newVidWidth = ' + newVidWidth + '     newVidHeight = ' + newVidHeight);

		return ([newVidWidth, newVidHeight]);
	}

	//#endregion -------------------- FUNCTION: resizeContent(thisContent) *** RETHINK THIS! *** --------------------


	//#region -------------------- MARK: FUNCTION: clearContent() --------------------

	function clearContent() {
	// function clearContent(param1) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: FUNCTION: clearContent() --------------------');

		// console.log('param1 = ' + param1);

		// console.log(bannerContainer_Ref.current.parentNode);
		// console.log(bannerContainer_Ref.current);
		// console.log(bannerContainer_Ref.current.children);
		// console.log(document.getElementById('bannerContainerID').children);
		// // console.log(bannerContainer_Ref.current.children.tl);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		setBannerShow(null);
		// bannerContainer_Ref.current.removeChild(children);
		// bannerContainer_Ref.current.children.remove();
		// bannerContainer_Ref.current.children = null;
		// document.getElementById('bannerContainerID').children.remove();

		setBanneriFrameOpen(false);
		banneriFrame_Ref.current.src = '';
		bannerContainer_Ref.current.style.left = 0 + 'px';
		bannerContainer_Ref.current.style.top = 0 + 'px';
		gsap.set([bannerContainer_Ref.current], { scale: 0, transformOrigin: '0 0', immediateRender: true });

		setWebiFrameOpen(false);
		webiFrame_Ref.current.src = '';

		setVideoOpen(false);
		setLoadedVideo(null);
	}

	//#endregion -------------------- FUNCTION: clearContent() --------------------


	//#region -------------------- MARK: FUNCTION: loadContent(thisEvent, thisWorkItem) --------------------

	let newContent;
	let iframeSRC;

	function loadContent(thisEvent, thisWorkItem) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: FUNCTION: loadContent(thisEvent, thisWorkItem) --------------------');

		// // console.log('');
		// console.log('thisEvent = ' + thisEvent);
		// console.log(thisEvent);
		// // console.log('');
		// console.log('thisEvent.target = ' + thisEvent.target);
		// console.log(thisEvent.target);
		// // console.log('');
		// console.log('thisEvent.currentTarget = ' + thisEvent.currentTarget);
		// console.log(thisEvent.currentTarget);

		// // console.log('');
		// console.log('thisWorkItem = ' + thisWorkItem);
		// console.log(thisWorkItem);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		// let thisLocX;
		// let thisLocY;
		// let thisLocW;
		// let thisLocH;

		let currentTargetDims = getDimensions(thisEvent.currentTarget);

		// console.log('');
		// console.log('currentTargetDims loadContent: ANIMATE or STANDARD = ' + currentTargetDims);
		// console.log(currentTargetDims);

		let targetDims = getDimensions(thisEvent.target);

		// console.log('');
		// console.log('targetDims loadContent: HTML5 = ' + targetDims);
		// console.log(targetDims);


		switch (thisWorkItem.format) {

			case 'banner': {

				//#region -------------------- ASSIGN NEW CONTENT: banner --------------------

				let bannerScale = thisEvent.target.offsetWidth / thisWorkItem.mwidth;

				clearContent();


				//#region -------------------- FINDIN' OUT SH*T --------------------

				// console.log('');
				// console.log('-------------------- ASSIGN NEW CONTENT: banner --------------------');
				// console.log('I AM A BANNER: ' + thisWorkItem.format);

				// console.log('bannerScale = ' + bannerScale);

				//#endregion -------------------- FINDIN' OUT SH*T --------------------


				if (thisWorkItem.format_src === 'animate' || thisWorkItem.format_src === 'standard') {
				// if (thisWorkItem.format_src === 'animate' || thisWorkItem.format_src === 'standard' || thisWorkItem.format_src === 'html5') {

					//#region - - - - - - - - - - - IF 'animate'... - - - - - - - - - - -

					// console.log('I am an ANIMATE or STANDARD banner: ' + thisWorkItem.format_src);

					// iframeSRC = remoteLoc + thisWorkItem.album_id + '/banners/' + thisWorkItem.link;
					iframeSRC = remoteLoc + thisWorkItem.album_id + '/banners/' + thisWorkItem.link + '/index.html';

					// console.log('iframeSRC = ' + iframeSRC);

					banneriFrame_Ref.current.src = iframeSRC;
					banneriFrame_Ref.current.style.left = currentTargetDims[0] + 'px';
					banneriFrame_Ref.current.style.top = currentTargetDims[1] + 'px';
					banneriFrame_Ref.current.style.width = targetDims[2] / bannerScale + 'px';
					banneriFrame_Ref.current.style.height = targetDims[3] / bannerScale + 'px';

					gsap.set([banneriFrame_Ref.current], { scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

					setBanneriFrameOpen(true);

					//#endregion - - - - - - - - - - - IF 'animate'... - - - - - - - - - - -

				} else if (thisWorkItem.format_src === 'html5') {

					//#region - - - - - - - - - - - ELSE IF 'html5'... - - - - - - - - - - -

					newContent = React.createElement(bannerContent[thisWorkItem.link2]);
					// newContent = remoteLoc + thisWorkItem.album_id + '/banners/' + thisWorkItem.link + '/index.html';


					//#region -------------------- FINDIN' OUT MORE SH*T --------------------

					// console.log('I am an HTML5 banner: ' + thisWorkItem.format_src);

					// // console.log('thisWorkItem.link = ' + thisWorkItem.link);
					// // console.log('thisWorkItem.link2 = ' + thisWorkItem.link2);
					// // console.log('thisWorkItem.link3 = ' + thisWorkItem.link3);
					// // console.log('thisWorkItem.link4 = ' + thisWorkItem.link4);

					// // console.log('bannerContent = ' + bannerContent);
					// console.log(bannerContent);

					// // console.log('');
					// console.log('newContent = ' + newContent);
					// console.log(newContent);

					//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------


					// gsap.set([bannerContainer_Ref.current], { x: currentTargetDims[0], y: currentTargetDims[1], width: currentTargetDims[2], height: currentTargetDims[3], transformOrigin: '0 0', immediateRender: true });
					// gsap.set([bannerContainer_Ref.current], { x: currentTargetDims[0], y: currentTargetDims[1], width: currentTargetDims[2], height: currentTargetDims[3], scale: bannerScale, transformOrigin: '0 0', immediateRender: true });
					// gsap.set([bannerContainer_Ref.current], { x: currentTargetDims[0], y: currentTargetDims[1], width: targetDims[2], height: targetDims[3], scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

					bannerContainer_Ref.current.src = newContent;
					bannerContainer_Ref.current.style.left = currentTargetDims[0] + 'px';
					bannerContainer_Ref.current.style.top = currentTargetDims[1] + 'px';
					bannerContainer_Ref.current.style.width = targetDims[2] / bannerScale + 'px';
					bannerContainer_Ref.current.style.height = targetDims[3] / bannerScale + 'px';

					gsap.set([bannerContainer_Ref.current], { scale: bannerScale, transformOrigin: '0 0', immediateRender: true });

					setBannerShow(newContent);

					//#endregion - - - - - - - - - - - ELSE IF 'html5'... - - - - - - - - - - -
				}

				break;

				//#endregion -------------------- ASSIGN NEW CONTENT: banner --------------------
			}

			case 'html5':
			case 'website':
			case 'mobile': {
				//#region -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------

				// console.log('');
				// console.log('-------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------');
				// console.log('I AM either HTML5, WEBSITE or MOBILE: ' + thisWorkItem.format);
				// console.log('thisWorkItem = ' + thisWorkItem);
				// console.log(thisWorkItem);
				// console.log('thisWorkItem.format_src = ' + thisWorkItem.format_src);
				// console.log(thisWorkItem.format_src);


				clearContent();

				iframeSRC;

				switch (true) {

					case thisWorkItem.format_src === 'external':

						iframeSRC = thisWorkItem.link2;

						// // console.log('');
						// console.log('iframeSRC = ' + iframeSRC);
						// console.log(iframeSRC);

						webiFrame_Ref.current.src = iframeSRC;
						webiFrame_Ref.current.style.width = thisWorkItem.mwidth + 'px';
						webiFrame_Ref.current.style.height = thisWorkItem.mheight + 'px';
						webiFrame_Ref.current.style.left = (window.innerWidth - thisWorkItem.mwidth) / 2 + 'px';

						setWebiFrameOpen(true);

						break;

					case thisWorkItem.format_src === 'video':

						iframeSRC = videoLoc + thisWorkItem.link2;

						// // console.log('');
						// console.log('iframeSRC = ' + iframeSRC);
						// console.log(iframeSRC);

						// let newVidWidth;
						// let newVidHeight;

						// // let vidScale = 0.5;
						// let vidScale = 0.8;


						//#region -------------------- SEE: resizeContent(thisContent) --------------------

						// switch (true) {

						//     case thisWorkItem.mwidth >= window.innerWidth && thisWorkItem.mwidth >= thisWorkItem.mheight:

						//         // console.log('This content is TOO WIDE & LANDSCAPE');
						//         // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

						//         newVidWidth = window.innerWidth * vidScale;
						//         newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

						//         break;

						//     case thisWorkItem.mwidth >= window.innerWidth && thisWorkItem.mwidth <= thisWorkItem.mheight:

						//         // console.log('This content is TOO WIDE & PORTRAIT');
						//         // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

						//         newVidWidth = window.innerWidth * vidScale;
						//         newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

						//         break;

						//     case thisWorkItem.mheight >= window.innerHeight && thisWorkItem.mwidth >= thisWorkItem.mheight:

						//         // console.log('This content is TOO TALL & LANDSCAPE');
						//         // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

						//         newVidHeight = window.innerHeight * vidScale;
						//         newVidWidth = thisWorkItem.mwidth * (newVidHeight / thisWorkItem.mheight);

						//         break;

						//     case thisWorkItem.mheight >= window.innerHeight && thisWorkItem.mwidth <= thisWorkItem.mheight:

						//         // console.log('This content is TOO TALL & PORTRAIT');
						//         // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

						//         newVidHeight = window.innerHeight * vidScale;
						//         newVidWidth = thisWorkItem.mwidth * (newVidHeight / thisWorkItem.mheight);

						//         break;

						//     default:

						//         // console.log('VIDEO: DEFAULT');
						//         // console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);

						//         // newVidWidth = thisWorkItem.mwidth;
						//         // newVidHeight = thisWorkItem.mheight;

						//         // newVidWidth = window.innerWidth * vidScale;
						//         // newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

						//         if (window.innerWidth / window.innerHeight <= thisWorkItem.mwidth / thisWorkItem.mheight) {

						//             // console.log('thisWorkItem.mwidth / thisWorkItem.mheight = ' + thisWorkItem.mwidth / thisWorkItem.mheight);
						//             // console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

						//             // console.log('This content FITS and I want it to behave LANDSCAPE');

						//             newVidWidth = window.innerWidth * 0.75;
						//             newVidHeight = thisWorkItem.mheight * (newVidWidth / thisWorkItem.mwidth);

						//         } else {

						//             // console.log('thisWorkItem.mwidth / thisWorkItem.mheight = ' + thisWorkItem.mwidth / thisWorkItem.mheight);
						//             // console.log('window.innerWidth / window.innerHeight = ' + window.innerWidth / window.innerHeight);

						//             // console.log('This content FITS and I want it to behave PORTRAIT');

						//             newVidHeight = window.innerHeight * 0.75;
						//             newVidWidth = thisWorkItem.mwidth * (newVidHeight / thisWorkItem.mheight);
						//         }

						//         break;
						// }

						//#endregion -------------------- SEE: resizeContent(thisContent) --------------------


						resizeContent(thisWorkItem);

						console.log('resizeContent(thisWorkItem) = ' + resizeContent(thisWorkItem));
						console.log('resizeContent(thisWorkItem)[0] = ' + resizeContent(thisWorkItem)[0]);
						console.log('resizeContent(thisWorkItem)[1] = ' + resizeContent(thisWorkItem)[1]);


						// setVideoWidth(newVidWidth);
						// setVideoHeight(newVidHeight);
						setVideoWidth(resizeContent(thisWorkItem)[0]);
						setVideoHeight(resizeContent(thisWorkItem)[1]);

						setLoadedVideo(iframeSRC);
						setVideoOpen(true);

						break;

					default:

						iframeSRC = remoteLoc + thisWorkItem.album_id + '/' + thisWorkItem.link2;
						// iframeSRC = remoteLoc + thisWorkItem.album_id + '/' + thisWorkItem.link;

						// // console.log('');
						// console.log('iframeSRC = ' + iframeSRC);
						// console.log(iframeSRC);

						webiFrame_Ref.current.src = iframeSRC;
						webiFrame_Ref.current.style.width = thisWorkItem.mwidth + 'px';
						webiFrame_Ref.current.style.height = thisWorkItem.mheight + 'px';
						webiFrame_Ref.current.style.left = (window.innerWidth - thisWorkItem.mwidth) / 2 + 'px';

						setWebiFrameOpen(true);

						break;
				}

				// setWebiFrameOpen(true);


				//#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - compensate for oversized / oddly-sized content  - - - - - - - - - - -

				// if (thisWorkItem.mheight >= window.innerHeight) {
				// if (thisWorkItem.mwidth >= window.innerWidth || thisWorkItem.mheight >= window.innerHeight) {
				if (thisWorkItem.mwidth >= window.innerWidth || thisWorkItem.mheight >= window.innerHeight || thisWorkItem.mwidth <= window.innerWidth * 0.5 || thisWorkItem.mheight <= window.innerHeight * 0.5) {

					//#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - TOO BIG / SMALL  - - - - - - - - - - -

					// let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.9;
					// let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.875;
					let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.75;
					// let thisScale = (window.innerHeight / thisWorkItem.mheight) * 0.5;
					let thisY = (window.innerHeight - (thisWorkItem.mheight * thisScale)) / 2;

					gsap.set([webiFrame_Ref.current], { top: thisY, scale: thisScale, transformOrigin: '50% 0', immediateRender: true });

					//#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - TOO BIG / SMALL  - - - - - - - - - - -

				} else {

					//#region - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - JUUUUST RIIIIGHT  - - - - - - - - - - -

					let thisY = (window.innerHeight - thisWorkItem.mheight) / 2;

					gsap.set([webiFrame_Ref.current], { top: thisY, transformOrigin: '50% 0', immediateRender: true });

					//#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - JUUUUST RIIIIGHT  - - - - - - - - - - -
				}

				//#endregion - - - - - - - - - - - ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) - compensate for oversized / oddly-sized content  - - - - - - - - - - -

				break;

				//#endregion -------------------- ASSIGN NEW CONTENT: html5, website, mobile (IFRAME) --------------------
			}

			case 'video': {
				//#region -------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------

				// console.log('');
				// console.log('-------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------');
				// console.log(thisWorkItem);
				// console.log('thisWorkItem.mwidth = ' + thisWorkItem.mwidth + '     thisWorkItem.mheight = ' + thisWorkItem.mheight);
				// console.log('window.innerWidth = ' + window.innerWidth + '     window.innerHeight = ' + window.innerHeight);
				// console.log('window.innerWidth * 0.8 = ' + window.innerWidth * 0.8);


				clearContent();

				let videoSRC = videoLoc + thisWorkItem.link2;

				// // console.log('');
				// console.log('videoSRC = ' + videoSRC);
				// console.log(videoSRC);

				// let newVidWidth;
				// let newVidHeight;

				// // let vidScale = 0.5;
				// let vidScale = 0.8;


				resizeContent(thisWorkItem);

				// console.log('resizeContent(thisWorkItem) = ' + resizeContent(thisWorkItem));
				// console.log('resizeContent(thisWorkItem)[0] = ' + resizeContent(thisWorkItem)[0]);
				// console.log('resizeContent(thisWorkItem)[1] = ' + resizeContent(thisWorkItem)[1]);

				// console.log('newVidWidth = ' + newVidWidth + '     newVidHeight = ' + newVidHeight);

				// setVideoWidth(newVidWidth);
				// setVideoHeight(newVidHeight);
				setVideoWidth(resizeContent(thisWorkItem)[0]);
				setVideoHeight(resizeContent(thisWorkItem)[1]);

				setLoadedVideo(videoSRC);
				setVideoOpen(true);

				break;

				//#endregion -------------------- ASSIGN NEW CONTENT: video (REACT-PLAYER) --------------------
			}

			default: {
				//#region -------------------- ASSIGN NEW CONTENT: default --------------------

				console.log('');
				console.log('I AM THE DEFAULT: ' + thisWorkItem.format);

				clearContent();

				break;

				//#endregion -------------------- ASSIGN NEW CONTENT: default --------------------
			}
		}
	}

	//#endregion -------------------- FUNCTION: loadContent(thisEvent, thisWorkItem) --------------------

	//#endregion ==================== CONSTs / FUNCTIONs ====================


	//#region ==================== MARK: useRef DEFs ====================

	// let workNavWidth;
	let workNavHeight;

	const workNavIN = useRef();
	const workNavTL = useRef();
	const emplNavTL = useRef();
	const typeNavTL = useRef();

	const workNavContainer_Ref = useRef(null);

	// const chipNav_Ref = useRef(null);
	// const chipToggleBtn_Ref = useRef(null);
	const workNav_Ref = useRef(null);

	const emplNavBar_Ref = useRef(null);
	const activeEmplDiv_Ref = useRef(null);

	const typeNavBar_Ref = useRef(null);
	const activeTypeDiv_Ref = useRef(null);

	const toggleNav_Ref = useRef(null);
	const toggleBtn_Ref = useRef(null);
	// const navToggleBtn_Ref = useRef(null);

	const workNavBtnContainer_m_Ref = useRef(null);
	const workBackBtn_m_Ref = useRef(null);
	const emplNavBtn_m_Ref = useRef(null);
	const typeNavBtn_m_Ref = useRef(null);

	// init one ref to store the future isotope object
	// const isotope_Ref = useRef();
	const isotopeGallery_Ref = useRef();
	// const isotopeChips_Ref = useRef();

	// const isotopeChips_Ref = useRef(null);
	const galleryContainer_Ref = useRef(null);
	const chipContainer_Ref = useRef(null);

	const bannerContainer_Ref = useRef(null);
	const banneriFrame_Ref = useRef(null);

	const iframeContainer_Ref = useRef(null);
	const webiFrame_Ref = useRef(null);

	const videoContainer_Ref = useRef(null);
	const videoPlayer_Ref = useRef(null);

	//#endregion ==================== useRef DEFs ====================


	//#region ==================== MARK: useState DEFs ====================

	// REF: https://jack72828383883.medium.com/how-to-preload-images-into-cache-in-react-js-ff1642708240
	// const [isLoading, setIsLoading] = useState(true);

	// const [isLoaded, setIsLoaded] = useState(false);

	// const [navToggle, setNavToggle] = useState('workNavBar');

	const [workNavToggleBtn, setWorkNavToggleBtn] = useState(true);
	// const [workNavToggleBtn, setWorkNavToggleBtn] = useState(false);
	const [workNavToggleText, setWorkNavToggleText] = useState('View by type');
	// const [workNavToggleText, setWorkNavToggleText] = useState('View by employer');

	// const [emplNavToggleBtn, setEmplNavToggleBtn] = useState(true);
	// const [typeNavToggleBtn, setTypeNavToggleBtn] = useState(true);
	const [emplNavToggleBtn, setEmplNavToggleBtn] = useState(false);
	const [typeNavToggleBtn, setTypeNavToggleBtn] = useState(false);

	const [bannerShow, setBannerShow] = useState();
	// const [bannerShow, setBannerShow] = useState(null);
	const [banneriFrameOpen, setBanneriFrameOpen] = useState(false);

	const [webiFrameOpen, setWebiFrameOpen] = useState(false);

	const [videoOpen, setVideoOpen] = useState(false);
	// const [loadedVideo, setLoadedVideo] = useState(null);
	// const [videoWidth, setVideoWidth] = useState(null);
	// const [videoHeight, setVideoHeight] = useState(null);
	const [loadedVideo, setLoadedVideo] = useState();
	const [videoWidth, setVideoWidth] = useState();
	const [videoHeight, setVideoHeight] = useState();

	//#endregion ==================== useState DEFs ====================


	//#region ==================== MARK: useEffect(s) ====================

	//#region -------------------- MARK: useEffect: browserDetect-ish (props.thisDeviceWidthArray) => define TIMELINES --------------------

	// useEffect(() => {
	useGSAP(() => {

		// workNavWidth = emplNavBar_Ref.current.getBoundingClientRect().width;
		workNavHeight = emplNavBar_Ref.current.getBoundingClientRect().height;

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// // console.log('');
		// console.log('-------------------- useEffect: browserDetect-ish (props.thisDeviceWidthArray) => define TIMELINES --------------------');

		// // console.log('browserDetect = ' + browserDetect);

		// // const ua = new UAParser().getResult();

		// // console.log('ua = ' + ua);
		// console.log(ua);
		// console.log('ua.device.type = ' + ua.device.type);

		// // console.log('');
		// // console.log('workNav_Ref.current.id = ' + workNav_Ref.current.id);
		// // console.log('workNav_Ref.current.getBoundingClientRect().width = ' + workNav_Ref.current.getBoundingClientRect().width);
		// // console.log('workNav_Ref.current.getBoundingClientRect().height = ' + workNav_Ref.current.getBoundingClientRect().height);

		// console.log('');
		// console.log('screen.orientation = ' + screen.orientation);
		// console.log('screen.orientation.type = ' + screen.orientation.type);
		// console.log('window.matchMedia = ' + window.matchMedia);

		// // console.log('');
		// console.log('thisDeviceWidthArray = ' + thisDeviceWidthArray);
		// console.log(thisDeviceWidthArray);

		// // console.log('');
		// console.log('props.thisDeviceWidthArray = ' + props.thisDeviceWidthArray);
		// console.log(props.thisDeviceWidthArray);

		// // console.log('');
		// // console.log('workNav_Ref.current.children = ' + workNav_Ref.current.children);
		// console.log(workNav_Ref.current.children);

		// // console.log('');
		// // console.log('workNavBtnContainer_m_Ref.current.children = ' + workNavBtnContainer_m_Ref.current.children);
		// console.log(workNavBtnContainer_m_Ref.current.children);

		// // console.log('');
		// console.log('workNavHeight = ' + workNavHeight);
		// console.log(workNavHeight);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		if (!props.thisDeviceWidthArray[0]) {
		// if (props.thisDeviceWidthArray[1] || props.thisDeviceWidthArray[2]) {

			// console.log('props.thisDeviceWidthArray[1], props.thisDeviceWidthArray[2] = ' + props.thisDeviceWidthArray[1] + ', ' + props.thisDeviceWidthArray[2]);

			// workNavIN
			workNavIN.current = gsap.timeline()
			// workNavIN.current = gsap.timeline({ paused: true })
				// .to('.workNavBar .workNavBtnContainer_m', { display:"none", duration: 0 }, 'frame01')
				.to('.workNavBtnContainer_m', { display:"none", duration: 0 }, 'frame01')
				// .fromTo([workNav_Ref.current], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });
				.fromTo('.workNavBar', { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });
				// .fromTo('.workNavBar', { y: -workNavHeight, autoAlpha: 0 }, { y: workNavHeight, autoAlpha: 1, duration: 0.5 });
			;

			// workNavIN.play();
			// workNavIN.pause();

			workNavIN.current.play();
			// workNavIN.current.pause();


			// workNavTL
			workNavTL.current = gsap.timeline()
			// workNavTL.current = gsap.timeline({ paused: true })
				// .fromTo([emplNavBar_Ref.current], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
				// .fromTo([typeNavBar_Ref.current], { y: workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 0, duration: 0.5 }, 'frame01')

				.fromTo('.emplNavBar', { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, 'frame01')
				.fromTo('.typeNavBar', { y: workNavHeight, autoAlpha: 1 }, { y: 0, autoAlpha: 0, duration: 0.5 }, 'frame01')
			;

			// workNavTL.play();
			// workNavTL.pause();

			// workNavTL.current.play();
			workNavTL.current.pause();

		} else {
		// } else if (props.thisDeviceWidthArray[0]) {
	
			// workNavIN
			workNavIN.current = gsap.timeline()
			// workNavIN.current = gsap.timeline({ paused: true })
				// .to('.emplNavBar', { y: (emplNavBar_Ref.current.offsetHeight * -emplNavBar_Ref.current.children.length) - 5, duration: 0 }, 'frame00')
				// .to('.typeNavBar', { y: (typeNavBar_Ref.current.offsetHeight * -typeNavBar_Ref.current.children.length) - 5, duration: 0 }, 'frame00')

				// .fromTo([workNav_Ref.current], { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 0.5, duration: 0.5 });
				.fromTo('.workNavBar', { y: -workNavHeight, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });
			;

			// workNavIN.play();
			// workNavIN.pause();

			// workNavIN.current.play();
			// workNavIN.current.pause();
			workNavIN.current.seek(0).pause();

			// const emplNavItems = gsap.utils.toArray(emplNavBar_Ref.current.children);

			// // console.log('');
			// // console.log('emplNavItems = ' + emplNavItems);
			// console.log(emplNavItems);

			// emplNavTL
			emplNavTL.current = gsap.timeline()
			// emplNavTL.current = gsap.timeline({ paused: true })
				// .to([emplNavBtn_m_Ref.current], { y: emplNavBtn_m_Ref.current.offsetHeight + emplNavBtn_m_Ref.current.children.length - 1, duration: 0 }, 'frame00')
				// .fromTo([emplNavBtn_m_Ref.current.children], { y: -50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')
				// .fromTo('.workNavBar .emplNavBar .workNavItem', { y: -50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')

				// .to('.emplNavBar', { y: emplNavBar_Ref.current.offsetHeight * -emplNavBar_Ref.current.children.length, duration: 0.5 }, 'frame00')
				.to('.emplNavBar', { y: (emplNavBar_Ref.current.offsetHeight * -emplNavBar_Ref.current.children.length) - 10, duration: 0.25 }, 'frame00')
				// .fromTo('.emplNavBar', { y: 0 }, { y: (emplNavBar_Ref.current.offsetHeight * -emplNavBar_Ref.current.children.length) - 15, duration: 0.5 }, 'frame00')

				// .fromTo('.emplNavItem', { y: -50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')
				// .fromTo(emplNavItems, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')
				// .fromTo([emplNavBar_Ref.current.children], { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')

				// .to([emplNavBar_Ref.current.children], {
				// .to('.emplNavItem', {
				// .to(emplNavItems, {
				// 	duration: 1,
				// 	rotation: 360,
				// 	opacity: 1,
				// 	delay: 0.5,
				// 	stagger: 0.1, // stagger in from the left with a 0.1 second gap in between animations
				// 	ease: "sine.out"
				// }, 'frame01')
			;

			// workNavIN.play();
			// emplNavTL.pause();

			// workNavIN.current.play();
			// emplNavTL.current.pause();
			// emplNavTL.current.seek(0).pause();


			// const typeNavItems = gsap.utils.toArray(typeNavBar_Ref.current.children);

			// // console.log('');
			// // console.log('typeNavItems = ' + typeNavItems);
			// console.log(typeNavItems);

			// typeNavTL
			typeNavTL.current = gsap.timeline()
			// typeNavTL.current = gsap.timeline({ paused: true })
				// .to([typeNavBtn_m_Ref.current], { y: typeNavBtn_m_Ref.current.offsetHeight + typeNavBtn_m_Ref.current.children.length - 1, duration: 0 }, 'frame00')
				// .fromTo([typeNavBtn_m_Ref.current.children], { y: -50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')
				// .fromTo('.workNavBar .typeNavBar .workNavItem', { y: -50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')

				// .to('.typeNavBar', { y: typeNavBar_Ref.current.offsetHeight * -typeNavBar_Ref.current.children.length, duration: 0.5 }, 'frame00')
				.to('.typeNavBar', { y: (typeNavBar_Ref.current.offsetHeight * -typeNavBar_Ref.current.children.length) - 10, duration: 0.25 }, 'frame00')
				// .to('.typeNavBar', { y: (typeNavBar_Ref.current.offsetHeight * -typeNavBar_Ref.current.children.length) - 15, duration: 0 }, 'frame00')
				// .fromTo('.typeNavBar', { y: 0 }, { y: (typeNavBar_Ref.current.offsetHeight * -typeNavBar_Ref.current.children.length) - 15, duration: 0.5 }, 'frame00')

				// .fromTo('.typeNavItem', { y: -50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')
				// .fromTo(typeNavItems, { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')
				// .fromTo([typeNavBar_Ref.current.children], { y: -100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.125, stagger: 0.0625 }, 'frame01')

				// .to([typeNavBar_Ref.current.children], {
				// .to('.typeNavItem', {
				// .to(typeNavItems, {
				// 	duration: 1,
				// 	rotation: 360,
				// 	opacity: 1,
				// 	delay: 0.5,
				// 	stagger: 0.1, // stagger in from the left with a 0.1 second gap in between animations
				// 	ease: "sine.out"
				// }, 'frame01')
			;

			// workNavIN.play();
			// typeNavTL.pause();

			// workNavIN.current.play();
			// typeNavTL.current.pause();
			typeNavTL.current.seek(0).pause();
		}

	// },{}); // <-- scope is for selector text (optional)
	},{ scope: workNavContainer_Ref }); // <-- scope is for selector text (optional)
	// },{ scope: workNavContainer_Ref.current }); // <-- scope is for selector text (optional)

	//#endregion -------------------- useEffect: browserDetect-ish (props.thisDeviceWidthArray) => define TIMELINES --------------------


	//#region -------------------- MARK: useEffect: workNavToggleBtn --------------------

	useEffect(() => {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// // console.log('');
		// console.log('-------------------- useEffect: workNavToggleBtn --------------------');
		// console.log('workNavToggleBtn = ' + workNavToggleBtn);

		// // console.log('');
		// console.log('emplNavBar_Ref.current.lastChild = ' + emplNavBar_Ref.current.lastChild);
		// console.log(emplNavBar_Ref.current.lastChild);

		// console.log('');
		// console.log('typeNavBar_Ref.current.lastChild = ' + typeNavBar_Ref.current.lastChild);
		// console.log(typeNavBar_Ref.current.lastChild);

		// // console.log('');
		// console.log('props.thisDeviceWidthArray = ' + props.thisDeviceWidthArray);
		// console.log(props.thisDeviceWidthArray);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		if (!props.thisDeviceWidthArray[0]) {

			if (workNavToggleBtn) {

				// console.log('');
				console.log('workNavToggleBtn = ' + workNavToggleBtn);
				// console.log('workNavTL = ' + workNavTL);
				// console.log(workNavTL);

				// workNavTL.play();
				workNavTL.current.play();
				// workNavTL.current.reverse();
				setWorkNavToggleText('View by type');
				// typeNavBar_Ref.current.lastChild.click();

			} else {

				// console.log('');
				console.log('workNavToggleBtn = ' + workNavToggleBtn);
				// console.log('workNavTL = ' + workNavTL);
				// console.log(workNavTL);

				// workNavTL.reverse();
				workNavTL.current.reverse();
				// workNavTL.current.play();
				setWorkNavToggleText('View by employer');
				// emplNavBar_Ref.current.lastChild.click();
		}
	}

	// }, []);
	// }, [workNavToggleBtn]);
	// }, [props, workNavToggleBtn]);
	}, [props.thisDeviceWidthArray, workNavToggleBtn]);
	// }, [workNavToggleBtn, workNavTL]);
	// }, [workNavToggleBtn, emplNavBar_Ref]);
	// }, [workNavToggleBtn, props]);
	// }, [workNavToggleBtn, emplNavToggleBtn, typeNavToggleBtn]);

	//#endregion -------------------- useEffect: workNavToggleBtn --------------------


	//#region -------------------- MARK: useEffect: emplNavToggleBtn *** JURY'S STILL OUT... *** --------------------

	useEffect(() => {
		// if (emplNavToggleBtn) {
		if (!emplNavToggleBtn) {

			console.log('');
			console.log('emplNavToggleBtn = ' + emplNavToggleBtn);
			// console.log('typeNavToggleBtn = ' + typeNavToggleBtn);
			// console.log('emplNavTL.current = ' + emplNavTL.current);
			// console.log(emplNavTL.current);

			// emplNavTL.current.play();
			// // typeNavTL.current.reverse();

			emplNavTL.current?.play();
			// typeNavTL.current?.reverse();

			// if (typeNavToggleBtn) {
			// 	// setTypeNavToggleBtn(false);
			// 	setTypeNavToggleBtn(!typeNavToggleBtn);
			// }

		} else {

			console.log('');
			console.log('emplNavToggleBtn = ' + emplNavToggleBtn);
			// console.log('typeNavToggleBtn = ' + typeNavToggleBtn);
			// console.log('emplNavTL.current = ' + emplNavTL.current);
			// console.log(emplNavTL.current);

			// emplNavTL.current.reverse();
			// // typeNavTL.current.reverse();

			emplNavTL.current?.reverse();
			// typeNavTL.current?.reverse();

			// if (typeNavToggleBtn) {
			// 	// setTypeNavToggleBtn(false);
			// 	setTypeNavToggleBtn(!typeNavToggleBtn);
			// }
		}
	// });
	// }, []);
	// }, [emplNavToggleBtn]);
	}, [emplNavToggleBtn, typeNavToggleBtn]);

	//#endregion -------------------- useEffect: emplNavToggleBtn *** JURY'S STILL OUT... *** --------------------


	//#region -------------------- MARK: useEffect: typeNavToggleBtn *** JURY'S STILL OUT... *** --------------------

	useEffect(() => {
		// if (typeNavToggleBtn) {
		if (!typeNavToggleBtn) {

			// console.log('');
			// console.log('emplNavToggleBtn = ' + emplNavToggleBtn);
			console.log('typeNavToggleBtn = ' + typeNavToggleBtn);
			// console.log('emplNavTL.current = ' + emplNavTL.current);
			// console.log(emplNavTL.current);

			// // emplNavTL.current.reverse();
			// typeNavTL.current.play();

			// emplNavTL.current?.reverse();
			typeNavTL.current?.play();

			// if (emplNavToggleBtn) {
			// 	// setEmplNavToggleBtn(false);
			// 	setEmplNavToggleBtn(!emplNavToggleBtn);
			// }

		} else {

			// console.log('');
			// console.log('emplNavToggleBtn = ' + emplNavToggleBtn);
			console.log('typeNavToggleBtn = ' + typeNavToggleBtn);
			// console.log('emplNavTL.current = ' + emplNavTL.current);
			// console.log(emplNavTL.current);

			// // emplNavTL.current.reverse();
			// typeNavTL.current.reverse();

			// emplNavTL.current?.reverse();
			typeNavTL.current?.reverse();

			// if (emplNavToggleBtn) {
			// 	// setEmplNavToggleBtn(false);
			// 	setEmplNavToggleBtn(!emplNavToggleBtn);
			// }
		}
	// });
	// }, []);
	// }, [typeNavToggleBtn]);
	}, [typeNavToggleBtn, emplNavToggleBtn]);

	//#endregion -------------------- useEffect: typeNavToggleBtn *** JURY'S STILL OUT... *** --------------------


	//#region -------------------- MARK: useEffect: emplNavToggleBtn, typeNavToggleBtn *** NG *** --------------------

	// useEffect(() => {

	// 	// switch (true) {
	// 	switch (true) {

	// 		// case 'toggleNav':
	// 		// 	return { ...state, toggleNav: !state.toggleNav };

	// 		case navState.emplNavBtn_m:

	// 			console.log('');
	// 			console.log('navState.emplNavBtn_m = ' + navState.emplNavBtn_m);
	// 			console.log('navState.typeNavBtn_m = ' + navState.typeNavBtn_m);
	// 			// console.log('emplNavTL.current = ' + emplNavTL.current);
	// 			// console.log(emplNavTL.current);

	// 			typeNavTL.current.reverse();
	// 			emplNavTL.current.play();

	// 			// if (emplNavToggleBtn) {
	// 				// setEmplNavToggleBtn(!emplNavToggleBtn)
	// 			// }

	// 			break;

	// 		case navState.typeNavBtn_m:

	// 			console.log('');
	// 			console.log('navState.emplNavBtn_m = ' + navState.emplNavBtn_m);
	// 			console.log('navState.typeNavBtn_m = ' + navState.typeNavBtn_m);
	// 			// console.log('emplNavTL.current = ' + emplNavTL.current);
	// 			// console.log(emplNavTL.current);

	// 			emplNavTL.current.reverse();
	// 			typeNavTL.current.play();

	// 			// if (emplNavToggleBtn) {
	// 				// setEmplNavToggleBtn(!emplNavToggleBtn)
	// 			// }

	// 			break;

	// 		default:
	// 			console.log('useEffect: emplNavToggleBtn, typeNavToggleBtn => case: break');

	// 			break;
	// 	}

	// // });
	// // }, []);
	// // }, [emplNavToggleBtn, typeNavToggleBtn]);
	// }, [navState.emplNavBtn_m, navState.typeNavBtn_m]);

	//#endregion -------------------- useEffect: emplNavToggleBtn, typeNavToggleBtn *** NG *** --------------------


	//#region -------------------- MARK: useEffect: handleNavToggles *** NG *** --------------------

	// useEffect(() => {

	// 	switch(navToggle) {

	// 		case 'emplNav':
	// 			console.log('navToggle = ' + navToggle);
	// 			break;

	// 		case 'typeNav':
	// 			console.log('navToggle = ' + navToggle);
	// 			break;

	// 		case 'workNav':
	// 			console.log('navToggle = ' + navToggle);

	// 			// setWorkNavToggleBtn(!workNavToggleBtn)

	// 			break;

	// 		default:
	// 			console.log('break');

	// 			// // if (props.thisDeviceWidthArray[1] || props.thisDeviceWidthArray[2]) {
	// 			// if (!props.thisDeviceWidthArray[0] && workNavToggleBtn) {
	// 			// 	workNavIN.play();
	// 			// }

	// 			break;
	// 	}
	// // }, );
	// // }, []);
	// }, [navToggle]);
	// // }, [props, navToggle, workNavToggleBtn]);

	//#endregion -------------------- useEffect: handleNavToggles *** NG *** --------------------


	//#region -------------------- MARK: useEffect: Close modal on ESC key press --------------------

	useEffect(() => {

		const handleESCKeyDown = (e) => {
			if (e.key === "Escape") {
				// clearContent();

				setBannerShow(null);
				// bannerContainer_Ref.current.removeChild(children);
				// bannerContainer_Ref.current.children.remove();
				// bannerContainer_Ref.current.children = null;
				// document.getElementById('bannerContainerID').children.remove();

				setBanneriFrameOpen(false);
				banneriFrame_Ref.current.src = '';
				bannerContainer_Ref.current.style.left = 0 + 'px';
				bannerContainer_Ref.current.style.top = 0 + 'px';
				gsap.set([bannerContainer_Ref.current], { scale: 0, transformOrigin: '0 0', immediateRender: true });

				setWebiFrameOpen(false);
				webiFrame_Ref.current.src = '';

				setVideoOpen(false);
				setLoadedVideo(null);
			}
		};

		if (bannerShow || banneriFrameOpen || webiFrameOpen || videoOpen ) {
			document.addEventListener("keydown", handleESCKeyDown);
		}

		return () => {
			document.removeEventListener("keydown", handleESCKeyDown);
		};

	// }, [bannerShow, banneriFrameOpen, webiFrameOpen, videoOpen, clearContent]);
	}, [bannerShow, banneriFrameOpen, webiFrameOpen, videoOpen]);

	//#endregion -------------------- useEffect: Close modal on ESC key press --------------------


	//#region -------------------- MARK: useEffect: initialize isotopeGallery object with configs --------------------

	useEffect(() => {
	// useEffect((props) => {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- useEffect: initialize isotopeGallery object with configs --------------------');

		// console.log('isLoading = ' + isLoading);
		// console.log('isLoaded = ' + isLoaded);
		// console.log('isotopeGallery_Ref = ' + isotopeGallery_Ref);
		// console.log('isotopeGallery_Ref.current = ' + isotopeGallery_Ref.current);

		// console.log('props = ' + props);
		// console.log(props);

		// console.log('props.filterKey = ' + props.filterKey);
		// console.log(props.filterKey);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		// isotopeGallery_Ref.current?.arrange({ filter: props.filterKey });

		// let galleryImagesLoaded = require('imagesloaded');
		// let galleryImagesLoaded = { imagesloaded };

		// galleryImagesLoaded(workNav_Ref.current, function () {
		// imagesloaded(workNav_Ref.current, function () {

		// isotopeGallery_Ref.current = new Isotope('.galleryContainer', {
		isotopeGallery_Ref.current = new Isotope('.galleryContainer', {
			// initLayout: false,
			// initLayout: true,

			// itemSelector: '.filter-item',
			itemSelector: '.workItem',
			// itemSelector: '.chipItem',
			percentPosition: true,

			// layoutMode: 'masonry',
			// masonry: {
			// 	columnWidth: 100,
			// 	gutter: 20,
			// 	isFitWidth: true,
			// }

			layoutMode: 'packery',
			packery: {
				gutter: 20,
				// gutter: 40,
				// gutter: (props.thisDeviceWidthArray[0]) ? 10 : (props.thisDeviceWidthArray[1]) ? 10 : 20,
				// columnWidth: '.workItem',
				// rowHeight: 60,
				// horizontal: true
			}
		})

		// console.log('isotopeGallery_Ref.current = ' + isotopeGallery_Ref.current);
		// console.log(isotopeGallery_Ref.current);

		// setIsLoaded(!isLoaded);

		// cleanup
		// return () => isotopeGallery_Ref.current.destroy()

	// });
	}, []);
	// }, [isLoading]);
	// }, [isLoaded]);
	// }, [isLoading, isLoaded]);
	// }, [props]);


	//#region -------------------- MARK: device check for isotopeGallery options --------------------

	// const changeLayoutOptions = () => {
	if (isotopeGallery_Ref.current) {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- device check for isotopeGallery options --------------------');

		// // console.log('props = ' + props);
		// // console.log(props);

		// console.log('props.thisDeviceWidthArray = ' + props.thisDeviceWidthArray);
		// console.log(props.thisDeviceWidthArray);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		// Example of changing gutter size dynamically
		isotopeGallery_Ref.current.option({
			packery: {
				gutter: (props.thisDeviceWidthArray[0]) ? 12.5 : (props.thisDeviceWidthArray[1]) ? 10 : 20,
			},
		});
	
		// Refresh the layout
		isotopeGallery_Ref.current.layout();
	};

	//#endregion -------------------- device check for isotopeGallery options --------------------

	//#endregion -------------------- useEffect: initialize isotopeGallery object with configs --------------------


	//#region -------------------- MARK: useEffect: handle filterKey change in galleryContainer --------------------
	// -------------------- imagesloaded: REF01: https://isotope.metafizzy.co/layout.html#imagesloaded --------------------
	// -------------------- imagesloaded: REF02: https://imagesloaded.desandro.com/#webpack --------------------
	// -------------------- imagesloaded: REF03: https://github.com/desandro/imagesloaded --------------------

	useEffect(() => {

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- useEffect: handle filterKey change in galleryContainer --------------------');
		// // console.log('filterKey = ' + filterKey);
		// // console.log('isLoading = ' + isLoading);

		// console.log('isotopeGallery_Ref = ' + isotopeGallery_Ref);
		// console.log(isotopeGallery_Ref);
		// console.log('isotopeGallery_Ref.current = ' + isotopeGallery_Ref.current);
		// console.log(isotopeGallery_Ref.current);

		// console.log('');

		// console.log('isotopeChips_Ref = ' + isotopeChips_Ref);
		// console.log(isotopeChips_Ref);
		// console.log('isotopeChips_Ref.current = ' + isotopeChips_Ref.current);
		// console.log(isotopeChips_Ref.current);

		// console.log('');

		// console.log('workNav_Ref = ' + workNav_Ref);
		// console.log(workNav_Ref);
		// console.log('workNav_Ref.current = ' + workNav_Ref.current);
		// console.log(workNav_Ref.current);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		// let imagesLoaded = require('imagesloaded');

		if (galleryContainer_Ref.current) {
			imagesLoaded(galleryContainer_Ref.current, function () {
			// imagesloaded(galleryContainer_Ref.current, function () {

				// filterKey === '*'
				props.filterKey === '*'
				// filterKey === 'all'
				// filterKey === 'null'
					// ? isotopeGallery_Ref.current.arrange({ filter: `*` })
					// // ? isotope_Ref.current.arrange({ filter: `all` })
					// : isotope_Ref.current.arrange({ filter: `.${filterKey}` });

					// ? isotopeGallery_Ref.current.arrange({ filter: `*` })
					// ? isotopeGallery_Ref.current.arrange({ filter: `all` })
					? isotopeGallery_Ref.current.arrange({ filter: `null` })
					// : isotopeGallery_Ref.current.arrange({ filter: `.${filterKey}` });
					: isotopeGallery_Ref.current.arrange({ filter: `.${props.filterKey}` });

				window.scrollTo(0, 0);

				// setActiveEmplDiv(filterKey);
				// setIsLoaded(true);

			});
		}

	// }, [filterKey]);
	// }, [filterKey, galleryContainer_Ref]);
	}, [props.filterKey, galleryContainer_Ref]);
	// }, [filterKey, chipContainer_Ref, galleryContainer_Ref]);
	// }, [filterKey, isLoading]);

	//#endregion -------------------- useEffect: handle filterKey change in galleryContainer --------------------

	//#endregion ==================== useEffect(s) ====================


	//#region ==================== MARK: useReducer: navReducer => emplNavBtn_m, typeNavBtn_m *** ABANDONED for now... *** ====================

	// const navInitialState = { 
	// 	// // toggleNav: true, 
	// 	// emplNavBtn_m: true, 
	// 	// typeNavBtn_m: true 

	// 	// toggleNav: false, 
	// 	emplNavBtn_m: false, 
	// 	typeNavBtn_m: false 
	// };

	// const [navState, navDispatch] = useReducer(navReducer, navInitialState);

	// function navReducer(state, action) {
	// // function navReducer(navState, action) {

	// 	//#region -------------------- FINDIN' OUT SH*T --------------------

	// 	console.log('');
	// 	console.log('==================== navReducer(state, action) ====================');

	// 	// console.log('');
	// 	// console.log('state = ' + state);
	// 	// console.log(state);	

	// 	// console.log('');
	// 	// console.log('action = ' + action);
	// 	// console.log(action);

	// 	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	// 	switch (action.type) {

	// 		// case 'toggleNav':
	// 		// 	return { ...state, toggleNav: !state.toggleNav };

	// 		case 'emplNavBtn_m':
	// 		// case state.emplNavBtn_m:
	// 		// case navState.emplNavBtn_m:
	// 		// case (state && navState.emplNavBtn_m):

	// 			// console.log('');
	// 			console.log('...state = ' + {...state});
	// 			console.log({...state});

	// 			// console.log('');
	// 			// console.log('state.empleNavBtn_m = ' + state.empleNavBtn_m);
	// 			// console.log('state.typeNavBtn_m = ' + state.typeNavBtn_m);

	// 			// console.log('');
	// 			// console.log('workNavTL.current = ' + workNavTL.current);

	// 			if (state.typeNavBtn_m) {
	// 				emplNavTL.current.play();
	// 				// typeNavTL.current.reverse();
	// 				typeNavTL.current.seek(0).pause();
	// 			} else {
	// 				emplNavTL.current.reverse();
	// 			}

	// 			return { 
	// 				...state, 
	// 				emplNavBtn_m: !state.emplNavBtn_m, 
	// 				typeNavBtn_m: false, 
	// 			};

	// 			// break;

	// 		case 'typeNavBtn_m':
	// 		// case state.typeNavBtn_m:
	// 		// case navState.typeNavBtn_m:
	// 		// case (state && navState.typeNavBtn_m):

	// 			// console.log('');
	// 			console.log('...state = ' + {...state});
	// 			console.log({...state});

	// 			// console.log('');
	// 			// console.log('state.empleNavBtn_m = ' + state.empleNavBtn_m);
	// 			// console.log('state.typeNavBtn_m = ' + state.typeNavBtn_m);

	// 			if (state.emplNavBtn_m) {
	// 				// emplNavTL.current.reverse();
	// 				emplNavTL.current.seek(0).pause();
	// 				typeNavTL.current.play();
	// 			} else {
	// 				typeNavTL.current.reverse();
	// 			}

	// 			return { 
	// 				...state, 
	// 				emplNavBtn_m: false, 
	// 				typeNavBtn_m: !state.typeNavBtn_m, 
	// 			};

	// 			// break;

	// 		default:

	// 			return state;
	
	// 			// console.log('useEffect: emplNavToggleBtn, typeNavToggleBtn => case: break');

	// 			// break;
	// 	}
	// }

	//#endregion ==================== useReducer: navReducer => emplNavBtn_m, typeNavBtn_m *** ABANDONED for now... *** ====================


	//#region ==================== MARK: useCallback: clearContent() ====================

	// const handleESCKeyDown = useCallback((clearContent) => {

	// 	setBannerShow(null);
	// 	// bannerContainer_Ref.current.removeChild(children);
	// 	// bannerContainer_Ref.current.children.remove();
	// 	// bannerContainer_Ref.current.children = null;
	// 	// document.getElementById('bannerContainerID').children.remove();

	// 	setBanneriFrameOpen(false);
	// 	banneriFrame_Ref.current.src = '';
	// 	bannerContainer_Ref.current.style.left = 0 + 'px';
	// 	bannerContainer_Ref.current.style.top = 0 + 'px';
	// 	gsap.set([bannerContainer_Ref.current], { scale: 0, transformOrigin: '0 0', immediateRender: true });

	// 	setWebiFrameOpen(false);
	// 	webiFrame_Ref.current.src = '';

	// 	setVideoOpen(false);
	// 	setLoadedVideo(null);
	// });

	//#endregion ==================== useCallback: clearContent() ====================


	//#region ==================== MARK: COMPONENTS ====================

	//#region -------------------- MARK: chipContainer: RenderChips: chipItem[s] --------------------

	// const RenderChips = () => {
	function RenderChips() {
	// function RenderChips({onClick}) {
	// function RenderChips(props) {


		//#region -------------------- MARK: FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: RenderChips --------------------');
		// console.log('employers = ' + employers);
		// console.log(employers);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		return filterEmployer.map((employer) =>

			<div
				// className={employer.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'}
				// className={`chipItem ${employer.format} ${employer.album_id} masonryHspan${employer.masonryHspan}`}
				// className={`chipItem ${employer.album_id} masonryHspan${2}`}
				// className={`chipItem ${employer.album_id} masonryHspan${3}`}
				// className={`chipItem ${employer.album_id}`}
				// className={`chipItem masonryHspan${3}`}
				// className={`chipItem masonryHspan${2}`}
				className={`chipItem`}
				id={employer.album_id + '_ChipID'}
				// key={employer.album_index}
				key={employer.album_id}
				// key={employer.album_index + '_chip'}
				// navprop={employer.album_index + '_chip'}
				// navprop={employer.album_id}
				// data-navprop={employer.album_id}
				data-navprop={employer.album_id + '_ChipDATA'}

				// onClick={handleFilterKeyChange(employer.album_id)}

				// onClick={() => handleFilterKeyChange(employer.album_id)}
				// onClick={() => handleFilterKeyChange('ea')}
				// onClick={() => handleFilterKeyChange(`ea`)}

				// onClick={() => handleFilterKeyChange(employer.album_id)(employer.album_id)}
				onClick={() => {


					//#region -------------------- MARK: FINDIN' OUT MORE SH*T --------------------

					// console.log('');
					// console.log('-------------------- MARK: RenderChips --------------------');
					// console.log('employers = ' + employers);
					// console.log(employers);

					// console.log('workNav_Ref.current = ' + workNav_Ref.current);
					// console.log(workNav_Ref.current);

					// console.log('workNavTL = ' + workNavTL);
					// console.log(workNavTL);

					// console.log('workNavToggleBtn = ' + workNavToggleBtn);
					// console.log(workNavToggleBtn);

					// console.log('workNavToggleBtn = ' + workNavToggleBtn);
					// console.log(workNavToggleBtn);

					// // setWorkNavToggleBtn(true);
					// // setWorkNavToggleBtn(!workNavToggleBtn);
					// workNavTL.current.play();

					//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------

					handleFilterKeyChange(employer.album_id)(employer.album_id);

					// emplNavTL.current.seek(0).pause();
					// typeNavTL.current.seek(0).pause();
					// emplNavTL.current.reverse();
					// typeNavTL.current.reverse();
					workNavIN.current.play();
				}}

				// onClick={() => {
				// 	handleFilterKeyChange(employer.album_id);
				// 	// setWorkNavToggleBtn(true);
				// 	// console.log('Button clicked!');
				// }}

				// onClick={() => clearContent(employer.album_id)}
			>

				<img
					// className={`chipItem ${employer.album_id} masonryHspan${2}`}
					className='chipNavImg'
					// id={employer.album_id + '_ID'}
					// key={employer.album_index}
					src={remoteLoc + employer.chippath} alt={employer.employer}
					// alt={'chipItem: ' + employer.album_id}
				/>

				<div className='chipInfo'>
					<h3>{employerData[employer.album_index].employer}</h3>

					{/* <p>{employer.caption} {employer.date_start} - {employer.date_end}</p> */}
					{/* <p>{employer.caption} {thisDateStart} - {thisDateEnd}</p> */}
					{/* {thisDateStart !== thisDateEnd ? <div className='employerDates'>{thisDateStart} - {thisDateEnd}</div> : <div className='employerDates'>{thisDateEnd}</div>} */}

					{/* <p>
						{employer.caption} {
							Intl.DateTimeFormat('en-US', {
								month: '2-digit',
								year: '2-digit',
							}).format(new Date(employer.date_start))
						} - {
							Intl.DateTimeFormat('en-US', {
								month: '2-digit',
								year: '2-digit',
							}).format(new Date(employer.date_end))
						}
					</p> */}

				</div>

			</div>
		);
	};

	//#endregion -------------------- chipContainer: RenderChips: chipItem[s] --------------------


	//#region -------------------- MARK: workNavContainer: workNav: RenderEmployers --------------------

	// const renderEmployers = () => {
	function RenderEmployers() {	
	// function RenderEmployers(props) {	

		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- MARK: renderEmployers --------------------');

		// console.log('props = ' + props);
		// console.log(props);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------

		return filterEmployer.map((employer) =>

			// <div className={employer.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={employer.album_id + '_NavID'} key={employer.album_index} onClick={handleFilterKeyChange(employer.album_id)}>
			<div
				// className={employer.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'}
				// className={employer.logopath !== `#` ? `workNavItemLogo ${employer.album_id}` : `workNavItem ${employer.album_id}`}
				// className={employer.logopath !== `#` ? `workNavItemLogo` : `workNavItem`}
				// className={employer.logopath !== `#` ? `workNavItem workNavItemLogo` : `workNavItem`}
				className='workNavItem emplNavItem'
				id={employer.album_id + '_NavID'}
				// key={employer.album_index}
				// key={employer.album_index + '_chip'}
				key={employer.album_id + '_chip'}
				// navprop={employer.album_id}
				data-navprop={employer.album_id}

				// onClick={handleFilterKeyChange(employer.album_id)}
				// onClick={handleFilterKeyChange(this, employer.album_id)}
				onClick={() => {
					handleFilterKeyChange(employer.album_id)(employer.album_id);
					// setEmplNavToggleBtn(false);
					setEmplNavToggleBtn(!emplNavToggleBtn);
				}}

				// ref={emplNavBar_Ref}
			>
				{employer.logopath !== '#' ? <img className='workNavLogo' src={remoteLoc + employer.logopath} alt={employer.employer} /> : employer.employer}
				<span className='emplNavEmployer' id='emplNavEmployerID'>{employer.employer}</span>
			</div>

			// <div className={employer.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={employer.album_id + 'NavID'} key={employer.album_index} onClick={handleFilterKeyChange(employer.album_id)} data-filter=".kiehls">
			// 	{employer.logopath !== '#' ? <img className='workNavLogo' src={remoteLoc + employer.logopath} alt={employer.employer} /> : employer.employer}
			// </div>

			// <div className={employer.logopath !== '#' ? 'workNavItemLogo' : 'workNavItem'} id={employer.album_id + 'NavID'} key={employer.album_index}>
			// 	{employer.logopath !== '#' ? <img className='workNavLogo' src={remoteLoc + employer.logopath} alt={employer.employer} /> : employer.employer}
			// </div>
		);
	};

	//#endregion -------------------- workNavContainer: workNav: RenderEmployers --------------------


	//#region -------------------- MARK: workNavContainer: workNav: RenderTypes --------------------

	// const RenderTypes = () => {
	function RenderTypes() {

		// console.log('');
		// console.log('-------------------- MARK: RenderTypes --------------------');

		return filterType.map((e) =>
			// <div className='workNavItem' id={e.label + 'NavID'} key={e.key}>{e.label}</div>
			<div 
				className='workNavItem typeNavItem' 
				id={e.label + '_NavID'} 
				key={e.key} 
				// onClick={handleFilterKeyChange(e.value)}
				onClick={() => {
					// handleFilterKeyChange(e.value);
					handleFilterKeyChange(e.value)(e.value);
					// setTypeNavToggleBtn(false);
					setTypeNavToggleBtn(!typeNavToggleBtn);
				}}
			>
				{e.label}
			</div>
		);
	};

	//#endregion -------------------- workNavContainer: workNav: RenderTypes --------------------


	//#region -------------------- MARK: galleryContainer: RenderWork: workItem[s] --------------------

	// const RenderWork = () => {
	function RenderWork() {


		//#region -------------------- FINDIN' OUT SH*T --------------------

		// console.log('');
		// console.log('-------------------- RenderWork --------------------');

		// // console.log('');
		// console.log('thisDeviceWidthArray = ' + thisDeviceWidthArray);
		// console.log(thisDeviceWidthArray);

		// // console.log('');
		// console.log('props.thisDeviceWidthArray = ' + props.thisDeviceWidthArray);
		// console.log(props.thisDeviceWidthArray);

		// // console.log('');
		// console.log('props.thisDeviceWidthArray[0] = ' + props.thisDeviceWidthArray[0]);
		// console.log(props.thisDeviceWidthArray[0]);

		//#endregion -------------------- FINDIN' OUT SH*T --------------------


		// return workData.filter((isSrc) => isSrc.src !== '#').map((workItem, index) =>
		return workData.filter((isSrc) => isSrc.src !== '#').filter((isVisible) => isVisible.visiblity).map((workItem, index) =>

			<div
				// className={`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan} masonryVspan${workItem.masonryVspan}`}
				// className={`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan}`}
				// className={`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan + '_m'}`}

				// className={(props.thisDeviceWidthArray[0] || props.thisDeviceWidthArray[1]) ?
				// 	`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan + 1}` : 
				// 	`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan}`
				// }

				// className={
				// 	(props.thisDeviceWidthArray[0]) ?
				// 		`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan + 2}` : 
				// 	(props.thisDeviceWidthArray[1]) ?
				// 		`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan + 1}` : 
				// 		`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan}`
				// }

				className={
					(props.thisDeviceWidthArray[0]) ?
						`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan_m + '_m'}` : 
					(props.thisDeviceWidthArray[1]) ?
						`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan_l + '_l'}` : 
						// `workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan_m + '_l'}` : 
						`workItem ${workItem.format} ${workItem.album_id} masonryHspan${workItem.masonryHspan}`
				}

				// id={workItem.album_id + 'DivID' + index}
				id={workItem.album_id + '_' + workItem.image_index + '_ID'}
				key={index}
				// onClick={(event) => loadContent(event, workItem)}
				// onClick={workItem.availability ? (event) => loadContent(event, workItem) : undefined}
				// onClick={workItem.link !== '#' ? (event) => loadContent(event, workItem) : undefined}
				onClick={workItem.availability === true ? (event) => loadContent(event, workItem) : null}
				style={{ cursor: workItem.availability && 'pointer' }}
				// style={{ cursor: workItem.link !== '#' && 'pointer' }}
			>

				<img
					src={remoteLoc + workItem.album_id + '/sl/' + workItem.src}
					alt={'workItem: ' + workItem.album_id}
				/>

				{/* <div className='itemInfo'> */}
				<div className={workItem.availability === true ? 'itemInfo_CTA' : 'itemInfo'}>
					<div className='itemDetails'>
						{/* <h3 className='masonry-title'>{employerData[workItem.album_index].employer}</h3>
						<p className='masonry-description'>{workItem.caption}</p> */}
						{/* <h3>{employerData[workItem.album_index].employer}</h3> */}
						{/* <p>{workItem.caption}</p> */}
						{/* <h2>{workItem.caption}</h2> */}
						<h3>{workItem.caption}</h3>
						{/* <p>{workItem.caption} - {workItem.format}</p> */}
					</div>
					{/* <div className='itemCTA'> */}
					<div className={workItem.availability === true ? 'itemCTA' : 'itemCTA_NA'}>
						<p>PLAY ▶</p>
						{/* <p>{workItem.availability === true ? workItem.cta : ''}</p> */}
						{/* <p>{workItem.availability === true ? workItem.cta + ' ▶' : ''}</p> */}
						{/* <p>{workItem.availability === true ? 'PLAY ▶' : ''}</p> */}
					</div>
				</div>

			</div>
		);
	};

	//#endregion -------------------- galleryContainer: RenderWork: workItem[s] --------------------


	//#region -------------------- MARK: galleryContainer: LoaderImage *** TKTK *** --------------------

	// const LoaderImage = () => {
	// // function LoaderImage() {

	// 	// console.log('');
	// 	// console.log('-------------------- MARK: galleryContainer: LoaderImage *** TKTK *** --------------------');


	// 	// const override = css`
	// 	const override = `
	// 		color: #ff0000;
	// 		display: block;
	// 		margin: 0 auto;
	// 		border-color: #00ff00;
	// 	`;


	// 	return (

	// 		<div className='loadingContainer' id='loadingContainerID'>
	// 			<div className='loadingImage sweet-loading' id='loadingImageID'>
	// 				<FadeLoader css={override} size={500} loading={isLoading} />
	// 				<br />
	// 				LOADING...
	// 			</div>
	// 		</div>
	// 	)
	// }

	//#endregion -------------------- galleryContainer: LoaderImage *** TKTK *** --------------------


	//#region -------------------- MARK: galleryContainer: carousel REF: *** TKTK *** --------------------

		// ***** TO COME *****

	//#endregion -------------------- galleryContainer: carousel REF: *** TKTK *** --------------------

	//#endregion ==================== COMPONENTS ====================


	//#region ==================== MARK: FINDIN' OUT MORE SH*T ====================

	// console.log('');
	// console.log('galleryContainer_Ref = ' + galleryContainer_Ref);
	// console.log(galleryContainer_Ref);
	// console.log('galleryContainer_Ref.current = ' + galleryContainer_Ref.current);

	// console.log('');
	// console.log('chipContainer_Ref = ' + chipContainer_Ref);
	// console.log(chipContainer_Ref);
	// console.log('chipContainer_Ref.current = ' + chipContainer_Ref.current);

	//#endregion ==================== FINDIN' OUT MORE SH*T ====================


	return (
		<>

		{/* #region ------------------------- MARK: galleryContainer ------------------------- */}

			{/* <div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: isChipVisible ? "hidden" : "visible" }} ref={galleryContainer_Ref}> */}
			<div className='isotopeContainer galleryContainer' id='galleryContainerID' style={{ visibility: props.isChipVisible ? "hidden" : "visible" }} ref={galleryContainer_Ref}>

				{RenderWork()}
				{/* <RenderWork /> */}

				{/* <LoaderImage /> */}

				{/* {isLoading ? <LoaderImage /> : RenderWork()} */}

				{/* <Suspense fallback={<LoaderImage />}>
					{RenderWork()}
				</Suspense> */}


			{/* #region ------------------------- MARK: BANNERS: REACT ------------------------- */}

				{/* <div className='bannerContainer' id='bannerContainerID'> */}
				<div className='bannerContainer' id='bannerContainerID' ref={bannerContainer_Ref}>
					{bannerShow}
				</div>

			{/* #endregion ------------------------- BANNERS: REACT ------------------------- */}


			{/* #region ------------------------- MARK: BANNERS: IFRAME ------------------------- */}

				<iframe
					// className='banneriFrameClosed'
					// className='banneriFrame'
					className={banneriFrameOpen === true ? 'banneriFrameOpen' : 'banneriFrameClosed'}
					id='banneriFrameID'
					name='banneriFrame'
					title='banneriFrame'
					ref={banneriFrame_Ref}
				/>

			{/* #endregion ------------------------- BANNERS: IFRAME ------------------------- */}


			{/* #region ------------------------- MARK: WEB: IFRAME ------------------------- */}

				{/* <div className='webiFrameContainer webiFrameContainerOpen' id='webiFrameContainerID'> */}
				<div className={webiFrameOpen === true ? 'webiFrameContainer webiFrameContainerOpen' : 'webiFrameContainer webiFrameContainerClosed'} id='webiFrameContainerID' onClick={() => { clearContent(); }} ref={iframeContainer_Ref}>

					<iframe
						className='webiFrame'
						id='webiFrameID'
						name='webiFrame'
						title='webiFrame'
						ref={webiFrame_Ref}
					/>

					<button className='closeModalBtn closeModalBtnShow'> Close </button>

				</div>

			{/* #endregion ------------------------- WEB: IFRAME ------------------------- */}


			{/* #region ------------------------- MARK: VIDEO PLAYER ------------------------- */}

				<div className={videoOpen === true ? 'videoContainer videoContainerOpen' : 'videoContainer videoContainerClosed'} id='videoContainerID' onClick={() => { clearContent(); }} ref={videoContainer_Ref}>

					<ReactPlayer
						className='videoPlayer'
						id='videoPlayerID'
						// width='80%'
						width={videoWidth}
						height={videoHeight}
						url={loadedVideo}
						ref={videoPlayer_Ref}

						config={{
							vimeo: {
								playerOptions: {
									autoplay: true,
									loop: true,
									// color: '00ffff',
									// width: 1800,
									// maxwidth: 2400,
									// width: window.innerWidth * 0.8,

									// playsinline: 1
									// passive: true
								},
							}
						}}
					/>

					<button className={videoOpen ? 'closeModalBtn closeModalBtnShow' : 'closeModalBtn closeModalBtnHide'} onClick={() => { clearContent(); }}> Close </button>

				</div>

			{/* #endregion ------------------------- VIDEO PLAYER ------------------------- */}

			</div>

		{/* #endregion ------------------------- galleryContainer ------------------------- */}


		{/* #region ------------------------- MARK: workNavContainer ------------------------- */}

			<div className='workNavContainer' id='workNavContainerID' ref={workNavContainer_Ref}>

				{/* <div className='workNavContainer' id='workNavContainerID'> */}
					<div className='workNavBar' id='workNavBarID' ref={workNav_Ref}>

						<div className='emplNavBar' id='emplNavBarID' ref={emplNavBar_Ref}>
							{/* <div className='activeEmplDiv' id='activeEmplDivID' ref={activeEmplDiv_Ref}></div> */}
							<RenderEmployers />
						</div>

						<div className='typeNavBar' id='typeNavBarID' ref={typeNavBar_Ref}>
							{/* <div className='activeTypeDiv' id='activeTypeDivID' ref={activeTypeDiv_Ref}></div> */}
							<RenderTypes />
						</div>

						<div className='workNavBtnContainer_m' id='workNavBtnContainer_mID' ref={workNavBtnContainer_m_Ref}>
							{/* <div className='emplNavBtn_m' id='emplNavBtn_mID' onClick={() => { setWorkNavToggleBtn(!workNavToggleBtn); }} ref={emplNavBtn_m_Ref}>View by Employer</div>
							<div className='typeNavBtn_m' id='typeNavBtn_mID' onClick={() => { setWorkNavToggleBtn(!workNavToggleBtn); }} ref={typeNavBtn_m_Ref}>View by Type</div> */}

							{/* <div className='workBackBtn_m' id='workBackBtn_mID'ref={workBackBtn_m_Ref}> &#8592; </div> */}
							<div className='workBackBtn_m' id='workBackBtn_mID'  onClick={goBack} ref={workBackBtn_m_Ref}> &#8592; </div>

							<div className='emplNavBtn_m' id='emplNavBtn_mID' onClick={() => { setEmplNavToggleBtn(!emplNavToggleBtn); }} ref={emplNavBtn_m_Ref}>View by Employer: {emplNavToggleBtn ? 'True' : 'False'}</div>
							<div className='typeNavBtn_m' id='typeNavBtn_mID' onClick={() => { setTypeNavToggleBtn(!typeNavToggleBtn); }} ref={typeNavBtn_m_Ref}>View by Type: {typeNavToggleBtn ? 'True' : 'False'}</div>

							{/* <div className='emplNavBtn_m' id='emplNavBtn_mID' onClick={() => { setNavToggle('emplNav'); }} ref={emplNavBtn_m_Ref}>View by Employer</div>
							<div className='typeNavBtn_m' id='typeNavBtn_mID' onClick={() => { setNavToggle('typeNav'); }} ref={typeNavBtn_m_Ref}>View by Type</div> */}

							{/* <div className='emplNavBtn_m' id='emplNavBtn_mID' onClick={handleNavToggles(this)} ref={emplNavBtn_m_Ref}>View by Employer</div>
							<div className='typeNavBtn_m' id='typeNavBtn_mID' onClick={handleNavToggles(this)} ref={typeNavBtn_m_Ref}>View by Type</div> */}

							{/* <div className='emplNavBtn_m' id='emplNavBtn_mID' onClick={() => navDispatch({ type: 'emplNavBtn_m' })} ref={emplNavBtn_m_Ref}>View by Employer: {navState.emplNavBtn_m ? 'On' : 'Off'}</div>
							<div className='typeNavBtn_m' id='typeNavBtn_mID' onClick={() => navDispatch({ type: 'typeNavBtn_m' })} ref={typeNavBtn_m_Ref}>View by Type: {navState.typeNavBtn_m ? 'On' : 'Off'}</div> */}

							{/* <div className='emplNavBtn_m' id='emplNavBtn_mID' onClick={() => navDispatch({ type: 'emplNavBtn_m' })} ref={emplNavBtn_m_Ref}>View by Employer: {navState.emplNavBtn_m ? 'True' : 'False'}</div>
							<div className='typeNavBtn_m' id='typeNavBtn_mID' onClick={() => navDispatch({ type: 'typeNavBtn_m' })} ref={typeNavBtn_m_Ref}>View by Type: {navState.typeNavBtn_m ? 'True' : 'False'}</div> */}

							{/* <div className='emplNavBtn_m' id='emplNavBtn_mID' onClick={() => navDispatch({ type: 'emplNavBtn_m' })} ref={emplNavBtn_m_Ref}>View by Employer: {navState.emplNavBtn_m ? 'true' : 'false'}</div>
							<div className='typeNavBtn_m' id='typeNavBtn_mID' onClick={() => navDispatch({ type: 'typeNavBtn_m' })} ref={typeNavBtn_m_Ref}>View by Type: {navState.typeNavBtn_m ? 'true' : 'false'}</div> */}

							{/* <div className='emplNavBtn_m' id='emplNavBtn_mID' onClick={() => navDispatch({ type: 'emplNavBtn_m' })} ref={emplNavBtn_m_Ref}>View by Employer: {navState.emplNavBtn_m}</div>
							<div className='typeNavBtn_m' id='typeNavBtn_mID' onClick={() => navDispatch({ type: 'typeNavBtn_m' })} ref={typeNavBtn_m_Ref}>View by Type: {navState.typeNavBtn_m}</div> */}
						</div>

						<div className='toggleNav' id='toggleNavID' onClick={() => { setWorkNavToggleBtn(!workNavToggleBtn); }} ref={toggleNav_Ref}>
						{/* <div className='toggleNav' id='toggleNavID' onClick={() => { setNavToggle('workNav'); }} ref={toggleNav_Ref}> */}
						{/* <div className='toggleNav' id='toggleNavID' onClick={handleNavToggles(this)} ref={toggleNav_Ref}> */}
						{/* <div className='toggleNav' id='toggleNavID' onClick={() => navDispatch({ type: 'toggleNav' })} ref={toggleNav_Ref}> */}
							<div className='toggleBtn' id='toggleBtnID' ref={toggleBtn_Ref}>
								{workNavToggleText}
							</div>
						</div>

					</div>
				{/* </div> */}

			</div>

		{/* #endregion ------------------------- workNavContainer ------------------------- */}


		{/* #region ------------------------- MARK: chipContainer ------------------------- */}

			{/* <div className='chipContainer' id='chipContainerID' style={{ display: isChipVisible ? "flex" : "none" }} ref={chipContainer_Ref}> */}
			<div className='chipContainer' id='chipContainerID' style={{ display: props.isChipVisible ? "flex" : "none" }} ref={chipContainer_Ref}>
			{/* <div className={isLargeScreen ? 'chipContainer chipContainer_d' : 'chipContainer chipContainer_l'} id='chipContainerID' style={{ display: isChipVisible ? "flex" : "none" }} ref={chipContainer_Ref}> */}
				<RenderChips />
			</div>

		{/* #endregion ------------------------- chipContainer ------------------------- */}

		</>
	)
}

// export default Work;