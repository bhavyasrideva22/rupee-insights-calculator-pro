
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface CalculationResult {
  depositAmount: number;
  interestEarned: number;
  maturityAmount: number;
  monthlyDeposit: number;
  interestRate: number;
  tenureMonths: number;
  timeline: { month: number; balance: number }[];
}

interface RDChartProps {
  result: CalculationResult;
}

const RDChart: React.FC<RDChartProps> = ({ result }) => {
  const pieData = [
    { name: 'Principal', value: result.depositAmount },
    { name: 'Interest', value: result.interestEarned },
  ];

  const COLORS = ['#245e4f', '#7ac9a7'];

  // Create simplified timeline data for visualization
  const timelineData = [];
  const step = Math.max(1, Math.floor(result.timeline.length / 10)); // Show max 10 points
  
  for (let i = 0; i < result.timeline.length; i += step) {
    timelineData.push({
      month: result.timeline[i].month,
      balance: Math.round(result.timeline[i].balance),
    });
  }
  
  // Add the last month if it's not already included
  if (timelineData[timelineData.length - 1]?.month !== result.timeline[result.timeline.length - 1].month) {
    timelineData.push({
      month: result.timeline[result.timeline.length - 1].month,
      balance: Math.round(result.timeline[result.timeline.length - 1].balance),
    });
  }

  // Generate quarterly breakdown data
  const quartersCount = Math.ceil(result.tenureMonths / 3);
  const quarterlyData = [];
  
  for (let i = 1; i <= quartersCount; i++) {
    const monthIndex = Math.min(i * 3 - 1, result.timeline.length - 1);
    quarterlyData.push({
      quarter: `Q${i}`,
      principal: result.monthlyDeposit * Math.min(i * 3, result.tenureMonths),
      balance: Math.round(result.timeline[monthIndex].balance),
    });
  }

  return (
    <Card className="shadow-sm border-secondary/20">
      <Tabs defaultValue="breakdown">
        <TabsList className="w-full justify-start bg-cream border-b border-secondary/20">
          <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
          <TabsTrigger value="growth">Growth Trajectory</TabsTrigger>
          <TabsTrigger value="quarterly">Quarterly View</TabsTrigger>
        </TabsList>
        
        <CardContent className="p-6">
          <TabsContent value="breakdown" className="mt-0">
            <div className="aspect-[16/9] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius="70%"
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${Math.round(Number(value)).toLocaleString()}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="bg-primary/5 p-3 rounded-lg">
                <p className="text-primary font-medium">Principal Amount</p>
                <p className="text-xl font-bold">₹{result.depositAmount.toLocaleString()}</p>
              </div>
              <div className="bg-secondary/10 p-3 rounded-lg">
                <p className="text-primary font-medium">Interest Earned</p>
                <p className="text-xl font-bold">₹{Math.round(result.interestEarned).toLocaleString()}</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="growth" className="mt-0">
            <div className="aspect-[16/9] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={timelineData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#245e4f" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#7ac9a7" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    label={{ 
                      value: 'Months', 
                      position: 'insideBottomRight', 
                      offset: -10 
                    }} 
                  />
                  <YAxis 
                    tickFormatter={(value) => `₹${value.toLocaleString()}`}
                    label={{ 
                      value: 'Balance', 
                      angle: -90, 
                      position: 'insideLeft' 
                    }} 
                  />
                  <Tooltip formatter={(value) => `₹${Number(value).toLocaleString()}`} />
                  <Area 
                    type="monotone" 
                    dataKey="balance" 
                    stroke="#245e4f" 
                    fillOpacity={1} 
                    fill="url(#colorBalance)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 bg-primary/5 p-3 rounded-lg text-center">
              <p className="text-primary font-medium">Growth Summary</p>
              <p className="text-base">
                Monthly deposits of ₹{result.monthlyDeposit.toLocaleString()} at {result.interestRate}% interest 
                for {result.tenureMonths} months will grow to ₹{Math.round(result.maturityAmount).toLocaleString()}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="quarterly" className="mt-0">
            <div className="aspect-[16/9] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={quarterlyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="quarter" />
                  <YAxis tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                  <Tooltip formatter={(value) => `₹${Number(value).toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="principal" name="Principal Invested" fill="#245e4f" />
                  <Bar dataKey="balance" name="Account Balance" fill="#7ac9a7" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 bg-secondary/10 p-3 rounded-lg text-center">
              <p className="text-primary font-medium">Quarterly Growth</p>
              <p className="text-base">
                See how your investment grows each quarter. The difference between the bars 
                represents the interest accumulated over time.
              </p>
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default RDChart;
