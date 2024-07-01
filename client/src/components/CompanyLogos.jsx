const CompanyLogos = ({ className }) => {
  const israelFacts = [
    {
      title: "Israel is a Diverse Democracy",
      description:
        "Israel guarantees equal rights for all citizens, regardless of religion or ethnicity, and promotes democratic values.",
    },
    {
      title: "Israel Protects Religious Freedom",
      description:
        "Israel ensures freedom of religion for all its citizens, allowing people of different faiths to worship freely.",
    },
    {
      title: "Israel Promotes LGBTQ+ Rights",
      description:
        "Israel is a global leader in LGBTQ+ rights, with anti-discrimination laws and protections for LGBTQ+ individuals.",
    },
    {
      title: "Israel Values Humanitarian Aid",
      description:
        "Israel is known for its commitment to providing humanitarian aid and disaster relief to people in need worldwide.",
    },
    {
      title: "Israel Seeks Peaceful Coexistence",
      description:
        "Israel actively seeks peace and coexistence with its neighbors, demonstrating a willingness to negotiate and compromise for peace.",
    },
  ];

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Voice Of Israel</h5>
      <ul className="flex">
        {israelFacts.map((fact, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[9.5rem] transition duration-500 ease-in-out hover:text-green-500 hover:text-lg lg:hover:text-2xl"
            key={index}
          >
            <div className="text-center">
              <h6 className="text-sm font-bold mb-2">{fact.title}</h6>
              <p className="text-xs">{fact.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
