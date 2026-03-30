//#region ==================== MARK: IMPORTS ====================

// import React from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';
// import Moment from 'moment';

// import "../stylesheets/App.css";
import '../stylesheets/Resume.css';

import myData from '../data/MyData';

//#endregion ==================== IMPORTS ====================


//#region ==================== MARK: CONSTANTS ====================

//#region -------------------- MARK: DATA --------------------

const employerData = myData[0];
const skillData = myData[3];

//#endregion -------------------- DATA --------------------

// let resumeLength;

//#region -------------------- MARK: IMAGE URLs --------------------

// const localImgLoc = '/logos_pleaseCompress/';
// const remoteImgLoc = '/logos_pleaseCompress/';
// const remoteImgLoc = '/logos_compressed/';
// const remoteImgLoc = './logos_compressed/';
// const remoteImgLoc = '/shigimcp_2026_reactVite/logos_compressed/';
const remoteImgLoc = 'https://www.shigimcp.com/assets/img/logos_compressed/';
// const remoteImgLoc = 'https://www.shigimcp.com/assets/img/resume/';

//#endregion -------------------- IMAGE URLs --------------------


//#region -------------------- MARK: RESUME URLs --------------------

// const remoteResumeLoc = 'https://www.shigimcp.com/assets/resume/';

// // const resumePDFurl = 'https://www.shigimcp.com/assets/resume/smcpherson_resume_2025.pdf';
// // const resumeDOCXurl = 'https://www.shigimcp.com/assets/resume/smcpherson_resume_2025.docx';
// // const resumeSimpleDOCXurl = 'https://www.shigimcp.com/assets/resume/smcpherson_resume_2025_simplified.docx';
// // const resumeTXTurl = 'https://www.shigimcp.com/assets/resume/smcpherson_resume_2025.txt';
// // const resumeZIPurl = 'https://www.shigimcp.com/assets/resume/smcpherson_resume_2025.zip';

// const resumePDFurl = remoteResumeLoc + 'smcpherson_resume_2025.pdf';
// const resumeDOCXurl = remoteResumeLoc + 'smcpherson_resume_2025.docx';
// const resumeSimpleDOCXurl = remoteResumeLoc + 'smcpherson_resume_2025_simplified.docx';
// const resumeTXTurl = remoteResumeLoc + 'smcpherson_resume_2025.txt';
// const resumeZIPurl = remoteResumeLoc + 'smcpherson_resume_2025.zip';

// const resumePDFfilename = 'smcpherson_resume_2025.pdf';
// const resumeDOCXfilename = 'smcpherson_resume_2025.docx';
// const resumeSimpleDOCXfilename = 'smcpherson_resume_2025_simplified.docx';
// const resumeTXTfilename = 'smcpherson_resume_2025.txt';
// const resumeZIPfilename = 'smcpherson_resume_2025.zip';

//#endregion -------------------- RESUME URLs --------------------

//#endregion ==================== CONSTANTS ====================


//#region ==================== MARK: FUNCTIONS ====================

// #region -------------------- MARK: toggleResume --------------------

// const toggleResume = (isLongform, setIsLongform) => {

// 	// #region -------------------- FINDIN' OUT SH*T --------------------

// 	console.log('');
// 	console.log('-------------------- CONST: toggleResume --------------------');

// 	// console.log('');
// 	console.log('isLongform = ' + isLongform);
// 	// console.log(isLongform);

// 	// #endregion -------------------- FINDIN' OUT SH*T --------------------


// 	setIsLongform(!isLongform);


// 	//#region -------------------- FINDIN' OUT MORE SH*T --------------------

// 	// // console.log('');
// 	// console.log('chipVisibility_POST = ' + chipVisibility);

// 	//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------
// }

// #endregion -------------------- toggleResume --------------------

//#endregion ==================== FUNCTIONS ====================


//#region ==================== MARK: COMPONENTS ====================

//#region -------------------- MARK: SkillChartItem (OLD) --------------------

// function SkillChartItem(props) {
// 	// if (props.skill) {
// 	if (props.skill && props.availability) {
// 	// if (props.skill && props.isInResume) {
// 		return (
// 			<div className='chartItem'>
// 				<div className='chartCell'>
// 					<p>{props.skill}</p>
// 				</div>

