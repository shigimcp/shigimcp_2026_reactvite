//#region ==================== MARK: IMPORTS ====================

// import React from 'react';
// import { useRef } from 'react';
// import { Suspense, useRef } from 'react';

import { Canvas } from '@react-three/fiber';
// import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
// import { PerspectiveCamera, Svg } from '@react-three/drei';
// import { AmbientLight, Mesh, PointLight } from 'three';

// import '../stylesheets/BodyContainer.scss';
// import '../stylesheets/App.css';
import '../stylesheets/Home.css';

// import Cubes from '../components/threeFiber/Cubes.jsx';
// import { PerspectiveCamera } from 'three';

import Logo from '../components/threeFiber/Logo';

//#endregion ==================== IMPORTS ====================



//#region ==================== MARK: PLACEHOLDER ====================

// function Body() {
// 	return (
// 		<div className='bodyContainer'>
// 			{/* <h2>{title}</h2> */}
// 			{/* {children} */}

// 			<img src={logo} className='logoK' id='logoKID' alt='logo' />
// 			<img src={logoRev} className='logoW' id='logoWID' alt='logoRev' />
// 		</div>
// 	);
// }

// export default Body;

// const Home = () => <h1>Home Page</h1>;

// export default Home;

// const navLoc = Home;

//#endregion ==================== PLACEHOLDER ====================


//#region ==================== MARK: CUBE (testing 1, 2, 3...) ====================

// function Cube() {
// // function Cube(props) {

// 	// const mesh_Ref = useRef<Mesh>(null);
// 	const mesh_Ref = useRef();

// 	useFrame(() => {
// 		if (!mesh_Ref.current) {
// 			return;
// 		}

// 		mesh_Ref.current.rotation.x += 0.01;
// 		mesh_Ref.current.rotation.y += 0.01;
// 	});

// 	return (
// 		<mesh ref={mesh_Ref}>
// 		{/* <mesh {...props} ref={mesh_Ref}> */}

// 			{/* <boxGeometry />
// 			<meshStandardMaterial /> */}

// 			<boxGeometry args={[2, 2, 2]} />
// 			<meshStandardMaterial color={'blue'} />

// 		</mesh>
// 	);
// }

//#endregion ==================== CUBE (testing 1, 2, 3...) ====================



// export default function Home() {
export default function Home(props) {
// export default function Home({isLargeScreen}) {
// export default function Home({islargescreen}) {

	//#region ==================== FINDIN' OUT SH*T ====================

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
	// console.log('islargescreen = ' + islargescreen);
	// console.log(islargescreen);

	// // console.log('');
	// console.log('typeof islargescreen = ' + typeof islargescreen);
	// console.log(typeof islargescreen);

	// // console.log('');
	// console.log('props.isLargeScreen = ' + props.isLargeScreen);
	// console.log(props.isLargeScreen);

	// // console.log('');
	// console.log('typeof props.isLargeScreen = ' + typeof props.isLargeScreen);
	// console.log(typeof props.isLargeScreen);

	// // console.log('');
	// console.log('logoSVG = ' + logoSVG);
	// console.log(logoSVG);

	//#endregion ==================== FINDIN' OUT SH*T ====================


	return (
		<>
			{/* <Cubes /> */}

			{/* <div> */}

			{/* #region -------------------- MARK: 3RF LOGO - REF: https://www.youtube.com/watch?v=DPl34H2ISsk -------------------- */}

				<Canvas className='homeCanvas'>
				{/* <Canvas className = 'homeCanvas' camera = {{ position: [0, 0, 5] }}> */}

					{/* <PerspectiveCamera makeDefault fov={17.5} position={[0, 0, 15]} /> */}
					{/* <PerspectiveCamera makeDefault position={[0, 0.5, 6.25]} /> */}
					{/* <PerspectiveCamera makeDefault fov={25} position={[0, 0.5, 10]} /> */}
					<PerspectiveCamera makeDefault fov={22.5} position={[0, 0.75, 10]} />

					{/* <mesh>
						<boxGeometry args={[2, 2, 2]} />
						<meshStandardMaterial color={'orange'} />
					</mesh> */}

					<ambientLight />
					<pointLight position={[5, 5, 5]} />
					{/* <directionalLight position={[5, 5, 5]} /> */}

					{/* <Cube /> */}

					{/* <Suspense>
						<Svg src='../assets/images/0elements/shigeru_logo.svg' position={[0, 0, 0]} scale={0.05} />
					</Suspense> */}

					<Logo />

				</Canvas>

			{/* #endregion -------------------- 3RF LOGO - REF: https://www.youtube.com/watch?v=DPl34H2ISsk -------------------- */}

			{/* #region -------------------- MARK: homeHed -------------------- */}

				{/* <div className='homeHed'> */}
				{/* <div className='homeHed homeHed_d'> */}
				{/* <div className='homeHed homeHed_l'> */}
				{/* <div className='homeHed homeHed_m'> */}
				{/* <div className={isLargeScreen ? 'homeHed homeHed_d' : 'homeHed homeHed_l'}> */}
				{/* <div className={islargescreen ? 'homeHed homeHed_d' : 'homeHed homeHed_l'}> */}
				<div className={props.isLargeScreen ? 'homeHed homeHed_d' : 'homeHed homeHed_l'}>
					<h1>Shigeru McPherson</h1>

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

					<p className='homeDescr'>
						Hi!
						<br />
						I'm a Creative Technologist and Developer with 20+ years of experience building interactive digital experiences, campaign websites, and motion-driven content for global brands including L’Oréal (Kiehl’s), Elizabeth Arden, Armani Exchange, and Hearst Communications.
						<br /><br />
						I combine strong visual design with front-end development to prototype and deliver engaging digital experiences, while continuously exploring creative coding workflows that integrate motion, UI/UX, and front-end development.
					</p>

					<div className='note'>
						<p>
							<b>NOTE:</b> This website is my sandbox.
							{/* <br /> */}
							{/* This is my sandbox. */}
							<br />
							This will <i>always</i> be a work in progress.
							<br />
						</p>
						<p>
							(You can tell, because... <i>WHY?!?! &#128514; ===&#62;)</i>
						</p>
						{/* <p>
							<br />
							<br /><br />
							<i>Please, be forgiving... LOL!</i>
							Please, be kind... <i>LOL!</i>
							Please, be kind... &#128540;
						</p> */}
					</div>
				</div>

			{/* #endregion -------------------- homeHed -------------------- */}

			{/* </div> */}
		</>
	)
}


// export default Home;