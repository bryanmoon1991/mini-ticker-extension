import React, { FC } from 'react';
import { render } from 'react-dom';

interface Props {}

export const Popup: FC<Props> = () => {
	return (
		<div>
			<p>hello world</p>
		</div>
	);
};

render(<Popup />, document.getElementById('popup'));