// 				<div className='chartCell'>
// 					{props.notes.split('\n').map((thisInfo, key) => {
// 						return <p key={key}>{thisInfo}</p>;
// 					})}
// 				</div>
// 			</div>
// 		);
// 	} else {
// 		return null;
// 	}
// }

//#endregion -------------------- SkillChartItem (OLD) --------------------


//#region -------------------- MARK: SkillChartItem --------------------

function SkillChartItem(props) {

	//#region -------------------- MARK: FINDIN' OUT SH*T --------------------

	// console.log('');
	// console.log('-------------------- COMPONENT: SkillChartItem --------------------');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('skillData = ' + skillData);
	// console.log(skillData);

	//#endregion -------------------- FINDIN' OUT SH*T --------------------

	return (
		<div className='skillCol'>
			{/* <div className='chartCell'> */}
				<h2>{props.skillSet}</h2>
				<div className='skillList' dangerouslySetInnerHTML={{ __html: props.skillHtml }} />
			{/* </div> */}
		</div>
	);
}

//#endregion -------------------- SkillChartItem --------------------


//#region -------------------- MARK: SkillChart --------------------

function SkillChart(props) {

	//#region -------------------- MARK: FINDIN' OUT SH*T --------------------

	// console.log('');
	// console.log('-------------------- COMPONENT: SkillChart --------------------');

	// // // console.log('');
	// // console.log('props = ' + props);
	// // console.log(props);

	// // console.log('');
	// console.log('skillData = ' + skillData);
	// console.log(skillData);

	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	const skillItems = skillData
		// .filter((thisCategory) => thisCategory.category === props.category)
		.map((skill) => (
			<SkillChartItem
				// key={skill.index}
				// category={skill.category}
				// skill={skill.skill}
				// level={skill.level}
				// level_difference={skill.level_difference}
				// exp={skill.exp}
				// notes={skill.notes}
				// availability={skill.availability}
				// isInResume={skill.isInResume}

				key={skill.skill_index}
				category={skill.skill_id}
				skillSet={skill.skillSet}
				skill={skill.skill}
				skillHtml={skill.skill_html}
			/>
		));


		//#region -------------------- MARK: FINDIN' OUT MORE SH*T --------------------

	// console.log('');
	// console.log('-------------------- COMPONENT: SkillChart --------------------');

	// // console.log('');
	// console.log('skillItems = ' + skillItems);
	// console.log(skillItems);

	//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------


	return (
		<>
			<div className='skillGrid'>
				{/* <h2 className='skillCatHed'>{props.category}</h2>
				<div className='skillChart'>{skillItems}</div> */}

				{/* <h2 className='skillCatHed'>{props.skillSet}</h2> */}
				{/* <div className='skillChart'>{skillItems}</div> */}

				{skillItems}
			</div>
		</>
	);
}

//#endregion -------------------- SkillChart --------------------


//#region -------------------- MARK: SkillChartMan --------------------

function SkillChartMan() {
	return (
		<>
			{/* <div className='skillGrid'>
				<SkillChart category='discipline' />
				<SkillChart category='software' />
				<SkillChart category='dev' />
				<SkillChart category='3d' />
				<SkillChart category='info' />
			</div> */}

			<div className='skillGrid'>
				<div className='skillCol'>
					<h1>Creative Technology</h1>
					Interactive Digital Experiences<br />
					Creative Coding<br />
					Rapid Prototyping<br />
					360 Digital Campaigns
				</div>
				<div className='skillCol'>
					<h1>Creative</h1>
					Graphic Design<br />
					Art Direction<br />
					UI/UX<br />
					Responsive Web Design<br />
					Code Animation<br />
					Motion Graphics<br />
					Print & Editorial Layout
				</div>
				<div className='skillCol'>
					<h1>Front-End Development</h1>
					HTML5<br />
					CSS3 / SCSS / SASS<br />
					JavaScript / jQuery<br />
					GSAP<br />
					Working knowledge of:<br />
					- React<br />
					- Unity / WebGL / C#
				</div>
				<div className='skillCol'>
					<h1>Design Ecosystems</h1>
					Adobe Creative Suite, notably:<br />
					- Photoshop<br />
					- Illustrator<br />
					- InDesign<br />
					- After Effects<br />
					Working knowledge of:<br />
					- Figma<br />
					- XD<br />
					- Sketch
				</div>
			</div>
		</>
	);
}

