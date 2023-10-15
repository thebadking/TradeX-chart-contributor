import { i as createVNode, F as Fragment, s as spreadAttributes } from './astro.8a1fcc00.mjs';
import '@astrojs/internal-helpers/path';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'slash';
import 'node:fs/promises';
import './pages/404.astro.3b1f3a71.mjs';
import 'html-escaper';
import 'fs';
import 'path';
/* empty css                        */import 'zod';
/* empty css                                                             */import 'execa';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Looking at the back history is useful, but working with live prices is where things turn interesting.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>Four things are required to stream live price data to the chart</p>\n<ol>\n<li>Data source, typically a WebSocket connection</li>\n<li>Chart config file must have a <code>stream: {}</code> definition</li>\n<li>Function to call the <code>chart.stream.onTick(data)</code> method</li>\n<li>Data passed to <code>onTick()</code> formatted correctly</li>\n</ol>\n<h2 id=\"data-source\">Data Source</h2>\n<p>Your own code is responsible for opening and maintaining the connection, along with dealing with any errors the source returns.</p>\n<p>The chart has been tested to high data rates and performs well. The chart redraw / refresh rate when displaying a stream can be throttled through config option:</p>\n<p><code>maxCandleUpdate: 250</code></p>\n<p>The option is specified in milliseconds. Of note is that the render engine will also simply ignore too many frame render requests if it cannot keep up with the browser screen refresh.</p>\n<h2 id=\"chart-config-stream-definition\">Chart Config Stream Definition</h2>\n<p>The chart config must include at least the following to initialize the chart stream API.</p>\n<p><code>stream: {}</code></p>\n<p>The stream will then be displayed with all of the defaults. The chart stream stream features can be modified with the following options:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"left\">Options</th><th>Values</th><th>Description</th></tr></thead><tbody><tr><td align=\"left\">priceLine</td><td>boolean</td><td>display a horizonal priceline accross the chart<br>defaul:<code>true</code></td></tr><tr><td align=\"left\">tfCountDown</td><td>boolean</td><td>display the time remaining for the current candle timeframe</td></tr><tr><td align=\"left\">alerts</td><td>array</td><td>list of price alert objects</td></tr></tbody></table>\n<h2 id=\"invoking-ontick-method\">Invoking onTick() Method</h2>\n<p>The chart element must first be created and appended to an element in the DOM. The config, which includes the stream definition, is passed to the chart via the following API call:</p>\n<p><code>chart.start(config)</code></p>\n<p>If the config and the stream definition are valid, the chart stream must be initilized.</p>\n<p><code>chart.stream.start()</code></p>\n<p>Your WebSocket callback can then pass data to the chart with:</p>\n<p><code>chart.stream.onTick(data)</code></p>\n<h2 id=\"stream-data-format\">Stream Data Format</h2>\n<p>TradeX-chart expects the data stream to be KLine data, a rolling update of the current candle (timeframe period).</p>\n<pre is:raw=\"\" class=\"astro-code min-dark\" style=\"background-color: #1f1f1f; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #B392F0\">{</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  t</span><span style=\"color: #BBBBBB\">:</span><span style=\"color: #B392F0\"> timeStamp </span><span style=\"color: #6B737C\">// timestamp of current candle in milliseconds</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  o</span><span style=\"color: #BBBBBB\">:</span><span style=\"color: #B392F0\"> open  </span><span style=\"color: #6B737C\">// open price</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  h</span><span style=\"color: #BBBBBB\">:</span><span style=\"color: #B392F0\"> high  </span><span style=\"color: #6B737C\">// high price</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  c</span><span style=\"color: #BBBBBB\">:</span><span style=\"color: #B392F0\"> close  </span><span style=\"color: #6B737C\">// close price</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  v</span><span style=\"color: #BBBBBB\">:</span><span style=\"color: #B392F0\"> volume </span><span style=\"color: #6B737C\">// volume</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">}</span></span></code></pre>\n<h2 id=\"price-alerts\">Price Alerts</h2>\n<p>Price Alerts can be invoked via the stream config or programmatically via the API.</p>\n<p>Each price alert requires there things:</p>\n<ol>\n<li>Trigger price - number</li>\n<li>Condition - function</li>\n<li>Handler - function</li>\n</ol>\n<h3 id=\"programatic-alerts\">Programatic Alerts</h3>\n<pre is:raw=\"\" class=\"astro-code min-dark\" style=\"background-color: #1f1f1f; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">function</span><span style=\"color: #B392F0\"> handler($</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\">p</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\">c) {</span><span style=\"color: #79B8FF\">console</span><span style=\"color: #B392F0\">.log(</span><span style=\"color: #FFAB70\">`alert`</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\">$</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\">p[</span><span style=\"color: #F8F8F8\">4</span><span style=\"color: #B392F0\">]</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\">c[</span><span style=\"color: #F8F8F8\">4</span><span style=\"color: #B392F0\">])} </span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">function</span><span style=\"color: #B392F0\"> alertTest ($</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> p</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> c) {</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  </span><span style=\"color: #F97583\">if</span><span style=\"color: #B392F0\"> ($ </span><span style=\"color: #F97583\">></span><span style=\"color: #B392F0\"> p[</span><span style=\"color: #F8F8F8\">4</span><span style=\"color: #B392F0\">] </span><span style=\"color: #F97583\">&#x26;&#x26;</span><span style=\"color: #B392F0\"> $ </span><span style=\"color: #F97583\">&#x3C;</span><span style=\"color: #B392F0\"> c[</span><span style=\"color: #F8F8F8\">4</span><span style=\"color: #B392F0\">]) </span><span style=\"color: #F97583\">return</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">true</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  </span><span style=\"color: #F97583\">else</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F97583\">return</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">false</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #79B8FF\">myChart</span><span style=\"color: #B392F0\">.</span><span style=\"color: #79B8FF\">stream</span><span style=\"color: #B392F0\">.</span><span style=\"color: #79B8FF\">alerts</span><span style=\"color: #B392F0\">.add(</span><span style=\"color: #F8F8F8\">13010</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> alertTest</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> handler)</span></span></code></pre>\n<h3 id=\"stream-config-defined-alerts\">Stream Config Defined Alerts</h3>\n<pre is:raw=\"\" class=\"astro-code min-dark\" style=\"background-color: #1f1f1f; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">chartConfig</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #B392F0\"> {</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  stream</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> {</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">    alerts</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> [</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">      {price</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F8F8F8\">30000</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> alertTest</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> handler}</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">    ]</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  }</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">}</span></span>\n<span class=\"line\"></span></code></pre>");

				const frontmatter = {"title":"Streaming Price Data to the Chart"};
				const file = "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/src/content/docs/reference/streaming_price_data.md";
				const url = undefined;
				function rawContent() {
					return "\nLooking at the back history is useful, but working with live prices is where things turn interesting.\n\n## Requirements\n\nFour things are required to stream live price data to the chart\n\n1. Data source, typically a WebSocket connection\n2. Chart config file must have a ``stream: {}`` definition\n3. Function to call the ``chart.stream.onTick(data)`` method\n4. Data passed to ``onTick()`` formatted correctly\n\n## Data Source\n\nYour own code is responsible for opening and maintaining the connection, along with dealing with any errors the source returns.\n\nThe chart has been tested to high data rates and performs well. The chart redraw / refresh rate when displaying a stream can be throttled through config option:\n\n``maxCandleUpdate: 250``\n\nThe option is specified in milliseconds. Of note is that the render engine will also simply ignore too many frame render requests if it cannot keep up with the browser screen refresh.\n\n## Chart Config Stream Definition\n\nThe chart config must include at least the following to initialize the chart stream API.\n\n``stream: {}``\n\nThe stream will then be displayed with all of the defaults. The chart stream stream features can be modified with the following options:\n\n\n| Options     | Values  | Description                                                          |\n| :------------ | --------- | ---------------------------------------------------------------------- |\n| priceLine   | boolean | display a horizonal priceline accross the chart<br />defaul:``true`` |\n| tfCountDown | boolean | display the time remaining for the current candle timeframe          |\n| alerts      | array   | list of price alert objects                                          |\n\n## Invoking onTick() Method\n\nThe chart element must first be created and appended to an element in the DOM. The config, which includes the stream definition, is passed to the chart via the following API call:\n\n``chart.start(config)``\n\nIf the config and the stream definition are valid, the chart stream must be initilized.\n\n``chart.stream.start()``\n\nYour WebSocket callback can then pass data to the chart with:\n\n``chart.stream.onTick(data)``\n\n## Stream Data Format\n\nTradeX-chart expects the data stream to be KLine data, a rolling update of the current candle (timeframe period).\n\n```javascript\n{\n  t: timeStamp // timestamp of current candle in milliseconds\n  o: open  // open price\n  h: high  // high price\n  c: close  // close price\n  v: volume // volume\n}\n```\n\n## Price Alerts\n\nPrice Alerts can be invoked via the stream config or programmatically via the API.\n\nEach price alert requires there things:\n\n1. Trigger price - number\n2. Condition - function\n3. Handler - function\n\n### Programatic Alerts\n\n```javascript\nfunction handler($,p,c) {console.log(`alert`,$,p[4],c[4])} \n\nfunction alertTest ($, p, c) {\n  if ($ > p[4] && $ < c[4]) return true\n  else return false\n}\n\nmyChart.stream.alerts.add(13010, alertTest, handler)\n```\n\n### Stream Config Defined Alerts\n\n```javascript\n\nconst chartConfig = {\n  stream: {\n    alerts: [\n      {price: 30000, alertTest, handler},\n    ]\n  }\n}\n\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"data-source","text":"Data Source"},{"depth":2,"slug":"chart-config-stream-definition","text":"Chart Config Stream Definition"},{"depth":2,"slug":"invoking-ontick-method","text":"Invoking onTick() Method"},{"depth":2,"slug":"stream-data-format","text":"Stream Data Format"},{"depth":2,"slug":"price-alerts","text":"Price Alerts"},{"depth":3,"slug":"programatic-alerts","text":"Programatic Alerts"},{"depth":3,"slug":"stream-config-defined-alerts","text":"Stream Config Defined Alerts"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
