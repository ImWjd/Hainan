
import React from 'react';
import Icon from './Icon';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 h-14 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Icon name="BarChart3" className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight">垂迹</span>
        </div>
        
        <div className="flex items-center h-14">
          <a href="#" className="flex items-center space-x-2 px-6 text-gray-600 hover:text-blue-600 font-medium h-full border-b-2 border-transparent">
            <Icon name="Home" size={18} />
            <span>首页</span>
          </a>
          <a href="#" className="flex items-center space-x-2 px-6 text-blue-600 font-medium h-full border-b-2 border-blue-600 bg-blue-50/30">
            <Icon name="LayoutGrid" size={18} />
            <span>平台数据</span>
          </a>
          <a href="#" className="flex items-center space-x-2 px-6 text-gray-600 hover:text-blue-600 font-medium h-full border-b-2 border-transparent">
            <Icon name="Settings" size={18} />
            <span>分组配置</span>
          </a>
          <a href="#" className="flex items-center space-x-2 px-6 text-gray-600 hover:text-blue-600 font-medium h-full border-b-2 border-transparent">
            <Icon name="Palette" size={18} />
            <span>主题配置</span>
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">wjd</div>
          <span className="text-sm">wjd</span>
          <Icon name="ChevronDown" size={14} className="text-gray-400" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