//#endregion -------------------- SkillChartMan --------------------


// #region -------------------- MARK: EmployerItem --------------------

function EmployerItem(props) {

	// let resumeLength = props.isInResume;

	//#region -------------------- MARK: useState DEFs --------------------

	// const [isLongform, setIsLongform] = useState(false);

	//#endregion -------------------- useState DEFs --------------------


	//#region -------------------- MARK: FINDIN' OUT SH*T --------------------

	// console.log('');
	// console.log('-------------------- COMPONENT: EmployerItem --------------------');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// console.log('');
	// console.log('props.dateStart = ' + props.dateStart + '     props.dateEnd = ' + props.dateEnd);

	// console.log('');
	// console.log('props.dateStart = ' + props.dateStart + '     props.dateEnd = ' + props.dateEnd);

	// // console.log('');
	// console.log('isLongform = ' + isLongform);
	// // console.log(isLongform);

	// // console.log('');
	// console.log('props.isLongform = ' + props.isLongform);
	// // console.log(props.isLongform);

	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	//#region -------------------- MARK: EmployerItem(props): dates --------------------

	let thisDateStart = Intl.DateTimeFormat('en-US', {
		// day: '2-digit',
		// month: '2-digit',
		year: 'numeric',
		// year: '2-digit',
		// hour: '2-digit',
		// minute: '2-digit',
		// hour12: false
	}).format(new Date(props.dateStart));

	let thisDateEnd = Intl.DateTimeFormat('en-US', {
		// day: '2-digit',
		// month: '2-digit',
		year: 'numeric',
		// year: '2-digit',
		// hour: '2-digit',
		// minute: '2-digit',
		// hour12: false
	}).format(new Date(props.dateEnd));

	//#endregion -------------------- EmployerItem(props): dates --------------------


	//#region -------------------- MARK: FINDIN' OUT MORE SH*T --------------------

	// console.log('');
	// // console.log('thisStartMonth = ' + thisStartMonth + '     thisStartYear = ' + thisStartYear);
	// // console.log('thisEndMonth = ' + thisEndMonth + '     thisEndYear = ' + thisEndYear);
	// console.log('thisDateStart = ' + thisDateStart + '     thisDateEnd = ' + thisDateEnd);

	// console.log('');
	// console.log('props.otherHtml = ' + props.otherHtml);

	// console.log('');
	// console.log('props.isInResume = ' + props.isInResume);

	//#endregion -------------------- FINDIN' OUT MORE SH*T --------------------


	// if (props.availability) {
	if (props.isInResume)
	// if (resumeLength) {
	// if (props.isLongform ? props.availability : props.isInResume)


	//#region -------------------- MARK: FINDIN' OUT EVEN MORE SH*T --------------------

	// console.log('');
	// console.log('props.infoHtml = ' + props.infoHtml);
	// console.log('props.otherHtml = ' + props.otherHtml);

	//#endregion -------------------- FINDIN' OUT EVEN MORE SH*T --------------------


		return (
			<div className='employerItem'>

				<div>
					{props.employerLogo ? <img className='logo' src={remoteImgLoc + props.employerLogo} alt={'Employer: ' + props.employer} /> : <img className='logo logoMissing' src={remoteImgLoc + 'shigeru_logo_transparent.svg'} alt={'Employer: ' + props.employer} />}
				</div>

				<div className='employerInfoContainer'>

					<div className='employerDates'>
						{/* <div className='employerDates'>{thisDateStart.toString()} - {thisDateEnd.toString()}</div> */}
						{/* {thisDateStart !== thisDateEnd ? <div className='employerDates'>{thisDateStart} - {thisDateEnd}</div> : <div className='employerDates'>{thisDateEnd}</div>} */}
						{thisDateStart !== thisDateEnd ? <div className='employerDates'>{thisDateStart.toString()} - {thisDateEnd.toString()}</div> : <div className='employerDates'>{thisDateEnd.toString()}</div>}
					</div>

					{/* <h1>{props.employer}</h1>
					<h2>{props.title}</h2> */}

					<h1>{props.title}</h1>
					<h2>{props.employer}</h2>

					{/* <ul>
						{props.info.split('\n').map((thisInfo, key) => {
							return <li className='employerInfo' key={key}>{thisInfo}</li>
						})}
					</ul> */}

					{/* <ul>
						{props.info.split('\n').map((thisInfo, key) => {
							return thisInfo.startsWith('  - ') || thisInfo.startsWith('(') ? <li className='employerInfo_' key={key}>{thisInfo}</li> : <li className='employerInfo' key={key}>{thisInfo}</li>
						})}
					</ul> */}

					{/* <ul>
						{props.infoHtml.split('\n').map((thisInfo, key) => {
							return thisInfo.startsWith('  - ') || thisInfo.startsWith('(') ? <li className='employerInfo_' key={key}>{thisInfo}</li> : <li className='employerInfo' key={key}>{thisInfo}</li>
						})}
					</ul> */}

					<div className='employerInfo' dangerouslySetInnerHTML={{ __html: props.infoHtml }} />

					{/* {props.otherType ? <p className='skillHilite' dangerouslySetInnerHTML={ {__html: props.otherHtml} }></p> : ''}
					{props.software ? <p className='skillHilite'><b>Software:</b> {props.software}</p> : ''}
					{props.languages ? <p className='skillHilite'><b>Languages:</b> {props.languages}</p> : ''} */}

					{/* {props.otherType ? <p dangerouslySetInnerHTML={ {__html: props.otherHtml} }></p> : ''}
					{props.software ? <p className='skillHilite' ><strong>Software:</strong> {props.software}</p> : ''}
					{props.languages ? <p className='skillHilite' ><strong>Languages:</strong> {props.languages}</p> : ''} */}

				</div>

				{/* <div className='employerDates'>
					{thisDateStart !== thisDateEnd ? <div className='employerDates'>{thisDateStart} - {thisDateEnd}</div> : <div className='employerDates'>{thisDateEnd}</div>}
				</div> */}

			</div>
		);

	// } else {
	// 	return null;
	// }
}

