import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f]">
      {/* CTA Section */}
      <div className="bg-[#000000] py-16 md:py-24">
        <div className="max-w-[980px] mx-auto px-4 text-center">
          <h2 className="text-[#f5f5f7] text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-balance">
            Get iPhone 17 Pro from ₹1,44,900.00
          </h2>
          <p className="text-[#86868b] text-lg mb-8 max-w-2xl mx-auto">
            Trade in your current device and get credit towards a new iPhone. Apple Trade In is good for you and the
            planet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="bg-[#0071e3] hover:bg-[#0077ed] text-[#f5f5f7] px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Buy
            </Link>
            <Link href="#" className="text-[#2997ff] hover:underline text-lg font-medium flex items-center gap-1">
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-8 border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto px-4">
          <p className="text-xs text-[#6e6e73] mb-4">
            * Pricing includes GST. Trade-in values will vary based on the condition, year, and configuration of your
            trade-in device. You must be at least 18 years old to be eligible to trade in for credit. Trade-in value may
            be applied towards qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is
            based on receipt of a qualifying device matching the description provided when estimate was made. Apple
            reserves the right to refuse or limit quantity of any device for any reason.
          </p>
          <p className="text-xs text-[#6e6e73]">
            Apple Intelligence will be available as a free software update. The first set of Apple Intelligence features
            will be available in beta next month as part of iOS 18.1, iPadOS 18.1, and macOS Sequoia 15.1, with more
            features rolling out in the coming months. It will initially be available on iPhone 15 Pro, iPhone 15 Pro
            Max, and iPad and Mac with M1 and later, with device and Siri language set to English (US).
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="py-8">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div>
              <h4 className="text-xs font-semibold text-[#1d1d1f] mb-3">Shop and Learn</h4>
              <ul className="space-y-2">
                {["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="#" className="text-xs text-[#424245] hover:underline">
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1d1d1f] mb-3">Services</h4>
              <ul className="space-y-2">
                {[
                  "Apple Music",
                  "Apple TV+",
                  "Apple Fitness+",
                  "Apple News+",
                  "Apple Arcade",
                  "iCloud",
                  "Apple One",
                  "Apple Card",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs text-[#424245] hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1d1d1f] mb-3">Apple Store</h4>
              <ul className="space-y-2">
                {[
                  "Find a Store",
                  "Genius Bar",
                  "Today at Apple",
                  "Apple Camp",
                  "Apple Trade In",
                  "Financing",
                  "Order Status",
                  "Shopping Help",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs text-[#424245] hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1d1d1f] mb-3">For Business</h4>
              <ul className="space-y-2">
                {["Apple and Business", "Shop for Business"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs text-[#424245] hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-semibold text-[#1d1d1f] mb-3 mt-6">For Education</h4>
              <ul className="space-y-2">
                {["Apple and Education", "Shop for Education"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs text-[#424245] hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#1d1d1f] mb-3">Apple Values</h4>
              <ul className="space-y-2">
                {["Accessibility", "Environment", "Privacy", "Supplier Responsibility"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs text-[#424245] hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-semibold text-[#1d1d1f] mb-3 mt-6">About Apple</h4>
              <ul className="space-y-2">
                {[
                  "Newsroom",
                  "Apple Leadership",
                  "Career Opportunities",
                  "Investors",
                  "Ethics & Compliance",
                  "Events",
                  "Contact Apple",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs text-[#424245] hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-[#d2d2d7] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#6e6e73]">Copyright © 2025 Apple Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((item, index) => (
                <span key={item} className="flex items-center gap-4">
                  <Link href="#" className="text-xs text-[#424245] hover:underline">
                    {item}
                  </Link>
                  {index < 4 && <span className="text-[#d2d2d7]">|</span>}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#6e6e73]">India</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
