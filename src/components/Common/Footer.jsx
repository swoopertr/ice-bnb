
import './footerStyle.css';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
    <>
    <div className="ice-bnb-footer">
      <div className="ice-bnb-footer-text">
        <h2>Support</h2>
        <ul>
          <li><a href="#">Help Centre</a></li>
          <li><a href="#">IceCover</a></li>
          <li><a href="#">Anti-discrimination</a></li>
          <li><a href="#">Disability support</a></li>
          <li><a href="#">Cancellation options</a></li>
          <li><a href="#">Report neighbourhood concern</a></li>
        </ul>
      </div>

      <div className="ice-bnb-footer-text">
        <h2>Hosting</h2>
        <ul>
          <li><a href="#">icebnb your home</a></li>
          <li><a href="#">icebnb your experience</a></li>
          <li><a href="#">icebnb your service</a></li>
          <li><a href="#">IceCover for Hosts</a></li>
          <li><a href="#">Hosting resources</a></li>
          <li><a href="#">Community forum</a></li>
          <li><a href="#">Hosting responsibly</a></li>
          <li><a href="#">Join a free hosting class</a></li>
          <li><a href="#">Find a co-host</a></li>
        </ul>
      </div>

      <div className="ice-bnb-footer-text">
        <h2>IceBnb</h2>
        <ul>
          <li><a href="#">2025 Summer Release</a></li>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Gift cards</a></li>
          <li><a href="#">Icebnb.org emergency stays</a></li>
        </ul>
      </div>
    </div>
    <div className="ice-bnb-footer-bottom">
      <div className="ice-bnb-footer-left">
        <p>© 2025 IceBnb, Inc. All rights reserved.</p>
      </div>
      <div className="ice-bnb-footer-right">
        <a href="https://www.facebook.com/youricebnb"  target="_blank"><FacebookIcon/></a>
        <a href="https://www.twitter.com/youricebnb"  target="_blank"><XIcon /></a>
        <a href="https://www.instagram.com/youricebnb"  target="_blank"><InstagramIcon /></a>
      </div>
      </div>
</>
          
  );
}