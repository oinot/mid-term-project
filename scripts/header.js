
class Header extends HTMLElement {
    constructor() {
      super();
    }

connectedCallback() {
    this.innerHTML = `
          <style>
          .nav-link:hover {
            padding-bottom: 10px;
            border-bottom: 3px solid #072ac8;
          }
          .active {
            color:#072ac8;
            padding-bottom: 10px;
          
          }
          /* navbar */
          @media screen and (min-width: 768px) {
            .navbar {
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 52px;
              margin: 70px 170px 100px;
            }
          
            .navbar ul {
              margin: 0;
              padding: 0;
              list-style-type: none;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 33%;
            }
            .btn-nav {
              border: none;
              padding: 15px;
              cursor: pointer;
            }
            .btn-nav > a{
              color: #ecf7ff;
            }
            .menu-toggle,
            .mobile-only {
              display: none;
            }
          }
        @media screen and (max-width: 768px) {
        /* hamburger menu */
        
        .menu-toggle {
          position: relative;
          display: flex;
          margin-right: 10px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 3.2rem;
          height: 3.2rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }
        .hamburger {
          width: 2.4rem;
          height: 3px;
          background-color: #072ac8;
          border-radius: 2px;
          border: none;
          transition: all 0.7s ease-out;
        }
        .hamburger::before,
        .hamburger::after {
          content: "";
          position: absolute;
          width: 2.4rem;
          height: 3px;
          background-color: #072ac8;
          border-radius: 2px;
          border: none;
        }
        .hamburger::before {
          transform: translateY(-8px);
        }
        .hamburger::after {
          transform: translateY(8px);
        }
        
        .open .hamburger {
          background: transparent;
        }
        .open .hamburger::before {
          transform-origin: (0, 0);
          transform: rotate(45deg);
        }
        .open .hamburger::after {
          transform-origin: (0, 0);
          transform: rotate(-45deg);
        }
        .open .nav-list {
          transform: translateX(0);
        }
        
        .navbar-brand {
            padding: 1rem;
        }
        
        /* list mobile */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items:initial;
          }
          .nav-list {
            list-style: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 70%;
            height: 100%;
            background-color: #FFC600;
            padding: 4.4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            z-index: 1250;
            text-transform: uppercase;
            transform: translateX(-100%);
            transition: transform 0.5s;
          }
          .open .nav-list {
            transform: translateX(0);
          }
        
          .btn-nav {
            display: none;
          }
        }
        </style>
        <header>
        <nav class="navbar">
        <div class="navbar-brand">
          <a class="nav-link" href="../index.html">  
            <svg width="62" height="20" viewBox="0 0 62 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.9766 17.2773C14.1953 17.9492 13.3203 18.4648 12.3516 18.8242C11.3828 19.1836 10.3789 19.3633 9.33984 19.3633C8.54297 19.3633 7.77344 19.2578 7.03125 19.0469C6.29688 18.8438 5.60547 18.5547 4.95703 18.1797C4.31641 17.7969 3.73047 17.3398 3.19922 16.8086C2.66797 16.2773 2.21094 15.6914 1.82812 15.0508C1.45312 14.4023 1.16016 13.7109 0.949219 12.9766C0.746094 12.2344 0.644531 11.4648 0.644531 10.668C0.644531 9.87109 0.746094 9.10156 0.949219 8.35938C1.16016 7.61719 1.45312 6.92578 1.82812 6.28516C2.21094 5.63672 2.66797 5.04688 3.19922 4.51562C3.73047 3.98438 4.31641 3.53125 4.95703 3.15625C5.60547 2.77344 6.29688 2.48047 7.03125 2.27734C7.77344 2.06641 8.54297 1.96094 9.33984 1.96094C10.3789 1.96094 11.3828 2.14062 12.3516 2.5C13.3203 2.85156 14.1953 3.36719 14.9766 4.04688L13.1953 6.97656C12.7031 6.44531 12.1211 6.03906 11.4492 5.75781C10.7773 5.46875 10.0742 5.32422 9.33984 5.32422C8.59766 5.32422 7.90234 5.46484 7.25391 5.74609C6.60547 6.02734 6.03906 6.41016 5.55469 6.89453C5.07031 7.37109 4.6875 7.9375 4.40625 8.59375C4.125 9.24219 3.98438 9.93359 3.98438 10.668C3.98438 11.4023 4.125 12.0938 4.40625 12.7422C4.6875 13.3828 5.07031 13.9453 5.55469 14.4297C6.03906 14.9141 6.60547 15.2969 7.25391 15.5781C7.90234 15.8594 8.59766 16 9.33984 16C10.0742 16 10.7773 15.8594 11.4492 15.5781C12.1211 15.2891 12.7031 14.8789 13.1953 14.3477L14.9766 17.2773Z"
                    fill="#072AC8" />
                <path
                    d="M20.3672 3.03906C20.3672 3.33594 20.3086 3.61328 20.1914 3.87109C20.082 4.12891 19.9297 4.35547 19.7344 4.55078C19.5391 4.73828 19.3086 4.89062 19.043 5.00781C18.7852 5.11719 18.5078 5.17188 18.2109 5.17188C17.9141 5.17188 17.6328 5.11719 17.3672 5.00781C17.1094 4.89062 16.8828 4.73828 16.6875 4.55078C16.5 4.35547 16.3477 4.12891 16.2305 3.87109C16.1211 3.61328 16.0664 3.33594 16.0664 3.03906C16.0664 2.75 16.1211 2.47656 16.2305 2.21875C16.3477 1.95312 16.5 1.72656 16.6875 1.53906C16.8828 1.34375 17.1094 1.19141 17.3672 1.08203C17.6328 0.964844 17.9141 0.90625 18.2109 0.90625C18.5078 0.90625 18.7852 0.964844 19.043 1.08203C19.3086 1.19141 19.5391 1.34375 19.7344 1.53906C19.9297 1.72656 20.082 1.95312 20.1914 2.21875C20.3086 2.47656 20.3672 2.75 20.3672 3.03906ZM19.8164 19H16.5938V6.44922H19.8164V19Z"
                    fill="#072AC8" />
                <path
                    d="M25.4648 19H22.2656V6.44922H23.0391L24.0938 7.9375C24.6094 7.46875 25.1953 7.10938 25.8516 6.85938C26.5078 6.60156 27.1875 6.47266 27.8906 6.47266H30.7148V9.66016H27.8906C27.5547 9.66016 27.2383 9.72266 26.9414 9.84766C26.6445 9.97266 26.3867 10.1445 26.168 10.3633C25.9492 10.582 25.7773 10.8398 25.6523 11.1367C25.5273 11.4336 25.4648 11.75 25.4648 12.0859V19Z"
                    fill="#072AC8" />
                <path
                    d="M42.9375 8.94531L40.5938 11.3008C40.4766 10.9727 40.3164 10.6797 40.1133 10.4219C39.9102 10.1562 39.6797 9.93359 39.4219 9.75391C39.1719 9.57422 38.8984 9.4375 38.6016 9.34375C38.3047 9.25 38 9.20312 37.6875 9.20312C37.25 9.20312 36.8359 9.29297 36.4453 9.47266C36.0625 9.65234 35.7266 9.90625 35.4375 10.2344C35.1562 10.5547 34.9336 10.9375 34.7695 11.3828C34.6055 11.8281 34.5234 12.3203 34.5234 12.8594C34.5234 13.2969 34.6055 13.707 34.7695 14.0898C34.9336 14.4727 35.1562 14.8086 35.4375 15.0977C35.7266 15.3867 36.0625 15.6133 36.4453 15.7773C36.8359 15.9414 37.25 16.0234 37.6875 16.0234C38 16.0234 38.3008 15.9805 38.5898 15.8945C38.8789 15.8086 39.1484 15.6875 39.3984 15.5312C39.6562 15.3672 39.8828 15.1719 40.0781 14.9453C40.2812 14.7109 40.4453 14.4531 40.5703 14.1719L42.9141 16.5273C42.6172 16.9492 42.2734 17.3281 41.8828 17.6641C41.5 18 41.082 18.2852 40.6289 18.5195C40.1836 18.7539 39.7109 18.9297 39.2109 19.0469C38.7188 19.1719 38.2109 19.2344 37.6875 19.2344C36.8047 19.2344 35.9727 19.0703 35.1914 18.7422C34.418 18.4062 33.7383 17.9492 33.1523 17.3711C32.5742 16.793 32.1172 16.1172 31.7812 15.3438C31.4453 14.5703 31.2773 13.7422 31.2773 12.8594C31.2773 11.8984 31.4453 11 31.7812 10.1641C32.1172 9.32812 32.5742 8.60156 33.1523 7.98438C33.7383 7.35938 34.418 6.86719 35.1914 6.50781C35.9727 6.14844 36.8047 5.96875 37.6875 5.96875C38.2109 5.96875 38.7227 6.03516 39.2227 6.16797C39.7305 6.30078 40.2109 6.49609 40.6641 6.75391C41.125 7.00391 41.5469 7.3125 41.9297 7.67969C42.3203 8.04688 42.6562 8.46875 42.9375 8.94531Z"
                    fill="#072AC8" />
                <path d="M47.7305 19H44.5078V1.45703H47.7305V19Z" fill="#072AC8" />
                <path
                    d="M55.1719 15.9297C55.2969 15.9688 55.4219 15.9961 55.5469 16.0117C55.6719 16.0195 55.7969 16.0234 55.9219 16.0234C56.2344 16.0234 56.5352 15.9805 56.8242 15.8945C57.1133 15.8086 57.3828 15.6875 57.6328 15.5312C57.8906 15.3672 58.1172 15.1719 58.3125 14.9453C58.5156 14.7109 58.6797 14.4531 58.8047 14.1719L61.1484 16.5273C60.8516 16.9492 60.5078 17.3281 60.1172 17.6641C59.7344 18 59.3164 18.2852 58.8633 18.5195C58.418 18.7539 57.9453 18.9297 57.4453 19.0469C56.9531 19.1719 56.4453 19.2344 55.9219 19.2344C55.0391 19.2344 54.207 19.0703 53.4258 18.7422C52.6523 18.4141 51.9727 17.957 51.3867 17.3711C50.8086 16.7852 50.3516 16.0898 50.0156 15.2852C49.6797 14.4727 49.5117 13.582 49.5117 12.6133C49.5117 11.6211 49.6797 10.7148 50.0156 9.89453C50.3516 9.07422 50.8086 8.375 51.3867 7.79688C51.9727 7.21875 52.6523 6.76953 53.4258 6.44922C54.207 6.12891 55.0391 5.96875 55.9219 5.96875C56.4453 5.96875 56.957 6.03125 57.457 6.15625C57.957 6.28125 58.4297 6.46094 58.875 6.69531C59.3281 6.92969 59.75 7.21875 60.1406 7.5625C60.5312 7.89844 60.875 8.27734 61.1719 8.69922L55.1719 15.9297ZM56.8125 9.33203C56.6641 9.27734 56.5156 9.24219 56.3672 9.22656C56.2266 9.21094 56.0781 9.20312 55.9219 9.20312C55.4844 9.20312 55.0703 9.28516 54.6797 9.44922C54.2969 9.60547 53.9609 9.83203 53.6719 10.1289C53.3906 10.4258 53.168 10.7852 53.0039 11.207C52.8398 11.6211 52.7578 12.0898 52.7578 12.6133C52.7578 12.7305 52.7617 12.8633 52.7695 13.0117C52.7852 13.1602 52.8047 13.3125 52.8281 13.4688C52.8594 13.6172 52.8945 13.7617 52.9336 13.9023C52.9727 14.043 53.0234 14.168 53.0859 14.2773L56.8125 9.33203Z"
                    fill="#072AC8" />
            </svg>
          </a>  
        </div>
        <ul class="nav-list">
            <li class="nav-item">
                <a class="nav-link" href="index.html"> Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../pages/project-page.html"> Projects </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#services"> Services </a>
            </li>
            <li class="nav-item mobile-only">
                <a class="nav-link" href="../pages/contact.html"> contact Us </a>
            </li>
        </ul>
        <form action="/pages/contact.html">
        <button class="btn-nav btn btn-cta" >
        <span class = "headline-text-medium"> Contact Us </span>
        </button>
        </form>
        <div class="menu-toggle">
            <div class="hamburger"></div>
            </div>
    </nav>
        </header>
`;
}
}

customElements.define('header-component', Header);