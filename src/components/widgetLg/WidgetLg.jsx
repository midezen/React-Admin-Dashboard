import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/15269985/pexels-photo-15269985.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mide Zen</span>
          </td>
          <td className="widgetLgDate">25th March 2023</td>
          <td className="widgetLgAmount">$321.34</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/15269985/pexels-photo-15269985.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mide Zen</span>
          </td>
          <td className="widgetLgDate">25th March 2023</td>
          <td className="widgetLgAmount">$321.34</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/15269985/pexels-photo-15269985.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mide Zen</span>
          </td>
          <td className="widgetLgDate">25th March 2023</td>
          <td className="widgetLgAmount">$321.34</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/15269985/pexels-photo-15269985.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mide Zen</span>
          </td>
          <td className="widgetLgDate">25th March 2023</td>
          <td className="widgetLgAmount">$321.34</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/15269985/pexels-photo-15269985.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mide Zen</span>
          </td>
          <td className="widgetLgDate">25th March 2023</td>
          <td className="widgetLgAmount">$321.34</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
