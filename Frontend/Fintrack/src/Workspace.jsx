import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import dashboard from "./image/business-analysis.png";
import balance from "./image/wallet.png";
import transaction from "./image/transaction.png";
import bills from "./image/bill.png";
import expense from "./image/menu.png";
import goals from "./image/target.png";
import profile from "./image/user.png";
import "./Workspace.css";
import { UserContext } from "./UserContext";

const Workspace = () => {
    const { username } = useContext(UserContext);
    const location = useLocation();

    // Define the menu items with their corresponding paths
    const menuItems = [
        { path: "/home/dashboard", icon: dashboard, label: "Dashboard" },
        { path: "/home/balance", icon: balance, label: "Balance" },
        { path: "/home/transaction", icon: transaction, label: "Transaction" },
        { path: "/home/bills", icon: bills, label: "Bills" },
        { path: "/home/expenses", icon: expense, label: "Expenses" },
        { path: "/home/goals", icon: goals, label: "Goals" },
    ];

    return (
        <React.Fragment>
            <div className="ws-container">
                <div className="menu-list">
                    <nav>
                        <ul>
                            {menuItems.map((item) => (
                                <Link to={item.path} key={item.path}>
                                    <li className={location.pathname === item.path ? "active" : ""}>
                                        <img src={item.icon} alt="icon" />
                                        <h4>{item.label}</h4>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="account-centre">
                    <div className="accounts">
                        <img src={profile} alt="profile pic" />
                        <h5>{username}</h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Workspace;