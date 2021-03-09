import React, { FC } from 'react';
import { render } from 'react-dom';

interface Props {}

export const Popup: FC<Props> = () => {
	return <div>popup page</div>;
};

render(<Popup />, document.getElementById('popup'));
