
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ArrowRight, IndianRupee } from 'lucide-react';
import RDChart from './RDChart';
import ExportOptions from './ExportOptions';

interface CalculationResult {
  depositAmount: number;
  interestEarned: number;
  maturityAmount: number;
  monthlyDeposit: number;
  interestRate: number;
  tenureMonths: number;
  timeline: { month: number; balance: number }[];
}

const RDCalculator = () => {
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(5000);
  const [interestRate, setInterestRate] = useState<number>(7);
  const [tenureMonths, setTenureMonths] = useState<number>(36);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleMonthlyDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setMonthlyDeposit(value);
    }
  };

  const calculateRD = () => {
    const timeline: { month: number; balance: number }[] = [];
    let totalDeposit = monthlyDeposit * tenureMonths;
    
    // Calculate using quarterly compounding
    const r = interestRate / 400; // quarterly rate
    let maturity = 0;
    
    for (let month = 1; month <= tenureMonths; month++) {
      const n = Math.floor((tenureMonths - month + 1) / 3); // number of quarters
      const quarterlyFactor = Math.pow(1 + r, n);
      
      // For simplicity, we're using a formula that works well for RD calculations
      const monthlyContribution = monthlyDeposit * quarterlyFactor;
      maturity += monthlyContribution;
      
      timeline.push({
        month,
        balance: month * monthlyDeposit + (maturity - (month * monthlyDeposit))
      });
    }
    
    const interestEarned = maturity - totalDeposit;
    
    setResult({
      depositAmount: totalDeposit,
      interestEarned,
      maturityAmount: totalDeposit + interestEarned,
      monthlyDeposit,
      interestRate,
      tenureMonths,
      timeline
    });
  };

  // Calculate on initial render and when inputs change
  useEffect(() => {
    calculateRD();
  }, [monthlyDeposit, interestRate, tenureMonths]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 animate-fade-in">
      <Card className="lg:col-span-1 shadow-lg border-secondary/20">
        <CardHeader className="bg-primary text-white rounded-t-lg">
          <CardTitle className="flex items-center">
            <IndianRupee className="mr-2 h-5 w-5" />
            Calculate Recurring Deposit
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="monthlyDeposit">Monthly Deposit</Label>
                <div className="flex items-center text-primary font-medium">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  {monthlyDeposit.toLocaleString()}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-primary" />
                <Input
                  id="monthlyDeposit"
                  type="number"
                  value={monthlyDeposit}
                  onChange={handleMonthlyDepositChange}
                  className="border-secondary/30 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="interestRate">Interest Rate</Label>
                <span className="text-primary font-medium">{interestRate}%</span>
              </div>
              <Slider
                id="interestRate"
                min={1}
                max={15}
                step={0.1}
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-charcoal/70">
                <span>1%</span>
                <span>15%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="tenureMonths">Time Period</Label>
                <span className="text-primary font-medium">{tenureMonths} months</span>
              </div>
              <Slider
                id="tenureMonths"
                min={3}
                max={120}
                step={3}
                value={[tenureMonths]}
                onValueChange={(value) => setTenureMonths(value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-charcoal/70">
                <span>3 months</span>
                <span>10 years</span>
              </div>
            </div>

            <Button 
              onClick={calculateRD} 
              className="w-full bg-accent hover:bg-accent/80 text-charcoal"
            >
              Calculate <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2 shadow-lg border-secondary/20">
        <CardHeader className="bg-secondary text-white rounded-t-lg">
          <CardTitle>Your Recurring Deposit Returns</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          {result && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-cream p-4 rounded-lg border border-secondary/20">
                  <p className="text-charcoal/60 text-sm">Total Investment</p>
                  <p className="text-2xl font-bold text-primary flex items-center">
                    <IndianRupee className="h-5 w-5 mr-1" />
                    {result.depositAmount.toLocaleString()}
                  </p>
                </div>
                <div className="bg-cream p-4 rounded-lg border border-secondary/20">
                  <p className="text-charcoal/60 text-sm">Interest Earned</p>
                  <p className="text-2xl font-bold text-primary flex items-center">
                    <IndianRupee className="h-5 w-5 mr-1" />
                    {Math.round(result.interestEarned).toLocaleString()}
                  </p>
                </div>
                <div className="bg-cream p-4 rounded-lg border border-secondary/20">
                  <p className="text-charcoal/60 text-sm">Maturity Amount</p>
                  <p className="text-2xl font-bold text-primary flex items-center">
                    <IndianRupee className="h-5 w-5 mr-1" />
                    {Math.round(result.maturityAmount).toLocaleString()}
                  </p>
                </div>
              </div>

              <RDChart result={result} />
              
              <ExportOptions result={result} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RDCalculator;
