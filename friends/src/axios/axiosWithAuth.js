import axios from 'axios';

 const axiosWithAuth = () => {
     const token = localStorage.getItem( "token" );
     console.log("toekn from server",token);

     const instance = axios.create( {
         headers: {
             "content-Type" : "application/json",
             Authorization: token
         },
     });

     return instance;
};

export default axiosWithAuth;
