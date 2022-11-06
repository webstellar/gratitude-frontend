import DashboardLayout from "../components/DashboardLayout/DashboardLayout"
import HomeRecentTitle from "../components/HomeRecentTitle/HomeRecentTitle"
import UserProfile from "../components/UserProfile/UserProfile"
import Seo from "../components/Seo/Seo"

const UserDashboard = () => {
    return (
        <DashboardLayout>
            <UserProfile />
            <HomeRecentTitle />
        </DashboardLayout>
    )
}
export default UserDashboard