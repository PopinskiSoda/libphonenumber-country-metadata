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
	"968": [
		"OM"
	]
};

/**
* A mapping from a region code to the PhoneMetadata for that region.
* @type {!Object.<string, Array>}
*/
i18n.phonenumbers.metadata.countryToMetadata = {
	"OM": [
		null,
		[
			null,
			null,
			"(?:5|[279]\\d)\\d{6}|800\\d{5,6}",
			"\\d{7,9}"
		],
		[
			null,
			null,
			"2[2-6]\\d{6}",
			"\\d{8}",
			null,
			null,
			"23123456"
		],
		[
			null,
			null,
			"7[19]\\d{6}|9(?:0[1-9]|[1-9]\\d)\\d{5}",
			"\\d{8}",
			null,
			null,
			"92123456"
		],
		[
			null,
			null,
			"8007\\d{4,5}|500\\d{4}",
			"\\d{7,9}",
			null,
			null,
			"80071234"
		],
		[
			null,
			null,
			"900\\d{5}",
			"\\d{8}",
			null,
			null,
			"90012345"
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
		"OM",
		968,
		"00",
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		[
			[
				null,
				"(2\\d)(\\d{6})",
				"$1 $2",
				[
					"2"
				]
			],
			[
				null,
				"([79]\\d{3})(\\d{4})",
				"$1 $2",
				[
					"[79]"
				]
			],
			[
				null,
				"([58]00)(\\d{4,6})",
				"$1 $2",
				[
					"[58]"
				]
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
