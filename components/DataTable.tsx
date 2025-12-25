
import React from 'react';
import Icon from './Icon';
import { MOCK_ARTICLES } from '../constants';

const DataTable: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header / Toolbar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-gray-700 font-medium">
            <Icon name="Users" size={18} className="text-gray-400" />
            <span>账号数据</span>
          </button>
          <button className="flex items-center space-x-2 text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
            <Icon name="FileText" size={18} />
            <span>作品数据</span>
            <Icon name="ChevronDown" size={14} className="ml-1" />
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-xs text-gray-400">
            自发布后，3天内每4小时更新，3至7天，每天更新 | 数据说明
            <Icon name="Info" size={12} className="inline ml-1" />
          </span>
          <div className="relative">
            <input 
              type="text" 
              placeholder="请输入搜索关键词" 
              className="pl-4 pr-10 py-1.5 border border-gray-200 rounded w-64 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <Icon name="Search" size={16} className="absolute right-3 top-2 text-gray-400" />
          </div>
          <button className="px-4 py-1.5 text-sm border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors">重置</button>
          <button className="flex items-center space-x-1 px-4 py-1.5 text-sm border border-blue-200 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors">
            <Icon name="Download" size={14} />
            <span>数据导出</span>
          </button>
        </div>
      </div>

      {/* Actual Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
            <tr>
              <th className="p-4 w-10"><input type="checkbox" className="rounded" /></th>
              <th className="p-4 font-medium w-12 text-center">#</th>
              <th className="p-4 font-medium">作品内容</th>
              <th className="p-4 font-medium">
                <div className="flex items-center cursor-pointer hover:text-blue-600">
                  阅读数 <Icon name="ArrowUpDown" size={12} className="ml-1" />
                </div>
              </th>
              <th className="p-4 font-medium">
                <div className="flex items-center cursor-pointer hover:text-blue-600">
                  点赞数 <Icon name="ArrowUpDown" size={12} className="ml-1" />
                </div>
              </th>
              <th className="p-4 font-medium">
                <div className="flex items-center cursor-pointer hover:text-blue-600">
                  评论数 <Icon name="ArrowUpDown" size={12} className="ml-1" />
                </div>
              </th>
              <th className="p-4 font-medium">
                <div className="flex items-center cursor-pointer hover:text-blue-600">
                  转发数 <Icon name="ArrowUpDown" size={12} className="ml-1" />
                </div>
              </th>
              <th className="p-4 font-medium">
                <div className="flex items-center cursor-pointer hover:text-blue-600">
                  发布时间 <Icon name="ArrowUpDown" size={12} className="ml-1" />
                </div>
              </th>
              <th className="p-4 font-medium">
                <div className="flex items-center cursor-pointer hover:text-blue-600">
                  分值 <Icon name="ArrowUpDown" size={12} className="ml-1" />
                </div>
              </th>
              <th className="p-4 font-medium">操作</th>
              <th className="p-4 font-medium">备注</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {MOCK_ARTICLES.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4"><input type="checkbox" className="rounded" /></td>
                <td className="p-4 text-center text-gray-400">{index + 1}</td>
                <td className="p-4">
                  <div className="flex space-x-3">
                    <img src={item.thumbnail} alt="" className="w-20 h-12 object-cover rounded flex-shrink-0" />
                    <div className="flex flex-col space-y-1">
                      <h3 className="text-gray-800 font-medium line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-xs">
                        <span className="text-gray-400">{item.author}</span>
                        <span className="text-gray-400">{item.platform}</span>
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-orange-400">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4 font-medium text-gray-700">{item.reads}</td>
                <td className="p-4 text-gray-700">{item.likes}</td>
                <td className="p-4 text-gray-700">{item.comments}</td>
                <td className="p-4 text-gray-700">{item.shares}</td>
                <td className="p-4 text-gray-500 whitespace-nowrap">{item.publishTime}</td>
                <td className="p-4 font-bold text-gray-800">{item.score}</td>
                <td className="p-4">
                  <div className="flex items-center space-x-4">
                    <button className="text-blue-500 hover:text-blue-700 font-medium">添加标签</button>
                    <button className="text-blue-500 hover:text-blue-700 font-medium">赋分</button>
                  </div>
                </td>
                <td className="p-4 text-gray-400">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
