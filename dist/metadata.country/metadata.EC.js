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
	"593": [
		"EC"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"EC": [
		null,
		[
			null,
			null,
			"1\\d{9,10}|[2-8]\\d{7}|9\\d{8}",
			"\\d{7,11}"
		],
		[
			null,
			null,
			"[2-7][2-7]\\d{6}",
			"\\d{7,8}",
			null,
			null,
			"22123456"
		],
		[
			null,
			null,
			"9(?:39|[45][89]|[67][7-9]|[89]\\d)\\d{6}",
			"\\d{9}",
			null,
			null,
			"991234567"
		],
		[
			null,
			null,
			"1800\\d{6,7}",
			"\\d{10,11}",
			null,
			null,
			"18001234567"
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
			"[2-7]890\\d{4}",
			"\\d{8}",
			null,
			null,
			"28901234"
		],
		"EC",
		593,
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
				"(\\d)(\\d{3})(\\d{4})",
				"$1 $2-$3",
				[
					"[247]|[356][2-8]"
				],
				"(0$1)"
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(1800)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"1"
				],
				"$1"
			]
		],
		[
			[
				null,
				"(\\d)(\\d{3})(\\d{4})",
				"$1-$2-$3",
				[
					"[247]|[356][2-8]"
				]
			],
			[
				null,
				"(\\d{2})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"9"
				],
				"0$1"
			],
			[
				null,
				"(1800)(\\d{3})(\\d{3,4})",
				"$1 $2 $3",
				[
					"1"
				],
				"$1"
			]
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
