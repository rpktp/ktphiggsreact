import React, { Component } from 'react';


const Icons = {
	shoppingCart: {
		title: "Shopping Cart",
		desc: "View Your Shopping Cart",
		path: "M13,9 L13,6 L16,6 L16,4 L13,4 L13,1 L11,1 L11,4 L8,4 L8,6 L11,6 L11,9 L13,9 Z M7,18 C5.9,18 5.01,18.9 5.01,20 C5.01,21.1 5.9,22 7,22 C8.1,22 9,21.1 9,20 C9,18.9 8.1,18 7,18 L7,18 Z M17,18 C15.9,18 15.01,18.9 15.01,20 C15.01,21.1 15.9,22 17,22 C18.1,22 19,21.1 19,20 C19,18.9 18.1,18 17,18 L17,18 Z M7.2,14.63 L8.1,13 L15.55,13 C16.3,13 16.96,12.59 17.3,11.97 L21.16,4.96 L19.42,4 L18.31,6 L15.55,11 L8.53,11 L8.4,10.73 L6.16,6 L5.21,4 L4.27,2 L1,2 L1,4 L3,4 L6.6,11.59 L5.25,14.04 C5.09,14.32 5,14.65 5,15 C5,16.1 5.9,17 7,17 L19,17 L19,15 L7.42,15 C7.29,15 7.17,14.89 7.17,14.75 L7.2,14.63 Z",
	},
	accountCircle: {
		title: "Account",
		desc: "View your Account",
		path: "M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M12,5 C13.66,5 15,6.34 15,8 C15,9.66 13.66,11 12,11 C10.34,11 9,9.66 9,8 C9,6.34 10.34,5 12,5 L12,5 Z M12,19.2 C9.5,19.2 7.29,17.92 6,15.98 C6.03,13.99 10,12.9 12,12.9 C13.99,12.9 17.97,13.99 18,15.98 C16.71,17.92 14.5,19.2 12,19.2 L12,19.2 Z"
	},
	addToCalendar: {
		title: "Add To Your Calendar",
		desc: "Add To your Calendar",
		path: "M16,12 L16,14 L13,14 L13,17 L11,17 L11,14 L8,14 L8,12 L11,12 L11,9 L13,9 L13,12 L16,12 L16,12 Z M19,3 L18,3 L18,1 L16,1 L16,3 L8,3 L8,1 L6,1 L6,3 L5,3 C3.89,3 3.01,3.9 3.01,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z M19,19 L5,19 L5,8 L19,8 L19,19 L19,19 Z"
	},
	addedToCalendar: {
		title: "Added to your Calendar",
		desc: "added to your calendar",
		path: "M16.53,11.06 L15.47,10 L10.59,14.88 L8.47,12.76 L7.41,13.82 L10.59,17 L16.53,11.06 L16.53,11.06 Z M19,3 L18,3 L18,1 L16,1 L16,3 L8,3 L8,1 L6,1 L6,3 L5,3 C3.89,3 3.01,3.9 3.01,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z M19,19 L5,19 L5,8 L19,8 L19,19 L19,19 Z"
	},
	addToQueue: {
		title: "Add to your Queue",
		desc: "Add to your Queue",
		path: "M21,3 L3,3 C1.89,3 1,3.89 1,5 L1,17 C1,18.1 1.89,19 3,19 L8,19 L8,21 L16,21 L16,19 L21,19 C22.1,19 22.99,18.1 22.99,17 L23,5 C23,3.89 22.1,3 21,3 L21,3 Z M21,17 L3,17 L3,5 L21,5 L21,17 L21,17 Z M16,10 L16,12 L13,12 L13,15 L11,15 L11,12 L8,12 L8,10 L11,10 L11,7 L13,7 L13,10 L16,10 L16,10 Z"
	},
	alarm: {
		title: "Alarm",
		desc: "Alarm",
		path: "M22,5.72 L17.4,1.86 L16.11,3.39 L20.71,7.25 L22,5.72 L22,5.72 Z M7.88,3.39 L6.6,1.86 L2,5.71 L3.29,7.24 L7.88,3.39 L7.88,3.39 Z M12.5,8 L11,8 L11,14 L15.75,16.85 L16.5,15.62 L12.5,13.25 L12.5,8 L12.5,8 Z M12,4 C7.03,4 3,8.03 3,13 C3,17.97 7.02,22 12,22 C16.97,22 21,17.97 21,13 C21,8.03 16.97,4 12,4 L12,4 Z M12,20 C8.13,20 5,16.87 5,13 C5,9.13 8.13,6 12,6 C15.87,6 19,9.13 19,13 C19,16.87 15.87,20 12,20 L12,20 Z"
	},
	alarmOff: {
		title: "Alarm Off",
		desc: "Alarm Off",
		path: "M12,6 C15.87,6 19,9.13 19,13 C19,13.84 18.84,14.65 18.57,15.4 L20.09,16.92 C20.67,15.73 21,14.41 21,13 C21,8.03 16.97,4 12,4 C10.59,4 9.27,4.33 8.08,4.91 L9.6,6.43 C10.35,6.16 11.16,6 12,6 L12,6 Z M22,5.72 L17.4,1.86 L16.11,3.39 L20.71,7.25 L22,5.72 L22,5.72 Z M2.92,2.29 L1.65,3.57 L2.98,4.9 L1.87,5.83 L3.29,7.25 L4.4,6.31 L5.2,7.11 C3.83,8.69 3,10.75 3,13 C3,17.97 7.02,22 12,22 C14.25,22 16.31,21.17 17.89,19.8 L20.09,22 L21.36,20.73 L3.89,3.27 L2.92,2.29 L2.92,2.29 Z M16.47,18.39 C15.26,19.39 13.7,20 12,20 C8.13,20 5,16.87 5,13 C5,11.3 5.61,9.74 6.61,8.53 L16.47,18.39 L16.47,18.39 Z M8.02,3.28 L6.6,1.86 L5.74,2.57 L7.16,3.99 L8.02,3.28 L8.02,3.28 Z"
	},
	alarmOn: {
		title: "Alarm On",
		desc: "Alarm On",
		path: "M22,5.72 L17.4,1.86 L16.11,3.39 L20.71,7.25 L22,5.72 L22,5.72 Z M7.88,3.39 L6.6,1.86 L2,5.71 L3.29,7.24 L7.88,3.39 L7.88,3.39 Z M12,4 C7.03,4 3,8.03 3,13 C3,17.97 7.02,22 12,22 C16.97,22 21,17.97 21,13 C21,8.03 16.97,4 12,4 L12,4 Z M12,20 C8.13,20 5,16.87 5,13 C5,9.13 8.13,6 12,6 C15.87,6 19,9.13 19,13 C19,16.87 15.87,20 12,20 L12,20 Z M10.54,14.53 L8.41,12.4 L7.35,13.46 L10.53,16.64 L16.53,10.64 L15.47,9.58 L10.54,14.53 L10.54,14.53 Z"
	},
	arrowBack: {
		title: "Arrow Back",
		desc: "Arrow Back",
		polygon: "20 11 7.83 11 13.42 5.41 12 4 4 12 12 20 13.41 18.59 7.83 13 20 13"
	},
	arrowDownward: {
		title: "Arrow Downward",
		desc: "Arrow Downward",
		polygon: "20 12 18.59 10.59 13 16.17 13 4 11 4 11 16.17 5.42 10.58 4 12 12 20"
	}
}

export default class Icon extends Component {
	render() {
		return (
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={this.props.size ? this.props.size : '24'}>
			    <title>{Icons[this.props.icon].title}</title>
			    <desc>{Icons[this.props.icon].desc}</desc>
			    <g stroke="none" stroke-width="1" fill="none">
			       <path d={Icons[this.props.icon].path} fill="#000"></path>
			    </g>
			</svg>
		)
	}
}
