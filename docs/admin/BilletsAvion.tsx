import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Plane,
  Calendar,
  MapPin,
  Clock,
  User,
  Download
} from 'lucide-react';

interface Billet {
  id: string;
  numeroVol: string;
  compagnie: string;
  client: string;
  depart: string;
  arrivee: string;
  dateDepart: string;
  dateArrivee: string;
  classe: 'Économique' | 'Affaires' | 'Première';
  prix: string;
  statut: 'confirmé' | 'en attente' | 'annulé' | 'utilisé';
}

const BilletsAvion: React.FC = () => {
  const [billets] = useState<Billet[]>([
    {
      id: 'BA001',
      numeroVol: 'AF456',
      compagnie: 'Air France',
      client: 'Amadou Diallo',
      depart: 'Dakar (DKR)',
      arrivee: 'Djeddah (JED)',
      dateDepart: '2025-03-15 14:30',
      dateArrivee: '2025-03-16 06:45',
      classe: 'Économique',
      prix: '650 000 FCFA',
      statut: 'confirmé'
    },
    {
      id: 'BA002',
      numeroVol: 'EK267',
      compagnie: 'Emirates',
      client: 'Fatou Sow',
      depart: 'Dakar (DKR)',
      arrivee: 'Dubai (DXB)',
      dateDepart: '2025-02-20 22:15',
      dateArrivee: '2025-02-21 14:30',
      classe: 'Affaires',
      prix: '1 200 000 FCFA',
      statut: 'confirmé'
    },
    {
      id: 'BA003',
      numeroVol: 'AT205',
      compagnie: 'Royal Air Maroc',
      client: 'Moussa Ba',
      depart: 'Dakar (DKR)',
      arrivee: 'Fez (FEZ)',
      dateDepart: '2025-04-10 08:00',
      dateArrivee: '2025-04-10 14:15',
      classe: 'Économique',
      prix: '380 000 FCFA',
      statut: 'en attente'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case 'confirmé':
        return 'bg-green-100 text-green-800';
      case 'en attente':
        return 'bg-yellow-100 text-yellow-800';
      case 'annulé':
        return 'bg-red-100 text-red-800';
      case 'utilisé':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getClasseColor = (classe: string) => {
    switch (classe) {
      case 'Première':
        return 'bg-purple-100 text-purple-800';
      case 'Affaires':
        return 'bg-blue-100 text-blue-800';
      case 'Économique':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredBillets = billets.filter(billet => 
    billet.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    billet.numeroVol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    billet.compagnie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des Billets d'Avion</h1>
          <p className="text-gray-600 mt-1">Gérez les réservations et émissions de billets</p>
        </div>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Nouveau Billet
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Billets</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{billets.length}</p>
            </div>
            <div className="bg-blue-500 rounded-lg p-3">
              <Plane size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Confirmés</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {billets.filter(b => b.statut === 'confirmé').length}
              </p>
            </div>
            <div className="bg-green-500 rounded-lg p-3">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">En Attente</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {billets.filter(b => b.statut === 'en attente').length}
              </p>
            </div>
            <div className="bg-yellow-500 rounded-lg p-3">
              <Clock size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ce mois</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">25</p>
            </div>
            <div className="bg-rose-500 rounded-lg p-3">
              <Calendar size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher par client, vol ou compagnie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter size={20} />
            Filtres
          </button>
        </div>
      </div>

      {/* Billets Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Liste des Billets ({filteredBillets.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vol
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Itinéraire
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Classe
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBillets.map((billet) => (
                <tr key={billet.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                        <Plane size={20} className="text-sky-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{billet.numeroVol}</div>
                        <div className="text-sm text-gray-500">{billet.compagnie}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 flex items-center">
                      <User size={14} className="mr-2 text-gray-400" />
                      {billet.client}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center mb-1">
                      <MapPin size={14} className="mr-1 text-gray-400" />
                      {billet.depart} → {billet.arrivee}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {billet.dateDepart}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getClasseColor(billet.classe)}`}>
                      {billet.classe}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{billet.prix}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(billet.statut)}`}>
                      {billet.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-sky-600 hover:text-sky-900 p-1 rounded">
                        <Eye size={16} />
                      </button>
                      <button className="text-green-600 hover:text-green-900 p-1 rounded">
                        <Download size={16} />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900 p-1 rounded">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BilletsAvion;
