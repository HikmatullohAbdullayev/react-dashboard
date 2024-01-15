import React from "react";
import UserImg1 from "../../assets/img/user1.png";
import UserImg2 from "../../assets/img/user2.png";
import UserImg3 from "../../assets/img/user3.png";
import UserImg4 from "../../assets/img/user4.png";
import UserImg5 from "../../assets/img/user5.png";
import UserImg6 from "../../assets/img/user6.png";
import UserImg7 from "../../assets/img/user7.png";
import UserImg8 from "../../assets/img/user8.png";
import "./table.css"

function Table() {



  return (
    <table className="main_table">
      <thead>
      <tr className="table_title_box_1">
        <th className="table_title">Ticket details</th>
        <th className="table_title">Customer name</th>
        <th className="table_title">Date</th>
        <th className="table_title">Priority</th>
      </tr>
      </thead>
      <tbody>
        <tr className="table_box">
          <td className="table_item_title table_item">
            <img className="user_img" src={UserImg1} alt="user_img" />
            <div className="user_info">
              <h2 className="user_title">Contact Email not Linked</h2>
              <p className="user_date"> Updated 1 day ago</p>
            </div>
          </td>
          <td className="table_item ">
            <h2 className="user_name">Tom Cruise</h2>
            <p className="costumer_date"> on 24.05.2019</p>
          </td>
          <td className="table_item">
            <p className="date">May 26, 2019</p>
            <time className="time">6:30 AM</time>
          </td>
          <td className="table_item">
            <p className="priority high">HIGH</p>
          </td>
        </tr>
        <tr className="table_box">
          <td className="table_item_title table_item">
            <img className="user_img" src={UserImg5} alt="user_img" />
            <div className="user_info">
              <h2 className="user_title">Contact Email not Linked</h2>
              <p className="user_date"> Updated 1 day ago</p>
            </div>
          </td>
          <td className="table_item">
            <h2 className="user_name">Tom Cruise</h2>
            <p className="costumer_date"> on 24.05.2019</p>
          </td>
          <td className="table_item">
            <p className="date">May 26, 2019</p>
            <time className="time">6:30 AM</time>
          </td>
          <td className="table_item">
            <p className="priority high">HIGH</p>
          </td>
        </tr>
        <tr className="table_box">
          <td className="table_item_title table_item">
            <img className="user_img" src={UserImg2} alt="user_img" />
            <div className="user_info">
              <h2 className="user_title">Contact Email not Linked</h2>
              <p className="user_date"> Updated 1 day ago</p>
            </div>
          </td>
          <td className="table_item">
            <h2 className="user_name">Tom Cruise</h2>
            <p className="costumer_date"> on 24.05.2019</p>
          </td>
          <td className="table_item">
            <p className="date">May 26, 2019</p>
            <time className="time">6:30 AM</time>
          </td>
          <td className="table_item">
            <p className="priority high">HIGH</p>
          </td>
        </tr>
        <tr className="table_box">
          <td className="table_item_title table_item">
            <img className="user_img" src={UserImg6} alt="user_img" />
            <div className="user_info">
              <h2 className="user_title">Contact Email not Linked</h2>
              <p className="user_date"> Updated 1 day ago</p>
            </div>
          </td>
          <td className="table_item">
            <h2 className="user_name">Tom Cruise</h2>
            <p className="costumer_date"> on 24.05.2019</p>
          </td>
          <td className="table_item">
            <p className="date">May 26, 2019</p>
            <time className="time">6:30 AM</time>
          </td>
          <td className="table_item">
            <p className="priority high">HIGH</p>
          </td>
        </tr>
        <tr className="table_box">
          <td className="table_item_title table_item">
            <img className="user_img" src={UserImg4} alt="user_img" />
            <div className="user_info">
              <h2 className="user_title">Contact Email not Linked</h2>
              <p className="user_date"> Updated 1 day ago</p>
            </div>
          </td>
          <td className="table_item">
            <h2 className="user_name">Tom Cruise</h2>
            <p className="costumer_date"> on 24.05.2019</p>
          </td>
          <td className="table_item">
            <p className="date">May 26, 2019</p>
            <time className="time">6:30 AM</time>
          </td>
          <td className="table_item">
            <p className="priority high">HIGH</p>
          </td>
        </tr>
        <tr className="table_box">
          <td className="table_item_title table_item">
            <img className="user_img" src={UserImg7} alt="user_img" />
            <div className="user_info">
              <h2 className="user_title">Contact Email not Linked</h2>
              <p className="user_date"> Updated 1 day ago</p>
            </div>
          </td>
          <td className="table_item">
            <h2 className="user_name">Tom Cruise</h2>
            <p className="costumer_date"> on 24.05.2019</p>
          </td>
          <td className="table_item">
            <p className="date">May 26, 2019</p>
            <time className="time">6:30 AM</time>
          </td>
          <td className="table_item">
            <p className="priority high">HIGH</p>
          </td>
        </tr>
        <tr className="table_box">
          <td className="table_item_title table_item">
            <img className="user_img" src={UserImg8} alt="user_img" />
            <div className="user_info">
              <h2 className="user_title">Contact Email not Linked</h2>
              <p className="user_date"> Updated 1 day ago</p>
            </div>
          </td>
          <td className="table_item">
            <h2 className="user_name">Tom Cruise</h2>
            <p className="costumer_date"> on 24.05.2019</p>
          </td>
          <td className="table_item">
            <p className="date">May 26, 2019</p>
            <time className="time">6:30 AM</time>
          </td>
          <td className="table_item">
            <p className="priority high">HIGH</p>
          </td>
        </tr>
        <tr className="table_box">
          <td className="table_item_title table_item">
            <img className="user_img" src={UserImg3} alt="user_img" />
            <div className="user_info">
              <h2 className="user_title">Contact Email not Linked</h2>
              <p className="user_date"> Updated 1 day ago</p>
            </div>
          </td>
          <td className="table_item">
            <h2 className="user_name">Tom Cruise</h2>
            <p className="costumer_date"> on 24.05.2019</p>
          </td>
          <td className="table_item">
            <p className="date">May 26, 2019</p>
            <time className="time">6:30 AM</time>
          </td>
          <td className="table_item">
            <p className="priority high">HIGH</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
