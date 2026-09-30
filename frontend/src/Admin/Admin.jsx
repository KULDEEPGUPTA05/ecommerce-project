import { NavLink, Outlet } from "react-router"

const Admin = () => {
  return (
    <div className="!bg-white-100">
        <h1>Admin</h1>

        <ul>
            <li><NavLink to="/admin/usercollection">User_Collection</NavLink ></li>
            <li><NavLink to="/admin/retailcollection">Retailer_collection</NavLink ></li>
        </ul>
        <Outlet/>


    </div>
  )
}

export default Admin