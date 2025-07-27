import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye,
  MapPin,
  Calendar,
  Users,
  DollarSign
} from 'lucide-react';

interface TypeVoyage {
  id: string;
  nom: string;
  description: string;
  duree: string;
  prix: string;
  capacite: number;
  destination: string;
  saison: string;
  statut: 'actif' | 'inactif' | 'complet';
}

const TypeVoyage: React.FC = () => {
  const [typesVoyages] = useState<TypeVoyage[]>([
    {
      id: 'TV001',
      nom: 'Hajj Premium',
      description: 'Forfait Hajj tout inclus avec hébergement 5 étoiles',
      duree: '21 jours',
      prix: '5 380 000 FCFA',
      capacite: 50,
      destination: 'Arabie Saoudite',
      saison: 'Hajj 2025',
      statut: 'actif'
    },
    {
      id: 'TV002',
      nom: 'Oumrah Confort',
      description: 'Pèlerinage Oumrah avec guide expérimenté',
      duree: '14 jours',
      prix: '2 300 000 FCFA',
      capacite: 100,
      destination: 'Arabie Saoudite',
      saison: 'Toute l\'année',
      statut: 'actif'
    },
    {
      id: 'TV003',
      nom: 'Ziar Fez',
      description: 'Visite des lieux saints du Maroc',
      duree: '7 jours',
      prix: '850 000 FCFA',
      capacite: 75,
      destination: 'Maroc',
      saison: 'Toute l\'année',
      statut: 'actif'
    },
    {
      id: 'TV004',
      nom: 'Dubai Tourism',
      description: 'Découverte de Dubai et des Émirats',
      duree: '5 jours',
      prix: '1 200 000 FCFA',
      capacite: 30,
      destination: 'UAE',
      saison: 'Octobre - Mars',
      statut: 'complet'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case 'actif':
        return 'bg-green-100 text-green-800';
      case 'inactif':
        return 'bg-gray-100 text-gray-800';
      case 'complet':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTypes = typesVoyages.filter(type => 
    type.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    type.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Types de Voyages</h1>
          <p className="text-gray-600 mt-1">Gérez les différents types de voyages proposés</p>
        </div>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Nouveau Type
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Types Actifs</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {typesVoyages.filter(t => t.statut === 'actif').length}
              </p>
            </div>
            <div className="bg-green-500 rounded-lg p-3">
              <MapPin size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Capacité Totale</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {typesVoyages.reduce((sum, type) => sum + type.capacite, 0)}
              </p>
            </div>
            <div className="bg-blue-500 rounded-lg p-3">
              <Users size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Types Complets</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {typesVoyages.filter(t => t.statut === 'complet').length}
              </p>
            </div>
            <div className="bg-red-500 rounded-lg p-3">
              <Calendar size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Prix Moyen</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">2.4M</p>
            </div>
            <div className="bg-purple-500 rounded-lg p-3">
              <DollarSign size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher un type de voyage..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Types de Voyages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTypes.map((type) => (
          <div key={type.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{type.nom}</h3>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(type.statut)}`}>
                  {type.statut}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{type.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  {type.destination}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  {type.duree} • {type.saison}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users size={16} className="mr-2" />
                  Capacité: {type.capacite} personnes
                </div>
                <div className="flex items-center text-lg font-semibold text-sky-600">
                  <DollarSign size={16} className="mr-2" />
                  {type.prix}
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
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
                <button className="text-sm text-sky-600 hover:text-sky-700 font-medium">
                  Voir détails
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeVoyage;