import { useAuth } from "../../contexts/AuthContext"
import OaCard from "../../components/common/OaCard"
import OaButton from "../../components/common/OaButton";

function Dashboard() {
  const { user, logout } = useAuth();

  if(!user){
    <OaCard title="Profile" authForm>
      <div className="text-center mb-4">
        Cannot Retrieve User
      </div>
    </OaCard>
  }
  return (
    <OaCard title="Profile" authForm>
      <div className="text-center mb-4">
        <h4>Welcome {user.username}</h4>
        <p>{user.isAdmin && "Hello Admin - Welcome"}</p>
        <OaButton onClick={logout}>Logout</OaButton>
      </div>
    </OaCard>
  )
}

export default Dashboard