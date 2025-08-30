import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="w-full h-[370px] bg-[#EBF0F7] dark:bg-[#161616] relative overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 dark:via-bg-[#161616] to-transparent animate-[shimmer_2s_infinite]"></div>

      {/* Content placeholder */}
      <div className="p-6 h-full flex flex-col justify-between">
        <div className="space-y-4">
          <div className="h-4 bg-[#e6ebf4] dark:bg-[#111111] rounded-lg w-3/4"></div>
          <div className="h-4 bg-[#e6ebf4] dark:bg-[#111111] rounded-lg w-1/2"></div>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="h-6 bg-[#e6ebf4] dark:bg-[#111111] rounded-full w-16"></div>
          <div className="h-6 bg-[#e6ebf4] dark:bg-[#111111] rounded-full w-20"></div>
          <div className="h-6 bg-[#e6ebf4] dark:bg-[#111111] rounded-full w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;