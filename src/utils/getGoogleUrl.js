export const getGoogleUrl = (from) => {
    const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

    const options = {
        redirect_uri: process.env.REDIRECT_URL,
        client_id: process.env.CLIENT_ID,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
            'openid',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
        ].join(' '),
        state: from,
    };

    const qs = new URLSearchParams(options);

    return `${rootUrl}?${qs.toString()}`;
};

export const getGoogleToken = (code) => {
    const tokenUrl = `https://oauth2.googleapis.com/token`;

    const options = {
        redirect_uri: process.env.REDIRECT_URL,
        client_id: process.env.CLIENT_ID,
        grant_type: 'authorization_code',
        code: code,
        client_secret: process.env.CLIENT_SECRET
    };

    const qs = new URLSearchParams(options);

    return `${tokenUrl}?${qs.toString()}`;
};
