<?php

namespace App\Entity;

use App\Repository\ClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ClientRepository::class)]
class Client
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $prenom = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $adresse = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTime $dateNaissance = null;

    #[ORM\Column(length: 255)]
    private ?string $nationalite = null;

    #[ORM\Column(length: 255)]
    private ?string $sexe = null;

    /**
     * @var Collection<int, Dossiers>
     */
    #[ORM\OneToMany(targetEntity: Dossiers::class, mappedBy: 'clients')]
    private Collection $dossiers;

    /**
     * @var Collection<int, Reservation>
     */
    #[ORM\OneToMany(targetEntity: Reservation::class, mappedBy: 'client')]
    private Collection $reservations;

    /**
     * @var Collection<int, BilletsAvion>
     */
    #[ORM\OneToMany(targetEntity: BilletsAvion::class, mappedBy: 'client')]
    private Collection $billetsAvions;

    #[ORM\Column(length: 255)]
    private ?string $telephone = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

  

    public function __construct()
    {
        $this->dossiers = new ArrayCollection();
        $this->reservations = new ArrayCollection();
        $this->billetsAvions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): static
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getDateNaissance(): ?\DateTime
    {
        return $this->dateNaissance;
    }

    public function setDateNaissance(\DateTime $dateNaissance): static
    {
        $this->dateNaissance = $dateNaissance;

        return $this;
    }

    public function getNationalite(): ?string
    {
        return $this->nationalite;
    }

    public function setNationalite(string $nationalite): static
    {
        $this->nationalite = $nationalite;

        return $this;
    }

    public function getSexe(): ?string
    {
        return $this->sexe;
    }

    public function setSexe(string $sexe): static
    {
        $this->sexe = $sexe;

        return $this;
    }

    /**
     * @return Collection<int, Dossiers>
     */
    public function getDossiers(): Collection
    {
        return $this->dossiers;
    }

    public function addDossier(Dossiers $dossier): static
    {
        if (!$this->dossiers->contains($dossier)) {
            $this->dossiers->add($dossier);
            $dossier->setClients($this);
        }

        return $this;
    }

    public function removeDossier(Dossiers $dossier): static
    {
        if ($this->dossiers->removeElement($dossier)) {
            // set the owning side to null (unless already changed)
            if ($dossier->getClients() === $this) {
                $dossier->setClients(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Reservation>
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): static
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations->add($reservation);
            $reservation->setClient($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): static
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getClient() === $this) {
                $reservation->setClient(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, BilletsAvion>
     */
    public function getBilletsAvions(): Collection
    {
        return $this->billetsAvions;
    }

    public function addBilletsAvion(BilletsAvion $billetsAvion): static
    {
        if (!$this->billetsAvions->contains($billetsAvion)) {
            $this->billetsAvions->add($billetsAvion);
            $billetsAvion->setClient($this);
        }

        return $this;
    }

    public function removeBilletsAvion(BilletsAvion $billetsAvion): static
    {
        if ($this->billetsAvions->removeElement($billetsAvion)) {
            // set the owning side to null (unless already changed)
            if ($billetsAvion->getClient() === $this) {
                $billetsAvion->setClient(null);
            }
        }

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): static
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }
}
