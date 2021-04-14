import React from "react";
import classNames from "classnames";

interface CardProps {
  name: string;
  date: string;
  killometers: string;
  lunar: string;
  size: string;
  danger: boolean;
  kilometersDistance: boolean;
  onAdd(payload: any): void;
  id: string;
  cart: any[];
}

const Card: React.FC<CardProps> = ({
  name,
  date,
  killometers,
  lunar,
  size,
  danger,
  kilometersDistance,
  onAdd,
  id,
  cart,
}) => {
  function getDate(date: string) {
    const year = date.split("-", 7)[0];
    const month = date.split("-", 7)[1];
    const day = date.split("-", 7)[2];

    if (month === "01") {
      return `${day} января ${year}`;
    } else if (month === "02") {
      return `${day} февраля ${year}`;
    } else if (month === "03") {
      return `${day} марта ${year}`;
    } else if (month === "04") {
      return `${day} апреля ${year}`;
    } else if (month === "05") {
      return `${day} мая ${year}`;
    } else if (month === "06") {
      return `${day} июня ${year}`;
    } else if (month === "07") {
      return `${day} июля ${year}`;
    } else if (month === "08") {
      return `${day} августа ${year}`;
    } else if (month === "09") {
      return `${day} сентября ${year}`;
    } else if (month === "10") {
      return `${day} октября ${year}`;
    } else if (month === "11") {
      return `${day} ноября ${year}`;
    } else if (month === "12") {
      return `${day} декабря ${year}`;
    }
  }

  function withSpaces(x: string): string {
    return Math.ceil(Number(x))
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const onAddCart = (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      date: getDate(date),
      distance: withSpaces(killometers),
      size: withSpaces(size),
      danger: danger,
      id: id,
    };
    if (!cart.map((item) => item.id).includes(obj.id)) {
      onAdd(obj);
    }
  };

  function getAsteroid() {
    if (Number(size) >= 600) {
      return (
        <i className="item__asteroid-big">
          <svg
            width="499"
            height="119"
            viewBox="0 0 499 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-89.4329 -133.031C-79.0392 -104.248 -63.5924 -73.0232 -41.8623 -54.8269C6.3271 -14.4664 16.6544 -1.20786 34.4437 79.5131C52.233 160.234 134.844 92.1942 134.844 92.1942C134.844 92.1942 159.514 75.4711 200.867 98.8568C212.312 104.391 225.072 106.589 237.698 105.201C272.12 103.469 336.839 89.0998 389.573 13.2055C465.305 -95.7648 509.48 -128.056 496.861 -224.923C484.243 -321.789 469.894 -371.951 360.89 -388.674C286.58 -400.067 225.352 -439.621 193.869 -463.628C191.733 -465.264 189.553 -466.812 187.328 -468.285C174.389 -476.924 159.872 -482.898 144.619 -485.859C129.366 -488.819 113.68 -488.709 98.4703 -485.534C69.3368 -479.006 42.2979 -465.239 19.8293 -445.491C9.38311 -436.616 -0.136444 -426.694 -8.582 -415.88C-23.0081 -397.421 -34.3139 -376.702 -42.0464 -354.554C-52.9066 -322.581 -65.8702 -291.368 -80.8513 -261.123C-89.03 -245.551 -94.5903 -228.726 -97.3073 -211.331C-101.142 -184.978 -98.4373 -158.08 -89.4329 -133.031Z"
              fill="#828A9E"
            />
            <path
              d="M87.8041 59.1477C90.1967 59.1465 92.4944 58.2064 94.2074 56.5277C95.9205 54.849 96.9135 52.5643 96.9749 50.1606C98.6176 -5.16852 67.5104 -32.1594 66.1771 -33.2772C64.3095 -34.7555 61.944 -35.4479 59.5787 -35.2085C57.2133 -34.9692 55.0327 -33.8168 53.4958 -31.994C51.9589 -30.1713 51.1857 -27.8204 51.339 -25.4362C51.4923 -23.052 52.5601 -20.8206 54.3176 -19.2117C55.452 -18.2272 79.996 3.67054 78.6259 49.5906C78.5895 50.8014 78.7909 52.0076 79.2184 53.1402C79.6459 54.2728 80.2913 55.3097 81.1176 56.1917C81.9439 57.0737 82.9349 57.7835 84.0342 58.2805C85.1334 58.7775 86.3193 59.052 87.5242 59.0884L87.8041 59.1477Z"
              fill="#62667C"
            />
            <path
              d="M200.474 -6.01409C215.84 -20.0372 222.935 -37.338 216.322 -44.6567C209.709 -51.9753 191.892 -46.5403 176.526 -32.5172C161.161 -18.4942 154.065 -1.19329 160.679 6.12535C167.292 13.444 185.109 8.00898 200.474 -6.01409Z"
              fill="#62667C"
            />
            <path
              d="M352.12 -25.5743C360.057 -41.7622 356.108 -60.027 343.299 -66.37C330.491 -72.713 313.673 -64.7321 305.736 -48.5443C297.799 -32.3565 301.748 -14.0916 314.557 -7.74866C327.365 -1.40568 344.183 -9.38651 352.12 -25.5743Z"
              fill="#62667C"
            />
          </svg>
        </i>
      );
    } else if (Number(size) >= 200 && Number(size) < 600) {
      return (
        <i className="item__asteroid-mid">
          <svg
            width="186"
            height="110"
            viewBox="0 0 186 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.97572 31.5258C6.20853 40.4877 11.0131 50.2103 17.7719 55.876C32.7606 68.4429 35.9728 72.5712 41.5059 97.7051C47.039 122.839 72.7342 101.654 72.7342 101.654C72.7342 101.654 80.4072 96.4465 93.2697 103.728C96.8296 105.451 100.798 106.136 104.725 105.703C115.432 105.164 135.562 100.69 151.964 77.0591C175.52 43.1292 189.26 33.0748 185.335 2.91368C181.41 -27.2474 176.947 -42.8662 143.043 -48.0732C119.93 -51.6206 100.886 -63.9363 91.0932 -71.4115C90.4287 -71.9209 89.7505 -72.4026 89.0586 -72.8613C85.034 -75.5514 80.5188 -77.4113 75.7746 -78.3332C71.0303 -79.2551 66.1514 -79.2207 61.4205 -78.232C52.3589 -76.1997 43.9488 -71.9129 36.9603 -65.7642C33.7111 -63.0006 30.7502 -59.9114 28.1233 -56.5441C23.6363 -50.7966 20.1198 -44.3456 17.7147 -37.4494C14.3367 -27.4938 10.3046 -17.7752 5.6449 -8.35783C3.10104 -3.50915 1.37158 1.72934 0.526488 7.14568C-0.666321 15.3513 0.175033 23.7263 2.97572 31.5258Z"
              fill="#828A9E"
            />
            <path
              d="M58.103 91.3639C58.8472 91.3635 59.5618 91.0708 60.0946 90.5481C60.6274 90.0254 60.9363 89.3141 60.9554 88.5656C61.4664 71.3379 51.7909 62.9339 51.3762 62.5858C50.7953 62.1255 50.0595 61.9099 49.3238 61.9845C48.5881 62.059 47.9098 62.4178 47.4318 62.9853C46.9538 63.5529 46.7133 64.2849 46.761 65.0272C46.8087 65.7696 47.1408 66.4644 47.6874 66.9653C48.0403 67.2719 55.6743 74.0901 55.2482 88.3881C55.2369 88.7651 55.2995 89.1407 55.4325 89.4934C55.5655 89.846 55.7662 90.1689 56.0232 90.4435C56.2802 90.7181 56.5885 90.9391 56.9304 91.0939C57.2723 91.2486 57.6411 91.3341 58.0159 91.3454L58.103 91.3639Z"
              fill="#62667C"
            />
            <path
              d="M19.0779 21.469C19.1905 21.4687 19.3029 21.4617 19.4147 21.4482C20.1662 21.3593 20.8519 20.9738 21.321 20.3765C21.7902 19.7791 22.0044 19.0188 21.9166 18.2627C20.1868 3.45529 24.957 -3.88387 25.0051 -3.95533C25.4356 -4.58194 25.6011 -5.35495 25.4651 -6.10429C25.3291 -6.85364 24.9028 -7.51795 24.2799 -7.95107C23.6571 -8.3842 22.8887 -8.55066 22.1439 -8.41384C21.3991 -8.27703 20.7387 -7.84814 20.3082 -7.22153C20.0585 -6.86195 14.239 1.76802 16.246 18.9335C16.3284 19.6313 16.662 20.2746 17.1838 20.7418C17.7055 21.209 18.3794 21.4677 19.0779 21.469Z"
              fill="#62667C"
            />
            <path
              d="M132.096 21.469C132.526 21.4692 132.951 21.3716 133.338 21.1834C133.726 20.9952 134.067 20.7213 134.334 20.3822C134.602 20.0431 134.79 19.6475 134.884 19.225C134.979 18.8026 134.977 18.3641 134.879 17.9423C131.864 4.93743 119.877 0.786103 113.959 0.40808C113.203 0.358562 112.459 0.613059 111.89 1.11558C111.321 1.6181 110.973 2.32748 110.924 3.08767C110.875 3.84785 111.128 4.59658 111.627 5.16912C112.127 5.74167 112.832 6.09115 113.588 6.14067C114.142 6.17985 126.526 7.21249 129.316 19.247C129.463 19.8784 129.817 20.4416 130.321 20.8449C130.826 21.2483 131.451 21.4683 132.096 21.469Z"
              fill="#62667C"
            />
            <path
              d="M162.316 29.6057C163.013 29.6066 163.687 29.3499 164.208 28.8842C173.538 20.57 172.117 6.7699 172.053 6.18673C171.97 5.42961 171.59 4.73689 170.999 4.26095C170.408 3.78502 169.653 3.56486 168.9 3.64892C168.148 3.73298 167.459 4.11436 166.986 4.70917C166.513 5.30398 166.294 6.06349 166.378 6.82062C166.389 6.93356 167.507 18.2696 160.421 24.5831C159.987 24.9696 159.68 25.4798 159.541 26.046C159.403 26.6122 159.438 27.2075 159.644 27.7527C159.85 28.2979 160.216 28.7673 160.693 29.0982C161.17 29.4292 161.736 29.6062 162.316 29.6057Z"
              fill="#62667C"
            />
            <path
              d="M99.0251 34.8726C104.281 34.8726 108.543 31.497 108.543 27.3329C108.543 23.1689 104.281 19.7932 99.0251 19.7932C93.7688 19.7932 89.5077 23.1689 89.5077 27.3329C89.5077 31.497 93.7688 34.8726 99.0251 34.8726Z"
              fill="#62667C"
            />
            <path
              d="M93.1475 71.0747C97.9267 66.7084 100.134 61.3215 98.0767 59.0427C96.0197 56.7639 90.4779 58.4562 85.6987 62.8225C80.9195 67.1888 78.7126 72.5757 80.7695 74.8545C82.8265 77.1333 88.3683 75.441 93.1475 71.0747Z"
              fill="#62667C"
            />
            <path
              d="M140.315 64.9842C142.784 59.9439 141.555 54.2568 137.571 52.2818C133.587 50.3068 128.356 52.7918 125.888 57.8321C123.419 62.8725 124.647 68.5596 128.631 70.5346C132.615 72.5096 137.846 70.0246 140.315 64.9842Z"
              fill="#62667C"
            />
            <path
              d="M54.2122 49.3634C58.5788 44.9703 57.5054 36.768 51.8148 31.0429C46.1242 25.3178 37.9712 24.238 33.6046 28.631C29.238 33.0241 30.3113 41.2264 36.0019 46.9515C41.6926 52.6766 49.8456 53.7564 54.2122 49.3634Z"
              fill="#62667C"
            />
          </svg>
        </i>
      );
    } else if (Number(size) < 200) {
      return (
        <i className="item__asteroid-short">
          <svg
            width="71"
            height="72"
            viewBox="0 0 71 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.13589 42.1051C2.36992 45.5191 4.20391 49.2229 6.78391 51.3813C12.5054 56.1687 13.7315 57.7414 15.8437 67.3162C17.9558 76.891 27.7641 68.8204 27.7641 68.8204C27.7641 68.8204 30.6931 66.8368 35.603 69.6107C36.9618 70.2672 38.4768 70.5279 39.9758 70.3632C44.0627 70.1577 51.7468 68.4534 58.0079 59.4511C66.9994 46.5254 72.2442 42.6952 70.7461 31.2052C69.2479 19.7153 67.5443 13.7653 54.6023 11.7816C45.7795 10.4302 38.5101 5.73854 34.7721 2.89086C34.5185 2.6968 34.2596 2.51328 33.9955 2.33854C32.4592 1.31374 30.7357 0.605214 28.9247 0.254012C27.1137 -0.0971895 25.2514 -0.0840862 23.4455 0.292564C19.9865 1.06678 16.7762 2.69983 14.1085 5.04221C12.8682 6.09499 11.738 7.27186 10.7352 8.55461C9.02245 10.7441 7.68013 13.2017 6.76205 15.8288C5.47263 19.6214 3.93348 23.3237 2.15478 26.9113C1.18373 28.7584 0.523559 30.754 0.200971 32.8174C-0.254348 35.9433 0.0668137 39.1338 1.13589 42.1051Z"
              fill="#828A9E"
            />
            <path
              d="M22.1791 64.9006C22.4632 64.9004 22.736 64.7889 22.9393 64.5898C23.1427 64.3907 23.2606 64.1197 23.2679 63.8345C23.463 57.2716 19.7696 54.0701 19.6113 53.9375C19.3896 53.7621 19.1087 53.68 18.8279 53.7084C18.5471 53.7368 18.2882 53.8735 18.1057 54.0897C17.9232 54.3059 17.8314 54.5847 17.8496 54.8675C17.8678 55.1503 17.9946 55.415 18.2033 55.6059C18.338 55.7226 21.252 58.3201 21.0894 63.7669C21.0851 63.9105 21.109 64.0536 21.1597 64.188C21.2105 64.3223 21.2871 64.4453 21.3852 64.5499C21.4833 64.6545 21.601 64.7387 21.7315 64.7977C21.862 64.8566 22.0028 64.8892 22.1459 64.8935L22.1791 64.9006Z"
              fill="#62667C"
            />
            <path
              d="M7.28242 38.2739C7.32539 38.2738 7.36832 38.2711 7.41098 38.266C7.69786 38.2321 7.95959 38.0853 8.13867 37.8577C8.31776 37.6302 8.39953 37.3405 8.36602 37.0525C7.70571 31.4115 9.52658 28.6157 9.54495 28.5885C9.70929 28.3497 9.77245 28.0553 9.72054 27.7698C9.66863 27.4843 9.5059 27.2313 9.26815 27.0663C9.0304 26.9013 8.7371 26.8379 8.45278 26.89C8.16846 26.9421 7.91641 27.1055 7.75207 27.3442C7.65674 27.4812 5.43531 30.7688 6.20144 37.308C6.23287 37.5738 6.36021 37.8189 6.55939 37.9969C6.75857 38.1749 7.01579 38.2734 7.28242 38.2739Z"
              fill="#62667C"
            />
            <path
              d="M50.4236 38.2739C50.5879 38.274 50.7501 38.2368 50.898 38.1651C51.046 38.0934 51.1759 37.9891 51.2781 37.8599C51.3803 37.7307 51.4521 37.58 51.4881 37.4191C51.5241 37.2581 51.5235 37.0911 51.4862 36.9304C50.3352 31.9762 45.7594 30.3947 43.5004 30.2507C43.212 30.2318 42.9279 30.3288 42.7107 30.5202C42.4934 30.7117 42.3608 30.9819 42.342 31.2715C42.3232 31.5611 42.4198 31.8463 42.6105 32.0644C42.8011 32.2825 43.0703 32.4157 43.3587 32.4345C43.5704 32.4495 48.2975 32.8429 49.3627 37.4274C49.4185 37.668 49.5537 37.8825 49.7463 38.0362C49.9389 38.1898 50.1776 38.2736 50.4236 38.2739Z"
              fill="#62667C"
            />
            <path
              d="M61.9592 41.3736C62.2254 41.374 62.4825 41.2762 62.6816 41.0988C66.2429 37.9314 65.7007 32.6743 65.6762 32.4521C65.6443 32.1637 65.4996 31.8998 65.2739 31.7185C65.0482 31.5372 64.76 31.4533 64.4728 31.4853C64.1855 31.5173 63.9227 31.6626 63.7421 31.8892C63.5615 32.1158 63.478 32.4052 63.5099 32.6936C63.5142 32.7366 63.941 37.0551 61.236 39.4602C61.0703 39.6075 60.9532 39.8019 60.9002 40.0176C60.8472 40.2332 60.8609 40.46 60.9394 40.6677C61.0179 40.8754 61.1576 41.0542 61.3397 41.1803C61.5219 41.3064 61.738 41.3738 61.9592 41.3736Z"
              fill="#62667C"
            />
            <path
              d="M37.7999 43.3801C39.8064 43.3801 41.4329 42.0941 41.4329 40.5078C41.4329 38.9215 39.8064 37.6355 37.7999 37.6355C35.7935 37.6355 34.1669 38.9215 34.1669 40.5078C34.1669 42.0941 35.7935 43.3801 37.7999 43.3801Z"
              fill="#62667C"
            />
            <path
              d="M35.5563 57.1713C37.3806 55.508 38.223 53.4558 37.4379 52.5877C36.6527 51.7196 34.5373 52.3643 32.7129 54.0276C30.8886 55.691 30.0462 57.7431 30.8314 58.6113C31.6166 59.4794 33.732 58.8347 35.5563 57.1713Z"
              fill="#62667C"
            />
            <path
              d="M53.5611 54.8512C54.5034 52.931 54.0346 50.7645 52.5138 50.0121C50.993 49.2597 48.9963 50.2064 48.0539 52.1265C47.1116 54.0467 47.5805 56.2132 49.1012 56.9656C50.622 57.7179 52.6187 56.7713 53.5611 54.8512Z"
              fill="#62667C"
            />
            <path
              d="M20.6939 48.9003C22.3607 47.2268 21.951 44.1021 19.7788 41.9211C17.6065 39.7401 14.4944 39.3288 12.8275 41.0023C11.1607 42.6758 11.5704 45.8005 13.7427 47.9815C15.9149 50.1625 19.0271 50.5739 20.6939 48.9003Z"
              fill="#62667C"
            />
            <path
              d="M26.1423 28.2182C29.9932 27.3959 32.6326 24.452 32.0375 21.6427C31.4424 18.8335 27.8383 17.2228 23.9873 18.0451C20.1364 18.8674 17.497 21.8113 18.0921 24.6206C18.6872 27.4298 22.2914 29.0405 26.1423 28.2182Z"
              fill="#62667C"
            />
            <path
              d="M10.7352 8.55197C13.1412 10.3819 16.8573 11.556 21.029 11.556C28.288 11.556 34.1678 8.00228 34.1678 3.62231C34.1672 3.18873 34.1084 2.7572 33.9929 2.33941C32.4566 1.31461 30.7331 0.606084 28.9221 0.254882C27.1111 -0.0963198 25.2487 -0.0832164 23.4429 0.293434C19.9849 1.0678 16.7755 2.70053 14.1085 5.0422C12.8684 6.09416 11.7381 7.27014 10.7352 8.55197Z"
              fill="#62667C"
            />
            <path
              d="M49.8008 18.14C50.2101 18.14 50.4664 18.1206 50.5136 18.1171C50.8017 18.0938 51.0688 17.9566 51.2561 17.7356C51.4434 17.5146 51.5356 17.228 51.5124 16.9387C51.4892 16.6495 51.3525 16.3813 51.1324 16.1933C50.9123 16.0052 50.6268 15.9126 50.3387 15.9359C50.2626 15.9421 45.2548 16.2872 42.2244 13.0812C42.0253 12.8708 41.751 12.7484 41.462 12.741C41.173 12.7336 40.893 12.8418 40.6834 13.0417C40.4738 13.2416 40.3519 13.517 40.3446 13.8071C40.3372 14.0973 40.4449 14.3785 40.644 14.5889C43.6841 17.8028 48.0867 18.14 49.8008 18.14Z"
              fill="#62667C"
            />
          </svg>
        </i>
      );
    }
  }

  return (
    <div
      className={classNames(
        "item",
        "item-main",
        { safeAst: !danger },
        { dangerAst: danger }
      )}
    >
      <div className="item__main">
        <div
          className={classNames(
            "item__block",
            "item__block-bg",
            {
              safeAstMob: !danger,
            },
            { dangerAstMob: danger }
          )}
        >
          <div className="item__icons">
            {getAsteroid()}
            <i className="item__dino-mob">
              <svg
                width="35"
                height="30"
                viewBox="0 0 35 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4125 28.9111C11.5581 28.404 11.9546 27.7629 12.39 27.3176C12.8254 26.8723 13.3642 26.5435 13.9575 26.3609C14.4588 25.6851 14.7698 24.8853 14.8576 24.0462C13.1408 23.0675 11.8774 21.4447 11.343 19.5314C10.6085 19.3493 9.14352 18.8467 8.43178 17.6366C8.28876 17.7443 8.16737 17.8785 8.07408 18.0319C7.98123 18.1749 7.83606 18.2753 7.67017 18.311C7.50427 18.3468 7.33107 18.3151 7.18826 18.2228C6.97955 18.096 6.73775 18.0356 6.49442 18.0494C6.2511 18.0632 6.01756 18.1506 5.82428 18.3002C5.73933 18.3694 5.63824 18.4157 5.53058 18.4347C5.42292 18.4536 5.31225 18.4445 5.20903 18.4083C5.10582 18.3721 5.01348 18.31 4.94075 18.2278C4.86802 18.1456 4.8173 18.0461 4.7934 17.9386C4.652 17.3309 4.71228 16.6932 4.96502 16.1233C5.21776 15.5534 5.649 15.0827 6.19263 14.7834C5.59949 13.7175 5.28672 12.5165 5.28405 11.2944C3.88298 10.988 0.880306 10.142 0.522232 8.45899C0.333302 7.75338 0.225475 7.02823 0.200886 6.29781C0.214096 6.20519 0.247047 6.11655 0.29747 6.03798C0.347893 5.95941 0.4146 5.89277 0.493004 5.84263C0.571404 5.79249 0.659645 5.76005 0.751671 5.74753C0.843693 5.73501 0.937313 5.7427 1.02611 5.77009C2.14918 6.09701 3.30204 6.30926 4.46728 6.40365C4.38036 6.32963 4.29185 6.25068 4.20175 6.1668C2.95713 5.00554 1.9817 4.61771 0.725693 4.78091C0.635048 4.79286 0.542915 4.78518 0.455452 4.75838C0.367992 4.73158 0.287216 4.68628 0.218521 4.6255C0.149826 4.56473 0.094799 4.48987 0.0571136 4.40595C0.0194283 4.32202 -4.19617e-05 4.23096 0 4.13884C0 4.01672 0.024601 1.13909 2.1521 0.275354C3.50837 -0.275674 4.2135 0.118446 4.77981 0.435222C5.02856 0.605827 5.31773 0.706957 5.61788 0.728315C5.7321 0.730905 5.86761 0.728315 6.01819 0.728315C7.51365 0.713512 11.0099 0.680576 11.567 4.30315C11.6162 4.62289 11.6592 4.92745 11.7007 5.21758C12.0926 7.97791 12.2395 9.01113 15.3589 9.72351C19.4006 10.6468 23.0022 12.039 26.1503 19.7608C26.3534 20.3522 26.7304 20.8672 27.231 21.2374C27.7317 21.6076 28.3324 21.8154 28.9532 21.8332C29.653 21.8604 30.3469 21.6942 30.9597 21.3525C31.5725 21.0108 32.0808 20.5067 32.4296 19.8948C32.9342 18.8823 32.7322 17.7599 31.845 16.6482C31.7425 16.52 31.6923 16.3574 31.7045 16.1932C31.7168 16.0291 31.7906 15.8759 31.911 15.7646C32.0314 15.6534 32.1892 15.5925 32.3526 15.5943C32.5159 15.5961 32.6724 15.6605 32.7903 15.7745C32.8858 15.867 35.133 18.0689 34.9938 20.8207C34.9167 22.3679 34.1142 23.7527 32.6092 24.9365C31.311 25.9902 29.6929 26.5625 28.0259 26.5574C25.6314 26.5574 23.3228 25.4528 21.5255 24.263C21.5204 24.7097 21.6198 25.1512 21.8156 25.552C21.8595 25.6433 21.8815 25.7437 21.8798 25.8451C21.8782 25.9465 21.8529 26.0461 21.8061 26.1359C21.3816 27.0022 21.137 27.9466 21.0874 28.9114C21.0874 29.0832 21.2079 29.8785 21.0874 30H11.2669C11.2669 29.8282 11.2669 29.4181 11.4125 28.9111ZM31.8181 23.9152C33.0136 22.9748 33.65 21.9138 33.7095 20.7618C33.7189 20.5783 33.7145 20.3944 33.6963 20.2115C33.657 20.307 33.6166 20.3966 33.5766 20.4758C33.1178 21.3105 32.4379 22.0005 31.6127 22.4686C30.7875 22.9367 29.8495 23.1646 28.9033 23.1269C28.0364 23.0991 27.1976 22.8105 26.4949 22.2982C25.7921 21.786 25.2576 21.0736 24.96 20.2526C22.0411 13.0941 18.8897 11.858 15.0736 10.9862C11.0911 10.0769 10.8266 8.2166 10.4267 5.40077C10.3863 5.11545 10.3437 4.81569 10.2952 4.50114C9.93826 2.18045 7.90808 2.00356 6.02884 2.0217C5.86358 2.0217 5.71557 2.02429 5.58813 2.0217C5.07831 1.99991 4.58322 1.84289 4.15291 1.56651C3.69457 1.31006 3.4184 1.155 2.62954 1.47511C1.79514 1.81372 1.47746 2.77959 1.35627 3.44941C2.65451 3.47716 3.80365 4.03152 5.07178 5.21462C6.17134 6.24082 6.83974 6.2064 6.82137 6.2101C6.98244 6.18271 7.14782 6.21816 7.28388 6.30922C7.41995 6.40029 7.5165 6.54014 7.55392 6.70036C7.59133 6.86058 7.56679 7.02914 7.4853 7.17179C7.4038 7.31444 7.27146 7.42047 7.11518 7.46832C5.33106 7.99456 2.91196 7.56861 1.59462 7.25702C1.63795 7.49756 1.69708 7.80175 1.77824 8.18477C1.94865 8.98597 4.38574 9.82897 6.07952 10.1295C6.24307 10.1586 6.38909 10.2504 6.48698 10.3856C6.58488 10.5208 6.62706 10.689 6.60469 10.8548C6.40564 12.3251 7.05017 13.6917 7.4189 14.3334C8.01688 14.1304 8.64361 14.0265 9.27463 14.0259C9.35982 14.0321 9.44293 14.0553 9.5191 14.0943C9.59528 14.1332 9.66298 14.187 9.71827 14.2526C9.77356 14.3182 9.81532 14.3943 9.8411 14.4763C9.86689 14.5584 9.87618 14.6448 9.86844 14.7305C9.86071 14.8162 9.83609 14.8995 9.79604 14.9755C9.75599 15.0515 9.7013 15.1187 9.63517 15.1732C9.56905 15.2277 9.49281 15.2683 9.41091 15.2928C9.32902 15.3172 9.24311 15.325 9.15821 15.3156C8.54129 15.3604 7.934 15.4946 7.35499 15.7138C7.34875 15.716 7.34214 15.7138 7.33589 15.7171C7.32965 15.7204 7.31753 15.726 7.30725 15.7286C7.02846 15.7776 6.7679 15.9013 6.55292 16.0867C6.33793 16.2722 6.17644 16.5125 6.0854 16.7825C6.50597 16.7063 6.93886 16.7388 7.34361 16.8769C7.53161 16.654 7.76956 16.4795 8.03777 16.3676C8.30599 16.2558 8.59677 16.2099 8.88607 16.2337C9.0025 16.2522 9.11166 16.3026 9.20161 16.3793C9.29157 16.4561 9.35888 16.5562 9.39619 16.6689C9.65841 17.4608 10.5064 17.8983 11.1568 18.1247C11.1383 16.9592 11.4201 15.8087 11.9747 14.7856C12.0161 14.7113 12.0716 14.646 12.138 14.5933C12.2045 14.5406 12.2806 14.5016 12.362 14.4785C12.4434 14.4555 12.5285 14.4488 12.6124 14.4589C12.6964 14.469 12.7776 14.4956 12.8513 14.5373C12.9251 14.579 12.9899 14.6349 13.0422 14.7019C13.0945 14.7689 13.1332 14.8455 13.1561 14.9276C13.179 15.0096 13.1856 15.0954 13.1756 15.18C13.1656 15.2646 13.1391 15.3464 13.0977 15.4207C12.543 16.4705 12.3336 17.6707 12.4999 18.8482C12.6973 19.7545 13.0945 20.6043 13.6621 21.3349C14.2297 22.0655 14.9531 22.6581 15.7787 23.0688C15.8969 23.1199 15.9972 23.2055 16.0666 23.3146C16.136 23.4238 16.1713 23.5513 16.168 23.6809C16.1483 25.0364 15.6605 26.3426 14.7886 27.3749C14.7073 27.4605 14.6043 27.5221 14.4907 27.5529C14.1323 27.641 13.7979 27.8087 13.512 28.0436C13.2261 28.2786 12.9958 28.575 12.8381 28.9111H16.0938C16.4067 26.5526 17.7321 24.4048 18.2804 23.6013C17.9087 22.7793 17.7593 21.8729 17.8474 20.9739C17.6366 20.0843 17.6936 19.1515 18.0111 18.2947C18.3286 17.4378 18.8922 16.6957 19.6301 16.163C19.7656 16.0611 19.9356 16.0171 20.1031 16.0407C20.2706 16.0642 20.4222 16.1533 20.5249 16.2887C20.6277 16.4241 20.6733 16.5948 20.652 16.7638C20.6306 16.9329 20.544 17.0867 20.4109 17.1918C19.8787 17.562 19.4679 18.0835 19.2309 18.6899C18.9938 19.2962 18.9413 19.9599 19.0799 20.5964C19.9827 21.5242 26.6193 28.0062 31.8181 23.9166V23.9152ZM20.5321 25.8236C20.228 25.0583 20.1602 24.2185 20.3374 23.4137C19.9312 23.1014 19.5662 22.7994 19.2562 22.5285C19.3392 22.8157 19.4518 23.0933 19.5923 23.3567C19.6506 23.4663 19.6764 23.5905 19.6666 23.7145C19.6567 23.8384 19.6117 23.9569 19.5368 24.0558C19.5177 24.081 17.7905 26.3905 17.3939 28.9096H19.8049C19.847 27.8437 20.0939 26.7962 20.5321 25.8251V25.8236Z"
                  fill="black"
                />
              </svg>
            </i>
            <i className="item__dino">
              <svg
                width="56"
                height="48"
                viewBox="0 0 56 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.8282 7.09339C45.0758 7.09339 45.3177 7.01999 45.5235 6.88247C45.7294 6.74494 45.8898 6.54948 45.9845 6.32078C46.0792 6.09209 46.104 5.84044 46.0557 5.59767C46.0074 5.35489 45.8882 5.13188 45.7132 4.95685C45.5382 4.78181 45.3152 4.66261 45.0724 4.61432C44.8296 4.56603 44.578 4.59081 44.3493 4.68554C44.1206 4.78027 43.9251 4.94068 43.7876 5.1465C43.6501 5.35232 43.5767 5.5943 43.5767 5.84183C43.5771 6.17362 43.7091 6.49169 43.9437 6.72631C44.1784 6.96092 44.4964 7.09293 44.8282 7.09339Z"
                  fill="black"
                />
                <path
                  d="M37.7401 46.2577C37.5071 45.4464 36.8727 44.4206 36.176 43.7082C35.4793 42.9957 34.6173 42.4696 33.668 42.1775C32.8658 41.0961 32.3683 39.8165 32.2278 38.4739C34.9748 36.908 36.9961 34.3114 37.8512 31.2502C39.0264 30.9589 41.3704 30.1548 42.5091 28.2186C42.738 28.3909 42.9322 28.6055 43.0815 28.851C43.23 29.0799 43.4623 29.2404 43.7277 29.2976C43.9932 29.3549 44.2703 29.3041 44.4988 29.1565C44.8327 28.9536 45.2196 28.8569 45.6089 28.879C45.9982 28.9011 46.3719 29.0409 46.6812 29.2802C46.8171 29.3911 46.9788 29.4652 47.1511 29.4955C47.3233 29.5257 47.5004 29.5112 47.6656 29.4533C47.8307 29.3954 47.9784 29.296 48.0948 29.1645C48.2112 29.033 48.2923 28.8737 48.3306 28.7018C48.5568 27.7294 48.4603 26.7091 48.056 25.7972C47.6516 24.8854 46.9616 24.1323 46.0918 23.6535C47.0408 21.948 47.5412 20.0264 47.5455 18.0711C49.7872 17.5808 54.5915 16.2273 55.1644 13.5344C55.4667 12.4054 55.6392 11.2452 55.6786 10.0765C55.6574 9.9283 55.6047 9.78648 55.524 9.66077C55.4434 9.53505 55.3366 9.42842 55.2112 9.3482C55.0858 9.26799 54.9446 9.21607 54.7973 9.19604C54.6501 9.17601 54.5003 9.18833 54.3582 9.23215C52.5613 9.75521 50.7167 10.0948 48.8524 10.2458C48.9914 10.1274 49.133 10.0011 49.2772 9.86688C51.2686 8.00886 52.8293 7.38833 54.8389 7.64945C54.9839 7.66858 55.1313 7.65629 55.2713 7.61341C55.4112 7.57054 55.5405 7.49805 55.6504 7.40081C55.7603 7.30356 55.8483 7.1838 55.9086 7.04952C55.9689 6.91524 56.0001 6.76953 56 6.62215C56 6.42675 55.9606 1.82254 52.5566 0.440567C50.3866 -0.441078 49.2584 0.189514 48.3523 0.696356C47.9543 0.969323 47.4916 1.13113 47.0114 1.1653C46.8286 1.16945 46.6118 1.1653 46.3709 1.1653C43.9782 1.14162 38.3842 1.08892 37.4928 6.88504C37.414 7.39662 37.3453 7.88392 37.2789 8.34813C36.6519 12.7646 36.4168 14.4178 31.4257 15.5576C24.9591 17.0349 19.1965 19.2624 14.1595 31.6173C13.8346 32.5635 13.2314 33.3876 12.4303 33.9799C11.6292 34.5722 10.6681 34.9047 9.67488 34.9331C8.55516 34.9767 7.44494 34.7107 6.46449 34.164C5.48403 33.6173 4.6707 32.8107 4.1126 31.8316C3.30523 30.2116 3.62841 28.4158 5.04807 26.6371C5.21202 26.432 5.29235 26.1718 5.27273 25.9092C5.2531 25.6466 5.135 25.4014 4.94241 25.2234C4.74983 25.0454 4.49721 24.9479 4.2359 24.9509C3.97459 24.9538 3.72418 25.0569 3.53557 25.2391C3.38279 25.3871 -0.212773 28.9102 0.00992999 33.3131C0.133327 35.7887 1.41725 38.0043 3.82526 39.8985C5.90243 41.5844 8.4914 42.5 11.1586 42.4919C14.9898 42.4919 18.6835 40.7245 21.5592 38.8208C21.5673 39.5355 21.4083 40.242 21.095 40.8831C21.0248 41.0292 20.9896 41.1899 20.9923 41.3521C20.9949 41.5144 21.0353 41.6738 21.1103 41.8175C21.7894 43.2035 22.1807 44.7146 22.2602 46.2583C22.2602 46.5331 22.0674 47.8057 22.2602 48H37.973C37.973 47.7252 37.973 47.069 37.7401 46.2577ZM5.09096 38.2643C3.1783 36.7597 2.15998 35.0622 2.06479 33.2189C2.04971 32.9253 2.05678 32.631 2.08594 32.3385C2.14882 32.4912 2.21345 32.6345 2.2775 32.7612C3.01153 34.0969 4.09936 35.2008 5.41967 35.9498C6.73997 36.6988 8.24082 37.0634 9.75479 37.0031C11.1418 36.9585 12.4839 36.4967 13.6082 35.6772C14.7326 34.8576 15.5879 33.7177 16.0639 32.4042C20.7342 20.9505 25.7765 18.9729 31.8823 17.5779C38.2543 16.1231 38.6774 13.1466 39.3173 8.64123C39.3819 8.18471 39.4501 7.70511 39.5276 7.20182C40.0988 3.48872 43.3471 3.2057 46.3539 3.23471C46.6183 3.23471 46.8551 3.23886 47.059 3.23471C47.8747 3.19985 48.6669 2.94863 49.3554 2.50642C50.0887 2.09609 50.5306 1.848 51.7927 2.36017C53.1278 2.90195 53.6361 4.44734 53.83 5.51905C51.7528 5.56346 49.9142 6.45044 47.8852 8.3434C46.1259 9.98531 45.0564 9.93024 45.0858 9.93616C44.8281 9.89234 44.5635 9.94905 44.3458 10.0948C44.1281 10.2405 43.9736 10.4642 43.9137 10.7206C43.8539 10.9769 43.8931 11.2466 44.0235 11.4749C44.1539 11.7031 44.3657 11.8727 44.6157 11.9493C47.4703 12.7913 51.3409 12.1098 53.4486 11.6112C53.3793 11.9961 53.2847 12.4828 53.1548 13.0956C52.8822 14.3775 48.9828 15.7264 46.2728 16.2071C46.0111 16.2538 45.7775 16.4007 45.6208 16.617C45.4642 16.8333 45.3967 17.1023 45.4325 17.3677C45.751 19.7201 44.7197 21.9068 44.1298 22.9335C43.173 22.6086 42.1702 22.4424 41.1606 22.4414C41.0243 22.4513 40.8913 22.4885 40.7694 22.5508C40.6476 22.6131 40.5392 22.6992 40.4508 22.8042C40.3623 22.9092 40.2955 23.0308 40.2542 23.1621C40.213 23.2934 40.1981 23.4317 40.2105 23.5688C40.2229 23.7059 40.2623 23.8392 40.3263 23.9608C40.3904 24.0825 40.4779 24.19 40.5837 24.2772C40.6895 24.3643 40.8115 24.4293 40.9425 24.4685C41.0736 24.5076 41.211 24.52 41.3469 24.5049C42.3339 24.5767 43.3056 24.7913 44.232 25.142C44.242 25.1456 44.2526 25.142 44.2626 25.1473C44.2726 25.1527 44.2919 25.1616 44.3084 25.1657C44.7545 25.2441 45.1714 25.4421 45.5153 25.7388C45.8593 26.0355 46.1177 26.42 46.2634 26.852C45.5904 26.7301 44.8978 26.782 44.2502 27.003C43.9494 26.6464 43.5687 26.3671 43.1396 26.1882C42.7104 26.0093 42.2452 25.9358 41.7823 25.9739C41.596 26.0035 41.4213 26.0841 41.2774 26.2069C41.1335 26.3297 41.0258 26.49 40.9661 26.6702C40.5465 27.9373 39.1898 28.6372 38.1491 28.9996C38.1788 27.1347 37.7279 25.2939 36.8405 23.657C36.7743 23.5381 36.6855 23.4335 36.5792 23.3492C36.4729 23.2649 36.3511 23.2025 36.2209 23.1657C36.0906 23.1288 35.9544 23.1181 35.8201 23.1342C35.6858 23.1504 35.5559 23.193 35.4379 23.2597C35.3199 23.3264 35.2161 23.4159 35.1325 23.523C35.0488 23.6302 34.9869 23.7529 34.9503 23.8841C34.9137 24.0154 34.903 24.1526 34.9191 24.2879C34.9351 24.4233 34.9774 24.5542 35.0436 24.6731C35.9312 26.3527 36.2662 28.2732 36.0002 30.1572C35.6843 31.6071 35.0488 32.9669 34.1406 34.1359C33.2325 35.3048 32.0751 36.253 30.7541 36.9101C30.5649 36.9918 30.4044 37.1288 30.2934 37.3034C30.1824 37.478 30.1259 37.6822 30.1312 37.8895C30.1628 40.0582 30.9432 42.1481 32.3383 43.7999C32.4683 43.9369 32.6331 44.0354 32.8148 44.0847C33.3883 44.2256 33.9234 44.4939 34.3808 44.8698C34.8383 45.2458 35.2067 45.7199 35.459 46.2577H30.2499C29.7493 42.4842 27.6286 39.0476 26.7513 37.7622C27.3461 36.4469 27.5851 34.9966 27.4441 33.5582C27.7814 32.1348 27.6903 30.6424 27.1823 29.2715C26.6743 27.9005 25.7724 26.7131 24.5919 25.8608C24.375 25.6978 24.103 25.6274 23.835 25.6651C23.567 25.7027 23.3245 25.8453 23.1601 26.0619C22.9957 26.2785 22.9227 26.5517 22.9568 26.8222C22.991 27.0927 23.1296 27.3387 23.3426 27.5069C24.1941 28.0993 24.8514 28.9337 25.2306 29.9038C25.6099 30.8739 25.6939 31.9358 25.4721 32.9543C24.0278 34.4387 13.4091 44.81 5.09096 38.2666V38.2643ZM23.1487 41.3177C23.6351 40.0933 23.7437 38.7495 23.4601 37.462C24.11 36.9622 24.6941 36.4791 25.19 36.0456C25.0574 36.5051 24.8771 36.9493 24.6524 37.3708C24.559 37.5461 24.5178 37.7448 24.5335 37.9432C24.5492 38.1415 24.6213 38.3311 24.7411 38.4893C24.7717 38.5295 27.5352 42.2249 28.1698 46.2553H24.3122C24.2448 44.5499 23.8497 42.8738 23.1487 41.3201V41.3177Z"
                  fill="black"
                />
              </svg>
            </i>
          </div>
        </div>
        <div className="item__block item__block-adap">
          <h1 className="item__title">{name}</h1>
          <div className="info">
            <div className="info__item">
              <p className="info__key">Дата</p>
              <span className="info__dots"></span>
              <p className="info__value">{getDate(date)}</p>
            </div>
            <div className="info__item">
              <p className="info__key">Расстояние</p>
              <span className="info__dots"></span>
              <p className="info__value">
                {kilometersDistance
                  ? `${withSpaces(killometers)} км`
                  : `${withSpaces(lunar)} дис. до луны`}
              </p>
            </div>
            <div className="info__item">
              <p className="info__key">Размер</p>
              <span className="info__dots"></span>
              <p className="info__value">{withSpaces(size)} м</p>
            </div>
          </div>
        </div>
        <div className="item__block">
          <div className="danger">
            <p className="danger__title">Оценка:</p>
            <h3 className="danger__text">{danger ? "опасен" : "не опасен"}</h3>
            <button
              onClick={(e) => onAddCart(e)}
              type="button"
              className={classNames("button", {
                disabled: cart.map((item) => item.id).includes(id),
              })}
            >
              На уничтожение
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
