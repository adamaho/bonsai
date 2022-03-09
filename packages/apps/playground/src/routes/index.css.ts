import { style, keyframes } from '@vanilla-extract/css';

const buttonFrames = keyframes({
	'0%': {
		borderRadius: '6px',
		padding: '0 24px',
		width: 'auto'
	},
	'50%': {
		borderRadius: '6px',
		padding: '0 24px',
		width: 'calc(100% + 40px)'
	},
	'100%': {
		borderRadius: '50%',
		padding: 0,
		width: '42px'
	}
});

const buttonThrobbing = keyframes({
	'0%': {
		transform: 'scale(1.1)'
	},
	'100%': {
		transform: 'scale(0.90)'
	}
});

const textFrames = keyframes({
	'0%': {
		opacity: 1
	},
	'100%': {
		opacity: 0
	}
});

export const buttonContainer = style({
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center'
});

export const button = style({
	alignItems: 'center',
	backgroundColor: 'white',
	border: 'none',
	borderRadius: '6px',
	boxSizing: 'border-box',
	color: 'rgb(0,0,0, 1)',
	display: 'flex',
	fontSize: '16px',
	height: '42px',
	gap: '8px',
	justifyContent: 'center',
	padding: '0 24px',
	position: 'relative',
	selectors: {
		[`&[data-state-loading='true']`]: {
			animation: `${buttonFrames} 500ms ease-in-out forwards, ${buttonThrobbing} 500ms linear alternate infinite 450ms`
		}
	}
});

export const buttonText = style({
	selectors: {
		[`${button}[data-state-loading='true'] &`]: {
			animation: `${textFrames} 200ms ease forwards`,
			animationDelay: '50ms'
		}
	}
});

export const buttonIcon = style({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'center',
	width: '20px',
	selectors: {
		[`${button}[data-state-loading='true'] &`]: {
			animation: `${textFrames} 200ms ease forwards`,
			animationDelay: '50ms'
		}
	}
});

export const buttonLoading = style({
	color: 'rgb(0,0,0,1)',
	position: 'absolute'
});
