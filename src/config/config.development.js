import axios from "axios";

export default axios.create({
  baseURL: "https://aeb1-119-76-182-47.ap.ngrok.io",
});

export const config = {
  development: true,
  logo: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/531e9c15775071.56296c2190982.png",
  logoSignIn:
    "https://cdn130.picsart.com/307401750167211.png?type=webp&to=min&r=480",
  footerLogo:
    "https://images.wondershare.com/images2022/visual-trendbook-v2/topbanner-left-pic.png",
  title: "??",
  footer: "Skeliton",
  secret: "SkelitonxNeerCode",
};

export const path = {
  login: "/auth/login/",
  accessDenied: "/auth/access/",
  manageUser: "/manageUser/",
};

export const pathApi = {
  login: "/user/login",
  register: "/user/createUser",
  uploadImageUser: "/user/uploads-image/users",
  deActiveAccount: "/user/deleteUserById/",
  updateUser: "/user/update/",
  getUserById: "/user/getUserById/",
};