// #endregion -------------------- MARK: EmployerItem --------------------


//#region -------------------- MARK: EmployerList --------------------

// function EmployerList() {
function EmployerList(props) {
// function EmployerList(isLongform) {

	//#region -------------------- MARK: FINDIN' OUT SH*T --------------------

	// console.log('');
	// console.log('-------------------- COMPONENT: EmployerList --------------------');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('props.isLongform = ' + props.isLongform);
	// // console.log(props.isLongform);

	// // console.log('');
	// console.log('isLongform = ' + isLongform);
	// // console.log(isLongform);

	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	const employerItems = employerData.map((employer) => (

		<EmployerItem
			key={employer.album_id}
			album_id={employer.album_id}
			employer={employer.employer}
			title={employer.title}
			dateStart={employer.date_start}
			dateEnd={employer.date_end}
			info={employer.info}
			infoHtml={employer.info_html}
			otherInfo={employer.info_other}
			otherHtml={employer.other_html}
			otherType={employer.other_type}
			other={employer.other}
			software={employer.software}
			languages={employer.languages}
			employerLogoPath={employer.logopath}
			employerLogo={employer.logo}
			availability={employer.availability}
			isInResume={employer.isInResume}
			isInProjects={employer.isInProjects}
			isLongform={props.isLongform}
		/>

	));

	return (
		<div className='employerList'>{employerItems}</div>
		// <div className='employerList' isLongform={props.isLongform}>{employerItems}</div>
		// <div className='employerList' isLongform={isLongform}>{employerItems}</div>
	);
}

//#endregion -------------------- EmployerList --------------------


// #region -------------------- MARK: ProjectItem --------------------

