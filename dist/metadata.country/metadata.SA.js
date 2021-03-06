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
	"966": [
		"SA"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"SA": [
		null,
		[
			null,
			null,
			"1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}",
			"\\d{7,10}"
		],
		[
			null,
			null,
			"11\\d{7}|1?(?:2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",
			"\\d{7,9}",
			null,
			null,
			"112345678"
		],
		[
			null,
			null,
			"(?:5(?:[013-689]\\d|7[0-26-8])|811\\d)\\d{6}",
			"\\d{9,10}",
			null,
			null,
			"512345678"
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
			"92[05]\\d{6}",
			"\\d{9}",
			null,
			null,
			"920012345"
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
		"SA",
		966,
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
				"([1-467])(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[1-467]"
				],
				"0$1"
			],
			[
				null,
				"(1\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"1[1-467]"
				],
				"0$1"
			],
			[
				null,
				"(5\\d)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"5"
				],
				"0$1"
			],
			[
				null,
				"(92\\d{2})(\\d{5})",
				"$1 $2",
				[
					"92"
				],
				"$1"
			],
			[
				null,
				"(800)(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"80"
				],
				"$1"
			],
			[
				null,
				"(811)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"81"
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
