export const API_ADDRESS = "http://localhost:3001";
// export const API_ADDRESS = "https://api-v1.liara.run";
export const GetPath=(typeOfPost)=>{
    switch (typeOfPost) {
        case ROOM_PATH:
            return  ROOM_PATH+"/";
        default:
           return  "/";
    }
}

export const ROOM_PATH="room";
export const PROVINCE_PATH="province";
export const CITY_PATH="city";
export const PROFILE_PATH="profile"

export const API_ADDRESS_ROOMS="rooms";
export const LINK_SHARE_TELEGRAM="tg://msg?text=";
export const LINK_SHARE_WHATSAPP="whatsapp://send?"