import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/farscada/farscada2.png";
import work2 from "../assets/images/work_images/2.jpg";
import work3 from "../assets/images/work_images/3.jpg";
import work4 from "../assets/images/work_images/4.jpg";
import work5 from "../assets/images/work_images/5.jpg";
import work6 from "../assets/images/work_images/6.jpg";
import work7 from "../assets/images/work_images/7.jpg";
import work8 from "../assets/images/work_images/8.jpg";
import work9 from "../assets/images/work_images/9.jpg";
// works small images
import workSmall1 from "../assets/images/farscada/farscada2.png";
import workSmall2 from "../assets/images/work_images/small/2.jpg";
import workSmall3 from "../assets/images/work_images/small/3.jpg";
import workSmall4 from "../assets/images/work_images/small/4.jpg";
import workSmall5 from "../assets/images/work_images/small/5.jpg";
import workSmall6 from "../assets/images/work_images/small/6.jpg";
import workSmall7 from "../assets/images/work_images/small/7.jpg";
import workSmall8 from "../assets/images/work_images/small/8.jpg";
import workSmall9 from "../assets/images/work_images/small/9.jpg";
// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

import img1 from "../assets/images/slider/brand-1.png";
import img2 from "../assets/images/slider/brand-2.png";
import img3 from "../assets/images/slider/brand-3.png";
import img4 from "../assets/images/slider/brand-4.png";
import img5 from "../assets/images/slider/brand-5.png";
//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
import icon2 from "../assets/images/icons/icon-3.svg";
import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon5 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser, FaAward } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "FarsCada",
      title: "Solar Power Station Monitoring",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "FarsCada",
      langages: "Node js , Express js , SQL Server , React Js",
      link: "http://193.151.133.70/",
      linkText: "Develop",
      description: "",
    },
    {
      id: "2",
      tag: "Web Design",
      title: "وبسایت دیجی کالا",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      client: "دیجی کالا",
      langages: "HTML, CSS, Javascript",
      link: "https://www.digikala.com",
      linkText: "دیجی کالا",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "3",
      tag: "Logo",
      title: "لوگوی بانی مد",
      img: work3,
      imgSmall: workSmall3,
      bg: "#FFF0F0",
      client: "بانی مد",
      langages: "ایلستریتور",
      link: "https://www.banimode.com",
      linkText: "بانی مد",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "4",
      tag: "Video",
      title: "تیزر تبلیغاتی",
      img: work4,
      imgSmall: workSmall4,
      bg: "#E9FAFF",
      client: "اسنپ",
      langages: "افترافکت",
      link: "https://www.snapp.com",
      linkText: "اسنپ",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "5",
      tag: "UI/UX",
      title: "طراحی رابط کاربری اپلیکیشن",
      img: work5,
      imgSmall: workSmall5,
      bg: "#FFFAE9",
      client: "ابراهیم عزیزی",
      langages: "فتوشاپ، فیگما",
      link: "https://www.figma.com",
      linkText: "فیگما",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "6",
      tag: "Video",
      title: "تیزر معرفی محصول",
      img: work6,
      imgSmall: workSmall6,
      bg: "#F4F4FF",
      client: "اسنپ",
      langages: "افترافکت",
      link: "https://www.snapp.com",
      linkText: "اسنپ",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "7",
      tag: "UI/UX",
      title: "طراحی رابط کاربری اپلیکیشن",
      img: work7,
      imgSmall: workSmall7,
      bg: "#FFF0F8",
      client: "ابراهیم عزیزی",
      langages: "فتوشاپ، فیگما",
      link: "https://www.figma.com",
      linkText: "فیگما",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "8",
      tag: "Web Design",
      title: "وبسایت دیجیاتو",
      img: work8,
      imgSmall: workSmall8,
      bg: "#FFF0F8",
      client: "دیجی کالا",
      langages: "HTML, CSS, Javascript",
      link: "https://www.digikala.com",
      linkText: "دیجی کالا",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "9",
      tag: "Logo",
      title: "لوگوی آپارات",
      img: work9,
      imgSmall: workSmall9,
      bg: "#FCF4FF",
      client: "آپارات",
      langages: "ایلستریتور",
      link: "https://www.banimode.com",
      linkText: "آپارات",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blogSmall1,
      date: "9 مرداد",
      category: "Inspiration",
      title: "چگونه با ایجاد یک لیست ایمیل صاحب مخاطبان خود شوید",
      bg: "#FCF4FF",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "4",
      img: blog4,
      imgSmall: blogSmall4,
      date: "1 مرداد",
      category: "Inspiration",
      title: "هر آنچه که باید در مورد دسترسی به وب بدانید",
      bg: "#EEFBFF",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "2",
      img: blog2,
      imgSmall: blogSmall2,
      date: "26 تیر",
      category: "Web Design",
      title: "پنجره میدونه کنارت بگه",
      bg: "#FFF0F0",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "5",
      img: blog5,
      imgSmall: blogSmall5,
      date: "10 تیر",
      category: "Inspiration",
      title: "10 ابزار برتر برای یادگیری عمیق در سال 1401",
      bg: "#FCF4FF",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "3",
      img: blog3,
      imgSmall: blogSmall3,
      date: "18 خرداد",
      category: "Inspiration",
      title: "چگونه با ایجاد یک لیست ایمیل صاحب مخاطبان خود شوید",
      bg: "#FCF4FF",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
    {
      id: "6",
      img: blog6,
      imgSmall: blogSmall6,
      date: "12 خرداد",
      category: "Inspiration",
      title: "هر آنچه که باید در مورد دسترسی به وب بدانید",
      bg: "#EEFBFF",
      description: "پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم… هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.",
    },
  ];

  // Menu items for Homepage One
  const menuItem = [
    // {
    //   id: "01",
    //   name: "خانه",
    //   link: "/home/homePage",
    //   icon: <AiOutlineHome />,
    // },
    // {
    //   id: "02",
    //   name: "درباره",
    //   link: "/home/about",
    //   icon: <FaRegUser />,
    // },
    // {
    //   id: "06",
    //   name: "رزومه",
    //   link: "/home/resume",
    //   icon: <CgNotes />,
    // },
    // {
    //   id: "03",
    //   name: "کارها",
    //   link: "/home/works",
    //   icon: <FiCodesandbox />,
    // },
    // {
    //   id: "04",
    //   name: "وبلاگ",
    //   link: "/home/blogs",
    //   icon: <FaBlogger />,
    // },
    // {
    //   id: "05",
    //   name: "تماس",
    //   link: "/home/contact",
    //   icon: <RiContactsBookLine />,
    // },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
  
    {
      id: "01",
      name: "resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "02",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    // {
    //   id: "03",
    //   name: "کارها",
    //   link: "/works",
    //   icon: <FiCodesandbox />,
    // },
    // {
    //   id: "04",
    //   name: "وبلاگ",
    //   link: "/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img1,
    img2,
    img3,
    img4,
    img5,
  ];

  // experience items for about page
  const experienceArray = [

    {
      id: "1",
      icon: icon,
      title: "Backend Develeoper ",
      des: "the make of a database and software written in a server-side language, which is run on web servers.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: icon1,
      title: "Designing Database",
      des: "the make of a database and software written in a server-side language, which is run on web servers.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: icon5,
      title: "Frontend",
      des: "the make of a database and software written in a server-side language, which is run on web servers.",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
  ];

  // Resume items for Resume page
  const resumeArray = [
    {
      type: "Education",
      icon: MdOutlineSchool,
      id: "01",
      date: "Jan. 2019 – Nov. 2021",
      title: "Bachelor of Science, Computer Engineering",
      place: "Seman, Iran",
      bg: "#FFF4F4",

      id1: "02",
      date1: "Jan. 2016 – Mar. 2019" ,
      title1: "Associate of Science, Computer Engineering",
      place1: "Seman, Iran",
      bg1: "#FFF1FB",

    },
    {
      type: "Experience",
      icon: MdOutlineBusinessCenter,
      id: "04",
      date: "Dec. 2020 – Present",
      title: "Backend Developer",
      place: "Hamrah Hooshmand Technology Co.",
      bg: "#EEF5FA",

      id1: "05",
      date1: "Aug. 2020 – Dec. 2020",
      title1: "Internship (Developer)",
      place1: "Hamrah Hooshmand Technology Co.",
      bg1: "#F2F4FF",
    },
    {
      type: "جوایز",
      icon: FaAward,
      id: "07",
      date: "1395 - 1397",
      title: "طراح گرافیک",
      place: "مجموعه دیجی‌کالا",
      bg: "#FCF4FF",

      id1: "08",
      date1: "1394 - 1395",
      title1: "برنامه‌نویس سمت وب",
      place1: "مجموعه اسنپ",
      bg1: "#FCF9F2",

      id2: "09",
      date2: "1393 - 1394",
      title2: "بهترین فریلنسر",
      place2: "مجموعه پونیشا",
      bg2: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: " BackEnd Develop",
      number: "80",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Designing Database",
      number: "70",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "FrontEnd Develop",
      number: "60",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Linux",
      number: "56",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "تلفن",
      item1: "989125226561+",
      item2: "989125226561+",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "ایمیل",
      item1: "support@gmail.com",
      item2: "example@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "آدرس",
      item1: "آجودانیه، کوچه هفتم",
      item2: "ایران، تهران",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    menuItemTwo,
    experienceArray,
    sliderImg,
    resumeArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
