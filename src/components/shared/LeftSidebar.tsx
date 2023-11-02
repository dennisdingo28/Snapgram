import { useUserContext } from "@/context/AuthContext"
import { Link } from "react-router-dom"

const LeftSidebar = () => {
    const {user} = useUserContext();

  return (
    <nav className="leftsidebar">
        <div className="flex flex-col gap-11">
            <Link to={"/"} className="flex gap-3 items-center">
                <img src="/assets/images/logo.svg" alt="logo" width={170} height={36}/>
            </Link>
            <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
                <img alt="profile" className="h-14 w-14 rounded-full" src={user.imageUrl || "/assets/icons/profile-placeholder.svg"} />
                <div className="flex flex-col">
                    <p className="body-bold">{user.name}</p>
                    <p className="small-regular text-light-3">@{user.username}</p>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default LeftSidebar