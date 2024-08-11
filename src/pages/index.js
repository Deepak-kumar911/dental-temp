import Navbar from "@/components/navbar";
import { FaPlay } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RxCheckCircled } from "react-icons/rx";
import Link from "next/link";
import Footer from "@/components/footer";
import { MdMail } from "react-icons/md";
import { TbClockHour5 } from "react-icons/tb";
import { LiaToothSolid } from "react-icons/lia";

export default function Home() {
  return (
    <main>

      {/* home section */}
      <section id="home" className=" bg-blue-500">
        <div className="md:h-screen">
          <Navbar />
          <div className="flex flex-col items-center justify-center p-5 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full flex flex-col  justify-center m-5 md:m-0 pb-5 md:pb-0">
                <div className="text-5xl md:text-7xl text-white font-bold">We care about <br /> your smile</div>
                <p className="text-lg text-white md:mt-7 md:mr-5">Welcome to our dental practice, where your smile is our priority. We offer a range of dental services to keep your teeth healthy and beautiful.</p>
                <div className="flex gap-2 mt-5">
                  <Link href="#appointment" className="text-white shadow-sm bg-orange-400 rounded-full px-5 py-2">Book Online</Link>
                  <button className="border-2 border-white text-white rounded-full px-5 py-2"><span className="flex gap-2 items-center"> <IoCall /> +880 1457-9999</span></button>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex flex-col gap-2">
                    <img src="/img/img6.jpg" className="h-60  w-full rounded-md" />
                    <img src="/img/img7.jpg" className="h-72  w-full rounded-md" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <img src="/img/img6.jpg" className="h-96  w-full rounded-md" />
                    <div className="bg-white cursor-pointer -mt-8 w-16 h-16 shadow-md shadow-blue-100 rounded-full flex items-center justify-center"><FaPlay className="text-xl text-blue-600" /></div>
                    <span className="text-white text-lg mt-2">Watch video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="bg-gray-50 p-5 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>    <img src="/img/img6.jpg" className=" w-full rounded-md" /></div>
          <div className="md:p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Caring for <span className=" text-blue-500"> Your Smile </span><br />with Expertise and Compassion</h2>
            <p className="mt-5 text-lg">At DentalCare, we believe in providing top-notch dental care with a personal touch. Our team of skilled professionals is dedicated to ensuring your comfort and delivering exceptional results. Learn more about our journey and values.</p>
            <button className="px-4 py-2 rounded-full bg-orange-500 text-white w-fit mt-5">Learn more</button>
          </div>
        </div>

      </section>
            {/* appointment */}
    <section id="appointment" className="p-5 md:p-20 flex flex-col bg-gray-50 ">
        <div className="bg-white rounded-2xl shadow-2xl shadow-blue-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-3 justify-center p-2 md:p-10">
              <div className="text-2xl md:text-4xl my-5">Book Appointment</div>
              <input type="text" className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-600 focus:bg-white " placeholder="Your name" />
              <input type="tel" className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-600 focus:bg-white " placeholder="Your phone number" />
              <input type="date" className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-600 focus:bg-white " placeholder="Appointment date" />
              <select className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-600 focus:bg-white ">
                <option value="">Select service</option>
                <option value="Teeth Cleaning">Teeth Cleaning</option>
                <option value="Fillings"> Fillings</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Dental Crowns">Dental Crowns</option>


              </select>
              <textarea placeholder="description..." className="bg-gray-200 px-4 py-2 rounded-xl focus:outline-none focus:ring focus:border-blue-600 focus:bg-white " rows={5} cols={5} />
              <button className="text-white shadow-sm bg-blue-600 rounded-full px-5 py-2">Book Now</button>



            </div>
            <div className="bg-blue-500 md:rounded-r-2xl ">
              <img src="/img/img9.png" className="w-full" />
            </div>
          </div>

        </div>
      </section>
      <section>
      <div id="services" className="p-5 md:p-20 flex flex-col bg-gray-50">
          <h2 className="text-center text-3xl md:text-4xl mb-5">Our Comprehensive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:my-10">
            <div className="flex flex-col gap-3 items-center  hover:bg-blue-600 hover:text-white  rounded-2xl  shadow-lg shadow-blue-600 p-5">
              <div className="w-20 h-20 rounded-full bg-white shadow-md shadow-blue-600">
                <img src="/img/img11.png" />
              </div>
              <h4 className="text-xl md:text-2xl">Teeth Cleaning</h4>
              <p className="text-lg"> This preventive measure helps maintain oral health by preventing cavities, gum disease, and other dental issues. more... <BsArrowUpRightCircle className="inline-block" />  </p>
            </div>
            <div className="flex flex-col gap-3 items-center  hover:bg-blue-600 hover:text-white  rounded-2xl  shadow-lg shadow-blue-600 p-5">
              <div className="w-20 h-20 rounded-full bg-white shadow-md shadow-blue-600">
                <img src="/img/img11.png" />
              </div>
              <h4 className="text-xl md:text-2xl">Fillings</h4>
              <p className="text-lg">Fillings are used to repair cavities caused by tooth decay. The dentist removes the decayed portion of the tooth and fills it with a material. more... <BsArrowUpRightCircle className="inline-block" />  </p>
            </div>
            <div className="flex flex-col gap-3 items-center  hover:bg-blue-600 hover:text-white  rounded-2xl  shadow-lg shadow-blue-600 p-5">
              <div className="w-20 h-20 rounded-full bg-white shadow-md shadow-blue-600">
                <img src="/img/img4.png" />
              </div>
              <h4 className="text-xl md:text-2xl"> Teeth Whitening</h4>
              <p className="text-lg"> Teeth whitening is a cosmetic procedure that lightens the color of your teeth. It can be done in-office or at home with professional-grade whitening kits. more... <BsArrowUpRightCircle className="inline-block" />  </p>
            </div>
            <div className="flex flex-col gap-3 items-center  hover:bg-blue-600 hover:text-white  rounded-2xl  shadow-lg shadow-blue-600 p-5">
              <div className="w-20 h-20 rounded-full bg-white shadow-md shadow-blue-600">
                <img src="/img/img11.png" />
              </div>
              <h4 className="text-xl md:text-2xl">Dental Crowns</h4>
              <p className="text-lg">A dental crown is a cap placed over a damaged or decayed tooth to restore its shape, size, strength, and appearance.. more... <BsArrowUpRightCircle className="inline-block" />  </p>
            </div>
          </div>
        </div>
      </section>
      {/* consultant */}
      <section id="consultant" className="bg-blue-500 p-5 md:p-20 flex flex-col items-center justify-center">
        <div className="grid grid-cols-12">
          <div className="text-white col-span-12 md:col-span-7">
            <div className="md:p-10 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-4xl font-bold">Schedule Your Consultation Today</h2>
              <p className="text-lg mt-5">Ready to start your journey to better oral health? Book a consultation with our experts. We’ll discuss your concerns, answer your questions, and create a personalized treatment plan.</p>
              <div className="my-3">
                <h5 className="text-xl">Key Features of Our Consultation:</h5>
                <ul>
                  <li className="flex items-center gap-2 text-lg"><RxCheckCircled className="text-lg text-green-300" /> Affordable Costs</li>
                  <li className="flex items-center gap-2 text-lg"><RxCheckCircled className="text-lg text-green-300" /> Experienced Dentists</li>
                  <li className="flex items-center gap-2 text-lg"><RxCheckCircled className="text-lg text-green-300" /> Advanced Diagnostic Tools</li>
                  <li className="flex items-center gap-2 text-lg"><RxCheckCircled className="text-lg text-green-300" /> Comprehensive Oral Exam</li>
                  <li className="flex items-center gap-2 text-lg"><RxCheckCircled className="text-lg text-green-300" /> Comfort and Care</li>

                </ul>
              </div>
              <button className="text-white shadow-sm bg-orange-400 shadow-blue-100 rounded-full px-5 py-2 w-fit">Book Appointment</button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 mt-5 md:mt-0"><img src="/img/img19.jpg" className="w-full h-[40vh]  md:h-[70vh] rounded-2xl" /></div>

        </div>
      </section>

      {/* team */}
      <section id="team" className="p-5 md:p-20 flex flex-col bg-gray-50">
        <div className="text-2xl md:text-4xl mb-5">Meet Our Specialist Team</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="shadow-lg p-5 rounded-xl">
            <img src="/img/img13.jpg" className="rounded-lg h-60 md:h-72" />
            <p className="text-xl text-center mt-3">Mrs. specilist</p>
          </div>
          <div className="shadow-lg p-5 rounded-xl">
            <img src="/img/img16.jpg" className="rounded-lg h-60 md:h-72 w-full" />
            <p className="text-xl text-center mt-3">Mrs. specilist</p>
          </div>
          <div className="shadow-lg p-5 rounded-xl">
            <img src="/img/img23.jpg" className="rounded-lg h-60 md:h-72 w-full" />
            <p className="text-xl text-center mt-3">Mr. specilist</p>
          </div>
          <div className="shadow-lg p-5 rounded-xl">
            <img src="/img/img17.jpg" className="rounded-lg h-60 md:h-72 w-full" />
            <p className="text-xl text-center mt-3">Mrs. specilist</p>
          </div>
        </div>
      </section>


      {/* contact-us */}
      <section id="contact">
      <div className="p-10 md:p-20 flex flex-col bg-gray-50">
        <div className=" shadow-xl hover:shadow-blue-300  rounded-xl p-3 md:p-10 bg-white">
        <h5 className="text-center text-3xl my-2">Conact</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="flex gap-3 md:border-r-2 md:border-blue-500">
            <div>
              <div className="bg-blue-500  p-3 text-white rounded-lg"><MdMail className="text-white text-2xl" /></div>
            </div>
            <div>
              <h4 className="text- xl font-medium">Contact Me</h4>
              <div className="text-gray-500 dark:text-gray-400 font-medium">
                <p>+880 1457-9999</p>
                <p>support@dentalcare.com</p>
                <a href="#appointment" className="text-blue-500 underline">Book appointment</a>
              </div>
            </div>
          </div>
          <div className="flex gap-3 md:border-r-2 md:border-blue-500">
            <div>
              <div className="bg-blue-500  p-3 text-white rounded-lg"><TbClockHour5 className="text-white text-2xl" /></div>
            </div>
            <div>
              <h4 className="text- xl font-medium">Open hours</h4>
              <div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="my-4">Monday: 8am – 7pm </li>
                  <li className="my-4">Tuesday: 8am – 5pm </li>
                  <li className="my-4">Wednesday: 8am – 5pm </li>
                  <li className="my-4">Thursday: 8am – 7pm </li>
                  <li className="my-4">Friday: 8am – 5pm </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <div className="bg-blue-500  p-3 text-white rounded-lg"><LiaToothSolid className="text-white text-2xl" /></div>
            </div>
            <div>
              <h4 className="text- xl font-medium">Services</h4>
              <div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="my-4">Teeth Cleaning</li>
                  <li className="my-4">Fillings</li>
                  <li className="my-4">Teeth Whitening</li>
                  <li className="my-4">Dental Crowns</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </section>

      {/* gallery */}
      <section className="p-5 md:p-20 flex flex-col bg-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl md:text-4xl">Our Gallary</h3>
            <p className="text-lg mt-5">Explore our gallery to get a glimpse of the environment and people that <br /> make DentalCare special. From our modern facilities to our dedicated team, see what sets us apart.</p>
          </div>
          <button className="text-white shadow-sm bg-orange-400 shadow-blue-100 rounded-full px-5 py-2 w-fit">View All</button>
        </div>
        <div className="my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-96">
            <img src="/img/img18.jpg" className="rounded-2xl w-full h-96" />
            <div className="flex items-center h-96">
              <img src="/img/img24.jpg" className="rounded-2xl h-96" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <img src="/img/img21.jpg" className="rounded-2xl" />
            <img src="/img/img19.jpg" className="rounded-2xl" />
            <img src="/img/img15.jpg" className="rounded-2xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
            <img src="/img/img12.jpg" className="rounded-2xl" />
            <img src="/img/img20.jpg" className="rounded-2xl" />
            <img src="/img/img14.jpg" className="rounded-2xl" />
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </main>
  );
}
