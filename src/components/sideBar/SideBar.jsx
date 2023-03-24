import "./sideBar.css";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="title">Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <LineStyle />
              Home
            </li>
            <li className="sideBarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="title">Quick Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <PermIdentity />
              Users
            </li>
            <li className="sideBarListItem">
              <Storefront />
              Products
            </li>
            <li className="sideBarListItem">
              <AttachMoney />
              Transactions
            </li>
            <li className="sideBarListItem">
              <BarChart />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="title">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MailOutline />
              Mail
            </li>
            <li className="sideBarListItem">
              <DynamicFeed />
              Feedback
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="title">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <WorkOutline />
              Manage
            </li>
            <li className="sideBarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sideBarListItem">
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
