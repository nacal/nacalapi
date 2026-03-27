import type { Profile } from "../src/types.js"

export const profile: Profile = {
  name: "nacal",
  bio: "Software Developer",
  avatar_url: "https://nacal.io/profile.png",
  links: [
    { label: "GitHub", url: "https://github.com/nacal" },
    { label: "Website", url: "https://nacal.io" }
  ],
  real_name: "Hikaru Nakata",
  email: "nacal.dev@gmail.com",
  location: {
    city: "Tokyo",
    country: "Japan",
    hometown: "Osaka",
    timezone: "Asia/Tokyo"
  }
}
