//#region ==================== MARK: IMPORTS ====================

// import React from 'react';
// import { useRef } from 'react';
// import { Suspense, useRef } from 'react';

import { Canvas } from '@react-three/fiber';
// import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
// import { PerspectiveCamera, Svg } from '@react-three/drei';
// import { AmbientLight, Mesh, PointLight } from 'three';

// import '../stylesheets/App.css';
import '../stylesheets/Home.css';

// import Cubes from '../components/threeFiber/Cubes.jsx';
// import { PerspectiveCamera } from 'three';

import Logo from '../components/threeFiber/Logo';

//#endregion ==================== IMPORTS ====================


// export default function Home() {
export default function Home(props) {
// export default function Home({islargescreen}) {

	//#region ==================== MARK: FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Home.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('isLargeScreen = ' + isLargeScreen);
	// console.log(isLargeScreen);

	// // console.log('');
	// console.log('typeof isLargeScreen = ' + typeof isLargeScreen);
	// console.log(typeof isLargeScreen);

	// // console.log('');
	// console.log('props.thisDeviceWidthArray = ' + props.thisDeviceWidthArray);
	// console.log(props.thisDeviceWidthArray);

	// // console.log('');
	// console.log('typeof props.thisDeviceWidthArray = ' + typeof props.thisDeviceWidthArray);
	// console.log(typeof props.thisDeviceWidthArray);

	// // console.log('');
	// console.log('logoSVG = ' + logoSVG);
	// console.log(logoSVG);

	//#endregion ==================== FINDIN' OUT SH*T ====================


	//#region ==================== MARK: CONSTs/FUNCTIONs ====================

	// const thisDeviceWidthArray = [
	// 	// window.matchMedia('(max-width: 374px)').matches, 
	// 	// window.matchMedia('(min-width: 375px)').matches && window.matchMedia('(max-width: 767px)').matches, 
	// 	// window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1023px)').matches, 
	// 	// window.matchMedia('(min-width: 1024px)').matches && window.matchMedia('(max-width: 1439px)').matches, 
	// 	// window.matchMedia('(min-width: 1440px)').matches

	// 	window.matchMedia('(max-width: 375px)').matches || window.matchMedia('(max-width: 480px)').matches, 
	// 	window.matchMedia('(max-width: 768px)').matches, 
	// 	window.matchMedia('(min-width: 1024px)').matches
	// ];

	const pCamPos = [
		// [-0.5, 3, 20], 
		// [0.25, 1.75, 11.25], 
		// [0, 0.75, 10]

		[-0.5, 3, 20], 
		[0.25, 1.75, 11.25], 
		[0, 0.75, 7.5]
	];

	//#endregion ==================== CONSTs/FUNCTIONs ====================


	return (
		<>

		{/* #region -------------------- MARK: 3RF LOGO - REF: https://www.youtube.com/watch?v=DPl34H2ISsk -------------------- */}

			<Canvas className='homeCanvas'>
			{/* <Canvas className = 'homeCanvas' camera = {{ position: [0, 0, 5] }}> */}

			{/* #region - - - - - - - - - - - MARK: PerspectiveCamera => mobile, laptop, desktop - SEE: Header.jsx - - - - - - - - - - - */}

				{/* <PerspectiveCamera makeDefault fov={30} position={[-0.5, 3, 20]} /> */}
				{/* <PerspectiveCamera makeDefault fov={30} position={[0.25, 1.75, 11.25]} /> */}
				{/* <PerspectiveCamera makeDefault fov={22.5} position={[0, 0.75, 10]} /> */}

				{/* <PerspectiveCamera makeDefault fov={22.5} position={[-0.5, 3, 25]} /> */}
				{/* <PerspectiveCamera makeDefault fov={22.5} position={[0.25, 1.75, 15]} /> */}
				{/* <PerspectiveCamera makeDefault fov={22.5} position={[0, 0.75, 10]} /> */}

				{/* <PerspectiveCamera makeDefault fov={30} position={pCamPos[0]} /> */}
				{/* <PerspectiveCamera makeDefault fov={30} position={pCamPos[1]} /> */}
				{/* <PerspectiveCamera makeDefault fov={22.5} position={pCamPos[2]} /> */}

				{/* <PerspectiveCamera makeDefault fov={30} position={(window.matchMedia('(min-width: 375px)').matches && window.matchMedia('(max-width: 767px)').matches) ? pCamPos[0] : pCamPos[1]} /> */}
				{/* <PerspectiveCamera makeDefault fov={30} position={(thisDeviceWidthArray[0]) ? pCamPos[0] : (thisDeviceWidthArray[1] || thisDeviceWidthArray[2]) ? pCamPos[1] : pCamPos[2]} /> */}
				{/* <PerspectiveCamera makeDefault fov={30} position={(thisDeviceWidthArray[0]) ? pCamPos[0] : (thisDeviceWidthArray[1]) ? pCamPos[1] : pCamPos[2]} /> */}
				<PerspectiveCamera makeDefault fov={30} position={(props.thisDeviceWidthArray[0]) ? pCamPos[0] : (props.thisDeviceWidthArray[1]) ? pCamPos[1] : pCamPos[2]} />

			{/* #endregion - - - - - - - - - - - PerspectiveCamera => mobile, laptop, desktop - SEE: Header.jsx - - - - - - - - - - - */}

				<ambientLight />
				<pointLight position={[5, 5, 5]} />
				{/* <directionalLight position={[5, 5, 5]} /> */}

				{/* <Suspense>
					<Svg src='../assets/images/0elements/shigeru_logo.svg' position={[0, 0, 0]} scale={0.05} />
				</Suspense> */}

				<Logo />

			</Canvas>

		{/* #endregion -------------------- 3RF LOGO - REF: https://www.youtube.com/watch?v=DPl34H2ISsk -------------------- */}

		{/* #region -------------------- MARK: homeHed -------------------- */}

			<div className='homeHed'>
			{/* <div className={islargescreen ? 'homeHed homeHed_d' : 'homeHed homeHed_l'}> */}
			{/* <div className={props.isLargeScreen ? 'homeHed homeHed_d' : 'homeHed homeHed_l'}> */}

				{/* <h1>Shigeru McPherson</h1> */}
				<h1>Just call me Shigi...</h1>
				<h2>(rhymes with "Ziggy")</h2>
				{/* <h2>They call me Shigi...</h2> */}

				{/* <h2>digital designer &bull; art director</h2> */}
				{/* <h2>digital designer &middot; art director</h2> */}
				{/* <h2>digital designer &#183; art director</h2> */}
				{/* <h2>Creative Technology | Interactive Design | Front-End Development</h2> */}
				{/* <h2>creative technology | interactive design | front-end development</h2> */}
				{/* <h2>creative technology &middot; interactive design &middot; front-end development</h2> */}
				{/* <h2>
					&middot; creative technology <br />
					&middot; interactive design <br />
					&middot; front-end development
				</h2> */}

				{/* <h3>(and not afraid of writing code...!)</h3> */}

				{/* <p className='homeDescr'>
					Hi!
					<br />
					I'm a Creative Technologist and Developer with 20+ years of experience building interactive digital experiences, campaign websites, and motion-driven content for global brands including L’Oréal (Kiehl’s), Elizabeth Arden, Armani Exchange, and Hearst Communications.
					<br /><br />
					I combine strong visual design with front-end development to prototype and deliver engaging digital experiences, while continuously exploring creative coding workflows that integrate motion, UI/UX, and front-end development.
				</p> */}

				{/* <div className='note'>
					<p>
						<b>NOTE:</b> This website is my sandbox.
						<br />
						This is my sandbox.
						<br />
						This will <i>always</i> be a work in progress.
						<br />
					</p>
					<p>
						(You can tell, because... <i>WHY?!?! &#128514; ===&#62;)</i>
					</p>
					<p>
						<br />
						<br /><br />
						<i>Please, be forgiving... LOL!</i>
						Please, be kind... <i>LOL!</i>
						Please, be kind... &#128540;
					</p>
				</div> */}

				<div className='homeDescr'>
					<p>
						Hi!
					</p>
					<p>
						{/* <br /> */}
						{/* <br /><br /> */}
						I'm a Creative Technologist and Developer with 20+ years of experience building interactive digital experiences, campaign websites, and motion-driven content for global brands including L’Oréal (Kiehl’s), Elizabeth Arden, Armani Exchange, and Hearst Communications.
					</p>
					<p>
						{/* <br /><br /> */}
						I combine strong visual design with front-end development to prototype and deliver engaging digital experiences, while continuously exploring creative coding workflows that integrate motion, UI/UX, and front-end development.
						{/* <br /><br /> */}
					</p>
					<p>
						Love,<br />
						&nbsp;&nbsp;&nbsp;ChatGPT
					</p>

					<div className='note'>
						<p>
							<b>NOTE:</b> This website is my sandbox.
							<br />
							This will <i>*always*</i> be a work in progress.
						</p>
						<p>
							(You can tell, because... <i>WHY?!?! &#128514; ===&#62;</i>
							{/* (You can tell because... <i>WHY?!?! &#128514; ===&#62;)</i> */}
							<br />
							{/* That said... this site is best viewed on a laptop or desktop.) */}
							That said, this site is best viewed on a laptop or desktop.)
						</p>
					</div>
				</div>

			</div>

		{/* #endregion -------------------- homeHed -------------------- */}

		</>
	)
}


// export default Home;