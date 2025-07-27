<?php

namespace App\Entity;

use App\Repository\DossiersRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DossiersRepository::class)]
class Dossiers
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $passeport = null;

    #[ORM\Column(length: 255)]
    private ?string $visa = null;

    #[ORM\Column(length: 255)]
    private ?string $carnetSante = null;

    #[ORM\Column(length: 255)]
    private ?string $photoIdentite = null;

    #[ORM\ManyToOne(inversedBy: 'dossiers')]
    private ?Client $clients = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPasseport(): ?string
    {
        return $this->passeport;
    }

    public function setPasseport(string $passeport): static
    {
        $this->passeport = $passeport;

        return $this;
    }

    public function getVisa(): ?string
    {
        return $this->visa;
    }

    public function setVisa(string $visa): static
    {
        $this->visa = $visa;

        return $this;
    }

    public function getCarnetSante(): ?string
    {
        return $this->carnetSante;
    }

    public function setCarnetSante(string $carnetSante): static
    {
        $this->carnetSante = $carnetSante;

        return $this;
    }

    public function getPhotoIdentite(): ?string
    {
        return $this->photoIdentite;
    }

    public function setPhotoIdentite(string $photoIdentite): static
    {
        $this->photoIdentite = $photoIdentite;

        return $this;
    }

    public function getClients(): ?Client
    {
        return $this->clients;
    }

    public function setClients(?Client $clients): static
    {
        $this->clients = $clients;

        return $this;
    }
}
