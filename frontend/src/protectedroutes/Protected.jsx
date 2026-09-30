import { Navigate } from "react-router";



const Protected = ({userRole,access,children}) => {
    if(!userRole){
        return <Navigate to="/" replace/>
    }

  if(!access.includes(userRole)){
    return <h1>Access denied</h1>
  }
  return children;
}

export default Protected;