// src/pages/Services.jsx
import React from "react";

const services = [
  {
    title: "Packaging Design",
    description:
      "We design eye-catching packaging solutions that stand out on shelves, convey your brand's personality, and protect your products. Our team considers functionality, strategy, and aesthetics to create packaging that resonates with your target audience.",
    icon: "/src/assets/icons/Packing.png",
  },
  {
    title: "Motion Graphics",
    description:
      "Our motion graphics services include animated logos, explainer videos, and social media clips that bring your brand to life. We use motion to capture attention, convey complex information, and create an emotional connection with your audience.",
    icon: "/src/assets/icons/Hexagonal Pattern.png",
  },
  {
    title: "Social Media Marketing and Management",
    description:
      "Our team helps you build a strong online presence, grow your audience, and drive engagement across social media platforms. We help you increase brand awareness, enhance your efforts, generate leads, and boost sales through effective social media marketing and management.",
    icon: "/src/assets/icons/Hashtag Large.png",
  },
  {
    title: "Branding",
    description:
      "Our branding services include developing your brand strategy, voice, and visual identity. We work closely with you to create a consistent brand experience across all touchpoints, from your website to social media and marketing materials.",
    icon: "/src/assets/icons/Branding.png",
  },
  {
    title: "Poster Design",
    description:
      "We design posters that grab attention, communicate your message, and leave a lasting impression. Whether you need a poster for an event, promotion, or brand awareness, our team will create a visually stunning design that resonates with your audience.",
    icon: "/src/assets/icons/Holding Box.png",
  },
  {
    title: "Label and Sticker Design",
    description:
      "Our team designs labels and stickers that are both functional and visually appealing. We work with you to create designs that reflect your brand's personality and messaging, while also considering the technical requirements of the label or sticker.",
    icon: "/src/assets/icons/Sticker.png",
  },
  {
    title: "Website Design",
    description:
      "Our team designs labels and stickers that are both functional and visually appealing. We'll work with you to create designs that reflect your brand's personality and messaging, while also considering the technical requirements of the label or sticker.",
    icon: "/src/assets/icons/Website.png",
  },
];

const pricing = [
  {
    type: "Basic",
    price: "FREE",
    features: ["Poster Design", "Logo Design", "Website Design"],
  },
  {
    type: "Advanced",
    price: "$80",
    features: ["Poster Design", "Logo Design", "Website Design"],
  },
  {
    type: "Business",
    price: "$120",
    features: ["Poster Design", "Logo Design", "Website Design"],
  },
  {
    type: "Special",
    price: "$200",
    features: ["Poster Design", "Logo Design", "Website Design"],
  },
];

const Services = () => {
  return (
    <div className="bg-background text-text p-8 font-poppins">
      <section className="text-center mb-16">
        <div className="flex justify-center items-end gap-1">
          <img src="/src/assets/icons/Group 7.png" alt="icon" />
          <h1 className="filter-shadow text-[86.75px] leading-[130.13px]  mb-4 text-primary font-[500] font">
            Services
          </h1>
        </div>

        <p className="para w-2/3 mx-auto my-7">
          At CELEXTA, we offer professional graphic design services to enhance
          your brand's visual identity. Our expert team delivers customized
          solutions that meet your unique needs and elevate your projects to the
          next level of creativity and impact.
        </p>
      </section>

      <section className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mx-auto max-w-[2000px]">
        {services.map((service, index) => (
          <div
            key={index}
            className={`max-w-[362px] py-9 px-6  gap-4 md:gap-9 bg-gradient-to-b from-white/25 to-gray-900/25 border-[0.42px] flex justify-center items-center flex-col card-shadow rounded-lg shadow-lg ${
              index === services.length - 1
                ? "lg:col-span-3 lg:justify-self-center"
                : ""
            }`}
          >
            <img src={service.icon} alt={`${service.title}-icon`} />
            <h2 className="text-[23.17px] font-[700] mb-2 text-center">
              {service.title}
            </h2>
            <p className="card-para">{service.description}</p>
          </div>
        ))}
      </section>

      <section className="text-center mb-8">
        <div className="flex justify-center items-center filter-shadow gap-4">
          <img src="/src/assets/icons/Group 8.png" alt="icon" />
          <h1 className="text-[86.75px] leading-[130.13px]  mb-4 text-primary font-[500] font">
            Pricing
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[2000px] flex flex-col md:flex-row gap-20 justify-center">
        {pricing.map((plan, index) => (
          <div key={index} className="price-card card-shadow ">
            <h3 className="font-[250] text-[20px] leading-[30px] mb-1 ">
              {plan.type}
            </h3>
            <p className=" text-primary font-[500] font-poppins text-[48px]  mb-1">
              {plan.price}
            </p>
            <hr className="border-[1px] rounded-s my-1" />
            <ul className="space-y-2 my-5">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex gap-2 items-center font-[250] text-[20px] leading-[30px]"
                >
                  <img src="/src/assets/icons/Hand Right.png" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-primary text-white w-2/3 block mx-auto p-2 rounded-lg">
              Visit
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;
