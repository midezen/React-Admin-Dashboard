import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3,914</span>
          <span className="featuredMoneyRate">
            -12.7 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,287</span>
          <span className="featuredMoneyRate">
            -10.8 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,371</span>
          <span className="featuredMoneyRate">
            +2.8 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
