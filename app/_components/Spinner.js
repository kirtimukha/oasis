'use client';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div`
	margin: 4.8rem auto;
	width: 6.4rem;
	height: 6.4rem;
	aspect-ratio: 1;
	border-radius: 50%;
	//background: var(--color-blue-100);
	background:
		radial-gradient(farthest-side, var(--color-blue-100) 94%, #0000) top/10px
			10px no-repeat,
		conic-gradient(#0000 30%, var(--color-blue-100));
	-webkit-mask: radial-gradient(
		farthest-side,
		#000 calc(100% - 10px),
		transparent 0
	);

	//-webkit-mask-image: radial-gradient(
	//	circle closest-side,
	//	#000 100%,
	//	transparent 0
	//);
	//-webkit-mask-repeat: no-repeat;
	//-webkit-mask-size: 100% 100%;

	animation: ${rotate} 1.5s infinite linear;
`;

export default Spinner;
