<?php
namespace IndusBlogBundle\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\SecurityContextInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use IndusBlog\Entity\User;
class SecurityController extends Controller
{
    /**
     * @Route("/register", name="register")
     */
    public function registerAction()
    {
        $request = Request::createFromGlobals();
        $em = $this->getDoctrine()->getEntityManager();
        // $rep = $em->getRepository('TicketBundle:User');

        if ($request->getMethod() === 'POST')
        {
            $user = new User;
            $user -> setFirstname($request->get('firstname'));
            $user -> setLastname($request->get('lastname'));
            $user -> setEmail($request->get('email'));
            $user -> setUsername($request->get('username'));
            $user->setCreatedAt(new \DateTime);
            $user -> setRole(array('ROLE_USER'));
            $hash = $this->get('security.password_encoder')->encodePassword($user,$request->get('password'));
            $user -> setPassword($hash);
            $em->persist($user);
            $em->flush();
            return $this->render('IndusBlogBundle:vue-app:index.html.twig');
        }
        return $this->render('IndusBlogBundle:vue-app:index.html.twig');
    }
    /**
    * @Route("/login", name="login")
    */
    public function loginAction(Request $request)
    {
        $authenticationUtils = $this->get('security.authentication_utils');
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();
        return $this->render(
        'IndusBlogBundle:vue-app:index.html.twig',
        array(
        'last_username' => $lastUsername,
        'error'         => $error,
        ));
    }
    /**
    * @Route("/login_check", name="login_check")
    */
    public function loginCheckAction()
    {
    }
    /**
    * @Route("/logout", name="logout")
    */
    public function logoutAction()
    {
    }
}
