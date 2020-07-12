import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ZfN6HQS3QfqrKYYSIudMocfX_MIp7HVsnChvvKD8NcKOpYgeUE8x42W9TR4w5iOxszCD6ItnFSawinqE9PWM05E8HRPov0Yr9srzdeGoSZBbrcZ8POHeyWrD1GkDX3Yx",
  },
});
