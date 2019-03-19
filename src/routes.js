import { Router } from 'express';
import matchOrderData from './data/matchOrderList.json'
import price from './data/price.json'
import buyOrder from './data/buyOrder.json'
import sellOrder from './data/sellOrder.json'
import depthChart from './data/depthChart.json'
import priceChart from './data/priceChart.json'
const routes = Router();

/**
 * API
 * getOrderList,
 * getPrice,
 * getOrder
 * getChart
 */
routes.get('/order/getOrderList', (req, res) => {
  if (res) {
    res.json({ "data": matchOrderData, "message": 'ok' });
  }
});

routes.get('/order/getPrice', (req, res) => {
  if (res) {
    res.json({ "data": price, "message": 'ok' });
  }
});

routes.get('/order/getOrder', (req, res) => {
  if (res) {
    res.json({ "buyData": buyOrder, "sellData": sellOrder, "message": 'ok', });
  }
});

// routes.get('/order/getSellList', (req, res) => {
//   if (res) {
//     res.json({ "data": sellOrder, "message": 'ok' });
//   }
// });

routes.get('/order/getChart', (req, res) => {
  if (res) {
    res.json({
      "depthData": depthChart, "message": 'ok',
      "priceData": priceChart,
    });
  }
});

export default routes;
