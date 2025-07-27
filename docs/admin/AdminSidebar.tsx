import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Plane, 
  MapPin,
  Calendar,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Briefcase
} from "lucide-react";

interface AdminSidebarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
  onLogout?: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  activeItem = 'dashboard', 
  onItemClick,
  onLogout 
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'pelerins', label: 'Gestion Clients', icon: Users },
    { id: 'billets', label: 'Billets Avion', icon: Plane },
    { id: 'voyages', label: 'Voyages', icon: MapPin },
    { id: 'reservations', label: 'Réservations', icon: Calendar },
    { id: 'types', label: 'Types Voyages', icon: Briefcase },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  const handleItemClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  };

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} bg-gradient-to-b from-sky-900 to-sky-800 text-white transition-all duration-300 min-h-screen shadow-xl`}>
      {/* Header */}
      <div className="p-4 border-b border-sky-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-white">Admin Panel</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg bg-sky-700 hover:bg-sky-600 transition-colors"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    activeItem === item.id
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'text-sky-100 hover:bg-sky-700 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User section */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="border-t border-sky-700 pt-4">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 p-3 rounded-lg text-sky-100 hover:bg-sky-700 hover:text-white transition-colors"
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="font-medium">Déconnexion</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
