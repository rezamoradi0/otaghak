import { ICON_BEDROOM, ICON_FLASH, ICON_FLOWER, ICON_GROUP, ICON_HOME, ICON_KEY, ICON_TOILET_PAPER, ICON_VIEW } from "./fontIcons";

export const ROOM_PAGE_TEXT = {
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
    moreDetail:"نمایش جزئیات بیشتر",
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
    aboutResidence:{
      about:"درباره اقامتگاه",
      shutter:{yes:"دربست",no:"غیر دربست",icon:<ICON_KEY/>},
      mainInfo:{text:"اطلاعات اصلی اقامتگاه",icon:<ICON_HOME/>},
      capacity:{text:"ظرفیت اقامتگاه",icon:<ICON_GROUP/>},
      bedService:{text:"سرویس خواب",icon:<ICON_BEDROOM/>},
      bathRoom:{text:"سرویس بهداشتی و حمام",icon:<ICON_TOILET_PAPER/>},
      view:{text:"بافت و چشم انداز",icon:<ICON_VIEW/>}
    },
    descriptionResidence:{
      header:"توضیحات اقامتگاه",
      property:"امکانات اقامتگاه:",
      access:"دسترسی اقامتگاه به اماکن تفریحی، رفاهی و خدماتی:"

    },
    propertyResidence:{
      header:"امکانات اقامتگاه",
      games:"لوازم و امکانات تفریحی اقامتگاه",
      billiards:"بیلیارد",
      footballTable:"فوتبال دستی",
      amenities:"امکانات رفاهی اقامتگاه",
      barbecue:"باربیکیو",
      grill:"سیخ کباب و منقل کباب",
      homeAppliances:"لوازم خانگی",
      digitalReceiver:"گیرنده دیجیتال",
      soundSystem:"سیستم صوتی",
      furniture:"مبلمان",
      tv:"تلویزیون",
      kitchenAppliances:"لوازم آشپزخانه",
      kettle:"کتری و قوری",
      centralKitchen:"آشپزخانه مرکزی",
      microwave:"فر/مایکروویو",
      oven:"اجاق گاز",
      cookingAccessories:"لوازم آشپزی",
      dishWashingAppliances:"لوازم ظرفشویی",
      refrigerator:"یخچال",
      washingMachine:"ماشین لباسشویی",
      heatingService:"سرویس گرمایشی",
      shoofaje:"شوفاژ",
      coolingService:"سرویس سرمایشی",
      fan:"پنکه",
      airConditioner:"کولر گازی",
      securityFacilities:"امکانات امنیتی اقامتگاه",
      CCTV:"دوربین مداربسته",
      securityDoor:"درب ضد سرقت",
      buildingFacilities:"امکانات ساختمان اقامتگاه",
      gazebo:"آلاچیق",
      parking:"پارکینگ",
      openParking:" پارکینگ روباز",
      pool:"استخر",
      indoorPool:"استخر سرپوشیده داخل ساختمان"
    }
  },
};
