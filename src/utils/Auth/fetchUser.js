import axios from 'axios';

export const getUserProfile = (tokenInfo, onSuccessCallback) => {
  axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
    headers: {
      Authorization: `Bearer ${tokenInfo?.access_token}`,
      Accept: 'Application/json',
    },
  })
  .then((resp) => {
    console.log(resp.data); // Ensure data is being logged
    localStorage.setItem('user', JSON.stringify(resp.data));
    if (onSuccessCallback) onSuccessCallback();
  })
  .catch((error) => {
    console.log("Error fetching user profile:", error);
  });
};

