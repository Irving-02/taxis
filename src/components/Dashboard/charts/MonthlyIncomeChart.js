import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";
import axios from "axios";
import MethodGet from "../../../config/Service";
const MonthlyIncomeChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MethodGet("/grafica-mensual");
        const formattedData = response.data.map((item) => ({
          fecha: new Date(item.fecha).toLocaleDateString("es-MX", {
            day: "2-digit",
            month: "short",
          }),
          total: item.total,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='fecha' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='total' stroke='#8884d8' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MonthlyIncomeChart;
