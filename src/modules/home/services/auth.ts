export const getOAuthToken = async (): Promise<{
  token_type: string;
  access_token: string;
}> => {
    
  const credentials = btoa(
    `${import.meta.env.VITE_APP_TWITTER_API_KEY}:${
      import.meta.env.VITE_APP_TWITTER_API_SECRET_KEY
    }`
  );
  try {
    const response = await fetch("https://api.x.com/oauth2/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: "grant_type=client_credentials",
    });
    return await response.json();
  } catch (e) {
    return Promise.reject(e);
  }
};