function ProjectItem(props) {

	// let projectLength = props.isInProjects;

	//#region -------------------- MARK: FINDIN' OUT SH*T --------------------

	// console.log('');
	// console.log('-------------------- COMPONENT: ProjectItem --------------------');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// console.log('');
	// console.log('props.dateStart = ' + props.dateStart + '     props.dateEnd = ' + props.dateEnd);

	// console.log('');
	// console.log('props.dateStart = ' + props.dateStart + '     props.dateEnd = ' + props.dateEnd);

	// // console.log('');
	// console.log('isLongform = ' + isLongform);
	// // console.log(isLongform);

	// // console.log('');
	// console.log('props.isLongform = ' + props.isLongform);
	// // console.log(props.isLongform);

	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	//#region -------------------- MARK: ProjectItem(props): dates --------------------

	// let thisDateStart = Intl.DateTimeFormat('en-US', {
	// 	// day: '2-digit',
	// 	// month: '2-digit',
	// 	year: 'numeric',
	// 	// year: '2-digit',
	// 	// hour: '2-digit',
	// 	// minute: '2-digit',
	// 	// hour12: false
	// }).format(new Date(props.dateStart));

	// let thisDateEnd = Intl.DateTimeFormat('en-US', {
	// 	// day: '2-digit',
	// 	// month: '2-digit',
	// 	year: 'numeric',
	// 	// year: '2-digit',
	// 	// hour: '2-digit',
	// 	// minute: '2-digit',
	// 	// hour12: false
	// }).format(new Date(props.dateEnd));

	//#endregion -------------------- ProjectItem(props): dates --------------------


	if (props.isInProjects)

		return (
			<div className='employerItem'>

				<div>
					{props.employerLogo ? <img className='logo' src={remoteImgLoc + props.employerLogo} alt={'Employer: ' + props.employer} /> : <img className='logo logoMissing' src={remoteImgLoc + 'shigeru_logo_transparent.svg'} alt={'Employer: ' + props.employer} />}
				</div>

				<div className='employerInfoContainer'>

					{/* <div className='employerDates'>
						{thisDateStart !== thisDateEnd ? <div className='employerDates'>{thisDateStart.toString()} - {thisDateEnd.toString()}</div> : <div className='employerDates'>{thisDateEnd.toString()}</div>}
					</div> */}

					<h1>{props.employer}</h1>
					<h2>{props.title}</h2>

					{/* <ul>
						{props.info.split('\n').map((thisInfo, key) => {
							return thisInfo.startsWith('  - ') || thisInfo.startsWith('(') ? <li className='employerInfo_' key={key}>{thisInfo}</li> : <li className='employerInfo' key={key}>{thisInfo}</li>
						})}
					</ul> */}

					<div className='employerInfo' dangerouslySetInnerHTML={{ __html: props.infoHtml }} />
				</div>

			</div>
		);

	// } else {
	// 	return null;
	// }
}

// #endregion -------------------- ProjectItem --------------------


//#region -------------------- MARK: ProjectList --------------------

function ProjectList(props) {

	//#region -------------------- MARK: FINDIN' OUT SH*T --------------------

	// console.log('');
	// console.log('-------------------- COMPONENT: ProjectList --------------------');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('props.isLongform = ' + props.isLongform);
	// // console.log(props.isLongform);

	// // console.log('');
	// console.log('isLongform = ' + isLongform);
	// // console.log(isLongform);

	//#endregion -------------------- FINDIN' OUT SH*T --------------------


	const projectItems = employerData.map((employer) => (

		<ProjectItem
			key={employer.album_id}
			album_id={employer.album_id}
			employer={employer.employer}
			title={employer.title}
			dateStart={employer.date_start}
			dateEnd={employer.date_end}
			info={employer.info}
			infoHtml={employer.info_html}
			otherInfo={employer.info_other}
			otherHtml={employer.other_html}
			otherType={employer.other_type}
			other={employer.other}
			software={employer.software}
			languages={employer.languages}
			employerLogoPath={employer.logopath}
			employerLogo={employer.logo}
			availability={employer.availability}
			isInResume={employer.isInResume}
			isInProjects={employer.isInProjects}
			isLongform={props.isLongform}
		/>

	));

	return (
		<div className='employerList'>{projectItems}</div>
	);
}

//#endregion -------------------- EmployerList --------------------

//#endregion ==================== COMPONENTS ====================



