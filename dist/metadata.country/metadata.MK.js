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
	"389": [
		"MK"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"MK": [
		null,
		[
			null,
			null,
			"[2-578]\\d{7}",
			"\\d{8}"
		],
		[
			null,
			null,
			"(?:2(?:[23]\\d|5[124578]|6[01])|3(?:1[3-6]|[23][2-6]|4[2356])|4(?:[23][2-6]|4[3-6]|5[256]|6[25-8]|7[24-6]|8[4-6]))\\d{5}",
			"\\d{6,8}",
			null,
			null,
			"22212345"
		],
		[
			null,
			null,
			"7(?:[0-25-8]\\d{2}|32\\d|421)\\d{4}",
			"\\d{8}",
			null,
			null,
			"72345678"
		],
		[
			null,
			null,
			"800\\d{5}",
			"\\d{8}",
			null,
			null,
			"80012345"
		],
		[
			null,
			null,
			"5[02-9]\\d{6}",
			"\\d{8}",
			null,
			null,
			"50012345"
		],
		[
			null,
			null,
			"8(?:0[1-9]|[1-9]\\d)\\d{5}",
			"\\d{8}",
			null,
			null,
			"80123456"
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
		"MK",
		389,
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
				"(2)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"2"
				],
				"0$1"
			],
			[
				null,
				"([347]\\d)(\\d{3})(\\d{3})",
				"$1 $2 $3",
				[
					"[347]"
				],
				"0$1"
			],
			[
				null,
				"([58]\\d{2})(\\d)(\\d{2})(\\d{2})",
				"$1 $2 $3 $4",
				[
					"[58]"
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
