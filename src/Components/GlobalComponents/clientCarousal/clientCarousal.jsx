import '../clientCarousal/clientCarousal.css';

import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from './logo';

const ClientCarousel = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  return (
    <div className='client-carousel'>
      <div className="trusted-by">
        <p>Trusted By</p>
      </div>
      <div className="logo-container">
        {logos.concat(logos.slice(0, 3)).map((Logo, index) => (
          <div key={index} className="logo-wrapper">
            <Logo className="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;