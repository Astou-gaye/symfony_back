<?php

namespace App\Form;

use App\Entity\BilletsAvion;
use App\Entity\Client;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BilletsAvionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('prenom')
            ->add('sexe', ChoiceType::class, [
                'choices' => [
                    'Masculin' => 'M',
                    'Féminin' => 'F',
                ],
                'label' => 'Sexe',
                'placeholder' => 'Choisir...',
            ])
            ->add('dateDepart')
            ->add('dateRetour')
            ->add('villeDepart')
            ->add('villeArrivee')
            ->add('type', ChoiceType::class, [
                'choices' => [
                    'Aller simple' => 'aller_simple',
                    'Aller-retour' => 'aller_retour',
                ],
                'label' => 'Type de billet',
                'placeholder' => 'Choisir...',
            ])
            ->add('email')
            ->add('client', EntityType::class, [
                'class' => Client::class,
                'choice_label' => 'id', // tu peux remplacer 'id' par un champ plus lisible (ex: nom complet)
                'placeholder' => 'Aucun client',
                'required' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => BilletsAvion::class,
        ]);
    }
}
