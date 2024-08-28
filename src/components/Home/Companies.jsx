// src/components/Companies.js
export default function Companies() {
  const allCompany = [
    {
      name: "KeyPe",
      img: "https://media.licdn.com/dms/image/v2/D4D0BAQH1gvmkk3Turg/company-logo_200_200/company-logo_200_200/0/1716014441533/keype_logo?e=2147483647&v=beta&t=MmJmn1ICzyoWXjMKLmUrEW8WbWvlirkSPHRpaAhUrmo",
    },
    {
      name: "Vuez",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwj4U60qDrkmXEIIbrFaQO7dlhVVuglh21w&s",
    },
    {
      name: "KeyPe",
      img: "https://media.licdn.com/dms/image/v2/D4D0BAQH1gvmkk3Turg/company-logo_200_200/company-logo_200_200/0/1716014441533/keype_logo?e=2147483647&v=beta&t=MmJmn1ICzyoWXjMKLmUrEW8WbWvlirkSPHRpaAhUrmo",
    },
  ];

  return (
    <div className="py-5 overflow-hidden relative ">
      <div className="flex items-center animate-marquee">
        {allCompany.concat(allCompany).map((item, index) => (
          <div key={index} className="flex items-center h-40 ">
            <div className=" mx-4 w-40 text-center">
              <img
                src={item.img}
                alt={`${item.name} Profile`}
                className="w-20 h-20 mx-auto rounded-full"
              />
              <div className="mt-2 font-semibold">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
