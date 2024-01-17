import {
  ICON_BEDROOM,
  ICON_FLASH,
  ICON_FLOWER,
  ICON_GROUP,
  ICON_HOME,
  ICON_KEY,
  ICON_TOILET_PAPER,
  ICON_VIEW,
} from "./fontIcons";

export const ROOM_PAGE_TEXT = {
  price: "تومان",
  header: {
    id: "شناسه",
    images: "تصاویر",
    information: "مشخصات",
    roles: "قوانین",
    comments: "نظرات",
    location: "موقعیت",
    date: "تقویم",
  },
  buttons: {
    share: "اشتراک گذاری",
    addFavorite: "افزودن به علاقه مندی",
    moreGuaranty: "بیشتر بدانید",
    moreDescription: "نمایش جزئیات بیشتر",
    moreProperty: "مشاهده همه امکانات",
    userProfile: "مشاهده پروفایل میزبان",
    shareWithTelegram: "ارسال با تلگرام",
    shareWithWhatsapp: "ارسال با واتساپ",
    copyLink: "کپی کردن لینک",
    moreDetail: "نمایش جزئیات بیشتر",
    moreComments: "مشاهده همه نظر ها",
  },
  popups: {
    share: {
      header: "اشتراک گذاری اقامتگاه",
      bodyHeader: "اقامتگاه را با دوستان خود به اشتراک بگذارید",
    },
  },
  body: {
    moreGallery: "مشاهده تصاویر بیشتر",
    imagesGallery: "تصاویر گالری",
    in: "در",
    shutter: "دربست",
    non_shutter: "غیر دربست",
    meter: "متر",
    guests: "مهمان",
    bedroom: "خواب",
    comment: "نظر",
    successRents: "رزرو موفق",
    tags: {
      1: {
        text: "پرایم",
        desc: "راحتی خیال شما با اقامتگاههای منتخب و آنی",
        icon: <ICON_FLOWER />,
      },
      2: {
        text: "رزرو آنی",
        desc: "راحتی خیال شما با اقامتگاههای منتخب و آنی",
        icon: <ICON_FLASH />,
      },
    },
    warranty: {
      header: "ضمانت اتاقک",
      warrantyText:
        "ضمانت تحویل اقامتگاه اتاقک، به مهمان اطمینان می‌دهد در صورت عدم لغو رزرو از سوی وی، اقامتگاهی که رزرو کرده‌است را با مشخصات ثبت شده در سایت، در زمان مقرر تحویل بگیرد و در غیر این صورت وجه واریزی خود را کاملا و بدون کسر هیچ‌گونه کارمزدی پس بگیرد.",
      warrantyKey: "اقامتگاه به مهمان تحویل داده نشده است",
      warrantyKeyText:
        "اتاقک امانتدار مبلغ رزرو شما است. درصورتی‌که اقامتگاهِ رزرو شده، در تاریخ و ساعت درج شده در سند رزرو، به شما تحویل داده نشود، حداکثر تا ساعت 9 صبح روز بعد از تاریخ شروع رزرو، مهلت دارید با پیگیری از پشتیبانی سایت اتاقک فرایند بازگشت مبلغ رزرو را انجام دهید. (نکته: پس از پایان مهلت مذکور، امکان استرداد مبلغ پرداخت شده وجود ندارد. ).",
      warrantyHome: "اقامتگاه با مشخصات مطابقت ندارد",
      warrantyHomeText:
        "درصورتی‌که اقامتگاه تحویل داده شده با مشخصات و آدرس ثبت شده در سند رزرو اختلاف فاحش داشته باشد، حداکثر تا 3 ساعت پس از ورود، مهلت دارید با پیگیری از پشتیبانی سایت اتاقک فرایند بازگشت مبلغ رزرو را انجام دهید. (پس از پایان مهلت مذکور، امکان استرداد مبلغ پرداخت شده وجود ندارد.) (اختلاف فاحش: اختلاف در امکانات اصلی اقامتگاه مانند استخر و نوع آن، تعداد اتاق خواب و غیره است.)   ",
      warrantyClean: "اقامتگاه کثیف است و نظافت نشده است",
      warrantyCleanText:
        "درصورتی‌که اقامتگاه تحویل داده شده به شکل مناسب نظافت نشده و موارد عدم نظافت به راحتی مشهود است، حداکثر تا 3 ساعت پس از ورود، مهلت دارید با پیگیری از پشتیبانی سایت اتاقک فرایند بازگشت مبلغ رزرو را انجام دهید. (پس از پایان مهلت مذکور، امکان استرداد مبلغ پرداخت شده وجود ندارد.).",
    },
    aboutResidence: {
      about: "درباره اقامتگاه",
      shutter: { yes: "دربست", no: "غیر دربست", icon: <ICON_KEY /> },
      mainInfo: { text: "اطلاعات اصلی اقامتگاه", icon: <ICON_HOME /> },
      capacity: { text: "ظرفیت اقامتگاه", icon: <ICON_GROUP /> },
      bedService: { text: "سرویس خواب", icon: <ICON_BEDROOM /> },
      bathRoom: { text: "سرویس بهداشتی و حمام", icon: <ICON_TOILET_PAPER /> },
      view: { text: "بافت و چشم انداز", icon: <ICON_VIEW /> },
    },
    descriptionResidence: {
      header: "توضیحات اقامتگاه",
      property: "امکانات اقامتگاه:",
      access: "دسترسی اقامتگاه به اماکن تفریحی، رفاهی و خدماتی:",
    },
    propertyResidence: {
      header: "امکانات اقامتگاه",
      games: "لوازم و امکانات تفریحی اقامتگاه",
      billiards: "بیلیارد",
      footballTable: "فوتبال دستی",
      amenities: "امکانات رفاهی اقامتگاه",
      barbecue: "باربیکیو",
      grill: "سیخ کباب و منقل کباب",
      homeAppliances: "لوازم خانگی",
      digitalReceiver: "گیرنده دیجیتال",
      soundSystem: "سیستم صوتی",
      furniture: "مبلمان",
      tv: "تلویزیون",
      kitchenAppliances: "لوازم آشپزخانه",
      kettle: "کتری و قوری",
      centralKitchen: "آشپزخانه مرکزی",
      microwave: "فر/مایکروویو",
      oven: "اجاق گاز",
      cookingAccessories: "لوازم آشپزی",
      dishWashingAppliances: "لوازم ظرفشویی",
      refrigerator: "یخچال",
      washingMachine: "ماشین لباسشویی",
      heatingService: "سرویس گرمایشی",
      shoofaje: "شوفاژ",
      coolingService: "سرویس سرمایشی",
      fan: "پنکه",
      airConditioner: "کولر گازی",
      securityFacilities: "امکانات امنیتی اقامتگاه",
      CCTV: "دوربین مداربسته",
      securityDoor: "درب ضد سرقت",
      buildingFacilities: "امکانات ساختمان اقامتگاه",
      gazebo: "آلاچیق",
      parking: "پارکینگ",
      openParking: " پارکینگ روباز",
      pool: "استخر",
      indoorPool: "استخر سرپوشیده داخل ساختمان",
    },
    timeRegulationsResidence: {
      header: "مقررات زمانی اقامتگاه",
      time: "ساعت",
      enterTime: "زمان ورود",
      exitTime: "زمان خروج",
      roleHeader: "قوانین اقامتگاه",
      animals: "شرایط ورود حیوان خانگی",
      party: "شرایط برگزاری مراسم",
      withShoes: "امکان تردد با کفش در محیط ساختمان      ",
      smoke: "استعمال دخانیات(سیگار، قلیان و...) در فضای داخلی ساختمان",
      yard: "امکان استفاده از حیاط و باغ",
      coupleIds: "ارائه مدرک محرمیت الزامی است",
      hostRoles: "قوانین میزبان",
      cancelHeader: "مقررات لغو رزرو",
      cancelType: {
        1: {
          header: "سختگیرانه",
          mainText:
            "بیشتر از 72 ساعت به زمان ورود: 80% کل مبلغ بازگشت داده می‌شود کمتر از 72 ساعت به زمان ورود: 0%شب اول + 80% باقی شب ها پس از ورود به اقامتگاه: بدون بازگشت هزینه",
          goodHeader: "لغو رزرو تا 72 ساعت مانده به زمان ورود روز کنسل شده",
          goodText: "کسر 20 درصد از مبلغ کل شب‌ها",
          middleHeader:
            "لغو رزرو در کمتر از 72 ساعت مانده به زمان ورود روز کنسل شده",
          middleText: "کسر کل مبلغ شب‌های کنسلی",
          badHeader: "لغو رزرو حین اقامت",
          badText:
            "کل مبلغ شب سپری شده + کل مبلغ سه شب بعد+ 20 درصد شب‌های باقی‌مانده",
        },
      },
    },
    commentResidence: {
      header: "نظرات مهمان ها",
      rate: "امتیاز",
      comment: "نظر",
      safe: "امنیت محله",
      accepting: "پذیرش میزبان",
      clean: "نظافت و تمیزی",
      communication: "ارتباط با مشتری",
      value: "ارزش کلی اقامتگاه",
      information: "صحت اطلاعات",
      case: "مورد",
      adminReply: "پاسخ ادمین : ",
    },
    positionResidence: {
      header: "موقعیت تقریبی اقامتگاه",
      text: "آدرس و موقعیت دقیق اقامتگاه، پس از رزرو برای شما ارسال خواهد شد.",
    },
    managerResidence: {
      responseTime: "زمان پاسخگویی",
      acceptRate: "میزان تایید رزرو",
      range: "حدود",
      percent: "درصد",
      profileBtn: "مشاهده پروفایل میزبان",
    },
    dateReservationResidence: {
      header: "تقویم و نرخ رزرو",
      childrenPrice: "نرخ ورود کودک",
      additionalPrice: "نرخ هر نفر اضافه",
      forPerson: "به ازای بیشتر از ",
      person: "نفر",
      primeText: "رزرو سریع اقامتگاه بدون نیاز به تایید میزبان",
      priceText: "قیمت‌ها به هزار تومان است. (3 صفر حذف شده)",
    },
  },
};

