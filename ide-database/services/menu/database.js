/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
exports.getMenu = function () {
	let menu = {
		"name": "Database",
		"link": "#",
		"order": "100",
		"onClick": "alert('Database has been clicked')",
		"items": [
			{
				"name": "Properties",
				"link": "#",
				"order": "110",
				"onClick": "alert('Properties has been clicked')"
			}
		]
	};
	return menu;
}