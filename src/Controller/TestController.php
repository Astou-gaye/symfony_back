<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

final class TestController extends AbstractController
{
    #[Route('/test', name: 'app_test')]
    public function index(
        EntityManagerInterface $entityManager,
        UserPasswordHasherInterface $passwordHasher
    ): Response {
        $user = new User();
        $user->setEmail('gestionnaire@gmail.com');

        // Hasher le mot de passe
        $hashedPassword = $passwordHasher->hashPassword($user, 'admin123');
        $user->setPassword($hashedPassword);

        // Définir les rôles
        $user->setRoles(['ROLE_GESTIONNAIRE']);

        // Persister l'utilisateur
        $entityManager->persist($user);
        $entityManager->flush();

        return new Response('Utilisateur gestionnaire créé avec succès.');
    }
}
