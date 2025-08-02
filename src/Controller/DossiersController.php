<?php

namespace App\Controller;

use App\Entity\Dossiers;
use App\Form\DossiersType;
use App\Repository\DossiersRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/dossiers')]
final class DossiersController extends AbstractController
{
    #[Route(name: 'app_dossiers_index', methods: ['GET'])]
    public function index(DossiersRepository $dossiersRepository): Response
    {
        return $this->render('dossiers/index.html.twig', [
            'dossiers' => $dossiersRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_dossiers_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $dossier = new Dossiers();
        $form = $this->createForm(DossiersType::class, $dossier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($dossier);
            $entityManager->flush();

            return $this->redirectToRoute('app_dossiers_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('dossiers/new.html.twig', [
            'dossier' => $dossier,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_dossiers_show', methods: ['GET'])]
    public function show(Dossiers $dossier): Response
    {
        return $this->render('dossiers/show.html.twig', [
            'dossier' => $dossier,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_dossiers_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Dossiers $dossier, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(DossiersType::class, $dossier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_dossiers_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('dossiers/edit.html.twig', [
            'dossier' => $dossier,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_dossiers_delete', methods: ['POST'])]
    public function delete(Request $request, Dossiers $dossier, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$dossier->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($dossier);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_dossiers_index', [], Response::HTTP_SEE_OTHER);
    }
}