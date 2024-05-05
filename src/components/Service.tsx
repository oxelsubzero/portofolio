import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="md:mt-[100px] mt-8">
      <h1 className="text-4xl font-bold">I can help you in :</h1>

      <div className="grid xl:grid-cols-2 md:mt-16 mt-16 mb-16 md:gap-[100px] gap-8 pl-4  md:pl-36 xl:pl-0">
        <ServiceCard
          title="Website development"
          description="I specialize in website development that prioritizes simplicity and accessibility. I craft websites that are not only visually appealing but also easily editable by non-developers using headless CMS."
        >
          <img
            src="/webdev.webp"
            alt="webdev"
            className="object-cover h-full w-full"
          />
        </ServiceCard>

        <ServiceCard
          title="Design to code"
          description=" I transform designs into fully functional and visually stunning websites or applications, maintaining consistency and accuracy throughout the development process. "
        >
          <img
            src="/design.jpg"
            alt="webdev"
            className="object-cover w-full h-full"
          />
        </ServiceCard>
        <ServiceCard
          title="Webapp & Saas development"
          description="Modern web app development with Next.js offers a powerful combination of efficiency, scalability, and flexibility. Leveraging the latest web technologies and best practices, I create dynamic and responsive applications that provide seamless user experiences across devices. "
        >
          <img
            src="/next.jpg"
            alt="webdev"
            className="object-cover  w-full h-full"
          />
        </ServiceCard>
        <ServiceCard
          title="Backend development"
          description="I can craft robust solutions using Django or Node.js, tailored to project needs. Whichever the choice, I ensure clean, maintainable code and thorough testing for reliability."
        >
          <img
            src="/backend.png"
            alt="webdev"
            className="object-cover w-full h-full"
          />
        </ServiceCard>
      </div>
      <h1 className="text-3xl font-bold">Using :</h1>
    </div>
  );
};

export default Service;
