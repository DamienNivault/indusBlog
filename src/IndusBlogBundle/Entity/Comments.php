<?php
namespace IndusBlogBundle\Entity;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\Common\Collections\ArrayCollection;
/**
 * @ORM\Entity(repositoryClass="App\Repository\CommentsRepository")
 * @ORM\Table(name="Comments")
 */
class Comments
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @ORM\Column(name="content", type="text")
     */
    private $content;
    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="Commentss")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $users;
    /**
     * @ORM\ManyToOne(targetEntity="Article", inversedBy="Commentss")
     * @ORM\JoinColumn(name="article_id", referencedColumnName="id")
     */
    private $articles;
    public function __toString(){
        return (string)$this->id;
    }
    /**
     * Get the value of id
     */
    public function getId()
    {
        return $this->id;
    }
    /**
     * Set the value of id
     *
     * @return  self
     */
    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }
    /**
     * Get the value of content
     */
    public function getContent()
    {
        return $this->content;
    }
    /**
     * Set the value of content
     *
     * @return  self
     */
    public function setContent($content)
    {
        $this->content = $content;
        return $this;
    }
    /**
     * Get the value of users
     */
    public function getUsers()
    {
        return $this->users;
    }
    /**
     * Set the value of users
     *
     * @return  self
     */
    public function setUsers($users)
    {
        $this->users = $users;
        return $this;
    }
    /**
     * Get the value of articles
     */
    public function getArticles()
    {
        return $this->articles;
    }
    /**
     * Set the value of articles
     *
     * @return  self
     */
    public function setArticles($articles)
    {
        $this->articles = $articles;
        return $this;
    }
}
