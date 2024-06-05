import Revenue from "./@revenue/page";
import UsersAnalytics from "./@users/page";
import Notification from "./@notification/page";
import Login from "./@login/page";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notification,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div>{users}</div>
      <div>{notification}</div>
      <div>{revenue}</div>
      <div>{login}</div>
    </>
  ) : (
    <div>
      <Login />
    </div>
  );
}
