<?php
namespace IndusBlogBundle\Repository;
use App\Entity\Commentaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
class CommentaireRepository extends ServiceEntityRepository
{
    // public function __construct(RegistryInterface $registry)
    // {
    //     parent::__construct($registry, Commentaire::class);
    // }
}
