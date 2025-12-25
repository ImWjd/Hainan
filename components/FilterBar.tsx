
import React from 'react';
import Icon from './Icon';

const FilterBar: React.FC = () => {
  return (
    <div className="bg-white p-4 mb-4 rounded-sm shadow-sm flex flex-wrap items-center gap-4">
      {/* Media Type Toggle */}
      <div className="flex p-0.5 bg-gray-100 rounded-md border border-gray-200">
        <button className="px-4 py-1.5 text-sm font-medium rounded-md bg-blue-600 text-white shadow-sm">图文</button>
        <button className="px-4 py-1.5 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-200 transition-colors">短视频</button>
      </div>

      {/* Dropdowns */}
      <div className="flex items-center space-x-3">
        <div className="relative group">
          <button className="flex items-center space-x-8 px-4 py-1.5 border border-gray-200 rounded text-sm text-blue-600 hover:bg-gray-50 bg-white">
            <span>全部第三方平台</span>
            <Icon name="ChevronDown" size={14} className="text-gray-400" />
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center space-x-8 px-4 py-1.5 border border-gray-200 rounded text-sm text-blue-600 hover:bg-gray-50 bg-white">
            <span>全部分类</span>
            <Icon name="ChevronDown" size={14} className="text-gray-400" />
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center space-x-8 px-4 py-1.5 border border-gray-200 rounded text-sm text-blue-600 hover:bg-gray-50 bg-white">
            <span>全部主题</span>
            <Icon name="ChevronDown" size={14} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Time Range */}
      <div className="flex items-center space-x-2 ml-auto">
        <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded">近三天</button>
        <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded">近七天</button>
        <button className="px-4 py-1.5 text-sm font-medium bg-blue-600 text-white rounded shadow-sm">近一月</button>
        <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded">自定义</button>
        
        <div className="flex items-center space-x-2 px-3 py-1.5 border border-gray-200 rounded bg-white text-sm text-gray-500">
          <Icon name="Calendar" size={14} className="text-gray-400" />
          <span>2025-11-23</span>
          <span className="text-gray-300">~</span>
          <span>2025-12-23</span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
