import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { useState, useEffect, useMemo } from 'react'
import { userRequest } from '../../requestMethod'


const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(() => (
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  ), []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        // console.log(res.data);
        res.data.map(item => 
          setUserStats(prev => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total }
          ])           
        );
      } catch(err) {
        console.log(err.message);
      }
    }
    getStats();
  }, [MONTHS]);

  // console.log(userStats)

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;


