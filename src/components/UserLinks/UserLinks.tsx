import Link from "next/link";

export default function Links({ changeStyles }: { changeStyles: string }) {
  const links = [
    {
      title: "Acceuil",
      path: "/home",
    },
    {
      title: "A propos",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Projet",
      path: "/projet",
     
    },
    {
      title: "Calendrier",
      path: "/calendrier",
     
    },
    {
      title: "Travail",
      path: "/rapport",
      
    },
  ];

  return (
    <ul className={changeStyles}>
      {links.map((link) => (
        <li key={link.title}>
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}
