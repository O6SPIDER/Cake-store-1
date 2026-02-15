import { Instagram } from "lucide-react";
import { NAV_LINKS } from "../../types/navs";
import { faTiktok ,faSnapchat} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
export const FooterSection: React.FC = () => {
  const serviceLinks = [
    { label: "Wishlist", id: "wishlist" },
    { label: "How To Order", id: "howto" },
    { label: "Our Story", id: "about" },
    { label: "Privacy Policy", id: "policy" },
  ];

  const [showPolicy, setShowPolicy] = React.useState(false);

  const policyText = `GENERAL
   \nBy placing an order with ƐVIVI BAKERY, you agree to the following terms and conditions. These policies ensure clear communication and a smooth transaction between both parties.\n\nHOW TO ORDER\n• Small Order mustbe placed 3 - 5 days in advance.\n• Large orders must be placed 1 - 2 weeksin advance.\n• Rush orders or same day deliveries attracts an extra fee.\n• Be specific as to how you would like your order. Colours, designs, shape, etc….  You can also send pictures.\n\nDEPOSIT & PAYMENT\n• A non-refundable deposit of 50% is required to secure your booking. Orders are not confirmed until the deposit  has been received. (This only applies to large orders, for small orders the full payment is required.)\n• The balance must be paid before the delivery date.\n• Payment can be via mobile money only.\n\nORDER CHANGE & CANCELLATIONS\n• Charges to your order  (flavour, size, design) must be made at least 3 days before delivery date.\n• If order  is cancelled a week to the delivery date 10% of the full payment will be refunded.\n• Orders cancelled 3 days to the delivery date are not refundable.\n• Orders that are not picked up or delivered on the agreed date will not be refunded.\n\nDELIVERY & PICKUP\n• Delivery is available for an additional fee based on your location.\n• Our deliveries are made with Yango delivery.\n• Once the cake is delivered or picked up 3VIVI BAKERY is not responsible for any damage.\n\nCUSTOM DESIGNS\n• While we do our best to match design requests, minor variations may occur due to handcrafting nature of our product.\n• Colors and decorations may vary slightly due to ingredient availability and artistic discretion.`;

  const paymentImages = [
    { src: "https://i.pinimg.com/1200x/e3/ed/cf/e3edcf4f2ae16ddee78bd8a34650ff8e.jpg", alt: "MTN Momo" },
    { src: "https://i.pinimg.com/1200x/59/72/4e/59724edc2f0780c8d5127f6d0e8e94cb.jpg", alt: "AirtelTigo Momo" },
    { src: "https://i.pinimg.com/736x/34/3d/52/343d52baaf6aa79f577fd74bd7d54a7b.jpg", alt: "Telcel Momo" },
    { src: "https://i.pinimg.com/1200x/c6/a1/fe/c6a1fe7033dc3c76ec28d13c3c7699c2.jpg", alt: "Mastercard" },
  ];

  return (
    <footer className="bg-rose-600 text-white pt-16 pb-12 rounded-t-[3rem] shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo & About */}
        <div className="flex flex-col items-start">
          <img
            src="evivilogo.jpg"
            alt="3vivi bakery Logo"
            className="h-14 w-auto rounded-xl shadow-lg"
          />
          <p className="text-sm text-rose-100 mt-4 leading-relaxed">
            Handmade cakes & pastries from the heart of Accra. Love at first bite. 🎂
          </p>
          <div className="mt-6 flex items-center gap-5">
            <a
              href="https://www.instagram.com/3vivi_bakery"
              aria-label="Instagram"
              className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://snapchat.com/t/yFVelzpX"
              aria-label="Twitter"
              className="p-3 bg-white/20 rounded-full hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-110"
            >
            <FontAwesomeIcon icon={faSnapchat}  className="w-5 h-5" />
            </a>
            <a  href="https://www.tiktok.com/@3vivi_bakery"
              aria-label="Twitter"
              className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-rose-600 transition duration-300">
              <FontAwesomeIcon icon={faTiktok} className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold text-xl mb-5">Quick Links</h4>
          <ul className="space-y-3 text-rose-100">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-xl mb-5">Services</h4>
          <ul className="space-y-3 text-rose-100">
            {serviceLinks.map((link) => (
              <li key={link.id}>
                {link.label === "Privacy Policy" ? (
                  <button
                    type="button"
                    className="hover:text-white transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer p-0 text-inherit"
                    onClick={() => setShowPolicy(true)}
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={`#${link.id}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Payment Methods */}
        <div>
          <h4 className="font-bold text-xl mb-5">Payment Methods</h4>
          <div className="mt-2 flex flex-wrap gap-4">
            {paymentImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="h-10 w-auto rounded-lg bg-white shadow-md p-1"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {showPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2 sm:px-4">
          <div className="bg-white text-slate-800 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg p-4 sm:p-6 md:p-8 relative animate-fade-in mx-auto">
            <button
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-rose-600 text-xl sm:text-2xl font-bold hover:text-rose-800"
              onClick={() => setShowPolicy(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-center text-rose-600">POLICIES AND TERMS AND CONDITIONS</h2>
            <pre className="whitespace-pre-wrap text-xs sm:text-sm max-h-[50vh] sm:max-h-[60vh] overflow-y-auto bg-rose-50 rounded-lg p-2 sm:p-4 border border-rose-100">
              {policyText}
            </pre>
          </div>
        </div>
      )}

      {/* Bottom Note */}
      <div className="border-t border-white/30 mt-16 pt-8 text-center text-rose-100 text-sm">
        &copy; {new Date().getFullYear()} <span className="font-bold">Ɛvivi Bakery</span> - All rights reserved. | Built by <a href="https://hexratech.vercel.app" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white transition-colors duration-200">Hexratech</a>
      </div>
    </footer>
  );
};
