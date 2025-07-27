import React from 'react';

const AdminFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div>
          <p>&copy; 2025 Moubarack Voyages - Panel d'Administration</p>
        </div>
        <div className="flex items-center space-x-6">
          <span>Version 1.0.0</span>
          <span>|</span>
          <a href="#" className="hover:text-sky-600 transition-colors">Support</a>
          <span>|</span>
          <a href="#" className="hover:text-sky-600 transition-colors">Documentation</a>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
