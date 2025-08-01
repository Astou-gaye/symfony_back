<?php

namespace App\Form;

use App\Entity\Session;
use App\Entity\Voyage;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SessionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nombresPlaces')
            ->add('dateDebut')
            ->add('dateFin')
            ->add('prixForfait')
            ->add('dateInscription')
            ->add('voyage', EntityType::class, [
                'class' => Voyage::class,
                'choice_label' => 'typeVoyage',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Session::class,
        ]);
    }
}
