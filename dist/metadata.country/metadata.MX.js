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
	"52": [
		"MX"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"MX": [
		null,
		[
			null,
			null,
			"[1-9]\\d{9,10}",
			"\\d{7,11}"
		],
		[
			null,
			null,
			"(?:33|55|81)\\d{8}|(?:2(?:0[01]|2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",
			"\\d{7,10}",
			null,
			null,
			"2221234567"
		],
		[
			null,
			null,
			"1(?:(?:33|55|81)\\d{8}|(?:2(?:2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})",
			"\\d{11}",
			null,
			null,
			"12221234567"
		],
		[
			null,
			null,
			"8(?:00|88)\\d{7}",
			"\\d{10}",
			null,
			null,
			"8001234567"
		],
		[
			null,
			null,
			"900\\d{7}",
			"\\d{10}",
			null,
			null,
			"9001234567"
		],
		[
			null,
			null,
			"300\\d{7}",
			"\\d{10}",
			null,
			null,
			"3001234567"
		],
		[
			null,
			null,
			"500\\d{7}",
			"\\d{10}",
			null,
			null,
			"5001234567"
		],
		[
			null,
			null,
			"NA",
			"NA"
		],
		"MX",
		52,
		"0[09]",
		"01",
		null,
		null,
		"0[12]|04[45](\\d{10})",
		"1$1",
		null,
		null,
		[
			[
				null,
				"([358]\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"33|55|81"
				],
				"01 $1",
				null,
				1
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"
				],
				"01 $1",
				null,
				1
			],
			[
				null,
				"(1)([358]\\d)(\\d{4})(\\d{4})",
				"044 $2 $3 $4",
				[
					"1(?:33|55|81)"
				],
				"$1",
				null,
				1
			],
			[
				null,
				"(1)(\\d{3})(\\d{3})(\\d{4})",
				"044 $2 $3 $4",
				[
					"1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"
				],
				"$1",
				null,
				1
			]
		],
		[
			[
				null,
				"([358]\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3",
				[
					"33|55|81"
				],
				"01 $1",
				null,
				1
			],
			[
				null,
				"(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3",
				[
					"[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"
				],
				"01 $1",
				null,
				1
			],
			[
				null,
				"(1)([358]\\d)(\\d{4})(\\d{4})",
				"$1 $2 $3 $4",
				[
					"1(?:33|55|81)"
				]
			],
			[
				null,
				"(1)(\\d{3})(\\d{3})(\\d{4})",
				"$1 $2 $3 $4",
				[
					"1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"
				]
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
		1,
		null,
		[
			null,
			null,
			"NA",
			"NA"
		]
	]
};
