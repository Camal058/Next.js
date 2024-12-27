import styled from 'styled-components';

const CardContainer = styled.div`
  background: linear-gradient(135deg,rgb(16, 3, 255) 0%, #7C3AED 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.1;
  }
`;

interface CreditCardProps {
  balance: string;
  number: string;
  holder: string;
  valid: string;
  type: string;
}

export default function CreditCard({ balance, number, holder, valid }: CreditCardProps) {
  return (
    <CardContainer>
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-sm text-white/80">Balance</p>
          <p className="font-medium">{balance}</p>
        </div>
        <div className="text-right">
          <img src="accounts/chip-card.png"/>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-white/80">CARD HOLDER</p>
            <p className="font-medium">{holder}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-white/80">VALID THRU</p>
            <p className="font-medium">{valid}</p>
          </div>
        </div>
      <div className="flex justify-between items-end">
        <div>
        <p className="text-xl font-medium">{number}</p>
        </div>
        <div className="text-right">
        <img src="accounts/master-card.png"/>
        </div>
      </div>
    </div>
    </CardContainer>
  );
}