// export const Resume = (props) => {
// export default function Resume(props) {
export default function Resume() {

	//#region ==================== MARK: FINDIN' OUT SH*T ====================

	// console.log('');
	// console.log('==================== COMPONENT: Resume.jsx ====================');

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	//#endregion ==================== FINDIN' OUT SH*T ====================


	// localStorage.setItem('navLoc', locID);


	//#region ==================== MARK: useRef DEFs ====================

	// const dialogModal_Ref = useRef(null);
	// const dialogHotspot_Ref = useRef(null);
	// const dialogBox_Ref = useRef(null);

	//#endregion ==================== useRef DEFs ====================


	//#region ==================== MARK: useState DEFs ====================

	// const [isLongform, setIsLongform] = useState(false);

	//#endregion ==================== useState DEFs ====================


	//#region ==================== MARK: FINDIN' MORE OUT SH*T ====================

	// // console.log('');
	// console.log('props = ' + props);
	// console.log(props);

	// // console.log('');
	// console.log('isLongform = ' + isLongform);
	// // console.log(isLongform);

	// // console.log('');
	// console.log('setIsLongform = ' + setIsLongform);
	// // console.log(setIsLongform);

	//#endregion ==================== FINDIN' MORE OUT SH*T ====================

	return (
		<>
			{/* <div className='bodyContainer' id='bodyContainerID'> */}
			{/* <div className='employerContainer' id='employerContainerID'> */}
			<div className='resumeContainer' id='resumeContainerID'>

				{/* <div className='resumeToggle'>
					<button onClick={() => setIsLongform(!isLongform)}>{isLongform ? '<< view short format' : '<< view long format'}</button>
				</div> */}

			{/* #region -------------------- MARK: introContainer -------------------- */}

				{/* <div className='resumeSect introContainer' id='introContainerID'>
					<p className='resumeIntro'>
						Hi!<br />
						I'm a Creative Technologist with 20+ years of experience bridging design, motion and front-end development to create interactive digital experiences for global brands including L’Oréal (Kiehl’s), Elizabeth Arden, Armani Exchange and Hearst Communications.
					</p>
				</div> */}

			{/* #endregion -------------------- introContainer -------------------- */}


			{/* #region -------------------- MARK: skillContainer -------------------- */}

				<div className='resumeSect skillContainer' id='skillContainerID'>
					<h1 className='sectHed'>Core Skills</h1>
					{/* <SkillChartMan /> */}
					<SkillChart />
				</div>

			{/* #endregion -------------------- skillContainer -------------------- */}


			{/* #region -------------------- MARK: employerContainer -------------------- */}

				<div className='resumeSect employerContainer' id='employerContainerID'>
					<h1 className='sectHed'>Professional Experience</h1>
					<EmployerList />
					{/* <EmployerList isLongform={isLongform} /> */}
				</div>

			{/* #endregion -------------------- employerContainer -------------------- */}


			{/* #region -------------------- MARK: projectContainer -------------------- */}

				<div className='resumeSect employerContainer' id='employerContainerID'>
					<h1 className='sectHed'>Independent Projects & Technical Exploration</h1>
					<ProjectList />
				</div>

			{/* #endregion -------------------- projectContainer -------------------- */}


			{/* #region -------------------- MARK: techContainer -------------------- */}

				{/* <div className='resumeSect' id='techContainerID'>
					<h1 className='sectHed'>Technical Exploration</h1>
					<ul className='sectList'>
						<li>Interactive animation experiments using GSAP and JavaScript</li>
						<li>Browser-based 3D prototyping using Unity and WebGL</li>
						<li>Custom interaction scripting using Velo by Wix within the Wix platform</li>
						<li>Ongoing exploration of creative coding workflows combining motion, UI/UX and front-end development</li>
					</ul>
				</div> */}

			{/* #endregion -------------------- techContainer -------------------- */}


			{/* #region -------------------- MARK: earlyContainer -------------------- */}

				{/* <div className='resumeSect' id='earlyContainerID'>
					<h1 className='sectHed'>Earlier Experience Highlights</h1>
					<ul className='sectList'>
						<li>Art Director, Designer and Front-End Developer roles with agencies and media companies including:</li>
						<ul className='hyphenated'>
							<li>Darwin Digital (a Saatchi & Saatchi Vision Company)</li>
							<li>Luminant Worldwide</li>
							<li>Style.com (Condé Nast)</li>
							<li>Harper's Bazaar</li>
						</ul>
						<li>Worked with major brands including GM, Intel, Wendy's, Procter & Gamble and A&E Networks</li>
					</ul>
				</div> */}

				<div className='resumeSect earlyContainer' id='earlyContainerID'>
					<h1 className='sectHed'>Earlier Experience Highlights</h1>
					<div className='earlyList'>
						<h1>DDB Worldwide (Studio 8) &sdot; <p className='earlyTitle'>Multimedia Specialist</p></h1>
						<p className='earlyDescr'>Website development and promotional campaigns for diverse industry clients</p>

						<h1>Heeb Magazine &sdot; <p className='earlyTitle'>Designer / Design Director</p></h1>
						<p className='earlyDescr'>Art direction, editorial layout, and pre-press for multiple issues</p>

						<h1>Harper’s Bazaar &sdot; <p className='earlyTitle'>Designer</p></h1>
						<p className='earlyDescr'>Page layout and design, logo & type treatment and (p)retouching for editorial content, photo features, reviews</p>

						<h1>Style.com (Condé Nast) &sdot; <p className='earlyTitle'>Freelance Production Designer</p></h1>
						<p className='earlyDescr'>High-end photo retouching and e-commerce asset production</p>

						<h1>Darwin Digital (a Saatchi & Saatchi Vision Company) &sdot; <p className='earlyTitle'>Designer</p></h1>
						<p className='earlyDescr'>Designed interactive assets for high-end clients including Procter & Gamble and Hewlett-Packard</p>
					</div>
				</div>

			{/* #endregion -------------------- earlyContainer -------------------- */}


			{/* #region -------------------- MARK: eduContainer -------------------- */}

				<div className='resumeSect eduContainer' id='eduContainerID'>
					<h1 className='sectHed'>Education</h1>

					<div className='eduInfoContainer'>
						<div>
							<img className='logo' id='eduLogoID' src={remoteImgLoc + 'logo_cu_seas.svg'} alt={'Education: Columbia University, School of Engineering and Applied Science'} />
							{/* <img className='logo' id='eduLogoID' src={localImgLoc + 'logo_cu_seas.svg'} alt={'Education: Columbia University, School of Engineering and Applied Science'} /> */}
						</div>

						<div>
							<h1>Columbia University</h1>
							<h2>School of Engineering and Applied Science</h2>
							{/* <p className='eduDate'><b>BS Mechanical Engineering</b> - May 1990</p> */}
							<p>BS Mechanical Engineering</p>
						</div>
					</div>
				</div>

			{/* #endregion -------------------- eduContainer -------------------- */}


			{/* #region -------------------- MARK: skillContainer OLD -------------------- */}

				{/* <div className='skillContainer'>
					<h1 className='sectHed'>Skills</h1>
					<SkillSet />
				</div> */}

			{/* #endregion -------------------- skillContainer OLD -------------------- */}

			</div>

		{/* #region ==================== MARK: MODAL WINDOW ==================== */}

			{/* <div className={props.resumeModalOpen === true ? 'dialogModal dialogModalOpen' : 'dialogModal dialogModalClosed'} id='dialogModalID' ref={dialogModal_Ref}>

				<div className='dialogHotspot' id='dialogHotspotID' onClick={() => {props.setResumeModalOpen(!props.resumeModalOpen)}} ref={dialogHotspot_Ref}></div>

				<div className='dialogBox' id='dialogBoxID' ref={dialogBox_Ref}>

					<button className='dialogCloseBTN' onClick={() => {props.setResumeModalOpen(!props.resumeModalOpen)}}>X</button>

					<div className='dialogHed' id='dialogHedID'>
						<p>Choose your format...</p>
					</div>

					<div className='dialogMenu' id='dialogMenuID'>
						<a href={resumePDFurl} download target='_blank' rel='noreferrer'>*.pdf</a>
						<a href={resumeDOCXurl} download target='_blank' rel='noreferrer'>*.docx</a>
						<a href={resumeSimpleDOCXurl} download target='_blank' rel='noreferrer'>*.docx</a>
						<a href={resumeTXTurl} download target='_blank' rel='noreferrer'>*.txt</a>

						<a href={resumePDFurl} download target='_blank' rel='noreferrer'>{resumePDFfilename}</a>
						<a href={resumeDOCXurl} download target='_blank' rel='noreferrer'>{resumeDOCXfilename}</a>
						<a href={resumeSimpleDOCXurl} download target='_blank' rel='noreferrer'>{resumeSimpleDOCXfilename}</a>
						<a href={resumeTXTurl} download target='_blank' rel='noreferrer'>{resumeTXTfilename}</a>
					</div>

					<div className='dialogHed dialogHed02' id='dialogHed02ID'>
						<p>or download ALL...</p>
					</div>

					<div className='dialogMenu dialogMenu02' id='dialogMenu02ID'>
						<a href={resumeZIPurl} download target='_blank' rel='noreferrer'>{resumeZIPfilename}</a>
					</div>

				</div>

			</div> */}

		{/* #endregion ==================== MODAL WINDOW ==================== */}
		</>
	);
}
