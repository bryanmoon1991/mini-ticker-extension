import React, { FC, useState, useRef } from 'react';
import { render } from 'react-dom';
import * as CSS from 'csstype';
import StockSocket from 'stocksocket';

interface Props {}

const divBar = document.createElement('div');
divBar.className = 'mini-ticker-extension';
divBar.style.backgroundColor = 'red';
divBar.style.position = 'sticky';
divBar.style.zIndex = '100000';
divBar.style.height = '50px';
divBar.style.top = '0';

export const TickerBar: FC<Props> = () => {
	interface TickerHash {}

	const [tickers, setTickers] = useState<TickerHash>();

	const tickerStyle: CSS.Properties = {
		padding: 0,
	};

	const stockPriceChanged = (data: any) => {
		console.log(data);
	};

	StockSocket.addTickers(['TSLA', 'NIO', 'NNDM', 'ETH-USD'], stockPriceChanged);

	return <p style={tickerStyle}>hello world</p>;
};

render(<TickerBar />, divBar);

document.querySelector('body')?.prepend(divBar);
