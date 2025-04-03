
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

export const sendEmail = async (
  email: string,
  name: string,
  result: CalculationResult
): Promise<void> => {
  try {
    // In a real implementation, we would use an email service API
    // Since we don't have an actual backend, we'll simulate sending an email
    
    console.log('Sending email to:', email);
    console.log('Recipient name:', name);
    console.log('With calculation data:', result);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check if email looks valid (simple validation)
    if (!email.includes('@') || !email.includes('.')) {
      throw new Error('Invalid email format');
    }
    
    console.log('Email sent successfully (simulated)');
    
    return Promise.resolve();
  } catch (error) {
    console.error('Error sending email:', error);
    toast.error('Could not send email. Please check your email address and try again.');
    return Promise.reject(error);
  }
};
