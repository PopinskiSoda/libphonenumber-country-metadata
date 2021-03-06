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
	"234": [
		"NG"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"NG": [
		null,
		[
			null,
			null,
			"[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}",
			"\\d{5,14}"
		],
		[
			null,
			null,
			"[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}",
			"\\d{5,9}",
			null,
			null,
			"12345678"
		],
		[
			null,
			null,
			"(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70[1-689]\\d|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[23589]\\d)\\d{6}",
			"\\d{8,10}",
			null,
			null,
			"8021234567"
		],
		[
			null,
			null,
			"800\\d{7,11}",
			"\\d{10,14}",
			null,
			null,
			"80017591759"
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
			"NA",
			"NA"
		],
		"NG",
		234,
		"009",
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
				"(\\d{3})(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"70|8[01]|90[23589]"
				],
				"0$1"
			],
			[
				null,
				"(\\d)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"[12]|9(?:0[3-9]|[1-9])"
				],
				"0$1"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{2,3})",
				"$1 $2 $3",
				[
					"[3-6]|7(?:[1-79]|0[1-9])|8[2-9]"
				],
				"0$1"
			],
			[
				null,
				"([78]00)(\\d{4})(\\d{4,5})",
				"$1 $2 $3",
				[
					"[78]00"
				],
				"0$1"
			],
			[
				null,
				"([78]00)(\\d{5})(\\d{5,6})",
				"$1 $2 $3",
				[
					"[78]00"
				],
				"0$1"
			],
			[
				null,
				"(78)(\\d{2})(\\d{3})",
				"$1 $2 $3",
				[
					"78"
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
			"700\\d{7,11}",
			"\\d{10,14}",
			null,
			null,
			"7001234567"
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
