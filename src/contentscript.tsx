import React, { FC } from 'react';
import { render } from 'react-dom';

const divBar = document.createElement('div');
divBar.style.color = 'red';

interface Props {}

export const TickerBar: FC<Props> = () => {
	return <p>hello world</p>;
};

render(<TickerBar />, divBar);

document.querySelector('body')?.prepend(divBar);
