
import React from 'react';
import Icon from './Icon';
import { STATS_DATA } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <div className="flex flex-col mb-4">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-4">
        {STATS_DATA.map((stat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-sm shadow-sm flex flex-col items-center justify-center border-t border-gray-100">
            <div className="flex items-center space-x-1 text-gray-400 mb-2">
              <Icon name={stat.icon} size={16} />
              <span className="text-xs font-medium whitespace-nowrap">{stat.label}</span>
            </div>
            <div className={`text-2xl font-bold ${stat.colorClass}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-400">
          说明：此栏数据与作品信息更新频率一致，略提前于账号信息数据
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
