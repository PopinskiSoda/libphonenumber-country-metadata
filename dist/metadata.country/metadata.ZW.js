/**
 * @license
 * Copyright (C) 2010 The Libphonenumber Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generated metadata for file
 * ../resources/PhoneNumberMetadata.xml
 * @author Nikolaos Trogkanis
 */

goog.provide('i18n.phonenumbers.metadata');

/**
 * A mapping from a country calling code to the region codes which denote the
 * region represented by that country calling code. In the case of multiple
 * countries sharing a calling code, such as the NANPA regions, the one
 * indicated with "isMainCountryForCode" in the metadata should be first.
 * @type {!Object.<number, Array.<string>>}
 */
i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = {
	"263": [
		"ZW"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"ZW": [
		null,
		[
			null,
			null,
			"2(?:[012457-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-79]\\d{4,9}|8[06]\\d{8}",
			"\\d{3,10}"
		],
		[
			null,
			null,
			"(?:2(?:0(?:4\\d|5\\d{2})|2[278]\\d|48\\d|7(?:[1-7]\\d|[089]\\d{2})|8(?:[2-57-9]|[146]\\d{2})|98)|3(?:08|17|3[78]|7(?:[19]|[56]\\d)|8[37]|98)|5[15][78]|6(?:28\\d{2}|[36]7|75\\d|[69]8|8(?:7\\d|8)))\\d{3}|(?:2(?:1[39]|2[0157]|6[14]|7[35]|84)|329)\\d{7}|(?:1(?:3\\d{2}|9\\d|[4-8])|2(?:0\\d{2}|[569]\\d)|3(?:[26]|[013459]\\d)|5(?:0|5\\d{2}|[689]\\d)|6(?:[39]|[01246]\\d|[78]\\d{2}))\\d{3}|(?:29\\d|39|54)\\d{6}|(?:(?:25|54)83|2582\\d)\\d{3}|(?:4\\d{6,7}|9[2-9]\\d{4,5})",
			"\\d{3,10}",
			null,
			null,
			"1312345"
		],
		[
			null,
			null,
			"7[1378]\\d{7}",
			"\\d{9}",
			null,
			null,
			"711234567"
		],
		[
			null,
			null,
			"800\\d{7}",
			"\\d{10}",
			null,
			null,
			"8001234567"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"86(?:1[12]|30|44|55|77|8[367]|99)\\d{6}",
			"\\d{10}",
			null,
			null,
			"8686123456"
		],
		"ZW",
		263,
		"00",
		"0",
		null,
		null,
		"0",
		null,
		null,
		null,
		[
			[
				null,
				"([49])(\\d{3})(\\d{2,4})",
				"$1 $2 $3",
				[
					"4|9[2-9]"
				],
				"0$1"
			],
			[
				null,
				"(7\\d)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"7"
				],
				"0$1"
			],
			[
				null,
				"(86\\d{2})(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"86[24]"
				],
				"0$1"
			],
			[
				null,
				"([2356]\\d{2})(\\d{3,5})",
				"$1 $2",
				[
					"2(?:0[45]|2[278]|[49]8|[78])|3(?:08|17|3[78]|7[1569]|8[37]|98)|5[15][78]|6(?:[29]8|[38]7|6[78]|75|[89]8)"
				],
				"0$1"
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"2(?:1[39]|2[0157]|6[14]|7[35]|84)|329"
				],
				"0$1"
			],
			[
				null,
				"([1-356]\\d)(\\d{3,5})",
				"$1 $2",
				[
					"1[3-9]|2[0569]|3[0-69]|5[05689]|6[0-46-9]"
				],
				"0$1"
			],
			[
				null,
				"([235]\\d)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[23]9|54"
				],
				"0$1"
			],
			[
				null,
				"([25]\\d{3})(\\d{3,5})",
				"$1 $2",
				[
					"(?:25|54)8",
					"258[23]|5483"
				],
				"0$1"
			],
			[
				null,
				"(8\\d{3})(\\d{6})",
				"$1 $2",
				[
					"86"
				],
				"0$1"
			],
			[
				null,
				"(80\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"80"
				],
				"0$1"
			]
		],
		null,
		[
			null,
			null,
			"NA",
			"NA"
		],
		null,
		null,
		[
			null,
			null,
			"NA",
			"NA"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		null,
		null,
		[
			null,
			null,
			"NA",
			"NA"
		]
	]
};
