const Profile = () => {
  const birthDate = new Date("1987-01-30");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div className="bg-gray-200 rounded-lg p-2 sm:p-4 xl:px-16 min-h-full text-amber-950">
      <h1 className="text-xl text-fuchsia-700/75 font-semibold text-center  bg-lime-600/50 w-fit mx-auto px-4  rounded-t-md">Profile</h1>
      <div class="w-full h-1 bg-lime-600/50 mb-2 xl:mb-4 rounded-xl"></div>
      <p className="mb-4 indent-4">
        Hello. I'm {age} years old. I'm Ukrainian. Since school, I've been interested
        in computers, programming, and microelectronics, such as Arduino. I also
        have an interest in 3D modeling and have experience with SketchUp.
      </p>

      <section className="mb-4">
        <h3 className="text-xl text-fuchsia-700/75 font-semibold text-center bg-lime-600/50 w-fit mx-auto px-4  rounded-t-md ">Work Experience</h3>
        <div class="w-full h-1 bg-lime-600/50 mb-2 xl:mb-4 rounded-xl"></div>
        <div className="">
          <span className="font-semibold">Agronomist plant protection: </span>
          <span className="font-semibold  bg-amber-300 rounded-2xl text-center px-4"> 2010 - 2023</span>
        </div>
        <ul className="">
          <li>
            <strong>Main place of work:</strong> work in the civil service in
            the specialty of plant protection.
          </li>
          <li>
            <strong>Additional job:</strong> computer administrator.
          </li>
          <li>
            <strong>Work on the 1C platform.</strong>
          </li>
        </ul>
      </section>

      <section className="">
        <h3 className="text-xl text-fuchsia-700/75 font-semibold text-center  bg-lime-600/50 w-fit mx-auto px-4  rounded-t-md">Education</h3>
        <div class="w-full h-1 bg-lime-600/50 mb-2 xl:mb-4 rounded-xl"></div>

        <ul className="[&>li]:flex [&>li]:flex-row  [&>li]:gap-4 space-y-2">
          <li>
            <span className="w-28 h-6 shrink-0 font-semibold  bg-amber-300 rounded-2xl text-center">2026</span>
            <div className="">
              <strong>Front-end Pro </strong>(
              <a className="underline text-lime-700"
                href="https://certificate.ithillel.ua/view/94027298"
                target="_blank"
                rel="noreferrer"
              >
                Hillel IT school
              </a>
              )
            </div>
          </li>
          <li>
            <span className="w-28 h-6 shrink-0 font-semibold  bg-amber-300 rounded-2xl text-center">2025</span>
            <div className="">
              <strong>Front-end Basic </strong>(
              <a className="underline text-lime-700"
                href="https://certificate.ithillel.ua/view/19171804"
                target="_blank"
                rel="noreferrer"
              >
                Hillel IT school
              </a>
              )
            </div>
          </li>
          <li>
            <span className="w-28 h-6 shrink-0 font-semibold  bg-amber-300 rounded-2xl text-center">2015</span>
            <div className="">
              <strong>1C (BAS) Programming </strong>(
              <a className="underline text-lime-700"
                href="https://www.abissoft.com"
                target="_blank"
                rel="noreferrer"
              >
                abissoft.com
              </a>
              )
            </div>
          </li>
          <li>
            <span className="w-28 h-6 shrink-0 font-semibold  bg-amber-300 rounded-2xl text-center">2007 – 2009</span>
            <div className="">
              <strong> Programmer. IT Step Academy </strong>(
              <a className="underline text-lime-700" href="https://od.itstep.org" target="_blank" rel="noreferrer">
                od.itstep.org
              </a>
              )
            </div>
          </li>
          <li>
            <span className="w-28 h-6 shrink-0 font-semibold bg-amber-300 rounded-2xl text-center">2004 – 2009</span>
            <div className="">
              <strong>Odessa State Agrarian University </strong>(
              <a className="underline text-lime-700" href="https://osau.edu.ua" target="_blank" rel="noreferrer">
                osau.edu.ua
              </a>
              )
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
