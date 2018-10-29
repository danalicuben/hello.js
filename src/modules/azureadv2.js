const hello = require('../hello.js');
// thanks to https://github.com/Azure-Samples/active-directory-javascript-graphapi-web-v2/blob/master/aad.js
{
	hello.init({
		aad: {
			name: 'Azure Active Directory',
			refresh: true,
			oauth: {
				version: 2,
				auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
				grant: 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
			},

			// Authorization scopes
			scope: {
				// you can add as many scopes to the mapping as you want here
				profile: 'user.read',
				app_folder: 'files.readwrite.appfolder,files.readwrite',
				offline_access: ''
			},

			scope_delim: ' ',

			login(p) {
				if (p.qs.response_type === 'code') {
					// Let's set this to an offline access to return a refresh_token
					p.qs.access_type = 'offline_access';
				}
			},

			base: 'https://graph.microsoft.com/v1.0/',

			xhr(p, qs) {
				// modify the headers of the rquest to add the authorization token
				const token = qs.access_token;
				delete qs.access_token;
				p.headers.Authorization = `Bearer ${token}`;
				p.headers['Content-Type'] = 'application/json';

				return true;
			},

			// Don't even try submitting via form.
			// This means no POST operations in <=IE9
			form: false
		}
	});
}
