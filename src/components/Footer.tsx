import Icon, { IconName } from "./Icon";

const SOCIALS = [
  { name: "github", link: "https://github.com/nazariyshvets" },
  { name: "telegram", link: "https://t.me/nazariishvets" },
  { name: "instagram", link: "https://www.instagram.com/its.me_n.s/" },
  {
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=100048416239215",
  },
];

const Footer = () => {
  const socials = SOCIALS.map(({ name, link }) => (
    <a key={link} href={link} target="_blank">
      <Icon name={name as IconName} size="md" className="cursor-pointer" />
    </a>
  ));

  return (
    <footer className="flex justify-center gap-x-8 py-12">{socials}</footer>
  );
};

export default Footer;
