export interface Video {
  id: string;
  title: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  thumbnailUrl: string;
  duration: string;
  isVerified?: boolean;
}

export const mockVideos: Video[] = [
  {
    id: "v1",
    title: "The Art of Visual Storytelling: How to Composition Like a Pro",
    channel: "Visual Studio",
    channelAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwEZqWmhPg0ma9g-nrgNZvENPHscSaEHNn1OtvlJbqcRpSJFKuEHSNoRo5MYXHBlRP-iZnIq7BfC1EYmK-k-3fkB0TB0BHBlCfGXkOdGx7T4q8suIqnxzFzcd71gUIQPBqaKqCvUnSwtyiX3iwwpYpJ-SURyphs2_VsHUK-IIqhSDZn2xTGt6q8_Y7s9NLe4wfdc4yNgfri4sJFx5GPPZbSIcudyJrbsPMdPGcI0Q0bCPzHOx8tGoYPGlQXAiuTWLuq0Vq1skdZRQ",
    views: "1.2M views",
    timestamp: "2 days ago",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVOXr3Of68UqLHRlcdY4pM9l3uk83_evSetrVtoOUgc3Gd-g9G5EzIngaSd6k7QGon228TNta2-0EsNHM1KFzaJlQKq8bhm419W5XhvkdrRSHR6QA9Be8zCMgwz6Sr5FdClW7coeyety7CtYHc5TIqbqgeyXcnP7R_navU2tOSi5ouJKwcJN9QkoHzyVP3BC2FhD-o-n1Uqrh2BBBCr0fqq61X273zxytBUIOtAeeMuxY8AFoYZwq7Ad5QuekQmnsNJHXI4EFzUcs",
    duration: "12:45",
    isVerified: true,
  },
  {
    id: "v2",
    title: "Building the Ultimate 2024 Developer Setup",
    channel: "TechFlow Designs",
    channelAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2hrJE1GTLuiGsbQlpbiUeCq8rlq1FNSLeRBzBK8uQi48htVsmvvkCFhnBnWyd8qrFHFBkWk61tGtHQUlxnaBGnQ4ZODCqKYqq6B4EFJzcRDnlj-REhDuerbq-0GeIwuJkjA5WvgjA6tAhd6RPF_bf4Pn11yDLAXFd77HdVbp3Qpao8EOFBrDS6rkMysYfX8UmTIqdcqDVefqL2BV-k58mWb1_Y0Ea3v_zUWDCqSsxzw16vDa7cAw2e2DqeBGN924KdGrF71B-7Z8",
    views: "850K views",
    timestamp: "1 week ago",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9NHjaJQjsrLJ5Ccwgq6GsJwBYaK4Adb3JoOidLbUoEq8HMBROq7oVNLE-qp9b1Nw4hGISfyK_kaqpSoUPqr19y-iU26G-QgcZfW6Gw22vmjIFJ7ojxlBlfVExhOh7WSDONZ7Zw-cvauok95Ekr13bfcFOCnJUuPtxKJstiPzcSY-1JCzjU2-yqAs_VXHsfa44lnwyhvoBscH73nuB5wDAhRULcCix8NCuJttyhxJ4J4kpMGoYzqgxW18nmXSz1Ff8HDhLBYPHY3s",
    duration: "24:10",
  },
  {
    id: "v3",
    title: "Quantum Computing Explained: Is it the End of Cryptography?",
    channel: "SciMinded",
    channelAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb7knjuAGv8pp6KV8I_hAaPgixBTFjp8YI_NT96-4fj7kPPpxb4IlUJ1Pg5hWvk9IPQvEy5NGohTjWZ5KvpUMG6POciLr5obZ2Eo5f7r0FYXFR-prlzlYpGgCQR_1W8pnZrp-BBYaIUtrdLn3zRNnNIneHvNO0tub6uX1xVeXyhMabFl0Iz6YokzfWhl1_u1tj00PgLw2L5YNDjYdeZYxHxmU9BT-lgEyTQcwz0rf8I0BPOv0SPP3oL1HkxY0MB5kPECIhspIrq-k",
    views: "3.4M views",
    timestamp: "1 month ago",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBps-PGKcBurclBiOo_ytxBFzIDEiDHCleF2aSxbjnWvbcyFCUWFLgjHB9zWiRr1ceF58CYL0w_brfXI9EAD-wZA2QJeaCc0cWiGgrG7Q4VfbiB52lHn8lV3V_dldsWwMjmES4mp0L3eZXAimSU3D_WRJkfgpwpxpB0Qm5m0luQoxJhP1AgSmX3FQdDrBMUPPms7qIPlbUHtVhrXNeFqdF2ss8SlhGVd0W5wTl_OtLyd9FhCjvFInfvL16GSVwJEXJipUKnO6xTOJQ",
    duration: "15:52",
  },
  {
    id: "v4",
    title: "Deep House Sessions 2024 \u2022 Work & Study Mix",
    channel: "Midnight Beats",
    channelAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuClxin_LiWIZOwEXnhVvJue5r2HByT61WyI264Tz9-Bbc8eZmBiam3hp2W1ikGCD9v_LUDhY9wGozZyGXc_1HLYG5Sm5XjRPE0EwZdoNb9iVcj8vVvHYw167-SUl91SxdO-6TWeFUnZ-ZWb1v-AN4zhK_Qhz8akzY241zz0_Ec2oRpqxAMiSF70Bnf6S23MFT6VO-s5haTdiVIQLdORHgz5kXeustRPFU8afFXYmy1l1-MvP38hHXiFXOHirIB7ryPzE7W2fM0tAQ0",
    views: "450K views",
    timestamp: "Live",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd1Avwup9JVX-e2ZJB2f99Db6aYE0W9Z4VWVEC-zS0o6JGUfIXGzow7X_x7iyP7_MOHEJA6viLj0_Odj6za3hfpQNMDm_tvwtHjsR9QH-G6XiYm8bd65Isor47MpmAJGCUL_2GBE97wTDPpKxXeyU7eaG3DKhTVXV2pGXoRMweeQPFyEnO-PFNis7sBrnm3z0JiG9ESnwG_KWgbWS2KI3orvSl6kaTFNw_X1LoemiqBLhbihH0bDJdvTuGNGetbs31G_wqSzKNtaA",
    duration: "3:14:00",
  },
  {
    id: "v5",
    title: "10 Hidden Paradises You Need to Visit Before They Disappear",
    channel: "Wanderlust Diaries",
    channelAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdDpphcfccRh8hqb9JBsZtgETMqRmK2In3pME_EWyK_j4VdSjCaVbtw7udnstI2KrUndxxM6Ne4ayLcb8VEAUYIIyv_KMXoqmre6bC4xwk7eeTatxYEtO-dBosIYLncd5bRI5YHWFs43PgDyQF6y7lBOULfpGSrC6ZqoKLqXS25DGdnbjl_AZWjCljBBPx4yOb-AOPmQ39EMyy1t8Z6xW6Nyz-bWBxSAU2Lu7Nsz1YJF7o7bv_DEv0ROITCUdNFhQjnWFIFIQZd-k",
    views: "2.1M views",
    timestamp: "3 days ago",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8dO3yGkz3GTg9j3VxKiQZJqKdMHLJthuNGuBIVaUBtJP1zG1ymJ5ZBeBaBD2ChHtRWuhStaj7cqtraOqpbvRr4N6ozXn-8CQWwfUh5YENcymgj7H-RlKNYVvA1_eiXLNZXTvOfzcKO6cnpf1eME5qV047Bceu6nuc6r5wtAdPwE8zYkbWDo-A5Vh-FlzRVyorQlmpSdnoF_JyrrfUUheRg3ZAkr8T_YafKMvyBNciZE4r0VGDMgtdgVvZtsLNecu5SoKNSJU3N8A",
    duration: "18:22",
    isVerified: true,
  },
  {
    id: "v6",
    title: "Mastering Tailwind CSS: 5 Pro Tips to Speed Up Your Workflow",
    channel: "Code Masters",
    channelAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCui6oZ1ReBVZNS7ODDEN5Lathe9VublQnNp-1m94-b1nkc6cyRtuQtAiut8cihhSBvt1XPb9wyI85vXIhQAUETO0E8fiw748_nXlQ9A92FbEiumDR9PgZFM45L3L4LwKxDzw2V151nVGGqN0pBcgIvsodkMIv5zdWhaWyiTuIU0gYGVytN8UX5Romh2QT0gtaxMaqBmFhq8PvOgRTfz6KLugbcYrN6AjMiRjdrxFm9ExKy6HYOKubQGG9f07sSKGmbSmqYdEegXhA",
    views: "120K views",
    timestamp: "5 hours ago",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyD-HX6_BkdT_KkwfW7xmewGMxKwxRPIeIpvd67aWZWsXZCCwM5X2EHv2vv0ebNk5spXfebtytZVCp89ogs2Cc6eWlViPkrTEBd_1nBYoTy-b905EdwzOyoyhvYfYP1v-35BP2hd0FGHoYMVBunnxfZNhjsLrUOzqaz3XRDz_fidEjIlr0q7Tv44b9zlkHOn3NXdZH6rkth5_Lm-KvOZ5A3agOPCYi70i8inXm-GI7NIKx99me33APHr46Np-Dmg0YGILRQVNeaTg",
    duration: "08:05",
  },
  {
    id: "v7",
    title: "The 2024 Market Crash: Is Your Portfolio Ready?",
    channel: "Wealth Strategy",
    channelAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuATQCKxCXQ8Bi8Zfe1SRhQEqUURCl4Fk5NFjafqLmIB-JWkQEr-F0OYbN6AG-Q9V1wtOCsy1XCzBhStCvvB1IyqYZliSUhLegWixle8V4aVrG4ihSg_sqQYNbtHDAx88SlDFkNVGYohRzk8VTY9asmNbCV-ip-rd3n04Xl69EGdzAJGcv2raEHSXhGCXrohqn9UVa3c0AQRRpSxWVUEHNh072_UXTvQ0627YhVf7fBJYjGLY0TRbBJFUgFY1czlG3Eao3DI2G16TC0",
    views: "620K views",
    timestamp: "4 days ago",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfv3uOcruYv8oUL7oJqlDr3ME-gMFiLMiHZ0uNDNDF55TafHYaFCENRe36OqrRQKihOZDs5Th3nZi_0nucm9qPI1UNerqRUku5rONDfmn-CQkzM3uv-hHTu_tNEAb29gfcL6G-SvLbU2Chug_8izhnvBRDxCyn4cOpXLSNLbnDuQc6ljC06Pbwm9U7rqcnlyrzvIOtSKAI7_20meSchTDWbEz8hPDtsZNrBIypuAtIQXzAOkBdiINaCk20ylo5k4of_y2YlNEw8sU",
    duration: "10:30",
  },
  {
    id: "v8",
    title: "The Secret to Authentic Neapolitan Pizza at Home",
    channel: "Chef's Table",
    channelAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJIhzICviEkCY9oMsNH38ShPEAJSRJnbQqsdz-zdZXrCQrbIKjetX2t6JI7ZGYu2igYcGK9WOdLqCYoZ80O8NYlIZTgqPpiRs4EB2CGUCEpBGaF88mKYyRTrXCHuKx4fxKxZkEaB5kgYHNWrBItnLKOPP2H6DqphbjmNRH2kegLEKEnn9eX2lcLNclwYXpQtX2utGmAUqFZ7U9ffVlOlCg45oEe5oWlWRd9GryElXg3VqbtZi55OjJzR_DZZit4-OimgZAxoZNDhg",
    views: "3M views",
    timestamp: "2 weeks ago",
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_KuNSzQacm3-UUpW9CUz6hC3Op6PAZHd0gPCBmX9fG9J8yfzV37UHooo4XSWp4rCU8tU-Uy6ey0lDmUSe9b5n8CgWS7dw1uMXdMNijWL6k3GmhMxUm9n6tQRdOPZhcwRGWpA93-FO4j2-fMCDFesCucVY9ufgoZziXH6ux8D8ITZU7depOh5D-2twheS9UmtPrbCWkj6rUWJJHon_fzCH0udB80y99OLEkx6EjBI_w-vqHTXrQLDTngUH65ZFANvGpoFcNkX8p_k",
    duration: "14:08",
  },
];
