
import React from 'react';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import StatsSection from './components/StatsSection';
import DataTable from './components/DataTable';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f7f8fa] flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 px-8 py-6 max-w-[1600px] mx-auto w-full">
        {/* Top Filters Area */}
        <FilterBar />

        {/* Statistical Overview */}
        <StatsSection />

        {/* Content Section with Table */}
        <div className="mt-8">
          <DataTable />
        </div>
        
        {/* Optional Footer or Pagination spacer */}
        <div className="h-12"></div>
      </main>
    </div>
  );
};

export default App;