export const DATE_COMPONENT_TEXT = {
  dayNames: {
    0: "شنبه",
    1: "یکشنبه",
    2: "دوشنبه",
    3: "سه‌شنبه",
    4: "چهارشنبه",
    5: "پنجشنبه",
    6: "جمعه",
  },
  monthNames: {
    1: "فروردین",
    2: "اردیبهشت",
    3: "خرداد",
    4: "تیر",
    5: "مرداد",
    6: "اردیبهشت",
    7: "مهر",
    8: "آبان",
    9: "آذر",
    10: "دی",
    11: "بهمن",
    12: "اسفند",
  },
  monthNumber: {
    فروردین: 1,
    اردیبهشت: 2,
    خرداد: 3,
    تیر: 4,
    مرداد: 5,
    اردیبهشت: 6,
    مهر: 7,
    آبان: 8,
    آذر: 9,
    دی: 10,
    بهمن: 11,
    اسفند: 12,
  },
};

export const SLIDER_COMPONENT_TEXT = {
  otherRooms:"سایر اقامتگاه‌های مشابه در منطقه ",
  allBtn:"نمایش همه",
  tags: {
    1: {
      text: "رزرو آنی",
      description: "رزرو سریع اقامتگاه بدون نیاز به تایید میزبان",
      icon:<ICON_FLASH className="fa-solid text-yellow-400"/>
    },
    2: {
      description: "رزرو آنی اقامتگاه ممتاز ، همراه بسته بهداشتی",
      text: "پرایم",
      icon:<ICON_FLASH className="fa-solid text-blue-500"/>
    },
    3: {
      text: "شبانه",
      description: " رزرو شبانه اقامتگاه با امکان تحویل 24 ساعته",
      icon:<ICON_FLASH className="fa-solid text-purple-600"/>
    },
  },
};

export const LINKS_TEXT={
  searchOtherRooms:"جستجو در اقامتگاه‌های مشابه"
}
export const RESERVE_TABLE_TEXT={
  fromPrice:"هر شب از",
  comment:"پس از ثبت درخواست می توانید با میزبان خود مستقیما گفتگوی آنلاین داشته باشید",
  enterTime:"تاریخ ورود",
  exitTime:"تاریخ خروج",
  datePickerGuide:"راهنمای تقویم",
  datePickerJourney:"تاریخ سفر",
  personCount:"تعداد نفرات را انتخاب کنید",
  kidsRoles:"کودکان تا زیر 3 سال در صورتحساب لحاظ نمی‌گردند.",
  selectDate:"انتخاب تاریخ",
  selectPersons:"انتخاب تعداد نفرات",
  reserveRequest:"درخواست رزرو (رایگان)"

}