
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { generatePDF } from '@/utils/pdfGenerator';
import { sendEmail } from '@/utils/emailSender';

interface CalculationResult {
  depositAmount: number;
  interestEarned: number;
  maturityAmount: number;
  monthlyDeposit: number;
  interestRate: number;
  tenureMonths: number;
  timeline: { month: number; balance: number }[];
}

interface ExportOptionsProps {
  result: CalculationResult;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ result }) => {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownload = async () => {
    try {
      await generatePDF(result);
      toast.success('PDF downloaded successfully');
    } catch (error) {
      console.error('Failed to download PDF:', error);
      toast.error('Failed to download PDF. Please try again.');
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendEmail(email, name, result);
      toast.success('Email sent successfully');
      setEmailDialogOpen(false);
      setEmail('');
      setName('');
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
      <Button
        onClick={handleDownload}
        className="bg-accent hover:bg-accent/80 text-charcoal"
      >
        <Download className="mr-2 h-4 w-4" />
        Download PDF Report
      </Button>
      
      <Button
        onClick={() => setEmailDialogOpen(true)}
        variant="outline"
        className="border-primary text-primary hover:bg-primary/5"
      >
        <Mail className="mr-2 h-4 w-4" />
        Email Results
      </Button>
      
      <Dialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Email Your Calculation Results</DialogTitle>
            <DialogDescription>
              We'll send a detailed report of your Recurring Deposit calculation to your email address.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSendEmail}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setEmailDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Email'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExportOptions;
