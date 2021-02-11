import React,{useState, useEffect} from "react";
import axios from 'axios'
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  const [floodCases, setFloodCases]=useState(0);
  const [fireCases, setFireCases]=useState(0);
  const [accident, setAccident]=useState(0);
  const [zonAFire, setZoneAFire] = useState(0)
  const [zonBFire, setZoneBFire] = useState(0)
  const [zonCFire, setZoneCFire] = useState(0)
  const [zonAFlood, setZoneAFlood] = useState(0)
  const [zonBFlood, setZoneBFlood] = useState(0)
  const [zonCFlood, setZoneCFlood] = useState(0)
  const [zonAAccident, setZoneAAccicent] = useState(0)
  const [zonBAccident, setZoneBAccident] = useState(0)
  const [zonCAccident, setZoneCAccident] = useState(0)
  
  const [timer, setTimer] = useState(0)
  let events = ['fire','flood']
  let day1 = 1000 * 3600 * 24;
  let today = new Date();
  
  let date1= new Date("10/30/2020, 9:59:12")
  let date2= new Date().toLocaleString()
  let difftime= date2- date1
  let diffdate = Math.round((today.getTime() - date1.getTime())/day1).toFixed(0)
  let diffdate1 =(today.getTime() - date1.getTime())/day1
  
  const handleTimer = () =>{
  //this.inInterval2= setInterval( ()=>this.tick2(), 1000);
      setInterval(
        () => setTimer(new Date().toLocaleString()),
        1000
      )};
      useEffect(()=>handleTimer(),[])
      const Loader=()=>{
      setInterval(()=>    axios.get('https://kd-sema.herokuapp.com/api/v1/analytics')
          .then(res=>{
              setFloodCases(res.data['flood'])
              setFireCases(res.data['fire'])
              setAccident(res.data.accident)
  
      
          }).catch(err=>{console.log(err)}),1000)
      }
  
      useEffect(()=>  Loader,[])
  useEffect(()=>{
  
      axios.get('https://kd-sema.herokuapp.com/api/v1/analytics')
      .then(res=>{
           setFloodCases(res.data['flood'])
          setFireCases(res.data['fire'])
          setAccident(res.data.accident)
       
      }).catch(err=>{console.log(err)})
  
      axios.get('https://kd-sema.herokuapp.com/api/v1/analytics/zonalfire')
      .then(res=>{
           setZoneAFire(res.data.zoneAFire)
          setZoneBFire(res.data.zoneBFire)
          setZoneCFire(res.data.zoneCFire)
       
      }).catch(err=>{console.log(err)})
      axios.get('https://kd-sema.herokuapp.com/api/v1/analytics/zonalFlood')
      .then(res=>{
           setZoneAFlood(res.data.zoneAFlood)
          setZoneBFlood(res.data.zoneBFlood)
          setZoneCFlood(res.data.zoneCFlood)
       
      }).catch(err=>{console.log(err)})
      axios.get('https://kd-sema.herokuapp.com/api/v1/analytics/zonalAccident')
      .then(res=>{
           setZoneAAccicent(res.data.zoneAAccident)
          setZoneBAccident(res.data.zoneBAccident)
          setZoneCAccident(res.data.zoneCAccident)
       
      }).catch(err=>{console.log(err)})
  
  },
      [])

 const  data = {
        labels: ["Fire", "Accident", "Flood"],
        series: [[fireCases, accident, floodCases]]
      }


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fire</p>
              <h3 className={classes.cardTitle}>
                {fireCases}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
             {/*}   <Danger>
                  <Warning />
                </Danger>
                */}
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  View all reports
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Flood</p>
              <h3 className={classes.cardTitle}>
                {floodCases}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
             {/*}   <Danger>
                  <Warning />
                </Danger>
                */}
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  View all reports
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Accidents</p>
              <h3 className={classes.cardTitle}>
                {accident}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
             {/*}   <Danger>
                  <Warning />
                </Danger>
                */}
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  View all reports
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Reports</p>
              <h3 className={classes.cardTitle}>53</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={data}
                type="Line"
                options={dailySalesChart.options}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Event Reports</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 
                                  </span>{" "}
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated x minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
     {/*}   <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>*/}
  
      </GridContainer>
      <GridContainer>
        {/*<GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                )
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                )
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                )
              }
            ]}
          />
          </GridItem>*/}
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Events Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New Events
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Location", "Event", "Cause"]}
                tableData={[
                  ["1", "KD SOuth", "Flood", "Rain"],
                
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
