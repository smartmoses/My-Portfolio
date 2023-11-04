const AboutMe = () => {
  return (
    <>
      <div className="about-me container-fluid">
        <div className="container row p-2 m-auto">
          <div className=" col-lg-5 p-4">
            <img
              src="./public/images/smartmoses.jpg"
              alt=""
              className="d-block img-fluid"
            />
          </div>
          <div className="col-lg-7 p-4 ">
            <h1 className="card-title pb-3">About Me</h1>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              deserunt, illo ipsa m dignissimos maiores facilis fugiat saepe
              velit corporis ex amet reiciendis, necessitatibus itaque provident
              repellendus ratione mollitia molestias distinctio, suscipit non!
              Facilis laborum eveniet maiores, nemo hic provident modi natus
              iusto, est laudantium culpa quia. Unde quibusdam minima quod
              dolorum fugiat praesentium temporibus itaque. Nisi provident cum
              voluptatem laborum eaque explicabo, animi cupiditate quidem fuga
              eius expedita tempore quos veritatis molestias est laudantium
              debitis.
            </p>
            <hr />
            <div className="contact col-md-6">
              <h2 className="fw-bold mb-3">Contact Info</h2>
              <div>
                <div className="fw-bold mb-3">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 27 27"
                      fill=""
                    >
                      <path
                        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                        fill="#484848"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <path
                        d="M22 5.79826C21.2483 6.12435 20.4534 6.33992 19.64 6.43826C20.4982 5.92558 21.1413 5.11904 21.45 4.16826C20.6436 4.64832 19.7608 4.98655 18.84 5.16826C18.2245 4.50083 17.405 4.05655 16.5098 3.90511C15.6147 3.75366 14.6945 3.90361 13.8938 4.33145C13.093 4.75928 12.4569 5.44079 12.0852 6.26909C11.7135 7.0974 11.6273 8.02565 11.84 8.90826C10.2094 8.82578 8.61444 8.40121 7.15865 7.66212C5.70287 6.92303 4.41885 5.88595 3.39 4.61826C3.02914 5.24842 2.83952 5.96208 2.84 6.68826C2.83872 7.36264 3.00422 8.02687 3.32176 8.62182C3.63929 9.21677 4.09902 9.72397 4.66 10.0983C4.00798 10.0805 3.36989 9.90556 2.8 9.58826V9.63826C2.80489 10.5831 3.13599 11.4973 3.73731 12.2262C4.33864 12.9551 5.17326 13.4539 6.1 13.6383C5.74326 13.7468 5.37287 13.8041 5 13.8083C4.74189 13.8052 4.48442 13.7818 4.23 13.7383C4.49391 14.5511 5.00462 15.2614 5.69107 15.7704C6.37753 16.2794 7.20558 16.5618 8.06 16.5783C6.6172 17.7135 4.83588 18.3331 3 18.3383C2.66574 18.3394 2.33174 18.3193 2 18.2783C3.87443 19.4885 6.05881 20.131 8.29 20.1283C9.82969 20.1442 11.3571 19.8533 12.7831 19.2723C14.2091 18.6914 15.505 17.8321 16.5952 16.7448C17.6854 15.6574 18.548 14.3636 19.1326 12.9392C19.7172 11.5147 20.012 9.98798 20 8.44826V7.91826C20.7847 7.33307 21.4615 6.61568 22 5.79826Z"
                        fill="#484848"
                      />
                    </svg>
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <path
                        d="M13.0286 2.00123C13.7583 1.99843 14.488 2.00576 15.2176 2.02323L15.4116 2.03023C15.6356 2.03823 15.8566 2.04823 16.1236 2.06023C17.1876 2.11023 17.9136 2.27823 18.5506 2.52523C19.2106 2.77923 19.7666 3.12323 20.3226 3.67923C20.831 4.17884 21.2244 4.78318 21.4756 5.45023C21.7226 6.08723 21.8906 6.81423 21.9406 7.87823C21.9526 8.14423 21.9626 8.36623 21.9706 8.59023L21.9766 8.78423C21.9943 9.51342 22.002 10.2428 21.9996 10.9722L22.0006 11.7182V13.0282C22.003 13.758 21.9954 14.4877 21.9776 15.2172L21.9716 15.4112C21.9636 15.6352 21.9536 15.8562 21.9416 16.1232C21.8916 17.1872 21.7216 17.9132 21.4756 18.5502C21.2252 19.218 20.8317 19.8228 20.3226 20.3222C19.8225 20.8306 19.2179 21.224 18.5506 21.4752C17.9136 21.7222 17.1876 21.8902 16.1236 21.9402C15.8566 21.9522 15.6356 21.9622 15.4116 21.9702L15.2176 21.9762C14.4881 21.994 13.7583 22.0017 13.0286 21.9992L12.2826 22.0002H10.9736C10.2438 22.0027 9.5141 21.995 8.78458 21.9772L8.59058 21.9712C8.35319 21.9626 8.11585 21.9526 7.87858 21.9412C6.81458 21.8912 6.08858 21.7212 5.45058 21.4752C4.78326 21.2246 4.17881 20.8311 3.67958 20.3222C3.17062 19.8225 2.7768 19.2178 2.52558 18.5502C2.27858 17.9132 2.11058 17.1872 2.06058 16.1232C2.04944 15.8859 2.03944 15.6486 2.03058 15.4112L2.02558 15.2172C2.00714 14.4877 1.99881 13.758 2.00058 13.0282V10.9722C1.99779 10.2428 2.00512 9.51343 2.02258 8.78423L2.02958 8.59023C2.03758 8.36623 2.04758 8.14423 2.05958 7.87823C2.10958 6.81323 2.27758 6.08823 2.52458 5.45023C2.77595 4.78285 3.17054 4.17868 3.68058 3.68023C4.17947 3.17098 4.78354 2.7768 5.45058 2.52523C6.08858 2.27823 6.81358 2.11023 7.87858 2.06023L8.59058 2.03023L8.78458 2.02523C9.51376 2.0068 10.2432 1.99847 10.9726 2.00023L13.0286 2.00123ZM12.0006 7.00123C11.3381 6.99186 10.6803 7.11425 10.0656 7.3613C9.45077 7.60834 8.89122 7.97511 8.41942 8.44029C7.94762 8.90546 7.57298 9.45977 7.31726 10.071C7.06155 10.6822 6.92987 11.3382 6.92987 12.0007C6.92987 12.6633 7.06155 13.3192 7.31726 13.9305C7.57298 14.5417 7.94762 15.096 8.41942 15.5612C8.89122 16.0264 9.45077 16.3931 10.0656 16.6402C10.6803 16.8872 11.3381 17.0096 12.0006 17.0002C13.3267 17.0002 14.5984 16.4734 15.5361 15.5358C16.4738 14.5981 17.0006 13.3263 17.0006 12.0002C17.0006 10.6741 16.4738 9.40238 15.5361 8.4647C14.5984 7.52701 13.3267 7.00123 12.0006 7.00123ZM12.0006 9.00123C12.3991 8.99389 12.7951 9.06603 13.1654 9.21344C13.5357 9.36085 13.8729 9.58057 14.1574 9.85978C14.4418 10.139 14.6678 10.4721 14.822 10.8396C14.9763 11.2071 15.0558 11.6016 15.0558 12.0002C15.0559 12.3988 14.9766 12.7934 14.8224 13.1609C14.6683 13.5285 14.4424 13.8617 14.1581 14.141C13.8737 14.4203 13.5366 14.6401 13.1663 14.7876C12.796 14.9352 12.4001 15.0074 12.0016 15.0002C11.2059 15.0002 10.4429 14.6842 9.88026 14.1216C9.31765 13.5589 9.00158 12.7959 9.00158 12.0002C9.00158 11.2046 9.31765 10.4415 9.88026 9.87891C10.4429 9.3163 11.2059 9.00023 12.0016 9.00023L12.0006 9.00123ZM17.2506 5.50123C16.928 5.51414 16.6229 5.65138 16.3992 5.8842C16.1755 6.11702 16.0506 6.42736 16.0506 6.75023C16.0506 7.0731 16.1755 7.38344 16.3992 7.61626C16.6229 7.84908 16.928 7.98632 17.2506 7.99923C17.5821 7.99923 17.9 7.86753 18.1345 7.63311C18.3689 7.39869 18.5006 7.08075 18.5006 6.74923C18.5006 6.41771 18.3689 6.09977 18.1345 5.86535C17.9 5.63093 17.5821 5.49923 17.2506 5.49923V5.50123Z"
                        fill="#484848"
                      />
                    </svg>
                  </a>
                  <span>| Smart Moses</span>
                </div>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_1442_4103)">
                      <path
                        d="M22 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H22C23.1 20 24 19.1 24 18V6C24 4.9 23.1 4 22 4ZM21.6 8.25L15.06 12.34C14.41 12.75 13.59 12.75 12.94 12.34L6.4 8.25C6.29973 8.19371 6.21192 8.11766 6.14189 8.02645C6.07186 7.93525 6.02106 7.83078 5.99258 7.71937C5.96409 7.60796 5.9585 7.49194 5.97616 7.37831C5.99381 7.26468 6.03434 7.15581 6.09528 7.0583C6.15623 6.96079 6.23632 6.87666 6.33073 6.811C6.42513 6.74533 6.53187 6.69951 6.6445 6.6763C6.75712 6.65309 6.87328 6.65297 6.98595 6.67595C7.09863 6.69893 7.20546 6.74453 7.3 6.81L14 11L20.7 6.81C20.7945 6.74453 20.9014 6.69893 21.014 6.67595C21.1267 6.65297 21.2429 6.65309 21.3555 6.6763C21.4681 6.69951 21.5749 6.74533 21.6693 6.811C21.7637 6.87666 21.8438 6.96079 21.9047 7.0583C21.9657 7.15581 22.0062 7.26468 22.0238 7.37831C22.0415 7.49194 22.0359 7.60796 22.0074 7.71937C21.9789 7.83078 21.9281 7.93525 21.8581 8.02645C21.7881 8.11766 21.7003 8.19371 21.6 8.25Z"
                        fill="#484848"
                      />
                    </g>
                  </svg>
                </a>
                <span id="footer-email">censusokoi515@gmail.com</span>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
