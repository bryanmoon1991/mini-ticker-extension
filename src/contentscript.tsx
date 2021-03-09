import React, { FC } from 'react';
import { render } from 'react-dom';

interface Props {}

export const TickerBar: FC<Props> = () => {
	return (
		<div style={{ backgroundColor: 'red' }}>
			<p>hello world</p>
		</div>
	);
};

render(<TickerBar />, document.querySelector('body'));
