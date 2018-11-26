<?php

namespace IndusBlogBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="IndusBlog")
     */
    public function indexAction()
    {
        return $this->render('IndusBlogBundle:Vue:index.html.twig');
    }
}
