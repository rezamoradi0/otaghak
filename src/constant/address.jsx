export const API_ADDRESS = "http://localhost:3001";
export const ROOM_PATH="room";
export const GetPath=(typeOfPost)=>{
    switch (typeOfPost) {
        case ROOM_PATH:
            return  ROOM_PATH+"/";
        default:
           return  "/";
    }
}

export const PROVINCE_PATH="province";
export const CITY_PATH="city";
export const API_ADDRESS_ROOMS="rooms";
export const LINK_SHARE_TELEGRAM="tg://msg?text=";
export const LINK_SHARE_WHATSAPP="whatsapp://send?"