
import { toast } from 'sonner';

interface CalculationResult {
  depositAmount: number;
  interestEarned: number;
  maturityAmount: number;
  monthlyDeposit: number;
  interestRate: number;
  tenureMonths: number;
  timeline: { month: number; balance: number }[];
}

export const generatePDF = async (result: CalculationResult): Promise<void> => {
  try {
    // In a real implementation, we would use a library like jsPDF or pdfmake
    // Since we can't install new packages, we'll simulate PDF generation
    
    console.log('Generating PDF with data:', result);
    
    // Create a simple data URL that would represent the PDF
    // This is just for demonstration - in a real app, we'd generate a proper PDF
    const pdfContent = `
      Rupee Insights: Recurring Deposit Calculator
      
      CALCULATION SUMMARY
      
      Investment Details:
      Monthly Deposit: ₹${result.monthlyDeposit.toLocaleString()}
      Interest Rate: ${result.interestRate}%
      Time Period: ${result.tenureMonths} months
      
      Results:
      Total Principal: ₹${result.depositAmount.toLocaleString()}
      Total Interest Earned: ₹${Math.round(result.interestEarned).toLocaleString()}
      Maturity Amount: ₹${Math.round(result.maturityAmount).toLocaleString()}
      
      Generated on ${new Date().toLocaleDateString()}
    `;
    
    // Convert to base64 to simulate a PDF file
    const encodedData = btoa(pdfContent);
    const dataUrl = `data:application/pdf;base64,${encodedData}`;
    
    // Create a download link and trigger it
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `RD_Calculator_Report_${new Date().toISOString().split('T')[0]}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('PDF generated and download triggered');
    
    return Promise.resolve();
  } catch (error) {
    console.error('Error generating PDF:', error);
    toast.error('Could not generate PDF. Please try again.');
    return Promise.reject(error);
  }
};
