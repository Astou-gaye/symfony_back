import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  MapPin,
  Users,
  Plane,
  Clock,
  CheckCircle
} from 'lucide-react';

interface Voyage {
  id: string;
  nom: string;
  destination: string;
  dateDepart: string;
  dateRetour: string;
  duree: string;
  capacite: number;
  inscrits: number;
  prix: string;
  guide: string;
  statut: 'planifié' | 'en cours' | 'terminé' | 'annulé';
  typeVoyage: string;
}

const Voyages: React.FC = () => {
  const [voyages] = useState<Voyage[]>([
    {
      id: 'VOY001',
      nom: 'Hajj 2025 - Groupe A',
      destination: 'La Mecque, Arabie Saoudite',
      dateDepart: '2025-03-15',
      dateRetour: '2025-04-05',
      duree: '21 jours',
      capacite: 50,
      inscrits: 45,
      prix: '5 380 000 FCFA',
      guide: 'Imam Cheikh Fall',
      statut: 'planifié',
      typeVoyage: 'Hajj'
    },
    {
      id: 'VOY002',
      nom: 'Oumrah Février 2025',
      destination: 'La Mecque et Médine',
      dateDepart: '2025-02-20',
      dateRetour: '2025-03-06',
      duree: '14 jours',
      capacite: 80,
      inscrits: 72,
      prix: '2 300 000 FCFA',
      guide: 'Ustaz Moussa Diop',
      statut: 'planifié',
      typeVoyage: 'Oumrah'
    },
    {
      id: 'VOY003',
      nom: 'Ziar Fez - Mars 2025',
      destination: 'Fez, Maroc',
      dateDepart: '2025-03-10',
      dateRetour: '2025-03-17',
      duree: '7 jours',
      capacite: 60,
      inscrits: 35,
      prix: '850 000 FCFA',
      guide: 'Cheikh Ahmed Tijani',
      statut: 'planifié',
      typeVoyage: 'Ziar'
    },
    {
      id: 'VOY004',
      nom: 'Dubai Discovery',
      destination: 'Dubai, UAE',
      dateDepart: '2025-01-15',
      dateRetour: '2025-01-20',
      duree: '5 jours',
      capacite: 30,
      inscrits: 30,
      prix: '1 200 000 FCFA',
      guide: 'Guide local',
      statut: 'terminé',
      typeVoyage: 'Tourisme'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case 'planifié':
        return 'bg-blue-100 text-blue-800';
      case 'en cours':
        return 'bg-green-100 text-green-800';
      case 'terminé':
        return 'bg-gray-100 text-gray-800';
      case 'annulé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCapacityPercentage = (inscrits: number, capacite: number) => {
    return (inscrits / capacite) * 100;
  };

  const getCapacityColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const filteredVoyages = voyages.filter(voyage => 
    voyage.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voyage.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voyage.typeVoyage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des Voyages</h1>
          <p className="text-gray-600 mt-1">Planifiez et suivez tous vos voyages</p>
        </div>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Nouveau Voyage
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Voyages Actifs</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {voyages.filter(v => v.statut === 'planifié').length}
              </p>
            </div>
            <div className="bg-blue-500 rounded-lg p-3">
              <Plane size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pèlerins Inscrits</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {voyages.reduce((sum, voyage) => sum + voyage.inscrits, 0)}
              </p>
            </div>
            <div className="bg-green-500 rounded-lg p-3">
              <Users size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Voyages Terminés</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {voyages.filter(v => v.statut === 'terminé').length}
              </p>
            </div>
            <div className="bg-purple-500 rounded-lg p-3">
              <CheckCircle size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Prochain Départ</p>
              <p className="text-lg font-bold text-gray-900 mt-2">20 Fév</p>
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
                placeholder="Rechercher un voyage..."
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

      {/* Voyages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredVoyages.map((voyage) => {
          const capacityPercentage = getCapacityPercentage(voyage.inscrits, voyage.capacite);
          return (
            <div key={voyage.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {voyage.typeVoyage}
                    </span>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(voyage.statut)}`}>
                      {voyage.statut}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{voyage.nom}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    {voyage.destination}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    {voyage.dateDepart} → {voyage.dateRetour}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2" />
                    {voyage.duree}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2" />
                    Guide: {voyage.guide}
                  </div>
                </div>

                {/* Capacity Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Inscriptions</span>
                    <span>{voyage.inscrits}/{voyage.capacite}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getCapacityColor(capacityPercentage)}`}
                      style={{ width: `${capacityPercentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-sky-600">
                    {voyage.prix}
                  </div>
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Voyages;
