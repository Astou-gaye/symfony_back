import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Phone,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react';

interface Pelerin {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  typeVoyage: string;
  dateDepart: string;
  statut: 'confirmé' | 'en attente' | 'annulé';
}

const Pelerins: React.FC = () => {
  const [pelerins] = useState<Pelerin[]>([
    {
      id: '001',
      nom: 'Diallo',
      prenom: 'Amadou',
      email: 'amadou.diallo@email.com',
      telephone: '+221 77 123 45 67',
      adresse: 'Dakar, Sénégal',
      typeVoyage: 'Hajj',
      dateDepart: '2025-03-15',
      statut: 'confirmé'
    },
    {
      id: '002',
      nom: 'Sow',
      prenom: 'Fatou',
      email: 'fatou.sow@email.com',
      telephone: '+221 76 987 65 43',
      adresse: 'Thiès, Sénégal',
      typeVoyage: 'Oumrah',
      dateDepart: '2025-02-20',
      statut: 'en attente'
    },
    {
      id: '003',
      nom: 'Ba',
      prenom: 'Moussa',
      email: 'moussa.ba@email.com',
      telephone: '+221 78 456 78 90',
      adresse: 'Saint-Louis, Sénégal',
      typeVoyage: 'Ziar Fez',
      dateDepart: '2025-04-10',
      statut: 'confirmé'
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredPelerins = pelerins.filter(pelerin => 
    pelerin.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pelerin.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pelerin.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des Pèlerins</h1>
          <p className="text-gray-600 mt-1">Gérez les inscriptions et informations des pèlerins</p>
        </div>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Nouveau Pèlerin
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un pèlerin..."
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

      {/* Pelerins Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Liste des Pèlerins ({filteredPelerins.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pèlerin
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Voyage
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
              {filteredPelerins.map((pelerin) => (
                <tr key={pelerin.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                        <span className="text-sky-600 font-medium">
                          {pelerin.prenom.charAt(0)}{pelerin.nom.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {pelerin.prenom} {pelerin.nom}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {pelerin.adresse}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center mb-1">
                      <Mail size={14} className="mr-2 text-gray-400" />
                      {pelerin.email}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Phone size={14} className="mr-2 text-gray-400" />
                      {pelerin.telephone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{pelerin.typeVoyage}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {pelerin.dateDepart}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(pelerin.statut)}`}>
                      {pelerin.statut}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="text-sky-600 hover:text-sky-900 p-1 rounded">
                        <Eye size={16} />
                      </button>
                      <button className="text-green-600 hover:text-green-900 p-1 rounded">
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

export default Pelerins;
