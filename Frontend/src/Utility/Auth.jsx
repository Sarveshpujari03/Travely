import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom'
    
function Auth() {
  const [cookies] = useCookies(['cookie_name']);
  const navigate = useNavigate();

  if (cookies.cookie_name) {
    // Cookie is set
    console.log('Cookie is set:', cookies.cookie_name);
  } else {
    // Cookie is not set
    
  }

  return (
    
     <div>
        <h1>My Component</h1>
        <p>Cookie is set: {cookies.cookie_name}</p>
     </div>
    
  );
}

export default Auth;