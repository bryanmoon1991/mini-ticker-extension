import React, { FC, useState, useRef } from 'react';
import { render } from 'react-dom';
import parent from './parent';
import * as CSS from 'csstype';
const StockSocket = require('stocksocket');

interface Props {}

export const TickerBar: FC<Props> = () => {
	interface TickerHash {}

	const [tickers, setTickers] = useState<TickerHash>();

	const tickerStyle: CSS.Properties = {
		padding: 0,
	};

	const stockPriceChanged = (data) => {
		console.log(data);
	};

	StockSocket.addTickers(['TSLA', 'NIO', 'NNDM', 'ETH-USD'], stockPriceChanged);

	return <p style={tickerStyle}>hello world</p>;
};

render(<TickerBar />, parent);

document.querySelector('body')?.prepend(parent);
