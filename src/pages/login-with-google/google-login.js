import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import { mockApiUrl } from 'common/constants';

const LoginWithGoogle = () => {
  const history = useHistory();
  const [dataUsers, setDataUsers] = useState();

  useEffect(() => {
    axios.get(`${mockApiUrl}/users`).then((responses) => {
      setDataUsers(responses.data);
    });
  }, []);

  const responseGoogle = async (googleResponse) => {
    const dataUserGoogle = googleResponse.profileObj;
    const { email } = dataUserGoogle;

    const targetUser = dataUsers.find((user) => user.email === email);
    if (targetUser) {
      localStorage.setItem('targetUser', JSON.stringify(targetUser));
    } else {
      const { data: updatedUser } = await axios.post(`${mockApiUrl}/users`, dataUserGoogle);
      localStorage.setItem('targetUser', JSON.stringify(updatedUser));
    }

    history.push('/dashBoard');
  };

  return (
    <div>
      <GoogleLogin
        clientId="1098489313773-5jc8dkp7ocg6lhlhr30k56lu2m3q12u1.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};
export default LoginWithGoogle;
