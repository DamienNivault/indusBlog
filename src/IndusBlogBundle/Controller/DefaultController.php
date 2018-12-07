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
        return $this->render('IndusBlogBundle:vue-app:index.html.twig');
    }
    /**
     * @Route("/create-article", name="create-article")
     */
    public function createArticleAction(Request $request){
        $user = $this -> getUser();
        if($request->isMethod('POST')){
            $article = new Article();
            $article -> setTitle($request -> get("title"));
            $article -> setContent($request -> get("content"));
            $article -> setPicture($fileName);
            $article -> setUsers($user);
            $em = $this->getDoctrine()->getManager();
            $em->persist($article);
            $em->flush();
            return $this->redirectToRoute('index');
        }
        return $this -> render('IndusBlogBundle:Vue:index.html.twig',[
            'user' => $user
        ]);
    }
}
