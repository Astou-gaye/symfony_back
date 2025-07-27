<?php

namespace App\Controller;

use App\Entity\BilletsAvion;
use App\Form\BilletsAvionType;
use App\Repository\BilletsAvionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/billets_avion')]
final class BilletsAvionController extends AbstractController
{
    #[Route(name: 'app_billets_avion_index', methods: ['GET'])]
    public function index(BilletsAvionRepository $billetsAvionRepository): Response
    {
        return $this->render('billets_avion/index.html.twig', [
            'billets_avions' => $billetsAvionRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_billets_avion_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $billetsAvion = new BilletsAvion();
        $form = $this->createForm(BilletsAvionType::class, $billetsAvion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($billetsAvion);
            $entityManager->flush();

            return $this->redirectToRoute('app_billets_avion_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('billets_avion/new.html.twig', [
            'billets_avion' => $billetsAvion,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_billets_avion_show', methods: ['GET'])]
    public function show(BilletsAvion $billetsAvion): Response
    {
        return $this->render('billets_avion/show.html.twig', [
            'billets_avion' => $billetsAvion,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_billets_avion_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, BilletsAvion $billetsAvion, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(BilletsAvionType::class, $billetsAvion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_billets_avion_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('billets_avion/edit.html.twig', [
            'billets_avion' => $billetsAvion,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_billets_avion_delete', methods: ['POST'])]
    public function delete(Request $request, BilletsAvion $billetsAvion, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$billetsAvion->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($billetsAvion);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_billets_avion_index', [], Response::HTTP_SEE_OTHER);
    }
}
