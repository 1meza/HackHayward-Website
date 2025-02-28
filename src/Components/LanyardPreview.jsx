// src/Components/LanyardPreview.jsx
/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import Lanyard from './Lanyard';

export default function LanyardPreview() {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold font-exo2 mb-4">Your HackHayward Virtual Badge</h2>
      <p className="text-white/80 mb-4 font-grotesk">
        Here&apos;s a preview of your event badge. Drag to interact.
      </p>
      
      <div className="h-[400px] bg-gradient-to-b from-[#30252d]/50 to-[#261e24]/50 rounded-lg">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl mb-2">📛</div>
              <p>Loading badge...</p>
            </div>
          </div>
        }>
          <Lanyard />
        </Suspense>
      </div>
      
      <div className="mt-4 text-center text-sm text-white/60 font-grotesk">
        Drag to rotate • Your physical badge will be provided at check-in
      </div>
    </div>
  );
}