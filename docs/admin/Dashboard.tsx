import React from 'react';
import { 
  Users, 
  Plane, 
  Calendar, 
  TrendingUp, 
  MapPin,
  Clock,
  DollarSign,
  UserCheck
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Pèlerins',
      value: '1,234',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Voyages Actifs',
      value: '45',
      change: '+8%',
      trend: 'up',
      icon: MapPin,
      color: 'bg-green-500'
    },
    {
      title: 'Billets Vendus',
      value: '856',
      change: '+15%',
      trend: 'up',
      icon: Plane,
      color: 'bg-purple-500'
    },
    {
      title: 'Revenus Mensuel',
      value: '125.6M FCFA',
      change: '+23%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-rose-500'
    }
  ];

  const recentBookings = [
    { id: '001', client: 'Amadou Diallo', type: 'Hajj', date: '2025-03-15', status: 'confirmé' },
    { id: '002', client: 'Fatou Sow', type: 'Oumrah', date: '2025-02-20', status: 'en attente' },
    { id: '003', client: 'Moussa Ba', type: 'Ziar Fez', date: '2025-04-10', status: 'confirmé' },
    { id: '004', client: 'Aïssatou Thiam', type: 'Dubai Tourism', date: '2025-05-05', status: 'confirmé' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bienvenue dans votre espace d'administration Moubarack Voyages</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp size={16} className="text-green-500 mr-1" />
                    <span className="text-sm text-green-500 font-medium">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">vs le mois dernier</span>
                  </div>
                </div>
                <div className={`${stat.color} rounded-lg p-3`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Réservations Récentes</h3>
              <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                Voir tout
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                      <UserCheck size={20} className="text-sky-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{booking.client}</p>
                      <p className="text-sm text-gray-500">{booking.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-900">{booking.date}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      booking.status === 'confirmé' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Actions Rapides</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center p-4 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors">
                <Users className="text-sky-600 mb-2" size={24} />
                <span className="text-sm font-medium text-gray-900">Nouveau Pèlerin</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <Calendar className="text-green-600 mb-2" size={24} />
                <span className="text-sm font-medium text-gray-900">Nouveau Voyage</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <Plane className="text-purple-600 mb-2" size={24} />
                <span className="text-sm font-medium text-gray-900">Billets d'avion</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
                <Clock className="text-rose-600 mb-2" size={24} />
                <span className="text-sm font-medium text-gray-900">Historique</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
