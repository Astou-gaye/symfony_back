import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  User,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface Reservation {
  id: string;
  numeroReservation: string;
  client: string;
  typeVoyage: string;
  dateReservation: string;
  dateDepart: string;
  nombrePersonnes: number;
  montantTotal: string;
  montantPaye: string;
  statut: 'confirmée' | 'en attente' | 'annulée' | 'terminée';
  statutPaiement: 'payé' | 'partiel' | 'impayé';
}

const Reservations: React.FC = () => {
  const [reservations] = useState<Reservation[]>([
    {
      id: 'RES001',
      numeroReservation: 'MB2025001',
      client: 'Astou Gaye',
      typeVoyage: 'Hajj Premium',
      dateReservation: '2024-12-15',
      dateDepart: '2025-03-15',
      nombrePersonnes: 2,
      montantTotal: '10 760 000 FCFA',
      montantPaye: '5 380 000 FCFA',
      statut: 'confirmée',
      statutPaiement: 'partiel'
    },
    {
      id: 'RES002',
      numeroReservation: 'MB2025002',
      client: 'Idrissa Gaye',
      typeVoyage: 'Oumrah Confort',
      dateReservation: '2025-01-10',
      dateDepart: '2025-02-20',
      nombrePersonnes: 1,
      montantTotal: '2 300 000 FCFA',
      montantPaye: '2 300 000 FCFA',
      statut: 'confirmée',
      statutPaiement: 'payé'
    },
    {
      id: 'RES003',
      numeroReservation: 'MB2025003',
      client: 'Moubarack gayass',
      typeVoyage: 'Ziar Fez',
      dateReservation: '2025-01-05',
      dateDepart: '2025-04-10',
      nombrePersonnes: 3,
      montantTotal: '2 550 000 FCFA',
      montantPaye: '0 FCFA',
      statut: 'en attente',
      statutPaiement: 'impayé'
    },
    {
      id: 'RES004',
      numeroReservation: 'MB2025004',
      client: 'Aïssatou Gaye',
      typeVoyage: 'Dubai Tourism',
      dateReservation: '2024-11-20',
      dateDepart: '2025-01-15',
      nombrePersonnes: 2,
      montantTotal: '2 400 000 FCFA',
      montantPaye: '2 400 000 FCFA',
      statut: 'terminée',
      statutPaiement: 'payé'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case 'confirmée':
        return 'bg-green-100 text-green-800';
      case 'en attente':
        return 'bg-yellow-100 text-yellow-800';
      case 'annulée':
        return 'bg-red-100 text-red-800';
      case 'terminée':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaiementColor = (statut: string) => {
    switch (statut) {
      case 'payé':
        return 'bg-green-100 text-green-800';
      case 'partiel':
        return 'bg-yellow-100 text-yellow-800';
      case 'impayé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredReservations = reservations.filter(reservation => 
    reservation.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.numeroReservation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.typeVoyage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des Réservations</h1>
          <p className="text-gray-600 mt-1">Suivez et gérez toutes les réservations</p>
        </div>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Nouvelle Réservation
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Réservations</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{reservations.length}</p>
            </div>
            <div className="bg-blue-500 rounded-lg p-3">
              <Calendar size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Confirmées</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {reservations.filter(r => r.statut === 'confirmée').length}
              </p>
            </div>
            <div className="bg-green-500 rounded-lg p-3">
              <CheckCircle size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">En Attente</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {reservations.filter(r => r.statut === 'en attente').length}
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
              <p className="text-sm font-medium text-gray-600">Revenus</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">18M</p>
              <p className="text-xs text-gray-500">FCFA ce mois</p>
            </div>
            <div className="bg-purple-500 rounded-lg p-3">
              <DollarSign size={24} className="text-white" />
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
                placeholder="Rechercher une réservation..."
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

      {/* Reservations Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Liste des Réservations ({filteredReservations.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Réservation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Voyage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Montant
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
              {filteredReservations.map((reservation) => (
                <tr key={reservation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{reservation.numeroReservation}</div>
                      <div className="text-sm text-gray-500">{reservation.nombrePersonnes} personne(s)</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                        <User size={20} className="text-sky-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{reservation.client}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 flex items-center">
                      <MapPin size={14} className="mr-2 text-gray-400" />
                      {reservation.typeVoyage}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="flex items-center mb-1">
                        <Calendar size={14} className="mr-1 text-gray-400" />
                        Départ: {reservation.dateDepart}
                      </div>
                      <div className="text-xs text-gray-500">
                        Réservé: {reservation.dateReservation}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{reservation.montantTotal}</div>
                    <div className="text-xs text-gray-500">Payé: {reservation.montantPaye}</div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-1 ${getPaiementColor(reservation.statutPaiement)}`}>
                      {reservation.statutPaiement}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(reservation.statut)}`}>
                      {reservation.statut}
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
                      {reservation.statut === 'en attente' && (
                        <>
                          <button className="text-emerald-600 hover:text-emerald-900 p-1 rounded">
                            <CheckCircle size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-900 p-1 rounded">
                            <XCircle size={16} />
                          </button>
                        </>
                      )}
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

export default Reservations;