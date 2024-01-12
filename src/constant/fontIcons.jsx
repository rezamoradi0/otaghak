
const CreateIconComponent = (props) => {
  const _classNames = `${props.fontAwesome} ${props.className}`;
  return <i className={_classNames} onClick={props.onClick}></i>;
};
export const ICON_SHARE = (props) => {
  return (
    <CreateIconComponent
      fontAwesome="fa-sharp fa-regular fa-share-nodes text-xl font-semibold"
      {...props}
    />
  );
};
export const ICON_WHATSAPP = (props) => (
  <CreateIconComponent fontAwesome={"fa-brands fa-square-whatsapp "} {...props} />
 );
 
export const ICON_HEART = (props) => {
  return <CreateIconComponent fontAwesome="fa-regular fa-heart" {...props} />;
};

export const ICON_TELEGRAM = (props) => (
  <CreateIconComponent fontAwesome="fa-brands fa-telegram" {...props} />
);
export const ICON_LINK = (props) => (
  <CreateIconComponent
    fontAwesome="fa-regular fa-link-horizontal "
    {...props}
  />
);
export const ICON_RIGHT = (props) => (
  <CreateIconComponent fontAwesome={"fa-solid fa-chevron-right"} {...props} />
);
export const ICON_LEFT = (props) => (
  <CreateIconComponent fontAwesome={"fa-solid fa-chevron-left"} {...props} />
);
export const ICON_RULER = (props) => (
  <CreateIconComponent
    fontAwesome={"fa-light fa-ruler-horizontal"}
    {...props}
  />
);

export const ICON_BEDROOM = (props) => (
  <CreateIconComponent fontAwesome={"fa-regular fa-bed-front"} {...props} />
);
export const ICON_USER = (props) => (
  <CreateIconComponent fontAwesome={"fa-regular fa-user"} {...props} />
);
export const ICON_CIRCLE = (props) => (
  <CreateIconComponent fontAwesome={"fa-solid fa-circle"} {...props} />
);
export const ICON_KEY = (props) => (
  <CreateIconComponent fontAwesome={"fa-regular fa-key "} {...props} />
);
export const ICON_MANAGER = (props) => (
  <CreateIconComponent fontAwesome={"fa-regular fa-user-tie"} {...props} />
);
export const ICON_STAR = (props) => (
    <CreateIconComponent fontAwesome={"fa-solid fa-star "} {...props} />
);
export const ICON_CORRECT = (props) => (
  <CreateIconComponent fontAwesome={"fa-regular fa-circle-check "} {...props} />

);
export const ICON_FLASH = (props) => (
  <CreateIconComponent fontAwesome={"fa-regular fa-bolt "} {...props} />

);
export const ICON_CHECK_SHIELD = (props) => (
  <CreateIconComponent fontAwesome={"fa-regular fa-shield-check "} {...props} />

);
export const ICON_FLOWER = (props) => (
  <CreateIconComponent fontAwesome={"fa-regular fa-flower "} {...props} />

);
export const ICON_TOILET_PAPER = (props) => (
  <CreateIconComponent fontAwesome={"fa-sharp fa-regular fa-toilet-paper-blank-under "} {...props} />
    
);
export const ICON_VIEW = (props) => (
  <CreateIconComponent fontAwesome={"fa-regular fa-camera-viewfinder  "} {...props} />

);
export const ICON_HOME = (props) => (
  <CreateIconComponent fontAwesome={"fa-regular fa-house  "} {...props} />
);
export const ICON_GROUP = (props) => (
    <CreateIconComponent fontAwesome={"fa-regular fa-user-group "} {...props} />
);
export const ICON_GAME = (props) => (
 <CreateIconComponent fontAwesome={"fa-regular fa-gamepad-modern "} {...props} />
  
);

export const ICON_BILLIARDS = (props) => (
 <CreateIconComponent fontAwesome={"fa-light fa-pool-8-ball "} {...props} />
);
export const ICON_FOOTBALL = (props) => (
 <CreateIconComponent fontAwesome={"fa-light fa-futbol "} {...props} />
);
export const ICON_BARBECUE = (props) => (
 <CreateIconComponent fontAwesome={"fa-light fa-grill-hot "} {...props} />
);
export const ICON_GRILL = (props) => (
 <CreateIconComponent fontAwesome={"fa-light fa-shish-kebab "} {...props} />
);
export const ICON_DIGITAL_RECEIVER = (props) => (
 <CreateIconComponent fontAwesome={"fa-light fa-radio "} {...props} />
);
export const ICON_SOUND_SYSTEM = (props) => (
 <CreateIconComponent fontAwesome={"fa-light fa-speaker "} {...props} />
);
export const ICON_FURNITURE = (props) => (
 <CreateIconComponent fontAwesome={"fa-light fa-loveseat "} {...props} />
);
export const ICON_TV = (props) => (
 <CreateIconComponent fontAwesome={"fa-light fa-tv-retro "} {...props} />
);
export const ICON_AMENITIES = (props) => (
 <CreateIconComponent fontAwesome={"fa-sharp fa-regular fa-lamp-desk "} {...props} />
);
export const ICON_HOME_APPLIANCES = (props) => (
 <CreateIconComponent fontAwesome={"fa-regular fa-hat-chef "} {...props} />
);

export const ICON_MAP_MARKER = (props) => (
  <CreateIconComponent fontAwesome={"fa-solid fa-location-dot "} {...props} />
 );

export const ICON_KEY_STROKE_IMG = ({ className = "" }) => (
  <img
    className={` w-full ${className}`}
    src="/images/icon/no-delivery.svg"
    alt="کلید"
  />
);
export const ICON_BROOM_STROKE_IMG = ({ className = "" }) => (
  <img
    className={` w-full ${className}`}
    src="/images/icon/dirty-uncln.svg"
    alt="جارو"
  />
);
export const ICON_HOME_STROKE_IMG = ({ className = "" }) => (
  <img
    className={` w-full ${className}`}
    src="/images/icon/no-matching-specs.svg"
    alt="خانه"
  />
);
